import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import SelfTestGrid from './SelfTestGrid';
import './chronic-inflammation.css';

export const metadata: Metadata = {
  title: '만성염증형 비만 | 진한의원',
  description: '몸속에 쌓인 만성 염증 관리. 체지방 증가와 부종, 혈당 스파이크와 장누수에서 시작되는 만성 염증형 비만을 위한 진한의원 맞춤 한방 관리 안내.',
};

const ASSET_PATH = '/images/custom-diet/chronic-inflammation';

export default function ChronicInflammationPage() {
  return (
    <div className="ci-page">
      <div className="ci-page__content">
        {/* ==============================================================
            [상단 서브 헤딩 & 구분선]
            Figma 420:161 & 420:160 (NanumMyeongjo 400, 40px, Line 11 1px)
        ============================================================== */}
        <header className="ci-page__heading">
          <h1>만성염증형 비만</h1>
          <div className="ci-page__divider" />
        </header>

        {/* ==============================================================
            [섹션 01] 메인 히어로 배너 (Figma 420:46 "상단" - 1440px x 588px)
        ============================================================== */}
        <section className="ci-hero" aria-label="만성 염증형 비만 메인 배너">
          <div className="ci-hero__photo">
            <Image
              src={`${ASSET_PATH}/hero-logo.png`}
              alt="진한의원 로고"
              width={310}
              height={104}
              className="ci-hero__logo"
              priority
              unoptimized
            />
            <Image
              src={`${ASSET_PATH}/hero-photo.png`}
              alt="만성 염증 세포 반응"
              width={852}
              height={588}
              className="ci-hero__photo-img"
              priority
              unoptimized
            />
          </div>
          <div className="ci-hero__panel">
            <p className="ci-hero__sub">몸속에 쌓인 만성 염증 관리</p>
            <h2 className="ci-hero__title">
              만성 염증형 <span>비만</span>
            </h2>
            <p className="ci-hero__desc">
              {'최근 좋지 않은 식습관과 스트레스, 과로 등으로\n몸속 염증성 물질이 과도하게 쌓이면 해독·배설\n능력을 넘어 만성 염증으로 이어질 수 있습니다.\n이로 인해 체지방 증가와 부종이 나타나\n체중 감량이 어려워질 수 있으며, 인슐린 저항성과\n지방대사 이상과도 연관됩니다.'}
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 02] 자가 테스트 (Figma 420:55 "2" - 1440px x 2014px)
        ============================================================== */}
        <section className="ci-test" aria-label="염증성 비만 자가 테스트">
          <h2 className="ci-test__title">
            <span className="ci-test__title-light">나도 혹시?</span>
            <strong className="ci-test__title-bold">염증성 비만 자가 테스트</strong>
          </h2>
          <p className="ci-test__sub">아래 항목에 해당되시나요? 체크해보세요!</p>

          {/* 대화형 자가 테스트 체크리스트 카드 그리드 */}
          <SelfTestGrid />

          {/* 하단 안내 문구 */}
          <div className="ci-test__notice">
            <h3 className="ci-test__notice-title">
              체크 항목이 많을수록 염증성 비만을 의심해볼 수 있습니다.
            </h3>
            <p className="ci-test__notice-desc">
              {'개인의 생활습관, 체질, 건강 상태에 따라\n차이가 있을 수 있으니, 정확한 상담을 통해 맞춤 관리가 필요합니다.'}
            </p>
          </div>

          {/* Check Point */}
          <div className="ci-test__checkpoint">
            <div className="ci-test__checkpoint-bar">
              <div className="ci-test__checkpoint-badge">Check Point</div>
              <div className="ci-test__checkpoint-line" />
            </div>
            <div className="ci-test__checkpoint-items">
              <p className="ci-test__checkpoint-item ci-test__checkpoint-item--normal">
                ㆍ최근 1~3개월간 해당되는 항목이 많다면 체내에 만성 염증이 있을 확률이 높습니다.
              </p>
              <p className="ci-test__checkpoint-item ci-test__checkpoint-item--highlight">
                ㆍ더불어 허리둘레, 혈압, 공복혈당, HbA1c, 중성 지방 등의 객관적인 지표를 함께 확인하는 것이 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 03] 혈당에서 시작되는 만성 염증의 악순환 (Figma 420:101 "3")
        ============================================================== */}
        <section className="ci-cycle" aria-label="혈당에서 시작되는 만성 염증의 악순환">
          <h2 className="ci-cycle__title">
            <span className="ci-cycle__title-light">혈당에서 시작되는</span>
            <strong className="ci-cycle__title-bold">만성 염증의 악순환</strong>
          </h2>
          <p className="ci-cycle__desc-1">
            {'혈당을 급격하게 올리는 음식을 먹을수록\n최종당화산물(AGEs, 최종변성물질)이 만들어지고, 장점막 구조를 손상시켜\n장누수 증후군(Leaky Gut Syndrome)을 유발합니다.\n이때 제대로 소화되지 않은 음식, 독소, 염증 물질이 장내로 많이 침투하면서\n면역계가 과작동하여 만성 염증 상태에 놓이게 됩니다.'}
          </p>
          <p className="ci-cycle__desc-2">
            {'또한 간의 해독 과정도 떨어지면 전신 혈관을 타고 돌며 신체 곳곳에\n미세한 염증 반응을 지속적으로 일으키고, 산화 스트레스가 많이 생기게 됩니다.'}
          </p>

          <p className="ci-cycle__step-badge">고혈당, 정제당 섭취 후</p>

          {/* 4단계 인포그래픽 카드 열 */}
          <div className="ci-cycle__row">
            {/* 1단계: 당화 */}
            <div className="ci-cycle-card">
              <div className="ci-cycle-card__header ci-cycle-card__header--navy">
                <h3 className="ci-cycle-card__title">당화</h3>
                <p className="ci-cycle-card__sub">AGEs, 최종당화산물</p>
              </div>
              <div className="ci-cycle-card__body">
                <div className="ci-cycle-card__img">
                  <Image
                    src={`${ASSET_PATH}/cycle-1-glycation.png`}
                    alt="당화 반응 일러스트"
                    width={268}
                    height={268}
                    unoptimized
                  />
                </div>
                <p className="ci-cycle-card__desc">
                  {'과도한 당이 혈액 속\n단백질과 결합해 노화를 촉진\n하는 유해물질이 생성됩니다.'}
                </p>
                <div className="ci-cycle-card__line" />
                <p className="ci-cycle-card__bullets">
                  {'ㆍ피부 탄력 저하, 주름 저하\nㆍ혈관 손상, 대사 기능 저하\nㆍ염증 반응 촉진'}
                </p>
              </div>
            </div>

            {/* 화살표 1 */}
            <div className="ci-cycle__arrow">
              <Image
                src={`${ASSET_PATH}/arrow-right.png`}
                alt="다음 단계"
                width={40}
                height={36}
                unoptimized
              />
            </div>

            {/* 2단계: 장누수증후군 */}
            <div className="ci-cycle-card">
              <div className="ci-cycle-card__header ci-cycle-card__header--blue">
                <h3 className="ci-cycle-card__title">장누수증후군</h3>
                <p className="ci-cycle-card__sub">새는 장, Leaky Gut</p>
              </div>
              <div className="ci-cycle-card__body">
                <div className="ci-cycle-card__img">
                  <Image
                    src={`${ASSET_PATH}/cycle-2-leaky-gut.png`}
                    alt="장누수 증후군 일러스트"
                    width={266}
                    height={266}
                    unoptimized
                  />
                </div>
                <p className="ci-cycle-card__desc">
                  {'장 점막이 손상되어 유해\n물질이 혈액으로 들어가 전신에\n염증반응을 일으킵니다.'}
                </p>
                <div className="ci-cycle-card__line" />
                <p className="ci-cycle-card__bullets">
                  {'ㆍ유해물질의 체내 유입\nㆍ면역 과민반응\nㆍ복부팽만, 소화장애'}
                </p>
              </div>
            </div>

            {/* 화살표 2 */}
            <div className="ci-cycle__arrow">
              <Image
                src={`${ASSET_PATH}/arrow-right.png`}
                alt="다음 단계"
                width={40}
                height={36}
                unoptimized
              />
            </div>

            {/* 3단계: 만성 염증 */}
            <div className="ci-cycle-card">
              <div
                className="ci-cycle-card__header ci-cycle-card__header--navy"
                style={{ justifyContent: 'center' }}
              >
                <h3 className="ci-cycle-card__title" style={{ lineHeight: '109px' }}>
                  만성 염증
                </h3>
              </div>
              <div className="ci-cycle-card__body">
                <div className="ci-cycle-card__img">
                  <Image
                    src={`${ASSET_PATH}/cycle-3-chronic-inflammation.png`}
                    alt="만성 염증 일러스트"
                    width={325}
                    height={325}
                    unoptimized
                  />
                </div>
                <p className="ci-cycle-card__desc ci-cycle-card__desc--inflammation">
                  {'당화, 산화, 장누수로 염증 반응이\n지속되며 지방이 쉽게 쌓이고\n대사가 둔화되는 상태입니다.'}
                </p>
                <div className="ci-cycle-card__line" />
                <p className="ci-cycle-card__bullets">
                  {'ㆍ지방축적 증가\nㆍ인슐린 저항성·대사기능 저하\nㆍ각종 질환 위험 증가'}
                </p>
              </div>
            </div>

            {/* 화살표 3 */}
            <div className="ci-cycle__arrow">
              <Image
                src={`${ASSET_PATH}/arrow-right.png`}
                alt="다음 단계"
                width={40}
                height={36}
                unoptimized
              />
            </div>

            {/* 4단계: 산화 */}
            <div className="ci-cycle-card">
              <div className="ci-cycle-card__header ci-cycle-card__header--blue">
                <h3 className="ci-cycle-card__title">산화</h3>
                <p className="ci-cycle-card__sub">활성산소</p>
              </div>
              <div className="ci-cycle-card__body">
                <div className="ci-cycle-card__img">
                  <Image
                    src={`${ASSET_PATH}/cycle-4-oxidation.png`}
                    alt="활성산소 산화 반응 일러스트"
                    width={255}
                    height={255}
                    unoptimized
                  />
                </div>
                <p className="ci-cycle-card__desc ci-cycle-card__desc--oxidation">
                  {'스트레스, 불규칙한 생활, 과식\n등으로 활성산소가 증가해 세포가\n손상되고 염증이 유발됩니다.'}
                </p>
                <div className="ci-cycle-card__line" />
                <p className="ci-cycle-card__bullets">
                  {'ㆍ세포 손상 및 노화 가속\nㆍ지방세포 기능 이상\nㆍ만성염증의 원인'}
                </p>
              </div>
            </div>
          </div>

          {/* 반복되는 악순환 박스 */}
          <div className="ci-cycle__callout">
            <h3 className="ci-cycle__callout-title">반복되는 악순환</h3>
            <p className="ci-cycle__callout-desc">
              활성산소와 염증이 다시 당화 반응과 장 누수를 악화
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 04] 만성염증, 살이 찌기 쉬운 몸 (Figma 420:72 "4" - #083560)
        ============================================================== */}
        <section className="ci-result" aria-label="만성염증으로 살이 찌기 쉬운 몸의 변화">
          <h2 className="ci-result__title">
            <span className="ci-result__title-accent">만성염증, </span>
            <span className="ci-result__title-light">살이 찌기 쉬운 몸</span>
          </h2>

          <div className="ci-result__cards">
            {/* 카드 1: 몸에서 나타나는 변화 */}
            <div className="ci-result-card">
              <div className="ci-result-card__circle">
                <Image
                  src={`${ASSET_PATH}/result-1-body.png`}
                  alt="몸에서 나타나는 변화 일러스트"
                  width={330}
                  height={330}
                  unoptimized
                />
              </div>
              <h3 className="ci-result-card__title">몸에서 나타나는 변화</h3>
              <p className="ci-result-card__bullets">
                {'ㆍ복부비만(특히 내장지방 증가)\nㆍ체중 증가, 요요\nㆍ피로감, 무기력\nㆍ피부 트러블, 가려움'}
              </p>
            </div>

            {/* 카드 2: 건강 측면의 변화 */}
            <div className="ci-result-card">
              <div className="ci-result-card__circle">
                <Image
                  src={`${ASSET_PATH}/result-2-health.png`}
                  alt="건강 측면의 변화 일러스트"
                  width={330}
                  height={330}
                  unoptimized
                />
              </div>
              <h3 className="ci-result-card__title">건강 측면의 변화</h3>
              <p className="ci-result-card__bullets">
                {'ㆍ혈당, 혈압, 고지혈증 등 대사질환 위험\n    증가\nㆍ전신 건강 악화\nㆍ노화 가속화'}
              </p>
            </div>
          </div>

          <p className="ci-result__bottom-text">
            {'당화 · 산화 · 장누수 · 간 기능 저하는\n모두 연결되어 '}
            <strong>만성염증과 비만을 유발합니다.</strong>
          </p>
        </section>

        {/* ==============================================================
            [섹션 05] 만성 염증형 비만을 위한 한방 관리 (Figma 420:124 "5")
        ============================================================== */}
        <section className="ci-treatment" aria-label="만성 염증형 비만을 위한 한방 관리">
          <h2 className="ci-treatment__title">
            <span className="ci-treatment__title-light">만성 염증형 비만을 위한</span>
            <strong className="ci-treatment__title-bold">한방 관리</strong>
          </h2>
          <p className="ci-treatment__sub">
            환자의 체질, 나이, 몸 상태에 따라 맞춤 치료를 진행하게 됩니다.
          </p>

          <div className="ci-treatment__list">
            {/* 1. 해독탕 */}
            <div className="ci-treatment-row">
              <div className="ci-treatment-row__photo">
                <Image
                  src={`${ASSET_PATH}/treatment-1-detox.png`}
                  alt="해독탕 한약 치료"
                  width={565}
                  height={395}
                  unoptimized
                />
              </div>
              <div className="ci-treatment-row__content">
                <h3 className="ci-treatment-row__name">해독탕</h3>
                <p className="ci-treatment-row__desc">
                  {'소장해독과 쓸개해독에 효과가 좋으며 장벽에 붙은\n기름때를 배출해줍니다. 간해독에도 좋아 음주가\n있으시거나 요즘 들어 몸이 계속 피곤하다 느끼시는\n분들에게 추천 드립니다.'}
                </p>
              </div>
            </div>

            {/* 2. 수독환 */}
            <div className="ci-treatment-row">
              <div className="ci-treatment-row__photo">
                <Image
                  src={`${ASSET_PATH}/treatment-2-sudok.png`}
                  alt="수독환 한약 치료"
                  width={565}
                  height={395}
                  unoptimized
                />
              </div>
              <div className="ci-treatment-row__content">
                <h3 className="ci-treatment-row__name">수독환</h3>
                <p className="ci-treatment-row__desc">
                  {'몸의 잉여 수분을 빼주어 몸의 부종을 완화시키며 위를\n가볍게 만들어 소화 장애가 있으신 분들에게도 좋습니다.\n몸의 노폐물을 밖으로 빼주어 하루 복용하고 다음날이면\n가벼워진 몸을 느끼실 수 있습니다.'}
                </p>
              </div>
            </div>

            {/* 3. 배사라정 */}
            <div className="ci-treatment-row">
              <div className="ci-treatment-row__photo">
                <Image
                  src={`${ASSET_PATH}/treatment-3-baesara.png`}
                  alt="배사라정 한약 치료"
                  width={565}
                  height={395}
                  unoptimized
                />
              </div>
              <div className="ci-treatment-row__content">
                <h3 className="ci-treatment-row__name">배사라정</h3>
                <p className="ci-treatment-row__desc">
                  {'폭식·과식이나 잦은 회식으로 복부와\n몸이 무겁게 느껴지는 분들을 위한 한방 관리입니다.\n내장지방과 과식·과음 후 컨디션, 간 해독과 어혈,\n배변 상태까지 함께 살펴 몸이 가볍게 느껴질 수 있도록\n전반적인 균형 관리를 돕습니다.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
