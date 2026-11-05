import type { MetadataRoute } from 'next';
import { PUBLISHED_PAGES, SITE_URL } from '@/lib/seo';

const UPDATED_PATHS = new Set([
  "/",
  "/events",
  "/about/diet-system",
  "/diet-medicine/allinone",
  "/diet-medicine/rebound-prevention",
  "/events/fat-allkill-capsule",
  "/events/seasonal-immunity-kit",
  "/events/belly-fat-edema-capsule",
  "/events/power-tolerance-slim-hwan"
]);

const NOVEMBER_UPDATED_PATHS = new Set([
  '/',
  '/about/diet-system',
  '/diet-medicine/resistance-recovery',
  '/events',
  '/events/fat-allkill-capsule',
  '/custom-diet/visceral',
  '/custom-diet/edema',
  '/custom-diet/chronic-inflammation',
  '/custom-diet/pediatric',
  '/custom-diet/autonomic',
  '/custom-diet/qi-blood',
  '/custom-diet/hormone',
  '/custom-diet/middle-age',
  '/custom-diet/severe',
  '/custom-diet/postpartum',
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLISHED_PAGES.map(({ path }) => ({
    url: new URL(path, SITE_URL).href,
    // Use the verified content revision date, never the build time.
    lastModified: NOVEMBER_UPDATED_PATHS.has(path)
      ? '2026-11-05'
      : UPDATED_PATHS.has(path) ? '2026-10-30' : '2026-10-26',
  }));
}
