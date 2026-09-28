'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ASSET_PATH = '/images/custom-diet/chronic-inflammation';

interface CheckItem {
  id: number;
  text: string;
  img: string;
  alt: string;
  width: number;
  height: number;
  row: 1 | 2;
}

const CHECK_ITEMS: CheckItem[] = [
  // 1열 (3개 카드)
  {
    id: 1,
    text: '뱃살이\n특히 내장지방이\n많이 늘었다.',
    img: `${ASSET_PATH}/check-1-visceral-fat.png`,
    alt: '내장지방 및 뱃살 자가진단',
    width: 379,
    height: 313,
    row: 1,
  },
  {
    id: 2,
    text: '얼굴·손·발이 자주 붓는다.',
    img: `${ASSET_PATH}/check-2-edema.png`,
    alt: '얼굴 손 발 부종 자가진단',
    width: 378,
    height: 313,
    row: 1,
  },
  {
    id: 3,
    text: '자꾸 피곤하고\n무기력하고 졸린다.',
    img: `${ASSET_PATH}/check-3-fatigue.png`,
    alt: '만성 피로 무기력 자가진단',
    width: 379,
    height: 355,
    row: 1,
  },
  // 2열 (4개 카드)
  {
    id: 4,
    text: '야식·과식 군것질이\n당긴다.',
    img: `${ASSET_PATH}/check-4-craving.png`,
    alt: '야식 과식 군것질 자가진단',
    width: 325,
    height: 361,
    row: 2,
  },
  {
    id: 5,
    text: '변비, 복부팽만감\n장이 안좋다.',
    img: `${ASSET_PATH}/check-5-gut.png`,
    alt: '변비 복부팽만 장 건강 자가진단',
    width: 326,
    height: 373,
    row: 2,
  },
  {
    id: 6,
    text: '건강검진에서 혈압,\n고지혈증, 혈당, 허리\n둘레, 체중관리가 필요\n하다고 진단받았다.',
    img: `${ASSET_PATH}/check-6-screening.png`,
    alt: '건강검진 대사증후군 관리 권고 자가진단',
    width: 326,
    height: 328,
    row: 2,
  },
  {
    id: 7,
    text: '피부트러블이\n잦고 가렵다.',
    img: `${ASSET_PATH}/check-7-skin.png`,
    alt: '피부 트러블 가려움증 자가진단',
    width: 325,
    height: 300,
    row: 2,
  },
];

export default function SelfTestGrid() {
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set());

  const toggleCheck = (id: number) => {
    setCheckedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="ci-test__grid">
      {/* 1열 (3개 카드) */}
      <div className="ci-test__row-1">
        {CHECK_ITEMS.filter(item => item.row === 1).map(item => {
          const isChecked = checkedIds.has(item.id);
          return (
            <div
              key={item.id}
              className={`ci-card ci-card--row1 ${isChecked ? 'is-checked' : ''}`}
              onClick={() => toggleCheck(item.id)}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleCheck(item.id);
                }
              }}
            >
              <div className="ci-card__top">
                <div className="ci-card__checkbox">
                  <svg
                    className="ci-card__checkbox-icon"
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
                <p className="ci-card__text">{item.text}</p>
              </div>
              <div className="ci-card__img-wrap">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  unoptimized
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 2열 (4개 카드) */}
      <div className="ci-test__row-2">
        {CHECK_ITEMS.filter(item => item.row === 2).map(item => {
          const isChecked = checkedIds.has(item.id);
          return (
            <div
              key={item.id}
              className={`ci-card ci-card--row2 ${isChecked ? 'is-checked' : ''}`}
              onClick={() => toggleCheck(item.id)}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleCheck(item.id);
                }
              }}
            >
              <div className="ci-card__top">
                <div className="ci-card__checkbox">
                  <svg
                    className="ci-card__checkbox-icon"
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
                <p
                  className={`ci-card__text ${item.id === 6 ? 'ci-card__text--screening' : ''}`}
                >
                  {item.text}
                </p>
              </div>
              <div className="ci-card__img-wrap">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  unoptimized
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
