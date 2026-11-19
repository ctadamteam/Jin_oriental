'use client';

import { SectionTitle } from '../common/SectionTitle';
import { BannerControls } from '../common/BannerControls';
import { useBannerCarousel } from '../common/useBannerCarousel';
import { SIGNATURE_SLIDE_LABELS } from './SignatureMedicineShared';
import {
  SignatureSlide1Pc,
  SignatureSlide2Pc,
  SignatureSlide3Pc,
  SignatureSlide4Pc,
  SignatureSlide5Pc,
  SignatureSlide6Pc,
} from './SignatureMedicineSlides.pc';
import {
  SignatureSlide1Mobile,
  SignatureSlide2Mobile,
  SignatureSlide3Mobile,
  SignatureSlide4Mobile,
  SignatureSlide5Mobile,
  SignatureSlide6Mobile,
} from './SignatureMedicineSlides.mobile';

const SIGNATURE_SLIDES = [
  { key: 'custom-diet', Pc: SignatureSlide1Pc, Mobile: SignatureSlide1Mobile },
  { key: 'daily-solution', Pc: SignatureSlide2Pc, Mobile: SignatureSlide2Mobile },
  { key: 'tonic-diet', Pc: SignatureSlide3Pc, Mobile: SignatureSlide3Mobile },
  { key: 'belly-edema', Pc: SignatureSlide4Pc, Mobile: SignatureSlide4Mobile },
  { key: 'injection-maintenance', Pc: SignatureSlide5Pc, Mobile: SignatureSlide5Mobile },
  { key: 'detox-program', Pc: SignatureSlide6Pc, Mobile: SignatureSlide6Mobile },
] as const;

export function MedicineIntroSection() {
  const {
    viewportRef,
    index: selectedIndex,
    playing,
    setPlaying,
    previous,
    next,
  } = useBannerCarousel();

  const totalSlides = SIGNATURE_SLIDES.length;

  return (
    <section
      className="bg-white py-16 lg:py-24"
      aria-label="진한의원 한약 및 진료 안내"
      aria-roledescription="캐러셀"
    >
      <div className="mx-auto max-w-[1440px] px-0 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-0">
          <SectionTitle
            subtitle="Signature Medicine"
            title="체질별 맞춤 처방, 진 다이어트 한약"
          />
        </div>
        <div className="mx-auto mt-8 max-w-[1320px] lg:mt-12">
          <div
            className="overflow-hidden rounded-none"
            ref={viewportRef}
          >
            {/* A안: items-stretch + 각 모바일 슬라이드 h-full로 전 배너 동일 높이 고정 */}
            <div className="flex items-stretch touch-pan-y">
              {SIGNATURE_SLIDES.map(({ key, Pc, Mobile }, index) => (
                <div
                  key={key}
                  className="min-w-0 flex-[0_0_100%]"
                  role="group"
                  aria-roledescription="슬라이드"
                  aria-label={`${index + 1} / ${totalSlides}: ${SIGNATURE_SLIDE_LABELS[index]}`}
                  inert={index !== selectedIndex}
                >
                  <Pc />
                  <Mobile />
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-0">
            <BannerControls
              label="한약 안내"
              index={selectedIndex}
              count={totalSlides}
              playing={playing}
              previous={previous}
              next={next}
              onToggle={() => setPlaying(!playing)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
