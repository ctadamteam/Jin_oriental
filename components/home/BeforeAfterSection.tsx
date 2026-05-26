import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Slider } from '../ui/Slider';

export function BeforeAfterSection() {
  const cases = [
    { id: 1, tag: '3개월 감량', desc: '-12kg 감량 성공' },
    { id: 2, tag: '부분 비만', desc: '복부 둘레 -10cm' },
    { id: 3, tag: '산후 비만', desc: '출산 전 체중 회복' },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Before & After"
          title={<span className="text-white">눈으로 확인하는 확실한 변화</span>} 
        />
        <p className="text-center text-gray-400 mt-2 mb-12 text-sm">
          * 개인에 따라 결과가 다를 수 있습니다.
        </p>
        <Slider>
          {cases.map((item) => (
            <div key={item.id} className="w-80 md:w-96 shrink-0 bg-gray-800 rounded-2xl p-6">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 aspect-square bg-gray-700 rounded-xl flex items-center justify-center text-gray-500">
                  Before
                </div>
                <div className="flex-1 aspect-square bg-gray-600 rounded-xl flex items-center justify-center text-gray-300">
                  After
                </div>
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)] text-white mb-3">
                  {item.tag}
                </span>
                <p className="text-xl font-bold">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
