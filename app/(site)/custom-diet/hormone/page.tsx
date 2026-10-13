import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import './hormone.css';
import '../../_shared/detail-page-scale.css';

export const metadata: Metadata = {
  title: '호르몬 불균형 비만 | 진한의원',
  description:
    '호르몬 변화로 인한 비만, 자율신경과 기혈실조 개선을 통한 진한의원 호르몬 불균형 비만 맞춤 한방 치료 안내.',
};

const ASSET_PATH = '/images/custom-diet/hormone';

const CAUSES = [
  {
    title: '여성호르몬 감소 (에스트로겐)',
    desc: '40대 이후 여성호르몬이 감소하면서 지방이 복부에 축적되기 쉽고 기초대사량이 떨어집니다.',
  },
  {
    title: '스트레스 호르몬 증가 (코르티솔)',
    desc: '스트레스가 지속되면 코르티솔이 증가하여 식욕이 늘고, 특히 복부지방이 축적됩니다.',
  },
  {
    title: '인슐린 저항성 증가',
    desc: '호르몬 불균형으로 인슐린 작용이 떨어지면 혈당이 쉽게 올라가고 지방으로 저장됩니다.',
  },
  {
    title: '렙틴·그렐린 (식욕 조절 호르몬) 불균형',
    desc: '포만감을 느끼는 렙틴은 감소하고, 식욕을 자극하는 그렐린은 증가하여 자꾸 먹게 됩니다.',
  },
  {
    title: '갑상선 호르몬 저하',
    desc: '갑상선 호르몬이 줄어들면 신진대사가 느려지고 에너지 소비가 감소하여 살이 쉽게 찝니다.',
  },
];

interface SymptomPoint {
  point: string;
  title: string;
  desc: React.ReactNode;
  img: string;
}

const SYMPTOMS: SymptomPoint[] = [
  {
    point: 'POINT 01',
    title: '복부·허리둘레\n증가',
    desc: (
      <>
        특히 <mark className="hor-highlight">내장지방이</mark>
        <br />
        <mark className="hor-highlight">늘어나요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-01.png`,
  },
  {
    point: 'POINT 02',
    title: '예전과 비슷하게\n먹는데 체중 증가',
    desc: (
      <>
        식사량이 크게 늘지
        <br />
        않았는데 <mark className="hor-highlight">살이 자꾸 쪄요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-02.png`,
  },
  {
    point: 'POINT 03',
    title: '단 음식·탄수화물이\n자주 당김',
    desc: (
      <>
        <mark className="hor-highlight">달콤한 음식</mark>이<br />
        계속 생각나요.
      </>
    ),
    img: `${ASSET_PATH}/symptom-03.png`,
  },
  {
    point: 'POINT 04',
    title: '얼굴·손발이\n자주 붓는 느낌',
    desc: (
      <>
        아침에 얼굴이 붓고
        <br />
        <mark className="hor-highlight">손발이 잘 부어요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-04.png`,
  },
  {
    point: 'POINT 05',
    title: '쉽게 피곤하고\n무기력함',
    desc: (
      <>
        충분히 쉬어도
        <br />
        <mark className="hor-highlight">피로가 계속돼요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-05.png`,
  },
  {
    point: 'POINT 06',
    title: '잠이 잘 안 오거나\n자주 깸',
    desc: (
      <>
        잠이 얕아지고
        <br />
        <mark className="hor-highlight">숙면이 어려워요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-06.png`,
  },
  {
    point: 'POINT 07',
    title: '안면홍조·열감·\n식은땀',
    desc: (
      <>
        갑자기 얼굴이
        <br />
        화끈거리고 <mark className="hor-highlight">땀이 나요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-07.png`,
  },
  {
    point: 'POINT 08',
    title: '생리주기 또는\n생리량 변화',
    desc: (
      <>
        <mark className="hor-highlight">생리주기가 불규칙</mark>하고
        <br />
        <mark className="hor-highlight">생리량이 줄어요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-08.png`,
  },
  {
    point: 'POINT 09',
    title: '감정기복·예민함',
    desc: (
      <>
        사소한 일에도
        <br />
        예민해지고
        <br />
        <mark className="hor-highlight">감정 변화가 심해요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-09.png`,
  },
  {
    point: 'POINT 10',
    title: '근육량 감소와\n체력 저하',
    desc: (
      <>
        힘이 쉽게 떨어지고
        <br />
        <mark className="hor-highlight">근육이 잘 늘지 않아요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-10.png`,
  },
  {
    point: 'POINT 11',
    title: '다이어트 후\n다시 체중 증가',
    desc: (
      <>
        열심히 빼도
        <br />
        <mark className="hor-highlight">금방 다시 찌기 쉬워요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-11.png`,
  },
  {
    point: 'POINT 12',
    title: '특히 복부 중심으로\n지방이 쌓임',
    desc: (
      <>
        팔·다리보다 <mark className="hor-highlight">복부에</mark>
        <br />
        <mark className="hor-highlight">지방이 쉽게 쌓여요.</mark>
      </>
    ),
    img: `${ASSET_PATH}/symptom-12.png`,
  },
];

const HERBS = [
  {
    name: '당귀',
    img: `${ASSET_PATH}/herb-dangui.png`,
    items: [
      '보혈·활혈에 활용되는 대표 약재',
      '월경 관련 처방에 자주 배합됩니다.',
    ],
    summary: '여성의 건강한 순환과\n전반적인 컨디션 관리에 활용됩니다.',
  },
  {
    name: '백작약',
    img: `${ASSET_PATH}/herb-baekjagyak.png`,
    items: [
      '양혈·조경에 활용되는 약재',
      '긴장 완화에 도움을 줍니다.',
    ],
    summary: '여성의 부드러운 흐름과\n편안한 컨디션 관리에 활용됩니다.',
  },
  {
    name: '숙지황',
    img: `${ASSET_PATH}/herb-sukjihwang.png`,
    items: [
      '보혈·자음 계열 처방에 활용되는 약재',
      '여성의 월경 관련 처방에 배합됩니다.',
    ],
    summary: '몸의 기운을 보하고\n전반적인 건강 관리에 활용됩니다.',
  },
  {
    name: '향부자',
    img: `${ASSET_PATH}/herb-hyangbuja.png`,
    items: [
      '소간이기·조경에 활용되는 약재',
      '월경주기 관련 처방에 배합됩니다.',
    ],
    summary: '스트레스로 인한 불편감 완화와\n편안한 순환에 활용됩니다.',
  },
];

const TREATMENTS = [
  {
    name: '맞춤탕약',
    img: `${ASSET_PATH}/treatment-tangyak.png`,
    desc: '단순한 체중 감량을 넘어 살이 찌는 원인과 개인의\n체질을 함께 고려한 맞춤 처방을 진행합니다. 식욕 조절과\n체지방 관리뿐 아니라 몸의 전반적인 균형까지 살피며,\n기존 한약의 강한 쓴맛과 복용 부담을 줄여 더욱 편안하고\n간편하게 체중 관리를 이어갈 수 있도록 돕습니다.',
  },
  {
    name: '갱년기 SOS',
    img: `${ASSET_PATH}/treatment-menopause.png`,
    desc: '갱년기 증상으로 나타나는 안면홍조, 상열감, 발한,\n두근거림, 불안 등 다양한 불편 증상을 완화하는데 도움을\n줍니다. 몸속 부족한 진액을 보충하고 과도하게 올라오는\n열을 다스려 갱년기 시기 무너진 신체 균형을 회복하도록\n돕습니다.',
  },
  {
    name: '자궁미인',
    img: `${ASSET_PATH}/treatment-uterus.png`,
    desc: '생리불순, 생리통, 생리전증후군 등 여성의 주기적인\n불편 증상을 고려한 한방 처방입니다. 당귀, 향부자, 천궁,\n작약 등의 한약재를 활용하여 몸의 균형을 살피고,\n피로감과 다리 저림, 유방 팽만감, 허리 통증 등의 증상\n관리를 돕는 것을 목표로 합니다.',
  },
  {
    name: '수승화강약침',
    img: `${ASSET_PATH}/treatment-yakchim.png`,
    desc: '수승화강약침은 위로 몰린 열을 내리고\n아래의 차가운 기운을 조화롭게 한다는 한의학적 원리를\n바탕으로 한 치료입니다. 개인의 체질과 신체 상태를\n고려해 약침을 적용하며, 신체 순환과 전반적인 균형을\n살펴 건강한 체중 관리를 돕는 것을 목표로 합니다.',
  },
];

export default function HormoneDietPage() {
  return (
    <main className="hor-page">
      <div className="hor-page__content">
        {/* ==============================================================
            [상단 서브 헤딩 & 구분선 (Line 11)]
        ============================================================== */}
        <header className="hor-page__heading">
          <h1>호르몬 불균형 비만</h1>
          <div className="hor-page__divider" aria-hidden="true" />
        </header>

        {/* ==============================================================
            [섹션 01] 메인 히어로 배너 (Figma 1440px x 588px, y: 96)
        ============================================================== */}
        <section className="hor-hero" aria-label="호르몬 불균형 비만 메인 배너">
          <div className="hor-hero__visual">
            <Image
              className="hor-hero__photo"
              src={`${ASSET_PATH}/hero-photo.png`}
              alt="호르몬 불균형 비만 진료 안내"
              width={852}
              height={588}
              priority
              unoptimized
            />
            <Image
              className="hor-hero__logo"
              src={`${ASSET_PATH}/hero-logo.png`}
              alt="해운대 진한의원"
              width={310}
              height={104}
              priority
              unoptimized
            />
          </div>
          <div className="hor-hero__panel">
            <p className="hor-hero__kicker">호르몬 밸런스부터 살펴야 할 때</p>
            <h2 className="hor-hero__title">
              호르몬 불균형
              <br />
              <span className="hor-hero__title-accent">비만</span>
            </h2>
            <p className="hor-hero__copy">
              {
                '호르몬 변화로 식욕, 지방 분포, 에너지 소비가\n달라져 체중 관리가 어려워지는 상태로, 특히\n40~50대 갱년기 전후에 많이 나타납니다. 주야가\n바뀌는 생활, 큰 체중 변동, 다낭성 난소 질환,\n내장비만, 갑상선 기능 이상, 내분비샘의 낭종·결절,\n심한 갱년기 증상도 해당됩니다.'
              }
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 02] 호르몬 균형과 전신 리듬 (y: 820)
        ============================================================== */}
        <section className="hor-sec2" aria-labelledby="hor-sec2-title">
          <h2 id="hor-sec2-title" className="hor-section-title">
            호르몬의 균형이 무너지면
            <br />
            <strong>몸 전체의 리듬도 달라집니다</strong>
          </h2>
          <p className="hor-section-desc">
            {
              '노화, 스트레스, 과로, 불규칙한 생활, 안 좋은 식습관, 각종 질환 등으로 인해\n호르몬이 불균형해질수록 신진대사, 혈액-림프순환,\n장기 기능 등이 나빠져서 피로를 쉽게 느끼고 회복도 느려져 체력과 면역력이\n쉽게 떨어지고 여기저기 아프고 몸에 염증도 잘 생기게 됩니다.'
            }
          </p>

          <div className="hor-sec2__diagram" aria-label="호르몬 불균형과 전신적 변화 다이어그램">
            <div className="hor-sec2__circle hor-sec2__circle--dark">
              <span>호르몬 불균형</span>
            </div>

            <div className="hor-sec2__arrow" aria-hidden="true">
              <svg width="56" height="50" viewBox="0 0 56 50" fill="none">
                <path d="M0 20H36V8L56 25L36 42V30H0V20Z" fill="#083560" />
              </svg>
            </div>

            <div className="hor-sec2__box">
              <span>{'신진대사,\n혈액·림프순환,\n장기 기능 저하'}</span>
            </div>

            <div className="hor-sec2__arrow" aria-hidden="true">
              <svg width="56" height="50" viewBox="0 0 56 50" fill="none">
                <path d="M0 20H36V8L56 25L36 42V30H0V20Z" fill="#083560" />
              </svg>
            </div>

            <div className="hor-sec2__circle hor-sec2__circle--blue">
              <span>전신적인 변화</span>
            </div>
          </div>

          <p className="hor-sec2__lead2">
            {
              '호르몬은 특성상 다른 호르몬에 연쇄적으로 영향을 미치므로\n불편감이 한 두가지로 끝나지 않고 전신적으로 다양한 불편 증상으로 이어지는 경우가 많습니다.'
            }
          </p>
        </section>

        {/* ==============================================================
            [섹션 03] 호르몬 불균형 비만이 생기는 원인 (5개 카드, y: 1841)
        ============================================================== */}
        <section className="hor-sec3" aria-labelledby="hor-sec3-title">
          <h2 id="hor-sec3-title" className="hor-section-title">
            호르몬 불균형
            <br />
            <strong>비만이 생기는 원인</strong>
          </h2>

          <div className="hor-sec3__list">
            {CAUSES.map((cause) => (
              <div key={cause.title} className="hor-sec3__card">
                <h3 className="hor-sec3__card-title">{cause.title}</h3>
                <p className="hor-sec3__card-desc">{cause.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================
            [섹션 04] 주요 증상 12개 POINT 카드 + 요약 박스 (y: 3586)
        ============================================================== */}
        <section className="hor-sec4" aria-labelledby="hor-sec4-title">
          <h2 id="hor-sec4-title" className="hor-section-title">
            호르몬 불균형 비만의
            <br />
            <strong>주요 증상</strong>
          </h2>

          <div className="hor-sec4__grid">
            {SYMPTOMS.map((item) => (
              <article key={item.point} className="hor-sec4__card">
                <Image
                  className="hor-sec4__card-img"
                  src={item.img}
                  alt={item.title.replace('\n', ' ')}
                  width={280}
                  height={280}
                  loading="eager"
                  unoptimized
                />
                <span className="hor-sec4__card-point">{item.point}</span>
                <h3 className="hor-sec4__card-title">{item.title}</h3>
                <p className="hor-sec4__card-desc">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="hor-sec4__summary">
            <h3 className="hor-sec4__summary-title">호르몬 불균형 비만</h3>
            <p className="hor-sec4__summary-copy">
              {
                '호르몬의 변화는 단순한 체중 증가가 아니라, 지방이 잘 쌓이고 빠지지 않는\n체질 변화를 초래할 수 있습니다.'
              }
            </p>
          </div>
        </section>

        {/* ==============================================================
            [섹션 05] 기혈과 자율신경 연결 (y: 6180)
        ============================================================== */}
        <section className="hor-sec5" aria-labelledby="hor-sec5-title">
          <h2 id="hor-sec5-title" className="hor-section-title">
            호르몬의 균형은
            <br />
            <strong>자율신경과도 연결되어 있습니다</strong>
          </h2>
          <p className="hor-section-desc">
            {
              '호르몬이 불균형하신 분들은 대체로 자율신경계 기능이 이미 약해져 있거나\n교감신경-부교감신경 균형이 나빠져 있는 경우가 대부분입니다.\n자율신경계의 지배를 받아 호르몬 분비와 조절이 이루어지기 때문입니다.'
            }
          </p>

          <p className="hor-sec5__callout">이는 한의학에서 기혈실조(氣血失調)와 비슷합니다.</p>
          <p className="hor-sec5__kicker">자율신경-호르몬 불균형 (기혈실조 氣血失調)</p>

          {/* 중앙 인체 박스 (Group 175, Capsule 142px radius) */}
          <div className="hor-sec5__center-box">
            <Image
              className="hor-sec5__center-img"
              src={`${ASSET_PATH}/body-human.png`}
              alt="인체 소화 및 기혈 생성 도식"
              width={284}
              height={284}
              loading="eager"
                  unoptimized
            />
            <div className="hor-sec5__center-info">
              <span className="hor-sec5__badge">인체</span>
              <h3 className="hor-sec5__center-title">
                {'위(胃)에서 영(營)·혈(血)이\n생성됩니다.'}
              </h3>
            </div>
          </div>

          {/* 분기선 SVG */}
          <div className="hor-sec5__branch" aria-hidden="true">
            <svg viewBox="0 0 726 90" fill="none" className="hor-sec5__branch-svg">
              <line x1="363" y1="0" x2="363" y2="40" stroke="#858585" strokeWidth="2" />
              <line x1="20" y1="40" x2="706" y2="40" stroke="#858585" strokeWidth="2" />
              <line x1="20" y1="40" x2="20" y2="76" stroke="#858585" strokeWidth="2" />
              <polygon points="11,74 29,74 20,84" fill="#858585" />
              <line x1="706" y1="40" x2="706" y2="76" stroke="#858585" strokeWidth="2" />
              <polygon points="697,74 715,74 706,84" fill="#858585" />
            </svg>
          </div>

          {/* 좌우 2개 카드 (Group 141, Group 176) */}
          <div className="hor-sec5__cards">
            {/* 좌측 카드: 기(氣) / 기능 실조 */}
            <article className="hor-sec5__card hor-sec5__card--left">
              <div className="hor-sec5__card-header">
                <div>
                  <h3 className="hor-sec5__card-name">기(氣)</h3>
                  <span className="hor-sec5__card-tag">기능 실조</span>
                </div>
                <Image
                  className="hor-sec5__card-icon"
                  src={`${ASSET_PATH}/qi-icon.png`}
                  alt=""
                  width={148}
                  height={144}
                  loading="eager"
                  unoptimized
                />
              </div>
              <div className="hor-sec5__inner-box">
                <div className="hor-sec5__inner-sub">기능의 저하</div>
                <ul className="hor-sec5__inner-list">
                  <li>ㆍ소화·흡수 기능 저하</li>
                  <li>ㆍ에너지 생성 감소</li>
                  <li>ㆍ장부 기능 저하</li>
                  <li>ㆍ면역력 저하</li>
                  <li>ㆍ기순환 장애</li>
                </ul>
              </div>
              <p className="hor-sec5__bottom-text">기운이 부족하면 기능이 떨어집니다.</p>
            </article>

            {/* 우측 카드: 혈(血) / 실질 손상 */}
            <article className="hor-sec5__card hor-sec5__card--right">
              <div className="hor-sec5__card-header">
                <div>
                  <h3 className="hor-sec5__card-name">혈(血)</h3>
                  <span className="hor-sec5__card-tag">실질 손상</span>
                </div>
                <Image
                  className="hor-sec5__card-icon"
                  src={`${ASSET_PATH}/blood-icon.png`}
                  alt=""
                  width={177}
                  height={125}
                  loading="eager"
                  unoptimized
                />
              </div>
              <div className="hor-sec5__inner-box">
                <div className="hor-sec5__inner-sub">실질의 손상</div>
                <ul className="hor-sec5__inner-list">
                  <li>ㆍ혈액의 생성 부족</li>
                  <li>ㆍ영양 공급 저하</li>
                  <li>ㆍ조직·장기 영양 결핍</li>
                  <li>ㆍ피부·모발·근육 손상</li>
                  <li>ㆍ어지럼증·빈혈·생리 이상</li>
                </ul>
              </div>
              <p className="hor-sec5__bottom-text">혈이 부족하면 몸의 실질이 약해집니다.</p>
            </article>
          </div>
        </section>

        {/* ==============================================================
            [섹션 06] 3대 유형 균형 (y: 7982)
        ============================================================== */}
        <section className="hor-sec6" aria-labelledby="hor-sec6-title">
          <h2 id="hor-sec6-title" className="hor-section-title">
            자율신경과 호르몬이 흔들리면
            <br />
            <strong>기혈의 균형도 무너집니다</strong>
          </h2>
          <p className="hor-section-desc">
            {
              '자율신경과 호르몬의 균형이 무너지면, 기혈실조가 생깁니다.\n기혈이 부족하고 순환이 원활하지 않으면\n몸의 대사와 기능이 저하되어 살이 더 쉽게 쌓입니다.'
            }
          </p>

          <div className="hor-sec6__row">
            {/* 좌측 카드: 자율신경 불균형 (Group 177) */}
            <article className="hor-sec6__card">
              <Image
                className="hor-sec6__img"
                src={`${ASSET_PATH}/balance-autonomic.png`}
                alt="자율신경 불균형 일러스트"
                width={334}
                height={334}
                loading="eager"
                  unoptimized
              />
              <span className="hor-sec6__badge hor-sec6__badge--blue">자율신경 불균형</span>
              <p className="hor-sec6__lead">
                {'스트레스, 수면부족,\n과로 등으로 교감신경이\n우세해지면'}
              </p>
              <div className="hor-sec6__inner-box">
                <ul>
                  <li>ㆍ소화기능 저하</li>
                  <li>ㆍ혈관 수축으로 혈액순환 저하</li>
                  <li>ㆍ에너지 소모 감소</li>
                  <li>ㆍ만성 피로, 수면장애 유발</li>
                </ul>
              </div>
            </article>

            {/* 안쪽 화살표 1 (87px Ellipse 40) */}
            <div className="hor-sec6__arrow-wrap" aria-hidden="true">
              <svg width="44" height="40" viewBox="0 0 44 40" fill="none">
                <path d="M4 20H40M40 20L24 6M40 20L24 34" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* 중앙 카드: 기혈실조 (Group 179) */}
            <article className="hor-sec6__card hor-sec6__card--center">
              <Image
                className="hor-sec6__img hor-sec6__img--center"
                src={`${ASSET_PATH}/balance-qi-blood.png`}
                alt="기혈실조 상태 일러스트"
                width={389}
                height={389}
                loading="eager"
                  unoptimized
              />
              <span className="hor-sec6__badge hor-sec6__badge--navy">기혈실조</span>
              <p className="hor-sec6__lead hor-sec6__lead--center">
                {'기와 혈이 부족하고\n순환이 원활하지 않은 상태'}
              </p>
              <div className="hor-sec6__inner-box hor-sec6__inner-box--gray">
                <ul>
                  <li>ㆍ대사 저하</li>
                  <li>ㆍ체지방 증가</li>
                  <li>ㆍ체중 감량이 어려운 체질로 변화</li>
                </ul>
              </div>
            </article>

            {/* 안쪽 화살표 2 (87px Ellipse 41) */}
            <div className="hor-sec6__arrow-wrap hor-sec6__arrow-wrap--left" aria-hidden="true">
              <svg width="44" height="40" viewBox="0 0 44 40" fill="none">
                <path d="M40 20H4M4 20L20 6M4 20L20 34" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* 우측 카드: 호르몬 불균형 (Group 180) */}
            <article className="hor-sec6__card">
              <Image
                className="hor-sec6__img"
                src={`${ASSET_PATH}/balance-hormone.png`}
                alt="호르몬 불균형 일러스트"
                width={330}
                height={264}
                loading="eager"
                  unoptimized
              />
              <span className="hor-sec6__badge hor-sec6__badge--blue">호르몬 불균형</span>
              <p className="hor-sec6__lead">
                {'스트레스, 수면부족, 노화,\n과체중 등으로\n호르몬 분비와 리듬이 깨지면'}
              </p>
              <div className="hor-sec6__inner-box">
                <ul>
                  <li>ㆍ식욕을 조절하는 호르몬 불균형 (렙틴·그렐린 등)</li>
                  <li>ㆍ여성호르몬(에스트로겐) 감소</li>
                  <li>ㆍ갑상선호르몬 기능 저하</li>
                  <li>ㆍ코르티솔 증가로 복부지방 축적</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* ==============================================================
            [섹션 07] 대표 한약재 4종 (y: 9512)
        ============================================================== */}
        <section className="hor-sec7" aria-labelledby="hor-sec7-title">
          <h2 id="hor-sec7-title" className="hor-section-title">
            호르몬 불균형에 도움되는
            <br />
            <strong>대표 한약재</strong>
          </h2>

          <div className="hor-sec7__grid">
            {HERBS.map((herb) => (
              <article key={herb.name} className="hor-sec7__card">
                <span className="hor-sec7__badge">{herb.name}</span>
                <div className="hor-sec7__photo-wrap">
                  <Image
                    className="hor-sec7__photo"
                    src={herb.img}
                    alt={herb.name}
                    width={560}
                    height={394}
                    loading="eager"
                  unoptimized
                  />
                </div>
                <ul className="hor-sec7__list">
                  {herb.items.map((item, idx) => (
                    <li key={idx} className="hor-sec7__list-item">
                      <svg
                        className="hor-check-icon"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle cx="15.5" cy="15.5" r="15.5" fill="#083560" />
                        <polyline
                          points="9.5 15.5 13.5 19.5 21.5 11.5"
                          stroke="#FFFFFF"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="hor-sec7__summary">{herb.summary}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ==============================================================
            [섹션 08] 진한의원 맞춤 치료 4종 (y: 11939)
        ============================================================== */}
        <section className="hor-sec8" aria-labelledby="hor-sec8-title">
          <h2 id="hor-sec8-title" className="hor-section-title">
            진한의원 <strong>맞춤 치료</strong>
          </h2>

          <div className="hor-sec8__list">
            {TREATMENTS.map((item) => (
              <article key={item.name} className="hor-sec8__row">
                <div className="hor-sec8__photo-wrap">
                  <Image
                    className="hor-sec8__photo"
                    src={item.img}
                    alt={item.name}
                    width={565}
                    height={395}
                    loading="eager"
                  unoptimized
                  />
                </div>
                <div className="hor-sec8__copy">
                  <h3 className="hor-sec8__item-title">{item.name}</h3>
                  <p className="hor-sec8__item-desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
