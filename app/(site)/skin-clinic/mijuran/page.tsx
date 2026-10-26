import type { Metadata } from 'next';
import { SubPageHero } from '@/components/subpage/SubPageHero';
import { createPageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/subpage/Breadcrumb';
import { ContentSection } from '@/components/subpage/ContentSection';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: '미주안',
    description: '진한의원 피부 클리닉 미주안 안내 페이지입니다. 현재 상세 콘텐츠를 준비하고 있습니다.',
    path: '/skin-clinic/mijuran',
  }),
  robots: { index: false, follow: true },
};

export default function MijuanPage() {
  return (
    <>
      <SubPageHero title="미주안" desc="잔주름, 속건조" />
      <Breadcrumb items={[{ label: '피부 클리닉' }, { label: '미주안' }]} />
      <ContentSection>
        <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500">
          콘텐츠 준비중입니다.
        </div>
      </ContentSection>
    </>
  );
}
