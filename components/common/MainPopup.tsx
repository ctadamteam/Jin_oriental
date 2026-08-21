'use client';

import React, { useState, useEffect } from 'react';

export default function MainPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isHideToday, setIsHideToday] = useState(false);

  // 페이지 마운트 시 로컬 스토리지 확인하여 노출 여부 결정
  useEffect(() => {
    const hideUntil = localStorage.getItem('hide_main_popup_until');
    if (!hideUntil || new Date().getTime() > parseInt(hideUntil, 10)) {
      setIsOpen(true);
    }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-[3px] p-4 animate-fade-in">
      {/* 팝업 카드 */}
      <div className="main-popup-root relative w-full max-w-[1080px] bg-primary-popup rounded-none overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col md:flex-row">
        
        {/* 우측 상단 닫기 X 버튼 (데스크톱 및 공통) */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-30 text-white/70 text-2xl font-bold bg-black/20 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer"
          aria-label="닫기"
        >
          &times;
        </button>
 
        {/* 좌측 탭바 (모바일은 상단 가로바) */}
        <div className="w-full md:w-[240px] bg-primary-popup flex flex-row md:flex-col justify-between md:pt-0 md:pb-6 shrink-0">
          <div className="w-full flex flex-row md:flex-col justify-start">
             <button 
              onClick={() => setActiveTab(0)}
              className={`flex-1 md:flex-initial py-4.5 md:py-5 px-4 md:px-6 text-center md:text-left text-xs md:text-sm lg:text-base font-bold transition-all relative ${
                activeTab === 0 
                  ? 'bg-[#EEEFF1] text-primary-dark md:rounded-r-none'
                  : 'text-white/70'
              }`}
            >
              방송안내
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              className={`flex-1 md:flex-initial py-4.5 md:py-5 px-4 md:px-6 text-center md:text-left text-xs md:text-sm lg:text-base font-bold transition-all relative ${
                activeTab === 1 
                  ? 'bg-[#EEEFF1] text-primary-dark md:rounded-r-none'
                  : 'text-white/70'
              }`}
            >
              이벤트바로가기
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`flex-1 md:flex-initial py-4.5 md:py-5 px-4 md:px-6 text-center md:text-left text-xs md:text-sm lg:text-base font-bold transition-all relative ${
                activeTab === 2 
                  ? 'bg-[#EEEFF1] text-primary-dark md:rounded-r-none'
                  : 'text-white/70'
              }`}
            >
              비대면 다이어트한약
            </button>
          </div>
 
          {/* 탭바 하단 진한의원 로고 (데스크톱 전용) - 비활성화된 탭 글씨 색상(text-primary-dark/70)과 일치시킴 */}
          <div className="hidden md:flex justify-center items-center px-4 mt-auto pt-8">
            <img 
              src="/images/logo.png" 
              alt="진한의원" 
              className="w-[120px] h-auto object-contain" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>
 
        {/* 우측 콘텐츠 및 상세 영역 */}
        <div className="flex-1 flex flex-col justify-between overflow-hidden min-h-[480px] md:min-h-[560px] lg:h-[600px]">
          
          {/* 동적 탭 컨텐츠 */}
          <div className="flex-1 relative overflow-hidden">
            
            {/* 1. 방송안내 탭 */}
            {activeTab === 0 && (
              <div className="w-full h-full p-6 md:p-8 lg:p-9 text-white flex flex-col justify-between relative overflow-hidden select-none">
                <div
                  className="absolute inset-0 bg-cover bg-center md:[background-size:115%_auto] md:[background-position:left_center] pointer-events-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_broadcast.jpg')" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(1, 34, 61, 0.92) 0%, rgba(1, 34, 61, 0.82) 34%, rgba(1, 34, 61, 0.52) 52%, rgba(1, 34, 61, 0.18) 70%, rgba(1, 34, 61, 0) 86%)',
                  }}
                />

                <div className="max-w-full md:max-w-[61%] relative z-10 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-paperlogy font-extrabold italic tracking-tight bg-[#ED193A] px-2 py-0.5 rounded text-[11px] md:text-xs">
                      KNN
                    </span>
                    <span className="text-[10px] md:text-xs text-blue-200/90 font-medium tracking-tight">
                      부산경남 대표방송 메디컬 24시 닥터스
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl lg:text-[28px] font-extrabold leading-tight mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                    김효진 대표원장 방송출현
                  </h3>
                  <div className="space-y-3 mb-4">
                    <p className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[12px] md:text-sm lg:text-[15px] font-bold leading-relaxed">
                      <span className="inline-flex w-[64px] justify-center rounded-full bg-white px-2.5 py-px text-[#08325C]">주&nbsp;&nbsp;&nbsp;제</span>
                      <span className="text-white">중년비만, 부종비만, 갱년기</span>
                    </p>
                    <p className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[12px] md:text-sm lg:text-[15px] font-bold leading-relaxed">
                      <span className="inline-flex w-[64px] justify-center rounded-full bg-white px-2.5 py-px text-[#08325C]">본방송</span>
                      <span className="text-white">2024년 7월 1일(월요일) ~ 7월 5일(금요일) 오후 5시 50분</span>
                    </p>
                  </div>

                  <div className="max-w-[460px] space-y-2 text-[12px] md:text-[13px] lg:text-sm leading-relaxed text-white/90 mb-5 font-normal">
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
                      href="/reservation"
                      className="inline-flex items-center justify-center bg-white text-blue-900 font-bold px-6 py-2.5 rounded-full text-xs md:text-sm shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                    >
                      방송 바로보기
                    </a>
                  </div>
                </div>

              </div>
            )}

            {/* 2. 이벤트바로가기 탭 */}
            {activeTab === 1 && (
              <div className="w-full h-full bg-gradient-to-br from-[#00C2FF] via-[#00B4D8] to-[#0077B6] p-6 md:p-8 lg:p-9 text-white flex flex-col justify-between relative overflow-hidden select-none">
                {/* 구름 및 물방울 형태의 아기자기한 배경 장식 */}
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 blur-lg pointer-events-none" />
                <div className="absolute top-1/4 left-8 w-3 h-3 rounded-full bg-white/20 pointer-events-none" />
                <div className="absolute bottom-1/4 right-12 w-4 h-4 rounded-full bg-white/15 pointer-events-none" />

                <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
                  {/* 구름 모양 안내박스 */}
                  <div className="inline-block border-2 border-white/60 rounded-full px-5 py-2.5 bg-white/10 backdrop-blur-sm text-[11px] md:text-xs lg:text-sm font-semibold tracking-wide shadow-inner mb-6">
                     진한의원의 각종 이벤트를 만나보세요!
                  </div>

                  <span className="text-xs md:text-sm font-bold tracking-widest text-cyan-100 uppercase">
                    JIN EVENT
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-[40px] font-black leading-tight mt-1 mb-6 text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.12)]">
                    이벤트 바로가기
                  </h3>

                  <div>
                    <a 
                      href="/events"
                      className="inline-flex items-center justify-center bg-cyan-100 text-cyan-900 font-bold px-8 py-3 rounded-full text-xs md:text-sm shadow-lg transition-all hover:scale-[1.03] cursor-pointer"
                    >
                      이벤트 바로가기 <span className="ml-2 font-mono">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
 
            {/* 3. 비대면 다이어트한약 탭 */}
            {activeTab === 2 && (
              <div className="w-full h-full p-6 md:p-8 lg:p-9 text-white flex flex-col justify-between relative overflow-hidden select-none">
                <div
                  className="absolute inset-0 bg-cover bg-center md:bg-left pointer-events-none"
                  style={{ backgroundImage: "url('/images/main/popup/popup_remote-diet.jpg')" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(1, 34, 61, 0.93) 0%, rgba(1, 34, 61, 0.82) 31%, rgba(1, 34, 61, 0.62) 44%, rgba(1, 34, 61, 0.32) 58%, rgba(1, 34, 61, 0.1) 72%, rgba(1, 34, 61, 0) 86%)',
                  }}
                />
                {/* 올리브 나뭇잎 질감의 배경 장식 */}
                <div className="absolute top-1/2 -left-12 w-48 h-48 rounded-full bg-[#A4B7CC]/20 blur-xl pointer-events-none" />
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#FAFAFA]/5 blur-lg pointer-events-none" />

                <div className="flex-1 flex flex-col justify-center z-10">
                  <div className="inline-block bg-[#A4B7CC] text-[#08325C] rounded-full px-4 py-1 text-[10px] md:text-xs font-extrabold w-fit mb-3">
                    방문 없는 간편 처방
                  </div>
                  
                  <h3 className="text-xl md:text-2xl lg:text-[28px] font-extrabold leading-tight mb-4 text-white">
                    비대면 다이어트한약<br />
                    안심 1:1 맞춤 조제
                  </h3>
 
                  {/* 세부 특징 목록 */}
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                      <span className="text-[#A4B7CC] mt-0.5">✔</span>
                      <span><strong>전화 비대면 진료</strong> 및 상세 한의학적 진단 설문 진행</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                      <span className="text-[#A4B7CC] mt-0.5">✔</span>
                      <span>환자 개인별 <strong>체질/식습관 맞춤</strong> 1:1 한약 조제</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                      <span className="text-[#A4B7CC] mt-0.5">✔</span>
                      <span>원격 한약 배송 규격에 따른 <strong>꼼꼼한 안심 직송</strong> 서비스</span>
                    </li>
                  </ul>

                  <p className="max-w-[590px] text-[12px] md:text-sm leading-relaxed text-[#A4B7CC] font-semibold mb-3">
                    #비대면진료 #KNN메디컬24시닥터스 #해독다이어트 #진한의원
                  </p>

                  <p className="text-[11px] md:text-sm leading-relaxed text-white/95 font-semibold mb-4">
                    문의) <a href="tel:0517140040">051.714.0040</a><span className="mx-2 text-white/50">|</span><a href="tel:01076860041">010.7686.0041</a>
                  </p>
 
                  <div>
                    <a 
                      href="/diet-medicine"
                      className="inline-flex items-center justify-center bg-white text-[#08325C] font-bold px-6 py-2.5 rounded-full text-xs md:text-sm shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                    >
                      비대면 처방 알아보기
                    </a>
                  </div>
                </div>
              </div>
            )}
 
          </div>
 
          {/* 하단 오늘하루보지않기 바 (기능성 편의) */}
          <div className="bg-primary-popup text-white text-xs px-5 py-3.5 md:py-4 flex justify-between items-center select-none font-semibold">
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
