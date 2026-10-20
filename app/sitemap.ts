import type { MetadataRoute } from 'next';
import { EVENT_ITEMS } from '@/lib/constants/events';

const SITE_ORIGIN = 'https://jinclinic.co.kr';

// Include published content only. Placeholder pages and the unused
// /custom-diet/middle-aged variant are intentionally omitted.
const PUBLISHED_PATHS = [
  '/',
  '/about/story',
  '/diet-medicine/slim',
  '/diet-medicine/zero',
  '/diet-medicine/tok',
  '/diet-medicine/injection-discomfort',
  '/custom-diet/detox',
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
  '/custom-diet/constitution',
  '/women-postpartum/care',
  '/women-postpartum/miscarriage',
  '/women-postpartum/menopause',
  '/skin-clinic/lifting',
  '/immunity-tonic/thyroid',
  '/reservation',
  '/events',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...PUBLISHED_PATHS,
    ...EVENT_ITEMS.map((event) => `/events/${event.slug}`),
  ];
  return paths.map((path) => ({
    url: `${SITE_ORIGIN}${path}`,
  }));
}
