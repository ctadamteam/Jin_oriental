import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants/site';
import { FaLocationDot, FaCamera, FaCalendarCheck, FaClock } from 'react-icons/fa6';

const KakaoTalkBubble = ({ size = 24, className = "" }: any) => {
  const scaledSize = typeof size === 'number' ? size * 1.25 : size;
  return (
    <svg width={scaledSize} height={scaledSize} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.864 1.8 5.378 4.545 6.814-.42 1.488-1.42 4.14-1.47 4.31-.055.19.16.27.3.16.115-.094 3.65-2.454 5.16-3.468.47.054.95.084 1.465.084 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
    </svg>
  );
};

const NaverBlogIcon = ({ size = 24, className = "" }: any) => {
  const scaledSize = typeof size === 'number' ? size * 1.15 : size;
  return (
    <svg width={scaledSize} height={scaledSize} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-0.5, 0)">
        <rect x="4" y="3" width="3" height="18" />
        <path fillRule="evenodd" clipRule="evenodd" d="M10.5 7.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
        <rect x="18.5" y="3" width="2.5" height="18" />
      </g>
    </svg>
  );
};

export function SideQuickMenu() {
  const menus = [
    { label: '카톡상담', href: SITE_CONFIG.links.kakao, Icon: KakaoTalkBubble },
    { label: '오시는길', href: '/about/location', Icon: FaLocationDot },
    { label: '블로그', href: SITE_CONFIG.links.blog, Icon: NaverBlogIcon },
    { label: '인스타그램', href: SITE_CONFIG.links.instagram, Icon: FaCamera },
    { label: '네이버예약', href: SITE_CONFIG.links.naverReservation, Icon: FaCalendarCheck },
    { label: '진료시간', href: '/about/hours', Icon: FaClock },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col bg-white border border-gray-200 shadow-[0_8px_35px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden divide-y divide-gray-100">
      {menus.map((menu, i) => {
        const Icon = menu.Icon;
        return (
          <Link 
            key={i} 
            href={menu.href}
            target={menu.href.startsWith('http') ? '_blank' : '_self'}
            rel={menu.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex flex-col items-center justify-center w-[86px] h-[83px] hover:bg-gray-50 text-[11px] font-bold text-gray-800 text-center transition-colors duration-300"
          >
            <div className="mb-1.5 text-gray-800 group-hover:text-[var(--color-primary)] transition-colors duration-300">
              <Icon size={27} />
            </div>
            {menu.label}
          </Link>
        )
      })}
    </div>
  );
}
