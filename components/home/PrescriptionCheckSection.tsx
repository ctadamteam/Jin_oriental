'use client';

import React, { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { calculateBMI } from '@/lib/utils/bmi';

export function PrescriptionCheckSection() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    gender: 'F',
    age: '',
    height: '',
    weight: '',
  });
  const [result, setResult] = useState<{bmi: number; status: string} | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(formData.weight);
    const h = parseFloat(formData.height);
    if (w && h) {
      setResult(calculateBMI(w, h));
      setStep(2);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[url('/images/recipe/recipe_before.png')] bg-cover bg-left opacity-10" />
      
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          subtitle="Self Check"
          title="나의 비만도 확인하기" 
        />
        
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          {step === 1 ? (
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 flex gap-4">
                  <label className={`flex-1 flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-colors ${formData.gender === 'F' ? 'border-[var(--color-primary)] bg-[var(--color-sub)]' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="F" 
                      className="hidden"
                      checked={formData.gender === 'F'}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    />
                    <span className={`font-bold ${formData.gender === 'F' ? 'text-[var(--color-primary)]' : 'text-gray-500'}`}>여성</span>
                  </label>
                  <label className={`flex-1 flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-colors ${formData.gender === 'M' ? 'border-[var(--color-primary)] bg-[var(--color-sub)]' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="M" 
                      className="hidden"
                      checked={formData.gender === 'M'}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    />
                    <span className={`font-bold ${formData.gender === 'M' ? 'text-[var(--color-primary)]' : 'text-gray-500'}`}>남성</span>
                  </label>
                </div>
                <Input 
                  label="나이 (세)" 
                  type="number" 
                  required 
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
                <div />
                <Input 
                  label="키 (cm)" 
                  type="number" 
                  step="0.1"
                  required 
                  value={formData.height}
                  onChange={(e) => setFormData({...formData, height: e.target.value})}
                />
                <Input 
                  label="몸무게 (kg)" 
                  type="number" 
                  step="0.1"
                  required 
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                />
              </div>
              <Button type="submit" size="lg" className="w-full mt-8">결과 확인하기</Button>
            </form>
          ) : (
            <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center bg-[url('/images/recipe/recipe_after.png')] bg-cover bg-center shadow-inner">
              </div>
              <div>
                <p className="text-gray-500 mb-2">고객님의 BMI 수치는</p>
                <div className="text-4xl font-black text-gray-900 mb-2">{result?.bmi}</div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">[{result?.status}] 입니다.</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl text-left text-sm text-gray-600">
                <p>현재 상태에 맞는 최적의 다이어트 한약을 처방받아보세요. 진한의원은 꼼꼼한 진맥과 상담을 통해 가장 안전하고 효과적인 다이어트 방법을 제안합니다.</p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => setStep(1)}>다시 계산하기</Button>
                <Button>상담 예약하기</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
