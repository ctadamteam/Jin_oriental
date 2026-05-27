'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NAVER_REVIEW_URL = 'https://pcmap.place.naver.com/hospital/21856677/review/visitor?additionalHeight=76&entry=plt&fromPanelNum=1&locale=ko&svcName=map_pcv5&timestamp=202605271330#';

const mockReviews = [
  { 
    id: 1, author: 'nomi****', authorStats: '리뷰 139 · 사진 41', keyword: '다이어트',
    meta: '예약 후 이용 | 대기 시간 바로 입장',
    content: '평소 다이어트를 해도 금새 지치고..요요가 반복되어서 한방 다이어트 소개받아서 상담받아봤어요. 직원분들 친절하시고 금방 긴장 풀어주시네요. 제 생활패턴이랑 체질먼저 파악하여 방향잡아주시니 아주 신뢰감 뿜뿜이에요.',
    naverReviewUrl: NAVER_REVIEW_URL 
  },
  { 
    id: 2, author: 'jinm****', authorStats: '리뷰 42 · 사진 12', keyword: '다이어트',
    meta: '예약 후 이용',
    content: '원장님이 너무 친절하시고 약이 잘 맞아요. 벌써 한 달 만에 목표했던 감량 성공했습니다. 요요 없이 잘 유지할 수 있게 식단도 꼼꼼히 봐주셔서 너무 감사합니다.',
    naverReviewUrl: NAVER_REVIEW_URL 
  },
  { 
    id: 3, author: 'happ****', authorStats: '리뷰 89 · 사진 25', keyword: '다이어트',
    meta: '예약 후 이용 | 대기 시간 바로 입장',
    content: '다이어트 한약은 처음인데 붓기가 정말 많이 빠졌어요! 아침에 일어날 때 몸이 가벼워진 느낌이 확 듭니다. 시설도 깔끔하고 무엇보다 꼼꼼한 진맥과 상담이 인상깊었습니다.',
    naverReviewUrl: NAVER_REVIEW_URL 
  },
  { 
    id: 4, author: 'diet****', authorStats: '리뷰 15 · 사진 3', keyword: '비만클리닉',
    meta: '예약 후 이용',
    content: '다른 곳에서 실패하고 왔는데 여기서 드디어 성공했습니다. 단순히 살만 빼는게 아니라 건강해지는 느낌이라 더 만족스러워요.',
    naverReviewUrl: NAVER_REVIEW_URL 
  },
  { 
    id: 5, author: 'beau****', authorStats: '리뷰 55 · 사진 10', keyword: '한방피부과',
    meta: '예약 후 이용 | 주차 편리',
    content: '피부가 너무 건조해서 엑소좀 맞으러 왔는데, 상담부터 시술까지 너무 꼼꼼하게 잘해주셨어요! 맞고 나서 확실히 속당김이 줄어들고 화장도 잘 먹어요. 재방문 의사 100% 입니다.',
    naverReviewUrl: NAVER_REVIEW_URL 
  },
  { 
    id: 6, author: 'love****', authorStats: '리뷰 22 · 사진 1', keyword: '산후조리',
    meta: '예약 후 이용',
    content: '출산 후 몸이 너무 안 좋아서 지인 추천으로 산후조리 한약 지어 먹었습니다. 확실히 기력 회복이 빠르고 부기도 쏙 빠지는 느낌이에요. 원장님께서 산모의 마음을 잘 알아주셔서 상담 내내 위로받았습니다.',
    naverReviewUrl: NAVER_REVIEW_URL 
  },
  { 
    id: 7, author: 'woma****', authorStats: '리뷰 103 · 사진 33', keyword: '여성질환',
    meta: '예약 후 이용 | 친절한 응대',
    content: '생리통이 너무 심해서 진통제를 달고 살았는데, 자궁미인 캡슐 먹으면서부터 정말 많이 좋아졌어요. 이제는 약 없이도 견딜만 합니다. 여성 원장님이라 더 편하게 상담받을 수 있었어요!',
    naverReviewUrl: NAVER_REVIEW_URL 
  },
  { 
    id: 8, author: 'heal****', authorStats: '리뷰 77 · 사진 15', keyword: '해독치료',
    meta: '예약 후 이용 | 깔끔한 시설',
    content: '만성피로에 시달리다 해독 프로그램 시작했는데, 아침에 일어나는게 달라졌어요! 몸이 가벼워지고 피부톤도 맑아졌다는 소리 많이 듣습니다. 시설도 엄청 깨끗하고 고급스러워요.',
    naverReviewUrl: NAVER_REVIEW_URL 
  },
  { 
    id: 9, author: 'best****', authorStats: '리뷰 210 · 사진 88', keyword: '다이어트',
    meta: '예약 후 이용 | 대기 시간 바로 입장',
    content: '배사라정 복용중인데 정말 신기하게 식욕이 뚝 떨어져요 ㅋㅋㅋ 알약이라 먹기도 너무 편하고 가슴 두근거림이나 부작용이 없어서 제일 좋습니다. 진작 여기서 할걸 그랬네요.',
    naverReviewUrl: NAVER_REVIEW_URL 
  }
];

export function ReviewSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    slidesToScroll: 3,
    breakpoints: {
      '(max-width: 1023px)': { slidesToScroll: 2 },
      '(max-width: 767px)': { slidesToScroll: 1 },
    }
  });

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
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Real Reviews"
          title={
            <span className="flex flex-col items-center justify-center">
              <span>진한의원과 함께한</span>
              <span>고객님들의 솔직한 후기</span>
            </span>
          } 
        />
        
        <div className="relative group mt-12 max-w-[1440px] mx-auto px-16 lg:px-24">
          
          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {mockReviews.map((review) => (
                <div key={review.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] pl-6 min-w-0 pb-8 pt-2">
                  <Link 
                    href={review.naverReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all h-full transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl overflow-hidden shrink-0">
                        👱🏻‍♀️
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-[15px]">{review.author}</div>
                        <div className="text-[13px] text-gray-500 mt-0.5">{review.authorStats}</div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="font-bold text-[var(--color-primary)] text-[18px]">{review.keyword}</span>
                    </div>
                    <div className="text-[13px] text-gray-400 mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                      <span>{review.meta}</span>
                    </div>
                    <p className="text-gray-700 text-[18px] leading-relaxed line-clamp-4 font-medium break-keep">
                      {review.content}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 text-gray-600 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10 -mt-4 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous slide"
            disabled={!emblaApi?.canScrollPrev()}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 text-gray-600 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all z-10 -mt-4 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next slide"
            disabled={!emblaApi?.canScrollNext()}
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === selectedIndex 
                    ? 'w-6 h-2 bg-[var(--color-primary)]' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
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
