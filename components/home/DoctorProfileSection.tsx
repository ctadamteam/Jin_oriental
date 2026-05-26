import React from 'react';
import { SectionTitle } from '../common/SectionTitle';

export function DoctorProfileSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Medical Staff"
          title={<>수만 건의 임상 경험을 가진<br/>대표원장 직접 진료</>} 
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5] relative">
            <div className="absolute inset-0 bg-[url('/images/profile/profile01.png')] bg-cover bg-center" />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">원장 <span className="text-[var(--color-primary)]">홍길동</span></h3>
              <p className="text-lg text-gray-600">환자의 마음을 먼저 헤아립니다.</p>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></div>
                한의학 박사
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></div>
                경희대학교 한의과대학 졸업
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></div>
                대한한방비만학회 정회원
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
