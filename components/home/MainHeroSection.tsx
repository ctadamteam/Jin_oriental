'use client';

import Image from 'next/image';
import { Expand } from 'lucide-react';
import { ImageLightbox } from '../common/ImageLightbox';
import { BannerControls } from '../common/BannerControls';
import { useBannerCarousel } from '../common/useBannerCarousel';

const BANNERS = [
  { title: '다이어트, 요요가 제일 걱정이시죠?', description: '진한의원 김효진 원장의 체중 유지 이야기' },
  { title: '한방내과 전문의는 비만을 다르게 진단합니다.', description: '개인의 체질·대사·생활습관까지 함께 살피는 비만 진료' },
  { title: '진한의원은 찐입니다', description: '진한의원의 후기에는 ‘진심’이 가득 담겨 있습니다.' },
  { title: '방송과 언론에서 만나는 진한의원', description: 'KNN·BBS 등 방송 및 언론매체 다수 출연' },
  { title: '3개월, 93.5kg → 76.6kg', description: '진한의원 체중 감량 사례 · 16.9kg 감량' },
  { title: '3개월, 70.3kg → 56.5kg', description: '진한의원 체중 감량 사례 · 13.8kg 감량' },
  { title: '4개월, 84.5kg → 60.2kg', description: '진한의원 체중 감량 사례 · 24.3kg 감량' },
  { title: '3개월, 67.7kg → 56.1kg', description: '진한의원 체중 감량 사례 · 11.6kg 감량' },
  { title: '4개월, 76.3kg → 55.3kg', description: '진한의원 체중 감량 사례 · 21kg 감량' },
];

export function MainHeroSection() {
  const { viewportRef, index: selectedIndex, playing, setPlaying, previous, next } = useBannerCarousel();
  return <section aria-label="진한의원 주요 안내" aria-roledescription="캐러셀" className="w-full bg-white">
    <div className="overflow-hidden" ref={viewportRef}>
      <div className="flex touch-pan-y">
        {BANNERS.map((banner, index) => {
          const src = '/images/main/hero_banner_' + String(index + 1).padStart(2, '0') + '.jpg';
          return <div key={src} className="min-w-0 flex-[0_0_100%]" role="group" aria-label={String(index + 1) + ' / ' + BANNERS.length} inert={index !== selectedIndex}>
            <ImageLightbox src={src} alt={banner.title} className="relative block w-full text-left">
              <Image src={src} alt={banner.title} width={1920} height={645} sizes="100vw" priority={index === 0} className="h-auto w-full select-none object-contain" draggable={false} />
              <span className="absolute bottom-2 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] text-slate-700 shadow-sm lg:hidden"><Expand size={12} />크게 보기</span>
            </ImageLightbox>
            <div className="px-6 pt-5 lg:hidden">
              <h2 className="max-w-2xl text-[25px] font-bold leading-[1.35] tracking-tight break-keep text-slate-900 sm:text-3xl">{banner.title}</h2>
              <p className="mt-2 text-[15px] leading-6 break-keep text-slate-600">{banner.description}</p>
            </div>
          </div>;
        })}
      </div>
    </div>
    <BannerControls label="메인 배너" index={selectedIndex} count={BANNERS.length} playing={playing} previous={previous} next={next} onToggle={() => setPlaying(!playing)} />
  </section>;
}
