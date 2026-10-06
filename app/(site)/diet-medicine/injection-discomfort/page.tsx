import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import './injection-page.css';
import '../../_shared/detail-page-scale.css';

export const metadata: Metadata = {
  title: '지방분해시술 | 진한의원',
  description: '셀룰라이트와 저항성 지방을 집중 관리하는 진한의원 지방분해 시술. 전기지방분해침, 체형매선, 지방분해약침, 샤인모드, 심부온열, 심부장기EMS 맞춤 안내.',
};

const ASSET_PATH = '/images/diet-medicine/injection-discomfort';

export default function InjectionDiscomfortPage() {
  return (
    <div className="inj-page">
      <div className="inj-page__content">
        {/* ==============================================================
            [상단 서브 헤딩]
            Figma 389:351 & 389:350 (NanumMyeongjo 400, 40px, Line 11 1px)
        ============================================================== */}
        <header className="inj-page__heading">
          <h1>지방분해시술</h1>
          <Image
            className="inj-page__divider"
            src="/images/diet-medicine/slim/top-divider.svg"
            alt=""
            width={1440}
            height={1}
            unoptimized
          />
        </header>

        {/* ==============================================================
            [섹션 0] 메인 히어로 배너 (Figma 389:94 - 1440px x 588px)
        ============================================================== */}
        <section className="inj-hero" aria-label="지방분해시술 메인 배너">
          <div className="inj-hero__photo">
            <Image
              src={`${ASSET_PATH}/hero-photo.png`}
              alt="진한의원 지방분해 시술"
              width={884}
              height={588}
              priority
              unoptimized
            />
          </div>
          <div className="inj-hero__panel">
            <p className="inj-hero__sub">잘 빠지지 않는 지방 관리</p>
            <h2 className="inj-hero__title">
              <span className="inj-hero__title-line inj-hero__title-line--accent">지방분해</span>
              <span className="inj-hero__title-line">시술</span>
            </h2>
            <p className="inj-hero__desc">
              {'셀룰라이트와 저항성 지방을 집중 관리해\n지방 분해와 슬리밍 효과를 돕습니다.'}
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 1] 진한의원 지방분해 시술 개요 인트로 (Figma 389:126)
        ============================================================== */}
        <section className="inj-intro" aria-label="진한의원 지방분해 시술 개요">
          <h2 className="inj-intro__title">
            <span>진한의원</span> <strong>지방분해 시술</strong>
          </h2>
          <p className="inj-intro__desc-1">
            {'피하지방조직에서 혈액순환과 림프순환이 안되어 염증물질이 쌓이고 조직이 변성이 되면\n섬유화되어 뭉치게 되어 셀룰라이트가 됩니다.'}
          </p>
          <p className="inj-intro__desc-2">
            {'셀룰라이트화 된 피하지방 조직은 저항성이 있어서 잘 빠지지 않고 쉽게 뭉치기 때문에\n국소 부위의 순환을 개선하고 셀룰라이트를 효과적으로\n분해해주는 것이 필요합니다. 다이어트 한약과 병행시 지방분해 및 연소 효과가 증가됩니다.'}
          </p>
        </section>

        {/* ==============================================================
            [신규 섹션] 지방분해시술 작용 원리 (Figma 495:14)
        ============================================================== */}
        <section className="inj-mechanism" aria-label="지방분해시술 작용 원리">
          <div className="inj-section__inner">
            <h3 className="inj-mechanism__title">
              {'지방분해시술,\n어떻게 '}
              <strong className="inj-mechanism__title-point">작용하나요?</strong>
            </h3>

            <div className="inj-mechanism__list">
              {/* STEP 01 */}
              <div className="inj-mechanism-card">
                <div className="inj-mechanism-card__img-wrap">
                  <Image
                    src={`${ASSET_PATH}/mechanism-step-01.png`}
                    alt="지방세포에 지방분해 성분 주입"
                    width={790}
                    height={644}
                    className="inj-mechanism-card__img"
                    unoptimized
                  />
                </div>
                <div className="inj-mechanism-card__body">
                  <span className="inj-mechanism-card__badge">STEP 01</span>
                  <h4 className="inj-mechanism-card__title">지방세포에 지방분해 성분 주입</h4>
                  <p className="inj-mechanism-card__desc">
                    특정부위의 지방세포를 선택적으로 타겟합니다.
                  </p>
                </div>
              </div>

              {/* STEP 02 */}
              <div className="inj-mechanism-card">
                <div className="inj-mechanism-card__img-wrap">
                  <Image
                    src={`${ASSET_PATH}/mechanism-step-02.png`}
                    alt="지방세포 분해"
                    width={790}
                    height={644}
                    className="inj-mechanism-card__img"
                    unoptimized
                  />
                </div>
                <div className="inj-mechanism-card__body">
                  <span className="inj-mechanism-card__badge">STEP 02</span>
                  <h4 className="inj-mechanism-card__title">지방세포 분해</h4>
                  <p className="inj-mechanism-card__desc">
                    지방세포의 세포막이 분해되어 지방이 액체 상태로 배출됩니다.
                  </p>
                </div>
              </div>

              {/* STEP 03 */}
              <div className="inj-mechanism-card">
                <div className="inj-mechanism-card__img-wrap">
                  <Image
                    src={`${ASSET_PATH}/mechanism-step-03.png`}
                    alt="체외 배출"
                    width={790}
                    height={644}
                    className="inj-mechanism-card__img"
                    unoptimized
                  />
                </div>
                <div className="inj-mechanism-card__body">
                  <span className="inj-mechanism-card__badge">STEP 03</span>
                  <h4 className="inj-mechanism-card__title">체외 배출</h4>
                  <p className="inj-mechanism-card__desc">
                    분해된 지방은 림프순환을 통해 자연스럽게 배출됩니다.
                  </p>
                </div>
              </div>

              {/* STEP 04 */}
              <div className="inj-mechanism-card">
                <div className="inj-mechanism-card__img-wrap">
                  <Image
                    src={`${ASSET_PATH}/mechanism-step-04.png`}
                    alt="매끈해진 라인"
                    width={790}
                    height={644}
                    className="inj-mechanism-card__img"
                    unoptimized
                  />
                </div>
                <div className="inj-mechanism-card__body">
                  <span className="inj-mechanism-card__badge">STEP 04</span>
                  <h4 className="inj-mechanism-card__title">매끈해진 라인</h4>
                  <p className="inj-mechanism-card__desc">
                    {'불필요한 지방이 줄어들어 더 슬림하고 균형 잡힌 라인으로\n개선됩니다.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 2] 전기지방분해침 (Figma 389:135 - 1440px x 1101px)
        ============================================================== */}
        <section className="inj-section inj-section--white" aria-label="전기지방분해침">
          <div className="inj-section__inner">
              <div className="inj-title-wrap">
                <span className="inj-title-bar" aria-hidden="true" />
                <h3 className="inj-title">전기지방분해침</h3>
              </div>

              <div className="inj-twocol">
                <div className="inj-twocol__left">
                  <p className="inj-twocol__desc">
                    {'장침을 이용해서 중저주파를 피하지방층에\n전달하여 국소 부위의 온도를 올리고\n혈액유입량을 증가시키고 지방분해효소의\n분비를 활성화하여 해당 부위의 사이즈를\n줄여주고 피부 탄력을 올려주는 시술입니다.'}
                  </p>
                  <div className="inj-info-badges" aria-label="시술 정보">
                    <div className="inj-info-badge">
                      <div className="inj-info-badge__icon">
                        <Image
                          src={`${ASSET_PATH}/node-icon-clock.png`}
                          alt=""
                          width={41}
                          height={41}
                          unoptimized
                        />
                      </div>
                      <span className="inj-info-badge__label">시술 시간</span>
                      <span className="inj-info-badge__value">15~20분 정도</span>
                    </div>
                    <div className="inj-info-badge">
                      <div className="inj-info-badge__icon">
                        <Image
                          src={`${ASSET_PATH}/node-icon-calendar.png`}
                          alt=""
                          width={48}
                          height={48}
                          unoptimized
                        />
                      </div>
                      <span className="inj-info-badge__label">권장 횟수</span>
                      <span className="inj-info-badge__value">3~5회 정도</span>
                    </div>
                  </div>
                </div>

                <div className="inj-twocol__right">
                  <Image
                    src={`${ASSET_PATH}/node-electric-needle.png`}
                    alt="전기지방분해침 시술"
                    width={645}
                    height={442}
                    unoptimized
                  />
                </div>
              </div>

              <div className="inj-subheading">
                <h4 className="inj-subheading__title">이런 분들에게 추천해요</h4>
                <div className="inj-subheading__line" aria-hidden="true" />
              </div>

              <ul className="inj-check-list">
                {[
                  '특정 부위에 군살이 잘 안빠지는 분들 (팔뚝, 옆구리, 뱃살, 허벅지)',
                  '셀룰라이트 때문에 피부 표면이 울퉁불퉁하고 살이 단단한 분',
                  '통증이나 멍이 적은 시술을 원하는 분',
                  '탄력이 떨어져서 피부가 늘어나 있는 분',
                  '지방분해시술이 부작용이 있을까봐 보다 안전한 시술을 원하시는 분',
                ].map((item, idx) => (
                  <li key={idx} className="inj-check-item">
                    <span className="inj-check-item__icon">
                      <Image
                        src={`${ASSET_PATH}/node-icon-check.png`}
                        alt=""
                        width={37}
                        height={37}
                        unoptimized
                      />
                    </span>
                    <span className="inj-check-item__text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
        </section>

        {/* ==============================================================
            [섹션 3] 체형매선 (Figma 393:70 - 1440px x 2845px)
        ============================================================== */}
        <section className="inj-section inj-section--gray" aria-label="체형매선">
          <div className="inj-section__inner">
            <div className="inj-title-wrap">
              <span className="inj-title-bar" aria-hidden="true" />
              <h3 className="inj-title">체형매선</h3>
            </div>

            <div className="inj-twocol">
              <div className="inj-twocol__left">
                <p className="inj-twocol__desc">
                  {'녹는 콜라겐 실을 복부, 옆구리,\n팔뚝, 허벅지 등 체형 관리가 필요한 부위의\n피하지방 조직에 삽입하여 흡수되어\n녹는 동안 기계적 자극을 주는 시술입니다.\n국소 부위의 탄력 증가, 라인 개선, 지방분해\n보조 역할, 사이즈 감소 효과가 있습니다.'}
                </p>
              </div>
              <div className="inj-twocol__right">
                <Image
                  src={`${ASSET_PATH}/node-body-thread-main.png`}
                  alt="체형매선 시술"
                  width={645}
                  height={442}
                  unoptimized
                />
              </div>
            </div>

            <div className="inj-subheading">
              <h4 className="inj-subheading__title">체형매선이 작용하는 원리</h4>
              <div className="inj-subheading__line" aria-hidden="true" />
            </div>

            {/* 2x2 작용 원리 카드 */}
            <div className="inj-steps-grid">
              {/* Step 01 */}
              <div className="inj-step-card">
                <div className="inj-step-card__img-wrap">
                  <Image
                    src={`${ASSET_PATH}/node-step-01.png`}
                    alt="매선 삽입"
                    width={607}
                    height={439}
                    unoptimized
                  />
                  <div className="inj-step-card__layer-labels" aria-hidden="true">
                    <span className="inj-step-card__label-skin">피부</span>
                    <span className="inj-step-card__label-fat">피하지방</span>
                    <span className="inj-step-card__label-muscle">근육층</span>
                  </div>
                </div>
                <div className="inj-step-card__body">
                  <h5 className="inj-step-card__title">매선 삽입</h5>
                  <span className="inj-step-card__num" aria-hidden="true">01</span>
                  <p className="inj-step-card__desc">
                    {'특수한 흡수성 매선을 체형 관리가 필요한\n부위의 피하조직에 삽입합니다.'}
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="inj-step-card">
                <div className="inj-step-card__img-wrap">
                  <Image
                    src={`${ASSET_PATH}/node-step-02.png`}
                    alt="지속적인 자극"
                    width={607}
                    height={439}
                    unoptimized
                  />
                </div>
                <div className="inj-step-card__body">
                  <h5 className="inj-step-card__title">지속적인 자극</h5>
                  <span className="inj-step-card__num" aria-hidden="true">02</span>
                  <p className="inj-step-card__desc">
                    {'삽입된 매선이 일정 기간 동안 조변 조직에\n지속적인 물리적 자극을 줍니다.'}
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="inj-step-card">
                <div className="inj-step-card__img-wrap">
                  <Image
                    src={`${ASSET_PATH}/node-step-03.png`}
                    alt="조직반응 및 재생"
                    width={607}
                    height={439}
                    unoptimized
                  />
                </div>
                <div className="inj-step-card__body">
                  <h5 className="inj-step-card__title">조직반응 및 재생</h5>
                  <span className="inj-step-card__num" aria-hidden="true">03</span>
                  <p className="inj-step-card__desc">
                    {'자극으로 인해 미세한 조직 반응이 일어나고,\n섬유아세포가 활성화되어 콜라겐 등의 결합\n조직 재형성이 촉진됩니다.'}
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="inj-step-card">
                <div className="inj-step-card__img-wrap">
                  <Image
                    src={`${ASSET_PATH}/node-step-04.png`}
                    alt="탄력ㆍ라인 개선"
                    width={607}
                    height={439}
                    unoptimized
                  />
                </div>
                <div className="inj-step-card__body">
                  <h5 className="inj-step-card__title">탄력ㆍ라인 개선</h5>
                  <span className="inj-step-card__num" aria-hidden="true">04</span>
                  <p className="inj-step-card__desc">
                    {'매선이 서서히 흡수되는 과정에서 피부\n탄력이 개선되고, 피하조직이 정돈되어\n보다 매끄럽고 균형있는 바디라인 관리에\n도움을 줍니다.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="inj-subheading">
              <h4 className="inj-subheading__title">체형매선이 만들어내는 변화</h4>
              <div className="inj-subheading__line" aria-hidden="true" />
            </div>

            <div className="inj-changes-grid">
              {[
                '국소 부위 라인 관리',
                '콜라겐 재형성으로 매끄러운 피부결',
                '피부 탄력 및 처짐 개선',
                '균형있는 바디라인 관리',
                '혈액 순환 및 대사 활성 도움',
              ].map((item, idx) => (
                <div key={idx} className="inj-check-item">
                  <span className="inj-check-item__icon">
                    <Image
                      src={`${ASSET_PATH}/node-icon-check.png`}
                      alt=""
                      width={37}
                      height={37}
                      unoptimized
                    />
                  </span>
                  <span className="inj-check-item__text">{item}</span>
                </div>
              ))}
            </div>

            {/* Check Point 안내 */}
            <div className="inj-checkpoint-wrap">
              <span className="inj-checkpoint-badge">Check Point</span>
              <p className="inj-checkpoint-text">
                {'체형매선은 개인의 체질, 시술부위, 생활습관 등에 따라\n효과가 다를 수 있으며, 식이조절, 운동 등 '}
                <strong>{'건강한 생활습관과 함께 관리할 때\n더 좋은 결과를 기대할 수 있습니다.'}</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 4] 지방분해약침 (Figma 394:250 - 1241px x 1529px)
        ============================================================== */}
        <section className="inj-section inj-section--white" aria-label="지방분해약침">
          <div className="inj-section__inner">
            <div className="inj-title-wrap">
              <span className="inj-title-bar" aria-hidden="true" />
              <h3 className="inj-title">지방분해약침</h3>
            </div>

            <div className="inj-twocol">
              <div className="inj-twocol__left">
                <p className="inj-twocol__desc">
                  {'지방이 쉽게 빠지지 않는 국소 부위에\n한방 유효 성분을 직접 전달하여\n지방 분해와 순환 개선을 돕는 치료입니다.\n셀룰라이트화되어 뭉치거나 관리가\n어려운 부위를 집중적으로 케어해 체형 관리\n효과를 높이는 데 도움을 줍니다.'}
                </p>
              </div>
              <div className="inj-twocol__right">
                <Image
                  src={`${ASSET_PATH}/node-pharmacopuncture-main.png`}
                  alt="지방분해약침 시술"
                  width={645}
                  height={442}
                  unoptimized
                />
              </div>
            </div>

            <div className="inj-subheading">
              <h4 className="inj-subheading__title">성분부터 확인해보세요</h4>
              <div className="inj-subheading__line" aria-hidden="true" />
            </div>

            <div className="inj-ingredients-grid">
              {[
                {
                  name: '산삼',
                  desc: '기초대사량 향상을 통해\n체내 대사가 원활해지도록 도움',
                  img: `${ASSET_PATH}/node-ingredient-ginseng.png`,
                },
                {
                  name: '사향',
                  desc: '체내 순환과 지방분해를 돕고\n마음 안정 및 식욕 조절에 도움',
                  img: `${ASSET_PATH}/node-ingredient-musk.png`,
                },
                {
                  name: '웅담',
                  desc: '체내 염증 감소와 해독 작용을\n돕고 간 기능 개선에 도움',
                  img: `${ASSET_PATH}/node-ingredient-bear-bile.png`,
                },
              ].map((ing, idx) => (
                <div key={idx} className="inj-ingredient-card">
                  <div className="inj-ingredient-card__img">
                    <Image
                      src={ing.img}
                      alt={ing.name}
                      width={369}
                      height={303}
                      unoptimized
                    />
                  </div>
                  <h5 className="inj-ingredient-card__name">{ing.name}</h5>
                  <p className="inj-ingredient-card__desc">{ing.desc}</p>
                </div>
              ))}
            </div>

            <div className="inj-subheading">
              <h4 className="inj-subheading__title">이런 분들에게 추천해요</h4>
              <div className="inj-subheading__line" aria-hidden="true" />
            </div>

            <ul className="inj-check-list">
              {[
                '아무리 노력해도 특정 부위의 살이 잘 빠지지 않는 분',
                '지방이 셀룰라이트화되어 뭉치고 울퉁불퉁한 부위가 고민인 분',
                '기초대사량이 낮고 순환이 원활하지 않아 쉽게 붓는 분',
              ].map((item, idx) => (
                <li key={idx} className="inj-check-item">
                  <span className="inj-check-item__icon">
                    <Image
                      src={`${ASSET_PATH}/node-icon-check.png`}
                      alt=""
                      width={37}
                      height={37}
                      unoptimized
                    />
                  </span>
                  <span className="inj-check-item__text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==============================================================
            [섹션 5] 샤인모드 (Figma 396:337 - 1440px x 1985px)
        ============================================================== */}
        <section className="inj-section inj-section--gray" aria-label="샤인모드">
          <div className="inj-section__inner">
            <div className="inj-title-wrap">
              <span className="inj-title-bar" aria-hidden="true" />
              <h3 className="inj-title">샤인모드</h3>
            </div>

            <div className="inj-twocol">
              <div className="inj-twocol__left">
                <p className="inj-twocol__desc">
                  {'고주파와 고전압 에너지를 근막층(SMAS층)\n까지 전달해 지방조직의 연소를 돕고\n콜라겐·엘라스틴 생성을 촉진하는 안티에이징\n리프팅 시술입니다.\n시술 중 표피 온도를 자동 체크해 화상·물집·\n통증 부담을 줄입니다.'}
                </p>
                <div className="inj-info-badges" aria-label="시술 정보">
                  <div className="inj-info-badge">
                    <div className="inj-info-badge__icon">
                      <Image
                        src={`${ASSET_PATH}/node-icon-clock.png`}
                        alt=""
                        width={41}
                        height={41}
                        unoptimized
                      />
                    </div>
                    <span className="inj-info-badge__label">시술 시간</span>
                    <span className="inj-info-badge__value">20~30분 정도 (마취X)</span>
                  </div>
                  <div className="inj-info-badge">
                    <div className="inj-info-badge__icon">
                      <Image
                        src={`${ASSET_PATH}/node-icon-calendar.png`}
                        alt=""
                        width={48}
                        height={48}
                        unoptimized
                      />
                    </div>
                    <span className="inj-info-badge__label">권장 횟수</span>
                    <span className="inj-info-badge__value">2~4주 간격으로 3~5회 정도</span>
                  </div>
                </div>
              </div>

              <div className="inj-twocol__right">
                <Image
                  src={`${ASSET_PATH}/node-shinemode-device.png`}
                  alt="샤인모드 장비"
                  width={645}
                  height={442}
                  unoptimized
                />
              </div>
            </div>

            <div className="inj-subheading">
              <h4 className="inj-subheading__title">샤인모드 리프팅이란?</h4>
              <div className="inj-subheading__line" aria-hidden="true" />
            </div>

            {/* 도식 카드 */}
            <div className="inj-shinemode-card">
              <div className="inj-shinemode-card__img">
                <Image
                  src={`${ASSET_PATH}/node-shinemode-treatment.png`}
                  alt="샤인모드 리프팅 시술"
                  width={664}
                  height={498}
                  unoptimized
                />
              </div>
              <div className="inj-shinemode-card__body">
                <p className="inj-shinemode-card__title">
                  <strong>고강도RF·HVP</strong>를 통해
                  <br />
                  <strong>지방세포 사멸 + 콜라겐 자극 까지!</strong>
                </p>
                <div className="inj-circles-wrap">
                  <div className="inj-circle inj-circle--navy">
                    <span className="inj-circle__top">RF</span>
                    <span className="inj-circle__bottom">고주파</span>
                  </div>
                  <div className="inj-circle inj-circle--light">
                    <span className="inj-circle__top">HVP</span>
                    <span className="inj-circle__bottom">고전압 펄스</span>
                  </div>
                  <div className="inj-circle inj-circle--navy">
                    <span className="inj-circle__top">Suction</span>
                    <span className="inj-circle__bottom">흡입</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="inj-subheading">
              <h4 className="inj-subheading__title">이런 분들에게 추천해요</h4>
              <div className="inj-subheading__line" aria-hidden="true" />
            </div>

            <ul className="inj-check-list">
              {[
                '통증이 걱정되거나 기존 고주파 시술의 열감이 부담스러운 분',
                '두툼한 이중턱이 고민인 분',
                '처진 턱선이나 마리오네트 주름 개선을 원하는 분',
                '늘어진 볼살의 탄력 리프팅을 원하는 분',
                '피부 타이트닝을 원하는 분',
                '날렵한 턱라인과 얼굴 축소 효과를 원하는 분',
                '얼굴뿐 아니라 팔뚝·옆구리·뱃살·허벅지 등 바디 리프팅도 함께 원하는 분',
              ].map((item, idx) => (
                <li key={idx} className="inj-check-item">
                  <span className="inj-check-item__icon">
                    <Image
                      src={`${ASSET_PATH}/node-icon-check.png`}
                      alt=""
                      width={37}
                      height={37}
                      unoptimized
                    />
                  </span>
                  <span className="inj-check-item__text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==============================================================
            [섹션 6] 심부온열 (Figma 396:488 - 1241px x 547px)
        ============================================================== */}
        <section className="inj-section inj-section--white" aria-label="심부온열">
          <div className="inj-section__inner">
            <div className="inj-title-wrap">
              <span className="inj-title-bar" aria-hidden="true" />
              <h3 className="inj-title">심부온열</h3>
            </div>

            <div className="inj-twocol">
              <div className="inj-twocol__left">
                <p className="inj-twocol__desc">
                  {'열 에너지를 복부 깊은 곳까지 전달하여\n장기 및 심부 조직의 온도를 높이는 치료 방법\n입니다. 이는 피부 표면에만 열을 가하는\n표재열 치료와 달리, 심부까지 열을 전달하여\n장기 운동성을 개선하고 신진대사를 촉진하고\n혈액 순환, 림프 순환을 돕는 효과가 있습니다.'}
                </p>
              </div>
              <div className="inj-twocol__right">
                <Image
                  src={`${ASSET_PATH}/node-deep-heat.png`}
                  alt="심부온열 치료"
                  width={645}
                  height={442}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 7] 심부장기EMS (Figma 397:532 - 1440px x 799px)
        ============================================================== */}
        <section className="inj-section inj-section--gray" aria-label="심부장기EMS">
          <div className="inj-section__inner">
            <div className="inj-title-wrap">
              <span className="inj-title-bar" aria-hidden="true" />
              <h3 className="inj-title">심부장기EMS</h3>
            </div>

            <div className="inj-twocol">
              <div className="inj-twocol__left">
                <p className="inj-twocol__desc">
                  {'인체에 무해한 전기자극을 통해\n복부 근육과 장기 근육의 움직임을 원활하게\n도와 근육 활성화를 촉진하고, 국소 부위의\n혈류 증가와 림프 순환 개선에 도움을 주는\n관리입니다. 복부 깊은 부위까지 자극을\n전달해 보다 효과적인 순환 및 컨디션 관리에\n도움을 줍니다.'}
                </p>
              </div>
              <div className="inj-twocol__right">
                <Image
                  src={`${ASSET_PATH}/node-deep-ems.png`}
                  alt="심부장기EMS 관리"
                  width={645}
                  height={442}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
