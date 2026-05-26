import React from 'react';
import { Button } from '../ui/Button';

export function MainHeroSection() {
  return (
    <section className="relative h-[840px] w-full bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/main/placeholder.jpg')] bg-cover bg-center opacity-50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
          건강한 아름다움,<br />진한의원이 함께합니다
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          개인별 체질에 맞춘 한방 다이어트와 근본적인 원인 치료를 통해 
          요요 없는 건강한 체중 감량을 도와드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto px-10">상담 신청</Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto px-10">이벤트 보기</Button>
        </div>
      </div>
    </section>
  );
}
