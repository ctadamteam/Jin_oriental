'use client';

import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../ui/Button';
import { calculateBMI } from '@/lib/utils/bmi';
import { ArrowRight, RotateCcw, Activity } from 'lucide-react';

export function PrescriptionCheckSection() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    gender: 'F',
    age: 30,
    height: 160,
    weight: 55,
  });
  const [result, setResult] = useState<{bmi: number; status: string} | null>(null);
  const [progress, setProgress] = useState(0);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.weight && formData.height) {
      setResult(calculateBMI(formData.weight, formData.height));
      setStep(2);
    }
  };

  // Animate progress ring on result
  useEffect(() => {
    if (step === 2 && result) {
      const timer = setTimeout(() => {
        // Calculate percentage for dashoffset (max 100)
        // BMI range for visual: 15 to 35. 
        const normalized = Math.min(Math.max(result.bmi - 15, 0), 20); 
        const percent = (normalized / 20) * 100;
        setProgress(percent);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [step, result]);

  const getStatusColor = (status: string) => {
    switch(status) {
      case '저체중': return 'text-blue-500';
      case '정상': return 'text-emerald-500';
      case '과체중': return 'text-orange-500';
      case '비만': return 'text-red-500';
      default: return 'text-[var(--color-primary)]';
    }
  };

  const getStatusStroke = (status: string) => {
    switch(status) {
      case '저체중': return '#3b82f6';
      case '정상': return '#10b981';
      case '과체중': return '#f97316';
      case '비만': return '#ef4444';
      default: return '#1A1A1A';
    }
  };

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[url('/images/recipe/recipe_before.png')] bg-cover bg-left opacity-5" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[var(--color-primary)] font-bold tracking-widest text-sm mb-2 block uppercase">Self Check</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">나의 비만도 1분 확인</h2>
          <p className="text-gray-500 mt-4 text-sm md:text-base">현재 나의 상태를 진단하고 가장 적합한 한약 처방을 확인해보세요.</p>
        </div>
        
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-14 transition-all duration-500 relative overflow-hidden">
          
          {step === 1 ? (
            <form onSubmit={handleCalculate} className="space-y-10 animate-in fade-in zoom-in-95 duration-500">
              {/* 성별 선택 */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">성별을 선택해주세요</label>
                <div className="flex gap-4">
                  <label className={`relative flex-1 flex items-center justify-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${formData.gender === 'F' ? 'border-[var(--color-primary)] bg-[#F8F9FF]' : 'border-gray-100 hover:border-gray-200'}`}>
                    <input 
                      type="radio" name="gender" value="F" className="hidden"
                      checked={formData.gender === 'F'}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    />
                    <div className="text-center">
                      <span className="text-3xl block mb-2">👩🏻</span>
                      <span className={`font-bold text-lg ${formData.gender === 'F' ? 'text-[var(--color-primary)]' : 'text-gray-400'}`}>여성</span>
                    </div>
                  </label>
                  <label className={`relative flex-1 flex items-center justify-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${formData.gender === 'M' ? 'border-[var(--color-primary)] bg-[#F8F9FF]' : 'border-gray-100 hover:border-gray-200'}`}>
                    <input 
                      type="radio" name="gender" value="M" className="hidden"
                      checked={formData.gender === 'M'}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    />
                    <div className="text-center">
                      <span className="text-3xl block mb-2">👨🏻</span>
                      <span className={`font-bold text-lg ${formData.gender === 'M' ? 'text-[var(--color-primary)]' : 'text-gray-400'}`}>남성</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* 신장 슬라이더 */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-sm font-bold text-gray-700">신장 (cm)</label>
                  <div className="text-3xl font-black text-[var(--color-primary)]">{formData.height}<span className="text-sm text-gray-400 font-medium ml-1">cm</span></div>
                </div>
                <input 
                  type="range" min="130" max="200" step="1"
                  value={formData.height}
                  onChange={(e) => setFormData({...formData, height: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
              </div>

              {/* 체중 슬라이더 */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-sm font-bold text-gray-700">체중 (kg)</label>
                  <div className="text-3xl font-black text-[var(--color-primary)]">{formData.weight}<span className="text-sm text-gray-400 font-medium ml-1">kg</span></div>
                </div>
                <input 
                  type="range" min="30" max="150" step="1"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
              </div>

              <button type="submit" className="group w-full py-5 bg-[#1A1A1A] hover:bg-black text-white rounded-2xl font-bold text-lg mt-8 flex items-center justify-center gap-2 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                결과 분석하기
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                {/* Circular Progress Background */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 140 140">
                  <circle cx="70" cy="70" r={radius} fill="transparent" stroke="#F3F4F6" strokeWidth="8" />
                  <circle 
                    cx="70" cy="70" r={radius} fill="transparent" 
                    stroke={getStatusStroke(result?.status || '')} 
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="relative z-10 flex flex-col items-center">
                  <Activity className="text-gray-300 mb-1" size={24} />
                  <div className="text-5xl font-black text-gray-900 tracking-tighter">{result?.bmi}</div>
                  <div className="text-sm text-gray-400 font-medium mt-1">BMI 지수</div>
                </div>
              </div>

              <div>
                <p className="text-gray-500 mb-3 font-medium text-lg">고객님의 진단 결과는</p>
                <div className="text-3xl font-black text-gray-900">
                  현재 <span className={`${getStatusColor(result?.status || '')}`}>{result?.status}</span> 상태입니다.
                </div>
              </div>

              <div className="bg-[#F8F9FF] p-8 rounded-3xl text-left border border-blue-50/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-xl">
                    🌿
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">원장님 맞춤 코멘트</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {result?.status === '비만' ? '적극적인 체중 감량이 필요한 시기입니다. 식욕 억제와 체지방 분해에 탁월한 다이어트 한약 처방을 통해 건강하게 목표 체중에 도달할 수 있도록 돕겠습니다.' : 
                       result?.status === '과체중' ? '미리 관리하면 훨씬 빠르고 쉽게 감량할 수 있습니다. 무리하지 않고 일상생활에 활력을 주는 슬림환과 함께 가벼운 다이어트를 시작해보세요.' : 
                       result?.status === '정상' ? '현재 매우 훌륭한 상태를 유지하고 계십니다! 요요를 방지하고 건강한 밸런스를 유지하기 위해 가벼운 해독 프로그램이나 붓기 관리만 병행하셔도 좋습니다.' :
                       '체지방보다 근육량과 영양 밸런스에 집중해야 할 때입니다. 건강한 증량과 체력 강화를 위한 한약 처방이 필요할 수 있습니다.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button 
                  onClick={() => setStep(1)}
                  className="px-8 py-4 bg-white border-2 border-gray-100 text-gray-600 hover:border-gray-300 hover:text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <RotateCcw size={18} />
                  다시 계산하기
                </button>
                <button className="px-8 py-4 bg-[var(--color-primary)] text-white hover:bg-blue-600 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                  1:1 맞춤 상담 예약하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

