import React from 'react';
import { Phone } from 'lucide-react';

export function TopStripBanner() {
  return (
    <div className="top-strip-banner bg-[#083560] font-medium text-white">
      <div className="mx-auto flex min-h-9 max-w-[1440px] flex-wrap content-center items-center gap-x-3 gap-y-0.5 px-4 py-1 text-[10px] sm:h-9 sm:flex-nowrap sm:gap-x-7 sm:px-6 sm:py-0 sm:text-sm lg:px-8">
        <span className="shrink-0">체중보다 몸 상태를 살피는 진한의원</span>
        <div className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap sm:gap-1.5">
          <Phone aria-hidden="true" className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.75} />
          <a
            href="tel:0517140040"
            aria-label="진한의원 전화 051.714.0040"
            className="text-inherit"
          >
            051.714.0040
          </a>
          <span aria-hidden="true" className="text-[#A4B7CC]">|</span>
          <a
            href="tel:01076860041"
            aria-label="진한의원 휴대전화 010.7686.0041"
            className="text-inherit"
          >
            010.7686.0041
          </a>
        </div>
      </div>
    </div>
  );
}
