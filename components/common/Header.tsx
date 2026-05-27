'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, User, X } from 'lucide-react';
import { MENUS } from '@/lib/constants/menu';
import { SITE_CONFIG } from '@/lib/constants/site';

export function Header() {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          <nav className="hidden space-x-8 lg:flex">
            {MENUS.map((menu) => (
              <div key={menu.title} className="group relative">
                <Link href={menu.href} className="text-sm font-medium text-gray-700 hover:text-[var(--color-primary)]">
                  {menu.title}
                </Link>
                {/* Dropdown placeholder with safe hover area */}
                <div className="absolute left-0 top-full hidden w-48 flex-col pt-2 group-hover:flex">
                  <div className="flex flex-col rounded-md bg-white p-2 shadow-lg border border-gray-100">
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
              </div>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 hover:text-[var(--color-primary)] transition-colors"
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
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                >
                  <User size={20} />
                  <span>로그인</span>
                </button>
              )}
            </div>

            {/* Mobile menu icon */}
            <button className="lg:hidden p-2 text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="mx-auto max-w-4xl px-4 pt-24 h-full flex flex-col">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-6 top-6 p-2 text-gray-500 hover:text-gray-900"
            >
              <X size={32} />
            </button>
            <form onSubmit={handleSearchSubmit} className="relative w-full mt-12">
              <input 
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="검색어를 입력해주세요."
                className="w-full border-b-2 border-gray-300 bg-transparent py-4 pl-4 pr-16 text-3xl font-light text-gray-900 placeholder-gray-300 focus:border-[var(--color-primary)] focus:outline-none transition-colors"
              />
              <button 
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-primary)] transition-colors"
              >
                <Search size={32} />
              </button>
            </form>
            <div className="mt-12 flex gap-4 text-sm text-gray-500">
              <span className="font-bold text-gray-900">추천 검색어</span>
              <button onClick={() => setSearchQuery('다이어트 한약')} className="hover:text-[var(--color-primary)]">#다이어트 한약</button>
              <button onClick={() => setSearchQuery('배사라정')} className="hover:text-[var(--color-primary)]">#배사라정</button>
              <button onClick={() => setSearchQuery('산후조리')} className="hover:text-[var(--color-primary)]">#산후조리</button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">관리자 로그인</h2>
              <p className="text-gray-500 text-sm">관리자 계정(admin)으로 로그인해주세요.</p>
            </div>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
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
