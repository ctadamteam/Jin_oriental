import React from 'react';
import Link from 'next/link';

export function TopStripBanner() {
  return (
    <div className="bg-[var(--color-primary)] px-4 py-2 text-center text-sm text-white">
      <Link href="/events" className="hover:underline">
        진한의원 첫 방문 고객을 위한 특별한 혜택 확인하기 →
      </Link>
    </div>
  );
}
