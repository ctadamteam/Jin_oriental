'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// 통짜로 제작된 Before & After 배너 이미지 데이터
const beforeAfterBanners = [
  { id: 1, imageUrl: '/images/main/before_after_1.jpg', alt: '비포애프터 사례 1', link: '#' },
  { id: 2, imageUrl: '/images/main/before_after_2.jpg', alt: '비포애프터 사례 2', link: '#' },
];

export function BeforeAfterSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-24 md:py-32 bg-[var(--color-primary)] text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          subtitle={<span className="text-white/90">Before & After</span>}
          title={<span className="text-white">눈으로 확인하는 확실한 변화</span>} 
        />
        
        <div className="relative w-full mt-12 sm:mt-16 group">
          
          {/* Viewport */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white" ref={emblaRef}>
            <div className="flex">
              {beforeAfterBanners.map((banner) => (
                <div key={banner.id} className="flex-[0_0_100%] min-w-0 relative">
                  <Link 
                    href={banner.link} 
                    className="block w-full aspect-[2/1] bg-gray-100 relative overflow-hidden"
                  >
                    {banner.imageUrl ? (
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${banner.imageUrl})` }}
                      />
                    ) : (
                      // 이미지가 없을 때 보여지는 플레이스홀더
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                        <span className="text-4xl mb-3">📸</span>
                        <span className="font-bold text-lg md:text-xl text-gray-600">비포 & 애프터 통짜 이미지 삽입 영역</span>
                        <span className="text-sm mt-2 text-gray-500">(디자이너가 제작한 1장의 통합 이미지)</span>
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows (visible on hover) */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-10 opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-10 opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'w-8 h-2.5 bg-white rounded-full' 
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70 rounded-full'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
