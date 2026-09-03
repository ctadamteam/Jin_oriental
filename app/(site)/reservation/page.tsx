'use client';

import React from 'react';
import { InformationSection } from '@/components/home/InformationSection';
import { RemoteDietIntakeForm } from '@/components/reservation/RemoteDietIntakeForm';

const reservationTheme = {
  '--site-primary': '#083560',
  '--site-primary-dark': '#01223D',
  '--site-primary-medium': '#123961',
  '--site-primary-muted': '#476786',
  '--site-sub': '#EAF0F7',
  '--color-primary': '#083560',
  '--color-primary-dark': '#01223D',
  '--color-primary-medium': '#123961',
  '--color-primary-muted': '#476786',
  '--color-sub': '#EAF0F7',
} as React.CSSProperties & Record<`--${string}`, string>;

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC]" style={reservationTheme}>
      <section className="px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-3 text-sm font-bold tracking-[0.16em] text-[#123961]">REMOTE DIET INTAKE</p>
            <h1 className="text-3xl font-bold tracking-[-0.045em] text-[#083560] sm:text-4xl">
              다이어트 한약 비대면 간편 접수
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              내원 없이도 간편하게 접수하고, 진한의원의 꼼꼼한 상담을 받아보세요.
            </p>
          </div>

          <RemoteDietIntakeForm />
        </div>
      </section>

      <InformationSection />
    </main>
  );
}
