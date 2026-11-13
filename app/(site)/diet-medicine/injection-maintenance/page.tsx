import type { Metadata } from "next";
import "./injection-maintenance-page.css";

export const metadata: Metadata = {
  title: "비만주사제, 식욕억제제 복용 후 유지관리 | 진한의원",
  description:
    "GLP-1·GIP 비만주사제(마운자로·위고비 등) 및 식욕억제제 중단 후 나타날 수 있는 식욕·체중 변화를 살펴보고, 요요현상을 최소화하는 단약 후 유지 관리 한약 처방을 안내합니다.",
};

const ASSET_BASE = "/images/diet-medicine/injection-maintenance";

interface AppetiteChangeItem {
  num: string;
  iconModClass: string;
  iconSrc: string;
  iconAlt: string;
  line1: string;
  line2: string;
  tightLine1?: boolean;
}

const APPETITE_CHANGES: AppetiteChangeItem[] = [
  {
    num: "POINT 01",
    iconModClass: "im-point-card__icon--01",
    iconSrc: `${ASSET_BASE}/sec03-point01-icon.png`,
    iconAlt: "배고픔을 더 자주 느끼는 모습 일러스트",
    line1: "배고픔을",
    line2: "더 자주 느낌",
  },
  {
    num: "POINT 02",
    iconModClass: "im-point-card__icon--02",
    iconSrc: `${ASSET_BASE}/sec03-point02-icon.png`,
    iconAlt: "한 끼 식사량 증가 일러스트",
    line1: "한 끼 식사량",
    line2: "증가",
  },
  {
    num: "POINT 03",
    iconModClass: "im-point-card__icon--03",
    iconSrc: `${ASSET_BASE}/sec03-point03-icon.png`,
    iconAlt: "간식과 야식에 대한 욕구 증가 일러스트",
    line1: "간식·야식에 대한",
    line2: "욕구 증가",
    tightLine1: true,
  },
  {
    num: "POINT 04",
    iconModClass: "im-point-card__icon--04",
    iconSrc: `${ASSET_BASE}/sec03-point04-icon.png`,
    iconAlt: "식사 후 포만감 유지 시간 감소 일러스트",
    line1: "식사 후 포만감",
    line2: "유지 시간 감소",
  },
  {
    num: "POINT 05",
    iconModClass: "im-point-card__icon--05",
    iconSrc: `${ASSET_BASE}/sec03-point05-icon.png`,
    iconAlt: "체중이 서서히 증가하는 체중계 일러스트",
    line1: "체중이",
    line2: "서서히 증가",
  },
];

interface MedicinePrescriptionItem {
  id: string;
  rowModClass: string;
  name: string;
  imgSrc: string;
  imgAlt: string;
  lines: string[];
  tightFirstLine?: boolean;
}

/* Figma Y좌표 기준 실제 시각 순서: 1) 유지환(y=6134) → 2) 올인원(y=6552) → 3) 지방올킬캡슐(y=6970) */
const MEDICINE_PRESCRIPTIONS: MedicinePrescriptionItem[] = [
  {
    id: "yujihwan",
    rowModClass: "im-medicine-row--yujihwan",
    name: "유지환(요요방지환)",
    imgSrc: `${ASSET_BASE}/sec05-prod01-yujihwan.png`,
    imgAlt: "진한의원 유지환(요요방지환) 패키지 및 환약 사진",
    lines: [
      "체중 감량 후 요요현상이 걱정되는 분들을 위한 처방으로",
      "늘어나는 식욕을 조절하고 체중을 안정적으로 유지",
      "하도록 도와, 감량 후 체중 유지가 어렵거나 식욕 조절이",
      "힘든 분들에게 추천드립니다.",
    ],
  },
  {
    id: "allinone",
    rowModClass: "im-medicine-row--allinone",
    name: "올인원",
    imgSrc: `${ASSET_BASE}/sec05-prod02-allinone.png`,
    imgAlt: "진한의원 진 올인원 제품 세트 사진",
    lines: [
      "위가 약하고 쉽게 피로해지는 분들을 위한 복합 처방입니다.",
      "식욕 조절과 체지방 감소를 돕고, 기력 저하와 소화불량,",
      "복부 팽만감, 부종 등을 함께 관리하고 싶은 분들에게 추천",
      "드립니다.",
    ],
    tightFirstLine: true,
  },
  {
    id: "allkill",
    rowModClass: "im-medicine-row--allkill",
    name: "지방올킬캡슐",
    imgSrc: `${ASSET_BASE}/sec05-prod03-allkill.png`,
    imgAlt: "진한의원 지방올킬캡슐 제품 사진",
    lines: [
      "강한 식욕 조절과 체지방 감소가 필요한 분들을 위한",
      "처방입니다. 식욕 억제와 지방 연소를 돕고, 부종과",
      "복부 팽만감 개선까지 고려해 체중 감량이 어렵거나",
      "복부 지방이 고민인 분들에게 추천드립니다.",
    ],
  },
];

export default function InjectionMaintenancePage() {
  return (
    <div className="im-page">
      <div className="im-page__content">
        {/* 상단 페이지 제목 및 점선 구분선 (701:359, 701:358) */}
        <header className="im-top-header">
          <p className="im-top-header__title">
            비만주사제, 식욕억제제 복용 후 유지관리
          </p>
          <svg
            viewBox="0 0 1440 1"
            preserveAspectRatio="none"
            className="im-top-header__divider"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="0.5"
              x2="1440"
              y2="0.5"
              stroke="#000000"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </header>

        {/* SECTION 01 — 감량보다 중요한 유지 관리 (701:7) */}
        <section className="im-hero" aria-labelledby="im-hero-title">
          <div className="im-hero__photo-wrap">
            <img
              src={`${ASSET_BASE}/sec01-hero-photo.png`}
              alt="마운자로 단약, 목표 체중 도달 이후의 유지 관리 안내 이미지"
              className="im-hero__photo"
            />
          </div>
          <div className="im-hero__panel">
            <p className="im-hero__kicker">감량보다 중요한 유지 관리</p>
            <h1 id="im-hero-title" className="im-hero__title">
              비만주사제,
              <br />
              식욕억제제
              <br />
              <span className="im-hero__title-accent">복용 후 유지관리</span>
            </h1>
            <p className="im-hero__desc">
              최근 GLP-1, GIP 성분의 다이어트 주사제나{" "}
              <br className="im-pc-br" />
              식욕억제제 중단 후 요요현상을 걱정하는{" "}
              <br className="im-pc-br" />
              분들이 많습니다. 혼자 식욕을 조절하고 체중을{" "}
              <br className="im-pc-br" />
              유지하기 어렵다면, 장기 복용을 고려한{" "}
              <br className="im-pc-br" />
              다이어트 한약 처방으로 요요현상을 최소화{" "}
              <br className="im-pc-br" />
              할 수 있도록 도와드립니다.
            </p>
          </div>
        </section>

        {/* SECTION 02 — 주사제 중단 후 체중 변화 및 SURMOUNT-4 임상시험 그래프 (701:14) */}
        <section className="im-sec02" aria-labelledby="im-sec02-title">
          <h2 id="im-sec02-title" className="im-sec-title">
            마운자로 중단 후 체중은
            <br />
            <strong className="im-fw-700">어떻게 달라졌을까?</strong>
          </h2>

          <p className="im-body-text im-sec02__p1">
            최근에 마운자로 및 위고비 등 다이어트 주사제로 식욕을 조절하고{" "}
            <br className="im-pc-br" />
            체중감량을 하시는 분들이 많으신데요.
            <br />
            무엇보다 마운자로 단약 후 요요현상을 막으려면 감량시에 잡힌{" "}
            <br className="im-pc-br" />
            식습관과 생활 패턴을 유지하는 것이 제일 중요합니다.
          </p>

          <p className="im-body-text im-sec02__p2">
            하지만 주사제 단약 후 식욕억제 효과가 떨어지다보니{" "}
            <br className="im-pc-br" />
            마운자로 단약시 마운자로의 주성분인 티르제파타이드를 이용한 임상 시험에서도{" "}
            <br className="im-pc-br" />
            약물 중단 후 상당 부분에서 체중의 재증가가 관찰되었습니다.
          </p>

          <div className="im-sec02__card">
            <h3 className="im-pill-badge">SURMOUNT-4 임상시험 결과</h3>

            <p className="im-body-text im-sec02__card-lead">
              마운자로의 성분인 티르제파타이드(tirzepatide)를 36주 동안 사용해{" "}
              <br className="im-pc-br" />
              체중이 줄어든 사람들을 두 그룹으로 나누어, 이후 52주간 경과를 비교했습니다.
            </p>

            {/* SURMOUNT-4 그래프 (702:423) — SVG 벡터 + HTML 텍스트 분리 */}
            <div
              className="im-graph"
              role="region"
              aria-label="SURMOUNT-4 임상시험 체중변화율 그래프"
            >
              <svg
                viewBox="0 0 1152 628"
                className="im-graph__svg"
                aria-hidden="true"
              >
                <defs>
                  {/* 702:388 좌측 배경 영역 그라데이션 */}
                  <linearGradient
                    id="im-grad-v23"
                    x1="0.5"
                    y1="0.0995"
                    x2="0.5"
                    y2="0.398"
                  >
                    <stop offset="0%" stopColor="#083560" stopOpacity="0" />
                    <stop offset="100%" stopColor="#083560" stopOpacity="1" />
                  </linearGradient>

                  {/* 702:389 우측 배경 영역 그라데이션 */}
                  <linearGradient
                    id="im-grad-v24"
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="0.3731"
                  >
                    <stop offset="0%" stopColor="#C7DAF2" stopOpacity="0" />
                    <stop offset="100%" stopColor="#C7DAF2" stopOpacity="1" />
                  </linearGradient>

                  {/* 702:385 0~36주 곡선 하단 면적 그라데이션 */}
                  <linearGradient
                    id="im-grad-v20"
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#083560" stopOpacity="1" />
                    <stop offset="100%" stopColor="#083560" stopOpacity="0" />
                  </linearGradient>

                  {/* 702:387 위약 전환 구간 하단 면적 그라데이션 */}
                  <linearGradient
                    id="im-grad-v22"
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="0.9911"
                  >
                    <stop offset="0%" stopColor="#608ABC" stopOpacity="1" />
                    <stop offset="100%" stopColor="#608ABC" stopOpacity="0" />
                  </linearGradient>

                  {/* 702:386 계속 투여 구간 하단 면적 그라데이션 */}
                  <linearGradient
                    id="im-grad-v21"
                    x1="0.5"
                    y1="0.0073"
                    x2="0.5"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#083560" stopOpacity="1" />
                    <stop offset="100%" stopColor="#083560" stopOpacity="0" />
                  </linearGradient>

                  {/* 말풍선 박스 그림자 */}
                  <filter
                    id="im-callout-shadow"
                    x="-15%"
                    y="-15%"
                    width="135%"
                    height="145%"
                  >
                    <feDropShadow
                      dx="4"
                      dy="4"
                      stdDeviation="5"
                      floodColor="#000000"
                      floodOpacity="0.12"
                    />
                  </filter>
                </defs>

                {/* 배경 구간 그라데이션 (702:388, 702:389) */}
                <rect
                  x="166"
                  y="134"
                  width="399"
                  height="402"
                  fill="url(#im-grad-v23)"
                  opacity="0.13"
                />
                <rect
                  x="565"
                  y="134"
                  width="587"
                  height="402"
                  fill="url(#im-grad-v24)"
                  opacity="0.5"
                />

                {/* 36~88주 면적 그라데이션 (702:386, 702:387) */}
                <g transform="translate(565 399)">
                  <path
                    d="M398 137L398 65L0 0L0 137L398 137Z"
                    fill="url(#im-grad-v21)"
                  />
                </g>
                <g transform="translate(565 194)">
                  <path
                    d="M398 337L398 0L0 186L0 337L398 337Z"
                    fill="url(#im-grad-v22)"
                  />
                </g>

                {/* Y축 및 X축 (702:368, 702:369) */}
                <line
                  x1="116"
                  y1="86"
                  x2="116"
                  y2="534"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <line
                  x1="116"
                  y1="534"
                  x2="1152"
                  y2="534"
                  stroke="#000000"
                  strokeWidth="2"
                />

                {/* 0~36주 곡선 하단 면적 그라데이션 (702:385) */}
                <g transform="translate(166 137)">
                  <path
                    d="M0 398L0 0C98.4 189.6 307 253 399 261L399 398L0 398Z"
                    fill="url(#im-grad-v20)"
                  />
                </g>

                {/* 그래프 곡선 및 직선 3종 (702:378, 702:379, 702:380) */}
                <g transform="translate(167 134)">
                  <path
                    d="M0 0L-1.37279 0.60453C30.7916 73.6445 150.771 227.792 373.776 261.483L374 260L374.224 258.517C152.429 225.008 33.2084 71.6888 1.37279 -0.60453L0 0Z"
                    fill="#083560"
                  />
                </g>
                <line
                  x1="543"
                  y1="392"
                  x2="963"
                  y2="196"
                  stroke="#608ABC"
                  strokeWidth="3"
                />
                <line
                  x1="543"
                  y1="394"
                  x2="967"
                  y2="464"
                  stroke="#083560"
                  strokeWidth="3"
                />

                {/* 데이터 포인트 원형 마커 4개 (702:381~384) */}
                <circle
                  cx="166.5"
                  cy="135.5"
                  r="11.5"
                  fill="#FFFFFF"
                  stroke="#083560"
                  strokeWidth="8"
                />
                <circle
                  cx="542.5"
                  cy="392.5"
                  r="11.5"
                  fill="#FFFFFF"
                  stroke="#083560"
                  strokeWidth="8"
                />
                <circle
                  cx="962.5"
                  cy="195.5"
                  r="11.5"
                  fill="#FFFFFF"
                  stroke="#608ABC"
                  strokeWidth="8"
                />
                <circle
                  cx="962.5"
                  cy="462.5"
                  r="11.5"
                  fill="#FFFFFF"
                  stroke="#083560"
                  strokeWidth="8"
                />

                {/* 상단 투여 기간 화살표 배너 2종 (702:390, 702:392) */}
                <path
                  transform="translate(167 0)"
                  d="M0 0L398 0L442 50L398 100L0 100L0 0Z"
                  fill="#A4B4C4"
                />
                <path
                  transform="translate(583 0)"
                  d="M0 0L502.367 0L561 50L502.367 100L0 100L42 50L0 0Z"
                  fill="#A2C1E8"
                />

                {/* 말풍선 외곽 도형 3종 (702:400, 702:403, 702:411) */}
                <path
                  transform="translate(354 254)"
                  d="M188 0C193.523 0 198 4.47715 198 10L198 83C198 88.5229 193.523 93 188 93L174.637 93L179 117L160.091 93L10 93C4.47715 93 0 88.5229 0 83L0 10C0 4.47715 4.47715 0 10 0L188 0Z"
                  fill="#FFFFFF"
                  stroke="#083560"
                  strokeWidth="1"
                  filter="url(#im-callout-shadow)"
                />
                <path
                  transform="translate(687 147)"
                  d="M230 0C235.523 0 240 4.47715 240 10L240 16.0908L264 35L240 30.6357L240 83C240 88.5229 235.523 93 230 93L10 93C4.47715 93 0 88.5228 0 83L0 10C0 4.47715 4.47715 0 10 0L230 0Z"
                  fill="#FFFFFF"
                  stroke="#608ABC"
                  strokeWidth="1"
                  filter="url(#im-callout-shadow)"
                />
                <path
                  transform="translate(890 324)"
                  d="M235 0C240.523 0 245 4.47715 245 10L245 83C245 88.5229 240.523 93 235 93L60.6367 93L65 117L46.0908 93L10 93C4.47715 93 0 88.5229 0 83L0 10C0 4.47715 4.47715 0 10 0L235 0Z"
                  fill="#FFFFFF"
                  stroke="#083560"
                  strokeWidth="1"
                  filter="url(#im-callout-shadow)"
                />
              </svg>

              {/* 그래프 HTML 텍스트 레이블 */}
              <p className="im-graph__y-unit">
                체중변화율
                <br />
                (%)
              </p>

              <p className="im-graph__phase im-graph__phase--left">
                36주 동안
                <br />
                티르제파타이드 투여
              </p>
              <p className="im-graph__phase im-graph__phase--right">
                이후 52주 :
                <br />
                계속 투여 vs 위약 전환
              </p>

              <span className="im-graph__y-tick im-graph__y-tick--0">0</span>
              <span className="im-graph__y-tick im-graph__y-tick--10">-10</span>
              <span className="im-graph__y-tick im-graph__y-tick--20">-20</span>
              <span className="im-graph__y-tick im-graph__y-tick--30">-30</span>

              <p className="im-graph__x-tick im-graph__x-tick--0w">
                0주
                <br />
                (시작)
              </p>
              <p className="im-graph__x-tick im-graph__x-tick--36w">36주</p>
              <p className="im-graph__x-tick im-graph__x-tick--88w">
                88주
                <br />
                (36주 이후 52주)
              </p>

              <div className="im-graph__callout im-graph__callout--36w">
                <span className="im-graph__callout-label">
                  36주 시점 평균 체중
                </span>
                <div className="im-graph__callout-value-row">
                  <strong className="im-graph__callout-num">-20.9%</strong>
                </div>
              </div>

              <div className="im-graph__callout im-graph__callout--placebo">
                <span className="im-graph__callout-label">위약 전환 그룹</span>
                <div className="im-graph__callout-value-row">
                  <strong className="im-graph__callout-num">+14.0%</strong>
                  <strong className="im-graph__callout-sub">체중증가</strong>
                </div>
              </div>

              <div className="im-graph__callout im-graph__callout--continued">
                <span className="im-graph__callout-label">계속 투여 그룹</span>
                <div className="im-graph__callout-value-row">
                  <strong className="im-graph__callout-sub">추가</strong>
                  <strong className="im-graph__callout-num">-5.5%</strong>
                  <strong className="im-graph__callout-sub">체중 감소</strong>
                </div>
              </div>
            </div>

            {/* 그래프 하단 체크 요약 3줄 (702:431) */}
            <ul className="im-sec02__summary">
              <li className="im-sec02__summary-item">
                <img
                  src={`${ASSET_BASE}/icon-check-box.png`}
                  alt=""
                  aria-hidden="true"
                  className="im-sec02__check-icon"
                />
                <p className="im-sec02__summary-text">
                  첫 36주동안 티르제파타이드 사용 시 평균 체중이{" "}
                  <strong className="im-fw-700">-20.9% 감소</strong>했습니다.
                </p>
              </li>
              <li className="im-sec02__summary-item">
                <img
                  src={`${ASSET_BASE}/icon-check-box.png`}
                  alt=""
                  aria-hidden="true"
                  className="im-sec02__check-icon"
                />
                <p className="im-sec02__summary-text">
                  이후 52주간 약을 계속 투여한 그룹은{" "}
                  <strong className="im-fw-700">추가로 5.5%</strong> 체중이{" "}
                  <strong className="im-fw-700">더 감소했습니다.</strong>
                </p>
              </li>
              <li className="im-sec02__summary-item">
                <img
                  src={`${ASSET_BASE}/icon-check-box.png`}
                  alt=""
                  aria-hidden="true"
                  className="im-sec02__check-icon"
                />
                <p className="im-sec02__summary-text">
                  같은 기간 위약으로 바꾼 그룹은 체중이 평균{" "}
                  <strong className="im-fw-700">14.0% </strong>다시 늘었습니다.
                </p>
              </li>
            </ul>
          </div>

          <p className="im-footnote im-sec02__footnote">
            ※ 수치는 36주 시점 체중 대비 변화율입니다. 참가자군의 평균 결과로 개인별 차이가 있을 수 있습니다. (출처 : JAMA, SURMOUNT-4)
          </p>
        </section>

        {/* SECTION 03 — 단약 후 나타날 수 있는 변화 5가지 (716:2) */}
        <section className="im-sec03" aria-labelledby="im-sec03-title">
          <h2 id="im-sec03-title" className="im-sec-title">
            단약 후 <strong className="im-fw-700">나타날 수 있는 변화</strong>
          </h2>

          <p className="im-body-text im-sec03__intro">
            약물을 중단할시 식욕억제 효과가 점차 감소하는데,{" "}
            <br className="im-pc-br" />
            티르제파타이드의 반감기는 약 5일입니다.
            <br />
            반감기란 체내 약물의 양이 절반 수준으로 감소하는데 걸리는 시간을 의미합니다.{" "}
            <br className="im-pc-br" />
            대략 25~30일 정도 지나면 약물 대부분이 체내에서 제거되는데요.
          </p>

          <h3 className="im-pill-badge im-sec03__badge">
            <span>
              단약 후{" "}
              <strong className="im-pill-badge__accent">
                나타날 수 있는 변화 5가지
              </strong>
            </span>
          </h3>

          <ol className="im-sec03__grid">
            {APPETITE_CHANGES.map((item) => (
              <li key={item.num} className="im-point-card">
                <div className="im-point-card__icon-box">
                  <img
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    className={`im-point-card__icon ${item.iconModClass}`}
                  />
                </div>
                <p className="im-point-card__num">{item.num}</p>
                <p className="im-point-card__title">
                  <span
                    className={
                      item.tightLine1 ? "im-point-card__title-tight" : undefined
                    }
                  >
                    {item.line1}
                  </span>
                  <br />
                  {item.line2}
                </p>
              </li>
            ))}
          </ol>

          <p className="im-footnote im-sec03__caution">
            ※ 식욕이 돌아오는 시점과 정도는 개인차가 큽니다.
          </p>

          <p className="im-body-text im-sec03__outro">
            일부 사람은 약물 중단 후 비교적 빠르게 배고픔을 느낄 수 있고,{" "}
            <br className="im-pc-br" />
            어떤 사람은 식욕 변화가 서서히 나타날 수 있어서{" "}
            <br className="im-pc-br" />
            현재 모든 사람에게 적용할 수 있는 정확한 식욕 회복 시점은 아직 확립되어 있지 않습니다.
          </p>
        </section>

        {/* SECTION 04 — 마운자로 단약 관리 및 테이퍼링 관련 설명 (718:128) */}
        <section className="im-sec04" aria-labelledby="im-sec04-title">
          <div className="im-sec04__title-wrap">
            <h2 id="im-sec04-title" className="im-sec-title">
              마운자로 단약,
              <br />
              <strong className="im-fw-700">어떻게 관리해야 할까요?</strong>
            </h2>
            <img
              src={`${ASSET_BASE}/sec04-red-star.png`}
              alt=""
              aria-hidden="true"
              className="im-sec04__star"
            />
          </div>

          <p className="im-body-text im-sec04__p1">
            서서히 맞는 용량을 줄여가는 테이퍼링을 하기도 하지만,
            <br />
            <strong className="im-red-underline">
              마운자로나 위고비 등을 대체해서 식욕 조절과 체지방 감소를 도와주는{" "}
              <br className="im-pc-br" />
              다이어트 한약을 복용하시는 분들이 점차 많아지고 있습니다.
            </strong>
          </p>

          <p className="im-body-text im-sec04__p2">
            유지환은 단약 후 한번씩 조절되지 않은 식욕을{" "}
            <br className="im-pc-br" />
            잡아주고, 지방 연소와 신진 대사를 활발히 해주는 데 도움이 됩니다.
          </p>

          <div className="im-tapering-card">
            <h3 className="im-tapering-card__badge">
              <span>
                마운자로{" "}
                <span className="im-tapering-card__badge-accent">
                  테이퍼링 방법
                </span>
              </span>
            </h3>

            <p className="im-body-text im-tapering-card__def">
              테이퍼링은 약을 갑자기 중단하는 대신,{" "}
              <strong className="im-fw-700">
                용량을 낮추거나 <br className="im-pc-br" />
                투여 간격을 늘려가며 조절하는 방식
              </strong>
              입니다.
            </p>

            <hr className="im-tapering-card__divider" />

            <ul className="im-tapering-card__list">
              <li className="im-tapering-card__item">
                <div className="im-tapering-card__label-group">
                  <img
                    src={`${ASSET_BASE}/icon-check-box.png`}
                    alt=""
                    aria-hidden="true"
                    className="im-tapering-card__icon"
                  />
                  <strong className="im-tapering-card__term">
                    용량 단계적 감량(Step-down)
                  </strong>
                </div>
                <p className="im-tapering-card__desc">
                  현재 용량에서 한 단계씩 낮춰 복용합니다.
                </p>
              </li>

              <li className="im-tapering-card__item">
                <div className="im-tapering-card__label-group">
                  <img
                    src={`${ASSET_BASE}/icon-check-box.png`}
                    alt=""
                    aria-hidden="true"
                    className="im-tapering-card__icon"
                  />
                  <strong className="im-tapering-card__term">
                    투여 간격 연장(Interval extension)
                  </strong>
                </div>
                <p className="im-tapering-card__desc">
                  주사 간격을 조금씩 늘립니다.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 05 — 감량 이후에도 이어지는 다이어트 한약 처방 (718:198) */}
        <section className="im-sec05" aria-labelledby="im-sec05-title">
          <h2 id="im-sec05-title" className="im-sec-title">
            감량 이후에도 이어지는
            <br />
            <strong className="im-fw-700">다이어트 한약 처방</strong>
          </h2>

          <p className="im-body-text im-sec05__intro">
            다이어트 주사제나 식욕억제제 중단 후에도 식욕 조절과 체중 유지가 중요합니다.{" "}
            <br className="im-pc-br" />
            진한의원은 단약 후 유지 관리를 위한 다이어트 한약 처방을 안내합니다.
          </p>

          <ul className="im-sec05__list">
            {MEDICINE_PRESCRIPTIONS.map((med) => (
              <li
                key={med.id}
                className={`im-medicine-row ${med.rowModClass}`}
              >
                <div className="im-medicine-row__thumb">
                  <img
                    src={med.imgSrc}
                    alt={med.imgAlt}
                    className="im-medicine-row__img"
                  />
                </div>
                <div className="im-medicine-row__body">
                  <h3 className="im-medicine-row__name">{med.name}</h3>
                  <p className="im-medicine-row__desc">
                    {med.lines.map((line, idx) => (
                      <span
                        key={idx}
                        className={
                          idx === 0 && med.tightFirstLine
                            ? "im-medicine-row__tight-line"
                            : undefined
                        }
                      >
                        {line}
                        {idx < med.lines.length - 1 && (
                          <>
                            {" "}
                            <br className="im-pc-br" />
                          </>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
