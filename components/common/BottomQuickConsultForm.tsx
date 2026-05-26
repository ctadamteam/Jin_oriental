'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Checkbox } from '../ui/Checkbox';

export function BottomQuickConsultForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    agree: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Supabase API Route 연결
    alert('상담 신청이 접수되었습니다. (API 연결 예정)');
  };

  return (
    <section className="bg-[var(--color-sub)] py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">빠른 상담 신청</h2>
          <p className="mt-2 text-gray-600">간단한 정보를 남겨주시면, 전문 상담원이 빠르게 연락드리겠습니다.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Input 
              placeholder="이름" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <Input 
              type="number" 
              placeholder="나이" 
              required
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
            />
            <div className="flex gap-2 items-center justify-center border border-gray-300 rounded-md px-3 h-11 bg-white">
              <label className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
                <input 
                  type="radio" 
                  name="gender" 
                  value="M" 
                  className="text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                /> 남
              </label>
              <span className="text-gray-300">|</span>
              <label className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
                <input 
                  type="radio" 
                  name="gender" 
                  value="F" 
                  className="text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                /> 여
              </label>
            </div>
            <Input 
              type="tel" 
              placeholder="연락처 ('-' 제외)" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Checkbox 
              label="개인정보 수집 및 이용방침에 동의합니다." 
              required
              checked={formData.agree}
              onChange={(e) => setFormData({...formData, agree: e.target.checked})}
            />
            <Button type="submit" className="w-full sm:w-auto px-12">
              상담 신청하기
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
