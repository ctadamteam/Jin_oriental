import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants/site';

export function SideQuickMenu() {
  const menus = [
    { label: '카톡상담', href: SITE_CONFIG.links.kakao },
    { label: '오시는길', href: '/about/location' },
    { label: '블로그', href: SITE_CONFIG.links.blog },
    { label: '인스타그램', href: SITE_CONFIG.links.instagram },
    { label: '네이버예약', href: SITE_CONFIG.links.naverReservation },
    { label: '진료시간', href: '/about/hours' },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2 bg-white p-3 rounded-2xl shadow-xl border border-gray-100">
      {menus.map((menu, i) => (
        <Link 
          key={i} 
          href={menu.href}
          className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-gray-50 text-xs font-medium text-gray-700 text-center transition-colors"
        >
          {/* Icon placeholder */}
          <div className="w-6 h-6 bg-gray-200 rounded-full mb-1"></div>
          {menu.label}
        </Link>
      ))}
    </div>
  );
}
