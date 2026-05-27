'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const mockEvents = [
  { id: 1, title: "배사라정", price: "150,000원" },
  { id: 2, title: "물광 2CC", price: "80,000원" },
  { id: 3, title: "엑소좀 1회", price: "150,000원" },
  { id: 4, title: "자궁미인 90정(1통)", price: "80,000원" },
  { id: 5, title: "산후조리 100일 프로그램", price: "1,080,000원" },
  { id: 6, title: "소장해독 프로그램", price: "120,000원" },
];

function ReservationForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<typeof mockEvents>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const itemsParam = searchParams.get('items');
    if (itemsParam) {
      const ids = itemsParam.split(',').map(Number);
      const items = mockEvents.filter(e => ids.includes(e.id));
      setSelectedItems(items);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">예약이 완료되었습니다!</h3>
        <p className="text-gray-600 mb-8">
          빠른 시일 내에 기재해주신 연락처로 예약 확정 안내를 드리겠습니다.
        </p>
        <Button onClick={() => router.push('/')}>메인으로 돌아가기</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
      <div className="mb-10">
        <h3 className="text-lg font-bold text-gray-900 mb-4">선택하신 시술 항목</h3>
        {selectedItems.length > 0 ? (
          <ul className="space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-100">
            {selectedItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center text-[15px]">
                <span className="font-medium text-gray-800">{item.title}</span>
                <span className="font-bold text-[var(--color-primary)]">{item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="bg-gray-50 p-6 rounded-xl text-center text-gray-500 text-[15px]">
            선택된 항목이 없습니다. 단일 예약으로 진행합니다.
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">이름</label>
          <Input type="text" required placeholder="홍길동" className="w-full h-12" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
          <Input type="tel" required placeholder="010-0000-0000" className="w-full h-12" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">예약 희망일</label>
          <Input type="date" required className="w-full h-12" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">문의사항 (선택)</label>
          <textarea 
            className="w-full rounded-xl border-gray-200 text-gray-900 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all resize-none p-4"
            rows={4}
            placeholder="기타 남기실 말씀을 적어주세요."
          />
        </div>
        <div className="pt-4">
          <Button type="submit" className="w-full h-14 text-lg font-bold">
            이 내용으로 예약 신청하기
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="RESERVATION"
          title={<>빠르고 간편한<br/>온라인 예약</>} 
        />
        <Suspense fallback={<div className="text-center py-20 text-gray-500">예약 정보를 불러오는 중입니다...</div>}>
          <ReservationForm />
        </Suspense>
      </div>
    </main>
  );
}
