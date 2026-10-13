'use client';

import Image from 'next/image';
import { Expand } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { ImageLightbox } from '../common/ImageLightbox';
import { BannerControls } from '../common/BannerControls';
import { useBannerCarousel } from '../common/useBannerCarousel';

const banners = ['청혈정', '자궁미인', '쾌통정', '진 올인원 캡슐 II', '미주안', '엑소좀', '배사라정', '붓기제로', '진 올인원 캡슐'];

export function MedicineIntroSection() {
  const { viewportRef, index: selectedIndex, playing, setPlaying, previous, next } = useBannerCarousel();
  return <section className="bg-white py-16 lg:py-24" aria-label="진한의원 한약 및 진료 안내">
    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="Signature Medicine" title="체질별 맞춤 처방, 진 다이어트 한약" />
      <div className="mx-auto mt-8 max-w-[1320px] lg:mt-12">
        <div className="overflow-hidden rounded-2xl lg:rounded-none" ref={viewportRef}>
          <div className="flex touch-pan-y">
            {banners.map((title, index) => {
              const src = '/images/medicine/med_' + String(index + 1).padStart(2, '0') + '.jpg';
              return <div key={src} className="min-w-0 flex-[0_0_100%]" inert={index !== selectedIndex}>
                <ImageLightbox src={src} alt={title + ' 안내'} className="block w-full text-left">
                  <Image src={src} alt={title + ' 안내'} width={1200} height={523} sizes="(max-width: 1360px) 100vw, 1320px" className="h-auto w-full object-contain" draggable={false} />
                  <span className="flex min-h-16 items-center justify-between gap-3 border border-t-0 border-slate-100 bg-slate-50 px-4 lg:hidden"><strong className="text-lg text-slate-900">{title}</strong><span className="flex shrink-0 items-center gap-1.5 text-sm text-slate-600"><Expand size={16} />자세히 보기</span></span>
                </ImageLightbox>
              </div>;
            })}
          </div>
        </div>
        <BannerControls label="한약 안내" index={selectedIndex} count={banners.length} playing={playing} previous={previous} next={next} onToggle={() => setPlaying(!playing)} />
      </div>
    </div>
  </section>;
}
