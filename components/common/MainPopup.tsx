'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAccessibleOverlay } from './useAccessibleOverlay';

const TAB_ORDER = [3, 0, 1, 2] as const;
const AUTO_SLIDE_INTERVAL = 5000;
const SLIDE_DURATION = 650;

export default function MainPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(3);
  const [outgoingTab, setOutgoingTab] = useState<number | null>(null);
  const [timerResetKey, setTimerResetKey] = useState(0);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [isHideToday, setIsHideToday] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // 페이지 마운트 시 로컬 스토리지 확인하여 노출 여부 결정 (PC·모바일 모두 월별이벤트(3)를 첫 화면으로 노출)
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setActiveTab(3);
      setOutgoingTab(null);
      try {
        const hideUntil = localStorage.getItem('hide_main_popup_until');
        if (!hideUntil || !Number.isFinite(Number(hideUntil)) || Date.now() > Number(hideUntil)) setIsOpen(true);
      } catch {
        setIsOpen(true);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(motion.matches);
    update();
    motion.addEventListener('change', update);
    return () => motion.removeEventListener('change', update);
  }, []);

  // 직접 조작하거나 모션 줄이기를 선택한 경우에는 자동 전환을 멈춥니다.
  useEffect(() => {
    if (!isOpen || isAutoSlidePaused || reducedMotion) return;

    const timer = window.setTimeout(() => {
      if (document.visibilityState !== 'visible') {
        setTimerResetKey((prev) => prev + 1);
        return;
      }
      const currentIndex = TAB_ORDER.indexOf(activeTab as (typeof TAB_ORDER)[number]);
      const nextIndex = (currentIndex + 1) % TAB_ORDER.length;
      const nextTab = TAB_ORDER[nextIndex];
      setOutgoingTab(activeTab);
      setActiveTab(nextTab);
    }, AUTO_SLIDE_INTERVAL);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isOpen, activeTab, timerResetKey, isAutoSlidePaused, reducedMotion]);

  // 슬라이드 이동(650ms) 완료 후 이전 탭을 대기 위치(왼쪽 -100%)로 복귀
  useEffect(() => {
    if (outgoingTab === null) return;

    const cleanupTimer = window.setTimeout(() => {
      setOutgoingTab(null);
    }, SLIDE_DURATION);

    return () => {
      window.clearTimeout(cleanupTimer);
    };
  }, [outgoingTab, activeTab]);

  const handleSelectTab = (nextTab: number) => {
    setTimerResetKey((prev) => prev + 1);
    if (nextTab === activeTab) return;
    setOutgoingTab(activeTab);
    setActiveTab(nextTab);
  };

  const getSlidePanelClass = (tabId: number) => {
    const baseClass = 'absolute inset-0 overflow-y-auto overscroll-contain flex flex-col will-change-transform motion-reduce:transition-none';
    if (tabId === activeTab) {
      return `${baseClass} z-20 translate-x-0 opacity-100 pointer-events-auto ${
        outgoingTab !== null ? 'transition-transform duration-[650ms] ease-in-out' : 'transition-none'
      }`;
    }
    if (tabId === outgoingTab) {
      return `${baseClass} z-10 translate-x-full opacity-100 pointer-events-none transition-transform duration-[650ms] ease-in-out`;
    }
    return `${baseClass} z-0 -translate-x-full opacity-0 pointer-events-none select-none transition-none`;
  };

  const handleClose = () => {
    if (isHideToday) {
      // 24시간(86400000ms) 동안 숨김
      const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
      try { localStorage.setItem('hide_main_popup_until', expiry.toString()); } catch { /* Closing remains available when storage is blocked. */ }
    }
    setOutgoingTab(null);
    setIsOpen(false);
  };

  useAccessibleOverlay(isOpen, popupRef, handleClose);

  const toggleHideToday = () => {
    setIsHideToday(!isHideToday);
  };

  if (!isOpen) return null;

  return (
    <div ref={popupRef} role="dialog" aria-modal="true" aria-label="진한의원 안내" tabIndex={-1} onPointerDownCapture={() => setIsAutoSlidePaused(true)} onKeyDownCapture={() => setIsAutoSlidePaused(true)} className="fixed inset-0 z-[90] flex items-center justify-center bg-black/65 backdrop-blur-[3px] p-3 sm:p-4 animate-fade-in motion-reduce:animate-none">
      {/* 팝업 카드: 모바일 디자인을 유지하고 화면 높이에 맞춰 내부 스크롤 */}
      <div className="main-popup-root relative w-[min(360px,calc(100vw-24px))] h-[min(600px,calc(100dvh-24px))] lg:w-full lg:max-w-[1080px] lg:h-[min(600px,calc(100dvh-32px))] bg-primary-popup rounded-none overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col lg:flex-row">

        {/* 우측 상단 닫기 X 버튼 (모바일: 1-C 우측 상단 탭 모서리 위 / 데스크톱: 기존 위치·스타일 100% 유지) */}
        <button
          onClick={handleClose}
          className={`absolute top-1.5 right-1.5 lg:top-4 lg:right-4 z-30 text-base lg:text-2xl font-bold w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer select-none lg:text-white/80 lg:hover:text-white lg:bg-black/30 lg:hover:bg-black/45 ${
            activeTab === 0
              ? 'bg-[#0B203E]/15 text-[#0B203E] hover:bg-[#0B203E]/25'
              : 'bg-black/25 text-white/85 hover:text-white hover:bg-black/45'
          }`}
          aria-label="닫기"
        >
          &times;
        </button>

        {/* 카테고리 바 (PC·모바일 공통 순서: ①월별이벤트 ②방송안내 ③휴진안내 ④비대면 다이어트한약) */}
        <div className="w-full h-[88px] lg:h-auto lg:w-[240px] bg-primary-popup flex flex-row lg:flex-col justify-between lg:pt-0 lg:pb-6 shrink-0 select-none">
          <div className="w-full h-full lg:h-auto grid grid-cols-2 grid-rows-2 lg:flex lg:flex-col justify-start">
            <button
              onClick={() => handleSelectTab(0)} aria-pressed={activeTab === 0} aria-controls="clinic-announcement-content"
              className={`order-2 pr-12 lg:pr-6 h-full lg:h-auto lg:py-5 px-2 lg:px-6 flex items-center justify-center lg:block text-center lg:text-left text-xs lg:text-sm xl:text-base font-bold tracking-tight lg:tracking-normal transition-all relative border-b border-white/10 lg:border-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] ${
                activeTab === 0
                  ? 'bg-[#EEEFF1] text-primary-dark lg:rounded-r-none'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              방송안내
            </button>
            <button
              onClick={() => handleSelectTab(1)} aria-pressed={activeTab === 1} aria-controls="clinic-announcement-content"
              className={`order-3 h-full lg:h-auto lg:py-5 px-2 lg:px-6 flex items-center justify-center lg:block text-center lg:text-left text-xs lg:text-sm xl:text-base font-bold tracking-tight lg:tracking-normal transition-all relative border-r border-white/10 lg:border-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] ${
                activeTab === 1
                  ? 'bg-[#EEEFF1] text-primary-dark lg:rounded-r-none'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              휴진안내
            </button>
            <button
              onClick={() => handleSelectTab(2)} aria-pressed={activeTab === 2} aria-controls="clinic-announcement-content"
              className={`order-4 h-full lg:h-auto lg:py-5 px-2 lg:px-6 flex items-center justify-center lg:block text-center lg:text-left text-xs lg:text-sm xl:text-base font-bold tracking-tight lg:tracking-normal transition-all relative lg:border-none cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-[-4px] ${
                activeTab === 2
                  ? 'bg-[#EEEFF1] text-primary-dark lg:rounded-r-none'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              비대면 다이어트한약
            </button>
            <button
              onClick={() => handleSelectTab(3)} aria-pressed={activeTab === 3} aria-controls="clinic-announcement-content"
              className={`order-1 h-full lg:h-auto lg:py-5 px-2 lg:px-6 flex items-center justify-center lg:block text-center lg:text-left text-xs lg:text-sm xl:text-base font-bold tracking-tight lg:tracking-normal transition-all relative border-r border-b border-white/10 lg:border-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] ${
                activeTab === 3
                  ? 'bg-[#EEEFF1] text-primary-dark lg:rounded-r-none'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              월별이벤트
            </button>
          </div>

          {/* 탭바 하단 진한의원 로고 (데스크톱 전용) */}
          <div className="hidden lg:flex justify-center items-center px-4 mt-auto pt-8">
            <img
              src="/images/logo.png"
              alt="진한의원"
              className="w-[120px] h-auto object-contain pointer-events-none select-none"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>

        {/* 우측 콘텐츠 및 상세 영역 */}
        <div className="min-h-0 min-w-0 flex-1 flex flex-col overflow-hidden">

          {/* 작은 화면에서도 콘텐츠와 하단 닫기 버튼에 접근할 수 있도록 내부 스크롤 허용 */}
          <div id="clinic-announcement-content" className="min-h-0 flex-1 relative overflow-hidden">

            {/* ============================================================
                1. 방송안내 탭
               ============================================================ */}
            <div className={getSlidePanelClass(0)} aria-hidden={activeTab !== 0} inert={activeTab !== 0}>
              <>
                {/* [PC 전용] 좌측 컬럼 상단 슬로건 통합 + 우측 인물 무자막 노출 (시안 B) */}
                <div className="hidden lg:flex shrink-0 flex-1 w-full h-full min-h-[460px] lg:min-h-[548px] lg:p-8 xl:p-9 text-white flex-row items-center justify-between relative overflow-hidden select-text bg-[#39322E]">
                  <div
                    className="absolute inset-0 bg-cover bg-no-repeat bg-[position:56%_center] pointer-events-none select-none"
                    style={{ backgroundImage: "url('/images/main/popup/261020_popup3_w.png')" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none select-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, rgba(46, 39, 35, 0.92) 0%, rgba(46, 39, 35, 0.78) 22%, rgba(46, 39, 35, 0.35) 33%, rgba(46, 39, 35, 0.08) 40%, rgba(46, 39, 35, 0) 45%)',
                    }}
                  />

                  <div className="h-full max-w-[50%] relative z-10 flex flex-col pt-6 [text-shadow:0_1px_4px_rgba(0,0,0,0.65)]">
                    <div className="pb-3.5 border-b border-white/20">
                      <p className="font-paperlogy font-normal text-[#E5DAC9] text-[18.5px] leading-[1.3] tracking-[-0.04em] mb-1.5">
                        식욕억제 단계만 나눠진
                        <br />
                        기성한약이 아닌
                      </p>
                      <p className="font-paperlogy font-extrabold text-[28px] leading-[1.2] tracking-[-0.04em]">
                        <span className="text-[#94B8FF]">
                          개인별 / 원인별
                          <br />
                          일대일 맞춤한약만
                        </span>
                        <span className="text-white">
                          을
                          <br />
                          고집합니다
                        </span>
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col items-start">
                      <div className="mb-2.5">
                        <span className="inline-block font-paperlogy font-extrabold italic tracking-tight bg-[#ED193A] px-2 py-0.5 rounded text-xs">
                          KNN
                        </span>
                      </div>

                      <p className="text-[15px] xl:text-[16px] font-medium text-white/85 leading-[1.35] tracking-[-0.02em] mb-1.5">
                        2026년 5월 21일
                      </p>

                      <h3 className="text-[38px] xl:text-[40px] font-extrabold leading-[1.2] tracking-[-0.03em] mb-2.5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                        KNN 닥터스
                      </h3>

                      <p className="text-[19px] xl:text-[20px] font-bold text-white/95 leading-[1.38] tracking-[-0.03em] mb-7">
                        30대부터 60대까지
                        <br />
                        생애주기별 &apos;순환다이어트&apos;
                      </p>

                      <div>
                        <Link
                          href="/#jin-story"
                          onClick={handleClose}
                          className="inline-flex min-h-11 items-center justify-center bg-white text-blue-900 font-bold px-6 py-2.5 rounded-full text-sm [text-shadow:none] transition-all hover:scale-[1.03] cursor-pointer"
                        >
                          방송 바로보기
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* [모바일 전용] 상단 베이지톤 중앙 정렬 3줄 홍보문구 -> 중단 인물 노출 -> 하단 바닥 밀착형 그라데이션 위 방송정보+버튼 */}
                <div className="flex lg:hidden shrink-0 flex-1 w-full h-full min-h-[460px] lg:min-h-[548px] flex-col justify-between relative overflow-hidden select-text bg-[#2A2421]">
                  {/* 인물 배경 이미지 (중단 우측에 얼굴이 온전히 보이도록 배치하고 하단은 그라데이션 안으로 완전히 수렴) */}
                  <div
                    className="absolute inset-x-0 top-0 h-[460px] bg-[length:100%_auto] bg-no-repeat bg-[position:center_-34px] pointer-events-none select-none"
                    style={{ backgroundImage: "url('/images/main/popup/261020_popup3_h.png')" }}
                  />
                  {/* 상단 벽지 색상(#A89182) 소프트 연결 그라데이션 */}
                  <div
                    className="absolute inset-x-0 top-0 h-[100px] pointer-events-none select-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(180deg, #A89182 0%, rgba(168, 145, 130, 0.88) 58%, rgba(168, 145, 130, 0.45) 82%, rgba(168, 145, 130, 0) 100%)',
                    }}
                  />
                  {/* 하단 다크 브라운 그라데이션 (높이 축소 및 농도 완화) */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-[210px] pointer-events-none select-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(180deg, rgba(42, 36, 33, 0) 0%, rgba(42, 36, 33, 0.28) 18%, rgba(42, 36, 33, 0.62) 38%, rgba(42, 36, 33, 0.82) 60%, rgba(42, 36, 33, 0.92) 82%, #2A2421 100%)',
                    }}
                  />

                  {/* 상단: 베이지톤 위 3줄 홍보 문구 (가운데 정렬 + 크기 확대) */}
                  <div className="relative z-10 px-3 pt-[18px] text-center">
                    <p className="font-paperlogy font-normal text-[#212121] text-[13px] min-[360px]:text-[13.5px] leading-[1.28] tracking-[-0.05em] mb-1">
                      식욕억제 단계만 나눠진 기성한약이 아닌
                    </p>
                    <p className="font-paperlogy font-extrabold text-[18.5px] min-[360px]:text-[20px] leading-[1.18] tracking-[-0.05em]">
                      <span className="text-[#123960]">
                        개인별 / 원인별
                        <br />
                        일대일 맞춤한약만
                      </span>
                      <span className="text-[#212121]">을 고집합니다</span>
                    </p>
                  </div>

                  {/* 하단: 신규 방송정보 문구 + 버튼 */}
                  <div className="relative z-10 px-4 pb-4 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
                    <div className="mb-2">
                      <span className="inline-block font-paperlogy font-extrabold italic tracking-tight bg-[#ED193A] px-1.5 py-0.5 rounded text-[10px] shadow-sm">
                        KNN
                      </span>
                    </div>

                    <p className="text-[12.5px] min-[360px]:text-[13px] font-medium text-white/85 leading-[1.3] tracking-[-0.02em] mb-1">
                      2026년 5월 21일
                    </p>

                    <h3 className="text-[33px] min-[360px]:text-[34px] font-extrabold leading-[1.2] tracking-[-0.03em] mb-1.5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                      KNN 닥터스
                    </h3>

                    <p className="text-[15.5px] min-[360px]:text-[16px] font-bold text-white/95 leading-[1.38] tracking-[-0.03em] whitespace-nowrap mb-4">
                      30대부터 60대까지 생애주기별 &apos;순환다이어트&apos;
                    </p>

                    <div>
                      <Link
                        href="/#jin-story"
                        onClick={handleClose}
                        className="inline-flex min-h-11 items-center justify-center bg-white text-blue-900 font-bold px-5 py-1.5 rounded-full text-xs [text-shadow:none] transition-all hover:scale-[1.03] cursor-pointer"
                      >
                        방송 바로보기
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            </div>

            {/* ============================================================
                2. 휴진안내 탭
               ============================================================ */}
            <div className={getSlidePanelClass(1)} aria-hidden={activeTab !== 1} inert={activeTab !== 1}>
              <div className="shrink-0 flex-1 w-full h-full min-h-[460px] lg:min-h-[548px] px-3.5 lg:px-10 py-3.5 lg:py-8 relative overflow-hidden select-text bg-[#F2ECE1] lg:bg-[#F5F2EA] flex flex-col items-center justify-center lg:justify-between gap-2.5 lg:gap-0">
                {/* [PC 전용] 기존 전체 배경 100% 유지 */}
                <div
                  className="hidden lg:block absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_bg_2_clean.jpg')" }}
                />

                {/* [모바일 전용] 이음새나 반쯤 지워진 잔상 없이 상·하단 단풍잎이 온전히 보이는 모바일 전용 배경 */}
                <div
                  className="lg:hidden absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_bg_2_mo.jpg')" }}
                />

                {/* 상단 타이틀 영역 (모바일: 진한의원 / 10월 / 진료 및 휴진 안내 3줄 확대 구성, PC: 기존 2줄 100% 유지) */}
                <div className="relative z-10 text-center -mt-4 mb-3.5 lg:mt-1 lg:mb-0">
                  <p className="font-paperlogy font-normal text-[#212121] text-[20px] lg:text-[32px] xl:text-[35px] leading-none tracking-[-0.05em] mb-1 lg:mb-1.5">
                    진한의원
                  </p>
                  <h3 className="font-paperlogy font-extrabold leading-[1.1] lg:leading-[1.15] tracking-[-0.05em]">
                    <span className="text-[#D96522] block lg:inline text-[34px] min-[360px]:text-[36px] lg:text-[52px] xl:text-[60px] mb-0.5 lg:mb-0">
                      10월
                    </span>{' '}
                    <span className="text-[#212121] block lg:inline text-[31px] min-[360px]:text-[33px] lg:text-[52px] xl:text-[60px]">
                      진료 및 휴진 안내
                    </span>
                  </h3>
                </div>

                {/* 중앙 달력 카드 (Figma 561:57 Group 6) */}
                <div className="relative z-10 w-full max-w-[713px] bg-white rounded-[12px] lg:rounded-[14px] shadow-[0_6px_24px_rgba(0,0,0,0.06)] px-2.5 min-[360px]:px-3.5 lg:px-6 pt-3.5 lg:pt-4 pb-4 lg:pb-5 lg:my-2">
                  {/* 요일 헤더 */}
                  <div className="grid grid-cols-7 text-center border-b border-black pb-2 lg:pb-2.5 text-[11px] min-[360px]:text-[12px] lg:text-[20px] font-semibold text-black tracking-[-0.05em]">
                    <div>SUN</div>
                    <div>MON</div>
                    <div>TUE</div>
                    <div>WED</div>
                    <div>THU</div>
                    <div>FRI</div>
                    <div>SAT</div>
                  </div>

                  {/* 첫째 주 (10/1 ~ 10/3) */}
                  <div className="grid grid-cols-7 text-center items-start pt-3 lg:pt-3.5">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] flex items-center justify-center text-[14px] lg:text-[20px] font-normal text-black">
                        1
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] flex items-center justify-center text-[14px] lg:text-[20px] font-normal text-black">
                        2
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] rounded-full bg-[#FBE3E3] flex items-center justify-center text-[14px] lg:text-[20px] font-semibold text-[#C90303]">
                        3
                      </div>
                      <span className="mt-0.5 lg:mt-1 text-[10px] min-[360px]:text-[11px] lg:text-[15px] font-semibold text-[#C90303] tracking-[-0.05em]">
                        휴진
                      </span>
                    </div>
                  </div>

                  {/* 둘째 주 (10/4 ~ 10/10) */}
                  <div className="grid grid-cols-7 text-center items-start pt-2.5 lg:pt-2.5">
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] flex items-center justify-center text-[14px] lg:text-[20px] font-semibold text-[#C90303]">
                        4
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] rounded-full bg-[#E5E7EE] flex items-center justify-center text-[14px] lg:text-[20px] font-semibold text-[#263976]">
                        5
                      </div>
                      <span className="mt-0.5 lg:mt-1 text-[10px] min-[360px]:text-[11px] lg:text-[15px] font-semibold text-black leading-tight tracking-[-0.05em] whitespace-nowrap">
                        단축진료
                      </span>
                      <span className="text-[9px] min-[360px]:text-[9.5px] lg:text-[12px] font-normal text-black leading-tight tracking-[-0.04em] whitespace-nowrap">
                        09:30~14:00
                      </span>
                      <span className="text-[8px] min-[360px]:text-[8.5px] lg:text-[10px] font-normal text-[#777777] leading-tight tracking-[-0.04em] whitespace-nowrap">
                        * 점심시간없이 진료
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] flex items-center justify-center text-[14px] lg:text-[20px] font-normal text-black">
                        6
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] flex items-center justify-center text-[14px] lg:text-[20px] font-normal text-black">
                        7
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] flex items-center justify-center text-[14px] lg:text-[20px] font-normal text-black">
                        8
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] rounded-full bg-[#FBE3E3] flex items-center justify-center text-[14px] lg:text-[20px] font-semibold text-[#C90303]">
                        9
                      </div>
                      <span className="mt-0.5 lg:mt-1 text-[10px] min-[360px]:text-[11px] lg:text-[15px] font-semibold text-[#C90303] tracking-[-0.05em]">
                        휴진
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-[34px] h-[34px] min-[360px]:w-[36px] min-[360px]:h-[36px] lg:w-[52px] lg:h-[52px] flex items-center justify-center text-[14px] lg:text-[20px] font-normal text-black">
                        10
                      </div>
                    </div>
                  </div>
                </div>

                {/* 하단 안내 문구 */}
                <p className="relative z-10 text-[13.5px] lg:text-[20px] font-normal text-[#212121] tracking-[-0.05em] text-center">
                  진료 및 예약에 착오없으시길 바랍니다.
                </p>
              </div>
            </div>

            {/* ============================================================
                3. 비대면 다이어트한약 탭
               ============================================================ */}
            <div className={getSlidePanelClass(2)} aria-hidden={activeTab !== 2} inert={activeTab !== 2}>
              <>
                {/* [PC 전용] 기존 레이아웃 100% 그대로 유지 */}
                <div className="hidden lg:flex shrink-0 flex-1 w-full h-full min-h-[460px] lg:min-h-[548px] lg:p-8 xl:p-9 text-white flex-col justify-between relative overflow-hidden select-text">
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

                    <h3 className="text-2xl xl:text-[28px] font-extrabold leading-tight mb-4 text-white">
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
                      <Link
                        href="/reservation" onClick={handleClose}
                        className="inline-flex min-h-11 items-center justify-center bg-white text-[#08325C] font-bold px-6 py-2.5 rounded-full text-sm [text-shadow:none] transition-all hover:scale-[1.03] cursor-pointer"
                      >
                        비대면 설문지 작성하기
                      </Link>
                    </div>
                  </div>
                </div>

                {/* [모바일 전용] 상단 원장님 인물·스마트폰 목업 노출 -> 하단 자연스러운 그라데이션 위 안내문구+버튼 */}
                <div className="flex lg:hidden shrink-0 flex-1 w-full h-full min-h-[460px] lg:min-h-[548px] flex-col justify-end relative overflow-hidden select-text bg-[#23282A] text-white">
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
                      <Link
                        href="/reservation" onClick={handleClose}
                        className="inline-flex min-h-11 items-center justify-center bg-white text-[#08325C] font-bold px-5 py-2 rounded-full text-xs [text-shadow:none] transition-all hover:scale-[1.03] cursor-pointer"
                      >
                        비대면 설문지 작성하기
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            </div>

            {/* ============================================================
                4. 월별이벤트 - 가을이벤트 탭
               ============================================================ */}
            <div className={getSlidePanelClass(3)} aria-hidden={activeTab !== 3} inert={activeTab !== 3}>
              <div className="shrink-0 flex-1 w-full h-full min-h-[460px] lg:min-h-[548px] px-4 py-8 lg:p-10 relative overflow-hidden select-text bg-[#EAE0CC] flex flex-col items-center justify-center">
                {/* [PC 전용] 기존 전체 배경 에셋 100% 유지 */}
                <div
                  className="hidden lg:block absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_bg_4_clean.jpg')" }}
                />

                {/* [모바일 전용] 배경 제거(마스크) 없이 12개 가을 나뭇잎 전체가 온전히 보이는 모바일 전용 배경 */}
                <div
                  className="lg:hidden absolute inset-0 bg-cover bg-center pointer-events-none select-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_bg_4_mo.jpg')" }}
                />

                {/* 중앙 타이포그래피 및 버튼 영역 */}
                <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[660px]">
                  {/* HELLO AUTUMN (Figma 546:5 - Paperlogy 600 SemiBold) */}
                  <p className="font-paperlogy font-semibold text-[#6E5524] text-[15px] lg:text-[25px] leading-[1.4] tracking-[0.15em] mb-2.5 lg:mb-4">
                    HELLO AUTUMN
                  </p>

                  {/* 진한의원 (Figma 561:30 - 원본 서체 그래픽 + 투명 HTML 텍스트 오버레이) */}
                  <div className="relative inline-flex items-center justify-center w-[180px] lg:w-[310px] xl:w-[347px] aspect-[347/95] mb-3 lg:mb-3.5">
                    <img
                      src="/images/main/popup/event_autumn_clinic_title.png"
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-paperlogy font-extrabold text-[40px] lg:text-[68px] xl:text-[78px] leading-none tracking-[-0.02em] text-transparent select-text selection:bg-[#6E5524]/25 selection:text-transparent whitespace-nowrap">
                      진한의원
                    </span>
                  </div>

                  {/* [PC 전용] 10월 가을 이벤트 1줄 유지 */}
                  <div className="hidden lg:inline-flex relative items-center justify-center lg:w-[540px] xl:w-[640px] aspect-[640/95] lg:mb-10">
                    <img
                      src="/images/main/popup/event_autumn_main_title.png"
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-paperlogy font-extrabold lg:text-[62px] xl:text-[74px] leading-none tracking-[-0.03em] text-transparent select-text selection:bg-[#AF480F]/25 selection:text-transparent whitespace-nowrap">
                      10월 가을 이벤트
                    </span>
                  </div>

                  {/* [모바일 전용] 10월 / 가을 이벤트 2줄 분리 배치 */}
                  <div className="flex lg:hidden flex-col items-center mb-6">
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
                    <div className="relative inline-flex items-center justify-center w-[270px] max-w-full aspect-[892/171]">
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
                    className="inline-flex min-h-11 items-center justify-center bg-[#551805] hover:bg-[#421203] text-white font-medium text-[16px] lg:text-[23px] xl:text-[25px] tracking-[-0.05em] w-[176px] h-[38px] lg:w-[233px] lg:h-[46px] rounded-full shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                  >
                    이벤트 바로가기 &gt;
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* 하단 오늘하루보지않기 바 (모바일: 52px 고정 / 데스크톱: 기존 패딩 유지) */}
          <div className="h-[52px] bg-primary-popup text-white text-xs px-4 lg:px-5 flex justify-between items-center select-none font-semibold shrink-0">
            <button
              onClick={toggleHideToday}
              aria-pressed={isHideToday} className="flex min-h-11 items-center gap-2 transition-all cursor-pointer font-bold"
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
              className="min-h-11 shrink-0 font-bold transition-all px-5 py-1.5 bg-primary-dark text-white rounded-md cursor-pointer shadow-sm"
            >
              닫기
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
