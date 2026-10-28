import { SubPageHero } from '@/components/subpage/SubPageHero';
import { Breadcrumb } from '@/components/subpage/Breadcrumb';
import { ContentSection } from '@/components/subpage/ContentSection';

export default function Page() {
  return (
    <>
      <SubPageHero title="진 다이어트 시스템" desc="개인별 맞춤치료 / 3단계 프로그램" />
      <Breadcrumb items={[{ label: '진한의원 소개', href: '/about/story' }, { label: '진 다이어트 시스템(개인별 맞춤치료/3단계 프로그램)' }]} />
      <ContentSection>
        <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500">
          콘텐츠 준비중입니다.
        </div>
      </ContentSection>
    </>
  );
}
