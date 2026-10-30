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

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLISHED_PAGES.map(({ path }) => ({
    url: new URL(path, SITE_URL).href,
    // Use the verified content revision date, never the build time.
    lastModified: UPDATED_PATHS.has(path) ? '2026-10-30' : '2026-10-26',
  }));
}
