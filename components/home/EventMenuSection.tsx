import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../ui/Button';

export function EventMenuSection() {
  const mockEvents = [
    { id: 1, title: '다이어트 첫 달 특별 할인', price: '99,000원', imageUrl: '/images/event/event_menu.png' },
    { id: 2, title: '산후 보약 패키지', price: '상담 후 결정', imageUrl: '/images/event/event_menu.png' },
    { id: 3, title: '피부 관리 3회권', price: '290,000원', imageUrl: '/images/event/event_menu.png' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Special Events"
          title={<>합리적인 가격으로 만나는<br/>특별한 혜택</>} 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {mockEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <div className="aspect-[4/3] bg-gray-200 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.imageUrl})` }}
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-lg font-semibold text-[var(--color-primary)] mb-8">{event.price}</p>
                <div className="mt-auto">
                  <Button className="w-full">예약하기</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
