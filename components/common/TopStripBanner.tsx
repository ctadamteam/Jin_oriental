import React from 'react';
import Link from 'next/link';

export function TopStripBanner() {
  return (
    <div className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto relative flex items-center justify-start px-4 sm:px-6 lg:px-8 py-2 max-w-[1440px] text-sm">
        <Link href="/events" className="hover:underline">
          체중보다 몸 상태를 먼저 살피는
        </Link>
        

      </div>
    </div>
  );
}
