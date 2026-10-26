import { SubPageHero } from '@/components/subpage/SubPageHero';
import { Breadcrumb } from '@/components/subpage/Breadcrumb';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { ContentSection } from '@/components/subpage/ContentSection';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: '공지사항',
    description: '진한의원 공지사항 안내 페이지입니다. 현재 상세 콘텐츠를 준비하고 있습니다.',
    path: '/about/notices',
  }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <SubPageHero title="공지사항" desc="진한의원의 소식을 전해드립니다." />
      <Breadcrumb items={[{ label: '진한의원 소개' }, { label: '공지사항' }]} />
      <ContentSection>
        <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500">
          콘텐츠 준비중입니다.
        </div>
      </ContentSection>
    </>
  );
}
