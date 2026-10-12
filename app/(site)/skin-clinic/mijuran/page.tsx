import type { Metadata } from 'next';
import { SubPageHero } from '@/components/subpage/SubPageHero';
import { Breadcrumb } from '@/components/subpage/Breadcrumb';
import { ContentSection } from '@/components/subpage/ContentSection';

export const metadata: Metadata = {
  title: '미주안 | 진한의원',
  description: '진한의원 피부 클리닉 미주안(잔주름, 속건조) 안내',
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
