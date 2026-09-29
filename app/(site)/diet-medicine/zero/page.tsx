import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import './zero-page.css';
import '../../_shared/detail-page-scale.css';

export const metadata: Metadata = {
  title: '붓기제로ㆍ배사라정 | 진한의원',
  description: '슬림환과 함께 챙기는 붓기제로와 배사라정. 순환장애 개선을 통한 붓기 감소와 과식·회식 뱃살 관리를 위한 진한의원 다이어트 한약.',
};

const ASSET_PATH = '/images/diet-medicine/zero';

export default function ZeroDietMedicinePage() {
  return (
    <div className="zero-page">
      <div className="zero-page__content">
        {/* 상단 서브 헤딩 (피그마 333:550 NanumMyeongjo 40px 규격) */}
        <header className="zero-page__heading">
          <h1>붓기제로ㆍ배사라정</h1>
          <Image
            className="zero-page__divider"
            src="/images/diet-medicine/slim/top-divider.svg"
            alt=""
            width={1440}
            height={1}
            unoptimized
          />
        </header>

        {/* ==============================================================
            [섹션 0] 메인 히어로 배너 (Figma 328:5 - 1440px x 588px)
        ============================================================== */}
        <section className="zero-hero" aria-label="붓기제로 배사라정 메인">
          <div className="zero-hero__photo">
            <Image
              src={`${ASSET_PATH}/asset-0-350_3.png`}
              alt="붓기제로와 배사라정 제품"
              width={923}
              height={588}
              priority
              unoptimized
            />
          </div>
          <div className="zero-hero__panel">
            <p className="zero-hero__sub">슬림환과 함께 챙기는</p>
            <h2 className="zero-hero__title">
              <span className="zero-hero__title-white">붓기</span>
              <span className="zero-hero__title-blue">제로</span>
              <br />
              <span className="zero-hero__title-blue">배사라</span>
              <span className="zero-hero__title-white">정</span>
            </h2>
          </div>
        </section>

        {/* ==============================================================
            [섹션 1] 붓기제로 인트로 & 4대 핵심 효능 (Figma 328:44 - 1440px x 1460px)
        ============================================================== */}
        <section className="zero-intro" aria-label="붓기제로 인트로 및 4대 효능">
          <div className="zero-intro__bg" aria-hidden="true">
            <Image
              src={`${ASSET_PATH}/asset-1-353_132.png`}
              alt=""
              width={1440}
              height={1398}
              priority
              unoptimized
            />
          </div>

          <div className="zero-intro__content">
            <div className="zero-intro__top-copy">
              <h2 className="zero-intro__headline">
                <span className="zero-intro__underline-line1">붓기가 잘 빠져야</span><br />
                <span className="zero-intro__underline-line2">살도 잘 빠집니다</span>
              </h2>
              <p className="zero-intro__brand-title">붓기제로</p>
              <p className="zero-intro__subline">
                현대인의 고질병인 순환장애를<br />
                개선하는 새로운 타입의 한약!
              </p>
            </div>

            <div className="zero-intro__bar">
              {[
                { title: '순환장애로 인한\n붓기감소', icon: `${ASSET_PATH}/asset-2-353_37.png`, w: 53, h: 71 },
                { title: '만성염증\n감소', icon: `${ASSET_PATH}/asset-3-353_43.png`, w: 60, h: 72 },
                { title: '피하지방\n감소', icon: `${ASSET_PATH}/asset-4-353_48.png`, w: 82, h: 71 },
                { title: '노폐물 배출\n증가', icon: `${ASSET_PATH}/asset-5-353_53.png`, w: 67, h: 74 },
              ].map((item, idx) => (
                <div key={idx} className="zero-intro__bar-item">
                  <div className="zero-intro__bar-icon-wrap">
                    <Image src={item.icon} alt="" width={item.w} height={item.h} unoptimized />
                  </div>
                  <span className="zero-intro__bar-text">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 2] 이런분들에게 추천해요 (붓기제로) (Figma 356:11 - 1248px x 480px)
        ============================================================== */}
        <section className="zero-recommend" aria-label="붓기제로 추천 대상">
          <h2 className="zero-recommend__title">이런분들에게 <strong>추천해요</strong></h2>
          <div className="zero-recommend__box">
            <ul className="zero-recommend__list">
              {[
                '갱년기 여성, 계절 변화에 민감하고 쉽게 붓는 분',
                '만성피로를 느끼거나 관절 불편이 잦은 분',
                '성인병 및 건강 관리가 필요한 분',
                '슬림환·습담환과 함께 체지방 및 신진대사 관리를 원하는 분',
                '단독 복용을 원하는 분',
              ].map((text, idx) => (
                <li key={idx} className="zero-recommend__item">
                  <span className="zero-recommend__dot" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==============================================================
            [섹션 3] 부종을 방치하면 살찌기 쉬운 이유 (Figma 356:12 - 1440px x 1238px)
        ============================================================== */}
        <section className="zero-steps" aria-label="부종 메디컬 원리">
          <h2 className="zero-steps__title">부종을 방치하면 <strong>살찌기 쉬운 이유</strong></h2>
          <div className="zero-steps__grid">
            {[
              {
                step: 'STEP 01',
                title: '순환 저하와 부종',
                bullets: ['ㆍ림프 및 혈액순환저하', 'ㆍ체액 저류 (부종)', 'ㆍ독소 축적'],
                img: `${ASSET_PATH}/asset-6-358_36.png`,
              },
              {
                step: 'STEP 02',
                title: '만성화와 셀룰라이트',
                bullets: ['ㆍ순환 정체', 'ㆍ조직 섬유화', 'ㆍ셀룰라이트 형성'],
                img: `${ASSET_PATH}/asset-7-358_37.png`,
              },
              {
                step: 'STEP 03',
                title: '비만으로 연결',
                bullets: ['ㆍ지방 세포 증가 및 크기 확대', 'ㆍ순환 저하의 악순환', 'ㆍ비만 정착'],
                img: `${ASSET_PATH}/asset-8-358_38.png`,
              },
            ].map((card, idx) => (
              <article key={idx} className="zero-steps__card">
                <div className="zero-steps__card-img">
                  <Image src={card.img} alt={card.title} width={325} height={325} unoptimized />
                </div>
                <span className="zero-steps__card-step">{card.step}</span>
                <h3 className="zero-steps__card-heading">{card.title}</h3>
                <ul className="zero-steps__card-bullets">
                  {card.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="zero-checkpoint">
            <span className="zero-checkpoint__badge">Check Point</span>
            <p className="zero-checkpoint__text">
              부종 자체가 살은 아니지만, 방치하면 <strong>지방 축적</strong>과 <strong>‘셀룰라이트’</strong>의 원인이 되어<br />
              단단한 <strong>비만</strong>으로 이어집니다.
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 4] 수독(水毒) 개념 (Figma 359:42 - 1440px x 702px)
        ============================================================== */}
        <section className="zero-banner-navy" aria-label="수독 개념">
          <h2 className="zero-banner-navy__title">수독(水毒)</h2>
          <p className="zero-banner-navy__p1">
            과잉 수분이 체내에 정체된 상태를 수독(水毒)이라 하며, 체내 노폐물이<br />
            신진대사를 방해해 살은 쉽게 찌고 빠지기는 어려운 악순환을 만들 수 있습니다.
          </p>
          <p className="zero-banner-navy__p2">
            부종을 빠르게 해결하기 위해 이뇨제로 소변 배출량을 늘리는 방법은<br />
            신장에 부담을 줄 수 있어 주의가 필요합니다.<br />
            부종은 단순히 소변으로 빼내는 것이 아니라, <strong className="zero-highlight-blue">체내 염증과 노폐물을 함께 관리하는 것</strong>이 중요합니다.
          </p>
        </section>

        {/* ==============================================================
            [섹션 5] ‘무엇’이 ‘어디’에 쌓였는가 입니다 (Figma 360:68 - 1440px x 2108px)
        ============================================================== */}
        <section className="zero-compare" aria-label="살과 부종 비교">
          <h2 className="zero-compare__title">‘<strong>무엇</strong>’이 ‘<strong>어디</strong>’에 쌓였는가 입니다</h2>
          <div className="zero-compare__cols">
            {/* 좌측: 살 (지방 축적) */}
            <article className="zero-compare__card zero-compare__card--fat">
              <div className="zero-compare__header">
                <span className="zero-compare__header-main">살</span>
                <span className="zero-compare__header-sub">(지방 축적)</span>
              </div>
              <div className="zero-compare__body">
                <div className="zero-compare__block-1">
                  <div>
                    <h3 className="zero-compare__block-label">무엇이 축적되었는가?</h3>
                    <p className="zero-compare__block-1-text">지방(에너지 저장 형태)</p>
                  </div>
                  <div className="zero-compare__block-1-icon">
                    <Image src={`${ASSET_PATH}/asset-9-362_116.png`} alt="" width={255} height={209} unoptimized />
                  </div>
                </div>

                <div className="zero-compare__block-2">
                  <h3 className="zero-compare__block-label">어디에 쌓였는가?</h3>
                  <div className="zero-compare__block-2-img">
                    <Image src={`${ASSET_PATH}/asset-10-362_127.png`} alt="피하지방과 내장지방 축적 부위" width={540} height={360} unoptimized />
                    <span className="zero-compare__img-label zero-compare__img-label--subcutaneous">피하지방</span>
                    <span className="zero-compare__img-label zero-compare__img-label--visceral">내장지방</span>
                  </div>
                  <div className="zero-compare__block-2-sub">
                    <h4 className="zero-compare__sub-title">피하지방</h4>
                    <p className="zero-compare__sub-desc">피부 바로 아래에 쌓여 말랑말랑한 느낌</p>
                    <h4 className="zero-compare__sub-title">내장지방</h4>
                    <p className="zero-compare__sub-desc">복부 장기 주변에 쌓여 눈에 잘 보이지 않고<br />건강 위험 증가</p>
                  </div>
                </div>

                <div className="zero-compare__block-3">
                  <h3 className="zero-compare__block-label">특징</h3>
                  <ul className="zero-compare__block-3-bullets">
                    <li>ㆍ천천히 늘어나고 쉽게 줄지 않음</li>
                    <li>ㆍ식습관, 운동부족, 열량과잉이 주요 원인</li>
                    <li>ㆍ특정 부위에 집중되어 나타남 (복부, 허벅지, 팔 등)</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* 우측: 부종 (수분 및 노폐물 정체) */}
            <article className="zero-compare__card zero-compare__card--edema">
              <div className="zero-compare__header">
                <span className="zero-compare__header-main">부종</span>
                <span className="zero-compare__header-sub">(수분 및 노폐물 정체)</span>
              </div>
              <div className="zero-compare__body">
                <div className="zero-compare__block-1">
                  <div>
                    <h3 className="zero-compare__block-label">무엇이 축적되었는가?</h3>
                    <p className="zero-compare__block-1-text">수분(체액)과 노폐물</p>
                  </div>
                  <div className="zero-compare__block-1-icon">
                    <Image src={`${ASSET_PATH}/asset-11-362_146.png`} alt="" width={255} height={209} unoptimized />
                  </div>
                </div>

                <div className="zero-compare__block-2">
                  <h3 className="zero-compare__block-label">어디에 쌓였는가?</h3>
                  <div className="zero-compare__block-2-img zero-compare__block-2-img--edema">
                    <Image src={`${ASSET_PATH}/asset-12-362_161.png`} alt="세포 간 공간, 림프 정체, 부은 발" width={540} height={180} unoptimized />
                    <div className="zero-compare__img-labels">
                      <span className="zero-compare__img-label-cell">세포 간 공간</span>
                      <span className="zero-compare__img-label-lymph">림프 정체</span>
                      <span className="zero-compare__img-label-foot">부은 발</span>
                    </div>
                  </div>
                  <div className="zero-compare__block-2-sub">
                    <h4 className="zero-compare__sub-title">세포 간 공간</h4>
                    <p className="zero-compare__sub-desc">세포 사이에 수분이 고여 붓고 무거운 느낌</p>
                    <h4 className="zero-compare__sub-title">림프 정체</h4>
                    <p className="zero-compare__sub-desc">림프 순환이 원활하지 않아 노폐물과 수분이 정체</p>
                    <h4 className="zero-compare__sub-title" style={{ marginTop: '16px' }}>
                      얼굴, 손, 발, 다리 등 전신 또는 국소적으로 나타남
                    </h4>
                  </div>
                </div>

                <div className="zero-compare__block-3">
                  <h3 className="zero-compare__block-label">특징</h3>
                  <ul className="zero-compare__block-3-bullets">
                    <li>ㆍ짧은 시간 내에 붓고, 아침에 더 심한 경우 많음</li>
                    <li>ㆍ염분 과다, 수면 부족, 호르몬 변화, 순환 문제 등이<br />원인</li>
                    <li>ㆍ부은 부위를 누르면 자국이 남음 (함요성 부종)</li>
                    <li>ㆍ체중은 크게 변하지 않아도 몸이 무겁고 피곤하게<br />느낌</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div className="zero-checkpoint" style={{ marginTop: '55px' }}>
            <span className="zero-checkpoint__badge">Check Point</span>
            <p className="zero-checkpoint__text">
              살은 ‘지방이 몸에 쌓인 것’, 부종은 ‘수분과 노폐물이 몸에 고여있는 것’입니다.<br />
              <strong>관리방법이 다르므로 내 몸 상태에 맞는 관리가 중요합니다.</strong>
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 6] 배사라정 인트로 & 5대 핵심 효능 (Figma 362:163 - 1440px x 1460px)
        ============================================================== */}
        <section className="zero-intro zero-intro--besara" aria-label="배사라정 인트로 및 5대 효능">
          <div className="zero-intro__bg" aria-hidden="true">
            <Image
              src={`${ASSET_PATH}/asset-13-364_191.png`}
              alt=""
              width={1440}
              height={1369}
              priority
              unoptimized
            />
          </div>
          <div className="zero-intro__overlay" aria-hidden="true" />

          <div className="zero-intro__content">
            <div className="zero-intro__top-copy">
              <h2 className="zero-intro__headline">
                <span className="zero-intro__underline-line1">과식·회식이 잦다면</span><br />
                <span className="zero-intro__underline-line2">뱃살 관리도 함께</span>
              </h2>
              <p className="zero-intro__brand-title">배사라정</p>
              <p className="zero-intro__subline">
                하루 한 번 챙기는<br />
                새로운 타입의 뱃살 다이어트 한약!
              </p>
            </div>

            <div className="zero-intro__bar">
              {[
                { title: '내장지방\n분해', icon: `${ASSET_PATH}/asset-14-365_245.png`, w: 105, h: 105 },
                { title: '과식/과음 후\n살찜 방지', icon: `${ASSET_PATH}/asset-15-365_244.png`, w: 105, h: 105 },
                { title: '간해독', icon: `${ASSET_PATH}/asset-16-365_243.png`, w: 98, h: 112 },
                { title: '어혈제거', icon: `${ASSET_PATH}/asset-17-365_242.png`, w: 98, h: 112 },
                { title: '변비완화', icon: `${ASSET_PATH}/asset-18-365_241.png`, w: 98, h: 112 },
              ].map((item, idx) => (
                <div key={idx} className="zero-intro__bar-item">
                  <div className="zero-intro__bar-icon-wrap">
                    <Image src={item.icon} alt="" width={item.w} height={item.h} unoptimized />
                  </div>
                  <span className="zero-intro__bar-text">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            [섹션 7] 이런분들에게 추천해요 (배사라정) (Figma 364:192 - 1248px x 480px)
        ============================================================== */}
        <section className="zero-recommend" aria-label="배사라정 추천 대상">
          <h2 className="zero-recommend__title">이런분들에게 <strong>추천해요</strong></h2>
          <div className="zero-recommend__box">
            <ul className="zero-recommend__list">
              {[
                '붓기제로·슬림환·습담탕과 함께 복용하며 시너지 효과를 기대하는 분',
                '과음이나 과식 후, 다음 날 체중 증가가 걱정되는 분',
                '평소 변비약을 자주 복용하거나 변비약에 내성이 있는 분',
                '체내 독소·염증 관리가 필요한 분',
                '화농성 여드름, 아토피 등 염증성 피부질환으로 고민하는 분',
              ].map((text, idx) => (
                <li key={idx} className="zero-recommend__item">
                  <span className="zero-recommend__dot" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==============================================================
            [섹션 8] 많은 사람들이 모르는 내장지방 원인 (Figma 364:201 - 1440px x 2004px)
        ============================================================== */}
        <section className="zero-cause" aria-label="내장지방 원인 및 생활습관">
          <h2 className="zero-cause__title">많은 사람들이 모르는 <strong>내장지방 원인</strong></h2>
          <p className="zero-cause__sub">
            내장지방의 원인을 단순히 과식이나 운동 부족으로만 보면 중요한 부분을 놓치기 쉽습니다.<br />
            실제로는 몸이 지방을 잘 태우지 못하는 상태, 즉 대사 흐름이 둔해진 상태가 핵심일 수 있습니다.
          </p>

          <div className="zero-cause__pill zero-cause__pill--process">
            내장지방이 쌓이는 과정
          </div>

          <div className="zero-cause__process-flow">
            <Image
              src={`${ASSET_PATH}/asset-22-366_249.png`}
              alt="대사 흐름 둔화에서 만성 염증 발생으로 이어지는 4단계 과정"
              width={1248}
              height={266}
              unoptimized
            />
            <div className="zero-cause__process-labels">
              <span>대사 흐름 둔화</span>
              <span>지방 연소 기능 저하</span>
              <span>지방 축적</span>
              <span>만성 염증 발생</span>
            </div>
          </div>

          <div className="zero-cause__pill zero-cause__pill--habit">
            내장지방이 쌓이기 쉬운 생활 습관
          </div>

          <div className="zero-cause__habits-grid">
            {[
              {
                point: 'POINT 01',
                title: '수면부족',
                desc: '식욕 조절 호르몬\n불균형',
                img: `${ASSET_PATH}/asset-23-367_292.png`,
              },
              {
                point: 'POINT 02',
                title: '스트레스 지속',
                desc: '복부 지방 축적 환경',
                img: `${ASSET_PATH}/asset-25-367_291.png`,
              },
              {
                point: 'POINT 03',
                title: '복부 냉감',
                subnote: '(부지자 궤해, 목축, 연기 등)',
                desc: '소화ㆍ대사흐름 저하',
                img: `${ASSET_PATH}/asset-24-367_289.png`,
              },
              {
                point: 'POINT 04',
                title: '오래 앉는 습관',
                desc: '하체ㆍ복부 순환\n정체',
                img: `${ASSET_PATH}/asset-26-367_290.png`,
              },
            ].map((habit, idx) => (
              <div key={idx} className="zero-cause__habit-card">
                <div className="zero-cause__habit-img">
                  <Image src={habit.img} alt={habit.title} width={250} height={250} unoptimized />
                </div>
                <div className="zero-cause__habit-info">
                  <span className="zero-cause__habit-point">{habit.point}</span>
                  <h3 className="zero-cause__habit-title">{habit.title}</h3>
                  {habit.subnote && <span className="zero-cause__habit-subnote">{habit.subnote}</span>}
                  <p className="zero-cause__habit-desc">{habit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="zero-checkpoint" style={{ marginTop: '55px' }}>
            <span className="zero-checkpoint__badge">Check Point</span>
            <p className="zero-checkpoint__text">
              장내 환경이 나빠지고 간의 해독 기능이 저하되면 독소와 노폐물이 원활하게 배출되지 않을 수 있습니다.<br />
              많이 먹지 않는데도 배가 나온다면, 단순히 먹는 양보다 <strong>‘몸이 지방을 잘 태우고 배출하는 상태인지’</strong>를 함께 살펴볼 필요가 있습니다.
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 9] 노폐물 배출의 핵심, 간-장 순환 (Figma 366:288 - 1440px x 670px)
        ============================================================== */}
        <section className="zero-banner-navy" aria-label="간-장 순환 핵심">
          <h2 className="zero-banner-navy__title">노폐물 배출의 핵심, 간-장 순환</h2>
          <p className="zero-banner-navy__p1">
            배사라정은 간-장 순환을 원활하게 해 <strong className="zero-highlight-blue">담즙 배설을 돕고,<br />
            혈액 내 지용성 노폐물과 염증 물질이 대변을 통해 배출되는 과정</strong>을 돕습니다.
          </p>
          <p className="zero-banner-navy__p2">
            노폐물과 염증 물질이 체내에 쌓이면 장 점막을 통해 다시 흡수될 수 있고,<br />
            이 과정에서 간과 림프의 해독 기능에도 부담이 커질 수 있습니다.
          </p>
        </section>

        {/* ==============================================================
            [섹션 10] 내장지방이 위험한 진짜 이유 (Figma 367:296 - 1440px x 2394px)
        ============================================================== */}
        <section className="zero-danger" aria-label="내장지방 위험 요인">
          <h2 className="zero-danger__title">내장지방이 위험한 <strong>진짜 이유</strong></h2>
          <p className="zero-danger__sub">
            내장지방은 단순히 <strong>허리둘레가 늘어나는 문제</strong>에 그치지 않습니다.<br />
            장기 주변에 쌓이면서 혈당 조절, 혈관 건강, 간 기능, 대사 상태에 부담을 줄 수 있습니다.
          </p>

          <div className="zero-danger__grid">
            {[
              {
                title1: '혈당 조절 저하로',
                title2: '당뇨 위험 증가',
                desc: '인슐린 저항성 증가로 혈당이 쉽게\n올라가고 당뇨 위험이 커집니다.',
                img: `${ASSET_PATH}/asset-27-372_4.png`,
              },
              {
                title1: '중성지방 상승으로',
                title2: '혈관 부담 확대',
                desc: '중성지방이 증가하고 혈관 벽에\n지방이 쌓여 혈관 부담이 커집니다.',
                img: `${ASSET_PATH}/asset-29-374_35.png`,
              },
              {
                title1: '간·대사 기능 저하로',
                title2: '간 기능 부담 증가',
                desc: '간에 지방이 쌓여 대사 기능이 떨어지고\n피로감, 무기력감이 지속될 수 있습니다.',
                img: `${ASSET_PATH}/asset-28-376_49.png`,
              },
              {
                title1: '복부비만 지속으로',
                title2: '대사증후군 위험 증가',
                desc: '내장지방은 염증 물질을 지속적으로\n분비해 대사증후군 위험을 높입니다.',
                img: `${ASSET_PATH}/asset-30-375_48.png`,
              },
            ].map((danger, idx) => (
              <article key={idx} className="zero-danger__card">
                <div className="zero-danger__card-img">
                  <Image src={danger.img} alt="" width={440} height={440} unoptimized />
                </div>
                <h3 className="zero-danger__card-title">
                  {danger.title1}<br />
                  <span className="zero-navy-text">{danger.title2}</span>
                </h3>
                <div className="zero-danger__card-line" aria-hidden="true" />
                <p className="zero-danger__card-desc">{danger.desc}</p>
              </article>
            ))}
          </div>

          <div className="zero-checkpoint" style={{ marginTop: '55px' }}>
            <span className="zero-checkpoint__badge">Check Point</span>
            <p className="zero-checkpoint__text">
              겉으로는 큰 변화가 없어 보여도<br />
              몸속에서는 혈당·혈관·간·대사 기능이 동시에 부담을 받을 수 있습니다.<br />
              따라서 내장지방은 단순한 외모 관리보다<br />
              <strong>건강과 질병 예방 관리의 관점에서 살펴보는 것이 중요합니다.</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
