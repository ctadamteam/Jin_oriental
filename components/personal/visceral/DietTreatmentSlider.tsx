'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Medicine = {
  name: string;
  img: string;
  description: string;
  tags: string[];
};

type ExamItem = {
  key: string;
  organ: string;
  location: string;
  tags: string[];
  symptoms: string[];
  side: 'left' | 'right';
  desktopTop: string;
  desktopLeft?: string;
  desktopRight?: string;
  textAlignment: string;
};

export default function DietTreatmentSlider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const tabs = [
    { title: '치료한약' },
    { title: '복부 진찰법' },
    { title: '복부진찰의 중요성' },
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

  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setPrevBtnEnabled(api.canScrollPrev());
    setNextBtnEnabled(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    const timer = setTimeout(() => {
      if (emblaApi) {
        emblaApi.reInit();
        onSelect(emblaApi);
      }
    }, 150);
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

  const medicines: Medicine[] = [
    {
      name: '소체환',
      img: '/images/personal/visceral-fat/visceral-fat-13.png',
      description: '습담(濕痰)이 위장에 정체되어 일어난 팽만감을 치료합니다.',
      tags: ['식후도포감', '소화불량', '위식도 역류질환', '신경성위염'],
    },
    {
      name: '담적환',
      img: '/images/personal/visceral-fat/visceral-fat-14.png',
      description: '체내의 특히 위장관 쪽의 비정상적인 생리물질을 제거하는 데 처방됩니다.',
      tags: ['오심', '구토', '어지럼증', '두근거림'],
    },
    {
      name: '보혈환',
      img: '/images/personal/visceral-fat/visceral-fat-15.png',
      description: '혈허로 인한 월경불순 · 불임 · 갱년기 증상을 치료합니다.',
      tags: ['빈혈', '저혈압', '수족저림'],
    },
    {
      name: '수독환',
      img: '/images/personal/visceral-fat/visceral-fat-16.png',
      description: '몸 안의 수독(水毒)을 끌어내고 몸이 붓는 부종을 치료하는 데 처방됩니다.',
      tags: ['부종', '현기증', '소변이 시원치 않는 증상'],
    },
    {
      name: '가미소요산',
      img: '/images/personal/visceral-fat/visceral-fat-17.png',
      description: '울화(火)가 쌓여 나타나는 스트레스성 증상을 치료합니다.',
      tags: ['불면', '두근거림', '스트레스 완화', '근긴장 해소'],
    },
    {
      name: '어혈환',
      img: '/images/personal/visceral-fat/visceral-fat-18.png',
      description: '관절 주위의 원활한 혈액 흐름을 돕고, 어혈을 제거하여 연골 손상을 예방하고 만성 통증 완화에 좋습니다.',
      tags: ['수족저림', '요통', '슬통', '퇴행성관절염'],
    },
  ];

  const examItems: ExamItem[] = [
    {
      key: 'myungchi',
      organ: '명치부근',
      location: '',
      tags: ['#위열'],
      symptoms: ['역류성식도염', '신경성위염'],
      side: 'right',
      desktopTop: '10.0%',
      desktopLeft: '75.0%',
      textAlignment: 'text-left',
    },
    {
      key: 'liver',
      organ: '간',
      location: '오른쪽 갈비뼈 밑',
      tags: ['#간열', '#어혈'],
      symptoms: ['간기능저하', '간피로'],
      side: 'left',
      desktopTop: '34.0%',
      desktopLeft: '0.0%',
      textAlignment: 'text-left',
    },
    {
      key: 'stomach',
      organ: '위',
      location: '명치와 배꼽사이 중간',
      tags: ['#식적'],
      symptoms: ['기능성, 운동성 소화불량증'],
      side: 'right',
      desktopTop: '35.0%',
      desktopLeft: '75.0%',
      textAlignment: 'text-left',
    },
    {
      key: 'smallIntestine',
      organ: '소장',
      location: '배꼽주위',
      tags: ['#담적', '#습담'],
      symptoms: ['장운동성저하', '장명', '복부팽만감', '가스'],
      side: 'left',
      desktopTop: '60.0%',
      desktopLeft: '0.0%',
      textAlignment: 'text-left',
    },
    {
      key: 'largeIntestine',
      organ: '대장',
      location: '우, 좌측 아랫배',
      tags: [],
      symptoms: ['변비'],
      side: 'right',
      desktopTop: '56.5%',
      desktopLeft: '75.0%',
      textAlignment: 'text-left',
    },
    {
      key: 'uterus',
      organ: '자궁',
      location: '아랫배',
      tags: ['#자궁냉냉', '#어혈'],
      symptoms: ['생리불순', '생리통', '냉대하'],
      side: 'right',
      desktopTop: '73.0%',
      desktopLeft: '75.0%',
      textAlignment: 'text-left',
    },
  ];

  const pinPositions = {
    myungchi: { left: '53.6%', top: '36.8%' },
    liver: { left: '48.1%', top: '48.2%' },
    stomach: { left: '58.6%', top: '50.0%' },
    smallIntestine: { left: '52.6%', top: '68.0%' },
    largeIntestine: { left: '59.8%', top: '67.0%' },
    uterus: { left: '53.6%', top: '79.5%' },
  };

  if (!isMounted) {
    return (
      <div className="w-full h-[800px] flex items-center justify-center bg-white">
        <div className="text-gray-400 font-medium">로딩 중...</div>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 w-full overflow-x-hidden border-b border-gray-200">
      {/* 1. Tabs Section - matching Section 3 pill style */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex items-center gap-1 bg-[#F4F5F0] p-1.5 rounded-full border border-gray-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] max-w-full overflow-x-auto no-scrollbar">
            {/* Sliding Pill Background */}
            <div
              className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-primary shadow-[0_4px_12px_rgba(139,166,18,0.25)] transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) w-[120px] sm:w-[130px] md:w-[150px] lg:w-[180px]"
              style={{
                transform: `translateX(calc(${selectedIndex} * (100% + 4px)))`,
              }}
            />
            {tabs.map((tab, idx) => {
              const isActive = selectedIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`relative z-10 flex items-center justify-center px-2 py-3 rounded-full text-xs md:text-sm lg:text-base font-bold whitespace-nowrap transition-colors duration-300 w-[120px] sm:w-[130px] md:w-[150px] lg:w-[180px] ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-500 hover:text-primary-dark'
                  }`}
                >
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

      {/* 2. Slider Viewport Container (Embla Carousel) */}
      <div className="relative w-full overflow-hidden">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex w-full touch-pan-y">

            {/* SLIDE 1: Medicine Section */}
            <div className="flex-[0_0_100%] min-w-0 w-full pt-6 lg:pt-10">
              <div className="max-w-6xl mx-auto px-6">
                <h2
                  className="font-paperlogy text-center font-normal text-black text-4xl md:text-5xl lg:text-[62px] mb-16 md:mb-20 leading-[1.15]"
                  style={{ letterSpacing: '-0.05em' }}
                >
                  내장지방을 빼기 위한<br />
                  <span className="text-primary font-extrabold">특별한 노하우를 담은 치료한약</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                  {medicines.map((m) => (
                    <div key={m.name} className="flex flex-col sm:flex-row gap-5 items-start p-4 md:p-5 rounded-2xl hover:bg-slate-50/50 transition-colors duration-300">
                      {/* Medicine image */}
                      <div className="flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-md border-2 border-primary/10">
                        <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                      </div>
                      {/* Info */}
                      <div className="flex-1 w-full">
                        {/* Name with green bar */}
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <div className="w-1.5 h-6 md:h-7 bg-primary flex-shrink-0 rounded-full" />
                          <h3 className="font-bold text-lg md:text-2xl lg:text-[30px] text-black" style={{ letterSpacing: '-0.05em' }}>{m.name}</h3>
                        </div>
                        <p className="text-gray-800 text-sm md:text-lg lg:text-[23px] mb-3 leading-snug" style={{ letterSpacing: '-0.05em' }}>{m.description}</p>
                        {/* Tags */}
                        <div className="border border-dashed border-primary/40 bg-primary/[0.01] rounded-xl px-4 py-2 flex flex-wrap gap-x-2 md:gap-x-3 gap-y-1 md:gap-y-1.5">
                          {m.tags.map((tag) => (
                            <span key={tag} className="text-[#7E8E6E] text-xs md:text-sm lg:text-[19px] font-medium leading-tight">ㆍ{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SLIDE 2: Abdominal Exam Section */}
            <div className="flex-[0_0_100%] min-w-0 w-full pt-6 lg:pt-10">
              <div className="max-w-6xl mx-auto px-6">
                <h2
                  className="font-paperlogy text-center font-normal text-black text-4xl md:text-5xl lg:text-[62px] mb-16 md:mb-20 leading-[1.15]"
                  style={{ letterSpacing: '-0.05em' }}
                >
                  장기별 불편 증상에 따른<br />
                  <span className="text-primary font-extrabold">복부 진찰법</span>
                </h2>

                {/* ────────── DESKTOP VIEW (Lg 이상: 지시선이 있는 정밀 다이어그램) ────────── */}
                <div className="relative w-full aspect-[840/560] max-w-[980px] mx-auto hidden lg:block select-none">
                  {/* 중앙 복부 이미지 */}
                  <div className="absolute top-[10%] left-[33.4%] w-[35.7%] h-[78.5%] flex justify-center items-center">
                    <img
                      src="/images/personal/visceral-fat/visceral-fat-19.png"
                      alt="복부 진찰법 다이어그램"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* SVG 지시선 연결 */}
                  <svg viewBox="0 0 840 560" className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* 간 */}
                    <path d="M 245 220 L 330 220 L 404 270" stroke="#BEE622" strokeWidth="1.2" fill="none" opacity="0.6" />
                    {/* 소장 */}
                    <path d="M 245 366 L 330 366 L 442 381" stroke="#BEE622" strokeWidth="1.2" fill="none" opacity="0.6" />
                    {/* 명치부근 */}
                    <path d="M 620 85 L 560 85 L 450 206" stroke="#BEE622" strokeWidth="1.2" fill="none" opacity="0.6" />
                    {/* 위 */}
                    <path d="M 620 226 L 560 226 L 492 280" stroke="#BEE622" strokeWidth="1.2" fill="none" opacity="0.6" />
                    {/* 대장 */}
                    <path d="M 620 346 L 560 346 L 502 375" stroke="#BEE622" strokeWidth="1.2" fill="none" opacity="0.6" />
                    {/* 자궁 */}
                    <path d="M 620 440 L 560 440 L 450 445" stroke="#BEE622" strokeWidth="1.2" fill="none" opacity="0.6" />
                  </svg>

                  {/* 6개 진찰 핀 포인트 */}
                  {Object.entries(pinPositions).map(([key, pos]) => (
                    <div
                      key={key}
                      className="absolute w-4 h-4 rounded-full border border-[#BEE622] bg-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_2px_4px_rgba(0,0,0,0.1)] z-20"
                      style={{ top: pos.top, left: pos.left }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#BEE622]" />
                    </div>
                  ))}

                  {/* 좌우 텍스트 상세 카드 배치 */}
                  {examItems.map((item) => {
                    const isLeft = item.side === 'left';
                    const positionStyle: React.CSSProperties = {
                      position: 'absolute',
                      top: item.desktopTop,
                      width: isLeft ? '270px' : '310px',
                      left: item.desktopLeft,
                    };

                    return (
                      <div key={item.key} style={positionStyle} className="text-left flex flex-col items-start">
                        <div className="flex items-baseline gap-2.5 mb-2 justify-start">
                          <h4 className="text-[#BEE622] text-2xl lg:text-[27px] font-bold font-pretendard">{item.organ}</h4>
                          {item.location && <span className="text-gray-400 text-sm lg:text-[18px] font-semibold">{item.location}</span>}
                        </div>

                        {item.tags.length > 0 && (
                          <div className="mb-2.5 flex justify-start">
                            <span className={`inline-block bg-[#BEE622] text-white text-xs lg:text-[16px] font-bold py-1 ${isLeft ? 'w-[270px]' : 'w-[240px] lg:w-[270px]'} text-left px-3 rounded-none`}>
                              {item.tags.join(' ')}
                            </span>
                          </div>
                        )}

                        <ul className="list-none pl-0 space-y-1 text-gray-800 text-sm lg:text-[19px] leading-snug font-semibold">
                          {item.symptoms.map((sym) => (
                            <li key={sym}>· {sym}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* ────────── MOBILE VIEW (Lg 미만: 일러스트 상단 + 아래 수직 리스트) ────────── */}
                <div className="lg:hidden flex flex-col gap-10 items-center">
                  {/* 중앙 복부 일러스트 & 핀 */}
                  <div className="relative w-[280px] h-[373px] flex justify-center items-center shrink-0">
                    <img
                      src="/images/personal/visceral-fat/visceral-fat-19.png"
                      alt="복부 진찰법 다이어그램"
                      className="w-full h-full object-contain"
                    />
                    {/* 모바일 핀 오버레이 */}
                    {Object.entries(pinPositions).map(([key, pos]) => (
                      <div
                        key={key}
                        className="absolute w-3.5 h-3.5 rounded-full border border-[#BEE622] bg-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-sm z-25"
                        style={{ top: pos.top, left: pos.left }}
                      >
                        <div className="w-1.2 h-1.2 rounded-full bg-[#BEE622]" />
                      </div>
                    ))}
                  </div>

                  {/* 모바일 텍스트 목록 (2열 그리드 또는 1열) */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {examItems.map((item) => (
                      <div key={item.key} className="border-l-2 border-[#BEE622] pl-4 py-1.5 bg-slate-50/50 rounded-r-xl">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <h4 className="text-[#BEE622] text-xl lg:text-[23px] font-bold font-pretendard">{item.organ}</h4>
                          {item.location && <span className="text-gray-400 text-sm lg:text-[16px] font-medium">{item.location}</span>}
                          {item.tags.length > 0 && (
                            <span className="bg-[#BEE622] text-white text-xs lg:text-[14px] py-0.5 w-[150px] text-left px-2.5 rounded-none font-bold">
                              {item.tags.join(' ')}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-gray-800 text-base lg:text-[18px] font-semibold">
                          {item.symptoms.map((sym) => (
                            <span key={sym}>· {sym}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 3: Why Exam Important Section */}
            <div className="flex-[0_0_100%] min-w-0 w-full pt-6 lg:pt-10">
              <div className="max-w-6xl mx-auto px-6">
                {/* Title badge */}
                <div className="flex justify-center mb-10">
                  <div className="bg-primary text-white px-8 py-3 rounded-full text-base md:text-2xl font-bold">
                    복부진찰법이 <span className="font-bold">중요한 이유</span>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Text content */}
                  <div className="flex-1 space-y-6">
                    <p className="text-gray-800 text-sm md:text-base lg:text-[27px] leading-relaxed" style={{ letterSpacing: '-0.05em' }}>
                      복부는 흉부와 달리 흉곽으로 덮여있지 않아 복부 안의 장기를 촉진하여 압통처의 반응, 종양유무, 장부의 건강 상태 등을 알아볼 수 있습니다.
                    </p>
                    <p className="text-gray-800 text-sm md:text-base lg:text-[27px] leading-relaxed" style={{ letterSpacing: '-0.05em' }}>
                      정상적인 경우 일정한 세기로 눌렀을 때 배가 많이 아프다던지, 단단하던지, 뭉쳤다던지, 차가운 느낌이 들면 거기 위치해 있는 장기가 편하지 않거나 활동성이 떨어져 있거나 해당 부위로 혈액-림프 흐름이 저하되어 있을 확률이 많습니다.
                    </p>
                    <p className="text-gray-800 text-sm md:text-base lg:text-[27px] leading-relaxed" style={{ letterSpacing: '-0.05em' }}>
                      즉, 배가 편하지 않은 사람이 장기의 피로도가 쌓여있고 장기주변의 혈류가 좋지 못해서 산소포화도가 낮고 염증 물질은 많아서 피가 끈끈해서 머리와 팔다리의 혈행도 나빠져서 얼굴과 손발이 잘 붓고 차고 저리다는 증세를 호소하게 됩니다.
                    </p>
                  </div>

                  {/* Doctor image */}
                  <div className="flex-shrink-0 w-full lg:w-80 xl:w-96">
                    <div className="bg-[#D9D9D9] rounded-xl overflow-hidden aspect-[2/3] shadow-md">
                      <img
                        src="/images/personal/visceral-fat/visceral-fat-20.png"
                        alt="복부 진찰"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Clinical significance card */}
                <div className="mt-12 bg-slate-50/50 rounded-2xl border border-gray-100 p-6 md:p-8">
                  <div className="flex justify-center mb-8">
                    <div className="bg-primary text-white px-8 py-2.5 rounded-full text-base md:text-xl font-bold">
                      복부의 <span className="font-bold">임상적 의미</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        num: '1',
                        title: '복부는 동맥혈과 정맥혈의 교류처',
                        detail: '복부의 세로중심선에 해당하는 부분이 복부대동맥 근처로 심장에서 나간 혈액이 뇌 혹은 복부 중요 장기로의 공급 상황을 반영하기 때문',
                      },
                      { num: '2', title: '소화기계 특히 소장, 간 등이 면역 기능과 관련', detail: '' },
                      { num: '3', title: '복부는 오장육부의 집결지', detail: '' },
                      { num: '4', title: '장벽의 평활근의 이완과 수축은 내부 장기의 건강 상태를 반영', detail: '' },
                    ].map((item) => (
                      <div key={item.num} className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 md:w-9 md:h-9 bg-primary flex items-center justify-center flex-shrink-0 rounded-lg shadow-sm">
                            <span className="text-white font-bold text-sm md:text-base">{item.num}</span>
                          </div>
                          <p className="font-semibold text-gray-900 text-sm md:text-base lg:text-[23px]" style={{ letterSpacing: '-0.05em' }}>{item.title}</p>
                        </div>
                        {item.detail && (
                          <p className="ml-11 md:ml-12 text-gray-600 text-xs md:text-sm lg:text-[18px] mt-1.5" style={{ letterSpacing: '-0.04em' }}>{item.detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
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
