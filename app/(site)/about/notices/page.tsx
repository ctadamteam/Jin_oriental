import { SubPageHero } from '@/components/subpage/SubPageHero';
import { Breadcrumb } from '@/components/subpage/Breadcrumb';
import { ContentSection } from '@/components/subpage/ContentSection';

export default function Page() {
  return (
    <>
      <SubPageHero title="서브페이지 타이틀" desc="서브페이지 설명이 들어갑니다." />
      <Breadcrumb items={[{ label: 'Depth 1' }, { label: 'Depth 2' }]} />
      <ContentSection>
        <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500">
          콘텐츠 준비중입니다.
        </div>
      </ContentSection>
    </>
  );
}
