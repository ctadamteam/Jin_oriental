'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MainPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isHideToday, setIsHideToday] = useState(false);

  // 페이지 마운트 시 로컬 스토리지 확인하여 노출 여부 결정 (모바일은 월별이벤트(3)를 첫 화면으로, PC는 방송안내(0) 유지)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setActiveTab(mql.matches ? 3 : 0);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setActiveTab(e.matches ? 3 : 0);
    };
    mql.addEventListener('change', handleMediaChange);

    const hideUntil = localStorage.getItem('hide_main_popup_until');
    if (!hideUntil || new Date().getTime() > parseInt(hideUntil, 10)) {
      setIsOpen(true);
    }

    return () => mql.removeEventListener('change', handleMediaChange);
  }, []);

  const handleClose = () => {
    if (isHideToday) {
      // 24시간(86400000ms) 동안 숨김
      const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem('hide_main_popup_until', expiry.toString());
    }
    setIsOpen(false);
  };

  const toggleHideToday = () => {
    setIsHideToday(!isHideToday);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-[3px] p-3 sm:p-4 animate-fade-in">
      {/* 팝업 카드: 모바일은 360x600 고정 규격 통일, PC(md 이상)는 기존 규격 100% 동일 유지 */}
      <div className="main-popup-root relative w-[min(360px,calc(100vw-24px))] h-[min(600px,calc(100dvh-24px))] md:w-full md:max-w-[1080px] md:h-auto md:max-h-[92vh] bg-primary-popup rounded-none overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col md:flex-row">
        
        {/* 우측 상단 닫기 X 버튼 (모바일: 1-C 우측 상단 탭 모서리 위 / 데스크톱: 기존 위치·스타일 100% 유지) */}
        <button 
          onClick={handleClose}
          className={`absolute top-1.5 right-1.5 md:top-4 md:right-4 z-30 text-base md:text-2xl font-bold w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all cursor-pointer select-none md:text-white/80 md:hover:text-white md:bg-black/30 md:hover:bg-black/45 ${
            activeTab === 0
              ? 'bg-[#0B203E]/15 text-[#0B203E] hover:bg-[#0B203E]/25'
              : 'bg-black/25 text-white/85 hover:text-white hover:bg-black/45'
          }`}
          aria-label="닫기"
        >
          &times;
        </button>
 
        {/* 카테고리 바 (모바일: ①월별이벤트 ②방송안내 ③휴진안내 ④비대면 다이어트한약 / 데스크톱: 기존 순서 100% 유지) */}
        <div className="w-full h-[76px] md:h-auto md:w-[240px] bg-primary-popup flex flex-row md:flex-col justify-between md:pt-0 md:pb-6 shrink-0 select-none">
          <div className="w-full h-full md:h-auto grid grid-cols-2 grid-rows-2 md:flex md:flex-col justify-start">
            <button 
              onClick={() => setActiveTab(0)}
              className={`order-2 md:order-none h-full md:h-auto md:py-5 px-2 md:px-6 flex items-center justify-center md:block text-center md:text-left text-xs md:text-sm lg:text-base font-bold tracking-tight md:tracking-normal transition-all relative border-b border-white/10 md:border-none cursor-pointer outline-none focus:outline-none ${
                activeTab === 0 
                  ? 'bg-[#EEEFF1] text-primary-dark md:rounded-r-none'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              방송안내
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              className={`order-3 md:order-none h-full md:h-auto md:py-5 px-2 md:px-6 flex items-center justify-center md:block text-center md:text-left text-xs md:text-sm lg:text-base font-bold tracking-tight md:tracking-normal transition-all relative border-r border-white/10 md:border-none cursor-pointer outline-none focus:outline-none ${
                activeTab === 1 
                  ? 'bg-[#EEEFF1] text-primary-dark md:rounded-r-none'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              휴진안내
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`order-4 md:order-none h-full md:h-auto md:py-5 px-2 md:px-6 flex items-center justify-center md:block text-center md:text-left text-xs md:text-sm lg:text-base font-bold tracking-tight md:tracking-normal transition-all relative md:border-none cursor-pointer whitespace-nowrap outline-none focus:outline-none ${
                activeTab === 2 
                  ? 'bg-[#EEEFF1] text-primary-dark md:rounded-r-none'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              비대면 다이어트한약
            </button>
            <button 
              onClick={() => setActiveTab(3)}
              className={`order-1 md:order-none h-full md:h-auto md:py-5 px-2 md:px-6 flex items-center justify-center md:block text-center md:text-left text-xs md:text-sm lg:text-base font-bold tracking-tight md:tracking-normal transition-all relative border-r border-b border-white/10 md:border-none cursor-pointer outline-none focus:outline-none ${
                activeTab === 3 
                  ? 'bg-[#EEEFF1] text-primary-dark md:rounded-r-none'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              월별이벤트
            </button>
          </div>
 
          {/* 탭바 하단 진한의원 로고 (데스크톱 전용) */}
          <div className="hidden md:flex justify-center items-center px-4 mt-auto pt-8">
            <img 
              src="/images/logo.png" 
              alt="진한의원" 
              className="w-[120px] h-auto object-contain pointer-events-none select-none" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>
 
        {/* 우측 콘텐츠 및 상세 영역 */}
        <div className="flex-1 flex flex-col justify-between overflow-hidden md:min-h-[560px] lg:h-[600px]">
          
          {/* 동적 탭 컨텐츠 (모바일/PC 모두 스크롤 미발생 overflow-hidden 고정) */}
          <div className="flex-1 relative overflow-hidden flex flex-col">
            
            {/* ============================================================
                1. 방송안내 탭
               ============================================================ */}
            {activeTab === 0 && (
              <>
                {/* [PC 전용] 기존 레이아웃 100% 그대로 유지 */}
                <div className="hidden md:flex flex-1 w-full h-full md:p-8 lg:p-9 text-white flex-row items-center justify-between relative overflow-hidden select-text">
                  <div
                    className="absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                    style={{ backgroundImage: "url('/images/main/popup/popup_bg_1_clean.jpg')" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none select-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, rgba(57, 50, 46, 0.90) 0%, rgba(57, 50, 46, 0.78) 22%, rgba(57, 50, 46, 0.48) 39%, rgba(57, 50, 46, 0.18) 52%, rgba(57, 50, 46, 0) 64%)',
                    }}
                  />

                  <div className="max-w-[50%] relative z-10 flex flex-col justify-center [text-shadow:0_1px_2px_rgba(0,0,0,0.28)]">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-paperlogy font-extrabold italic tracking-tight bg-[#ED193A] px-2 py-0.5 rounded text-xs">
                        KNN
                      </span>
                      <span className="text-xs text-blue-200/90 font-medium tracking-tight">
                        부산경남 대표방송 메디컬 24시 닥터스
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-[28px] font-extrabold leading-tight mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                      김효진 대표원장 방송출연
                    </h3>
                    <div className="space-y-3 mb-4">
                      <p className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm lg:text-[15px] font-bold leading-relaxed">
                        <span className="inline-flex w-[64px] justify-center rounded-full bg-white px-2.5 py-px text-[#08325C]">주&nbsp;&nbsp;&nbsp;제</span>
                        <span className="text-white">중년비만, 부종비만, 갱년기</span>
                      </p>
                      <p className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm lg:text-[15px] font-bold leading-relaxed">
                        <span className="inline-flex w-[64px] justify-center rounded-full bg-white px-2.5 py-px text-[#08325C]">본방송</span>
                        <span className="text-white">2024년 7월 1일(월요일) ~ 7월 5일(금요일) 오후 5시 50분</span>
                      </p>
                    </div>

                    <div className="max-w-[460px] space-y-2 text-[13px] lg:text-sm leading-relaxed text-white/95 mb-5 font-normal">
                      <p>
                        #KNN웰빙라이프 녹음을 하고 왔습니다.
                        <br />
                        2024년 7월 1일 월요일부터 5일 금요일까지
                        <br />
                        오후 5시 50분 방송이 된다고 하네요 😘
                      </p>
                      <p>
                        #중년비만 #부종비만 #갱년기에 대해
                        <br />
                        이야기하는 시간을 가질 수 있어서 너무 즐거운 녹음이었습니다.
                      </p>
                      <p className="font-semibold text-[#A4B7CC]">#진한의원 #knn주치의 #김효진원장</p>
                    </div>
                    
                    <div>
                      <a 
                        href="/#jin-story"
                        onClick={handleClose}
                        className="inline-flex items-center justify-center bg-white text-blue-900 font-bold px-6 py-2.5 rounded-full text-sm shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                      >
                        방송 바로보기
                      </a>
                    </div>
                  </div>

                  <div className="relative z-10 self-center text-right">
                    <p className="font-paperlogy font-normal text-[#212121] text-[20px] lg:text-[25px] leading-[1.22] tracking-[-0.05em] mb-3">
                      식욕억제 단계만
                      <br />
                      나눠진 기성한약이 아닌
                    </p>
                    <p className="font-paperlogy font-extrabold text-[32px] lg:text-[40px] leading-[1.13] tracking-[-0.05em]">
                      <span className="text-[#263976]">
                        개인별 / 원인별
                        <br />
                        일대일
                        <br />
                        맞춤한약만
                      </span>
                      <span className="text-[#212121]">
                        을
                        <br />
                        고집합니다
                      </span>
                    </p>
                  </div>
                </div>

                {/* [모바일 전용] 상단 베이지톤 중앙 정렬 3줄 홍보문구 -> 중단 인물 노출 -> 하단 바닥 밀착형 그라데이션 위 방송정보+버튼 */}
                <div className="flex md:hidden flex-1 w-full h-full flex-col justify-between relative overflow-hidden select-text bg-[#2A2421]">
                  {/* 인물 배경 이미지 (중단 우측에 얼굴이 온전히 보이도록 배치하고 하단은 그라데이션 안으로 완전히 수렴) */}
                  <div
                    className="absolute inset-x-0 top-[52px] h-[340px] bg-cover bg-[position:55%_10%] pointer-events-none select-none"
                    style={{ backgroundImage: "url('/images/main/popup/popup_bg_1_clean.jpg')" }}
                  />
                  {/* 상단 베이지톤 소프트 연결 그라데이션 */}
                  <div
                    className="absolute inset-x-0 top-0 h-[125px] pointer-events-none select-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(180deg, #DFD6C7 0%, #DFD6C7 48%, rgba(223, 214, 199, 0.85) 75%, rgba(223, 214, 199, 0) 100%)',
                    }}
                  />
                  {/* 하단 다크 브라운 그라데이션 (들뜸 없이 바닥 #2A2421에 100% 솔리드로 밀착) */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-[295px] pointer-events-none select-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(180deg, rgba(42, 36, 33, 0) 0%, rgba(42, 36, 33, 0.15) 10%, rgba(42, 36, 33, 0.62) 22%, rgba(42, 36, 33, 0.86) 36%, rgba(42, 36, 33, 0.96) 52%, #2A2421 70%, #2A2421 100%)',
                    }}
                  />

                  {/* 상단: 베이지톤 위 3줄 홍보 문구 (가운데 정렬 + 크기 확대) */}
                  <div className="relative z-10 px-3 pt-3.5 text-center">
                    <p className="font-paperlogy font-normal text-[#212121] text-[13px] min-[360px]:text-[13.5px] leading-[1.28] tracking-[-0.05em] mb-1">
                      식욕억제 단계만 나눠진 기성한약이 아닌
                    </p>
                    <p className="font-paperlogy font-extrabold text-[18.5px] min-[360px]:text-[20px] leading-[1.18] tracking-[-0.05em]">
                      <span className="text-[#263976]">
                        개인별 / 원인별
                        <br />
                        일대일 맞춤한약만
                      </span>
                      <span className="text-[#212121]">을 고집합니다</span>
                    </p>
                  </div>

                  {/* 하단: 기존 방송정보 문구 + 버튼 (100% 보존, 얼굴 겹침 없음) */}
                  <div className="relative z-10 px-4 pb-3.5 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span className="font-paperlogy font-extrabold italic tracking-tight bg-[#ED193A] px-1.5 py-0.5 rounded text-[10px] shadow-sm">
                        KNN
                      </span>
                      <span className="text-[10px] text-white/95 font-semibold tracking-tight [text-shadow:0_1px_4px_rgba(0,0,0,0.85)]">
                        부산경남 대표방송 메디컬 24시 닥터스
                      </span>
                    </div>

                    <h3 className="text-[17px] min-[360px]:text-[18px] font-extrabold leading-tight mb-1.5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                      김효진 대표원장 방송출연
                    </h3>

                    <div className="space-y-1 mb-2">
                      <p className="flex items-center flex-wrap gap-x-1.5 gap-y-0.5 text-[11px] min-[360px]:text-[11.5px] font-bold leading-snug">
                        <span className="inline-flex w-[48px] justify-center rounded-full bg-white px-2 py-px text-[10px] text-[#08325C]">주&nbsp;&nbsp;&nbsp;제</span>
                        <span className="text-white">중년비만, 부종비만, 갱년기</span>
                      </p>
                      <p className="flex items-center flex-wrap gap-x-1.5 gap-y-0.5 text-[10.5px] min-[360px]:text-[11px] font-bold leading-snug tracking-tight">
                        <span className="inline-flex w-[48px] justify-center rounded-full bg-white px-2 py-px text-[10px] text-[#08325C]">본방송</span>
                        <span className="text-white">2024년 7월 1일(월요일) ~ 7월 5일(금요일) 오후 5시 50분</span>
                      </p>
                    </div>

                    <div className="space-y-1 text-[10.5px] min-[360px]:text-[11px] leading-[1.36] text-white/95 mb-2.5 font-normal">
                      <p>
                        #KNN웰빙라이프 녹음을 하고 왔습니다.
                        <br />
                        2024년 7월 1일 월요일부터 5일 금요일까지
                        <br />
                        오후 5시 50분 방송이 된다고 하네요 😘
                      </p>
                      <p>
                        #중년비만 #부종비만 #갱년기에 대해
                        <br />
                        이야기하는 시간을 가질 수 있어서 너무 즐거운 녹음이었습니다.
                      </p>
                      <p className="font-semibold text-[#B8CCE0]">#진한의원 #knn주치의 #김효진원장</p>
                    </div>

                    <div>
                      <a
                        href="/#jin-story"
                        onClick={handleClose}
                        className="inline-flex items-center justify-center bg-white text-blue-900 font-bold px-5 py-1.5 rounded-full text-xs shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                      >
                        방송 바로보기
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ============================================================
                2. 휴진안내 탭
               ============================================================ */}
            {activeTab === 1 && (
              <div className="flex-1 w-full h-full px-3.5 md:px-10 py-3.5 md:py-8 relative overflow-hidden select-text bg-[#F2ECE1] md:bg-[#F5F2EA] flex flex-col items-center justify-center md:justify-between gap-2.5 md:gap-0">
                {/* [PC 전용] 기존 전체 배경 100% 유지 */}
                <div
                  className="hidden md:block absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_bg_2_clean.jpg')" }}
                />

                {/* [모바일 전용] 이음새나 반쯤 지워진 잔상 없이 상·하단 단풍잎이 온전히 보이는 모바일 전용 배경 */}
                <div
                  className="md:hidden absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_bg_2_mo.jpg')" }}
                />

                {/* 상단 타이틀 영역 (모바일: 진한의원 / 10월 / 진료 및 휴진 안내 3줄 확대 구성, PC: 기존 2줄 100% 유지) */}
                <div className="relative z-10 text-center -mt-4 mb-3.5 md:mt-1 md:mb-0">
                  <p className="font-paperlogy font-normal text-[#212121] text-[20px] md:text-[32px] lg:text-[35px] leading-none tracking-[-0.05em] mb-1 md:mb-1.5">
                    진한의원
                  </p>
                  <h3 className="font-paperlogy font-extrabold leading-[1.1] md:leading-[1.15] tracking-[-0.05em]">
                    <span className="text-[#D96522] block md:inline text-[34px] min-[360px]:text-[36px] md:text-[52px] lg:text-[60px] mb-0.5 md:mb-0">
                      10월
                    </span>{' '}
                    <span className="text-[#212121] block md:inline text-[31px] min-[360px]:text-[33px] md:text-[52px] lg:text-[60px]">
                      진료 및 휴진 안내
                    </span>
                  </h3>
                </div>

                {/* 중앙 달력 카드 (Figma 561:57 Group 6) */}
                <div className="relative z-10 w-full max-w-[713px] bg-white rounded-[12px] md:rounded-[14px] shadow-[0_6px_24px_rgba(0,0,0,0.06)] px-2.5 min-[360px]:px-3.5 md:px-6 pt-3.5 md:pt-4 pb-4 md:pb-5 md:my-2">
                  {/* 요일 헤더 */}
                  <div className="grid grid-cols-7 text-center border-b border-black pb-2 md:pb-2.5 text-[11px] min-[360px]:text-[12px] md:text-[20px] font-semibold text-black tracking-[-0.05em]">
                    <div>SUN</div>
                    <div>MON</div>
                    <div>TUE</div>
                    <div>WED</div>
                    <div>THU</div>
                    <div>FRI</div>
                    <div>SAT</div>
                  </div>

                  {/* 첫째 주 (10/1 ~ 10/3) */}
                  <div className="grid grid-cols-7 text-center items-start pt-3 md:pt-3.5">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] flex items-center justify-center text-[14px] md:text-[20px] font-normal text-black">
                        1
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] flex items-center justify-center text-[14px] md:text-[20px] font-normal text-black">
                        2
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] rounded-full bg-[#FBE3E3] flex items-center justify-center text-[14px] md:text-[20px] font-semibold text-[#C90303]">
                        3
                      </div>
                      <span className="mt-0.5 md:mt-1 text-[10px] min-[360px]:text-[11px] md:text-[15px] font-semibold text-[#C90303] tracking-[-0.05em]">
                        휴진
                      </span>
                    </div>
                  </div>

                  {/* 둘째 주 (10/4 ~ 10/10) */}
                  <div className="grid grid-cols-7 text-center items-start pt-2.5 md:pt-2.5">
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] flex items-center justify-center text-[14px] md:text-[20px] font-semibold text-[#C90303]">
                        4
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] rounded-full bg-[#E5E7EE] flex items-center justify-center text-[14px] md:text-[20px] font-semibold text-[#263976]">
                        5
                      </div>
                      <span className="mt-0.5 md:mt-1 text-[10px] min-[360px]:text-[11px] md:text-[15px] font-semibold text-black leading-tight tracking-[-0.05em] whitespace-nowrap">
                        단축진료
                      </span>
                      <span className="text-[9px] min-[360px]:text-[9.5px] md:text-[12px] font-normal text-black leading-tight tracking-[-0.04em] whitespace-nowrap">
                        09:30~14:00
                      </span>
                      <span className="text-[8px] min-[360px]:text-[8.5px] md:text-[10px] font-normal text-[#777777] leading-tight tracking-[-0.04em] whitespace-nowrap">
                        * 점심시간없이 진료
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] flex items-center justify-center text-[14px] md:text-[20px] font-normal text-black">
                        6
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] flex items-center justify-center text-[14px] md:text-[20px] font-normal text-black">
                        7
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] flex items-center justify-center text-[14px] md:text-[20px] font-normal text-black">
                        8
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] rounded-full bg-[#FBE3E3] flex items-center justify-center text-[14px] md:text-[20px] font-semibold text-[#C90303]">
                        9
                      </div>
                      <span className="mt-0.5 md:mt-1 text-[10px] min-[360px]:text-[11px] md:text-[15px] font-semibold text-[#C90303] tracking-[-0.05em]">
                        휴진
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] md:w-[52px] md:h-[52px] flex items-center justify-center text-[14px] md:text-[20px] font-normal text-black">
                        10
                      </div>
                    </div>
                  </div>
                </div>

                {/* 하단 안내 문구 */}
                <p className="relative z-10 text-[13.5px] md:text-[20px] font-normal text-[#212121] tracking-[-0.05em] text-center">
                  진료 및 예약에 착오없으시길 바랍니다.
                </p>
              </div>
            )}
 
            {/* ============================================================
                3. 비대면 다이어트한약 탭
               ============================================================ */}
            {activeTab === 2 && (
              <>
                {/* [PC 전용] 기존 레이아웃 100% 그대로 유지 */}
                <div className="hidden md:flex flex-1 w-full h-full md:p-8 lg:p-9 text-white flex-col justify-between relative overflow-hidden select-text">
                  <div
                    className="absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                    style={{ backgroundImage: "url('/images/main/popup/popup_bg_3_clean.jpg')" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none select-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, rgba(45, 50, 51, 0.78) 0%, rgba(45, 50, 51, 0.67) 22%, rgba(45, 50, 51, 0.40) 38%, rgba(45, 50, 51, 0.16) 52%, rgba(45, 50, 51, 0) 64%)',
                    }}
                  />
                  <div className="absolute top-1/2 -left-12 w-48 h-48 rounded-full bg-[#A4B7CC]/20 blur-xl pointer-events-none select-none" />
                  <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#FAFAFA]/5 blur-lg pointer-events-none select-none" />

                  <img
                    src="/images/main/popup/popup_3_phone.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute right-[47px] bottom-[28px] w-[106px] h-auto z-10 pointer-events-none select-none drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
                  />

                  <div className="max-w-[52%] flex-1 flex flex-col justify-center z-10 [text-shadow:0_1px_2px_rgba(0,0,0,0.26)]">
                    <div className="inline-block bg-[#A4B7CC] text-[#08325C] rounded-full px-4 py-1 text-xs font-extrabold w-fit mb-3">
                      방문 없는 간편 처방
                    </div>
                    
                    <h3 className="text-2xl lg:text-[28px] font-extrabold leading-tight mb-4 text-white">
                      비대면 다이어트한약<br />
                      안심 1:1 맞춤 조제
                    </h3>
   
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-sm text-slate-200">
                        <span className="text-[#A4B7CC] mt-0.5">✔</span>
                        <span><strong>전화 비대면 진료</strong> 및 상세 한의학적 진단 설문 진행</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-200">
                        <span className="text-[#A4B7CC] mt-0.5">✔</span>
                        <span>환자 개인별 <strong>체질/식습관 맞춤</strong> 1:1 한약 조제</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-200">
                        <span className="text-[#A4B7CC] mt-0.5">✔</span>
                        <span>원격 한약 배송 규격에 따른 <strong>꼼꼼한 안심 직송</strong> 서비스</span>
                      </li>
                    </ul>

                    <p className="max-w-[590px] text-sm leading-relaxed text-[#A4B7CC] font-semibold mb-3">
                      #비대면진료 #KNN메디컬24시닥터스 #해독다이어트 #진한의원
                    </p>

                    <p className="text-sm leading-relaxed text-white/95 font-semibold mb-4">
                      문의) <a href="tel:0517140040">051.714.0040</a><span className="mx-2 text-white/50">|</span><a href="tel:01076860041">010.7686.0041</a>
                    </p>
   
                    <div>
                      <a 
                        href="/reservation"
                        className="inline-flex items-center justify-center bg-white text-[#08325C] font-bold px-6 py-2.5 rounded-full text-sm shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                      >
                        비대면 설문지 작성하기
                      </a>
                    </div>
                  </div>
                </div>

                {/* [모바일 전용] 상단 원장님 인물·스마트폰 목업 노출 -> 하단 자연스러운 그라데이션 위 안내문구+버튼 */}
                <div className="flex md:hidden flex-1 w-full h-full flex-col justify-end relative overflow-hidden select-text bg-[#23282A] text-white">
                  {/* 상단 진료실 원장님 인물 사진 (얼굴이 상단 오픈 영역에 선명하게 보이도록 배치) */}
                  <div
                    className="absolute inset-x-0 top-0 h-[255px] bg-cover bg-[position:56%_22%] pointer-events-none select-none"
                    style={{ backgroundImage: "url('/images/main/popup/popup_bg_3_clean.jpg')" }}
                  />
                  {/* 칸 나눔 선 없이 상단 사진(255px) 끝단 이전에 #23282A로 100% 자연스럽게 수렴하는 그라데이션 */}
                  <div
                    className="absolute inset-x-0 top-0 h-[256px] pointer-events-none select-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(180deg, rgba(35, 40, 42, 0) 0%, rgba(35, 40, 42, 0.08) 48%, rgba(35, 40, 42, 0.78) 76%, #23282A 98%, #23282A 100%)',
                    }}
                  />

                  {/* 우측 상단 스마트폰 목업 그래픽 (원장님 얼굴 및 하단 텍스트와 겹치지 않는 안전 영역) */}
                  <img
                    src="/images/main/popup/popup_3_phone.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute right-3.5 top-3 w-[62px] min-[360px]:w-[66px] h-auto z-10 pointer-events-none select-none drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]"
                  />

                  {/* 하단: 기존 안내 문구 및 버튼 전체 (100% 보존, 원장님 얼굴 겹침 0%) */}
                  <div className="relative z-10 px-4 pb-4 pt-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
                    <div className="inline-block bg-[#A4B7CC] text-[#08325C] rounded-full px-3.5 py-0.5 text-[10px] font-extrabold w-fit mb-2">
                      방문 없는 간편 처방
                    </div>

                    <h3 className="text-[19px] min-[360px]:text-[20px] font-extrabold leading-[1.2] mb-2.5 text-white">
                      비대면 다이어트한약<br />
                      안심 1:1 맞춤 조제
                    </h3>

                    <ul className="space-y-1.5 mb-3">
                      <li className="flex items-start gap-1.5 text-[11px] min-[360px]:text-[11.5px] leading-[1.35] text-slate-100">
                        <span className="text-[#A4B7CC] mt-0.5">✔</span>
                        <span><strong>전화 비대면 진료</strong> 및 상세 한의학적 진단 설문 진행</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[11px] min-[360px]:text-[11.5px] leading-[1.35] text-slate-100">
                        <span className="text-[#A4B7CC] mt-0.5">✔</span>
                        <span>환자 개인별 <strong>체질/식습관 맞춤</strong> 1:1 한약 조제</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[11px] min-[360px]:text-[11.5px] leading-[1.35] text-slate-100">
                        <span className="text-[#A4B7CC] mt-0.5">✔</span>
                        <span>원격 한약 배송 규격에 따른 <strong>꼼꼼한 안심 직송</strong> 서비스</span>
                      </li>
                    </ul>

                    <p className="text-[11px] min-[360px]:text-[11.5px] leading-snug text-[#B8CCE0] font-semibold mb-2">
                      #비대면진료 #KNN메디컬24시닥터스 #해독다이어트 #진한의원
                    </p>

                    <p className="text-[11.5px] min-[360px]:text-xs leading-snug text-white/95 font-semibold mb-3">
                      문의) <a href="tel:0517140040">051.714.0040</a><span className="mx-2 text-white/50">|</span><a href="tel:01076860041">010.7686.0041</a>
                    </p>

                    <div>
                      <a
                        href="/reservation"
                        className="inline-flex items-center justify-center bg-white text-[#08325C] font-bold px-5 py-2 rounded-full text-xs shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                      >
                        비대면 설문지 작성하기
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ============================================================
                4. 월별이벤트 - 가을이벤트 탭
               ============================================================ */}
            {activeTab === 3 && (
              <div className="flex-1 w-full h-full px-4 py-8 md:p-10 relative overflow-hidden select-text bg-[#EAE0CC] flex flex-col items-center justify-center">
                {/* [PC 전용] 기존 전체 배경 에셋 100% 유지 */}
                <div
                  className="hidden md:block absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_bg_4_clean.jpg')" }}
                />

                {/* [모바일 전용] 배경 제거(마스크) 없이 12개 가을 나뭇잎 전체가 온전히 보이는 모바일 전용 배경 */}
                <div
                  className="md:hidden absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_bg_4_mo.jpg')" }}
                />

                {/* 중앙 타이포그래피 및 버튼 영역 */}
                <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[660px]">
                  {/* HELLO AUTUMN (Figma 546:5 - Paperlogy 600 SemiBold) */}
                  <p className="font-paperlogy font-semibold text-[#6E5524] text-[15px] md:text-[25px] leading-[1.4] tracking-[0.15em] mb-2.5 md:mb-4">
                    HELLO AUTUMN
                  </p>

                  {/* 진한의원 (Figma 561:30 - 원본 서체 그래픽 + 투명 HTML 텍스트 오버레이) */}
                  <div className="relative inline-flex items-center justify-center w-[180px] md:w-[310px] lg:w-[347px] aspect-[347/95] mb-3 md:mb-3.5">
                    <img
                      src="/images/main/popup/event_autumn_clinic_title.png"
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-paperlogy font-extrabold text-[40px] md:text-[68px] lg:text-[78px] leading-none tracking-[-0.02em] text-transparent select-text selection:bg-[#6E5524]/25 selection:text-transparent whitespace-nowrap">
                      진한의원
                    </span>
                  </div>

                  {/* [PC 전용] 10월 가을 이벤트 1줄 유지 */}
                  <div className="hidden md:inline-flex relative items-center justify-center md:w-[540px] lg:w-[640px] aspect-[640/95] md:mb-10">
                    <img
                      src="/images/main/popup/event_autumn_main_title.png"
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-paperlogy font-extrabold md:text-[62px] lg:text-[74px] leading-none tracking-[-0.03em] text-transparent select-text selection:bg-[#AF480F]/25 selection:text-transparent whitespace-nowrap">
                      10월 가을 이벤트
                    </span>
                  </div>

                  {/* [모바일 전용] 10월 / 가을 이벤트 2줄 분리 배치 */}
                  <div className="flex md:hidden flex-col items-center mb-6">
                    <div className="relative inline-flex items-center justify-center w-[98px] aspect-[323/171] mb-2">
                      <img
                        src="/images/main/popup/event_autumn_oct.png"
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-contain pointer-events-none select-none"
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-paperlogy font-extrabold text-[44px] leading-none tracking-[-0.03em] text-transparent select-text selection:bg-[#AF480F]/25 selection:text-transparent whitespace-nowrap">
                        10월
                      </span>
                    </div>
                    <div className="relative inline-flex items-center justify-center w-[270px] aspect-[892/171]">
                      <img
                        src="/images/main/popup/event_autumn_sub.png"
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-contain pointer-events-none select-none"
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-paperlogy font-extrabold text-[44px] leading-none tracking-[-0.03em] text-transparent select-text selection:bg-[#AF480F]/25 selection:text-transparent whitespace-nowrap">
                        가을 이벤트
                      </span>
                    </div>
                  </div>

                  {/* 이벤트 바로가기 > 버튼 (Figma 561:33 - /events 페이지 이동) */}
                  <Link
                    href="/events"
                    onClick={handleClose}
                    className="inline-flex items-center justify-center bg-[#551805] hover:bg-[#421203] text-white font-medium text-[16px] md:text-[23px] lg:text-[25px] tracking-[-0.05em] w-[176px] h-[38px] md:w-[233px] md:h-[46px] rounded-full shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                  >
                    이벤트 바로가기 &gt;
                  </Link>
                </div>
              </div>
            )}
 
          </div>
 
          {/* 하단 오늘하루보지않기 바 (모바일: 52px 고정 / 데스크톱: 기존 패딩 유지) */}
          <div className="h-[52px] md:h-auto bg-primary-popup text-white text-xs px-4 md:px-5 md:py-4 flex justify-between items-center select-none font-semibold shrink-0">
            <button 
              onClick={toggleHideToday} 
              className="flex items-center gap-2 transition-all cursor-pointer font-bold"
            >
              <div className={`w-4 h-4 border rounded flex items-center justify-center transition-all ${
                isHideToday ? 'bg-primary-dark border-primary-dark text-white' : 'border-primary-dark/50'
              }`}>
                {isHideToday && (
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              오늘 하루 이 창을 열지 않기
            </button>
            <button 
              onClick={handleClose} 
              className="font-bold transition-all px-5 py-1.5 bg-primary-dark text-white rounded-md cursor-pointer shadow-sm"
            >
              닫기
            </button>
          </div>
 
        </div>
      </div>
    </div>
  );
}
