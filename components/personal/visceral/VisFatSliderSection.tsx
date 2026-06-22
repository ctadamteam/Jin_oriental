'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CauseItem = {
  label: string;
  img: string;
  imgScale?: string;
};

// Declared globally to avoid circular imports and allow helper component access
const causes: CauseItem[] = [
  {
    label: '과식',
    img: '/images/personal/visceral-fat/visceral-fat-5.png',
    imgScale: 'scale-125',
  },
  {
    label: '야식',
    img: '/images/personal/visceral-fat/visceral-fat-6.png',
    imgScale: 'scale-125',
  },
  {
    label: '음주',
    img: '/images/personal/visceral-fat/visceral-fat-7.png',
  },
  {
    label: '갱년기',
    img: '/images/personal/visceral-fat/visceral-fat-8.png',
  },
];

export default function VisFatSliderSection() {
  const [isMounted, setIsMounted] = useState(false);

  // Sync client-side mount state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Embla hook
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const tabs = [
    { title: '복부비만 기준' },
    { title: '내장지방이란?' },
    { title: '내장지방 원인' }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Unified selection handler
  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setPrevBtnEnabled(api.canScrollPrev());
    setNextBtnEnabled(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Initial sync
    onSelect(emblaApi);
    
    // Safety timeout to trigger layout recalculation after conditional mount
    const timer = setTimeout(() => {
      if (emblaApi) {
        emblaApi.reInit();
        onSelect(emblaApi);
      }
    }, 150);
    
    // Event listeners
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      clearTimeout(timer);
      if (emblaApi) {
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  // Prevent SSR/CSR Hydration mismatch
  if (!isMounted) {
    return (
      <div className="w-full h-[800px] flex items-center justify-center bg-white">
        <div className="text-gray-400 font-medium">로딩 중...</div>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 w-full overflow-x-hidden">
      {/* 1. Tabs Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 bg-[#F4F5F0] p-1.5 rounded-full border border-gray-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] max-w-full overflow-x-auto no-scrollbar">
            {tabs.map((tab, idx) => {
              const isActive = selectedIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`flex items-center px-5 py-3 rounded-full text-xs md:text-sm lg:text-base font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-white shadow-[0_4px_12px_rgba(139,166,18,0.25)]'
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Slider Viewport Container (100% Full-Width) */}
      <div className="relative w-full h-[1200px] md:h-[1080px] lg:h-[1050px] overflow-hidden">
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex w-full h-full touch-pan-y">
            
            {/* SLIDE 1: BellyFatReasonSection */}
            <div className="flex-[0_0_100%] min-w-0 h-full w-full">
              <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-between py-8 md:py-10 lg:py-12">
                <div className="text-center w-full max-w-5xl mx-auto flex-1 flex flex-col justify-between">
                  <div className="max-w-4xl mx-auto w-full">
                    <p className="text-black text-lg md:text-2xl lg:text-[27px] mb-2" style={{ letterSpacing: '-0.05em' }}>
                      뱃살이 찌는 이유는 뭘까?
                    </p>
                    <h2
                      className="font-paperlogy font-normal text-black text-4xl md:text-5xl lg:text-[62px] mb-12 leading-none"
                      style={{ letterSpacing: '-0.05em' }}
                    >
                      원인은 <span className="text-primary font-extrabold">내장지방!!</span>
                    </h2>

                    <p className="text-black text-[14.4px] md:text-[18px] lg:text-[27px] leading-relaxed max-w-4xl mx-auto mb-6" style={{ letterSpacing: '-0.05em' }}>
                      뱃살은 단순히 지방의 증가만을 의미하는 것이 아니라 내장 기능,<br className="hidden md:block" />
                      신진대사 저하를 의미하며 이전보다 뱃살이 증가한 것은<br className="hidden md:block" />
                      건강의 이상신호를 의미합니다. 특히 중년층의 뱃살은 고혈압, 당뇨,<br className="hidden md:block" />
                      고지혈증 등 대사성 질환의 원인이 됩니다.
                    </p>

                    <p className="text-black text-[14.4px] md:text-[18px] lg:text-[27px] leading-relaxed max-w-4xl mx-auto mb-8" style={{ letterSpacing: '-0.05em' }}>
                      건강하기 위해서는 <strong className="text-primary">반드시 뱃살을 제거</strong>해야 하며<br className="hidden md:block" />
                      배가 불룩한 중년이 배가 나온 중년보다 더 건강하다고 볼 수 없습니다.
                    </p>
                  </div>

                  {/* 하단 통합 컨테이너 (줄자와 남/여 카드를 하나의 Flex Column으로 묶어 세로 간격 조절) */}
                  <div className="w-full mt-auto flex flex-col gap-2 md:gap-3">
                    
                    {/* 정밀 가로형 줄자 (Tape Measure Scale) 인포그래픽 - 화이트 테마, 세로 높이 추가 확대, 하단 밀착 */}
                    <div className="w-full max-w-5xl mx-auto px-6 pt-24 pb-10 bg-gradient-to-b from-white via-white to-[#FAFBF8] rounded-2xl border border-gray-200/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01),0_4px_12px_rgba(0,0,0,0.02)] relative overflow-hidden">
                      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-48 h-12 bg-[#4C5EBC]/4 blur-2xl rounded-full pointer-events-none" />
                      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-48 h-12 bg-[#FE772E]/4 blur-2xl rounded-full pointer-events-none" />

                      <div className="relative w-full h-8 flex items-end">
                        {/* Horizontal baseline */}
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gray-300" />
                        
                        {/* Ticks from 70 to 100 */}
                        <div className="w-full flex justify-between items-end h-full px-1">
                          {Array.from({ length: 31 }).map((_, i) => {
                            const val = 70 + i;
                            const isMajor = val % 5 === 0;
                            const isBoundary = val === 85 || val === 90;
                            
                            return (
                              <div key={val} className="flex flex-col items-center flex-1 relative h-full justify-end">
                                
                                {/* 1. 여성 기준 (85cm) 정밀 정렬 말풍선 */}
                                {val === 85 && (
                                  <div className="absolute bottom-[56px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                                    <span className="bg-[#FE772E] text-white text-[10px] md:text-xs font-extrabold px-3 py-1 rounded-full shadow-[0_3px_10px_rgba(254,119,46,0.2)] whitespace-nowrap">
                                      여성 기준 85cm
                                    </span>
                                    <div className="w-2.5 h-2.5 bg-[#FE772E] rotate-45 -mt-1 shadow-sm" />
                                  </div>
                                )}

                                {/* 2. 남성 기준 (90cm) 정밀 정렬 말풍선 */}
                                {val === 90 && (
                                  <div className="absolute bottom-[56px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                                    <span className="bg-[#4C5EBC] text-white text-[10px] md:text-xs font-extrabold px-3 py-1 rounded-full shadow-[0_3px_10px_rgba(76,94,188,0.2)] whitespace-nowrap">
                                      남성 기준 90cm
                                    </span>
                                    <div className="w-2.5 h-2.5 bg-[#4C5EBC] rotate-45 -mt-1 shadow-sm" />
                                  </div>
                                )}

                                {/* 3. 눈금 세로 경계선 및 점선 가이드 */}
                                {val === 85 && (
                                  <div className="absolute bottom-0 w-[1.5px] h-12 bg-gradient-to-t from-[#FE772E]/40 to-transparent border-l border-dashed border-[#FE772E] -translate-y-2 pointer-events-none" />
                                )}
                                {val === 90 && (
                                  <div className="absolute bottom-0 w-[1.5px] h-12 bg-gradient-to-t from-[#4C5EBC]/40 to-transparent border-l border-dashed border-[#4C5EBC] -translate-y-2 pointer-events-none" />
                                )}

                                {/* 4. 기본 눈금 Ticks */}
                                <div className={`w-[1.5px] rounded-full transition-all duration-300 ${
                                  isBoundary 
                                    ? val === 85 ? 'h-5 bg-[#FE772E] w-[2px]' : 'h-5 bg-[#4C5EBC] w-[2px]' 
                                    : isMajor ? 'h-3.5 bg-gray-400' : 'h-2 bg-gray-300'
                                }`} />
                                
                                {/* 5. 눈금 레이블 */}
                                {isMajor && (
                                  <span className={`absolute -bottom-6 text-[10px] md:text-xs font-mono font-bold ${
                                    isBoundary
                                      ? val === 85 ? 'text-[#FE772E]' : 'text-[#4C5EBC]'
                                      : 'text-gray-400'
                                  }`}>
                                    {val}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Waist criteria cards (Premium Grid Split Layout - Alternative 1) */}
                    <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Men Box Panel */}
                      <div className="relative p-6 md:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#F4F5F9] to-[#E9ECF5] group rounded-3xl border border-[#E2E6F2] shadow-[0_4px_20px_rgba(76,94,188,0.03)] h-52 md:h-60">
                        {/* Decorative soft glow */}
                        <div className="absolute -right-12 -bottom-12 w-44 h-44 rounded-full bg-[#4C5EBC]/8 blur-2xl pointer-events-none" />
                        
                        {/* Male Body Silhouette Vector (Line Art) */}
                        <svg className="absolute right-0 bottom-0 h-[85%] w-auto opacity-[0.08] text-[#4C5EBC] pointer-events-none select-none z-0" viewBox="0 0 120 180" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M60,15 C64,15 67,12 67,8 C67,4 64,1 60,1 C56,1 53,4 53,8 C53,12 56,15 60,15 Z" />
                          <path d="M60,15 L60,30" />
                          <path d="M30,35 C38,33 48,31 60,31 C72,31 82,33 90,35" />
                          <path d="M30,35 C28,55 33,85 37,95 C39,100 42,120 42,145 L42,180" />
                          <path d="M90,35 C92,55 87,85 83,95 C81,100 78,120 78,180" />
                          <path d="M42,145 C48,148 54,150 60,150 C66,150 72,148 78,145" />
                          <path d="M60,35 L60,135" strokeDasharray="3 3" opacity="0.5" />
                          <path d="M50,60 C53,62 57,62 60,62 C63,62 67,62 70,60" opacity="0.4" />
                          <path d="M48,80 C52,82 56,82 60,82 C64,82 68,82 72,80" opacity="0.4" />
                          <path d="M47,100 C51,102 55,102 60,102 C65,102 69,102 73,100" opacity="0.4" />
                        </svg>

                        {/* Top Row */}
                        <div className="flex justify-between items-center z-10 w-full">
                          <span className="inline-block bg-[#4C5EBC]/10 border border-[#4C5EBC]/20 text-[#4C5EBC] text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-xl">성인 남성 (Male)</span>
                        </div>
                        
                        {/* Bottom/Body Row */}
                        <div className="text-left z-10 w-full mt-4 flex flex-col justify-end">
                          <p className="text-[#5562A3] text-xs md:text-sm font-bold tracking-wide uppercase">복부비만 허리둘레 기준</p>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-4xl md:text-6xl font-black text-[#4C5EBC] tracking-tighter">90</span>
                            <span className="text-gray-800 text-lg md:text-xl font-extrabold">cm 이상</span>
                          </div>
                          <p className="text-gray-400 text-xs mt-2 font-medium">대한비만학회 남성 복부비만 진단 규격</p>
                        </div>
                      </div>

                      {/* Women Box Panel */}
                      <div className="relative p-6 md:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#FDF6F3] to-[#F9EFEA] group rounded-3xl border border-[#F6E6DE] shadow-[0_4px_20px_rgba(254,119,46,0.03)] h-52 md:h-60">
                        {/* Decorative soft glow */}
                        <div className="absolute -right-12 -bottom-12 w-44 h-44 rounded-full bg-[#FE772E]/8 blur-2xl pointer-events-none" />
                        
                        {/* Female Body Silhouette Vector (Line Art) */}
                        <svg className="absolute right-0 bottom-0 h-[85%] w-auto opacity-[0.08] text-[#FE772E] pointer-events-none select-none z-0" viewBox="0 0 120 180" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M60,15 C63.5,15 66,12.5 66,9 C66,5.5 63.5,3 60,3 C56.5,3 54,5.5 54,9 C54,12.5 56.5,15 60,15 Z" />
                          <path d="M60,15 L60,28" />
                          <path d="M35,32 C43,31 49,30 60,30 C71,30 77,31 85,32" />
                          <path d="M35,32 C33,52 38,70 42,88 C44,97 43,105 40,115 C37,125 33,142 33,155 L33,180" />
                          <path d="M85,32 C87,52 82,70 78,88 C76,97 77,105 80,115 C83,125 87,142 87,155 L87,180" />
                          <path d="M40,115 C46,118 54,120 60,120 C66,120 74,118 80,115" />
                          <path d="M60,30 L60,120" strokeDasharray="3 3" opacity="0.5" />
                        </svg>

                        {/* Top Row */}
                        <div className="flex justify-between items-center z-10 w-full">
                          <span className="inline-block bg-[#FE772E]/10 border border-[#FE772E]/20 text-[#FE772E] text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-xl">성인 여성 (Female)</span>
                        </div>
                        
                        {/* Bottom/Body Row */}
                        <div className="text-left z-10 w-full mt-4 flex flex-col justify-end">
                          <p className="text-[#D35914] text-xs md:text-sm font-bold tracking-wide uppercase">복부비만 허리둘레 기준</p>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-4xl md:text-6xl font-black text-[#FE772E] tracking-tighter">85</span>
                            <span className="text-gray-800 text-lg md:text-xl font-extrabold">cm 이상</span>
                          </div>
                          <p className="text-gray-400 text-xs mt-2 font-medium">대한비만학회 여성 복부비만 진단 규격</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 2: ViscFatExplainSection */}
            <div className="flex-[0_0_100%] min-w-0 h-full w-full">
              <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-between py-8 md:py-10 lg:py-12">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="text-center">
                    <h2
                      className="font-paperlogy font-normal text-center text-black text-4xl md:text-5xl lg:text-[62px] mb-12 leading-none"
                      style={{ letterSpacing: '-0.05em' }}
                    >
                      <span className="text-primary font-extrabold">내장지방</span>은 무엇인가요?
                    </h2>
                    <p className="text-black text-[14.4px] md:text-[18px] lg:text-[27px] leading-relaxed max-w-4xl mx-auto mb-6" style={{ letterSpacing: '-0.05em' }}>
                      내장지방은 복강 안 장기 사이 혹은 내방 벽에 존재하는 지방으로 주로 복부에 쌓이며,<br className="hidden md:block" />
                      내장지방이 증가할 수록 배가 불룩하게 나오나 손으로 꼬집었을 때<br className="hidden md:block" />
                      살집이 두껍게 잡히지 않습니다. 주로 중년층의 배둘레증가의 원인이 됩니다.
                    </p>
                  </div>

                  {/* Comparison images */}
                  <div className="flex flex-col md:flex-row gap-5 mb-2 max-w-5xl mx-auto w-full">
                    <div className="flex-1 relative">
                      <div className="border border-[#313131] bg-white rounded-sm overflow-hidden shadow-sm">
                        <div className="relative">
                          <img src="/images/personal/visceral-fat/visceral-fat-3.png" alt="내장지방 정상" className="w-full h-44 md:h-56 lg:h-64 object-cover" />
                          <div className="absolute inset-0 pointer-events-none">
                            <span className="absolute top-[6%] left-[5%] text-black font-bold text-[10px] md:text-xs lg:text-sm" style={{ letterSpacing: '-0.03em' }}>피하지방</span>
                            <div className="absolute top-[26%] left-[21%] w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full" />
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                              <line x1="14" y1="16" x2="22" y2="27" stroke="#000" strokeWidth="0.5" />
                            </svg>
                            <span className="absolute top-[6%] right-[5%] text-black font-bold text-[10px] md:text-xs lg:text-sm" style={{ letterSpacing: '-0.03em' }}>내장지방</span>
                            <div className="absolute top-[48%] right-[32%] w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full" />
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                              <line x1="85" y1="16" x2="67" y2="50" stroke="#000" strokeWidth="0.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="bg-[#313131] text-white text-center py-2 text-sm md:text-base lg:text-lg">내장지방 정상</div>
                      </div>
                    </div>

                    <div className="flex-1 relative">
                      <div className="border-2 border-primary bg-white rounded-sm overflow-hidden shadow-sm">
                        <div className="relative">
                          <img src="/images/personal/visceral-fat/visceral-fat-4.png" alt="내장지방 과다" className="w-full h-44 md:h-56 lg:h-64 object-cover" />
                          <div className="absolute inset-0 pointer-events-none">
                            <span className="absolute top-[6%] left-[5%] text-black font-bold text-[10px] md:text-xs lg:text-sm" style={{ letterSpacing: '-0.03em' }}>피하지방</span>
                            <div className="absolute top-[26%] left-[24%] w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full" />
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                              <line x1="14" y1="16" x2="25" y2="27" stroke="#000" strokeWidth="0.5" />
                            </svg>
                            <span className="absolute top-[6%] right-[5%] text-black font-bold text-[10px] md:text-xs lg:text-sm" style={{ letterSpacing: '-0.03em' }}>내장지방</span>
                            <div className="absolute top-[45%] right-[28%] w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full" />
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                              <line x1="85" y1="16" x2="71" y2="47" stroke="#000" strokeWidth="0.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="bg-primary text-white text-center py-2 text-sm md:text-base lg:text-lg">내장지방 과다</div>
                      </div>
                    </div>
                  </div>

                  {/* 2cm Pinch Criteria Card */}
                  <div className="relative rounded-2xl overflow-hidden border border-gray-150 shadow-[0_4px_12px_rgba(0,0,0,0.01)] max-w-5xl mx-auto w-full">
                    <div className="relative grid grid-cols-1 md:grid-cols-2">
                      <div className="relative bg-gradient-to-br from-[#F0F2E7] via-[#ECEEE2] to-[#E5E8D8] p-4 flex items-center gap-5 overflow-hidden">
                        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-primary/[0.03]" />
                        <div className="relative flex-shrink-0">
                          <div className="absolute -inset-0.5 rounded-xl bg-primary/10 blur-sm" />
                          <div className="relative w-24 h-9 md:w-28 md:h-11 rounded-xl bg-gradient-to-br from-primary via-[#7A9510] to-[#5C7A00] flex items-center justify-center gap-1.5 shadow-md">
                            <span className="text-white font-extrabold text-sm md:text-base leading-none mt-0.5">2cm</span>
                            <span className="text-white/80 text-sm md:text-base font-medium leading-none mt-0.5">이하</span>
                          </div>
                        </div>
                        <div className="relative z-10">
                          <p className="text-black font-bold text-lg md:text-xl" style={{ letterSpacing: '-0.03em' }}>내장지방</p>
                        </div>
                      </div>

                      <div className="relative bg-gradient-to-br from-white via-[#FAFBF7] to-[#F4F6EE] p-4 flex items-center gap-5 overflow-hidden border-t md:border-t-0 md:border-l border-gray-150">
                        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-primary/[0.03]" />
                        <div className="relative flex-shrink-0">
                          <div className="absolute -inset-0.5 rounded-xl bg-primary/10 blur-sm" />
                          <div className="relative w-24 h-9 md:w-28 md:h-11 rounded-xl bg-gradient-to-br from-primary via-[#7A9510] to-[#5C7A00] flex items-center justify-center gap-1.5 shadow-md">
                            <span className="text-white font-extrabold text-sm md:text-base leading-none mt-0.5">2cm</span>
                            <span className="text-white/80 text-sm md:text-base font-medium leading-none mt-0.5">이상</span>
                          </div>
                        </div>
                        <div className="relative z-10">
                          <p className="text-black font-bold text-lg md:text-xl" style={{ letterSpacing: '-0.03em' }}>피하지방 <span className="text-primary">↑</span></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-black text-[14.4px] md:text-[18px] lg:text-[27px] leading-relaxed max-w-4xl mx-auto mt-4" style={{ letterSpacing: '-0.05em' }}>
                    내장지방의 증가는 혈액 내 지질 수치의 증가로 이어져<br className="hidden md:block" />
                    <strong className="text-primary font-bold">콜레스테롤 혈증 → 동맥경화 → 고혈압 → 뇌혈류장애, 심장혈관질환으로<br className="hidden md:block" />
                    진행할 수 있어</strong> 복강 내 여유 공간을 감소시켜<br className="hidden md:block" />
                    혈류-림프순환 장애와 위장관 운동성 저하를 유발하게 됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* SLIDE 3: ViscFatCausesSection */}
            <div className="flex-[0_0_100%] min-w-0 h-full w-full">
              <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-between py-8 md:py-10 lg:py-12">
                <div className="text-center max-w-4xl mx-auto w-full h-full flex flex-col justify-between">
                  <div>
                    <h2 className="font-paperlogy font-normal text-black text-4xl md:text-5xl lg:text-[62px] mb-10 leading-none" style={{ letterSpacing: '-0.05em' }}>
                      내장지방은 <span className="text-primary font-extrabold">왜 생기는 걸까요?</span>
                    </h2>
                  </div>

                  {/* 4 Causes Circle List - 2x2 grid layout */}
                  <div className="grid grid-cols-2 gap-x-12 md:gap-x-20 lg:gap-x-28 gap-y-8 md:gap-y-12 my-10 md:my-16 lg:my-20 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
                    {causes.map((c) => (
                      <div key={c.label} className="flex flex-col items-center gap-4">
                        <div className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-[#ECEEE2] flex items-center justify-center relative">
                          <img src={c.img} alt={c.label} className={`w-full h-full object-contain p-1 transition-transform duration-300 ${c.imgScale || ''}`} />
                        </div>
                        <div className="bg-primary text-white rounded-full px-8 py-2 text-lg md:text-xl lg:text-[24px] font-bold shadow-sm">{c.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-black text-[14.4px] md:text-[18px] lg:text-[27px] leading-relaxed max-w-5xl mx-auto" style={{ letterSpacing: '-0.05em' }}>
                    그 외 흡연 and 비활동성도 그렇지 않은 성인보다 1.2~1.3배 유병율을 올리게 됩니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Left/Right Chevron Buttons (Always present in DOM, visually disabled/enabled) */}
        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-150 flex items-center justify-center text-gray-700 shadow-xl transition-all z-20 hover:bg-gray-50 focus:outline-none ${
            !prevBtnEnabled ? 'opacity-30 cursor-not-allowed pointer-events-none' : 'opacity-100 cursor-pointer'
          }`}
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-150 flex items-center justify-center text-gray-700 shadow-xl transition-all z-20 hover:bg-gray-50 focus:outline-none ${
            !nextBtnEnabled ? 'opacity-30 cursor-not-allowed pointer-events-none' : 'opacity-100 cursor-pointer'
          }`}
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 3. Mobile Dots Indicator */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-2 mt-6">
          {tabs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedIndex === idx ? 'w-8 bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
