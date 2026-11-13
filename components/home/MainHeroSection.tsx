'use client';

import { BannerControls } from '../common/BannerControls';
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
    previous,
    next,
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

          {/* 5번 배너: 진 해독 다이어트 3단계 프로그램 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`5 / ${totalSlides}: ${SLIDE_LABELS[4]}`}
            inert={selectedIndex !== 4}
          >
            <Slide10Pc />
            <Slide10Mobile />
          </div>

          {/* 6번 배너: 자주 묻는 질문 (Q&A) */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`6 / ${totalSlides}: ${SLIDE_LABELS[5]}`}
            inert={selectedIndex !== 5}
          >
            <Slide11Pc />
            <Slide11Mobile />
          </div>

          {/* 7~11번 배너: 감량 사례 5종 */}
          {CASE_BANNERS.map((caseBanner, idx) => {
            const slideIdx = 6 + idx;
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
        </div>
      </div>

      {/* 배너 하단 외부 독립 페이징 바 (이미지·문구·버튼과 1px도 겹치지 않는 깔끔한 화이트 바) */}
      <div className="w-full bg-white py-1">
        <BannerControls
          label="메인 배너"
          index={selectedIndex}
          count={totalSlides}
          playing={playing}
          previous={previous}
          next={next}
          onToggle={() => setPlaying(!playing)}
        />
      </div>
    </section>
  );
}
