// Run from the repository root: node scripts/generate-social-image.cjs <Korean-static-font.ttf>
// The font is used locally to render pixels, and is not copied into the website.
/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS image generator. */
const fs = require('node:fs/promises');
const path = require('node:path');
const React = require('react');
const { ImageResponse } = require('next/og');

async function main() {
  const root = process.cwd();
  if (!process.argv[2]) throw new Error('Pass a locally licensed, non-variable Korean TTF font path.');
  const font = await fs.readFile(process.argv[2]);
  const logo = await fs.readFile(path.join(root, 'public/images/logo_black.png'));
  const h = React.createElement;
  const image = new ImageResponse(
    h('div', { style: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '64px 78px', background: '#f7f9fc', color: '#083560', fontFamily: 'Noto Sans KR', borderTop: '16px solid #083560' } },
      h('img', { src: `data:image/png;base64,${logo.toString('base64')}`, width: 234, height: 85, alt: '' }),
      h('div', { style: { marginTop: 44, fontSize: 64, fontWeight: 700, letterSpacing: '-3px' } }, '부산 해운대 진한의원'),
      h('div', { style: { marginTop: 16, fontSize: 28, color: '#476786' } }, '개인별 맞춤 진료 · 다이어트 한약'),
      h('div', { style: { display: 'flex', marginTop: 'auto', borderTop: '1px solid #d7e0ec', paddingTop: 24, fontSize: 23, justifyContent: 'space-between' } },
        h('span', null, '장산역 · 엘리움 빌딩 6층'),
        h('span', null, 'jinclinic.co.kr'),
      ),
    ),
    { width: 1200, height: 630, fonts: [{ name: 'Noto Sans KR', data: font, style: 'normal', weight: 400 }] },
  );
  const destination = path.join(root, 'public/images/seo/jinclinic-og.png');
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, Buffer.from(await image.arrayBuffer()));
  process.stdout.write('Generated public/images/seo/jinclinic-og.png (1200x630)\n');
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
