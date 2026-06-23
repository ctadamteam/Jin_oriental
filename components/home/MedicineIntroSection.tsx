'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { SectionTitle } from '../common/SectionTitle';

// 더미 배너 데이터 (실제 디자인된 이미지 경로로 교체 예정)
const banners = [
  {
    id: 1,
    imageUrl: '/images/medicine/med_01.jpg',
    alt: '진 다이어트 한약 01',
    link: '#'
  },
  {
    id: 2,
    imageUrl: '/images/medicine/med_02.jpg',
    alt: '진 다이어트 한약 02',
    link: '#'
  },
  {
    id: 3,
    imageUrl: '/images/medicine/med_03.jpg',
    alt: '진 다이어트 한약 03',
    link: '#'
  },
  {
    id: 4,
    imageUrl: '/images/medicine/med_04.jpg',
    alt: '진 다이어트 한약 04',
    link: '#'
  },
  {
    id: 5,
    imageUrl: '/images/medicine/med_05.jpg',
    alt: '진 다이어트 한약 05',
    link: '#'
  },
  {
    id: 6,
    imageUrl: '/images/medicine/med_06.jpg',
    alt: '진 다이어트 한약 06',
    link: '#'
  },
  {
    id: 7,
    imageUrl: '/images/medicine/med_07.jpg',
    alt: '진 다이어트 한약 07',
    link: '#'
  },
  {
    id: 8,
    imageUrl: '/images/medicine/med_08.jpg',
    alt: '진 다이어트 한약 08',
    link: '#'
  },
  {
    id: 9,
    imageUrl: '/images/medicine/med_09.jpg',
    alt: '진 다이어트 한약 09',
    link: '#'
  }
];

export function MedicineIntroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
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
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Signature Medicine"
          title="체질별 맞춤 처방, 진 다이어트 한약"
        />
        
        <div className="relative group mt-12 max-w-[1320px] mx-auto">
          
          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {banners.map((banner) => (
                <div className="flex-[0_0_100%] min-w-0 relative" key={banner.id}>
                  {/* Aspect ratio can be adjusted based on the actual banner image size. (e.g. 21:9 or 16:9) */}
                  <Link href={banner.link} className="block w-full aspect-[1200/523] bg-gray-100 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${banner.imageUrl})` }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows (visible on hover) */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full h-2.5 ${
                index === selectedIndex 
                  ? 'w-6 bg-[#A8CC1D]' 
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
