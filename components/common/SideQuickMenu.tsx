import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants/site';
import { MessageCircle, MapPin, BookOpen, Camera, CalendarCheck, Clock } from 'lucide-react';

export function SideQuickMenu() {
  const menus = [
    { label: '카톡상담', href: SITE_CONFIG.links.kakao, Icon: MessageCircle },
    { label: '오시는길', href: '/about/location', Icon: MapPin },
    { label: '블로그', href: SITE_CONFIG.links.blog, Icon: BookOpen },
    { label: '인스타그램', href: SITE_CONFIG.links.instagram, Icon: Camera },
    { label: '네이버예약', href: SITE_CONFIG.links.naverReservation, Icon: CalendarCheck },
    { label: '진료시간', href: '/about/hours', Icon: Clock },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-1 bg-white p-2.5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
      {menus.map((menu, i) => {
        const Icon = menu.Icon;
        return (
          <Link 
            key={i} 
            href={menu.href}
            target={menu.href.startsWith('http') ? '_blank' : '_self'}
            rel={menu.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex flex-col items-center justify-center w-[72px] h-[76px] rounded-2xl hover:bg-gray-50 text-[11px] font-bold text-gray-700 text-center transition-all duration-300"
          >
            <div className="w-11 h-11 bg-[var(--color-sub)] rounded-full mb-1.5 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 shadow-sm">
              <Icon size={20} strokeWidth={2.5} />
            </div>
            {menu.label}
          </Link>
        )
      })}
    </div>
  );
}
