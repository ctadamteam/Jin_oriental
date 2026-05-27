'use client';

import React, { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { useRouter } from 'next/navigation';

const mockEvents = [
  { 
    id: 1, 
    title: "배사라정",
    subtitle: "다이어트",
    description: "하루 두번 간편한 캡슐다이어트",
    price: "150,000원",
    imageUrl: "/images/event/baesarajung.png"
  },
  { 
    id: 2, 
    title: "물광 2CC",
    subtitle: "한방성형",
    description: "건조한 피부 촉촉 물광!",
    price: "80,000원",
    imageUrl: "/images/event/mulgwang.jpg"
  },
  { 
    id: 3, 
    title: "엑소좀 1회",
    subtitle: "한방피부",
    description: "피부 본연의 에너지를 활성화",
    price: "150,000원",
    imageUrl: "/images/event/exojom.png"
  },
  { 
    id: 4, 
    title: "자궁미인 90정(1통)",
    subtitle: "자궁미인",
    description: "건강한 자궁을 위한 여성 밸런스 케어",
    price: "80,000원",
    imageUrl: "/images/event/jagungmi.png"
  },
  { 
    id: 5, 
    title: "산후조리 100일 프로그램",
    subtitle: "산후조리한약",
    description: "진한의원 산후조리한약",
    price: "1,080,000원",
    imageUrl: "/images/event/sanhu.png"
  },
  { 
    id: 6, 
    title: "소장해독 프로그램",
    subtitle: "맞춤형해독",
    description: "진한의원 개인별 맞춤 해독",
    price: "120,000원",
    imageUrl: "/images/event/matchum.png"
  },
];

export function EventMenuSection() {
  const [selectedEvents, setSelectedEvents] = useState<number[]>([]);
  const router = useRouter();

  const toggleEvent = (id: number) => {
    setSelectedEvents((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReservation = () => {
    if (selectedEvents.length === 0) {
      alert("예약하실 시술을 하나 이상 담아주세요.");
      return;
    }
    const params = new URLSearchParams();
    params.set('items', selectedEvents.join(','));
    router.push(`/reservation?${params.toString()}`);
  };

  return (
    <section className="py-24 bg-gray-50 relative pb-40">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="SPECIAL EVENT"
          title={<>합리적인 가격으로 만나는<br/>특별한 혜택</>} 
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockEvents.map((event) => {
            const isSelected = selectedEvents.includes(event.id);
            return (
              <div 
                key={event.id} 
                className={`bg-white rounded-2xl border ${isSelected ? 'border-red-400 ring-1 ring-red-400 shadow-md' : 'border-gray-200'} overflow-hidden shadow-sm flex transition-all hover:shadow-md h-[200px] sm:h-[220px]`}
              >
                {/* 좌측 이미지 영역 */}
                <div className="w-[40%] bg-gray-100 relative shrink-0">
                  {/* 임시 배경 (실제 이미지 연결 전 안내용, z-0으로 깔아둠) */}
                  <div className="absolute inset-0 flex items-center justify-center text-[13px] text-gray-500 p-2 text-center bg-black/5 font-medium z-0">
                    {event.subtitle}<br/>배너 영역
                  </div>
                  {/* 실제 이미지 영역 (z-10으로 위로 덮음) */}
                  <div 
                    className={`absolute inset-0 bg-center bg-no-repeat z-10 ${(event as any).imageSize === 'contain' ? 'bg-contain' : 'bg-cover'}`}
                    style={{ backgroundImage: `url(${event.imageUrl})` }}
                  />
                </div>
                
                {/* 우측 텍스트 및 버튼 영역 */}
                <div className="w-[60%] p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-[13px] font-bold text-[var(--color-primary)] mb-1">{event.subtitle}</div>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-2 leading-snug truncate">
                      {event.title}
                    </h3>
                    <div className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed mb-4 line-clamp-2">
                      {event.description}
                    </div>
                  </div>
                  
                  <div className="flex items-end justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[20px] sm:text-[24px] font-bold text-gray-900">{event.price}</span>
                    </div>
                    <button 
                      onClick={() => toggleEvent(event.id)}
                      className={`px-4 sm:px-6 py-2.5 rounded-lg font-bold text-sm transition-colors ${
                        isSelected 
                          ? 'bg-red-400 text-white hover:bg-red-500' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {isSelected ? '빼기' : '담기'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Bottom Bar - 이벤트 담았을 때만 노출 */}
      {selectedEvents.length > 0 && (
        <div className="sticky bottom-[60px] left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-40 mt-8 rounded-xl border mx-4 sm:mx-auto max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <div className="text-gray-700 font-medium text-[16px] pl-4">
              내가 담은 이벤트 <span className="text-[var(--color-primary)] font-bold">({selectedEvents.length})</span>
            </div>
            <button 
              onClick={handleReservation}
              className="bg-[#1A1A1A] hover:bg-black text-white px-8 py-3 rounded-xl font-bold text-[16px] min-w-[140px] transition-colors"
            >
              예약하기
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
