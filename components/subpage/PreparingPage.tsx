import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MENUS } from '@/lib/constants/menu';
import { createPageMetadata } from '@/lib/seo';
import { SubPageHero } from './SubPageHero';
import { Breadcrumb } from './Breadcrumb';
import { ContentSection } from './ContentSection';

function getMenuPage(path: string) {
  for (const menu of MENUS) {
    const page = menu.subMenus.find((item) => item.href === path);
    if (page) return { title: page.title, category: menu.title };
  }

  notFound();
}

export function getPreparingPageMetadata(path: string): Metadata {
  const { title } = getMenuPage(path);

  return {
    ...createPageMetadata({
      title,
      description: `진한의원 ${title} 안내 페이지입니다. 현재 상세 콘텐츠를 준비하고 있습니다.`,
      path,
    }),
    robots: { index: false, follow: true },
  };
}

export function PreparingPage({ path }: { path: string }) {
  const { title, category } = getMenuPage(path);

  return (
    <>
      <SubPageHero title={title} desc="상세 콘텐츠를 준비하고 있습니다." />
      <Breadcrumb items={[{ label: category }, { label: title }]} />
      <ContentSection>
        <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500">
          콘텐츠 준비중입니다.
        </div>
      </ContentSection>
    </>
  );
}
