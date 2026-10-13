'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useAccessibleOverlay } from './useAccessibleOverlay';
import { User, Calendar, Phone, Check, ArrowRight, ChevronUp } from 'lucide-react';

export function BottomQuickConsultForm() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  useAccessibleOverlay(isOpen, panelRef, () => setIsOpen(false));

  useEffect(() => {
    if (!isOpen || !window.visualViewport) return;
    const viewport = window.visualViewport;
    const panel = panelRef.current;
    if (!panel) return;
    const fitViewport = () => {
      panel.style.maxHeight = `${Math.max(120, viewport.height - 8)}px`;
      panel.style.bottom = `${Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop)}px`;
    };
    fitViewport();
    viewport.addEventListener('resize', fitViewport);
    viewport.addEventListener('scroll', fitViewport);
    return () => {
      viewport.removeEventListener('resize', fitViewport);
      viewport.removeEventListener('scroll', fitViewport);
      panel.style.removeProperty('max-height');
      panel.style.removeProperty('bottom');
    };
  }, [isOpen]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '', // 'M' or 'F'
    phone: '',
    agree: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gender) {
      alert('성별을 선택해 주세요.');
      return;
    }
    alert('상담 신청이 접수되었습니다. (API 연결 예정)');
    setIsOpen(false);
    setFormData({
      name: '',
      age: '',
      gender: '',
      phone: '',
      agree: false,
    });
  };

  return (
    <div ref={panelRef} role={isOpen ? 'dialog' : undefined} aria-modal={isOpen ? true : undefined} aria-label={isOpen ? '빠른 상담 신청' : undefined} tabIndex={-1} className={`fixed bottom-0 left-0 flex max-h-[calc(100dvh-8px)] w-full flex-col ${isOpen ? 'z-[70]' : 'z-50'}`}>
      {/* Toggle Tab */}
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="quick-consult-fields"
        style={!isOpen ? { paddingBottom: 'max(16px, env(safe-area-inset-bottom))' } : undefined}
        className="quick-consult-toggle group w-full shrink-0 bg-gradient-to-r from-[#BEE622] to-[#A2C41D] text-primary-dark py-4 flex flex-row items-center justify-center gap-2.5 cursor-pointer hover:from-[#C7EE2C] hover:to-[#ADC91C] transition-all duration-300 border-t border-white/20 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] relative z-20"
      >
        <span className="whitespace-nowrap text-base font-extrabold tracking-tight">
          {isOpen ? '빠른 상담 신청 닫기' : '빠른 상담 신청하기'}
        </span>
        <ChevronUp
          size={18}
          className={`transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* Expandable Form Content */}
      {isOpen && (
      <div id="quick-consult-fields" className="quick-consult-panel min-h-0 overflow-y-auto overscroll-contain border-t border-white/20 bg-primary-muted/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-15px_40px_rgba(0,0,0,0.2)] backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 pt-6">
          {/* Header Title Section */}
          <div 
            style={{ transitionDelay: '0ms' }}
            className={`flex flex-col items-center mb-6 transition-all duration-500 ease-out transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            <p className="text-white text-[14px] md:text-[15px] font-extrabold tracking-tight text-center max-w-xl">
              간단한 정보만 남겨주시면, 전문 상담원이 신속하게 연락드리겠습니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 xl:flex xl:flex-row xl:gap-5">
              
              {/* Name Input */}
              <div 
                style={{ transitionDelay: '40ms' }}
                className={`relative w-full xl:w-36 group transition-all duration-500 ease-out transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-muted group-focus-within:text-primary-dark transition-colors duration-200 pointer-events-none z-10">
                  <User size={16} />
                </span>
                <input 
                  type="text"
                  aria-label="이름"
                  autoComplete="name"
                  placeholder="이름"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 h-12 bg-white/95 hover:bg-white border border-white/10 focus:border-white rounded-xl text-gray-900 text-base font-bold placeholder-gray-400 focus:shadow-[0_4px_20px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                />
              </div>
              
              {/* Age Input */}
              <div 
                style={{ transitionDelay: '80ms' }}
                className={`relative w-full xl:w-24 group transition-all duration-500 ease-out transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-muted group-focus-within:text-primary-dark transition-colors duration-200 pointer-events-none z-10">
                  <Calendar size={16} />
                </span>
                <input 
                  type="number"
                  aria-label="나이"
                  inputMode="numeric"
                  min={1}
                  max={120}
                  placeholder="나이"
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full pl-10 pr-4 h-12 bg-white/95 hover:bg-white border border-white/10 focus:border-white rounded-xl text-gray-900 text-base font-bold placeholder-gray-400 focus:shadow-[0_4px_20px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>

              {/* Segmented Gender Toggle Tabs (Premium UI Upgrade) */}
              <div 
                style={{ transitionDelay: '120ms' }}
                className={`relative flex items-center justify-between w-full xl:w-40 h-12 bg-white/95 p-1 rounded-xl border border-white/10 shrink-0 overflow-hidden select-none transition-all duration-500 ease-out transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setFormData({...formData, gender: 'M'})}
                  aria-pressed={formData.gender === 'M'}
                  className={`relative z-10 w-1/2 h-full rounded-lg text-sm font-extrabold transition-all duration-300 text-center ${
                    formData.gender === 'M' 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  남성
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, gender: 'F'})}
                  aria-pressed={formData.gender === 'F'}
                  className={`relative z-10 w-1/2 h-full rounded-lg text-sm font-extrabold transition-all duration-300 text-center ${
                    formData.gender === 'F' 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  여성
                </button>

                {/* Sliding Indicator Background */}
                <div 
                  className={`quick-consult-gender-indicator absolute top-1 bottom-1 left-1 rounded-lg bg-primary-muted shadow-sm transition-all duration-300 ease-out pointer-events-none ${
                    formData.gender === 'M' 
                      ? 'w-[calc(50%-4px)] translate-x-0 opacity-100' 
                      : formData.gender === 'F' 
                        ? 'w-[calc(50%-4px)] translate-x-full opacity-100' 
                        : 'w-0 opacity-0'
                  }`}
                />
              </div>

              {/* Contact Info Input */}
              <div 
                style={{ transitionDelay: '160ms' }}
                className={`relative w-full xl:w-56 group transition-all duration-500 ease-out transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-muted group-focus-within:text-primary-dark transition-colors duration-200 pointer-events-none z-10">
                  <Phone size={16} />
                </span>
                <input 
                  type="tel"
                  aria-label="연락처"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="연락처 ('-' 제외)"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-10 pr-4 h-12 bg-white/95 hover:bg-white border border-white/10 focus:border-white rounded-xl text-gray-900 text-base font-bold placeholder-gray-400 focus:shadow-[0_4px_20px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                style={{ transitionDelay: '200ms' }}
                className={`quick-consult-submit group w-full xl:w-44 bg-primary text-primary-dark text-sm font-extrabold h-12 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] transform active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 border border-white/10 shrink-0 transition-all duration-500 ease-out ${
                  isOpen ? 'translate-y-0 opacity-100 hover:-translate-y-0.5' : 'translate-y-3 opacity-0'
                }`}
              >
                <span>상담 신청하기</span>
                <ArrowRight size={16} className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Agreement Checkbox */}
            <div 
              style={{ transitionDelay: '240ms' }}
              className={`flex justify-center mt-3 transition-all duration-500 ease-out transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
            >
              <label className="group flex items-center gap-3 text-white/95 text-[12px] font-bold cursor-pointer select-none hover:text-white transition-colors duration-200">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    required
                    checked={formData.agree}
                    onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                    className="peer sr-only"
                  />
                  <div 
                    className={`peer-focus-visible:ring-2 peer-focus-visible:ring-white peer-focus-visible:ring-offset-2 w-5 h-5 rounded-md border transition-all duration-200 flex items-center justify-center ${
                      formData.agree 
                        ? 'bg-white border-white text-primary-muted shadow-[0_2px_8px_rgba(0,0,0,0.15)]' 
                        : 'bg-white/20 border-white/30 text-transparent hover:bg-white/30'
                    }`}
                  >
                    <Check size={14} strokeWidth={4} className={`transition-transform duration-200 ${formData.agree ? 'scale-100' : 'scale-0'}`} />
                  </div>
                </div>
                <span>개인정보 수집 및 이용방침에 동의합니다.</span>
              </label>
            </div>
          </form>
        </div>
      </div>
      )}
    </div>
  );
}
