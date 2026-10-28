import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import './diet-system.css';
import '../../_shared/detail-page-scale.css';

export const metadata: Metadata = {
  title: '진 다이어트 시스템 | 진한의원',
  description:
    '감량 시작부터 평생 이어갈 수 있는 유지까지. 개인별 맞춤 치료와 비우기·태우기·채우기 3단계 프로그램으로 진행되는 해운대 진한의원 다이어트 시스템 안내.',
};

const ASSET_PATH = '/images/about/diet-system';

const HERO_PILLS = [
  { num: '1', label: '현재 상태 확인', modClass: 'ds-hero-pill--1' },
  { num: '2', label: '맞춤 진료 상담', modClass: 'ds-hero-pill--2' },
  { num: '3', label: '감량 과정 점검', modClass: 'ds-hero-pill--3' },
  { num: '4', label: '유지 계획 수립', modClass: 'ds-hero-pill--4' },
];

const HISTORY_ROW_1 = [
  '2010년 한방내과 석사학위 취득',
  '2011년 한방내과전문의 취득',
  '2012년 진한의원 개원',
  '2013년 네이버 주치의 하이닥 위촉상담의',
];

const HISTORY_ROW_2 = [
  '2014년부터 현재까지 KNN 한방주치의 방송다수 출연',
  '2015년 BBS 라디오 한방 상담의',
];

interface ObesityTypeCard {
  num: string;
  title: string;
  subtitle?: string;
  desc: string;
  href: string;
  cardMod: string;
  hlWidth: number;
  hlWidth2?: number;
}

const OBESITY_TYPES: ObesityTypeCard[] = [
  {
    num: '01',
    title: '독소형 비만',
    desc: '붓기나 배변 불편, 몸이 무겁게\n느껴지는 증상과 함께 체중 관리가\n어려운 경우.',
    href: '/custom-diet/detox',
    cardMod: 'ds-type-card--01',
    hlWidth: 182,
  },
  {
    num: '02',
    title: '내장지방형 비만',
    desc: '복부 둘레가 늘거나 건강검진에서\n복부지방이 확인된 경우, 고지혈증·\n고혈압·지방간·당뇨와 같은 성인병이\n동반되어 체중 관리가 필요한 경우.',
    href: '/custom-diet/visceral',
    cardMod: 'ds-type-card--02',
    hlWidth: 247,
  },
  {
    num: '03',
    title: '호르몬 불균형 비만',
    desc: '갱년기 전후의 변화, 수면장애, 식욕\n변화, 갑상선 질환 또는 갑상선전절제·\n부분절제 이력이 있고 이전보다 복부\n지방이 늘거나 체중 관리가 어려운 경우.',
    href: '/custom-diet/hormone',
    cardMod: 'ds-type-card--03',
    hlWidth: 284,
  },
  {
    num: '04',
    title: '자율신경실조형 비만',
    subtitle: '(스트레스성 비만)',
    desc: '스트레스가 많고 잠을 잘 못 자며 단 음식\n이나 야식이 자주 당기고 쉽게 피로해\n지는 경우. 심장이 두근거리거나 숨이\n차고, 자주 깨거나 얕은 잠을 자며, 평소\n신경쇠약감과 불안 성향이 있는 경우.',
    href: '/custom-diet/autonomic',
    cardMod: 'ds-type-card--04',
    hlWidth: 307,
    hlWidth2: 274,
  },
  {
    num: '05',
    title: '기혈부족형 비만',
    desc: '쉽게 지치고 무기력하며 식사량이\n많지 않은데도 활동량이 줄면서 체중\n관리가 어려운 경우.',
    href: '/custom-diet/qi-blood',
    cardMod: 'ds-type-card--05',
    hlWidth: 249,
  },
  {
    num: '06',
    title: '부종형 비만',
    desc: '얼굴이나 손발이 자주 붓고\n저녁이 되면 다리가 무거우며 체중\n변동이 큰 경우.',
    href: '/custom-diet/edema',
    cardMod: 'ds-type-card--06',
    hlWidth: 181,
  },
  {
    num: '07',
    title: '염증성 비만',
    desc: '피부 트러블이 반복되거나 피부가\n자주 가렵고, 몸 여기저기가 아프며\n장 컨디션이 좋지 않은 경우.',
    href: '/custom-diet/chronic-inflammation',
    cardMod: 'ds-type-card--07',
    hlWidth: 181,
  },
];

const PROCESS_STEPS = [
  {
    step: 'STEP 01',
    title: '초진설문 및 접수',
    imgSrc: `${ASSET_PATH}/process-step-01.png`,
    imgW: 239,
    imgH: 239,
    imgMod: 'ds-process-card__img--01',
  },
  {
    step: 'STEP 02',
    title: '자율신경기능 및 혈관노화도검사 및\n인바디검사',
    imgSrc: `${ASSET_PATH}/process-step-02.png`,
    imgW: 261,
    imgH: 260,
    imgMod: 'ds-process-card__img--02',
  },
  {
    step: 'STEP 03',
    title: '전문의 진료 및 현재상태 확인',
    imgSrc: `${ASSET_PATH}/process-step-03.png`,
    imgW: 241,
    imgH: 241,
    imgMod: 'ds-process-card__img--03',
  },
  {
    step: 'STEP 04',
    title: '맞춤 처방 및 감량 치료 계획',
    imgSrc: `${ASSET_PATH}/process-step-04.png`,
    imgW: 235,
    imgH: 235,
    imgMod: 'ds-process-card__img--04',
  },
  {
    step: 'STEP 05',
    title: '15일 단위로 감량과정 점검 및 건강상태 체크\n식단 점검 및 생활지도',
    imgSrc: `${ASSET_PATH}/process-step-05.png`,
    imgW: 264,
    imgH: 264,
    imgMod: 'ds-process-card__img--05',
  },
  {
    step: 'STEP 06',
    title: '유지 계획 및 요요 현상 방지',
    imgSrc: `${ASSET_PATH}/process-step-06.png`,
    imgW: 239,
    imgH: 239,
    imgMod: 'ds-process-card__img--06',
  },
];

const RECOMMEND_LIST = [
  { num: '01', text: '여러 번 다이어트 했지만 늘 요요현상이 고민이신 분' },
  { num: '02', text: '장기적인 약 복용에 대한 안전성이 걱정이신 분' },
  { num: '03', text: '이미 약 내성이 생겨서 식욕조절이 잘 되지 않는 분' },
  { num: '04', text: '다이어트 한약을 복용하면 심장 두근거림이나 두통, 불면증, 탈모, 체력 저하가 걱정인 분' },
  { num: '05', text: '무엇보다 건강하게 감량하고 싶은 분' },
  { num: '06', text: '고지혈증, 고혈압, 당뇨, 갑상선 저하증, 생리불순, 갱년기 증후군이 있어서 체중 감량이 필요한 분' },
  { num: '07', text: '비만 주사제 감량 후에도 유지를 스스로 하기에 힘든 분' },
  { num: '08', text: '나름 적게 먹고 운동을 하는데도 살이 찌고 잘 빠지지 않는 분' },
  { num: '09', text: '갱년기 전후로 복부지방과 체중 증가가 고민인 분' },
  { num: '10', text: '스트레스를 받으면 과식·야식·단 음식이 당기는 분' },
  { num: '11', text: '몸이 자주 붓고 체중 변화가 큰 분' },
  { num: '12', text: '쉽게 피로하고 지치거나 관절이 아파서 체중 감량이 힘든 분' },
  { num: '13', text: '살이 찌면서 피부트러블, 속불편감, 만성 피로 등 총체적으로 건강이 나빠진 분' },
  { num: '14', text: '과체중으로 인한 생리불순, 희발월경, 난임 환자' },
  { num: '15', text: '체중감량 후 장기간 유지 관리가 필요한 분' },
  { num: '16', text: '나이가 많거나 평소 건강이 좋지 않음에도 체중감량이 필요한 분' },
];

const QA_ITEMS = [
  {
    q: '한약을 오래 복용하면 간이나 신장에 해롭지 않나요?',
    a: '진한의원의 한약 처방은 장기간 복용을 하더라도 간, 신장 기능에 영향을 미치지 않게 안전하게\n만들었습니다. 식약처에서 간독성, 신장 독성이 보고된 약재는 쓰지 않고 있습니다. 다이어트나 만성질환\n특성상 장기적으로 관리해야 하므로 수개월~수년간 복용하더라도 안전해야 하기 때문입니다.',
  },
  {
    q: '갱년기, 폐경 이후에도 잘 안빠지는 뱃살이 정말 빠질까요?',
    a: '갱년기 전후로 여성호르몬의 분비가 급격히 감소하면서 신진대사 저하, 내장지방의 증가와\n근육양 및 골밀도 감소가 나타납니다. 그러므로 동일하게 식사하고, 운동을 하더라도 폐경 이전에 비해\n윗배가 나오고 배와 옆구리살이 늘어나고 몸이 무겁고 부으면서 체중이 증가하는 경향이 있습니다.\n수면, 소화, 순환, 배설, 호르몬 균형이 좋지 못할수록 내장지방과 체중이 더욱 증가되므로 해독 치료와\n더불어 살이 찌는 원인 치료를 병행하면 갱년기 이후의 나이임에도 건강한 체중 감량과 더불어 뱃살이\n빠질 수 있습니다.',
  },
  {
    q: '잠을 못 자거나 스트레스가 심해도 체중에 영향을 주나요?',
    a: '수면과 스트레스는 식욕과 음식 선택, 활동량 등 체중 관리에 관련된 행동 패턴과 생리적 조절에 영향을\n줄 수 있습니다. 따라서 다이어트 과정에서 수면과 스트레스 관리도 함께 살펴야 합니다. 수면이\n좋지 못하고 스트레스가 쌓이면 전반적인 신체 기능이 저하되어 체력 및 면역력, 신진대사, 호르몬 조절,\n순환, 배설 능력이 다 감소 되기 때문입니다.',
  },
  {
    q: '다이어트 한약은 누구나 같은 약을 먹나요?',
    a: '한약 처방은 설문지 작성, 각종 기계 검사, 전문의의 진료와 개별 상담을 통해 개인의 체질, 연령,\n불편 증상과 과거력, 기타 약물 섭취 여부, 다이어트 경험, 현재 몸 상태를 전반적으로 확인한 후\n15일마다 처방합니다. 또한 같은 환자분들이라도 시간이 지남에 따라 몸 상태가 달라지기 때문에\n주기적으로 내원, 전화 상담, 카톡 상담 등 다양한 형태로 환자와 긴밀히 소통하면서 식욕 뿐만\n아니라 수면, 소화, 체력, 대변 등을 면밀히 체크해서 편안하게 감량될 수 있도록 도와드립니다.',
  },
  {
    q: '항상 요요현상이 걱정입니다. 목표 체중을 달성한 이후에 체중을 어떻게 관리해야 하나요?',
    a: '체중을 감량한 이후에 체중의 셋포인트(set point)가 자리매김하는 시간이 필요하며 이전의 식습관\n으로 급격하게 돌아가지 않도록 유지환(요요방지환)을 복용하는 것이 좋습니다. 특히 생리 직전,\n야간 근무시, 휴가나 여행갈 시, 한번씩 식욕이 조절되지 않을 때 유지환을 잠깐씩, 수일간 복용하여\n위장이 다시 늘어나지 않도록, 과식하지 않도록 식욕을 억제해 줍니다. 수개월~수년간 복용해도\n간에 무리가 없으므로 3킬로 이상 증가되기 전에 유지환을 잠깐 복용해서 체중의 증감이 크지 않도록\n한다면 요요현상을 예방하는 것이 수월해집니다.',
  },
  {
    q: '혈압약, 고지혈증, 당뇨약, 갑상선약을 먹고 있는데 같이 복용해도 되나요?',
    a: '위에 언급한 약과 같이 복용해도 됩니다. 또한 비타민이나 기타 영양제와도 같이 복용해도 괜찮습니다.\n다만 약물이 너무 종류가 많은 경우에는 잠시 급하지 않은 약은 복용 시기를 감량 후로 미루거나 항생제,\n진통소염제, 항진균제, 감기약 등은 같은 날 복용하지 않도록 합니다.',
  },
  {
    q: '비만주사와 식욕억제제를 여러번 시도했던 경우에도 다이어트 한약이 효과가 있는지,\n또한 유지 차원에도 복용해도 될까요?',
    a: '다이어트 한약은 뇌신경 억제제(향정신성 의약품), 호르몬제가 아니라서 장기적인 복용이 가능하며\n비만주사제, 식욕억제제를 계속 복용하기 부담스럽다면 대체해서 유지하는 용도로 복용하셔도 됩니다.\n다만 비만 주사제(마운자로, 위고비 등등), 식욕억제제를 여러 번 시도하거나 약 강도가\n높았을수록 다이어트 한약의 식욕억제 민감도가 떨어지는 것은 사실입니다. 하지만 유산소운동을 하듯\n신진대사율을 올려 체지방 연소를 활발하게 하는 대사 관련 약물이기 때문에 다이어트 한약을\n병행시 체지방 감소에 시너지 효과가 있습니다. 체질적으로 살이 잘 찌고 붓는 태음인, 소양인 처방\n관련 약물이 주로 많이 쓰이고, 위장에 포만감을 주는 약재, 지방을 활발히 태우는 약재, 피를\n맑게 해서 혈액순환을 활발히 해주는 약재들이 들어있어 고지혈증, 고혈압 등 대사증후군 개선에도\n도움이 됩니다. 본인의 체력과 연령, 건강 상태에 맞게 처방하면 오히려 혈액검사 지표들(혈압, 혈당,\n콜레스테롤 수치)이 같이 개선될 수 있습니다.',
  },
  {
    q: '손발이 자주 붓고, 다리도 무거운데 붓기가 살이 될 수 있나요?',
    a: '붓기가 살이 되는 것은 아니지만 잘 붓는 사람들이 피로감을 많이 느끼고 몸이 무거워져 활동량,\n운동량이 줄어들어 살이 찌기 쉽습니다. 게다가 수분 뿐만 아니라 염증성 물질, 노폐물도 같이\n정체되어 만성통증, 신진대사 저하, 순환장애를 유발하기 때문에 잘 붓는 분들이 체중이 늘기 쉽습니다.',
  },
  {
    q: '공황장애나 불안 장애시 다이어트 한약을 복용해도 되나요?',
    a: '증상이 중증인지 경미한지, 항우울제를 복용하는지에 따라 처방 가능 여부가 달라집니다.\n증상이 심하지 않다면 평소의 과민하고 불안이 전문적인 치료를 통해서 오히려 개선될 수 있습니다.\n수면이 불량하거나 잘 두근거리고 쉽게 불안한 분들은 보혈해주는 한약재, 심장의 열을 내리는\n한약재를 병행할 시 자율신경실조 증상 개선에도 도움이 됩니다. (천왕보심단, 귀비탕, 자음강화탕 등)',
  },
];

function renderLines(text: string) {
  const parts = text.split('\n');
  return parts.map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      {idx < parts.length - 1 && <br className="ds-pc-br" />}
    </React.Fragment>
  ));
}

export default function DietSystemPage() {
  return (
    <main className="diet-system-page">
      {/* SECTION 01: 히어로 및 진한의원 약력 바 */}
      <section className="ds-sec-hero">
        <div className="ds-sec-hero__upper">
          <div className="diet-system-page__content ds-sec-hero__inner">
            <div className="ds-sec-hero__left">
              <p className="ds-sec-hero__eyebrow">BUSAN · HAEUNDAE · JIN CLINIC</p>
              <h1 className="ds-sec-hero__title">
                <span className="ds-sec-hero__title-dark">감량 시작부터,</span>
                <br />
                <span className="ds-sec-hero__title-sage">
                  평생 이어갈 수 있는
                  <br />
                  유지까지
                </span>
              </h1>
              <div className="ds-sec-hero__divider" aria-hidden="true" />
              <p className="ds-sec-hero__desc">
                체중 숫자만 보기보다, 지금의 몸 상태와 생활 리듬을 먼저 살펴봅니다.
                <br className="ds-pc-br" />
                진한의원은 개인별 상담을 바탕으로 감량 과정과 감량 후 관리 계획을
                <br className="ds-pc-br" />
                함께 이야기합니다.
              </p>
              <div className="ds-sec-hero__actions">
                <a href="#visit-guide" className="ds-sec-hero__btn ds-sec-hero__btn--primary">
                  진한의원에 문의하기
                </a>
                <a href="#process-section" className="ds-sec-hero__btn ds-sec-hero__btn--secondary">
                  진료과정 보기
                </a>
              </div>
              <p className="ds-sec-hero__notice">
                진료 내용과 처방은 개인별 상태에 따라 달라질 수 있습니다.
              </p>
            </div>

            <div className="ds-sec-hero__diagram" aria-label="나에게 맞춘 상담 4단계">
              <div className="ds-hero-circle ds-hero-circle--outer" />
              <div className="ds-hero-circle ds-hero-circle--middle" />
              <div className="ds-hero-circle ds-hero-circle--inner">
                <Image
                  src={`${ASSET_PATH}/hero-consult-icon.png`}
                  alt="나에게 맞춘 상담 아이콘"
                  width={160}
                  height={183}
                  className="ds-hero-circle__icon"
                  priority
                />
                <span className="ds-hero-circle__label">나에게 맞춘 상담</span>
              </div>

              {HERO_PILLS.map((pill) => (
                <div key={pill.num} className={`ds-hero-pill ${pill.modClass}`}>
                  <span className="ds-hero-pill__num">{pill.num}</span>
                  <span className="ds-hero-pill__text">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ds-sec-hero__history">
          <div className="diet-system-page__content ds-sec-hero__history-inner">
            <div className="ds-sec-hero__history-brand">
              JIN CLINIC · <br />
              HAEUNDAE
            </div>
            <div className="ds-sec-hero__history-rows">
              <ul className="ds-sec-hero__history-row ds-sec-hero__history-row--1">
                {HISTORY_ROW_1.map((item) => (
                  <li key={item} className="ds-sec-hero__history-item">
                    <span className="ds-sec-hero__history-star">*</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="ds-sec-hero__history-row ds-sec-hero__history-row--2">
                {HISTORY_ROW_2.map((item) => (
                  <li key={item} className="ds-sec-hero__history-item">
                    <span className="ds-sec-hero__history-star">*</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: 식욕과 진료 원칙 */}
      <section className="ds-sec-principles">
        <div className="diet-system-page__content ds-sec-principles__inner">
          <div className="ds-section-header">
            <p className="ds-section-header__eyebrow">JIN DIET PROGRAM</p>
            <h2 className="ds-section-header__title">
              식욕은 인체가 생존을 위한
              <br />
              <strong className="ds-section-header__accent">자연스러운 현상</strong>입니다
            </h2>
          </div>

          <p className="ds-sec-principles__lead">
            식욕 억제에만 의존해 다이어트를 반복하면 약물과 개인의 상태에 따라 내성이나 심장 두근거림,
            <br className="ds-pc-br" />
            어지럼 같은 불편이 나타날 수 있습니다. 지나친 영양 제한은 면역·호르몬 균형과
            <br className="ds-pc-br" />
            정서적 안정에 부담을 줄 수 있고, 불안감이나 공황 증상 등 심리적 어려움으로 이어질 수 있습니다.
            <br className="ds-pc-br" />
            이런 경험이 반복되면 다음 다이어트가 더 어렵게 느껴질 수 있어 몸 상태를 함께 살펴야 합니다.
          </p>

          <div className="ds-principle-list">
            {/* Card 1 */}
            <article className="ds-principle-card ds-principle-card--filled">
              <h3 className="ds-principle-card__title">살이 찌는 원인과 몸 상태를 확인합니다</h3>
              <div className="ds-principle-card__body-wrap">
                <span className="ds-principle-card__hl" aria-hidden="true" />
                <p className="ds-principle-card__desc">
                  <span className="ds-principle-card__desc-hl">해독이 필요한지, 치료를 병행해야 하는지, 지방분해 시술이나 침치료 등이 필요한지도 확인합니다.</span>
                  <br className="ds-pc-br" />
                  전체적인 감량과 치료 계획, 감량 기간을 정한 후 생활 점검과 감량 과정을 주기적으로 체크합니다.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="ds-principle-card ds-principle-card--outlined">
              <h3 className="ds-principle-card__title">1:1 개인별 맞춤 처방을 원칙으로</h3>
              <div className="ds-principle-card__divider" aria-hidden="true" />
              <p className="ds-principle-card__desc">
                다이어트 한약은 동일할 수 없습니다. 사람마다 체질이 다르고 몸 상태가 그때그때 달라지기 때문입니다.
              </p>
            </article>

            {/* Card 3 */}
            <article className="ds-principle-card ds-principle-card--outlined ds-principle-card--tall">
              <h3 className="ds-principle-card__title">한방내과전문의 취득 · 2012년 개원</h3>
              <div className="ds-principle-card__divider" aria-hidden="true" />
              <p className="ds-principle-card__desc">
                2011년 한방내과전문의 취득 후, 2012년 개원해 한자리에서 꾸준히 진료하고 있습니다.
                <br className="ds-pc-br" />
                객관적이고 과학적인 관점과 한의학적 관점을 함께 고려해 누구나 쉽게 이해할 수 있도록 설명하고, 전문적이고
                <br className="ds-pc-br" />
                체계적인 진료를 추구합니다.
              </p>
            </article>

            {/* Card 4 */}
            <article className="ds-principle-card ds-principle-card--outlined">
              <h3 className="ds-principle-card__title">주기적인 생활 점검과 소통</h3>
              <div className="ds-principle-card__divider" aria-hidden="true" />
              <p className="ds-principle-card__desc">
                약을 먹을 때 불편함은 없는지, 어떤 부분이 어려운지 살피기 위해 내원·전화·카카오톡·문자 상담으로 소통합니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 03: 나는 왜 살이 찔까요? (7가지 비만 유형) */}
      <section className="ds-sec-types">
        <div className="diet-system-page__content ds-sec-types__inner">
          <div className="ds-section-header">
            <p className="ds-section-header__eyebrow">WHY WEIGHT CHANGES</p>
            <h2 className="ds-section-header__title">
              나는 <strong className="ds-section-header__accent">왜 살이 찔까요?</strong>
            </h2>
          </div>

          <p className="ds-sec-types__lead">
            이전과 비슷하게 먹는데 체중이 늘고, 열심히 감량해도 다시 살찌기를 반복한다면
            <br className="ds-pc-br" />
            단순히 먹는 양만의 문제는 아닐 수 있습니다. 식욕과 식사 패턴, 수면, 스트레스, 소화 상태, 부종, 활동량,
            <br className="ds-pc-br" />
            연령에 따른 신체 변화 등 여러 원인이 함께 작용할 수 있습니다.
          </p>

          <div className="ds-types-grid">
            {OBESITY_TYPES.map((item) => (
              <article key={item.num} className={`ds-type-card ${item.cardMod}`}>
                <span className="ds-type-card__num">{item.num}</span>
                <div className="ds-type-card__head">
                  <span
                    className="ds-type-card__hl ds-type-card__hl--1"
                    style={{ width: `${item.hlWidth}px` }}
                    aria-hidden="true"
                  />
                  {item.hlWidth2 && (
                    <span
                      className="ds-type-card__hl ds-type-card__hl--2"
                      style={{ width: `${item.hlWidth2}px` }}
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="ds-type-card__title">
                    {item.title}
                    {item.subtitle && (
                      <>
                        <br />
                        {item.subtitle}
                      </>
                    )}
                  </h3>
                </div>
                <p className="ds-type-card__desc">{renderLines(item.desc)}</p>
                <Link href={item.href} className="ds-type-card__btn">
                  더 알아보기 위해 상세페이지로 가기
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: 진료 프로세스 */}
      <section id="process-section" className="ds-sec-process">
        <div className="diet-system-page__content ds-sec-process__inner">
          <div className="ds-sec-process__top">
            <div className="ds-section-header">
              <p className="ds-section-header__eyebrow">JIN CLINIC · FIRST VISIT</p>
              <h2 className="ds-section-header__title ds-section-header__title--green">진료 프로세스</h2>
            </div>

            <div className="ds-sec-process__duration">
              <span className="ds-sec-process__duration-hl" aria-hidden="true" />
              <span className="ds-sec-process__duration-text">소요시간 1시간 30내외</span>
            </div>
          </div>

          <div className="ds-process-list">
            {PROCESS_STEPS.map((item) => (
              <article key={item.step} className="ds-process-card">
                <div className="ds-process-card__text">
                  <span className="ds-process-card__step">{item.step}</span>
                  <h3 className="ds-process-card__title">{renderLines(item.title)}</h3>
                </div>
                <div className={`ds-process-card__img-wrap ${item.imgMod}`}>
                  <Image
                    src={item.imgSrc}
                    alt={item.title.replace('\n', ' ')}
                    width={item.imgW}
                    height={item.imgH}
                    className="ds-process-card__img"
                  />
                </div>
              </article>
            ))}
          </div>

          <p className="ds-sec-process__notice">
            개인별 상태에 따라 검사와 진료 내용은 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* SECTION 05: 진한의원 3단계 다이어트 프로그램 */}
      <section className="ds-sec-program">
        <div className="diet-system-page__content ds-sec-program__inner">
          <div className="ds-sec-program__top">
            <div className="ds-sec-program__intro">
              <div className="ds-section-header">
                <p className="ds-section-header__eyebrow">JIN CLINIC · 3-STEP DIET PROGRAM</p>
                <h2 className="ds-section-header__title">
                  진한의원
                  <br />
                  <strong className="ds-section-header__accent">3단계 다이어트 프로그램</strong>
                </h2>
              </div>

              <ul className="ds-program-summary">
                <li className="ds-program-summary__item">
                  <span className="ds-program-summary__badge">STEP 01</span>
                  <span className="ds-program-summary__label">비우기(해독)</span>
                </li>
                <li className="ds-program-summary__item">
                  <span className="ds-program-summary__badge">STEP 02</span>
                  <span className="ds-program-summary__label">태우기(집중적인 감량)</span>
                </li>
                <li className="ds-program-summary__item">
                  <span className="ds-program-summary__badge">STEP 03</span>
                  <span className="ds-program-summary__label">채우기(유지 및 관리)</span>
                </li>
              </ul>
            </div>

            {/* 3단계 원형 인포그래픽 */}
            <div className="ds-program-wheel" aria-label="진한의원 3단계 다이어트 순환 다이어그램">
              <Image
                src={`${ASSET_PATH}/program-3step-wheel.png`}
                alt="3단계 다이어트 원형 다이어그램"
                width={583}
                height={593}
                className="ds-program-wheel__img"
              />

              {/* Arrow 1 (좌상단) */}
              <svg
                className="ds-program-wheel__arrow ds-program-wheel__arrow--1"
                width="270"
                height="406"
                viewBox="0 0 270 406"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M35.129 405.217C35.5262 405.945 36.4384 406.213 37.1665 405.816C37.8945 405.419 38.1628 404.507 37.7656 403.779L36.4473 404.498L35.129 405.217ZM36.4473 404.498L37.7656 403.779C-59.2755 225.888 56.2697 24.0784 268.451 11.9989L268.366 10.4997L268.281 9.00042C54.0544 21.1964 -63.0422 225.255 35.129 405.217L36.4473 404.498ZM269.487 11.4995C270.039 10.8806 269.985 9.93136 269.366 9.37921L259.282 0.381161C258.663 -0.170988 257.713 -0.116944 257.161 0.501872C256.609 1.12071 256.663 2.07 257.282 2.62215L266.246 10.6204L258.248 19.5843C257.695 20.2031 257.75 21.1524 258.368 21.7046C258.987 22.2567 259.936 22.2027 260.489 21.5839L269.487 11.4995Z"
                  fill="#185042"
                />
              </svg>

              {/* Arrow 2 (우상단) */}
              <svg
                className="ds-program-wheel__arrow ds-program-wheel__arrow--2"
                width="267"
                height="397"
                viewBox="0 0 267 397"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1.51247 6.11891e-05C0.682965 -0.00577302 0.00579305 0.661934 -4.77324e-05 1.49143C-0.00587532 2.32092 0.66183 2.99809 1.49132 3.00393L1.50189 1.502L1.51247 6.11891e-05ZM1.50189 1.502L1.49132 3.00393C204.163 4.43014 324.619 203.4 232.245 394.845L233.598 395.498L234.95 396.15C328.215 202.86 206.544 1.44288 1.51247 6.11891e-05L1.50189 1.502ZM232.18 395.993C232.453 396.776 233.31 397.189 234.093 396.916L246.855 392.461C247.638 392.187 248.052 391.331 247.778 390.548C247.505 389.765 246.648 389.351 245.865 389.625L234.521 393.585L230.561 382.24C230.287 381.457 229.431 381.044 228.648 381.317C227.865 381.59 227.451 382.447 227.725 383.23L232.18 395.993Z"
                  fill="#185042"
                />
              </svg>

              {/* Arrow 3 (하단) */}
              <svg
                className="ds-program-wheel__arrow ds-program-wheel__arrow--3"
                width="463"
                height="136"
                viewBox="0 0 463 136"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M462.789 2.27064C463.213 1.55755 462.979 0.635585 462.266 0.211365C461.552 -0.21284 460.63 0.0213334 460.206 0.734409L461.497 1.50252L462.789 2.27064ZM461.497 1.50252L460.206 0.734409C356.557 174.963 123.932 178.396 5.35354 1.91207L4.10651 2.74994L2.85949 3.5878C122.581 181.772 357.932 178.528 462.789 2.27064L461.497 1.50252ZM4.39581 1.2757C3.58163 1.11591 2.79206 1.64642 2.63229 2.46062L0.0284202 15.7287C-0.131348 16.5429 0.39916 17.3325 1.21334 17.4923C2.02755 17.6521 2.81713 17.1216 2.9769 16.3074L5.29143 4.51349L17.0853 6.82801C17.8995 6.9878 18.6891 6.4573 18.8489 5.6431C19.0086 4.82889 18.4781 4.03933 17.6639 3.87955L4.39581 1.2757Z"
                  fill="#185042"
                />
              </svg>

              {/* Sector 1: 1단계 비운다 */}
              <div className="ds-wheel-node ds-wheel-node--1">
                <span className="ds-wheel-node__badge ds-wheel-node__badge--1">1단계</span>
                <strong className="ds-wheel-node__title ds-wheel-node__title--1">비운다</strong>
                <span className="ds-wheel-node__sub ds-wheel-node__sub--1">해독 프로그램</span>
              </div>

              {/* Sector 2: 2단계 태운다 */}
              <div className="ds-wheel-node ds-wheel-node--2">
                <span className="ds-wheel-node__badge ds-wheel-node__badge--2">2단계</span>
                <strong className="ds-wheel-node__title ds-wheel-node__title--2">태운다</strong>
                <span className="ds-wheel-node__sub ds-wheel-node__sub--2">
                  1:1 맞춤 처방
                  <br />
                  15일 단위 · <br />
                  90일 감량 권장
                </span>
              </div>

              {/* Sector 3: 3단계 채운다 */}
              <div className="ds-wheel-node ds-wheel-node--3">
                <span className="ds-wheel-node__badge ds-wheel-node__badge--3">3단계</span>
                <strong className="ds-wheel-node__title ds-wheel-node__title--3">채운다</strong>
                <span className="ds-wheel-node__sub ds-wheel-node__sub--3">180일 요요 방지 및 유지</span>
              </div>
            </div>
          </div>

          {/* 3단계 상세 카드 3종 */}
          <div className="ds-program-cards">
            {/* STEP 01 비우기 */}
            <article className="ds-program-card ds-program-card--01">
              <div className="ds-program-card__ribbon">STEP 01</div>
              <div className="ds-program-card__head">
                <h3 className="ds-program-card__title">비우기</h3>
                <span className="ds-program-card__subtitle">해독단계</span>
              </div>
              <p className="ds-program-card__kicker">
                해독(DETOX)의 중요성 - 다이어트의 첫 순서는 식욕억제가 아니라 독소배출!!
              </p>
              <p className="ds-program-card__p ds-program-card__p--1">
                요즘 사람들의 만성 피로와 질환들은 영양 결핍과 부족이 원인인 경우가 드뭅니다.
                <br className="ds-pc-br" />
                대체로 과로, 수면과 휴식의 부족, 스트레스와 더불어 영양의 과부하와 본인에게 맞지 않는
                <br className="ds-pc-br" />
                음식, 가공식품, 기호식품의 과다한 섭취로 인해 소화기계에 부담을 많이 주고 있습니다.
              </p>
              <p className="ds-program-card__p ds-program-card__p--2">
                당화와 산화를 촉진하는 음식들은 장내 환경을 망가뜨리고, 간의 피로를 유발하며,
                <br className="ds-pc-br" />
                혈액과 체액이 탁해지고, 몸의 자체적인 해독, 정화, 배설 능력을 초과하면서 체내에 장시간
                <br className="ds-pc-br" />
                쌓이면 만성 염증을 유발하고 각종 질병의 원인이 됩니다.
                <br className="ds-pc-br" />
                해독에 있어서 중요한 장기인 소장-간의 해독 프로그램을 통해 몸 안에 오랫동안 쌓인
                <br className="ds-pc-br" />
                독소를 처리하면 체내 환경을 근본적으로 개선하여 살이 잘 빠지고 신진대사, 혈액순환이
                <br className="ds-pc-br" />
                활발해집니다.
              </p>
            </article>

            {/* STEP 02 태우기 */}
            <article className="ds-program-card ds-program-card--02">
              <div className="ds-program-card__ribbon">STEP 02</div>
              <div className="ds-program-card__head">
                <h3 className="ds-program-card__title">태우기</h3>
                <span className="ds-program-card__subtitle">집중적인 체중감량 및 체지방 연소</span>
              </div>
              <p className="ds-program-card__p ds-program-card__p--1">
                효율적이고 편안하게 배가 덜 고프도록 식욕을 억제하고
                <br className="ds-pc-br" />
                유산소 운동을 하듯 체지방을 활발히 태워주는 본격적인 다이어트 단계입니다.
                <br className="ds-pc-br" />
                안정적인 감량 속도는 1주일에 1KG 내외이며, 1달에 4KG 전후가 적당하다고 알려져 있습니다.
                <br className="ds-pc-br" />
                평균적으로 3개월간 본인 체중의 8~12% 감량을 목표로 합니다.
                <br className="ds-pc-br" />
                최대 6개월까지 집중감량 기간을 갖는 경우가 많습니다.
              </p>
              <p className="ds-program-card__p ds-program-card__p--2">
                본인의 나이, 체력, 체질, 변비 유무, 수면의 질, 위장 상태 등을 고려하여 15일분씩 맞춤 처방을 합니다.
                <br className="ds-pc-br" />
                경우에 따라 살이 찌는 원인, 다이어트를 방해하는 원인들을 간단한 치료약을 병행해서 해결해주면
                <br className="ds-pc-br" />
                보다 질적이고 건강한 다이어트가 가능합니다.
              </p>
            </article>

            {/* STEP 03 채우기 */}
            <article className="ds-program-card ds-program-card--03">
              <div className="ds-program-card__ribbon">STEP 03</div>
              <div className="ds-program-card__head">
                <h3 className="ds-program-card__title">채우기</h3>
                <span className="ds-program-card__subtitle">유지기 혹은 요요현상 방지</span>
              </div>
              <p className="ds-program-card__p ds-program-card__p--1">
                목표 체중을 달성했다 하더라도 체력이 떨어지거나 어지러우면 활동량이나 운동량이 감소하고
                <br className="ds-pc-br" />
                먹는 보상으로 이어질 수 있으므로 기혈을 보충하는 보약을 쓰면 몸이 힘들지 않습니다.
                <br className="ds-pc-br" />
                그러면 더 감량하는 것도 가능하고, 유지하기도 훨씬 수월합니다.
              </p>
              <p className="ds-program-card__p ds-program-card__p--2">
                또한 한 번씩 식욕이 조절되지 않을 때를 대비하여
                <br className="ds-pc-br" />
                유지환(요요방지환)을 필요한 경우에 복용하면 요요현상을 방지하는 것이 훨씬 수월합니다.
                <br className="ds-pc-br" />
                유지기간은 최소 3개월 하는 것을 추천드리며, 평생 복용해도 될 정도로 무난한 약을 처방합니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 06: 감량 후 유지 관리 */}
      <section className="ds-sec-after">
        <div className="diet-system-page__content ds-sec-after__inner">
          <div className="ds-section-header">
            <p className="ds-section-header__eyebrow">AFTER WEIGHT LOSS</p>
            <h2 className="ds-section-header__title">
              감량만큼 중요한 것은
              <br />
              <strong className="ds-section-header__accent">감량 후 유지 관리</strong>입니다
            </h2>
          </div>

          <p className="ds-sec-after__lead">
            목표 체중에 도달했다고 체중 관리가 끝나는 것은 아닙니다.
            <br className="ds-pc-br" />
            감량 이후에는 식욕과 식사량이 다시 늘거나 이전 생활 습관으로 돌아가며 체중이 증가할 수 있어,
            <br className="ds-pc-br" />
            감량기와 유지관리기를 구분해 장기적인 계획을 세우는 것이 중요합니다.
          </p>

          <div className="ds-sec-after__box">
            <p className="ds-sec-after__box-lead">
              몸이 새로운 식사와 생활방식에 적응할 시간이 필요합니다.
            </p>
            <p className="ds-sec-after__box-text">
              정상적인 크기로 줄어든 위장과 탄수화물을 줄여 먹는 식단이 힘들지 않을 때까지 몸이 적응할
              <br className="ds-pc-br" />
              시간이 필요합니다. 늘 먹던 음식과 생활방식에서 벗어나 새로운 음식과 생활방식에 익숙해지기 위한
              <br className="ds-pc-br" />
              연습을 해야 하며, 시간이 갈수록 난이도가 낮아집니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 07: 이런 분께 권합니다 */}
      <section className="ds-sec-recommend">
        <div className="diet-system-page__content ds-sec-recommend__inner">
          <div className="ds-section-header">
            <p className="ds-section-header__eyebrow">WHO WE SEE</p>
            <h2 className="ds-section-header__title">
              건강한 다이어트를 추구하는 진한의원,
              <br />
              <strong className="ds-section-header__accent">이런 분께 권합니다</strong>
            </h2>
          </div>

          <ol className="ds-recommend-list">
            {RECOMMEND_LIST.map((item) => (
              <li key={item.num} className="ds-recommend-list__item">
                <span className="ds-recommend-list__num">{item.num}</span>
                <span className="ds-recommend-list__text">{item.text}</span>
              </li>
            ))}
          </ol>

          <p className="ds-sec-recommend__notice">
            진료 가능 여부와 내용은 개인별 건강 상태와 과거력에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* SECTION 08: 자주 묻는 질문 (Q&A) */}
      <section id="qa-section" className="ds-sec-qa">
        <div className="diet-system-page__content ds-sec-qa__inner">
          <div className="ds-section-header ds-section-header--dark">
            <p className="ds-section-header__eyebrow ds-section-header__eyebrow--lime">GOOD TO KNOW</p>
            <h2 className="ds-section-header__title ds-section-header__title--white">자주 묻는 질문 (Q&amp;A)</h2>
            <p className="ds-sec-qa__sub">아래 내용은 진료 상담 전 참고를 위한 안내입니다.</p>
          </div>

          <div className="ds-qa-list">
            {QA_ITEMS.map((item, idx) => (
              <article key={idx} className="ds-qa-item">
                <div className="ds-qa-item__q-row">
                  <span className="ds-qa-item__mark">Q</span>
                  <h3 className="ds-qa-item__q">{renderLines(item.q)}</h3>
                </div>
                <div className="ds-qa-item__a-row">
                  <span className="ds-qa-item__mark">A</span>
                  <p className="ds-qa-item__a">{renderLines(item.a)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09: 오시는 길 · 진료 안내 */}
      <section id="visit-guide" className="ds-sec-visit">
        <div className="diet-system-page__content ds-sec-visit__inner">
          <div className="ds-section-header">
            <p className="ds-section-header__eyebrow">VISIT JIN CLINIC</p>
            <h2 className="ds-section-header__title ds-section-header__title--green">오시는 길 · 진료 안내</h2>
          </div>

          <div className="ds-visit-top-grid">
            {/* 좌측 카드: 주소 및 연락처 */}
            <article className="ds-visit-card ds-visit-card--address">
              <h3 className="ds-visit-card__title">주소 및 연락처</h3>
              <p className="ds-visit-card__address">
                부산광역시 해운대구 좌동 1473-2
                <br />
                엘리움 빌딩 6층
              </p>
              <div className="ds-visit-card__phones">
                <a href="tel:051-714-0040" className="ds-visit-card__phone">
                  051)714-0040
                </a>
                <a href="tel:010-7686-0041" className="ds-visit-card__phone">
                  010-7686-0041
                </a>
              </div>
            </article>

            {/* 우측 카드: 진료시간 */}
            <article className="ds-visit-card ds-visit-card--hours">
              <div className="ds-visit-card__head">
                <h3 className="ds-visit-card__title">진료시간</h3>
                <span className="ds-visit-card__closed-note">* 일요일은 휴진입니다.</span>
              </div>

              <div className="ds-hours-table">
                <div className="ds-hours-row">
                  <span className="ds-hours-row__day">월/화/수/금</span>
                  <span className="ds-hours-row__time">09:30~18:00</span>
                </div>
                <div className="ds-hours-row ds-hours-row--with-note">
                  <div className="ds-hours-row__main">
                    <span className="ds-hours-row__day">목요일</span>
                    <span className="ds-hours-row__time">09:30~14:00</span>
                  </div>
                  <span className="ds-hours-row__note">(점심시간 없음)</span>
                </div>
                <div className="ds-hours-row ds-hours-row--with-note">
                  <div className="ds-hours-row__main">
                    <span className="ds-hours-row__day">토/대체공휴일</span>
                    <span className="ds-hours-row__time">09:30~14:00</span>
                  </div>
                  <span className="ds-hours-row__note">(점심시간 없음)</span>
                </div>
                <div className="ds-hours-row">
                  <span className="ds-hours-row__day">점심시간</span>
                  <span className="ds-hours-row__time">13:00~14:00</span>
                </div>
              </div>
            </article>
          </div>

          {/* 하단 카드: 오시는 방법 */}
          <article className="ds-visit-transport">
            <h3 className="ds-visit-transport__title">오시는 방법</h3>
            <div className="ds-visit-transport__list">
              <div className="ds-transport-row">
                <span className="ds-transport-row__icon-circle">
                  <Image
                    src={`${ASSET_PATH}/transport-subway.png`}
                    alt="지하철 아이콘"
                    width={46}
                    height={46}
                    className="ds-transport-row__icon"
                  />
                </span>
                <strong className="ds-transport-row__label">지하철</strong>
                <span className="ds-transport-row__desc">2호선 장산역(종점) 11번 또는 13번 출구 앞</span>
              </div>

              <div className="ds-transport-row">
                <span className="ds-transport-row__icon-circle">
                  <Image
                    src={`${ASSET_PATH}/transport-bus.png`}
                    alt="시내버스 아이콘"
                    width={45}
                    height={45}
                    className="ds-transport-row__icon"
                  />
                </span>
                <strong className="ds-transport-row__label">시내버스</strong>
                <span className="ds-transport-row__desc">36, 38, 115-1, 180, 1001, 1006번</span>
              </div>

              <div className="ds-transport-row ds-transport-row--car">
                <span className="ds-transport-row__icon-circle">
                  <Image
                    src={`${ASSET_PATH}/transport-car.png`}
                    alt="자가용 아이콘"
                    width={45}
                    height={45}
                    className="ds-transport-row__icon"
                  />
                </span>
                <strong className="ds-transport-row__label">자가용</strong>
                <span className="ds-transport-row__desc">
                  내비게이션에 부산광역시 해운대구 좌동 1473-2
                  <br />
                  엘리움 6층 입력
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
