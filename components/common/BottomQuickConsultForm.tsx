'use client';

import React, { useState } from 'react';
import { Input } from '../ui/Input';

export function BottomQuickConsultForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    agree: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 접수되었습니다. (API 연결 예정)');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Toggle Tab */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[var(--color-primary)] text-white py-3 flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-95 transition-colors border-t border-white/10"
      >
        {isOpen ? (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            <span className="text-[15px] font-bold mt-1">빠른 상담 신청 닫기</span>
          </>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            <span className="text-[15px] font-bold mt-1">빠른 상담 신청하기</span>
          </>
        )}
      </button>

      {/* Expandable Form Content */}
      <div 
        className={`bg-[var(--color-primary)] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 pt-4">
          <p className="text-center text-white/90 text-sm mb-6">
            간단한 정보를 남겨주시면, 전문 상담원이 빠르게 연락드리겠습니다.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              
              <Input 
                placeholder="이름" 
                required 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full md:w-48 bg-white border-none rounded-xl h-11 text-gray-900"
              />
              
              <Input 
                type="number" 
                placeholder="나이" 
                required
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="w-full md:w-32 bg-white border-none rounded-xl h-11 text-gray-900"
              />

              <div className="flex items-center justify-center gap-6 h-11 text-white text-sm whitespace-nowrap w-full md:w-auto px-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="M" 
                    required
                    className="accent-gray-900 w-4 h-4"
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  /> 남
                </label>
                <div className="w-px h-4 bg-white/30"></div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="F" 
                    required
                    className="accent-gray-900 w-4 h-4"
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  /> 여
                </label>
              </div>

              <Input 
                placeholder="연락처 ('-' 제외)" 
                required 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full md:w-64 bg-white border-none rounded-xl h-11 text-gray-900"
              />

              <button type="submit" className="w-full md:w-48 bg-gray-900 hover:bg-black text-white font-bold h-11 rounded-xl transition-colors shrink-0">
                상담 신청하기
              </button>
            </div>
            
            <div className="flex justify-center mt-4">
              <label className="flex items-center gap-2 text-white/90 text-sm cursor-pointer hover:text-white transition-colors">
                <input 
                  type="checkbox" 
                  required
                  checked={formData.agree}
                  className="accent-gray-900 w-4 h-4"
                  onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                /> 개인정보 수집 및 이용방침에 동의합니다.
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
