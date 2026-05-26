import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import Link from 'next/link';

export function MedicineIntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Signature Medicine"
          title={<>체질별 맞춤 처방,<br/>진 다이어트 한약</>} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Medicine 1 */}
          <Link href="/diet-medicine/slim" className="group block bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow relative">
            <div className="aspect-[4/3] bg-[url('/images/medicine/med_01.png')] bg-cover bg-center mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">슬림환 / 습담탕</h3>
              <p className="text-gray-200">체지방 분해와 식욕 억제를 돕는 맞춤 처방</p>
            </div>
          </Link>
          
          {/* Medicine 2 */}
          <Link href="/diet-medicine/zero" className="group block bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow relative">
            <div className="aspect-[4/3] bg-[url('/images/medicine/med_02.png')] bg-cover bg-center mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">붓기제로 / 배사라정</h3>
              <p className="text-gray-200">부종 감소와 노폐물 배출에 탁월한 효과</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
