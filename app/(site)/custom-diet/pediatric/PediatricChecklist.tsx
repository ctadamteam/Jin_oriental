'use client';

import React, { useState } from 'react';

const CHECKLIST_ITEMS = [
  '아이가 배가 부를 때까지 먹는다.',
  '평소에 군것질을 많이하고 한꺼번에 많이 먹는다.',
  '배가 불러도 음식이 있으면 또 먹는다.',
  '체력이 많이 약하고 집에서 노는 것을 더 좋아한다.',
  '다른 사람보다 먹는 속도가 빠르다.',
  '밀가루 음식이나 패스트푸드 음식을 좋아한다.',
  '항상 집에 간식을 상비해둔다.',
  '아이의 식사시간이 일정하지 않다.',
  '야식이나 밤참을 자주 먹는 편이다.',
];

export default function PediatricChecklist() {
  const [checkedIndices, setCheckedIndices] = useState<Set<number>>(new Set());

  const toggleIndex = (idx: number) => {
    setCheckedIndices(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className="ped-checklist-card">
      <div className="ped-checklist-items" role="group" aria-label="소아비만 증상 자가 체크리스트">
        {CHECKLIST_ITEMS.map((text, idx) => {
          const isChecked = checkedIndices.has(idx);
          return (
            <div
              key={idx}
              className={`ped-check-row ${isChecked ? 'is-checked' : ''}`}
              onClick={() => toggleIndex(idx)}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleIndex(idx);
                }
              }}
            >
              <div className="ped-check-box">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7.5L6.5 12L16 2"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="ped-check-text">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
