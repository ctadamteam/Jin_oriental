'use client';

/**
 * PC CQW 스케일링 헬퍼:
 * PC(>=1024px)에서 1920x645 Figma 원본 캔버스 비율을 유지하면서
 * 1024px ~ 1920px 모든 데스크톱 해상도에서 글자·카드·여백이 깨지지 않도록 비례 스케일링합니다.
 */
export const cqw = (px: number) => `calc(${px} * 100cqw / 1920)`;

/**
 * 모바일 CQW 스케일링 헬퍼:
 * 모바일(<1024px)에서 1~11번 모든 배너를 5~9번 모바일 전용 이미지(1024x1536, 2:3 비율)와
 * 동일한 aspect-[2/3] 컨테이너(가로 390px 기준 세로 585px)로 통일하고 내부 요소를 비례 배치합니다.
 */
export const mcqw = (pxAt390: number) => `calc(${pxAt390} * 100cqw / 390)`;

export type CaseBannerData = {
  id: number;
  pcImg: string;
  moImg: string;
  subTitle: string;
  title: string;
  weightLoss: string;
  period: string;
  fixDotOnPc?: boolean;
  metrics: {
    label: string;
    before: string;
    after: string;
  }[];
};

export const CASE_BANNERS: CaseBannerData[] = [
  {
    id: 5,
    pcImg: '/images/main/banners/b5_pc.png?v=20261021',
    moImg: '/images/main/banners/b5_mo.png?v=20261021',
    subTitle: '진한의원의 진짜 사례만 모아모아',
    title: '고도비만다이어트',
    weightLoss: '-24.3kg',
    period: '감량 기간 4개월',
    metrics: [
      { label: '체중(kg)', before: '84.5', after: '60.2' },
      { label: '체수분(L)', before: '31.9', after: '29.2' },
      { label: '체지방량(kg)', before: '41.4', after: '20.6' },
      { label: '내장지방레벨', before: '20', after: '9' },
    ],
  },
  {
    id: 6,
    pcImg: '/images/main/banners/b6_pc.png',
    moImg: '/images/main/banners/b6_mo.png',
    subTitle: '진한의원의 진짜 사례만 모아모아',
    title: '출산후다이어트',
    weightLoss: '-21kg',
    period: '감량 기간 4개월',
    fixDotOnPc: true,
    metrics: [
      { label: '체중(kg)', before: '76.3', after: '55.3' },
      { label: '체수분(L)', before: '30.3', after: '28.1' },
      { label: '체지방량(kg)', before: '35.3', after: '17.2' },
      { label: '내장지방레벨', before: '19', after: '7' },
    ],
  },
  {
    id: 7,
    pcImg: '/images/main/banners/b7_pc.png',
    moImg: '/images/main/banners/b7_mo.png',
    subTitle: '진한의원의 진짜 사례만 모아모아',
    title: '갱년기성인병다이어트',
    weightLoss: '-11.6kg',
    period: '감량 기간 3개월',
    metrics: [
      { label: '체중(kg)', before: '67.7', after: '56.1' },
      { label: '체수분(L)', before: '30.0', after: '29.7' },
      { label: '체지방량(kg)', before: '39.8', after: '28.1' },
      { label: '내장지방레벨', before: '14', after: '7' },
    ],
  },
  {
    id: 8,
    pcImg: '/images/main/banners/b8_pc.png',
    moImg: '/images/main/banners/b8_mo.png',
    subTitle: '진한의원의 진짜 사례만 모아모아',
    title: '남성뱃살다이어트',
    weightLoss: '-16.9kg',
    period: '감량 기간 3개월',
    metrics: [
      { label: '체중(kg)', before: '93.5', after: '76.6' },
      { label: '체수분(L)', before: '46.1', after: '44.0' },
      { label: '체지방량(kg)', before: '30.9', after: '16.7' },
      { label: '내장지방레벨', before: '14', after: '6' },
    ],
  },
  {
    id: 9,
    pcImg: '/images/main/banners/b9_pc.png',
    moImg: '/images/main/banners/b9_mo.png',
    subTitle: '진한의원의 진짜 사례만 모아모아',
    title: '부종하체비만다이어트',
    weightLoss: '-13.8kg',
    period: '감량 기간 3개월',
    metrics: [
      { label: '체중(kg)', before: '70.3', after: '56.5' },
      { label: '체수분(L)', before: '23.5', after: '22.2' },
      { label: '체지방량(kg)', before: '27.0', after: '15.6' },
      { label: '내장지방레벨', before: '13', after: '6' },
    ],
  },
];

export const DETOX_STEPS = [
  {
    num: '01',
    title: '해독단계',
    bg: '#67A5D8',
    heightPx: 107,
    desc: '식독ㆍ수독ㆍ혈독이라는 노폐물을 간ㆍ신장ㆍ림프 해독을 통해 부종ㆍ만성염증ㆍ\n내장비만ㆍ배변이상 등을 1차적으로 개선한다.',
  },
  {
    num: '02',
    title: '집중감량단계',
    bg: '#2B6EA4',
    heightPx: 141,
    desc: '1:1 개인별 맞춤 처방으로 15일 단위로 연령ㆍ체질ㆍ체력ㆍ생활습관ㆍ\n질병유무ㆍ다른 다이어트 이력 등을 고려하여 탕약ㆍ환약ㆍ알약ㆍ캡슐 약을\n조제ㆍ처방해드립니다.',
  },
  {
    num: '03',
    title: '요요방지 및\n유지단계',
    bg: '#002D52',
    heightPx: 141,
    desc: '- 감량된 몸무게를 꾸준히 편안하게 유지할 수 있도록 유지환 처방\n- 체중 세트 포인트 정착을 위한 밀착관리\n- 피부탄력저하ㆍ탈모ㆍ현기증ㆍ체력저하ㆍ무기력감 등을 예방하고 회복을 도와드림.',
  },
];

export const QA_LEFT_ITEMS = [
  { q: '한약을 오래 복용하면 간이나 신장에 해롭지 않나요?', a: 'NO', isNo: true },
  { q: '갱년기, 폐경 이후에도 잘 안빠지는 뱃살이 정말 빠질까요?', a: 'YES', isNo: false },
  { q: '잠 못자거나 스트레스가 심해도 체중에 영향을 주나요?', a: 'YES', isNo: false },
  { q: '다이어트 한약은 누구나 같은 약을 먹나요?', a: 'NO', isNo: true },
  { q: '손발이 자주 붓고, 다리도 무거운데 붓기가 살이 될 수 있나요?', a: 'YES', isNo: false },
];

export const QA_RIGHT_ITEMS = [
  {
    q: '혈압약, 고지혈증, 당뇨약, 갑상선약을 먹고 있는데 같이 복용해도 되나요?',
    a: 'YES',
    isDescriptive: false,
  },
  {
    q: '비만주사와 식욕억제제를 여러번 시도했던 경우에도 다이어트 한약이\n효과가 있는지, 또한 유지 차원에도 복용해도 될까요?',
    a: 'YES',
    isDescriptive: false,
  },
  {
    q: '해독은 어떤 경우에 해야 하나요?',
    a: '붓기, 뱃살, 변비, 성인병, 만성 피부 염증 등',
    isDescriptive: true,
  },
  {
    q: '체중감량 후 요요현상을 막으려면요?',
    a: '주기적인 해독과 유지한약',
    isDescriptive: true,
  },
];

export const SLIDE_LABELS = [
  '1. 다이어트 요요 관리',
  '2. 한방내과 전문의 비만 진료',
  '3. 진한의원 후기',
  '4. 방송 및 언론매체 다수 출연',
  '5. 고도비만다이어트 감량 사례',
  '6. 출산후다이어트 감량 사례',
  '7. 갱년기성인병다이어트 감량 사례',
  '8. 남성뱃살다이어트 감량 사례',
  '9. 부종하체비만다이어트 감량 사례',
  '10. 진 해독 다이어트 3단계 프로그램',
  '11. 자주 묻는 질문 (Q&A)',
];

/**
 * 2번 배너 손글씨 타이틀 (마디별 SVG 벡터 에셋 + 드래그 선택 가능한 실제 HTML 텍스트 세트)
 * - PC: 1줄 나란히 배치
 * - 모바일: 화면 폭에 맞춰 2줄로 자연스럽게 줄바꿈되면서 드래그·복사 100% 작동
 */
export function Banner2HandwritingTitle({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    const h = 45;
    const scale = h / 89;
    return (
      <h2
        data-selectable-text
        aria-label="한방내과 전문의는 비만을 다르게 진단합니다."
        className="w-full flex flex-col items-center select-text cursor-text"
        style={{ rowGap: mcqw(6) }}
      >
        {/* 1줄: 한방내과 전문의는 비만을 */}
        <span
          className="inline-flex items-center justify-center select-text cursor-text"
          style={{ columnGap: mcqw(8) }}
        >
          {/* 한방내과 전문의는 (464x89) */}
          <span
            className="relative inline-flex items-center select-text cursor-text shrink-0"
            style={{ width: mcqw(464 * scale), height: mcqw(h) }}
          >
            <img
              src="/images/main/banners/b2_title_1.svg"
              alt=""
              aria-hidden="true"
              width={464}
              height={89}
              draggable={false}
              className="w-full h-full pointer-events-none select-none block"
            />
            <span
              data-selectable-text
              className="absolute inset-0 flex items-center text-transparent selection:bg-[#08325D]/20 selection:text-transparent select-text cursor-text font-bold whitespace-pre leading-none overflow-hidden"
              style={{ fontSize: mcqw(34), letterSpacing: '-0.05em' }}
            >
              {'한방내과 전문의는 '}
            </span>
          </span>

          {/* 비만을 (b2_title_2.svg 좌측 0~118 구간 클리핑) */}
          <span
            className="relative inline-flex items-center overflow-hidden select-text cursor-text shrink-0"
            style={{ width: mcqw(118 * scale), height: mcqw(h) }}
          >
            <img
              src="/images/main/banners/b2_title_2.svg"
              alt=""
              aria-hidden="true"
              width={256}
              height={89}
              draggable={false}
              className="absolute left-0 top-0 max-w-none pointer-events-none select-none block"
              style={{ width: mcqw(256 * scale), height: mcqw(h) }}
            />
            <span
              data-selectable-text
              className="absolute inset-0 flex items-center text-transparent selection:bg-[#08325D]/20 selection:text-transparent select-text cursor-text font-bold whitespace-pre leading-none overflow-hidden"
              style={{ fontSize: mcqw(34), letterSpacing: '-0.05em' }}
            >
              {'비만을 '}
            </span>
          </span>
        </span>

        {/* 2줄: 다르게 진단합니다. */}
        <span
          className="inline-flex items-center justify-center select-text cursor-text"
          style={{ columnGap: mcqw(8) }}
        >
          {/* 다르게 (b2_title_2.svg 우측 120~256 구간 클리핑) */}
          <span
            className="relative inline-flex items-center overflow-hidden select-text cursor-text shrink-0"
            style={{ width: mcqw(136 * scale), height: mcqw(h) }}
          >
            <img
              src="/images/main/banners/b2_title_2.svg"
              alt=""
              aria-hidden="true"
              width={256}
              height={89}
              draggable={false}
              className="absolute top-0 max-w-none pointer-events-none select-none block"
              style={{
                left: mcqw(-120 * scale),
                width: mcqw(256 * scale),
                height: mcqw(h),
              }}
            />
            <span
              data-selectable-text
              className="absolute inset-0 flex items-center text-transparent selection:bg-[#08325D]/20 selection:text-transparent select-text cursor-text font-bold whitespace-pre leading-none overflow-hidden"
              style={{ fontSize: mcqw(34), letterSpacing: '-0.05em' }}
            >
              {'다르게 '}
            </span>
          </span>

          {/* 진단합니다. (262x89) */}
          <span
            className="relative inline-flex items-center select-text cursor-text shrink-0"
            style={{ width: mcqw(262 * scale), height: mcqw(h) }}
          >
            <img
              src="/images/main/banners/b2_title_3.svg"
              alt=""
              aria-hidden="true"
              width={262}
              height={89}
              draggable={false}
              className="w-full h-full pointer-events-none select-none block"
            />
            <span
              data-selectable-text
              className="absolute inset-0 flex items-center text-transparent selection:bg-[#08325D]/20 selection:text-transparent select-text cursor-text font-bold whitespace-pre leading-none overflow-hidden"
              style={{ fontSize: mcqw(34), letterSpacing: '-0.05em' }}
            >
              {'진단합니다.'}
            </span>
          </span>
        </span>
      </h2>
    );
  }

  const chunks = [
    {
      svg: '/images/main/banners/b2_title_1.svg',
      text: '한방내과 전문의는 ',
      width: 464,
      height: 89,
    },
    {
      svg: '/images/main/banners/b2_title_2.svg',
      text: '비만을 다르게 ',
      width: 256,
      height: 89,
    },
    {
      svg: '/images/main/banners/b2_title_3.svg',
      text: '진단합니다.',
      width: 262,
      height: 89,
    },
  ];

  return (
    <h2
      data-selectable-text
      aria-label="한방내과 전문의는 비만을 다르게 진단합니다."
      className="flex flex-nowrap items-center select-text cursor-text"
      style={{ gap: cqw(10) }}
    >
      {chunks.map((chunk, i) => (
        <span key={i} className="relative inline-flex items-center select-text cursor-text">
          <img
            src={chunk.svg}
            alt=""
            aria-hidden="true"
            width={chunk.width}
            height={chunk.height}
            draggable={false}
            className="w-auto pointer-events-none select-none block"
            style={{ height: cqw(89) }}
          />
          <span
            data-selectable-text
            className="absolute inset-0 flex items-center text-transparent selection:bg-[#08325D]/20 selection:text-transparent select-text cursor-text font-bold whitespace-pre leading-none overflow-hidden"
            style={{
              fontSize: cqw(64),
              letterSpacing: '-0.05em',
            }}
          >
            {chunk.text}
          </span>
        </span>
      ))}
    </h2>
  );
}

/**
 * 10번 배너 원형 인포그래픽(493x493) 외곽 3방향 순환 화살표 통합 SVG 오버레이
 * Figma absoluteRenderBounds 기준 (원형 기준점 x:946, y:1770)
 * - Arrow 1 (571:192): translate(38.9786, 31.5122)
 * - Arrow 2 (571:193): translate(247.7244, 43.2177)
 * - Arrow 3 (571:194): translate(67.2387, 349.2439)
 */
export function Banner10ArrowsOverlay() {
  return (
    <svg
      viewBox="0 0 493 493"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 w-full h-full overflow-visible"
    >
      {/* Arrow 1: 좌상단 (01 비운다 외곽 호, 8시 → 12시) */}
      <g transform="translate(38.9786 31.5122)">
        <path
          d="M26.7056 310.218C27.1024 310.945 28.0136 311.213 28.7408 310.817C29.4681 310.42 29.7361 309.509 29.3393 308.781L28.0225 309.5L26.7056 310.218ZM28.0225 309.5L29.3393 308.781C-44.171 174.026 43.3318 21.1394 204.115 11.986L204.029 10.4884L203.944 8.99072C41.1189 18.2604 -47.9337 173.393 26.7056 310.218L28.0225 309.5ZM205.149 11.487C205.7 10.8689 205.646 9.92064 205.028 9.36909L194.955 0.380786C194.336 -0.170765 193.388 -0.11678 192.837 0.501366C192.285 1.11954 192.339 2.06779 192.957 2.61934L201.911 10.6089L193.922 19.5631C193.37 20.1813 193.424 21.1295 194.042 21.6811C194.66 22.2327 195.609 22.1787 196.16 21.5605L205.149 11.487Z"
          fill="#5B9FDB"
        />
      </g>
      {/* Arrow 2: 우상단 (02 태운다 외곽 호, 12시 → 4시) */}
      <g transform="translate(247.7244 43.2177)">
        <path
          d="M1.5108 3.69079e-05C0.68223 -0.0057946 0.00581471 0.661167 -1.29685e-05 1.48973C-0.00584725 2.3183 0.661119 2.99472 1.48969 3.00055L1.50024 1.50029L1.5108 3.69079e-05ZM1.50024 1.50029L1.48969 3.00055C155.012 4.08088 246.279 154.783 176.284 299.847L177.635 300.499L178.986 301.151C249.871 154.244 157.39 1.09696 1.5108 3.69079e-05L1.50024 1.50029ZM176.219 300.994C176.492 301.776 177.347 302.189 178.13 301.916L190.878 297.466C191.66 297.193 192.073 296.337 191.8 295.555C191.527 294.773 190.671 294.36 189.889 294.633L178.557 298.588L174.602 287.257C174.329 286.474 173.473 286.061 172.691 286.335C171.909 286.608 171.496 287.463 171.769 288.245L176.219 300.994Z"
          fill="#266AA7"
        />
      </g>
      {/* Arrow 3: 하단 (03 채운다 외곽 호, 4시 → 8시) */}
      <g transform="translate(67.2387 349.2439)">
        <path
          d="M352.789 2.27005C353.213 1.55718 352.979 0.635491 352.266 0.211406C351.553 -0.212686 350.631 0.0214243 350.207 0.734292L351.498 1.50217L352.789 2.27005ZM351.498 1.50217L350.207 0.734292C271.63 132.819 95.2761 135.449 5.35188 1.61198L4.10523 2.44959L2.85857 3.2872C93.9251 138.824 273.004 136.383 352.789 2.27005L351.498 1.50217ZM4.39444 0.975805C3.5805 0.816063 2.79117 1.34641 2.63145 2.16036L0.0283608 15.4245C-0.131359 16.2384 0.398989 17.0278 1.21293 17.1875C2.02689 17.3472 2.81623 16.8169 2.97595 16.0029L5.28979 4.21261L17.0801 6.52644C17.8941 6.68618 18.6834 6.15584 18.8431 5.34188C19.0029 4.52793 18.4725 3.73859 17.6586 3.57886L4.39444 0.975805Z"
          fill="#013860"
        />
      </g>
    </svg>
  );
}
