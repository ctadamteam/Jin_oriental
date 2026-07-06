import React from 'react';
import { SITE_CONFIG } from '@/lib/constants/site';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{SITE_CONFIG.name}</h2>
            <div className="mt-4 text-sm text-gray-600 leading-relaxed">
              대표원장: 김효진<br />
              사업자등록번호: 617-36-50253<br />
              주소: {SITE_CONFIG.contact.address}
            </div>
          </div>
          <div>
            <h3 className="text-[18pt] font-semibold text-gray-900 tracking-wider">연락처</h3>
            <ul className="mt-4">
              <li className="text-[21px] text-gray-800 font-bold tracking-tight leading-tight">{SITE_CONFIG.contact.phoneMain}</li>
              <li className="text-[21px] text-gray-800 font-bold tracking-tight leading-tight mt-1">{SITE_CONFIG.contact.phoneMobile}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[18pt] font-semibold text-gray-900 tracking-wider">진료시간</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex justify-between"><span>월/화/수/금</span> <span>{SITE_CONFIG.hours.weekdays}</span></li>
              <li className="flex justify-between"><span>목 요 일</span> <span>{SITE_CONFIG.hours.thursday}</span></li>
              <li className="flex justify-between"><span>토 / 공휴일</span> <span>{SITE_CONFIG.hours.weekend}</span></li>
              <li className="flex justify-between"><span>점 심 시 간</span> <span>{SITE_CONFIG.hours.lunch}</span></li>
              <li className="text-primary-medium font-medium mt-2">{SITE_CONFIG.hours.closed}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href={SITE_CONFIG.links.kakao} className="text-gray-400 hover:text-gray-500">카카오톡</Link>
            <Link href={SITE_CONFIG.links.blog} className="text-gray-400 hover:text-gray-500">블로그</Link>
            <Link href={SITE_CONFIG.links.instagram} className="text-gray-400 hover:text-gray-500">인스타그램</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
