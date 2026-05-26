import React from 'react';
import Link from 'next/link';
import { MENUS } from '@/lib/constants/menu';
import { SITE_CONFIG } from '@/lib/constants/site';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center">
          <Link href="/" className="text-2xl font-bold text-[var(--color-primary)]">
            {SITE_CONFIG.name}
          </Link>
        </div>
        <nav className="hidden space-x-8 lg:flex">
          {MENUS.map((menu) => (
            <div key={menu.title} className="group relative">
              <Link href={menu.href} className="text-sm font-medium text-gray-700 hover:text-[var(--color-primary)]">
                {menu.title}
              </Link>
              {/* Dropdown placeholder */}
              <div className="absolute left-0 top-full mt-2 hidden w-48 flex-col rounded-md bg-white p-2 shadow-lg group-hover:flex border border-gray-100">
                {menu.subMenus.map((sub) => (
                  <Link
                    key={sub.title}
                    href={sub.href}
                    className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[var(--color-primary)]"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center">
          <button className="lg:hidden p-2 text-gray-600">
            {/* Mobile menu icon */}
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
