'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { EVENT_ITEMS, EVENTS_PER_PAGE } from '@/lib/constants/events';

export default function EventsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(EVENT_ITEMS.length / EVENTS_PER_PAGE));

  const paginatedEvents = EVENT_ITEMS.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. 상단 서브 히어로 영역 */}
      <section className="bg-[#F4F6F9] border-b border-gray-200/80 py-12 sm:py-16 lg:py-20 text-center px-4">
        <div className="mx-auto max-w-[1320px]">
          <p className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#08325C] mb-2.5">
            EVENT &amp; PROMOTION
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            진한의원 이벤트
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 break-keep">
            진한의원의 시즌별 특별 프로모션과 맞춤 진료 혜택을 만나보세요.
          </p>
        </div>
      </section>

      {/* 2. 본문 이벤트 카드 그리드 (PC 3열 / 태블릿 2열 / 모바일 1열) */}
      <section className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {paginatedEvents.map((event, index) => (
            <article key={event.id} className="flex flex-col">
              <Link
                href={`/events/${event.slug}`}
                className="group flex flex-col h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#08325C] rounded-2xl"
              >
                {/* 상단 포스터 썸네일 (3:4 비율 통일 + 글자 잘림 없는 object-contain) */}
                <div
                  className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-gray-200/90 shadow-sm transition-shadow duration-300 group-hover:shadow-md"
                  style={{ backgroundColor: event.bgColor }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.image}
                    alt={event.title}
                    width={event.width}
                    height={event.height}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* 하단 텍스트 영역 */}
                <div className="mt-4 flex flex-1 flex-col px-0.5">
                  <span className="inline-flex w-fit items-center rounded-full bg-[#08325C] px-3 py-1 text-xs font-bold tracking-tight text-white">
                    {event.category}
                  </span>

                  <h2 className="mt-2.5 text-[18px] sm:text-[19px] lg:text-[20px] font-bold leading-snug tracking-tight text-gray-900 break-keep transition-colors group-hover:text-[#08325C]">
                    {event.title}
                  </h2>

                  <p className="mt-1.5 text-sm text-gray-600 line-clamp-1 break-keep">
                    {event.summary}
                  </p>

                  <div className="mt-3 pt-1">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#08325C]">
                      자세히 보기
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* 4. 하단 넘버링 페이지네이션 (9개 단위) */}
        <nav
          aria-label="이벤트 페이지 이동"
          className="mt-12 sm:mt-16 flex items-center justify-center gap-1.5 sm:gap-2"
        >
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="이전 페이지"
            className="inline-flex size-10 sm:size-11 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex size-10 sm:size-11 items-center justify-center rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#08325C] text-white shadow-sm'
                    : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="다음 페이지"
            className="inline-flex size-10 sm:size-11 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </nav>
      </section>
    </main>
  );
}
