import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import PediatricChecklist from './PediatricChecklist';
import './pediatric.css';
import '../../_shared/detail-page-scale.css';

export const metadata: Metadata = {
  title: '소아/청소년 비만 | 진한의원',
  description: '성장까지 생각한 체중 관리. 소아비만 원인 분석부터 담음과 적취 개선, 성장 한약재 처방까지 진한의원 소아/청소년 맞춤 한방 관리 안내.',
};

const ASSET_PATH = '/images/custom-diet/pediatric';

interface HealthRiskItem {
  id: number;
  label: string;
  img: string;
  alt: string;
  theme: 'navy' | 'blue';
}

const HEALTH_RISKS: HealthRiskItem[] = [
  { id: 1, label: '이상지질혈증', img: `${ASSET_PATH}/risk-1-dyslipidemia.png`, alt: '이상지질혈증', theme: 'navy' },
  { id: 2, label: '당뇨병', img: `${ASSET_PATH}/risk-2-diabetes.png`, alt: '당뇨병', theme: 'blue' },
  { id: 3, label: '지방간', img: `${ASSET_PATH}/risk-3-fatty-liver.png`, alt: '지방간', theme: 'navy' },
  { id: 4, label: '고혈압', img: `${ASSET_PATH}/risk-4-hypertension.png`, alt: '고혈압', theme: 'blue' },
  { id: 5, label: '수면 장애', img: `${ASSET_PATH}/risk-5-sleep.png`, alt: '수면 장애', theme: 'navy' },
  { id: 6, label: '골연령 증가 및\n성조숙증', img: `${ASSET_PATH}/risk-6-precocious-puberty.png`, alt: '골연령 증가 및 성조숙증', theme: 'blue' },
  { id: 7, label: '다낭성\n난소 증후군', img: `${ASSET_PATH}/risk-7-pcos.png`, alt: '다낭성 난소 증후군', theme: 'navy' },
  { id: 8, label: '동맥경화', img: `${ASSET_PATH}/risk-8-atherosclerosis.png`, alt: '동맥경화', theme: 'blue' },
  { id: 9, label: '관절 이상', img: `${ASSET_PATH}/risk-9-joint.png`, alt: '관절 이상', theme: 'navy' },
  { id: 10, label: '심리적 문제', img: `${ASSET_PATH}/risk-10-psychological.png`, alt: '심리적 문제', theme: 'blue' },
];

export default function PediatricPage() {
  return (
    <div className="ped-page">
      <div className="ped-page__content">
        {/* ==============================================================
            [상단 서브 헤딩 & 구분선]
            Figma 426:448 & 426:447 (NanumMyeongjo 400, 40px, Line 11 1px)
        ============================================================== */}
        <header className="ped-page__heading">
          <h1>소아/청소년 비만</h1>
          <Image
            className="ped-page__divider"
            src="/images/diet-medicine/slim/top-divider.svg"
            alt=""
            width={1440}
            height={1}
            unoptimized
          />
        </header>

        {/* ==============================================================
            [섹션 01] 메인 히어로 배너 (Figma 426:333 "상단" - 1440px x 588px)
        ============================================================== */}
        <section className="ped-hero" aria-label="소아/청소년 비만 메인 배너">
          <div className="ped-hero__photo">
            <Image
              src={`${ASSET_PATH}/hero-logo.png`}
              alt="진한의원 로고"
              width={310}
              height={104}
              className="ped-hero__logo"
              priority
              unoptimized
            />
            <Image
              src={`${ASSET_PATH}/hero-photo.png`}
              alt="대표원장 소아/청소년 진료 촬영"
              width={852}
              height={588}
              className="ped-hero__photo-img"
              priority
              unoptimized
            />
          </div>
          <div className="ped-hero__panel">
            <p className="ped-hero__sub">성장까지 생각한 체중 관리</p>
            <h2 className="ped-hero__title">
              {'소아/청소년 '}
              <span>비만</span>
            </h2>
            <p className="ped-hero__desc">
              {'소아비만은 단순히 외모에만 영향을 미치는 것이\n아니라 자신감 결여 등 심리적 위축을 유발하고,\n성조숙증 등 전반적인 성장 환경에도 부정적인\n영향을 미칩니다. 소아비만 환자의 80%가 성인\n비만으로 이어질 확률이 있으며, 비만도가\n높을수록 2차 성징이 빨라져 키가 10~20cm\n덜 자랄 수 있습니다.'}
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 02] 어릴 때 찐 살, 정말 다 키로 갈까요? (Figma 426:342)
        ============================================================== */}
        <section className="ped-intro" aria-label="어릴 때 찐 살, 정말 다 키로 갈까요?">
          <h2 className="ped-intro__title">
            <span className="ped-intro__title-light">어릴 때 찐 살,</span>
            <strong className="ped-intro__title-bold">정말 다 키로 갈까요?</strong>
          </h2>
          <p className="ped-intro__desc-1">
            어릴 때 찐 살은 다 키로 간다는 말 한번쯤은 들어보셨을텐데요.
          </p>
          <p className="ped-intro__desc-2">
            {'이 말은 음식을 골고루 잘 먹어 튼튼하게 키가 잘 자란다는 뜻이지,\n평균보다 체중이 많이 나가는 소아비만을 방치해도 된다는 뜻은 절대 아닙니다.'}
          </p>
          <p className="ped-intro__desc-3">
            {'소아비만이 될수록 건강에 위협이 되며, 관절에도 무리가 가고\n2차 성징을 앞당겨 성조숙증을 유발하여 오히려 성장에 방해가 될 수 있습니다.'}
          </p>

          <div className="ped-intro__callout">
            <h3 className="ped-intro__callout-title">소아비만이란?</h3>
            <p className="ped-intro__callout-desc">
              {'표준 체중보다 20% 이상 체중이 더 나가는 상태를 말하며, 과도한 섭취가 있거나\n운동량이 부족한 경우에 발생됩니다.'}
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 03] 성인비만 vs 소아비만 세포수 비교 (Figma 427:482)
        ============================================================== */}
        <section className="ped-compare" aria-label="성인비만과 소아비만의 지방세포 비교">
          <h2 className="ped-compare__title">
            <span className="ped-compare__title-light">소아비만은</span>
            <strong className="ped-compare__title-bold">지방세포의 ‘수’까지 늘어납니다</strong>
          </h2>
          <p className="ped-compare__desc">
            {'성인은 살이 쪄도 지방세포의 크기가 늘어나는 반면,\n소아는 지방 세포수도 같이 늘어나기 때문에 비만 체질로 고착화되기 쉽고\n성인이 되었을 때 중등도 이상의 고도비만이 될 확률이 더욱 높아집니다.'}
          </p>

          <div className="ped-compare__diagram">
            {/* 왼쪽: 성인비만 도식 */}
            <div className="ped-compare__col">
              <div className="ped-compare__flow">
                <div className="ped-compare__cell-wrap">
                  <div className="ped-compare__pointer">
                    <svg className="ped-compare__pointer-svg" width="72" height="45" viewBox="0 0 72 45" fill="none" aria-hidden="true">
                      <path d="M0.5 44.5L24.5 0.5H71.5" stroke="#161616" strokeWidth="1" />
                    </svg>
                    <span className="ped-compare__pointer-label">지방세포</span>
                  </div>
                  <Image
                    src={`${ASSET_PATH}/fat-cell-small.png`}
                    alt="초기 지방세포"
                    width={152}
                    height={171}
                    unoptimized
                  />
                </div>
                <Image
                  src={`${ASSET_PATH}/arrow-right.png`}
                  alt="진행"
                  width={55}
                  height={49}
                  className="ped-compare__arrow"
                  unoptimized
                />
                <Image
                  src={`${ASSET_PATH}/fat-cell-adult-large.png`}
                  alt="성인비만 비대해진 지방세포"
                  width={311}
                  height={298}
                  unoptimized
                />
              </div>
              <div className="ped-compare__badge ped-compare__badge--adult">
                성인비만
              </div>
            </div>

            {/* 오른쪽: 소아비만 도식 */}
            <div className="ped-compare__col">
              <div className="ped-compare__flow">
                <div className="ped-compare__cell-wrap">
                  <div className="ped-compare__pointer">
                    <svg className="ped-compare__pointer-svg" width="72" height="45" viewBox="0 0 72 45" fill="none" aria-hidden="true">
                      <path d="M0.5 44.5L24.5 0.5H71.5" stroke="#161616" strokeWidth="1" />
                    </svg>
                    <span className="ped-compare__pointer-label">지방세포</span>
                  </div>
                  <Image
                    src={`${ASSET_PATH}/fat-cell-small.png`}
                    alt="초기 지방세포"
                    width={153}
                    height={171}
                    unoptimized
                  />
                </div>
                <Image
                  src={`${ASSET_PATH}/arrow-right.png`}
                  alt="진행"
                  width={55}
                  height={49}
                  className="ped-compare__arrow"
                  unoptimized
                />
                <Image
                  src={`${ASSET_PATH}/fat-cell-pediatric-cluster.png`}
                  alt="소아비만 증식된 지방세포 군집"
                  width={348}
                  height={371}
                  unoptimized
                />
              </div>
              <div className="ped-compare__badge ped-compare__badge--child">
                소아비만
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 04] 소아비만의 원인 알아보기 (Figma 429:2)
        ============================================================== */}
        <section className="ped-causes" aria-label="소아비만의 원인 알아보기">
          <h2 className="ped-causes__title">
            <span className="ped-causes__title-light">소아비만의 원인 </span>
            <strong className="ped-causes__title-bold">알아보기</strong>
          </h2>

          <div className="ped-causes__grid">
            {/* 카드 01 */}
            <div className="ped-cause-card">
              <div className="ped-cause-card__img">
                <Image
                  src={`${ASSET_PATH}/cause-1-overeating.png`}
                  alt="편식 잦은 과식 일러스트"
                  width={411}
                  height={411}
                  unoptimized
                />
              </div>
              <span className="ped-cause-card__point">POINT 01</span>
              <h3 className="ped-cause-card__title">편식·잦은 과식</h3>
              <p className="ped-cause-card__desc">
                {'편식, 잦은 과식 등 잘못된 식습관이나\n장기간의 열량섭취 과다로 인한 경우'}
              </p>
            </div>

            {/* 카드 02 */}
            <div className="ped-cause-card">
              <div className="ped-cause-card__img">
                <Image
                  src={`${ASSET_PATH}/cause-2-genetic.png`}
                  alt="유전적인 요인 일러스트"
                  width={362}
                  height={362}
                  unoptimized
                />
              </div>
              <span className="ped-cause-card__point">POINT 02</span>
              <h3 className="ped-cause-card__title">유전적인 요인</h3>
              <p className="ped-cause-card__desc">
                {'부모 모두가 비만일 경우 확률 80%\n한쪽 부모가 비만일 경우 확률 40%'}
              </p>
            </div>

            {/* 카드 03 */}
            <div className="ped-cause-card">
              <div className="ped-cause-card__img">
                <Image
                  src={`${ASSET_PATH}/cause-3-food-env.png`}
                  alt="식욕이 자극되는 환경 일러스트"
                  width={380}
                  height={380}
                  unoptimized
                />
              </div>
              <span className="ped-cause-card__point">POINT 03</span>
              <h3 className="ped-cause-card__title">식욕이 자극되는 환경</h3>
              <p className="ped-cause-card__desc">
                {'먹방, 배달음식 등 식욕이\n자극되는 환경이 비만에 영향을 끼침'}
              </p>
            </div>

            {/* 카드 04 */}
            <div className="ped-cause-card">
              <div className="ped-cause-card__img">
                <Image
                  src={`${ASSET_PATH}/cause-4-inactivity.png`}
                  alt="부족한 신체활동 일러스트"
                  width={423}
                  height={423}
                  unoptimized
                />
              </div>
              <span className="ped-cause-card__point">POINT 04</span>
              <h3 className="ped-cause-card__title">부족한 신체활동</h3>
              <p className="ped-cause-card__desc">
                {'집안에 머무르는 시간이 많고 신체활동 시간이\n적은 경우 비만으로 갈 경우가 높음'}
              </p>
            </div>
          </div>

          <div className="ped-causes__footer-text">
            <p className="ped-causes__desc-1">
              {'양쪽 부모가 정상체중일 때 자녀가 소아비만이 될 확률은 5% 전후이나,\n한쪽 부모가 비만이면 40~50%, 양쪽 부모가 비만일 경우 80%까지 올라가게 됩니다.'}
            </p>
            <p className="ped-causes__desc-2">
              <strong>하지만 선천적 체질적 요인보다 환경적 요인이 더 중요합니다.</strong>
              {'\n가족끼리 식사 습관이 유사해지면서 고칼로리 음식, 간식이나 밀가루 음식,\n야식을 즐기는 환경적 요인이 더 크다고 알려져 있습니다.'}
            </p>
            <p className="ped-causes__desc-3">
              {'또 학동기가 되면 친구들과 편의점, 매점 등을 자주 이용하고, 앉아있는 시간이 늘어나고\n운동은 부족해지면서 칼로리 섭취량 대비 소비량이 줄어들어 체중이 점점 더 늘어나게 됩니다.'}
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 05] 소아비만 건강 문제 10가지 (Figma 430:57)
        ============================================================== */}
        <section className="ped-risks" aria-label="소아비만으로 나타날 수 있는 다양한 건강 문제">
          <h2 className="ped-risks__title">
            <span className="ped-risks__title-light">소아비만으로 나타날 수 있는</span>
            <strong className="ped-risks__title-bold">다양한 건강 문제</strong>
          </h2>

          <div className="ped-risks__grid">
            {HEALTH_RISKS.map(item => (
              <div key={item.id} className="ped-risk-item">
                <div className={`ped-risk-item__circle ped-risk-item__circle--${item.theme}`}>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={215}
                    height={215}
                    unoptimized
                  />
                </div>
                <p className="ped-risk-item__label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================
            [섹션 06] 소아비만 증상 체크리스트 (Figma 431:141)
        ============================================================== */}
        <section className="ped-checklist-sec" aria-label="소아비만 증상 스스로 체크해보세요">
          <h2 className="ped-checklist-sec__title">
            <span className="ped-checklist-sec__title-light">소아비만 증상</span>
            <strong className="ped-checklist-sec__title-bold">스스로 체크해보세요</strong>
          </h2>

          <PediatricChecklist />
        </section>

        {/* ==============================================================
            [섹션 07] 성장기 체중 감량 (Figma 431:158)
        ============================================================== */}
        <section className="ped-slow-loss" aria-label="성장기 체중 감량, 빠르게보다 천천히">
          <h2 className="ped-slow-loss__title">
            <span className="ped-slow-loss__title-light">성장기 체중 감량,</span>
            <strong className="ped-slow-loss__title-bold">빠르게보다 천천히</strong>
          </h2>
          <p className="ped-slow-loss__desc-1">
            {'소아비만의 경우 체중감량이 필요하지만 성장기에 놓여있기 때문에\n단시간에 무리하게 급격한 감량을 하기보다\n'}
            <strong>한달에 2~3킬로 정도</strong>
            {'씩 장기간에 걸쳐 서서히 감량하는 것이 좋습니다.'}
          </p>
          <p className="ped-slow-loss__desc-2">
            {'무엇보다 '}
            <strong>식사와 생활습관의 개선</strong>
            {'이 제일 중요하겠지만, 어느 정도 이상\n살이 찌고 식사습관이 고착화되면 100% 의지로만 감량하는 것이 쉽지 않습니다.\n경우에 따라 '}
            <strong>약물 요법을 같이 병행</strong>
            {'하는 것이 필요합니다.'}
          </p>
        </section>

        {/* ==============================================================
            [섹션 08] 체질에 맞춘 소아비만 한방 관리 (Figma 431:178)
        ============================================================== */}
        <section className="ped-constitution" aria-label="체질에 맞춘 소아비만 한방 관리">
          <h2 className="ped-constitution__title">
            <span className="ped-constitution__title-light">체질에 맞춘</span>
            <strong className="ped-constitution__title-bold">소아비만 한방 관리</strong>
          </h2>
          <p className="ped-constitution__desc">
            {'원래 다이어트 한약은 태음인이나 소양인처럼 위장이 크고 식욕이 왕성하면서도\n신진대사율이 떨어져서 살이 잘 찌고 잘 붓는 체질 치료처방에서 발전했기 때문에,\n개인의 체질, 체력, 건강 상태에 맞게 처방받는다면\n'}
            <strong>체중 감량 뿐만 아니라 평소 갖고 있는 불편증상들도 같이 개선</strong>
            {'될 수 있습니다.'}
          </p>
        </section>

        {/* ==============================================================
            [섹션 09] 한의학에서 보는 소아비만, 담음과 적취 (Figma 426:359)
        ============================================================== */}
        <section className="ped-dampness" aria-label="한의학에서 보는 소아비만, 담음과 적취">
          <h2 className="ped-dampness__title">
            <span className="ped-dampness__title-light">한의학에서 보는 소아비만,</span>
            <strong className="ped-dampness__title-accent">담음과 적취</strong>
          </h2>
          <p className="ped-dampness__desc-1">
            {'한의학에서는 소아가 비만한 원인을 지방이 쌓이는 문제로만 보기보다는\n담음(痰飮)과 적취(積聚)의 관점에서 살펴봅니다.'}
          </p>
          <p className="ped-dampness__desc-2">
            {'기혈순환 장애로 몸속에 남아 있는 체지방이나 수분 등이 원활하게\n배출되지 않고 정체되어 있으면 노폐물이 되고,\n이러한 수분이 뭉쳐 담습이 되고 담습과 혈액이 뒤엉켜 어혈로 이어질 수 있습니다.'}
          </p>

          <div className="ped-dampness__flow-area">
            <div className="ped-dampness__bars">
              <div className="ped-damp-bar">
                <span className="ped-damp-bar__num">01</span>
                <span className="ped-damp-bar__text">체지방·수분 정체</span>
              </div>
              <div className="ped-damp-bar">
                <span className="ped-damp-bar__num">02</span>
                <span className="ped-damp-bar__text">노폐물 축적</span>
              </div>
              <div className="ped-damp-bar">
                <span className="ped-damp-bar__num">03</span>
                <span className="ped-damp-bar__text">담습·어혈 발생</span>
              </div>
            </div>

            <div className="ped-dampness__child-circle" />
            <div className="ped-dampness__child-wrap">
              <Image
                src={`${ASSET_PATH}/dampness-child.png`}
                alt="배를 만지는 통통한 어린이 일러스트"
                width={389}
                height={352}
                className="ped-dampness__child-img"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 10] 소아비만 한방 관리의 핵심 (Figma 431:227)
        ============================================================== */}
        <section className="ped-core" aria-label="소아비만 한방 관리의 핵심">
          <h2 className="ped-core__title">
            <span className="ped-core__title-light">소아비만 한방 관리의 </span>
            <strong className="ped-core__title-bold">핵심</strong>
          </h2>
          <p className="ped-core__desc-1">
            {'진한의원에서는 아이의 체질과 평소 생활습관 등을 파악하여\n'}
            <strong>{'한약처방을 통해 체내에 쌓인 노폐물을 배출하고 자연스럽게 식욕이\n억제'}</strong>
            {'되도록 하며 무너진 몸의 밸런스를 바로잡습니다.'}
          </p>
          <p className="ped-core__desc-2">
            {'엄선한 청정한약재로 처방한 한약을 통해 면역계를 활성화하고\n'}
            <strong>체지방을 연소하고 에너지 대사를 활성화하여서 기초대사량을 증진</strong>
            {'합니다.\n식이조절과 식욕억제를 돕고 대사량을 높입니다.'}
          </p>

          <div className="ped-core__grid">
            {/* 카드 01 */}
            <div className="ped-core-card">
              <div className="ped-core-card__img">
                <Image
                  src={`${ASSET_PATH}/point-1-waste.png`}
                  alt="불필요한 노폐물 배출 일러스트"
                  width={299}
                  height={299}
                  unoptimized
                />
              </div>
              <div className="ped-core-card__info">
                <span className="ped-core-card__point">POINT 01</span>
                <h3 className="ped-core-card__title">불필요한 노폐물 배출</h3>
              </div>
            </div>

            {/* 카드 02 */}
            <div className="ped-core-card">
              <div className="ped-core-card__img">
                <Image
                  src={`${ASSET_PATH}/point-2-metabolism.png`}
                  alt="신진대사율 상승 일러스트"
                  width={289}
                  height={289}
                  unoptimized
                />
              </div>
              <div className="ped-core-card__info">
                <span className="ped-core-card__point">POINT 02</span>
                <h3 className="ped-core-card__title">신진대사율 상승</h3>
              </div>
            </div>

            {/* 카드 03 */}
            <div className="ped-core-card">
              <div className="ped-core-card__img">
                <Image
                  src={`${ASSET_PATH}/point-3-bmr.png`}
                  alt="기초대사량 증가 일러스트"
                  width={293}
                  height={293}
                  unoptimized
                />
              </div>
              <div className="ped-core-card__info">
                <span className="ped-core-card__point">POINT 03</span>
                <h3 className="ped-core-card__title">기초대사량 증가</h3>
              </div>
            </div>

            {/* 카드 04 */}
            <div className="ped-core-card">
              <div className="ped-core-card__img">
                <Image
                  src={`${ASSET_PATH}/point-4-appetite.png`}
                  alt="식이조절 및 식욕억제 일러스트"
                  width={227}
                  height={227}
                  unoptimized
                />
              </div>
              <div className="ped-core-card__info">
                <span className="ped-core-card__point">POINT 04</span>
                <h3 className="ped-core-card__title">식이조절/식욕억제</h3>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 11] 체질과 성장까지 고려 (Figma 432:257)
        ============================================================== */}
        <section className="ped-herbs" aria-label="체질과 성장까지 함께 고려하는 한방 치료">
          <h2 className="ped-herbs__title">
            <span className="ped-herbs__title-light">단순한 식욕 억제가 아닌,</span>
            <strong className="ped-herbs__title-bold">체질과 성장까지 함께 고려합니다</strong>
          </h2>
          <p className="ped-herbs__desc-1">
            {'단순하게 식욕만 억제하는 것이 아니라 잘못된 식습관으로 인해\n쌓인 노폐물을 배출하고 신진대사율을 올려 지방을 잘 태우는 체질로 개선합니다.\n오랜 시간 과식과 폭식으로 늘어나 커져버린\n위장을 줄여서 나중에는 스스로 소식할 수 있도록 도와줍니다.'}
          </p>
          <p className="ped-herbs__desc-2">
            {'그와 더불어 성장을 도와주는 한약재 녹용, 우슬, 오가피, 속단 등을 체질에 맞게 같이 처방해드립니다.'}
          </p>

          <div className="ped-herbs__badge">
            성장을 도와주는 한약재
          </div>

          <div className="ped-herbs__grid">
            {/* 한약재 1: 녹용 */}
            <div className="ped-herb-card">
              <div className="ped-herb-card__photo">
                <Image
                  src={`${ASSET_PATH}/herb-1-deer-antler.png`}
                  alt="성장 한약재 녹용"
                  width={560}
                  height={394}
                  unoptimized
                />
              </div>
              <h3 className="ped-herb-card__name">녹용</h3>
            </div>

            {/* 한약재 2: 우슬 */}
            <div className="ped-herb-card">
              <div className="ped-herb-card__photo">
                <Image
                  src={`${ASSET_PATH}/herb-2-achyranthes.png`}
                  alt="성장 한약재 우슬"
                  width={560}
                  height={394}
                  unoptimized
                />
              </div>
              <h3 className="ped-herb-card__name">우슬</h3>
            </div>

            {/* 한약재 3: 오가피 */}
            <div className="ped-herb-card">
              <div className="ped-herb-card__photo">
                <Image
                  src={`${ASSET_PATH}/herb-3-acanthopanax.png`}
                  alt="성장 한약재 오가피"
                  width={560}
                  height={394}
                  unoptimized
                />
              </div>
              <h3 className="ped-herb-card__name">오가피</h3>
            </div>

            {/* 한약재 4: 속단 */}
            <div className="ped-herb-card">
              <div className="ped-herb-card__photo">
                <Image
                  src={`${ASSET_PATH}/herb-4-dipsacus.png`}
                  alt="성장 한약재 속단"
                  width={560}
                  height={394}
                  unoptimized
                />
              </div>
              <h3 className="ped-herb-card__name">속단</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
