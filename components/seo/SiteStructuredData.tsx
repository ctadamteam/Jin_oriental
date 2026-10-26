import { SITE_CONFIG } from '@/lib/constants/site';
import { SITE_URL } from '@/lib/seo';
import { JsonLd } from './JsonLd';

const clinicId = `${SITE_URL}/#clinic`;
const fullDays = ['Monday', 'Tuesday', 'Wednesday', 'Friday'].map((day) => `https://schema.org/${day}`);

export function SiteStructuredData() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalClinic',
            '@id': clinicId,
            name: SITE_CONFIG.name,
            url: SITE_URL,
            description: SITE_CONFIG.description,
            logo: `${SITE_URL}/images/logo_black.png`,
            image: `${SITE_URL}/images/seo/jinclinic-og.png`,
            telephone: '+82-51-714-0040',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '좌동 1473-2 엘리움 빌딩 6층',
              addressLocality: '해운대구',
              addressRegion: '부산광역시',
              addressCountry: 'KR',
            },
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: fullDays, opens: '09:30', closes: '13:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: fullDays, opens: '14:00', closes: '18:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['https://schema.org/Thursday', 'https://schema.org/Saturday'], opens: '09:30', closes: '14:00' },
            ],
            sameAs: [SITE_CONFIG.links.kakao, SITE_CONFIG.links.blog, SITE_CONFIG.links.instagram],
            hasMap: 'https://maps.google.com/maps?q=35.168815,129.1757451',
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_CONFIG.name,
            inLanguage: 'ko-KR',
            publisher: { '@id': clinicId },
          },
        ],
      }}
    />
  );
}
