'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, User, X, Menu, ChevronDown } from 'lucide-react';
import { MENUS } from '@/lib/constants/menu';
import { SITE_CONFIG } from '@/lib/constants/site';
import { useAccessibleOverlay } from './useAccessibleOverlay';

export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<number | null>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useAccessibleOverlay(isMobileOpen, mobileRef, () => setIsMobileOpen(false));
  useAccessibleOverlay(isSearchOpen, searchRef, () => setIsSearchOpen(false));
  useAccessibleOverlay(isLoginOpen, loginRef, () => setIsLoginOpen(false));

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsMobileOpen(false); };
    const closeOnHistoryChange = () => setIsMobileOpen(false);
    desktop.addEventListener('change', closeOnDesktop);
    window.addEventListener('popstate', closeOnHistoryChange);
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      window.removeEventListener('popstate', closeOnHistoryChange);
    };
  }, []);

  const openMobileMenu = () => {
    const active = MENUS.findIndex((menu) => menu.subMenus.some((sub) => sub.href === pathname));
    setExpandedMenu(active >= 0 ? active : 0);
    setIsMobileOpen(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      // In a real app, this would route to a search page
      alert(`'${searchQuery}'에 대한 검색 결과 페이지로 이동합니다.`);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId === 'admin' && loginPw === 'admin') {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
      alert('관리자님 환영합니다.');
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다. (힌트: admin / admin)');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('로그아웃 되었습니다.');
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo_black.png" 
                alt={SITE_CONFIG.name} 
                width={140} 
                height={45} 
                className="object-contain h-10 w-auto"
                priority
              />
            </Link>
          </div>
          <nav aria-label="주 메뉴" className="hidden gap-5 xl:flex 2xl:gap-8">
            {MENUS.map((menu) => (
              <div key={menu.title} className="group relative">
                <Link href={menu.href} className="text-sm font-medium text-gray-700 hover:text-black">
                  {menu.title}
                </Link>
                {/* Dropdown placeholder with safe hover area */}
                <div className="absolute -left-6 top-full hidden w-48 flex-col pt-2 group-hover:flex group-focus-within:flex">
                  <div className="flex max-h-[calc(100dvh-7rem)] flex-col overflow-y-auto overscroll-contain rounded-md bg-white p-2 shadow-lg border border-gray-100">
                    {menu.subMenus.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        aria-current={pathname === sub.href ? 'page' : undefined}
                        className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 leading-snug break-keep"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            {/* Desktop Actions */}
            <div className="hidden xl:flex items-center gap-3">
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="사이트 검색 열기"
                className="flex h-11 w-11 items-center justify-center text-gray-600 hover:text-black transition-colors"
              >
                <Search size={20} />
              </button>
              
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-900">관리자님</span>
                  <button 
                    onClick={handleLogout}
                    className="text-xs text-gray-500 hover:text-gray-700 underline"
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors"
                >
                  <User size={20} />
                  <span>로그인</span>
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={openMobileMenu}
              aria-label="전체 메뉴 열기"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-site-menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-[#083560] focus-visible:outline-2 focus-visible:outline-offset-2 xl:hidden"
            >
              <Menu size={26} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {isMobileOpen && (
        <div ref={mobileRef} role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" tabIndex={-1} className="fixed inset-0 z-[80] bg-black/45 xl:hidden" onClick={(event) => { if (event.target === event.currentTarget) setIsMobileOpen(false); }}>
          <div id="mobile-site-menu" className="ml-auto flex h-dvh w-full max-w-lg flex-col bg-white shadow-xl">
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 pb-3 pt-[max(12px,env(safe-area-inset-top))]">
              <h2 id="mobile-menu-title" className="text-lg font-bold text-[#083560]">진한의원 전체 메뉴</h2>
              <button type="button" data-autofocus onClick={() => setIsMobileOpen(false)} aria-label="전체 메뉴 닫기" className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 focus-visible:outline-2"><X size={24} /></button>
            </div>
            <nav aria-label="모바일 주 메뉴" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-3">
              <Link href="/" onClick={() => setIsMobileOpen(false)} aria-current={pathname === '/' ? 'page' : undefined} className="mb-2 flex min-h-12 items-center rounded-lg px-3 font-semibold text-[#083560]">홈</Link>
              {MENUS.map((menu, index) => (
                <div key={menu.title} className="border-t border-slate-100">
                  <button type="button" aria-expanded={expandedMenu === index} aria-controls={`mobile-menu-group-${index}`} onClick={() => setExpandedMenu(expandedMenu === index ? null : index)} className="flex min-h-14 w-full items-center justify-between gap-3 py-3 text-left text-base font-bold text-[#083560]">
                    <span>{menu.title}</span><ChevronDown size={20} aria-hidden="true" className={`shrink-0 transition-transform ${expandedMenu === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div id={`mobile-menu-group-${index}`} hidden={expandedMenu !== index} className="pb-3">
                    {menu.subMenus.map((sub) => (
                      <Link key={sub.href} href={sub.href} onClick={() => setIsMobileOpen(false)} aria-current={pathname === sub.href ? 'page' : undefined} className={`flex min-h-12 items-center rounded-lg px-3 py-3 text-[15px] leading-6 break-keep ${pathname === sub.href ? 'bg-[#EAF0F7] font-bold text-[#083560]' : 'text-slate-600 hover:bg-slate-50'}`}>{sub.title}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
            <div className="grid shrink-0 grid-cols-2 gap-2 border-t border-slate-200 px-5 pt-3 pb-[max(16px,env(safe-area-inset-bottom))]">
              <a href="tel:0517140040" className="flex min-h-12 items-center justify-center rounded-lg border border-[#083560] text-sm font-bold text-[#083560]">전화 문의</a>
              <Link href="/reservation" onClick={() => setIsMobileOpen(false)} className="flex min-h-12 items-center justify-center rounded-lg bg-[#083560] text-sm font-bold text-white">비대면 접수</Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay Modal */}
      {isSearchOpen && (
        <div ref={searchRef} role="dialog" aria-modal="true" aria-label="사이트 검색" tabIndex={-1} className="fixed inset-0 z-[80] overflow-y-auto overscroll-contain bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-4 pt-16 sm:pt-24 min-h-full flex flex-col">
            <button 
              onClick={() => setIsSearchOpen(false)}
              aria-label="검색 닫기"
              className="absolute right-6 top-6 p-2 text-gray-500 hover:text-gray-900"
            >
              <X size={32} />
            </button>
            <form onSubmit={handleSearchSubmit} className="relative w-full mt-12">
              <input 
                type="text"
                autoFocus
                data-autofocus
                aria-label="검색어"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="검색어를 입력해주세요."
                className="w-full border-b-2 border-gray-300 bg-transparent py-4 pl-4 pr-16 text-xl sm:text-3xl font-light text-gray-900 placeholder-gray-300 focus:border-[#08325C] focus:outline-none transition-colors"
              />
              <button 
                type="submit"
                aria-label="검색"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
              >
                <Search size={32} />
              </button>
            </form>
            <div className="mt-12 flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="font-bold text-gray-900">추천 검색어</span>
              <button onClick={() => setSearchQuery('다이어트 한약')} className="hover:text-black">#다이어트 한약</button>
              <button onClick={() => setSearchQuery('배사라정')} className="hover:text-black">#배사라정</button>
              <button onClick={() => setSearchQuery('산후조리')} className="hover:text-black">#산후조리</button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div ref={loginRef} role="dialog" aria-modal="true" aria-labelledby="login-title" tabIndex={-1} className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/40 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsLoginOpen(false)}
              aria-label="로그인 닫기"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="text-center mb-8">
              <h2 id="login-title" className="text-2xl font-bold text-gray-900 mb-2">관리자 로그인</h2>
              <p className="text-gray-500 text-sm">관리자 계정(admin)으로 로그인해주세요.</p>
            </div>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  aria-label="아이디"
                  autoComplete="username"
                  placeholder="아이디" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="password" 
                  value={loginPw}
                  onChange={(e) => setLoginPw(e.target.value)}
                  aria-label="비밀번호"
                  autoComplete="current-password"
                  placeholder="비밀번호" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-[#1A1A1A] hover:bg-black text-white rounded-xl font-bold text-lg mt-4 transition-colors"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
