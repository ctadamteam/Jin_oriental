import React from 'react';
import { Phone } from 'lucide-react';

export function TopStripBanner() {
  return (
    <div className="top-strip-banner bg-white font-medium text-[#08325C]">
      <div className="mx-auto flex h-9 max-w-[1440px] items-center gap-2 whitespace-nowrap px-4 text-[10px] sm:gap-7 sm:px-6 sm:text-sm lg:px-8">
        <span>
          체중보다 몸 상태를 살피는 진한의원
        </span>
        <a
          href="tel:0517140040"
          aria-label="진한의원 전화 051.714.0040"
          className="inline-flex shrink-0 items-center gap-1 text-inherit sm:gap-1.5"
        >
          <Phone aria-hidden="true" className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.75} />
          <span>051.714.0040</span>
        </a>
      </div>
    </div>
  );
}
