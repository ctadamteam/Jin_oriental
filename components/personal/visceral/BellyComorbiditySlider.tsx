'use client';

import React, { useState } from 'react';

type Symptom = {
  num: string;
  title: string;
  detail: string;
};

type Disease = {
  name: string;
  rate: string;
  icon: string;
};

export default function BellyComorbiditySlider() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  const symptoms: Symptom[] = [
    { num: '1', title: '뇌혈류 감소', detail: '두중감, 두통, 현기증' },
    { num: '2', title: '관상동맥순환 저하', detail: '가슴 답답함, 상열감, 상기감, 두근거림, 숨참' },
    { num: '3', title: '신장혈류감소', detail: '소변량 감소, 부종' },
    { num: '4', title: '위장운동성저하와 혈류정체', detail: '위 부위 팽만감, 식후 답답함' },
    { num: '5', title: '근육혈류량 감소', detail: '근피로도 증가, 팔다리가 쥐나고 저리는 증상, 근육뭉침, 수족냉증' },
    { num: '6', title: '피부혈류 감소', detail: '피부 건조, 색소침착, 잔주름, 다크서클 등' },
  ];

  const diseases: Disease[] = [
    { name: '대사증후군', rate: '+4.2배', icon: '/images/personal/visceral-fat/icon-metabolic.svg' },
    { name: '당뇨병', rate: '+2.1배', icon: '/images/personal/visceral-fat/icon-diabetes.svg' },
    { name: '고혈압', rate: '+2배', icon: '/images/personal/visceral-fat/icon-hypertension.svg' },
    { name: '골관절염', rate: '+1.6배', icon: '/images/personal/visceral-fat/icon-arthritis.svg' },
    { name: '만성콩팥병', rate: '+1.5배', icon: '/images/personal/visceral-fat/icon-kidney.svg' },
    { name: '심혈관질환', rate: '+1.4배', icon: '/images/personal/visceral-fat/icon-cardiovascular.svg' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#121410] via-[#1A1D16] to-[#0E100D] py-16 md:py-20 lg:py-24 overflow-hidden border-b border-[#2C3125]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#7FA110]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Male obesity model image aligned to the bottom of the section */}
        <img
          src="/images/personal/visceral-fat/visceral-fat-model-man.png"
          alt="내장비만 남성 모델"
          className={`absolute h-[100%] w-auto object-contain object-left pointer-events-none select-none z-0 transition-all duration-500 ease-out transform -left-[120px] md:-left-[220px] lg:-left-[320px] -bottom-[64px] md:-bottom-[80px] lg:-bottom-[96px] ${
            activeTab === 0
              ? 'opacity-[0.18] translate-x-0 scale-100'
              : 'opacity-0 -translate-x-10 scale-95'
          }`}
          style={{
            mixBlendMode: 'lighten',
            maskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
          }}
        />

        {/* Premium Dark Segmented Tab Controller */}
        <div className="max-w-xl mx-auto flex p-1 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.3)] mb-12">
          <button
            onClick={() => setActiveTab(0)}
            className={`flex-1 py-3.5 px-4 rounded-xl text-sm md:text-base lg:text-lg font-bold transition-all duration-300 ${
              activeTab === 0
                ? 'bg-gradient-to-br from-primary to-[#9AB81B] text-white shadow-lg shadow-primary/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            나잇살 원인
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`flex-1 py-3.5 px-4 rounded-xl text-sm md:text-base lg:text-lg font-bold transition-all duration-300 ${
              activeTab === 1
                ? 'bg-gradient-to-br from-primary to-[#9AB81B] text-white shadow-lg shadow-primary/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            복부비만 동반질환
          </button>
        </div>

        {/* Display Frame with Lock Min Height for Transitions */}
        <div className="relative w-full rounded-[32px] overflow-hidden min-h-[1050px] sm:min-h-[920px] md:min-h-[850px] lg:min-h-[680px]">
          
          {/* SLIDE 1: Aging Belly Section */}
          <div
            className={`w-full transition-all duration-500 ease-out transform absolute inset-0 flex flex-col justify-center ${
              activeTab === 0
                ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto z-10'
                : 'opacity-0 scale-95 -translate-x-10 pointer-events-none z-0'
            }`}
          >
            <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-12 items-start z-10 py-10 md:py-16 px-4 md:px-8">
              {/* Text block */}
              <div className="flex-1 lg:pl-4 lg:pt-10">
                <div className="flex justify-center lg:justify-start mb-10 md:mb-12 lg:mb-16">
                  <h2
                    className="font-paperlogy text-center lg:text-left text-3xl md:text-5xl lg:text-[68px] leading-[1.1]"
                    style={{ letterSpacing: '-0.05em' }}
                  >
                    <span className="text-white">나이 들수록 </span>
                    <span className="text-primary font-extrabold block sm:inline">뱃살이 늘어나는 이유</span>
                  </h2>
                </div>
                <p className="text-white/90 text-[14.4px] md:text-[18px] lg:text-[27px] font-medium text-center lg:text-left mb-6" style={{ letterSpacing: '-0.05em' }}>
                  단순 지방이 아니라 소화기계 과부하로 시작된 전신 기능 저하입니다.
                </p>
                <p className="text-gray-300 text-[14.4px] md:text-[18px] lg:text-[27px] leading-relaxed text-center lg:text-left mb-10" style={{ letterSpacing: '-0.05em' }}>
                  공복 상태이거나 소화기능이 원만할 때보다 과식 시 소화기계 쪽의 혈류유입량이 35~40%까지 증가되면서{' '}
                  <strong className="text-primary font-bold">다른 주요 장기와 말초부위로의 혈류가 감소되면서 전신 불편 증상이 유발할 수 있습니다.</strong>
                </p>

                {/* DOWN arrow + label (Option B: Line Architecture & Minimal Typo) */}
                <div className="flex items-stretch gap-3.5 max-w-xl mb-6 mx-auto lg:mx-0 py-1.5">
                  {/* Vertical accent divider using brand color */}
                  <div className="w-[3px] bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                  
                  <div className="flex-1 flex flex-col justify-center pl-1">
                    <p className="leading-[1.2]" style={{ letterSpacing: '-0.04em' }}>
                      <span className="block text-gray-400 font-medium text-[15px] md:text-[19px] lg:text-[21px]">
                        과식 시 소화기계를 제외한
                      </span>
                      <span className="block text-white font-extrabold text-[19px] md:text-[25px] lg:text-[29px] mt-0.5">
                        모든 전신장기 기능
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 md:gap-2.5 flex-shrink-0 pl-1">
                    <span className="text-primary font-black text-3xl md:text-4xl lg:text-[42px] leading-none">
                      DOWN
                    </span>
                    <svg className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[42px] lg:h-[42px] text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="arrowGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <path d="M9 2h6v11h5l-8 9-8-9h5Z" fill="url(#arrowGradient)" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Symptoms list */}
              <div className="w-full lg:flex-1 space-y-4 md:space-y-5">
                {symptoms.map((s) => (
                  <div key={s.num} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="w-7 h-7 md:w-9 md:h-9 bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 rounded-lg shadow-md">
                      <span className="text-white font-extrabold text-sm md:text-lg">{s.num}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base md:text-lg lg:text-[22px]" style={{ letterSpacing: '-0.05em' }}>{s.title}</p>
                      <p className="text-gray-400 text-xs md:text-sm lg:text-[17px] mt-1" style={{ letterSpacing: '-0.04em' }}>{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SLIDE 2: Comorbidity Section */}
          <div
            className={`w-full transition-all duration-500 ease-out transform absolute inset-0 flex flex-col justify-center ${
              activeTab === 1
                ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto z-10'
                : 'opacity-0 scale-95 translate-x-10 pointer-events-none z-0'
            }`}
          >
            <div className="relative rounded-[32px] overflow-hidden bg-white/[0.01] border border-white/[0.05] p-6 md:p-10 lg:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.15)] min-h-[900px] sm:min-h-[730px] md:min-h-[640px] lg:min-h-[550px] flex flex-col justify-center">
              
              {/* Header Badge */}
              <div className="flex justify-center mb-8">
                <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm md:text-lg lg:text-[21px] font-bold px-6 py-2.5 rounded-full shadow-inner">
                  복부비만 동반질환
                </span>
              </div>

              {/* Diseases Grid (Glassmorphism layout) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
                {diseases.map((d) => (
                  <div 
                    key={d.name} 
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08] hover:scale-[1.02] transition-all duration-300 group shadow-md"
                  >
                    <div className="text-primary group-hover:text-white transition-colors duration-300">
                      <img src={d.icon} alt={d.name} className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm md:text-base lg:text-[18px] font-medium">{d.name}</p>
                      <p className="text-white font-extrabold text-2xl md:text-3xl lg:text-[42px] leading-none mt-1" style={{ letterSpacing: '-0.05em' }}>{d.rate}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom text */}
              <div className="text-center mt-4 space-y-0.5">
                <p className="text-gray-400 text-sm md:text-lg lg:text-[24px] leading-tight" style={{ letterSpacing: '-0.05em' }}>
                  뱃살 감소는 위장기능을 개선하고 내장지방을 줄여
                </p>
                <p className="text-primary font-extrabold text-xl md:text-3xl lg:text-[46px] leading-tight" style={{ letterSpacing: '-0.05em' }}>
                  질병 예방과 건강관리에 도움을 줍니다.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
