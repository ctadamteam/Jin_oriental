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
      <div className="relative w-full max-w-[1080px] bg-primary-popup rounded-none overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col md:flex-row">
        
        {/* 우측 상단 닫기 X 버튼 (데스크톱 및 공통) */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-30 text-white/70 hover:text-white text-2xl font-bold bg-black/20 hover:bg-black/40 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer"
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
                  ? 'bg-[#F4F6EA] text-primary-dark md:rounded-r-none' 
                  : 'text-primary-dark/70 hover:text-primary-dark hover:bg-white/20'
              }`}
            >
              방송안내
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              className={`flex-1 md:flex-initial py-4.5 md:py-5 px-4 md:px-6 text-center md:text-left text-xs md:text-sm lg:text-base font-bold transition-all relative ${
                activeTab === 1 
                  ? 'bg-[#F4F6EA] text-primary-dark md:rounded-r-none' 
                  : 'text-primary-dark/70 hover:text-primary-dark hover:bg-white/20'
              }`}
            >
              이벤트바로가기
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`flex-1 md:flex-initial py-4.5 md:py-5 px-4 md:px-6 text-center md:text-left text-xs md:text-sm lg:text-base font-bold transition-all relative ${
                activeTab === 2 
                  ? 'bg-[#F4F6EA] text-primary-dark md:rounded-r-none' 
                  : 'text-primary-dark/70 hover:text-primary-dark hover:bg-white/20'
              }`}
            >
              비대면 다이어트한약
            </button>
          </div>
 
          {/* 탭바 하단 진한의원 로고 (데스크톱 전용) - 비활성화된 탭 글씨 색상(text-primary-dark/70)과 일치시킴 */}
          <div className="hidden md:flex justify-center items-center px-4 mt-auto pt-8 opacity-70">
            <img 
              src="/images/logo.png" 
              alt="진한의원" 
              className="w-[120px] h-auto object-contain" 
              style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(55%) saturate(1067%) hue-rotate(53deg) brightness(95%) contrast(106%)' }}
            />
          </div>
        </div>
 
        {/* 우측 콘텐츠 및 상세 영역 */}
        <div className="flex-1 flex flex-col justify-between overflow-hidden min-h-[480px] md:min-h-[560px] lg:h-[600px]">
          
          {/* 동적 탭 컨텐츠 */}
          <div className="flex-1 relative overflow-hidden">
            
            {/* 1. 방송안내 탭 */}
            {activeTab === 0 && (
              <div className="w-full h-full bg-gradient-to-br from-[#0B3A7E] via-[#0E4F9F] to-[#125CA9] p-6 md:p-8 lg:p-9 text-white flex flex-col justify-between relative overflow-hidden select-none">
                {/* 배경 장식 원들 */}
                <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-blue-400/10 blur-xl pointer-events-none" />
                <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-blue-300/15 blur-2xl pointer-events-none" />
                
                <div className="max-w-full md:max-w-[56%] z-10 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-paperlogy font-extrabold italic tracking-tight bg-blue-800 px-2 py-0.5 rounded text-[11px] md:text-xs">
                      KNN
                    </span>
                    <span className="text-[10px] md:text-xs text-blue-200/90 font-medium tracking-tight">
                      부산경남 대표방송 메디컬24시 닥터스
                    </span>
                  </div>
                  
                  <h4 className="text-[13px] md:text-[15px] lg:text-[17px] font-bold text-[#E4FF00] tracking-tight mb-2">
                    2025년 8월 4일 본방송 신상호 원장님 출연!
                  </h4>
                  
                  <h3 className="text-xl md:text-2xl lg:text-[28px] font-extrabold leading-tight mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                    난치성 피부질환,<br />
                    몸 안에서 해답을 찾다
                  </h3>
 
                  {/* 방송시간 상세 */}
                  <div className="space-y-1.5 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="bg-[#0B3060] border border-blue-400/20 text-[#A5CFFF] text-[10px] md:text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0">
                        본방송
                      </span>
                      <span className="text-xs md:text-sm font-semibold text-blue-100">
                        2025년 8월 5일(화요일) 오후 7시 10분
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="bg-[#0B3060] border border-blue-400/20 text-[#A5CFFF] text-[10px] md:text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0">
                        재방송
                      </span>
                      <span className="text-xs md:text-sm font-semibold text-blue-100">
                        2025년 9월 8일(월요일) 오전 9시 10분
                      </span>
                    </div>
                  </div>
 
                  <p className="text-[11px] md:text-[12px] lg:text-[13px] leading-relaxed text-blue-50/80 mb-5 font-normal tracking-wide">
                    화폐상습진(동전습진), 결절성양진, 건선, 가려움증,<br className="hidden md:inline" />
                    안면홍조, 난치성여드름 등 다양한 피부질환의<br className="hidden md:inline" />
                    치료방법과 치료사례 등이 방송됩니다^^ <br />
                    <span className="text-[#E4FF00] font-semibold">(부산 연제구 연산동 아마르한의원)</span>
                  </p>
                  
                  <div>
                    <a 
                      href="/reservation"
                      className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-blue-900 font-bold px-6 py-2.5 rounded-full text-xs md:text-sm shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                    >
                      방송 바로보기
                    </a>
                  </div>
                </div>

                {/* 우측 의사 이미지 오버레이 (모바일에서는 불투명도 및 크기 조절) */}
                <div className="absolute right-0 bottom-0 h-[68%] md:h-[88%] lg:h-[94%] w-auto z-0 opacity-40 md:opacity-100 pointer-events-none transition-all">
                  <img 
                    src="/images/profile/doctor.png" 
                    alt="신상호 대표원장" 
                    className="h-full w-auto object-contain object-bottom filter drop-shadow-[-5px_0_15px_rgba(0,0,0,0.15)]" 
                  />
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
                     아마르한의원의 각종 이벤트를 만나보세요!
                  </div>

                  <span className="text-xs md:text-sm font-bold tracking-widest text-cyan-100 uppercase">
                    AMAR EVENT
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-[40px] font-black leading-tight mt-1 mb-6 text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.12)]">
                    이벤트 바로가기
                  </h3>

                  <div>
                    <a 
                      href="/events"
                      className="inline-flex items-center justify-center bg-cyan-100 hover:bg-white text-cyan-900 font-bold px-8 py-3 rounded-full text-xs md:text-sm shadow-lg transition-all hover:scale-[1.03] cursor-pointer"
                    >
                      이벤트 바로가기 <span className="ml-2 font-mono">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
 
            {/* 3. 비대면 다이어트한약 탭 */}
            {activeTab === 2 && (
              <div className="w-full h-full bg-gradient-to-br from-[#7F6958] via-[#9E8673] to-[#5E4D40] p-6 md:p-8 lg:p-9 text-white flex flex-col justify-between relative overflow-hidden select-none">
                {/* 올리브 나뭇잎 질감의 배경 장식 */}
                <div className="absolute top-1/2 -left-12 w-48 h-48 rounded-full bg-[#BEE622]/10 blur-xl pointer-events-none" />
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#FAFAFA]/5 blur-lg pointer-events-none" />

                <div className="flex-1 flex flex-col justify-center z-10">
                  <div className="inline-block bg-primary text-primary-dark rounded-full px-4 py-1 text-[10px] md:text-xs font-extrabold w-fit mb-3">
                    방문 없는 간편 처방
                  </div>
                  
                  <h3 className="text-xl md:text-2xl lg:text-[28px] font-extrabold leading-tight mb-4 text-white">
                    비대면 다이어트한약<br />
                    안심 1:1 맞춤 조제
                  </h3>
 
                  {/* 세부 특징 목록 */}
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                      <span className="text-[#BEE622] mt-0.5">✔</span>
                      <span><strong>전화 비대면 진료</strong> 및 상세 한의학적 진단 설문 진행</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                      <span className="text-[#BEE622] mt-0.5">✔</span>
                      <span>환자 개인별 <strong>체질/식습관 맞춤</strong> 1:1 한약 조제</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                      <span className="text-[#BEE622] mt-0.5">✔</span>
                      <span>원격 한약 배송 규격에 따른 <strong>꼼꼼한 안심 직송</strong> 서비스</span>
                    </li>
                  </ul>
 
                  <div>
                    <a 
                      href="/diet-medicine"
                      className="inline-flex items-center justify-center bg-primary hover:bg-[#C7EE2C] text-primary-dark font-extrabold px-7 py-2.5 rounded-full text-xs md:text-sm shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                    >
                      비대면 처방 알아보기
                    </a>
                  </div>
                </div>
              </div>
            )}
 
          </div>
 
          {/* 하단 오늘하루보지않기 바 (기능성 편의) */}
          <div className="bg-primary-popup text-primary-dark text-xs px-5 py-3.5 md:py-4 flex justify-between items-center select-none font-semibold">
            <button 
              onClick={toggleHideToday} 
              className="hover:text-primary-dark/80 flex items-center gap-2 transition-all cursor-pointer font-bold"
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
              className="hover:bg-primary-dark/90 font-bold transition-all px-5 py-1.5 bg-primary-dark text-white rounded-md cursor-pointer shadow-sm"
            >
              닫기
            </button>
          </div>
 
        </div>
      </div>
    </div>
  );
}
