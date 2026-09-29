import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import EdemaChecklist from './EdemaChecklist';
import './edema.css';
import '../../_shared/detail-page-scale.css';

export const metadata: Metadata = {
  title: '부종형 비만 | 진한의원',
  description: '몸속 수분 정체와 순환 관리. 부종과 비만의 차이, 한의학에서 바라보는 수독 치료부터 체질 맞춤 한방 치료까지 진한의원 부종형 비만 클리닉 안내.',
};

const ASSET_PATH = '/images/custom-diet/edema';

interface SymptomItem {
  id: number;
  label: string;
  img: string;
  alt: string;
}

const SYMPTOMS: SymptomItem[] = [
  { id: 1, label: '허리 이하의 관절통증', img: `${ASSET_PATH}/symptom-1-joint.png`, alt: '허리 이하의 관절통증' },
  { id: 2, label: '생리불순', img: `${ASSET_PATH}/symptom-2-menstrual-cycle.png`, alt: '생리불순' },
  { id: 3, label: '생리통', img: `${ASSET_PATH}/symptom-3-menstrual-pain.png`, alt: '생리통' },
  { id: 4, label: '자궁근종', img: `${ASSET_PATH}/symptom-4-myoma.png`, alt: '자궁근종' },
  { id: 5, label: '난임 등 부인과 문제', img: `${ASSET_PATH}/symptom-5-infertility.png`, alt: '난임 등 부인과 문제' },
  { id: 6, label: '종아리 쥐·경련', img: `${ASSET_PATH}/symptom-6-calf-cramp.png`, alt: '종아리 쥐·경련' },
];

interface TreatmentItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  alt: string;
}

const TREATMENTS: TreatmentItem[] = [
  {
    id: 1,
    title: '습담탕',
    desc: '독소가 몰려 있는 장소가 조직인지, 혈액인지,\n어느 장기에 있는지에 따라 치료법과 약재가 달라집니다.\n한약의 경우 독소의 배출구를 열고 전신 혈류 개선 및\n해독 대사를 촉진하는 역할도 하지만, 부족한 부분은 채워\n보호하는 기능도 합니다.',
    img: `${ASSET_PATH}/treatment-1-seupdamtang.png`,
    alt: '습담탕 한약 박스와 파우치',
  },
  {
    id: 2,
    title: '붓기제로',
    desc: '붓기제로는 잦은 붓기와 만성적인 피로감으로\n몸이 무겁게 느껴지는 분들을 위한 순환 관리 한약입니다.\n원활하지 않은 순환으로 반복되는 붓기와 노폐물 정체를\n함께 살피고, 몸이 한결 가볍게 느껴질 수 있도록 체계적인\n관리를 돕습니다.',
    img: `${ASSET_PATH}/treatment-2-bukkigero.png`,
    alt: '붓기제로 용기',
  },
  {
    id: 3,
    title: '수독환',
    desc: '몸의 잉여 수분을 빼주어 몸의 부종을 완화시키며 위를\n가볍게 만들어 소화 장애가 있으신 분들에게도 좋습니다.\n몸의 노폐물을 밖으로 빼주어 하루 복용하고 다음날이면\n가벼워진 몸을 느끼실 수 있습니다.',
    img: `${ASSET_PATH}/treatment-3-sudokhwan.png`,
    alt: '수독환 환약과 파우치',
  },
  {
    id: 4,
    title: '영지약침',
    desc: '불완전한 소화, 대사, 배설 과정에서 생기는 장내 독소를\n효과적으로 처리하기 위해 관련 장기의 기능을 향상하고\n위장관 운동성을 높여주고 복강 내 혈액, 림프 순환을\n촉진시키기 위한 한약 추출액을 복부의 주요 혈자리에\n주입하여, 침과 한약이 가진 약리 효과를 낼 수 있습니다.',
    img: `${ASSET_PATH}/treatment-4-youngji.png`,
    alt: '영지약침 바이알과 주사기',
  },
  {
    id: 5,
    title: '심부온열치료',
    desc: '열 에너지를 복부 깊은 곳까지 전달하여 장기 및 심부\n조직의 온도를 높이는 치료 방법입니다. 이는 피부 표면\n에만 열을 가하는 표재열 치료와 달리, 심부까지 열을\n전달하여 장기 운동성을 개선하고 신진대사를 촉진하고\n혈액 순환, 림프 순환을 돕는 효과가 있습니다.',
    img: `${ASSET_PATH}/treatment-5-deepheat.png`,
    alt: '심부온열치료 복부 치료 모습',
  },
];

export default function EdemaPage() {
  return (
    <div className="ede-page">
      <div className="ede-page__content">
        {/* ==============================================================
            [상단 서브 헤딩 & 구분선]
            Figma 410:651 & 410:650 (NanumMyeongjo 400, 40px, Line 11 1px)
        ============================================================== */}
        <header className="ede-page__heading">
          <h1>부종형 비만</h1>
          <div className="ede-page__divider" />
        </header>

        {/* ==============================================================
            [섹션 01] 메인 히어로 배너 (Figma 410:431 - 1440px x 588px)
        ============================================================== */}
        <section className="ede-hero" aria-label="부종형 비만 메인 배너">
          <div className="ede-hero__photo">
            <Image
              src={`${ASSET_PATH}/hero-logo.png`}
              alt="진한의원 로고"
              width={312}
              height={104}
              className="ede-hero__logo"
              priority
              unoptimized
            />
            <Image
              src={`${ASSET_PATH}/hero-photo.png`}
              alt="다리 부종으로 힘들어하는 여성"
              width={956}
              height={588}
              className="ede-hero__photo-img"
              priority
              unoptimized
            />
          </div>
          <div className="ede-hero__panel">
            <p className="ede-hero__sub">몸속 수분 정체와 순환 관리</p>
            <h2 className="ede-hero__title">
              {'부종형 '}
              <span>비만</span>
            </h2>
            <p className="ede-hero__desc">
              {'만성적인 부종은 몸을 무겁게 하고 지방조직의\n변형과 셀룰라이트를 유발해, 통증·피로와\n활동량 감소로 이어지며 비만해지기 쉽습니다.\n특히 여성이나 냉한 체질의 경우 얼굴, 손발,\n하체 부종을 호소하며 소변 문제를 동반하기도\n합니다.'}
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 02] 부종과 비만의 차이 (Figma 410:440)
        ============================================================== */}
        <section className="ede-compare" aria-label="부종과 비만의 차이">
          <h2 className="ede-compare__title">
            <span className="ede-compare__title-light">부종과 비만, </span>
            <strong className="ede-compare__title-bold">같은 것이 아닙니다</strong>
          </h2>
          <p className="ede-compare__desc">
            {'부종은 수분의 정체이고, 비만은 지방조직의 증가입니다.\n붓기가 지방조직으로 변하는 것은 아니지만 붓기가 오랫동안 방치되면 신진대사 저하,\n순환장애를 유발하여 체지방의 축적과 셀룰라이트 증가를 유발합니다.'}
          </p>

          <div className="ede-compare__grid">
            {/* 좌측: 부종 */}
            <div className="ede-compare__col">
              <div className="ede-compare__circle">
                <Image
                  src={`${ASSET_PATH}/compare-edema.png`}
                  alt="부종 수분의 정체 일러스트"
                  width={451}
                  height={451}
                  unoptimized
                />
              </div>
              <h3 className="ede-compare__col-title">부종</h3>
              <p className="ede-compare__col-desc">수분의 정체</p>
            </div>

            {/* 중앙: ≠ 기호 */}
            <div className="ede-compare__symbol" aria-hidden="true">
              <Image
                src={`${ASSET_PATH}/compare-not-equal.png`}
                alt="같지 않음 기호"
                width={100}
                height={95}
                unoptimized
              />
            </div>

            {/* 우측: 비만 */}
            <div className="ede-compare__col">
              <div className="ede-compare__circle">
                <Image
                  src={`${ASSET_PATH}/compare-obesity.png`}
                  alt="비만 지방조직의 증가 일러스트"
                  width={451}
                  height={451}
                  unoptimized
                />
              </div>
              <h3 className="ede-compare__col-title">비만</h3>
              <p className="ede-compare__col-desc">지방조직의 증가</p>
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 03] 한의학에서 바라보는 부종, 수독 (Figma 410:617)
        ============================================================== */}
        <section className="ede-water-toxin" aria-label="한의학에서 바라보는 부종, 수독">
          <h2 className="ede-water-toxin__title">
            <span className="ede-water-toxin__title-light">한의학에서 바라보는 부종,</span>
            <strong className="ede-water-toxin__title-accent">‘수독(水毒)’</strong>
          </h2>
          <p className="ede-water-toxin__desc-1">
            {'단, 여기서의 부종은 특별한 검사상의 이상도 없고 병명이 나오지 않는 붓기입니다.\n한의학에서의 부종은 단순히 수분이 고여있는 것이 아니라\n장부 기능 저하에 따른 수액 대사가 원활하지 못하여 발생하는 수독(水毒)이라고 보고 있습니다.'}
          </p>
          <p className="ede-water-toxin__desc-2">
            {'수독은 대체로 하체로 몰려 냉기(冷氣)를 동반하기 쉽습니다.\n이러한 냉기는 허리 이하, 골반 내 장기의 순환장애를 유발하여 여러 불편으로 이어질 수 있습니다.'}
          </p>

          <div className="ede-water-toxin__grid">
            {SYMPTOMS.map((item) => (
              <div key={item.id} className="ede-symptom-card">
                <div className="ede-symptom-card__circle">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={280}
                    height={280}
                    unoptimized
                  />
                </div>
                <p className="ede-symptom-card__label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================
            [섹션 04] 붓기 관리 (Figma 413:700)
        ============================================================== */}
        <section className="ede-management" aria-label="붓기 관리">
          <h2 className="ede-management__title">
            <span className="ede-management__title-light">붓기, 단순히 빼는 것만이</span>
            <strong className="ede-management__title-bold">답은 아닙니다</strong>
          </h2>
          <p className="ede-management__desc">
            {'일시적으로 붓기가 빨리 제거되는 듯하나 혈액의 볼륨이 줄어들고, 대체로 신장에\n무리가 가게 되므로 부종을 유발하는 근본적인 원인을 찾아 해결해주는 것이 좋습니다.'}
          </p>

          <div className="ede-management__bar">
            <div className="ede-management__badge">Check Point</div>
            <p className="ede-management__text">
              부종은 이뇨제를 써서 소변을 통해 제거하는 것은 건강에 해롭습니다.
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 05] 부종형 비만 체크리스트 (Figma 413:722)
        ============================================================== */}
        <section className="ede-checklist-sec" aria-label="부종형 비만 체크리스트">
          <h2 className="ede-checklist-sec__title">부종형 비만 체크리스트</h2>
          <p className="ede-checklist-sec__sub">
            최근 2~4주간 자주 나타나는 증상을 기준으로 체크해보세요.
          </p>

          <EdemaChecklist />
        </section>

        {/* ==============================================================
            [섹션 06] 내 몸에 맞춘 부종 치료 (Figma 413:764)
        ============================================================== */}
        <section className="ede-treatments" aria-label="내 몸에 맞춘 부종 치료">
          <h2 className="ede-treatments__title">
            <span className="ede-treatments__title-light">내 몸에 맞춘 </span>
            <strong className="ede-treatments__title-bold">부종 치료</strong>
          </h2>
          <p className="ede-treatments__sub">
            환자의 체질, 나이, 몸 상태에 따라 맞춤 치료를 진행하게 됩니다.
          </p>

          <div className="ede-treatments__list">
            {TREATMENTS.map((item) => (
              <div key={item.id} className="ede-treatment-card">
                <div className="ede-treatment-card__photo">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={565}
                    height={395}
                    unoptimized
                  />
                </div>
                <div className="ede-treatment-card__info">
                  <h3 className="ede-treatment-card__title">{item.title}</h3>
                  <p className="ede-treatment-card__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
