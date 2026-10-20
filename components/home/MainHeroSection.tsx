'use client';

import { Pause, Play } from 'lucide-react';
import { useBannerCarousel } from '../common/useBannerCarousel';
import { CASE_BANNERS, SLIDE_LABELS } from './MainHeroShared';
import {
  Slide10Mobile,
  Slide11Mobile,
  Slide1Mobile,
  Slide2Mobile,
  Slide3Mobile,
  Slide4Mobile,
  SlideCaseOverlayMobile,
} from './MainHeroSlides.mobile';
import {
  Slide10Pc,
  Slide11Pc,
  Slide1Pc,
  Slide2Pc,
  Slide3Pc,
  Slide4Pc,
  SlideCaseOverlayPc,
} from './MainHeroSlides.pc';

export function MainHeroSection() {
  const {
    viewportRef,
    index: selectedIndex,
    playing,
    setPlaying,
    scrollTo,
  } = useBannerCarousel();

  const totalSlides = SLIDE_LABELS.length;

  return (
    <section
      aria-label="진한의원 주요 안내"
      aria-roledescription="캐러셀"
      className="relative w-full bg-white"
    >
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="flex touch-pan-y">
          {/* 1번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`1 / ${totalSlides}: ${SLIDE_LABELS[0]}`}
            inert={selectedIndex !== 0}
          >
            <Slide1Pc />
            <Slide1Mobile />
          </div>

          {/* 2번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`2 / ${totalSlides}: ${SLIDE_LABELS[1]}`}
            inert={selectedIndex !== 1}
          >
            <Slide2Pc />
            <Slide2Mobile />
          </div>

          {/* 3번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`3 / ${totalSlides}: ${SLIDE_LABELS[2]}`}
            inert={selectedIndex !== 2}
          >
            <Slide3Pc />
            <Slide3Mobile />
          </div>

          {/* 4번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`4 / ${totalSlides}: ${SLIDE_LABELS[3]}`}
            inert={selectedIndex !== 3}
          >
            <Slide4Pc />
            <Slide4Mobile />
          </div>

          {/* 5~9번 배너 */}
          {CASE_BANNERS.map((caseBanner, idx) => {
            const slideIdx = 4 + idx;
            return (
              <div
                key={caseBanner.id}
                className="min-w-0 flex-[0_0_100%]"
                role="group"
                aria-roledescription="슬라이드"
                aria-label={`${slideIdx + 1} / ${totalSlides}: ${SLIDE_LABELS[slideIdx]}`}
                inert={selectedIndex !== slideIdx}
              >
                <SlideCaseOverlayPc data={caseBanner} />
                <SlideCaseOverlayMobile data={caseBanner} />
              </div>
            );
          })}

          {/* 10번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`10 / ${totalSlides}: ${SLIDE_LABELS[9]}`}
            inert={selectedIndex !== 9}
          >
            <Slide10Pc />
            <Slide10Mobile />
          </div>

          {/* 11번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`11 / ${totalSlides}: ${SLIDE_LABELS[10]}`}
            inert={selectedIndex !== 10}
          >
            <Slide11Pc />
            <Slide11Mobile />
          </div>
        </div>
      </div>

      {/* 배너 하단 외부 독립 페이징 바 (이미지·문구·버튼과 1px도 겹치지 않는 깔끔한 화이트 바) */}
      <div
        role="group"
        aria-label="메인 배너 페이지네이션"
        className="w-full bg-white py-3 flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-1">
          {SLIDE_LABELS.map((label, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <button
                key={label}
                type="button"
                onClick={() => scrollTo(idx)}
                aria-label={`${label} 이동`}
                aria-current={isActive ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-7 bg-[#083560]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            );
          })}

          <span aria-hidden="true" className="mx-1 h-3.5 w-px bg-slate-200" />

          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? '메인 배너 자동 넘김 일시정지' : '메인 배너 자동 넘김 재생'}
            aria-pressed={!playing}
            className="w-6 h-6 inline-flex items-center justify-center rounded-full text-slate-600 hover:text-[#083560] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
}
