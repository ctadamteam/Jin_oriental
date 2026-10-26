import type { MetadataRoute } from 'next';
import { PUBLISHED_PAGES, SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLISHED_PAGES.map(({ path }) => ({
    url: new URL(path, SITE_URL).href,
    // Metadata and clinic structured data were revised on this date.
    // Change this only when published content/metadata changes, never per build.
    lastModified: '2026-10-26',
  }));
}
