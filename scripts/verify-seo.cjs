#!/usr/bin/env node
'use strict';

// Read-only integration checks against a running Next.js deployment.
// Usage: node scripts/verify-seo.cjs [http://localhost:3014] [--warn-h1]
const EXPECTED_ORIGIN = 'https://jinclinic.co.kr';
const EXPECTED_IMAGE = `${EXPECTED_ORIGIN}/images/seo/jinclinic-og.png`;
const EXPECTED_LOGO = `${EXPECTED_ORIGIN}/images/logo_black.png`;
const EXPECTED_PAGE_COUNT = 32;
const args = process.argv.slice(2);
const warningsOnlyForH1 = args.includes('--warn-h1');
const positional = args.filter((arg) => !arg.startsWith('--'));

if (args.includes('--help')) {
  console.log('Usage: node scripts/verify-seo.cjs [baseURL] [--warn-h1]');
  console.log('Default baseURL: http://localhost:3014. Canonical URLs must remain https://jinclinic.co.kr.');
  process.exit(0);
}
if (positional.length > 1 || args.some((arg) => arg.startsWith('--') && arg !== '--warn-h1')) {
  console.error('Unknown argument. Use --help for usage.');
  process.exit(2);
}

let base;
try {
  base = new URL(positional[0] || 'http://localhost:3014');
  if (!['http:', 'https:'].includes(base.protocol) || base.pathname !== '/' || base.search || base.hash || base.username || base.password) {
    throw new Error('baseURL must be an HTTP(S) origin without a path, query, or credentials.');
  }
} catch (error) {
  console.error(`Invalid baseURL: ${error.message}`);
  process.exit(2);
}

const failures = [];
const warnings = [];
const pageReports = [];
let requests = 0;
let assertions = 0;

function check(condition, scope, message, warning = false) {
  assertions += 1;
  if (!condition) (warning ? warnings : failures).push(`${scope}: ${message}`);
  return condition;
}

function decodeEntities(value) {
  const named = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (match, entity) => {
    if (entity[0] !== '#') return named[entity.toLowerCase()] || match;
    const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
    return code >= 0 && code <= 0x10ffff ? String.fromCodePoint(code) : match;
  });
}

function textContent(value) {
  return decodeEntities(value.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function attributes(tag) {
  const attrs = Object.create(null);
  const body = tag.replace(/^<\/?[\w:-]+/, '').replace(/\/?\s*>$/, '');
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  for (const match of body.matchAll(pattern)) {
    attrs[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return attrs;
}

function parsePage(html, scope) {
  const schema = [];
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    const attrs = attributes(`<script${match[1]}>`);
    if (attrs.type?.toLowerCase() !== 'application/ld+json') continue;
    try {
      schema.push(JSON.parse(match[2]));
    } catch (error) {
      check(false, scope, `Invalid JSON-LD: ${error.message}`);
    }
  }
  // Search the full document: Next.js can stream metadata after the body starts.
  // Exclude script/template strings so serialized hydration data is never counted.
  const markup = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style|template)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '');
  const meta = new Map();
  for (const match of markup.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = attributes(match[0]);
    const key = (attrs.name || attrs.property || '').toLowerCase();
    if (!key) continue;
    if (!meta.has(key)) meta.set(key, []);
    meta.get(key).push(attrs.content || '');
  }
  const canonicals = [...markup.matchAll(/<link\b[^>]*>/gi)]
    .map((match) => attributes(match[0]))
    .filter((attrs) => (attrs.rel || '').toLowerCase().split(/\s+/).includes('canonical'))
    .map((attrs) => attrs.href || '');
  return {
    meta,
    canonicals,
    schema,
    titles: [...markup.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/gi)].map((match) => textContent(match[1])),
    h1: [...markup.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/gi)].map((match) => textContent(match[1])),
  };
}

async function get(path) {
  const url = new URL(path, base);
  if (url.origin !== base.origin) throw new Error(`Refusing unexpected origin: ${url.origin}`);
  requests += 1;
  const response = await fetch(url, {
    method: 'GET',
    redirect: 'manual',
    headers: { 'User-Agent': 'JinClinic-SEO-Verification/1.0' },
    signal: AbortSignal.timeout(30000),
  });
  const bytes = Buffer.from(await response.arrayBuffer());
  return { status: response.status, headers: response.headers, body: bytes.toString('utf8'), bytes };
}

async function guarded(scope, action) {
  try {
    await action();
  } catch (error) {
    check(false, scope, `Request/check failed: ${error.message}`);
  }
}

function oneMeta(page, name, scope) {
  const values = page.meta.get(name) || [];
  check(values.length === 1 && values[0].trim().length > 0, scope, `${name} must have exactly one non-empty value (found ${values.length}).`);
  return values[0] || '';
}

function hasNoindex(page, response) {
  const values = ['robots', 'googlebot', 'bingbot'].flatMap((key) => page.meta.get(key) || []);
  values.push(response.headers.get('x-robots-tag') || '');
  return values.some((value) => /\bnoindex\b/i.test(value));
}

function sameUrl(actual, expected) {
  try {
    // Next.js may omit the root trailing slash; URL.href normalizes that case
    // while retaining any incorrect query string, hash, host, or path.
    return new URL(actual).href === new URL(expected).href;
  } catch {
    return false;
  }
}

function checkCanonical(page, canonical, scope) {
  check(page.canonicals.length === 1 && sameUrl(page.canonicals[0], canonical), scope,
    `Expected one canonical ${canonical}; received ${JSON.stringify(page.canonicals)}.`);
}

function schemaNodes(value, output = []) {
  if (Array.isArray(value)) value.forEach((item) => schemaNodes(item, output));
  else if (value && typeof value === 'object') {
    if (value['@type']) output.push(value);
    Object.values(value).forEach((item) => schemaNodes(item, output));
  }
  return output;
}

function ofType(nodes, type) {
  return nodes.filter((node) => (Array.isArray(node['@type']) ? node['@type'] : [node['@type']]).includes(type));
}

function checkSchema(page, scope) {
  const nodes = schemaNodes(page.schema);
  const clinics = ofType(nodes, 'MedicalClinic');
  const websites = ofType(nodes, 'WebSite');
  check(clinics.length === 1, scope, `Expected one MedicalClinic, found ${clinics.length}.`);
  check(websites.length === 1, scope, `Expected one WebSite, found ${websites.length}.`);
  const clinic = clinics[0];
  if (clinic) {
    const address = clinic.address || {};
    check(clinic.name === '진한의원', scope, 'MedicalClinic.name does not match the clinic.');
    check(clinic['@id'] === `${EXPECTED_ORIGIN}/#clinic`, scope, 'MedicalClinic @id mismatch.');
    check(clinic.url === EXPECTED_ORIGIN || clinic.url === `${EXPECTED_ORIGIN}/`, scope, 'MedicalClinic URL mismatch.');
    check(clinic.telephone === '+82-51-714-0040', scope, 'MedicalClinic telephone mismatch.');
    check(address['@type'] === 'PostalAddress'
      && address.streetAddress === '좌동 1473-2 엘리움 빌딩 6층'
      && address.addressLocality === '해운대구'
      && address.addressRegion === '부산광역시'
      && address.addressCountry === 'KR', scope, 'MedicalClinic address mismatch.');
    check(clinic.logo === EXPECTED_LOGO, scope, 'MedicalClinic logo URL mismatch.');
    check(clinic.image === EXPECTED_IMAGE, scope, 'MedicalClinic image URL mismatch.');
  }
  const website = websites[0];
  if (website) {
    check(website.name === '진한의원' && website.inLanguage === 'ko-KR', scope, 'WebSite name/language mismatch.');
    check(website.url === EXPECTED_ORIGIN || website.url === `${EXPECTED_ORIGIN}/`, scope, 'WebSite URL mismatch.');
    check(website.publisher?.['@id'] === `${EXPECTED_ORIGIN}/#clinic`, scope, 'WebSite publisher mismatch.');
  }
}

async function verifyPublished(url) {
  const path = new URL(url).pathname;
  const response = await get(path);
  if (!check(response.status === 200, path, `Expected HTTP 200, received ${response.status}.`)) return;
  check((response.headers.get('content-type') || '').includes('text/html'), path, 'Expected HTML response.');
  const page = parsePage(response.body, path);
  check(!hasNoindex(page, response), path, 'Published page is noindex.');
  check(page.titles.length === 1 && !!page.titles[0], path, `Expected one non-empty title, received ${JSON.stringify(page.titles)}.`);
  const description = oneMeta(page, 'description', path);
  checkCanonical(page, url, path);
  const ogTitle = oneMeta(page, 'og:title', path);
  const ogDescription = oneMeta(page, 'og:description', path);
  check(ogTitle === page.titles[0], path, 'OG title differs from page title.');
  check(ogDescription === description, path, 'OG description differs from page description.');
  check(sameUrl(oneMeta(page, 'og:url', path), url), path, 'OG URL is not the canonical URL.');
  check(oneMeta(page, 'og:type', path) === 'website', path, 'OG type must be website.');
  check(oneMeta(page, 'og:locale', path) === 'ko_KR', path, 'OG locale must be ko_KR.');
  check(oneMeta(page, 'og:site_name', path) === '진한의원', path, 'OG site name mismatch.');
  check(oneMeta(page, 'og:image', path) === EXPECTED_IMAGE, path, 'OG image URL mismatch.');
  check(oneMeta(page, 'twitter:card', path) === 'summary_large_image', path, 'Twitter card mismatch.');
  check(oneMeta(page, 'twitter:title', path) === page.titles[0], path, 'Twitter title differs from page title.');
  check(oneMeta(page, 'twitter:description', path) === description, path, 'Twitter description differs from page description.');
  check(oneMeta(page, 'twitter:image', path) === EXPECTED_IMAGE, path, 'Twitter image URL mismatch.');
  const robots = oneMeta(page, 'robots', path).toLowerCase().replace(/\s+/g, '');
  check(robots.split(',').includes('index') && robots.split(',').includes('follow') && robots.includes('max-image-preview:large'), path,
    'Published page must declare index, follow, and max-image-preview:large.');
  check(page.h1.length === 1 && !!page.h1[0], path, `Expected one non-empty H1; received ${JSON.stringify(page.h1)}.`, warningsOnlyForH1);
  checkSchema(page, path);
  pageReports.push({ path, title: page.titles[0] || '', description });
}

async function parallel(items, action, concurrency = 4) {
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const item = items[cursor++];
      await guarded(item, () => action(item));
    }
  }));
}

function checkUnique(field) {
  const groups = new Map();
  for (const page of pageReports) {
    const value = page[field].replace(/\s+/g, ' ').trim();
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(page.path);
  }
  for (const [value, paths] of groups) {
    check(paths.length === 1, field, `Duplicate ${JSON.stringify(value)} on ${paths.join(', ')}.`);
  }
  check(groups.size === EXPECTED_PAGE_COUNT, field, `Expected ${EXPECTED_PAGE_COUNT} unique values, found ${groups.size}.`);
}

async function main() {
  console.log(`Read-only SEO verification: ${base.origin}`);
  const sitemap = await get('/sitemap.xml');
  check(sitemap.status === 200, '/sitemap.xml', `Expected HTTP 200, received ${sitemap.status}.`);
  const urls = [...sitemap.body.matchAll(/<loc\b[^>]*>([\s\S]*?)<\/loc\s*>/gi)].map((match) => decodeEntities(match[1].trim()));
  check(urls.length === EXPECTED_PAGE_COUNT, '/sitemap.xml', `Expected ${EXPECTED_PAGE_COUNT} URLs, found ${urls.length}.`);
  check(new Set(urls).size === urls.length, '/sitemap.xml', 'Duplicate sitemap URLs.');
  const validUrls = urls.filter((url) => {
    try {
      const parsed = new URL(url);
      return check(parsed.origin === EXPECTED_ORIGIN && !parsed.search && !parsed.hash, '/sitemap.xml', `Unexpected sitemap URL: ${url}`);
    } catch {
      check(false, '/sitemap.xml', `Invalid URL: ${url}`);
      return false;
    }
  });
  await parallel(validUrls, verifyPublished);
  check(pageReports.length === EXPECTED_PAGE_COUNT, 'published pages', `Fully parsed ${pageReports.length}/${EXPECTED_PAGE_COUNT} pages.`);
  checkUnique('title');
  checkUnique('description');

  await guarded('/robots.txt', async () => {
    const response = await get('/robots.txt');
    check(response.status === 200, '/robots.txt', `Expected HTTP 200, received ${response.status}.`);
    check(/^sitemap:\s*https:\/\/jinclinic\.co\.kr\/sitemap\.xml\s*$/im.test(response.body), '/robots.txt', 'Missing canonical sitemap declaration.');
    check(/^user-agent:\s*\*\s*$/im.test(response.body) && /^allow:\s*\/\s*$/im.test(response.body), '/robots.txt', 'Missing public crawl permission.');
    check(!/^disallow:\s*\/\s*$/im.test(response.body), '/robots.txt', 'Root crawling is disallowed.');
  });

  await guarded('/images/seo/jinclinic-og.png', async () => {
    const response = await get('/images/seo/jinclinic-og.png');
    check(response.status === 200, 'OG image', `Expected HTTP 200, received ${response.status}.`);
    check((response.headers.get('content-type') || '').split(';')[0] === 'image/png', 'OG image', 'Expected image/png.');
    const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
    const validPng = response.bytes.length >= 24 && response.bytes.subarray(0, 8).equals(signature) && response.bytes.subarray(12, 16).toString('ascii') === 'IHDR';
    check(validPng, 'OG image', 'Invalid PNG signature/IHDR.');
    if (validPng) check(response.bytes.readUInt32BE(16) === 1200 && response.bytes.readUInt32BE(20) === 630, 'OG image', 'Expected PNG dimensions 1200x630.');
  });
  await guarded('/images/logo_black.png', async () => {
    const response = await get('/images/logo_black.png');
    check(response.status === 200 && (response.headers.get('content-type') || '').startsWith('image/'), 'Clinic logo', 'Logo must return HTTP 200 and an image content type.');
  });

  const placeholders = ['/diet-medicine/allinone', '/skin-clinic/mijuran', '/events/notices', '/women-postpartum/menstruation'];
  await parallel(placeholders, async (path) => {
    const response = await get(path);
    check(response.status === 200, path, `Expected existing preparation page HTTP 200, received ${response.status}.`);
    const page = parsePage(response.body, path);
    check(hasNoindex(page, response), path, 'Preparation page must be noindex.');
    checkCanonical(page, `${EXPECTED_ORIGIN}${path}`, path);
  });

  const unknown = [
    ...['diet-medicine', 'custom-diet', 'women-postpartum', 'skin-clinic', 'immunity-tonic'].map((category) => `/${category}/seo-audit-nonexistent-20261026`),
    '/events/unknown', '/events/__proto__', '/events/constructor', '/about/notices/123',
  ];
  await parallel(unknown, async (path) => {
    const response = await get(path);
    check(response.status === 404, path, `Unknown content must return HTTP 404, received ${response.status}.`);
  });

  await guarded('/custom-diet/middle-aged', async () => {
    const response = await get('/custom-diet/middle-aged');
    check(response.status === 308, '/custom-diet/middle-aged', `Expected permanent HTTP 308, received ${response.status}.`);
    const location = response.headers.get('location');
    check(!!location && new URL(location, base).pathname === '/custom-diet/middle-age', '/custom-diet/middle-aged', `Unexpected redirect target: ${location}`);
  });

  await parallel(['/?utm_source=seo-verification', '/custom-diet/edema?utm_source=seo-verification&ref=audit'], async (path) => {
    const response = await get(path);
    check(response.status === 200, path, `Expected HTTP 200, received ${response.status}.`);
    const page = parsePage(response.body, path);
    const expected = `${EXPECTED_ORIGIN}${new URL(path, base).pathname}`;
    checkCanonical(page, expected, path);
    check(sameUrl(oneMeta(page, 'og:url', path), expected), path, 'OG URL must match the query-free canonical URL.');
  });

  console.log(`Checked ${pageReports.length}/${EXPECTED_PAGE_COUNT} published pages, ${requests} GET requests, ${assertions} assertions.`);
  for (const warning of warnings) console.warn(`WARN ${warning}`);
  for (const failure of failures.slice(0, 80)) console.error(`FAIL ${failure}`);
  if (failures.length > 80) console.error(`... ${failures.length - 80} additional failures omitted.`);
  console.log(`${failures.length ? 'FAILED' : 'PASSED'}: ${failures.length} errors, ${warnings.length} warnings.`);
  process.exitCode = failures.length ? 1 : 0;
}

main().catch((error) => {
  console.error(`Verification aborted: ${error.message}`);
  process.exitCode = 1;
});
