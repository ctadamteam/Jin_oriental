import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import './tok-page.css';
import '../../_shared/detail-page-scale.css';

export const metadata: Metadata = {
  title: '슬림톡ㆍ삭뺀다정ㆍ블랙정 | 진한의원',
  description: '100% 순수 한약 농축 원액을 사용한 고농축 다이어트 한약. 슬림톡, 삭뺀다정, 블랙정(빼빼정) 상세 안내.',
};

const ASSET_PATH = '/images/diet-medicine/tok';

interface ProductData {
  id: string;
  name: string;
  displayTitle: string;
  bgImage: string;
  bgWidth: number;
  bgHeight: number;
  headlineLines: Array<{ text: string; lineWidth: number }>;
  subline: string;
  dosage: {
    frequency: string;
    amount: string;
    amountIcon: string;
    amountIconWidth: number;
    amountIconHeight: number;
  };
  pointTitle: string;
  points: string[];
}

const PRODUCTS: ProductData[] = [
  {
    id: 'slimtok',
    name: '슬림톡',
    displayTitle: '슬림톡',
    bgImage: `${ASSET_PATH}/slimtok-bg.png`,
    bgWidth: 1440,
    bgHeight: 1342,
    headlineLines: [
      { text: '가볍고 편하게', lineWidth: 344 },
      { text: '시작하는 체중 관리', lineWidth: 483 },
    ],
    subline: '먹기 편한 고농축 다이어트 캡슐로,\n식욕억제 강도 조절이 가능하고 흡수와 효과가 빠릅니다.',
    dosage: {
      frequency: '1일 1~3회',
      amount: '1포 3정',
      amountIcon: `${ASSET_PATH}/node-icon-capsule.png`,
      amountIconWidth: 75,
      amountIconHeight: 73,
    },
    pointTitle: '슬림톡 POINT',
    points: [
      '100% 순수 한약 농축 원액 사용',
      '먹기 편한 캡슐 한약으로 하루 3번 공복에 섭취',
      '식욕억제, 체지방연소, 체중감량, 신진대사 활성화',
      '배고픔을 참지 않아도 되고, 운동안해도 빠른 감량 효과',
      '2주 단위로 강도, 단계 조절 가능',
      '다이어트환(슬림환), 다이어트알약(삭뺀다정, 블랙정)에 비해 흡수, 효과가 빠름',
    ],
  },
  {
    id: 'sakppaenda',
    name: '삭뺀다정',
    displayTitle: '삭뺀다정',
    bgImage: `${ASSET_PATH}/sakppaenda-bg.png`,
    bgWidth: 1441,
    bgHeight: 1534,
    headlineLines: [
      { text: '필요할 때 더해주는', lineWidth: 344 },
      { text: '체중 관리', lineWidth: 483 },
    ],
    subline: '코팅된 타블렛 형태의 고농축 다이어트 정으로,\n필요에 따라 단독 또는 추가 복용이 가능합니다.',
    dosage: {
      frequency: '1일 1~3회',
      amount: '2~4정',
      amountIcon: `${ASSET_PATH}/node-icon-tablet.png`,
      amountIconWidth: 95,
      amountIconHeight: 51,
    },
    pointTitle: '삭뺀다정 POINT',
    points: [
      '100% 순수 한약 농축 원액 사용',
      '코팅된 타블렛 형태로 한약 맛과 냄새 거의 없음',
      '기존 슬림환·습담탕 복용 시 식욕조절이 부족할 때 추가 복용 가능',
      '단독 또는 추가 복용이 가능하며, 필요에 따라 조절 복용',
      '식욕조절·체지방 연소를 통한 체중감량',
      '식약처 인증, HGMP 의약품용 규격 한약재 사용',
      '임상 19년차 한방 내과 전문의가 직접 처방',
      '장기간 복용 시에도 간·신장 수치 걱정 거의 없는 안전성이 검증된 한약',
    ],
  },
  {
    id: 'blackjeong',
    name: '블랙정',
    displayTitle: '블랙정(빼빼정)',
    bgImage: `${ASSET_PATH}/blackjeong-bg.png`,
    bgWidth: 1440,
    bgHeight: 1506,
    headlineLines: [
      { text: '강도 높게 집중하는', lineWidth: 488 },
      { text: '체중 관리', lineWidth: 245 },
    ],
    subline: '100% 순수 한약 농축 원액을 사용한 프리미엄 고농축 다이어트정으로,\n기존 다이어트 약에 내성이 생긴 분을 위한 제품입니다.',
    dosage: {
      frequency: '1일 1~3회',
      amount: '1포 4정',
      amountIcon: `${ASSET_PATH}/node-icon-pouch.png`,
      amountIconWidth: 63,
      amountIconHeight: 71,
    },
    pointTitle: '블랙정(빼빼정) POINT',
    points: [
      '삭뺀다정보다 높은 강도',
      '프리미엄 고농축 다이어트정',
      '100% 순수 한약 농축 원액 사용',
      '기존의 다이어트 약에 내성이 이미 생기신 분',
      '1포 4알씩, 1일 1~3회 복용',
    ],
  },
];

export default function TokDietMedicinePage() {
  return (
    <div className="tok-page">
      <div className="tok-page__content">
        {/* ==============================================================
            [상단 서브 헤딩]
            Figma 441:84 & 441:83 (NanumMyeongjo 400, 40px, Line 11 1px)
        ============================================================== */}
        <header className="tok-page__heading">
          <h1>슬림톡ㆍ삭뺀다정ㆍ블랙정</h1>
          <div className="tok-page__divider" />
        </header>

        {/* ==============================================================
            [섹션 0] 메인 히어로 배너 (Figma 441:7 - 1440px x 588px)
            ChatGPT Image 888x588 + #083560 패널 588x588
        ============================================================== */}
        <section className="tok-hero" aria-label="슬림톡 삭뺀다정 블랙정 메인 배너">
          <div className="tok-hero__photo">
            <Image
              src={`${ASSET_PATH}/hero-products.png`}
              alt="슬림톡, 삭뺀다정, 블랙정 제품"
              width={888}
              height={588}
              priority
              unoptimized
            />
          </div>
          <div className="tok-hero__panel">
            <p className="tok-hero__sub">고농축 다이어트 한약</p>
            <h2 className="tok-hero__title">
              {'슬림톡\n삭뺀다정\n블랙정'}
            </h2>
          </div>
        </section>

        {/* ==============================================================
            [제품 상세 섹션 1~3]
            슬림톡 (441:14) / 삭뺀다정 (445:111) / 블랙정 (445:142)
        ============================================================== */}
        {PRODUCTS.map((prod) => (
          <article key={prod.id} className="tok-product" aria-label={`${prod.name} 상세`}>
            {/* 상단 비주얼 영역 (1440px x 1342px) */}
            <div className="tok-product__visual">
              <Image
                className="tok-product__bg"
                src={prod.bgImage}
                alt=""
                width={prod.bgWidth}
                height={prod.bgHeight}
                priority={prod.id === 'slimtok'}
                unoptimized
              />
              <div className="tok-product__gradient" aria-hidden="true" />

              <div className="tok-product__header">
                <h3 className="tok-product__headline">
                  {prod.headlineLines.map((line, idx) => (
                    <span key={idx} className="tok-product__headline-line">
                      <span>{line.text}</span>
                      <span
                        className="tok-product__underline"
                        style={{ width: `${line.lineWidth}px` }}
                        aria-hidden="true"
                      />
                    </span>
                  ))}
                </h3>
                <h4 className="tok-product__title">{prod.displayTitle}</h4>
                <p className="tok-product__subline">{prod.subline}</p>
              </div>

              {/* 좌측 하단 복용 안내 (Group 1: 1112px 위치) */}
              <div className="tok-product__dosage" aria-label="복용 방법">
                <div className="tok-product__dosage-row">
                  <div className="tok-product__dosage-icon-wrap">
                    <Image
                      src={`${ASSET_PATH}/node-icon-clock.png`}
                      alt="복용 횟수"
                      width={65}
                      height={64}
                      unoptimized
                    />
                  </div>
                  <span className="tok-product__dosage-text">{prod.dosage.frequency}</span>
                </div>
                <div className="tok-product__dosage-row">
                  <div className="tok-product__dosage-icon-wrap">
                    <Image
                      src={prod.dosage.amountIcon}
                      alt="1회 복용량"
                      width={prod.dosage.amountIconWidth}
                      height={prod.dosage.amountIconHeight}
                      unoptimized
                    />
                  </div>
                  <span className="tok-product__dosage-text">{prod.dosage.amount}</span>
                </div>
              </div>
            </div>

            {/* 하단 POINT 영역 (Figma Rectangle 68 & 51) */}
            <div className="tok-point">
              <h5 className="tok-point__title">{prod.pointTitle}</h5>
              <div className="tok-point__card">
                <ul className="tok-point__list">
                  {prod.points.map((pointText, pIdx) => (
                    <li key={pIdx} className="tok-point__item">
                      <span className="tok-point__dot" aria-hidden="true" />
                      <span className="tok-point__text">{pointText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
