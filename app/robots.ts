import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/design-review/'],
    },
    sitemap: 'https://jinclinic.co.kr/sitemap.xml',
  };
}
