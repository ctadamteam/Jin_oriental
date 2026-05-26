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
            <p className="mt-4 text-sm text-gray-600">{SITE_CONFIG.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">연락처</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">전화: {SITE_CONFIG.contact.phone}</li>
              <li className="text-sm text-gray-600">주소: {SITE_CONFIG.contact.address}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">진료시간</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">평일: {SITE_CONFIG.hours.weekday}</li>
              <li className="text-sm text-gray-600">토요일: {SITE_CONFIG.hours.saturday}</li>
              <li className="text-sm text-gray-600">점심시간: {SITE_CONFIG.hours.lunch}</li>
              <li className="text-sm text-red-500 font-medium">{SITE_CONFIG.hours.closed}</li>
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
