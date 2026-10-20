import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, List, ZoomIn } from 'lucide-react';
import { EVENT_ITEMS, getAdjacentEvents, getEventBySlug } from '@/lib/constants/events';
import { ImageLightbox } from '@/components/common/ImageLightbox';
import { SubPageHero } from '@/components/subpage/SubPageHero';
import { Breadcrumb } from '@/components/subpage/Breadcrumb';
import { ContentSection } from '@/components/subpage/ContentSection';

const PLACEHOLDER_SUBMENUS: Record<string, string> = {
  notices: '공지사항',
  'treatment-cases': '치료사례',
  interviews: '환자인터뷰',
};

export function generateStaticParams() {
  return [
    ...EVENT_ITEMS.map((item) => ({ slug: item.slug })),
    ...Object.keys(PLACEHOLDER_SUBMENUS).map((slug) => ({ slug })),
  ];
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  // GNB 하위 예정 메뉴(공지사항/치료사례/환자인터뷰) 접근 시 기존 준비중 화면 유지
  if (!event) {
    const placeholderTitle = PLACEHOLDER_SUBMENUS[slug];
    if (placeholderTitle) {
      return (
        <>
          <SubPageHero title={placeholderTitle} desc="진한의원의 소식과 이야기를 전해드립니다." />
          <Breadcrumb items={[{ label: '진한의원 이벤트', href: '/events' }, { label: placeholderTitle }]} />
          <ContentSection>
            <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500">
              콘텐츠 준비중입니다.
            </div>
          </ContentSection>
        </>
      );
    }
    notFound();
  }

  const { prev, next } = getAdjacentEvents(slug);

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-[1040px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* 1. 상단 타이틀 / 카테고리 헤더 */}
        <header className="border-b border-gray-200 pb-6 sm:pb-8">
          <span className="inline-flex items-center rounded-full bg-[#08325C] px-3.5 py-1 text-xs font-bold tracking-tight text-white">
            {event.category}
          </span>

          <div className="mt-3">
            <h1 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-snug tracking-tight text-gray-900 break-keep">
              {event.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600 break-keep">
              {event.summary}
            </p>
          </div>
        </header>

        {/* 2. 중앙 고화질 원본 포스터 이미지 (클릭/터치 시 원본 확대 모달 지원) */}
        <div className="mx-auto max-w-[860px] py-8 sm:py-12">
          <ImageLightbox
            src={event.image}
            alt={event.title}
            className="group relative block w-full overflow-hidden rounded-2xl border border-gray-200/90 shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={event.image}
              alt={event.title}
              width={event.width}
              height={event.height}
              className="block w-full h-auto"
            />
            <span className="pointer-events-none absolute right-3 bottom-3 sm:right-4 sm:bottom-4 inline-flex items-center gap-1.5 rounded-full bg-slate-900/75 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm shadow-sm transition-transform group-hover:scale-105">
              <ZoomIn size={14} aria-hidden="true" />
              크게 보기
            </span>
          </ImageLightbox>

          <p className="mt-3 text-center text-xs sm:text-sm text-gray-500">
            이미지를 클릭(모바일은 터치)하시면 원본 크기로 확대하여 보실 수 있습니다.
          </p>
        </div>

        {/* 3. 하단 이전/다음 이벤트 이동 바 & 목록보기 버튼 */}
        <div className="border-t border-gray-200 pt-8 sm:pt-10">
          {/* [PC / 태블릿 가로 2분할 텍스트 네비게이션 바] */}
          <nav
            aria-label="이전 및 다음 이벤트 이동"
            className="hidden md:grid md:grid-cols-2 divide-x divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            {/* 이전 이벤트 */}
            {prev ? (
              <Link
                href={`/events/${prev.slug}`}
                className="group flex items-center gap-3.5 px-5 py-4 transition-colors hover:bg-gray-50/80 min-w-0"
              >
                <ArrowLeft
                  size={18}
                  className="shrink-0 text-gray-400 transition-transform group-hover:-translate-x-1 group-hover:text-[#08325C]"
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1 text-left">
                  <span className="block text-xs font-semibold text-gray-400">
                    이전 이벤트
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-bold text-gray-900 group-hover:text-[#08325C]">
                    {prev.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex items-center px-5 py-4 text-sm text-gray-400 bg-gray-50/40">
                이전 이벤트가 없습니다.
              </div>
            )}

            {/* 다음 이벤트 */}
            {next ? (
              <Link
                href={`/events/${next.slug}`}
                className="group flex items-center justify-end gap-3.5 px-5 py-4 transition-colors hover:bg-gray-50/80 min-w-0"
              >
                <div className="min-w-0 flex-1 text-right">
                  <span className="block text-xs font-semibold text-gray-400">
                    다음 이벤트
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-bold text-gray-900 group-hover:text-[#08325C]">
                    {next.title}
                  </span>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#08325C]"
                  aria-hidden="true"
                />
              </Link>
            ) : (
              <div className="flex items-center justify-end px-5 py-4 text-sm text-gray-400 bg-gray-50/40">
                다음 이벤트가 없습니다.
              </div>
            )}
          </nav>

          {/* [모바일 전용 상·하 2줄 텍스트 리스트] */}
          <nav
            aria-label="모바일 이전 및 다음 이벤트 이동"
            className="divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white md:hidden"
          >
            {/* 이전글 행 */}
            {prev ? (
              <Link
                href={`/events/${prev.slug}`}
                className="flex items-center gap-3 px-4 py-3.5 active:bg-gray-50 min-w-0"
              >
                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-gray-500 w-14">
                  <ChevronUp size={15} aria-hidden="true" />
                  이전글
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-bold text-gray-900">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div className="flex items-center gap-3 px-4 py-3.5 text-xs text-gray-400 bg-gray-50/40">
                <span className="inline-flex shrink-0 items-center gap-1 font-semibold w-14">
                  <ChevronUp size={15} aria-hidden="true" />
                  이전글
                </span>
                <span>이전 이벤트가 없습니다.</span>
              </div>
            )}

            {/* 다음글 행 */}
            {next ? (
              <Link
                href={`/events/${next.slug}`}
                className="flex items-center gap-3 px-4 py-3.5 active:bg-gray-50 min-w-0"
              >
                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-gray-500 w-14">
                  <ChevronDown size={15} aria-hidden="true" />
                  다음글
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-bold text-gray-900">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div className="flex items-center gap-3 px-4 py-3.5 text-xs text-gray-400 bg-gray-50/40">
                <span className="inline-flex shrink-0 items-center gap-1 font-semibold w-14">
                  <ChevronDown size={15} aria-hidden="true" />
                  다음글
                </span>
                <span>다음 이벤트가 없습니다.</span>
              </div>
            )}
          </nav>

          {/* 하단 중앙 [목록보기] 단독 버튼 (모바일 풀와이드 / PC 중앙 정렬) */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <Link
              href="/events"
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#08325C] px-8 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#062545] active:bg-[#062545]"
            >
              <List size={17} aria-hidden="true" />
              목록보기
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
