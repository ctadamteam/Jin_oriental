'use client';

import React, { useState } from 'react';

type OrganEffect = {
  organ: string;
  effect: string;
};

export default function AbdominalComparisonSlider() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  const organEffects: OrganEffect[] = [
    { organ: '간', effect: '과음 과식으로 인한 간의 울혈 현상' },
    { organ: '심장', effect: '심장의 부담 증가로 혈압 맥박 수 증가' },
    { organ: '위', effect: '과도한 위 근육 사용으로 위벽이 붓고 단단해짐' },
    { organ: '복강', effect: '내장지방의 증가로 인해 복강 내 공간 감소로 혈류, 림프 순환장애로 인해 복강 내 부종 발생' },
    { organ: '장', effect: '장운동 감소로 인한 음식물 독소의 처리속도 지연으로 부패 증가하여 복부 내 가스 생성이 늘어나 복부 팽만감이 생기고 배변 활동도 감소' },
  ];

  return (
    <section className="bg-sub py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="font-paperlogy text-center text-black text-4xl md:text-5xl lg:text-[62px] mb-10 leading-tight"
          style={{ letterSpacing: '-0.05em' }}
        >
          건강한 사람과 내장비만인의 <span className="text-primary font-extrabold">복강비교</span>
        </h2>

        {/* Unique Wide Segmented Controller (Not the pill shape of Section 3) */}
        <div className="max-w-xl mx-auto flex p-1.5 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] mb-12">
          <button
            onClick={() => setActiveTab(0)}
            className={`flex-1 py-3.5 px-4 rounded-xl text-sm md:text-base lg:text-lg font-bold transition-all duration-300 ${
              activeTab === 0
                ? 'bg-[#5A654D] text-white shadow-lg shadow-[#5A654D]/10'
                : 'text-[#6E7560] hover:text-[#5A654D]'
            }`}
          >
            건강한 사람의 복강
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`flex-1 py-3.5 px-4 rounded-xl text-sm md:text-base lg:text-lg font-bold transition-all duration-300 ${
              activeTab === 1
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-[#6E7560] hover:text-primary'
            }`}
          >
            내장비만인의 복강
          </button>
        </div>

        {/* Display Wrapper with Locked Height */}
        {/* min-h to fit mobile content without expanding parent, locked h on lg */}
        <div className="relative w-full min-h-[820px] sm:min-h-[750px] md:min-h-[680px] lg:min-h-[640px] lg:h-[640px] max-w-5xl mx-auto bg-white rounded-[32px] border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] overflow-hidden">
          
          {/* SLIDE 1: Healthy Abdomen */}
          <div
            className={`w-full h-full p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 items-center lg:justify-between transition-all duration-500 ease-out transform absolute inset-0 ${
              activeTab === 0
                ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto z-10'
                : 'opacity-0 scale-95 -translate-x-10 pointer-events-none z-0'
            }`}
          >
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center h-full">
              <div className="mb-6">
                <span className="inline-block bg-[#5A654D] text-white rounded-full px-5 py-2 text-sm md:text-base lg:text-lg font-bold">
                  건강한 사람의 복강
                </span>
              </div>
              <p
                className="text-black text-[15.2px] md:text-[19px] lg:text-[23.5px] leading-relaxed font-medium"
                style={{ letterSpacing: '-0.05em' }}
              >
                식도, 위, 소장, 대장 등의 장기들은 장기 안이 음식물로 인해 가득 차 있을수록 불편하고 기능이 떨어집니다. <br className="hidden lg:block" /><br className="hidden lg:block" />
                장기 안이 비어있을수록 장기의 운동성이 활발해져 효율적으로 내장지방을 연소하고 복강 내 혈액-림프 흐름이 원활해집니다.
              </p>
            </div>

            {/* Right Image with Anatomical Labels Overlay */}
            <div className="w-full lg:w-[45%] flex-shrink-0 flex justify-center lg:justify-end lg:items-start pt-6 lg:pt-0">
              <div className="relative w-[240px] md:w-[280px] lg:w-[320px] aspect-square lg:-mt-6">
                <img
                  src="/images/personal/visceral-fat/visceral-fat-9.png"
                  alt="건강한 사람의 복강 단면도"
                  className="w-full h-full object-contain filter drop-shadow-[0_6px_15px_rgba(0,0,0,0.02)] z-0"
                />
                {/* Labels Overlay */}
                <span className="absolute top-[42%] left-[53%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  심장
                </span>
                <span className="absolute top-[57%] left-[35%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  간
                </span>
                <span className="absolute top-[59%] left-[64%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  위
                </span>
                <span className="absolute top-[74%] left-[35%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  대장
                </span>
                <span className="absolute top-[84%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  소장
                </span>
              </div>
            </div>
          </div>

          {/* SLIDE 2: Obese Abdomen */}
          <div
            className={`w-full h-full p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 items-center lg:justify-between transition-all duration-500 ease-out transform absolute inset-0 ${
              activeTab === 1
                ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto z-10'
                : 'opacity-0 scale-95 translate-x-10 pointer-events-none z-0'
            }`}
          >
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center h-full">
              <div className="mb-4">
                <span className="inline-block bg-primary text-white rounded-full px-5 py-2 text-sm md:text-base lg:text-lg font-bold">
                  내장비만인의 복강
                </span>
              </div>
              <p
                className="text-black text-[15.2px] md:text-[19px] lg:text-[23.5px] leading-relaxed mb-6 font-medium"
                style={{ letterSpacing: '-0.05em' }}
              >
                처리되지 못한 대사산물의 축적으로 혈액이 탁해지고 흐름이 나빠져서 혈액 내 염증 수치 증가, 혈중 지질의 증가로 세포, 조직, 장기의 기능이 저하되어 각종 질병이 발생합니다.
              </p>

              {/* Organ Effects Grid Layout for Space efficiency */}
              <div className="bg-[#F8F9F5] rounded-2xl p-4 md:p-5 border border-primary/5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-6 md:gap-y-3">
                {organEffects.map((item) => (
                  <div
                    key={item.organ}
                    className={`flex gap-2.5 ${
                      item.organ === '장' ? 'md:col-span-2' : ''
                    }`}
                  >
                    <span className="flex-shrink-0 mt-1">
                      <svg width="7" height="7" viewBox="0 0 9 9" fill="none">
                        <circle cx="4.5" cy="4.5" r="4.5" fill="#8BA612" />
                      </svg>
                    </span>
                    <p
                      className="text-xs md:text-sm lg:text-[15.5px] leading-relaxed text-gray-800"
                      style={{ letterSpacing: '-0.04em' }}
                    >
                      <strong className="font-bold text-black">{item.organ}</strong>
                      <span className="mx-1 text-gray-400">|</span>
                      {item.effect}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[45%] flex-shrink-0 flex justify-center lg:justify-end lg:items-start pt-6 lg:pt-0">
              <div className="relative w-[240px] md:w-[280px] lg:w-[320px] aspect-square lg:-mt-6">
                <img
                  src="/images/personal/visceral-fat/visceral-fat-10.png"
                  alt="내장비만인의 복강 단면도"
                  className="w-full h-full object-contain filter drop-shadow-[0_6px_15px_rgba(0,0,0,0.02)] z-0"
                />
                {/* Labels Overlay */}
                <span className="absolute top-[35%] left-[53%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  심장
                </span>
                <span className="absolute top-[45%] left-[41%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  간
                </span>
                <span className="absolute top-[48%] left-[61%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  위
                </span>
                <span className="absolute top-[67%] left-[33%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  대장
                </span>
                <span className="absolute top-[65%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-black/45 backdrop-blur-[2px] text-white font-bold text-[10px] md:text-xs lg:text-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full select-none pointer-events-none shadow-sm z-10">
                  소장
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
