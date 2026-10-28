import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import './allinone-page.css';
import '../../_shared/detail-page-scale.css';

export const metadata: Metadata = {
  title: '진 올인원 캡슐 | 진한의원',
  description:
    '체중감량 그 이상의 건강한 변화. 식욕억제부터 체지방 연소, 면역, 붓기, 변비, 소화불량까지 한 번에 관리하는 진한의원 올인원(All in One) 다이어트 캡슐 안내.',
};

const ASSET_PATH = '/images/diet-medicine/allinone';

const TOP_RECOMMENDATIONS = [
  '어지럼증과 체력 저하로 다이어트를 지속하기 어려운 분',
  '카페인에 민감해 다이어트 한약 복용이 부담스러운 분',
  '두근거림이 심하거나 잠을 잘 이루지 못하는 분',
  '체력과 면역력을 함께 고려해야 하는 소아·중년층',
];

interface PillItemData {
  id: string;
  posClass: string;
  imgClass: string;
  badgeClass: string;
  name: string;
  desc: string;
  imgSrc: string;
  imgW: number;
  imgH: number;
  isNew?: boolean;
  newBadgeClass?: string;
}

const BASIC_PILLS: PillItemData[] = [
  {
    id: 'basic-slimtok',
    posClass: 'allinone-pill-item--basic-slimtok',
    imgClass: 'allinone-pill-item__img--slimtok',
    badgeClass: 'allinone-pill-item__badge--slimtok',
    name: '슬림톡 캡슐',
    desc: '식욕조절,\n체지방감소',
    imgSrc: `${ASSET_PATH}/pill-slimtok.png`,
    imgW: 256,
    imgH: 256,
  },
  {
    id: 'basic-immun119',
    posClass: 'allinone-pill-item--basic-immun119',
    imgClass: 'allinone-pill-item__img--immun119',
    badgeClass: 'allinone-pill-item__badge--default',
    name: '면역 119',
    desc: '면역증강,\n항노화작용',
    imgSrc: `${ASSET_PATH}/pill-immun119.png`,
    imgW: 233,
    imgH: 233,
  },
  {
    id: 'basic-zero',
    posClass: 'allinone-pill-item--basic-zero',
    imgClass: 'allinone-pill-item__img--zero',
    badgeClass: 'allinone-pill-item__badge--default',
    name: '붓기제로',
    desc: '부종개선,\n만성염증감소',
    imgSrc: `${ASSET_PATH}/pill-zero.png`,
    imgW: 262,
    imgH: 262,
  },
  {
    id: 'basic-baesara',
    posClass: 'allinone-pill-item--basic-baesara',
    imgClass: 'allinone-pill-item__img--baesara',
    badgeClass: 'allinone-pill-item__badge--default',
    name: '배사라정',
    desc: '내장지방,\n뱃살감소, 변비개선',
    imgSrc: `${ASSET_PATH}/pill-baesara.png`,
    imgW: 231,
    imgH: 231,
  },
];

const POWER_PILLS: PillItemData[] = [
  {
    id: 'power-slimtok',
    posClass: 'allinone-pill-item--power-slimtok',
    imgClass: 'allinone-pill-item__img--slimtok',
    badgeClass: 'allinone-pill-item__badge--slimtok',
    name: '슬림톡 캡슐',
    desc: '식욕조절,\n체지방감소',
    imgSrc: `${ASSET_PATH}/pill-slimtok.png`,
    imgW: 256,
    imgH: 256,
  },
  {
    id: 'power-ikgi',
    posClass: 'allinone-pill-item--power-ikgi',
    imgClass: 'allinone-pill-item__img--ikgi',
    badgeClass: 'allinone-pill-item__badge--default',
    name: '익기보혈',
    desc: '면역증강,\n항노화작용',
    imgSrc: `${ASSET_PATH}/pill-ikgi.png`,
    imgW: 298,
    imgH: 298,
    isNew: true,
  },
  {
    id: 'power-zero',
    posClass: 'allinone-pill-item--power-zero',
    imgClass: 'allinone-pill-item__img--zero',
    badgeClass: 'allinone-pill-item__badge--default',
    name: '붓기제로',
    desc: '부종개선,\n만성염증감소',
    imgSrc: `${ASSET_PATH}/pill-zero.png`,
    imgW: 262,
    imgH: 262,
  },
  {
    id: 'power-baesara',
    posClass: 'allinone-pill-item--power-baesara',
    imgClass: 'allinone-pill-item__img--baesara',
    badgeClass: 'allinone-pill-item__badge--default',
    name: '배사라정',
    desc: '내장지방,\n뱃살감소, 변비개선',
    imgSrc: `${ASSET_PATH}/pill-baesara.png`,
    imgW: 231,
    imgH: 231,
  },
  {
    id: 'power-soksiwon',
    posClass: 'allinone-pill-item--power-soksiwon',
    imgClass: 'allinone-pill-item__img--soksiwon',
    badgeClass: 'allinone-pill-item__badge--default',
    name: '속시원정',
    desc: '윗배감량,\n더부룩함 감소',
    imgSrc: `${ASSET_PATH}/pill-soksiwon.png`,
    imgW: 217,
    imgH: 217,
    isNew: true,
    newBadgeClass: 'allinone-pill-item__new-badge--soksiwon',
  },
];

interface TargetItem {
  num: string;
  text: string;
  isUpgrade?: boolean;
}

const BASIC_TARGETS: TargetItem[] = [
  { num: '01', text: '한약의 쓴맛을 싫어하거나 환을 잘 못 삼키는 분' },
  { num: '02', text: '간편하게 체중, 면역, 뱃살, 붓기를 한번에 해결하고 싶은 분' },
  { num: '03', text: '다이어트 한약을 처음 복용하시는 분' },
  { num: '04', text: '두근거리거나 불면 등의 다이어트 약의 부작용이 걱정되시는 분' },
  { num: '05', text: '손발이 잘 붓고 늘 몸이 무거우신 분' },
  { num: '06', text: '성인병, 변비가 있으신 분' },
  { num: '07', text: '약에 예민하거나 편리하게 다이어트를 원하시는 분' },
];

const POWER_TARGETS: TargetItem[] = [
  { num: '01', text: '자주 어지럽고 체력이 떨어지는 분', isUpgrade: true },
  { num: '02', text: '소화가 잘 안되고 위가 불편한 분', isUpgrade: true },
  { num: '03', text: '한약의 쓴맛을 싫어하거나 환을 잘 못 삼키는 분' },
  { num: '04', text: '간편하게 체중, 면역, 뱃살, 붓기를 한번에 해결하고 싶은 분' },
  { num: '05', text: '다이어트 한약을 처음 복용하시는 분' },
  { num: '06', text: '두근거리거나 불면 등의 다이어트 약의 부작용이 걱정되시는 분' },
  { num: '07', text: '손발이 잘 붓고 늘 몸이 무거우신 분' },
  { num: '08', text: '성인병, 변비가 있으신 분' },
  { num: '09', text: '약에 예민하거나 편리하게 다이어트를 원하시는 분' },
];

function StrikeArrowSvg() {
  return (
    <svg
      className="allinone-price-strike-svg"
      viewBox="0 0 92 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 2H90L72 23M72 23L71.5 13.5M72 23L81.5 22"
        stroke="#B3B3B3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AllinonePricingSection() {
  return (
    <div className="allinone-pricing" aria-label="올인원 캡슐 복용 기간별 비용안내">
      <div className="allinone-pricing__pill-header">
        <h3 className="allinone-pricing__pill-title">올인원 캡슐 복용 기간별 비용안내</h3>
      </div>

      <div className="allinone-pricing__table" role="table" aria-label="복용 기간별 감량 및 유지 비용표">
        {/* 헤더 행 */}
        <div className="allinone-pricing__row allinone-pricing__row--head" role="row">
          <div className="allinone-pricing__cell" role="columnheader">기간/횟수</div>
          <div className="allinone-pricing__cell" role="columnheader">감량</div>
          <div className="allinone-pricing__cell" role="columnheader">유지</div>
        </div>

        {/* 1개월 */}
        <div className="allinone-pricing__row allinone-pricing__row--body" role="row">
          <div className="allinone-pricing__cell allinone-pricing__cell--period" role="rowheader">
            1개월
          </div>
          <div className="allinone-pricing__cell allinone-pricing__cell--price" role="cell">
            <div className="allinone-price-simple">
              <strong className="allinone-price-num">21</strong>
              <span className="allinone-price-unit">만원</span>
              <span className="allinone-price-packs">(90포)</span>
            </div>
          </div>
          <div className="allinone-pricing__cell allinone-pricing__cell--price" role="cell">
            <div className="allinone-price-simple">
              <strong className="allinone-price-num">17</strong>
              <span className="allinone-price-unit">만원</span>
              <span className="allinone-price-packs">(60포)</span>
            </div>
          </div>
        </div>

        {/* 3개월 */}
        <div className="allinone-pricing__row allinone-pricing__row--body" role="row">
          <div className="allinone-pricing__cell allinone-pricing__cell--period" role="rowheader">
            3개월
          </div>
          <div className="allinone-pricing__cell allinone-pricing__cell--price" role="cell">
            <div className="allinone-price-discount-wrap">
              <div className="allinone-price-discount-left">
                <span className="allinone-price-origin">
                  63만
                  <StrikeArrowSvg />
                </span>
                <div className="allinone-price-current">
                  <strong className="allinone-price-num">57</strong>
                  <span className="allinone-price-unit">만원</span>
                  <span className="allinone-price-packs">(270포)</span>
                </div>
              </div>
              <div className="allinone-price-badge">
                <span className="allinone-price-badge__amount">6만원</span>
                <span className="allinone-price-badge__label">할인</span>
              </div>
            </div>
          </div>
          <div className="allinone-pricing__cell allinone-pricing__cell--price" role="cell">
            <div className="allinone-price-discount-wrap">
              <div className="allinone-price-discount-left">
                <span className="allinone-price-origin">
                  51만
                  <StrikeArrowSvg />
                </span>
                <div className="allinone-price-current">
                  <strong className="allinone-price-num">47</strong>
                  <span className="allinone-price-unit">만원</span>
                  <span className="allinone-price-packs">(180포)</span>
                </div>
              </div>
              <div className="allinone-price-badge">
                <span className="allinone-price-badge__amount">4만원</span>
                <span className="allinone-price-badge__label">할인</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4개월 */}
        <div className="allinone-pricing__row allinone-pricing__row--body" role="row">
          <div className="allinone-pricing__cell allinone-pricing__cell--period" role="rowheader">
            4개월
          </div>
          <div className="allinone-pricing__cell allinone-pricing__cell--price" role="cell">
            <div className="allinone-price-discount-wrap">
              <div className="allinone-price-discount-left">
                <span className="allinone-price-origin">
                  84만
                  <StrikeArrowSvg />
                </span>
                <div className="allinone-price-current">
                  <strong className="allinone-price-num">68</strong>
                  <span className="allinone-price-unit">만원</span>
                  <span className="allinone-price-packs">(360포)</span>
                </div>
              </div>
              <div className="allinone-price-badge">
                <span className="allinone-price-badge__amount">16만원</span>
                <span className="allinone-price-badge__label">할인</span>
              </div>
            </div>
          </div>
          <div className="allinone-pricing__cell allinone-pricing__cell--price" role="cell">
            <div className="allinone-price-discount-wrap">
              <div className="allinone-price-discount-left">
                <span className="allinone-price-origin">
                  68만
                  <StrikeArrowSvg />
                </span>
                <div className="allinone-price-current">
                  <strong className="allinone-price-num">59</strong>
                  <span className="allinone-price-unit">만원</span>
                  <span className="allinone-price-packs">(240포)</span>
                </div>
              </div>
              <div className="allinone-price-badge">
                <span className="allinone-price-badge__amount">9만원</span>
                <span className="allinone-price-badge__label">할인</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="allinone-pricing__notice">
        ※ 식욕조절 강도ㆍ불편 증상에 따라 맞춤 처방 가능합니다.
      </p>
    </div>
  );
}

function AllinoneTargetSection({ items }: { items: TargetItem[] }) {
  return (
    <div className="allinone-target" aria-label="프로그램 추천 대상">
      <div className="allinone-target__pill-header">
        <h3 className="allinone-target__pill-title">
          이런 분들에게 <span>추천</span>합니다!
        </h3>
      </div>

      <div className="allinone-target__card">
        <ol className="allinone-target__list">
          {items.map((item) => (
            <li key={item.num} className="allinone-target__item">
              {item.isUpgrade && (
                <div className="allinone-target__upgrade" aria-label="업그레이드 포인트">
                  <span className="allinone-target__upgrade-pill" aria-hidden="true" />
                  <Image
                    src={`${ASSET_PATH}/badge-new.png`}
                    alt=""
                    width={60}
                    height={60}
                    className="allinone-target__upgrade-tail"
                    unoptimized
                  />
                  <span className="allinone-target__upgrade-text">Upgrade</span>
                </div>
              )}
              <span className="allinone-target__num">{item.num}</span>
              <span className="allinone-target__text">{item.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function AllinonePillsStage({ pills }: { pills: PillItemData[] }) {
  return (
    <div className="allinone-pills-stage">
      {pills.map((pill) => (
        <div key={pill.id} className={`allinone-pill-item ${pill.posClass}`}>
          <div className="allinone-pill-item__thumb">
            <div className="allinone-pill-item__circle" aria-hidden="true" />
            <Image
              src={pill.imgSrc}
              alt={pill.name}
              width={pill.imgW}
              height={pill.imgH}
              className={`allinone-pill-item__img ${pill.imgClass}`}
              unoptimized
            />
            {pill.isNew && (
              <div
                className={`allinone-pill-item__new-badge ${pill.newBadgeClass || ''}`}
                aria-label="NEW 처방"
              >
                <Image
                  src={`${ASSET_PATH}/badge-new.png`}
                  alt=""
                  width={91}
                  height={91}
                  unoptimized
                />
                <span>NEW</span>
              </div>
            )}
          </div>

          <div className="allinone-pill-item__info">
            <span className={`allinone-pill-item__badge ${pill.badgeClass}`}>
              {pill.name}
            </span>
            <p className="allinone-pill-item__desc">{pill.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AllinoneDietMedicinePage() {
  return (
    <div className="allinone-page">
      <div className="allinone-page__content">
        {/* ==============================================================
            [섹션 0] 상단 서브 헤딩 & 구분선 (Figma 616:435 & 616:434)
        ============================================================== */}
        <header className="allinone-page__heading">
          <h1>진 올인원 캡슐</h1>
          <Image
            className="allinone-page__divider"
            src="/images/diet-medicine/slim/top-divider.svg"
            alt=""
            width={1440}
            height={1}
            unoptimized
          />
        </header>

        {/* ==============================================================
            [섹션 1] 상단 히어로 배너 (Figma 616:458 - 1440px x 588px)
        ============================================================== */}
        <section className="allinone-hero" aria-label="올인원 다이어트 캡슐 메인 배너">
          <div className="allinone-hero__photo">
            <Image
              src={`${ASSET_PATH}/hero-logo.png`}
              alt="진한의원 로고"
              width={310}
              height={104}
              className="allinone-hero__logo"
              priority
              unoptimized
            />
            <Image
              src={`${ASSET_PATH}/hero-photo.png`}
              alt="거실 속 건강 고민 - 붓기, 변비, 체중감량, 식욕조절"
              width={873}
              height={588}
              className="allinone-hero__photo-img"
              priority
              unoptimized
            />
          </div>

          <div className="allinone-hero__panel">
            <p className="allinone-hero__sub">체중감량 그 이상의 건강한 변화</p>
            <h2 className="allinone-hero__title">
              올인원<span className="allinone-hero__title-en">(All in One)</span>
              <span className="allinone-hero__title-accent">다이어트 캡슐</span>
            </h2>
            <p className="allinone-hero__desc">
              {'살이 찌면서 붓기, 변비, 현기증, 불면증,\n체력저하 등이 동반되어 체중감량과 함께 치료가\n필요한 분들을 위한 복합 효능의 다이어트 한약\n입니다. 다이어트가 처음이신 분, 중년층, 체력이\n약해 체중감량이 어려운 분들에게 선호도가 높은\n대표 한약입니다.'}
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 2] 추천 대상 안내 영역 (Figma 621:470)
        ============================================================== */}
        <section className="allinone-recommend" aria-label="올인원 캡슐 추천 대상">
          <h2 className="allinone-recommend__title">
            이런분들에게 <strong>추천해요</strong>
          </h2>

          <div className="allinone-recommend__box">
            <ul className="allinone-recommend__list">
              {TOP_RECOMMENDATIONS.map((item, idx) => (
                <li key={idx} className="allinone-recommend__item">
                  <span className="allinone-recommend__dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="allinone-recommend__notice">
            * 이미 다이어트 한약이나 양약에 내성이 생겨 강한 식욕 조절이 필요한 분은 올인원 캡슐이 다소 약하게 느껴질 수 있습니다.
          </p>
        </section>

        {/* ==============================================================
            [섹션 3] 올인원 다이어트 캡슐 소개 & TIP 영역 (Figma 616:355)
        ============================================================== */}
        <section className="allinone-intro" aria-label="올인원 다이어트 캡슐 소개">
          <div className="allinone-intro__bg" aria-hidden="true">
            <Image
              src={`${ASSET_PATH}/intro-bg.png`}
              alt=""
              width={1440}
              height={1568}
              priority
              unoptimized
            />
          </div>
          <div className="allinone-intro__gradient" aria-hidden="true" />

          <div className="allinone-intro__copy">
            <p className="allinone-intro__headline">
              <span className="allinone-intro__headline-line">
                <span>식욕억제부터</span>
                <span className="allinone-intro__underline allinone-intro__underline--1" aria-hidden="true" />
              </span>
              <span className="allinone-intro__headline-line">
                <span>체지방 연소까지</span>
                <span className="allinone-intro__underline allinone-intro__underline--2" aria-hidden="true" />
              </span>
            </p>
            <h2 className="allinone-intro__title">올인원 다이어트 캡슐</h2>
            <p className="allinone-intro__desc">
              {'식욕억제와 체지방 연소를 촉진해 빠른 체중감량을 돕는 다이어트 캡슐로,\n경우에 따라 알약(정제) 형태로 처방되기도 합니다.'}
            </p>
          </div>

          <div className="allinone-intro__tip-bar">
            <div className="allinone-intro__tip-inner">
              <span className="allinone-intro__tip-badge">TIP</span>
              <p className="allinone-intro__tip-text">
                {'올인원 다이어트 캡슐 한약도 2주마다 환자 상태를 확인해서 맞춤처방을 해드립니다.\n다이어트 알약 2개(식욕억제 강도 조절) + 치료약 2종류'}
              </p>
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 4] 진 올인원 캡슐 프로그램 영역 (Figma 623:2)
        ============================================================== */}
        <section className="allinone-program allinone-program--basic" aria-label="진 올인원 캡슐 프로그램">
          <div className="allinone-program__header">
            <h2 className="allinone-program__title">
              면역과 다이어트 한번에!
              <strong>진 올인원 캡슐</strong>
            </h2>
            <div className="allinone-program__subtitle-wrap">
              <span
                className="allinone-program__highlight allinone-program__highlight--basic"
                aria-hidden="true"
              />
              <p className="allinone-program__subtitle">
                <strong>면역, 뱃살, 다이어트</strong> 집중 처방 프로그램
              </p>
            </div>
          </div>

          <div className="allinone-dosage allinone-dosage--basic">
            <Image
              src={`${ASSET_PATH}/dosage-basic-masked.png`}
              alt="진 올인원 캡슐 아침 점심 저녁 복용 구성"
              width={1147}
              height={372}
              className="allinone-dosage__img"
              unoptimized
            />
            <span className="allinone-dosage__badge allinone-dosage__badge--morning">아침</span>
            <span className="allinone-dosage__badge allinone-dosage__badge--lunch">점심</span>
            <span className="allinone-dosage__badge allinone-dosage__badge--dinner">저녁</span>
          </div>

          <AllinonePillsStage pills={BASIC_PILLS} />

          <AllinoneTargetSection items={BASIC_TARGETS} />

          <AllinonePricingSection />
        </section>

        {/* ==============================================================
            [섹션 5] 올인원 POWER 캡슐 프로그램 영역 (Figma 627:311)
        ============================================================== */}
        <section className="allinone-program allinone-program--power" aria-label="올인원 POWER 캡슐 프로그램">
          <div className="allinone-program__header">
            <h2 className="allinone-program__title">
              위가 약하고 기력이 잘 떨어지는 분들을 위해
              <strong>올인원 POWER 캡슐</strong>
            </h2>
            <div className="allinone-program__subtitle-wrap">
              <span
                className="allinone-program__highlight allinone-program__highlight--power"
                aria-hidden="true"
              />
              <p className="allinone-program__subtitle">
                <strong>무기력, 소화불량, 다이어트</strong> 집중 처방 프로그램
              </p>
            </div>
          </div>

          <div className="allinone-dosage allinone-dosage--power">
            <Image
              src={`${ASSET_PATH}/dosage-power-masked.png`}
              alt="올인원 POWER 캡슐 아침 점심 저녁 복용 구성"
              width={1147}
              height={372}
              className="allinone-dosage__img"
              unoptimized
            />
            <span className="allinone-dosage__badge allinone-dosage__badge--morning">아침</span>
            <span className="allinone-dosage__badge allinone-dosage__badge--lunch">점심</span>
            <span className="allinone-dosage__badge allinone-dosage__badge--dinner">저녁</span>
          </div>

          <AllinonePillsStage pills={POWER_PILLS} />

          <AllinoneTargetSection items={POWER_TARGETS} />

          <AllinonePricingSection />
        </section>
      </div>
    </div>
  );
}
