'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAccessibleOverlay } from './useAccessibleOverlay';
import Image from 'next/image';
import Link from 'next/link';

export default function MainPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isHideToday, setIsHideToday] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // 페이지 마운트 시 로컬 스토리지 확인하여 노출 여부 결정
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const hideUntil = localStorage.getItem('hide_main_popup_until');
        if (!hideUntil || Date.now() > Number(hideUntil)) setIsOpen(true);
      } catch {
        setIsOpen(true);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClose = () => {
    if (isHideToday) {
      // 24시간(86400000ms) 동안 숨김
      const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
      try { localStorage.setItem('hide_main_popup_until', expiry.toString()); } catch { /* Closing remains available when storage is blocked. */ }
    }
    setIsOpen(false);
  };

  useAccessibleOverlay(isOpen, popupRef, handleClose);

  const toggleHideToday = () => {
    setIsHideToday(!isHideToday);
  };

  if (!isOpen) return null;

  return (
    <div ref={popupRef} role="dialog" aria-modal="true" aria-label="진한의원 안내" tabIndex={-1} className="fixed inset-0 z-[90] flex items-center justify-center bg-black/65 backdrop-blur-[3px] p-3 sm:p-4 animate-fade-in">
      {/* 팝업 카드 */}
      <div className="main-popup-root relative max-h-[calc(100dvh-2rem)] w-full max-w-[1080px] bg-primary-popup rounded-none overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col lg:flex-row">
        
        <div className="flex shrink-0 items-center justify-between border-b border-white/15 px-4 py-2 text-white lg:hidden">
          <span className="text-sm font-bold">진한의원 안내</span>
          <button type="button" onClick={handleClose} aria-label="안내 닫기" className="flex h-11 w-11 items-center justify-center rounded-full text-2xl focus-visible:outline-2">×</button>
        </div>
        {/* 우측 상단 닫기 X 버튼 (데스크톱 및 공통) */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-30 text-white/70 text-2xl font-bold bg-black/20 w-11 h-11 rounded-full hidden lg:flex items-center justify-center transition-all cursor-pointer"
          aria-label="닫기"
        >
          &times;
        </button>
 
        {/* 좌측 탭바 (모바일은 상단 가로바) */}
        <div className="w-full lg:w-[220px] xl:w-[240px] bg-primary-popup flex flex-row lg:flex-col justify-between lg:pt-0 lg:pb-6 shrink-0">
          <div className="w-full flex flex-row lg:flex-col justify-start">
             <button 
              onClick={() => setActiveTab(0)}
              aria-pressed={activeTab === 0}
              aria-controls="clinic-announcement-content"
              className={`flex-1 lg:flex-initial min-h-14 py-3 lg:py-5 px-2 lg:px-6 text-center lg:text-left text-xs lg:text-sm xl:text-base font-bold transition-all relative ${
                activeTab === 0 
                  ? 'bg-[#EEEFF1] text-primary-dark lg:rounded-r-none'
                  : 'text-white/70'
              }`}
            >
              방송안내
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              aria-pressed={activeTab === 1}
              aria-controls="clinic-announcement-content"
              className={`flex-1 lg:flex-initial min-h-14 py-3 lg:py-5 px-2 lg:px-6 text-center lg:text-left text-xs lg:text-sm xl:text-base font-bold transition-all relative ${
                activeTab === 1 
                  ? 'bg-[#EEEFF1] text-primary-dark lg:rounded-r-none'
                  : 'text-white/70'
              }`}
            >
              휴진안내
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              aria-pressed={activeTab === 2}
              aria-controls="clinic-announcement-content"
              className={`flex-1 lg:flex-initial min-h-14 py-3 lg:py-5 px-2 lg:px-6 text-center lg:text-left text-xs lg:text-sm xl:text-base font-bold transition-all relative ${
                activeTab === 2 
                  ? 'bg-[#EEEFF1] text-primary-dark lg:rounded-r-none'
                  : 'text-white/70'
              }`}
            >
              비대면 다이어트한약
            </button>
          </div>
 
          {/* 탭바 하단 진한의원 로고 (데스크톱 전용) - 비활성화된 탭 글씨 색상(text-primary-dark/70)과 일치시킴 */}
          <div className="hidden lg:flex justify-center items-center px-4 mt-auto pt-8">
            <Image width={234} height={85} sizes="120px"
              src="/images/logo.png" 
              alt="진한의원" 
              className="w-[120px] h-auto object-contain" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>
 
        {/* 우측 콘텐츠 및 상세 영역 */}
        <div className="min-h-0 min-w-0 flex-1 flex flex-col overflow-hidden lg:h-[min(600px,calc(100dvh-2rem))]">
          
          {/* 동적 탭 컨텐츠 */}
          <div id="clinic-announcement-content" className="min-h-0 flex-1 relative overflow-y-auto overscroll-contain">
            
            {/* 1. 방송안내 탭 */}
            {activeTab === 0 && (
              <div className="w-full min-h-full p-5 lg:p-8 xl:p-9 text-white flex flex-col justify-between relative overflow-hidden select-none">
                <div
                  className="hidden lg:block absolute inset-0 bg-cover bg-[position:70%_center] lg:bg-[position:65%_center] xl:bg-center pointer-events-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_1.jpg')" }}
                />
                <div
                  className="hidden lg:block absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(57, 50, 46, 0.90) 0%, rgba(57, 50, 46, 0.78) 22%, rgba(57, 50, 46, 0.48) 39%, rgba(57, 50, 46, 0.18) 52%, rgba(57, 50, 46, 0) 64%)',
                  }}
                />

                <Image width={840} height={550} sizes="(max-width: 1023px) calc(100vw - 64px), 1px" src="/images/main/popup/popup_1.jpg" alt="여성 모델과 개인별 맞춤 다이어트한약 안내" className="mb-5 block h-auto w-full rounded-lg lg:hidden" />
                <div className="max-w-full lg:max-w-[48%] relative z-10 flex-1 flex flex-col justify-center [text-shadow:0_1px_2px_rgba(0,0,0,0.28)]">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-paperlogy font-extrabold italic tracking-tight bg-[#ED193A] px-2 py-0.5 rounded text-[11px] lg:text-xs">
                      KNN
                    </span>
                    <span className="text-[10px] lg:text-xs text-blue-200/90 font-medium tracking-tight">
                      부산경남 대표방송 메디컬 24시 닥터스
                    </span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl xl:text-[28px] font-extrabold leading-tight mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                    김효진 대표원장 방송출현
                  </h3>
                  <div className="space-y-3 mb-4">
                    <p className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm lg:text-sm xl:text-[15px] font-bold leading-relaxed">
                      <span className="inline-flex w-[64px] justify-center rounded-full bg-white px-2.5 py-px text-[#08325C]">주&nbsp;&nbsp;&nbsp;제</span>
                      <span className="text-white">중년비만, 부종비만, 갱년기</span>
                    </p>
                    <p className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm lg:text-sm xl:text-[15px] font-bold leading-relaxed">
                      <span className="inline-flex w-[64px] justify-center rounded-full bg-white px-2.5 py-px text-[#08325C]">본방송</span>
                      <span className="text-white">2024년 7월 1일(월요일) ~ 7월 5일(금요일) 오후 5시 50분</span>
                    </p>
                  </div>

                  <div className="max-w-[460px] space-y-2 text-sm lg:text-[13px] xl:text-sm leading-relaxed text-white/90 mb-5 font-normal">
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
                    <Link
                      href="/#jin-story"
                      onClick={handleClose}
                      className="inline-flex items-center justify-center bg-white text-blue-900 font-bold px-6 py-2.5 rounded-full text-xs lg:text-sm shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                    >
                      방송 바로보기
                    </Link>
                  </div>
                </div>

              </div>
            )}

            {/* 2. 휴진안내 탭 */}
            {activeTab === 1 && (
              <div className="w-full min-h-full relative select-none bg-[#F5F2EA]">
                <Image width={840} height={540} sizes="(max-width: 1023px) calc(100vw - 24px), 840px"
                  src="/images/main/popup/popup_26_10.jpg"
                  alt="진한의원 10월 진료 및 휴진 안내"
                  className="w-full h-auto lg:h-full object-contain pointer-events-none"
                />
              </div>
            )}
 
            {/* 3. 비대면 다이어트한약 탭 */}
            {activeTab === 2 && (
              <div className="w-full min-h-full p-5 lg:p-8 xl:p-9 text-white flex flex-col justify-between relative overflow-hidden select-none">
                <div
                  className="hidden lg:block absolute inset-0 bg-cover bg-[position:75%_center] lg:bg-[position:70%_center] xl:bg-center pointer-events-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_3.jpg')" }}
                />
                <div
                  className="hidden lg:block absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(45, 50, 51, 0.78) 0%, rgba(45, 50, 51, 0.67) 22%, rgba(45, 50, 51, 0.40) 38%, rgba(45, 50, 51, 0.16) 52%, rgba(45, 50, 51, 0) 64%)',
                  }}
                />
                {/* 올리브 나뭇잎 질감의 배경 장식 */}
                <div className="absolute top-1/2 -left-12 w-48 h-48 rounded-full bg-[#A4B7CC]/20 blur-xl pointer-events-none" />
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#FAFAFA]/5 blur-lg pointer-events-none" />

                <Image width={840} height={550} sizes="(max-width: 1023px) calc(100vw - 64px), 1px" src="/images/main/popup/popup_3.jpg" alt="비대면 다이어트한약 안내" className="mb-5 block h-auto w-full rounded-lg lg:hidden" />
                <div className="max-w-full lg:max-w-[48%] flex-1 flex flex-col justify-center z-10 [text-shadow:0_1px_2px_rgba(0,0,0,0.26)]">
                  <div className="inline-block bg-[#A4B7CC] text-[#08325C] rounded-full px-4 py-1 text-[10px] lg:text-xs font-extrabold w-fit mb-3">
                    방문 없는 간편 처방
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl xl:text-[28px] font-extrabold leading-tight mb-4 text-white">
                    비대면 다이어트한약<br />
                    안심 1:1 맞춤 조제
                  </h3>
 
                  {/* 세부 특징 목록 */}
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

                  <p className="max-w-[590px] text-sm lg:text-sm leading-relaxed text-[#A4B7CC] font-semibold mb-3">
                    #비대면진료 #KNN메디컬24시닥터스 #해독다이어트 #진한의원
                  </p>

                  <p className="text-[11px] lg:text-sm leading-relaxed text-white/95 font-semibold mb-4">
                    문의) <a href="tel:0517140040">051.714.0040</a><span className="mx-2 text-white/50">|</span><a href="tel:01076860041">010.7686.0041</a>
                  </p>
 
                  <div>
                    <Link
                      href="/reservation"
                      onClick={handleClose}
                      className="inline-flex items-center justify-center bg-white text-[#08325C] font-bold px-6 py-2.5 rounded-full text-xs lg:text-sm shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                    >
                      비대면 설문지 작성하기
                    </Link>
                  </div>
                </div>
              </div>
            )}
 
          </div>
 
          {/* 하단 오늘하루보지않기 바 (기능성 편의) */}
          <div className="shrink-0 bg-primary-popup text-white text-xs px-3 sm:px-5 py-2 pb-[max(8px,env(safe-area-inset-bottom))] lg:py-4 flex justify-between gap-2 items-center select-none font-semibold">
            <button 
              onClick={toggleHideToday}
              aria-pressed={isHideToday}
              className="flex min-h-11 items-center gap-2 text-left transition-all cursor-pointer font-bold"
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
