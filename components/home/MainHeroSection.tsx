'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BANNERS = [
  {
    id: 1,
    imageUrl: '/images/main/hero_banner_01.jpg',
    alt: '진한의원 맞춤 감량 배너',
    link: '#'
  },
  {
    id: 2,
    imageUrl: '/images/main/hero_banner_02.jpg',
    alt: '진한의원 원장님 소개 배너',
    link: '#'
  },
  {
    id: 3,
    imageUrl: '/images/main/hero_banner_03.jpg',
    alt: '진한의원 해독 치료 배너',
    link: '#'
  },
  {
    id: 4,
    imageUrl: '/images/main/hero_banner_04.jpg',
    alt: '진한의원 후기 배너',
    link: '#'
  }
];

export function MainHeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
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
    <section className="relative w-full overflow-hidden bg-gray-50 group">
      {/* Slider Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {BANNERS.map((banner) => (
            <div 
              className="flex-[0_0_100%] min-w-0 relative h-[360px] sm:h-[480px] lg:h-[645px] w-full"
              key={banner.id}
            >
              <img 
                src={banner.imageUrl} 
                alt={banner.alt} 
                className="w-full h-full object-cover object-[center_left] select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/10 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} strokeWidth={2.5} />
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/10 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={28} strokeWidth={2.5} />
      </button>

      {/* Pagination Indicators - Placed overlapping at the bottom of the banners */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full h-2.5 ${
              index === selectedIndex 
                ? 'w-6 bg-primary-dark' 
                : 'w-2.5 bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
