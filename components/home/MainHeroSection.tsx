'use client';

import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { useBannerCarousel } from '../common/useBannerCarousel';

/**
 * PC CQW 스케일링 헬퍼:
 * PC(>=1024px)에서 1920x645 Figma 원본 캔버스 비율을 유지하면서
 * 1024px ~ 1920px 모든 데스크톱 해상도에서 글자·카드·여백이 깨지지 않도록 비례 스케일링합니다.
 */
const cqw = (px: number) => `calc(${px} * 100cqw / 1920)`;

/**
 * 모바일 CQW 스케일링 헬퍼:
 * 모바일(<1024px)에서 1~11번 모든 배너를 5~9번 모바일 전용 이미지(1024x1536, 2:3 비율)와
 * 동일한 aspect-[2/3] 컨테이너(가로 390px 기준 세로 585px)로 통일하고 내부 요소를 비례 배치합니다.
 */
const mcqw = (pxAt390: number) => `calc(${pxAt390} * 100cqw / 390)`;

type CaseBannerData = {
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

const CASE_BANNERS: CaseBannerData[] = [
  {
    id: 5,
    pcImg: '/images/main/banners/b5_pc.png',
    moImg: '/images/main/banners/b5_mo.png',
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

const DETOX_STEPS = [
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

const QA_LEFT_ITEMS = [
  { q: '한약을 오래 복용하면 간이나 신장에 해롭지 않나요?', a: 'NO', isNo: true },
  { q: '갱년기, 폐경 이후에도 잘 안빠지는 뱃살이 정말 빠질까요?', a: 'YES', isNo: false },
  { q: '잠 못자거나 스트레스가 심해도 체중에 영향을 주나요?', a: 'YES', isNo: false },
  { q: '다이어트 한약은 누구나 같은 약을 먹나요?', a: 'NO', isNo: true },
  { q: '손발이 자주 붓고, 다리도 무거운데 붓기가 살이 될 수 있나요?', a: 'YES', isNo: false },
];

const QA_RIGHT_ITEMS = [
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

/**
 * 2번 배너 손글씨 타이틀 (마디별 SVG 벡터 에셋 + 드래그 선택 가능한 실제 HTML 텍스트 세트)
 * - PC: 1줄 나란히 배치
 * - 모바일: 화면 폭에 맞춰 2줄로 자연스럽게 줄바꿈되면서 드래그·복사 100% 작동
 */
function Banner2HandwritingTitle({ isMobile = false }: { isMobile?: boolean }) {
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
      className={
        isMobile
          ? 'flex flex-wrap items-center select-text cursor-text'
          : 'flex flex-nowrap items-center select-text cursor-text'
      }
      style={
        isMobile
          ? { columnGap: mcqw(8), rowGap: mcqw(6) }
          : { gap: cqw(10) }
      }
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
            style={{ height: isMobile ? mcqw(36) : cqw(89) }}
          />
          <span
            data-selectable-text
            className="absolute inset-0 flex items-center text-transparent selection:bg-[#08325D]/20 selection:text-transparent select-text cursor-text font-bold whitespace-pre leading-none overflow-hidden"
            style={{
              fontSize: isMobile ? mcqw(28) : cqw(64),
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
 * 1번 배너 — 다이어트 요요 관리 (Figma 569:3)
 */
function Slide1() {
  return (
    <>
      {/* PC 버전 (1920x645 비례) */}
      <div
        className="hidden lg:block relative w-full aspect-[1920/645] bg-[#BFD3EA] overflow-hidden"
        style={{ containerType: 'inline-size' }}
      >
        <Image
          src="/images/main/banners/b1_bg.png"
          alt="다이어트 요요 관리 배경"
          fill
          sizes="100vw"
          priority
          draggable={false}
          className="object-cover object-center select-none pointer-events-none"
        />

        {/* 좌측 체성분(InBody) 카드 (569:17 @(266, 199) 394x403) */}
        <div
          className="absolute bg-[#002D52] flex flex-col justify-between shadow-lg"
          style={{
            left: '13.854%',
            top: '30.853%',
            width: '20.521%',
            height: '62.481%',
            padding: `${cqw(12)} ${cqw(10.5)} ${cqw(22)}`,
          }}
        >
          <div className="relative w-full" style={{ height: cqw(243) }}>
            <Image
              src="/images/main/banners/b1_inbody.png"
              alt="김효진 원장 인바디 체성분 분석 결과"
              fill
              sizes="(min-width: 1024px) 22vw, 100vw"
              priority
              draggable={false}
              className="object-fill select-none pointer-events-none"
            />
          </div>
          <ul
            data-selectable-text
            className="text-white font-['Pretendard'] select-text cursor-text"
            style={{
              fontSize: cqw(20),
              lineHeight: cqw(33),
              letterSpacing: cqw(-1),
              paddingLeft: cqw(14),
            }}
          >
            <li>
              ㆍ근육량 표준 대비 <strong className="font-bold text-[#A1B6CE]">+4kg</strong> 이상
            </li>
            <li>
              ㆍ체지방률 <strong className="font-bold text-[#A1B6CE]">16.4%</strong>
            </li>
            <li>
              ㆍ내장지방레벨 <strong className="font-bold text-[#A1B6CE]">3</strong>
            </li>
          </ul>
        </div>

        {/* 우측 메인 타이틀 (569:14 @(1184, 86)) */}
        <div
          className="absolute"
          style={{
            left: '61.667%',
            top: '13.333%',
          }}
        >
          <h2
            data-selectable-text
            className="font-['Paperlogy'] font-extrabold select-text cursor-text"
            style={{
              fontSize: cqw(80),
              lineHeight: cqw(90),
              letterSpacing: cqw(-4),
            }}
          >
            <span className="text-[#09325C]">다이어트 요요</span>
            <span className="text-white drop-shadow-[0_4px_10px_rgba(0,45,82,0.22)]">
              가
              <br />
              제일 걱정이시죠?
            </span>
          </h2>
        </div>

        {/* 우측 본문 설명 (569:16 @(1185, 300)) */}
        <div
          className="absolute"
          style={{
            left: '61.719%',
            top: '46.512%',
          }}
        >
          <p
            data-selectable-text
            className="font-['Pretendard'] font-normal text-black select-text cursor-text whitespace-pre-line"
            style={{
              fontSize: cqw(25),
              lineHeight: cqw(40),
              letterSpacing: cqw(-1.25),
            }}
          >
            {'진한의원 김효진 원장도 10년 이상 꾸준히 복용하며\n똑같은 체중을 유지 중입니다.\n슬림환을 복용하면 배고픔을 힘들게 참지 않아도 되고,\n운동안해도 살이 잘 빠집니다. 유지할 때 배고플 때\n한번씩 복용하면 요요현상 크게 걱정하지 않아도 되요.'}
          </p>
        </div>

        {/* 우측 하단 원장 이름 및 약력 배지 (569:21 @(1185, 553)) */}
        <div
          data-selectable-text
          className="absolute flex items-center select-text cursor-text"
          style={{
            left: '61.719%',
            top: '85.736%',
            gap: cqw(10),
          }}
        >
          <span
            className="inline-flex items-center justify-center rounded-full bg-[#093055] text-white font-['Pretendard'] font-semibold"
            style={{
              width: cqw(139),
              height: cqw(41),
              fontSize: cqw(25),
              letterSpacing: cqw(-1.25),
            }}
          >
            김효진 원장
          </span>
          <span
            className="font-['Pretendard'] font-normal text-[#01223D] whitespace-pre-line"
            style={{
              fontSize: cqw(15),
              lineHeight: cqw(20),
              letterSpacing: cqw(-0.75),
            }}
          >
            {'한방내과 전문의 · 임상 19년차\n대한한방비만학회 정회원'}
          </span>
        </div>
      </div>

      {/* 모바일 버전 (<1024px, 공통 aspect-[2/3] 고정 비율) */}
      <div
        className="lg:hidden relative w-full aspect-[2/3] bg-[#BFD3EA] overflow-hidden flex flex-col justify-between"
        style={{
          containerType: 'inline-size',
          padding: `${mcqw(22)} ${mcqw(20)} ${mcqw(20)}`,
        }}
      >
        <div className="select-text cursor-text" data-selectable-text>
          <h2
            className="font-['Paperlogy'] font-extrabold tracking-tight break-keep"
            style={{
              fontSize: mcqw(30),
              lineHeight: mcqw(36),
            }}
          >
            <span className="text-[#09325C]">다이어트 요요</span>
            <span className="text-white drop-shadow-[0_2px_6px_rgba(0,45,82,0.28)]">
              가
              <br />
              제일 걱정이시죠?
            </span>
          </h2>
          <p
            className="font-['Pretendard'] text-slate-900 break-keep"
            style={{
              marginTop: mcqw(10),
              fontSize: mcqw(13.8),
              lineHeight: mcqw(21),
            }}
          >
            진한의원 김효진 원장도 10년 이상 꾸준히 복용하며 똑같은 체중을 유지 중입니다. 슬림환을 복용하면 배고픔을 힘들게 참지 않아도 되고, 운동안해도 살이 잘 빠집니다. 유지할 때 배고플 때 한번씩 복용하면 요요현상 크게 걱정하지 않아도 되요.
          </p>
        </div>

        {/* 중단 원장 스튜디오 사진 + 이름/약력 배지 */}
        <div
          className="relative overflow-hidden bg-[#a9c3e2]"
          style={{
            height: mcqw(200),
            borderRadius: mcqw(14),
          }}
        >
          <Image
            src="/images/main/banners/b1_bg.png"
            alt="김효진 원장 스튜디오"
            fill
            sizes="100vw"
            priority
            draggable={false}
            className="object-cover object-[42%_center] scale-110 select-none pointer-events-none"
          />
          <div
            data-selectable-text
            className="absolute inset-x-2.5 bottom-2.5 flex items-center bg-white/92 backdrop-blur-xs rounded-full shadow-xs select-text cursor-text"
            style={{
              padding: `${mcqw(5)} ${mcqw(10)}`,
              gap: mcqw(8),
            }}
          >
            <span
              className="shrink-0 rounded-full bg-[#093055] font-semibold text-white"
              style={{
                padding: `${mcqw(3.5)} ${mcqw(10)}`,
                fontSize: mcqw(13),
              }}
            >
              김효진 원장
            </span>
            <span
              className="text-[#01223D] font-medium"
              style={{
                fontSize: mcqw(11),
                lineHeight: mcqw(14.5),
              }}
            >
              한방내과 전문의 · 임상 19년차
              <br />
              대한한방비만학회 정회원
            </span>
          </div>
        </div>

        {/* 하단 체성분(InBody) 카드 (가로 배치로 높이 절약 & 시인성 확보) */}
        <div
          className="bg-[#002D52] flex items-center shadow-md"
          style={{
            height: mcqw(142),
            borderRadius: mcqw(14),
            padding: mcqw(10),
            gap: mcqw(12),
          }}
        >
          <div
            className="relative h-full aspect-[373/243] overflow-hidden bg-white shrink-0"
            style={{ borderRadius: mcqw(8) }}
          >
            <Image
              src="/images/main/banners/b1_inbody.png"
              alt="김효진 원장 인바디 결과표"
              fill
              sizes="50vw"
              draggable={false}
              className="object-contain select-none pointer-events-none"
            />
          </div>
          <ul
            data-selectable-text
            className="flex-1 text-white font-['Pretendard'] select-text cursor-text"
            style={{
              fontSize: mcqw(12.5),
              lineHeight: mcqw(22),
              letterSpacing: '-0.03em',
            }}
          >
            <li>
              ㆍ근육량 표준 대비 <strong className="font-bold text-[#A1B6CE]">+4kg</strong> 이상
            </li>
            <li>
              ㆍ체지방률 <strong className="font-bold text-[#A1B6CE]">16.4%</strong>
            </li>
            <li>
              ㆍ내장지방레벨 <strong className="font-bold text-[#A1B6CE]">3</strong>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

/**
 * 2번 배너 — 한방내과 전문의 비만 진료 (Figma 569:52)
 */
function Slide2() {
  return (
    <>
      {/* PC 버전 (1920x645 비례) */}
      <div
        className="hidden lg:block relative w-full aspect-[1920/645] bg-[#A4B7CC] overflow-hidden"
        style={{ containerType: 'inline-size' }}
      >
        <Image
          src="/images/main/banners/b2_bg.png"
          alt="한방내과 전문의 비만 진료 배경"
          fill
          sizes="100vw"
          draggable={false}
          className="object-cover object-center select-none pointer-events-none"
        />

        {/* 좌측 김효진 원장 누끼 이미지 (569:60 @(-12, 69) 1030x579) */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            left: '-0.625%',
            top: '10.698%',
            width: '53.646%',
            height: '89.767%',
          }}
        >
          <Image
            src="/images/main/banners/b2_doctor.png"
            alt="서류를 검토하는 진한의원 김효진 원장"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            draggable={false}
            className="object-contain object-bottom select-none pointer-events-none"
          />
        </div>

        {/* 우측 손글씨 타이틀 (569:65 @(712, 202)) */}
        <div
          className="absolute"
          style={{
            left: '37.083%',
            top: '31.318%',
          }}
        >
          <Banner2HandwritingTitle isMobile={false} />
        </div>

        {/* 우측 본문 설명 (569:64 @(712, 331)) */}
        <div
          className="absolute"
          style={{
            left: '37.083%',
            top: '51.318%',
          }}
        >
          <p
            data-selectable-text
            className="font-['Pretendard'] font-normal text-black select-text cursor-text whitespace-pre-line"
            style={{
              fontSize: cqw(30),
              lineHeight: cqw(45),
              letterSpacing: cqw(-1.5),
            }}
          >
            {'체중만 보는 다이어트가 아닌, 개인의 체질·대사·생활습관까지 함께 살피는\n진한의원만의 비만 진료를 시작하세요.'}
          </p>
        </div>

        {/* 하단 원장 이름 및 약력 배지 (569:66 @(921, 575)) */}
        <div
          data-selectable-text
          className="absolute flex items-center select-text cursor-text"
          style={{
            left: '47.969%',
            top: '89.147%',
            gap: cqw(10),
          }}
        >
          <span
            className="inline-flex items-center justify-center rounded-full bg-[#00223D] text-white font-['Pretendard'] font-semibold"
            style={{
              width: cqw(139),
              height: cqw(41),
              fontSize: cqw(25),
              letterSpacing: cqw(-1.25),
            }}
          >
            김효진 원장
          </span>
          <span
            className="font-['Pretendard'] font-normal text-[#00213D] whitespace-pre-line"
            style={{
              fontSize: cqw(15),
              lineHeight: cqw(20),
              letterSpacing: cqw(-0.75),
            }}
          >
            {'한방내과 전문의 · 임상 19년차\n대한한방비만학회 정회원'}
          </span>
        </div>
      </div>

      {/* 모바일 버전 (<1024px, 공통 aspect-[2/3] 고정 비율) */}
      <div
        className="lg:hidden relative w-full aspect-[2/3] bg-[#A4B7CC] overflow-hidden flex flex-col justify-between"
        style={{
          containerType: 'inline-size',
          padding: `${mcqw(28)} ${mcqw(20)} 0`,
        }}
      >
        {/* 배경 장식 사선 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[48%] bg-white/80 -skew-x-12 -translate-x-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[36%] bg-[#7C95B1]/45 -skew-x-12 translate-x-12"
        />

        {/* 상단: 2줄 자동 줄바꿈 손글씨 타이틀 에셋 + 드래그 텍스트 & 본문 */}
        <div className="relative z-10 flex flex-col" style={{ gap: mcqw(14) }}>
          <Banner2HandwritingTitle isMobile={true} />
          <p
            data-selectable-text
            className="font-['Pretendard'] text-slate-900 break-keep select-text cursor-text"
            style={{
              fontSize: mcqw(15.5),
              lineHeight: mcqw(24),
            }}
          >
            체중만 보는 다이어트가 아닌, 개인의 체질·대사·생활습관까지 함께 살피는 진한의원만의 비만 진료를 시작하세요.
          </p>
        </div>

        {/* 하단: 좌측 원장 인물(얼굴 비가림) + 우측 하단 약력 배지 */}
        <div className="relative z-10 flex items-end justify-between" style={{ height: mcqw(330) }}>
          <div
            className="relative h-full select-none pointer-events-none"
            style={{
              width: '74%',
              marginLeft: mcqw(-18),
            }}
          >
            <Image
              src="/images/main/banners/b2_doctor.png"
              alt="김효진 원장"
              fill
              sizes="75vw"
              draggable={false}
              className="object-contain object-bottom select-none pointer-events-none"
            />
          </div>
          <div
            data-selectable-text
            className="flex flex-col items-end text-right select-text cursor-text shrink-0"
            style={{
              marginBottom: mcqw(22),
              gap: mcqw(6),
            }}
          >
            <span
              className="inline-flex items-center justify-center rounded-full bg-[#00223D] font-semibold text-white"
              style={{
                padding: `${mcqw(5)} ${mcqw(14)}`,
                fontSize: mcqw(14),
              }}
            >
              김효진 원장
            </span>
            <span
              className="text-[#00213D] font-medium"
              style={{
                fontSize: mcqw(11.5),
                lineHeight: mcqw(15.5),
              }}
            >
              한방내과 전문의 · 임상 19년차
              <br />
              대한한방비만학회 정회원
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * 3번 배너 — 진한의원 후기 (Figma 569:70)
 */
function Slide3() {
  return (
    <>
      {/* PC 버전 (1920x645 비례) */}
      <div
        className="hidden lg:block relative w-full aspect-[1920/645] bg-[#A4B7CC] overflow-hidden"
        style={{ containerType: 'inline-size' }}
      >
        <Image
          src="/images/main/banners/b3_bg.png"
          alt="진한의원 후기 배경"
          fill
          sizes="100vw"
          draggable={false}
          className="object-cover object-center select-none pointer-events-none"
        />

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
          <h2
            data-selectable-text
            className="font-['Paperlogy'] font-extrabold select-text cursor-text leading-none"
            style={{
              fontSize: cqw(120),
              letterSpacing: cqw(-6),
            }}
          >
            <span className="text-[#08325D]" style={{ fontSize: cqw(150) }}>
              진
            </span>
            <span className="text-white drop-shadow-[0_4px_12px_rgba(8,50,93,0.28)]">
              한의원은{' '}
            </span>
            <span
              className="relative inline-block text-[#08325D]"
              style={{ fontSize: cqw(150) }}
            >
              찐
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full bg-[#08325D]"
                style={{
                  width: cqw(23),
                  height: cqw(23),
                  top: cqw(-22),
                }}
              />
            </span>
            <span className="text-white drop-shadow-[0_4px_12px_rgba(8,50,93,0.28)]">
              입니다
            </span>
          </h2>

          <p
            data-selectable-text
            className="font-['Pretendard'] font-normal text-black select-text cursor-text"
            style={{
              marginTop: cqw(22),
              fontSize: cqw(40),
              lineHeight: cqw(40),
              letterSpacing: cqw(-2),
            }}
          >
            진한의원의 후기에는 ‘진심’이 가득 담겨 있습니다
          </p>
        </div>
      </div>

      {/* 모바일 버전 (<1024px, 공통 aspect-[2/3] 고정 비율) */}
      <div
        className="lg:hidden relative w-full aspect-[2/3] bg-[#A4B7CC] overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          containerType: 'inline-size',
          padding: mcqw(20),
        }}
      >
        <Image
          src="/images/main/banners/b3_bg.png"
          alt="진한의원 후기 배경"
          fill
          sizes="100vw"
          draggable={false}
          className="object-cover object-center select-none pointer-events-none"
        />
        <div className="relative z-10">
          <h2
            data-selectable-text
            className="font-['Paperlogy'] font-extrabold tracking-tight select-text cursor-text leading-none"
            style={{ fontSize: mcqw(36) }}
          >
            <span className="text-[#08325D] text-[1.24em]">진</span>
            <span className="text-white drop-shadow-[0_3px_8px_rgba(8,50,93,0.35)]">
              한의원은{' '}
            </span>
            <span className="relative inline-block text-[#08325D] text-[1.24em]">
              찐
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[0.18em] w-[0.15em] h-[0.15em] rounded-full bg-[#08325D]"
              />
            </span>
            <span className="text-white drop-shadow-[0_3px_8px_rgba(8,50,93,0.35)]">
              입니다
            </span>
          </h2>
          <p
            data-selectable-text
            className="font-['Pretendard'] font-medium text-slate-950 break-keep select-text cursor-text"
            style={{
              marginTop: mcqw(16),
              fontSize: mcqw(16.5),
              lineHeight: mcqw(24),
            }}
          >
            진한의원의 후기에는 ‘진심’이 가득 담겨 있습니다
          </p>
        </div>
      </div>
    </>
  );
}

/**
 * 4번 배너 — 방송 및 언론매체 다수 출연 (Figma 569:25)
 */
function Slide4() {
  const thumbs = [
    { src: '/images/main/banners/b4_thumb_1.png', alt: 'KNN 방송 출연 장면 1' },
    { src: '/images/main/banners/b4_thumb_2.png', alt: '방송 및 언론 출연 장면 2' },
    { src: '/images/main/banners/b4_thumb_3.png', alt: '방송 및 언론 출연 장면 3' },
  ];

  return (
    <>
      {/* PC 버전 (1920x645 비례) */}
      <div
        className="hidden lg:block relative w-full aspect-[1920/645] bg-[#121212] overflow-hidden"
        style={{ containerType: 'inline-size' }}
      >
        <Image
          src="/images/main/banners/b4_bg.png"
          alt="진료실 방송 촬영 배경"
          fill
          sizes="100vw"
          draggable={false}
          className="object-cover object-center select-none pointer-events-none"
        />

        {/* 상단 KNN · BBS 로고 + 등 & 타이틀 (569:34 @(200, 66)) */}
        <div
          className="absolute"
          style={{
            left: '10.417%',
            top: '10.233%',
          }}
        >
          <div className="flex items-center" style={{ gap: cqw(15) }}>
            <div
              className="relative select-none pointer-events-none"
              style={{ width: cqw(146), height: cqw(53) }}
            >
              <Image
                src="/images/main/banners/b4_logo_knn.png"
                alt="KNN"
                fill
                sizes="150px"
                draggable={false}
                className="object-contain"
              />
            </div>
            <span
              aria-hidden="true"
              className="rounded-full bg-white inline-block"
              style={{ width: cqw(12), height: cqw(11) }}
            />
            <div
              className="relative select-none pointer-events-none"
              style={{ width: cqw(139), height: cqw(83) }}
            >
              <Image
                src="/images/main/banners/b4_logo_bbs.png"
                alt="BBS 불교방송"
                fill
                sizes="150px"
                draggable={false}
                className="object-contain"
              />
            </div>
            <span
              data-selectable-text
              className="font-['Paperlogy'] font-normal text-white select-text cursor-text"
              style={{
                fontSize: cqw(60),
                lineHeight: 1,
                letterSpacing: cqw(-3),
              }}
            >
              등
            </span>
          </div>

          <h2
            data-selectable-text
            className="font-['Paperlogy'] select-text cursor-text"
            style={{
              marginTop: cqw(4),
              fontSize: cqw(60),
              lineHeight: cqw(76),
              letterSpacing: cqw(-3),
            }}
          >
            <span className="font-normal text-white">방송 및 언론매체 </span>
            <strong className="font-extrabold text-[#BCD0E8]">다수 출연</strong>
          </h2>
        </div>

        {/* 설명 문구 3줄 (569:51 @(203, 272)) */}
        <div
          className="absolute"
          style={{
            left: '10.573%',
            top: '42.171%',
          }}
        >
          <p
            data-selectable-text
            className="font-['Pretendard'] font-normal text-white select-text cursor-text whitespace-pre-line"
            style={{
              fontSize: cqw(27),
              lineHeight: cqw(44),
              letterSpacing: cqw(-1.35),
            }}
          >
            {'임상 20년차 한방내과 전문의\n다이어트, 갱년기질환, 면역저하 등 한방지식과 정확한 건강관련 정보 전달\n체계적인 검사와 임상경험이 풍부한 의료진의 진단과 안심 한약 처방'}
          </p>
        </div>

        {/* 하단 3개 방송 이미지 (569:41 @(206, 420) 713x140) */}
        <div
          className="absolute flex items-center"
          style={{
            left: '10.729%',
            top: '65.116%',
            gap: cqw(10),
          }}
        >
          {thumbs.map((thumb, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden bg-[#D9D9D9] select-none pointer-events-none"
              style={{ width: cqw(231), height: cqw(140) }}
            >
              <Image
                src={thumb.src}
                alt={thumb.alt}
                fill
                sizes="240px"
                draggable={false}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 모바일 버전 (<1024px, 공통 aspect-[2/3] 고정 비율) */}
      <div
        className="lg:hidden relative w-full aspect-[2/3] bg-[#121212] text-white overflow-hidden flex flex-col justify-between"
        style={{
          containerType: 'inline-size',
          padding: `${mcqw(22)} ${mcqw(20)} ${mcqw(20)}`,
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center" style={{ gap: mcqw(8) }}>
            <div
              className="relative select-none pointer-events-none"
              style={{ width: mcqw(80), height: mcqw(29) }}
            >
              <Image
                src="/images/main/banners/b4_logo_knn.png"
                alt="KNN"
                fill
                sizes="90px"
                draggable={false}
                className="object-contain"
              />
            </div>
            <span
              className="rounded-full bg-white inline-block"
              style={{ width: mcqw(6), height: mcqw(6) }}
            />
            <div
              className="relative select-none pointer-events-none"
              style={{ width: mcqw(76), height: mcqw(44) }}
            >
              <Image
                src="/images/main/banners/b4_logo_bbs.png"
                alt="BBS 불교방송"
                fill
                sizes="90px"
                draggable={false}
                className="object-contain"
              />
            </div>
            <span
              data-selectable-text
              className="font-['Paperlogy'] text-white select-text cursor-text"
              style={{ fontSize: mcqw(24) }}
            >
              등
            </span>
          </div>

          <h2
            data-selectable-text
            className="font-['Paperlogy'] tracking-tight select-text cursor-text"
            style={{
              marginTop: mcqw(4),
              fontSize: mcqw(26),
              lineHeight: mcqw(32),
            }}
          >
            <span className="font-normal text-white">방송 및 언론매체 </span>
            <strong className="font-extrabold text-[#BCD0E8]">다수 출연</strong>
          </h2>

          <p
            data-selectable-text
            className="font-['Pretendard'] text-white/95 break-keep select-text cursor-text"
            style={{
              marginTop: mcqw(10),
              fontSize: mcqw(13.8),
              lineHeight: mcqw(21),
            }}
          >
            임상 20년차 한방내과 전문의
            <br />
            다이어트, 갱년기질환, 면역저하 등 한방지식과 정확한 건강관련 정보 전달
            <br />
            체계적인 검사와 임상경험이 풍부한 의료진의 진단과 안심 한약 처방
          </p>
        </div>

        {/* 중단 진료실 촬영 배경 사진 노출 */}
        <div
          className="relative w-full overflow-hidden border border-white/10"
          style={{
            height: mcqw(226),
            borderRadius: mcqw(12),
          }}
        >
          <Image
            src="/images/main/banners/b4_photo.png"
            alt="진료실 방송 촬영"
            fill
            sizes="100vw"
            draggable={false}
            className="object-cover object-[75%_25%] select-none pointer-events-none"
          />
        </div>

        {/* 하단 방송 이미지 3개 그리드 */}
        <div
          className="relative z-10 grid grid-cols-3"
          style={{ gap: mcqw(8) }}
        >
          {thumbs.map((thumb, idx) => (
            <div
              key={idx}
              className="relative aspect-[231/140] overflow-hidden bg-neutral-800 select-none pointer-events-none"
              style={{ borderRadius: mcqw(6) }}
            >
              <Image
                src={thumb.src}
                alt={thumb.alt}
                fill
                sizes="33vw"
                draggable={false}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * 5~9번 배너 — PNG 기반 이미지 + 정밀 좌표 HTML 텍스트 선택/복사 오버레이 (B유형)
 */
function SlideCaseOverlay({ data }: { data: CaseBannerData }) {
  const pcMetricTops = ['24.2%', '39.5%', '54.8%', '70.1%'];
  const moMetricTops = ['65.8%', '73.2%', '80.6%', '88.0%'];

  return (
    <>
      {/* PC 버전 (1920x645) */}
      <div
        className="hidden lg:block relative w-full aspect-[1920/645] bg-[#FAF7EE] overflow-hidden"
        style={{ containerType: 'inline-size' }}
      >
        <Image
          src={data.pcImg}
          alt={`${data.title} ${data.weightLoss} 감량 사례`}
          fill
          sizes="100vw"
          draggable={false}
          className="object-contain select-none pointer-events-none"
        />

        {/* 6.png ("55 3") 소수점 누락 시각 보정 점 */}
        {data.fixDotOnPc && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full bg-white"
            style={{
              left: '86.43%',
              top: '30.55%',
              width: cqw(5.5),
              height: cqw(5.5),
            }}
          />
        )}

        {/* 좌측 상단 서브 타이틀 & 메인 타이틀 선택 오버레이 */}
        <div
          data-selectable-text
          className="absolute select-text cursor-text"
          style={{
            left: '6.2%',
            top: '19.5%',
            width: '28%',
          }}
        >
          <p
            className="text-transparent selection:bg-[#08325D]/20 selection:text-transparent font-medium leading-tight"
            style={{ fontSize: cqw(24) }}
          >
            {data.subTitle}
          </p>
          <h2
            className="mt-1 text-transparent selection:bg-[#08325D]/20 selection:text-transparent font-extrabold leading-[1.15]"
            style={{ fontSize: cqw(64) }}
          >
            {data.title}
          </h2>
        </div>

        {/* 중앙 우측 원형 감량 배지 (-24.3kg / 감량 기간 4개월) 선택 오버레이 */}
        <div
          data-selectable-text
          className="absolute flex flex-col items-center justify-center text-center select-text cursor-text"
          style={{
            left: '55.4%',
            top: '33.5%',
            width: '11.2%',
            height: '33%',
          }}
        >
          <strong
            className="text-transparent selection:bg-white/35 selection:text-transparent font-extrabold leading-none"
            style={{ fontSize: cqw(46) }}
          >
            {data.weightLoss}
          </strong>
          <span
            className="mt-2 text-transparent selection:bg-white/35 selection:text-transparent font-semibold leading-tight"
            style={{ fontSize: cqw(22) }}
          >
            {data.period}
          </span>
        </div>

        {/* 우측 4개 체성분 수치 캡슐 선택 오버레이 */}
        {data.metrics.map((m, idx) => (
          <div
            key={m.label}
            data-selectable-text
            className="absolute flex items-center justify-between px-4 select-text cursor-text"
            style={{
              left: '67.5%',
              top: pcMetricTops[idx],
              width: '23.2%',
              height: '11.5%',
            }}
          >
            <span
              className="text-transparent selection:bg-white/35 selection:text-transparent font-medium"
              style={{ fontSize: cqw(22) }}
            >
              {m.label}{' '}
            </span>
            <span
              className="text-transparent selection:bg-white/35 selection:text-transparent font-bold"
              style={{ fontSize: cqw(30) }}
            >
              {m.before} → {m.after}
            </span>
          </div>
        ))}
      </div>

      {/* 모바일 버전 (<1024px, M_5~M_9 1024x1536 = aspect-[2/3] 전용 이미지 + 선택 오버레이) */}
      <div
        className="lg:hidden relative w-full aspect-[2/3] bg-[#FAF7EE] overflow-hidden"
        style={{ containerType: 'inline-size' }}
      >
        <Image
          src={data.moImg}
          alt={`${data.title} ${data.weightLoss} 감량 사례`}
          fill
          sizes="100vw"
          draggable={false}
          className="object-cover select-none pointer-events-none"
        />

        {/* 모바일 상단 서브타이틀 + 메인 타이틀 선택 영역 */}
        <div
          data-selectable-text
          className="absolute inset-x-[6%] top-[4.5%] text-center select-text cursor-text"
        >
          <p className="text-transparent selection:bg-[#08325D]/20 selection:text-transparent text-[3.6cqw] font-medium">
            {data.subTitle}
          </p>
          <h2 className="mt-1 text-transparent selection:bg-[#08325D]/20 selection:text-transparent text-[8.8cqw] font-extrabold leading-tight">
            {data.title}
          </h2>
        </div>

        {/* 모바일 하단 좌측 원형 감량 배지 선택 영역 */}
        <div
          data-selectable-text
          className="absolute left-[4.5%] top-[69%] w-[30%] h-[20%] flex flex-col items-center justify-center text-center select-text cursor-text"
        >
          <strong className="text-transparent selection:bg-white/35 selection:text-transparent text-[6.8cqw] font-extrabold leading-none">
            {data.weightLoss}
          </strong>
          <span className="mt-1 text-transparent selection:bg-white/35 selection:text-transparent text-[3.5cqw] font-semibold">
            {data.period}
          </span>
        </div>

        {/* 모바일 하단 우측 4개 체성분 캡슐 선택 영역 */}
        {data.metrics.map((m, idx) => (
          <div
            key={m.label}
            data-selectable-text
            className="absolute left-[36.5%] w-[58.5%] h-[6.2%] flex items-center justify-between px-2 select-text cursor-text"
            style={{ top: moMetricTops[idx] }}
          >
            <span className="text-transparent selection:bg-white/35 selection:text-transparent text-[3.4cqw] font-medium">
              {m.label}{' '}
            </span>
            <span className="text-transparent selection:bg-white/35 selection:text-transparent text-[4.5cqw] font-bold">
              {m.before} → {m.after}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

/**
 * 10번 배너 원형 인포그래픽(493x493) 외곽 3방향 순환 화살표 통합 SVG 오버레이
 * Figma absoluteRenderBounds 기준 (원형 기준점 x:946, y:1770)
 * - Arrow 1 (571:192): translate(38.9786, 31.5122)
 * - Arrow 2 (571:193): translate(247.7244, 43.2177)
 * - Arrow 3 (571:194): translate(67.2387, 349.2439)
 */
function Banner10ArrowsOverlay() {
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

/**
 * 10번 배너 — 진 해독 다이어트 3단계 프로그램 (Figma 571:111)
 */
function Slide10() {
  return (
    <>
      {/* PC 버전 (1920x645 비례) */}
      <div
        className="hidden lg:block relative w-full aspect-[1920/645] bg-[#BFD3EA] overflow-hidden"
        style={{ containerType: 'inline-size' }}
      >
        {/* 상단 라운드 헤더 바 (571:169 @(227, -72) 1465x201 -> 가시 높이 129px) */}
        <div
          className="absolute bg-[#002D52] flex items-center justify-center"
          style={{
            left: '11.823%',
            top: 0,
            width: '76.302%',
            height: '20.0%',
            borderBottomLeftRadius: cqw(27),
            borderBottomRightRadius: cqw(27),
          }}
        >
          <h2
            data-selectable-text
            className="font-['Paperlogy'] font-extrabold text-center select-text cursor-text"
            style={{
              fontSize: cqw(55),
              lineHeight: cqw(90),
              letterSpacing: cqw(-2.75),
            }}
          >
            <span className="text-white">진 해독 다이어트 3단계 프로그램 </span>
            <span className="text-[#BFD3EA]">(비운다 → 태운다 → 채운다)</span>
          </h2>
        </div>

        {/* 좌측 3단계 원형 인포그래픽 (571:170 @(177, 145) 493x493) */}
        <div
          className="absolute"
          style={{
            left: '9.219%',
            top: '22.481%',
            width: cqw(493),
            height: cqw(493),
          }}
        >
          <Image
            src="/images/main/banners/b10_circle.png"
            alt="진 해독 다이어트 3단계 순환 다이어그램"
            fill
            sizes="500px"
            draggable={false}
            className="object-contain select-none pointer-events-none"
          />

          {/* 외곽 순환 화살표 벡터 3개 (단일 viewBox 493x493 통합 오버레이) */}
          <Banner10ArrowsOverlay />

          {/* 01 비운다 (571:174) */}
          <div
            data-selectable-text
            className="absolute flex flex-col items-center text-center text-white font-['Pretendard'] select-text cursor-text"
            style={{
              left: '22.9%',
              top: '27.8%',
              width: '20%',
            }}
          >
            <span className="font-medium" style={{ fontSize: cqw(25), lineHeight: cqw(34) }}>
              01
            </span>
            <strong className="font-bold" style={{ fontSize: cqw(30), lineHeight: cqw(38) }}>
              비운다
            </strong>
            <span
              className="font-normal whitespace-nowrap"
              style={{ fontSize: cqw(17), lineHeight: cqw(24), marginTop: cqw(4) }}
            >
              해독 프로그램
            </span>
          </div>

          {/* 02 태운다 (571:175) */}
          <div
            data-selectable-text
            className="absolute flex flex-col items-center text-center text-white font-['Pretendard'] select-text cursor-text"
            style={{
              left: '56.5%',
              top: '20.0%',
              width: '24%',
            }}
          >
            <span className="font-medium" style={{ fontSize: cqw(25), lineHeight: cqw(34) }}>
              02
            </span>
            <strong className="font-bold" style={{ fontSize: cqw(30), lineHeight: cqw(38) }}>
              태운다
            </strong>
            <span
              className="font-normal whitespace-pre-line"
              style={{ fontSize: cqw(17), lineHeight: cqw(24), marginTop: cqw(6) }}
            >
              {'1:1 맞춤처방을\n15일 단위로\n90일간 감량 코칭'}
            </span>
          </div>

          {/* 03 채운다 (571:179) */}
          <div
            data-selectable-text
            className="absolute flex flex-col items-center text-center text-white font-['Pretendard'] select-text cursor-text"
            style={{
              left: '33.4%',
              top: '57.5%',
              width: '33%',
            }}
          >
            <span className="font-medium" style={{ fontSize: cqw(25), lineHeight: cqw(34) }}>
              03
            </span>
            <strong className="font-bold" style={{ fontSize: cqw(30), lineHeight: cqw(38) }}>
              채운다
            </strong>
            <span
              className="font-normal whitespace-nowrap"
              style={{ fontSize: cqw(17), lineHeight: cqw(24), marginTop: cqw(4) }}
            >
              180일간 요요방지 및 유지
            </span>
          </div>
        </div>

        {/* 우측 3개 단계별 설명 카드 (571:123 @(680, 177) 1012x419) */}
        <div
          className="absolute flex flex-col"
          style={{
            left: '35.417%',
            top: '27.442%',
            width: cqw(1012),
            gap: cqw(15),
          }}
        >
          {DETOX_STEPS.map((step) => (
            <div
              key={step.num}
              data-selectable-text
              className="flex overflow-hidden bg-white shadow-xs select-text cursor-text"
              style={{
                height: cqw(step.heightPx),
                borderRadius: cqw(12),
              }}
            >
              {/* 좌측 단계 헤더 박스 (245px) */}
              <div
                className="relative shrink-0 text-white font-['Pretendard'] flex items-center justify-center"
                style={{
                  width: cqw(245),
                  backgroundColor: step.bg,
                }}
              >
                <span
                  className="absolute font-semibold"
                  style={{
                    left: cqw(19),
                    top: cqw(16),
                    fontSize: cqw(30),
                    lineHeight: cqw(40),
                    letterSpacing: cqw(-1.5),
                  }}
                >
                  {step.num}
                </span>
                <h3
                  className="font-semibold text-center whitespace-pre-line"
                  style={{
                    fontSize: cqw(25),
                    lineHeight: cqw(36),
                    letterSpacing: cqw(-1.25),
                    paddingLeft: cqw(20),
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* 우측 상세 설명 */}
              <div
                className="flex-1 flex items-center"
                style={{
                  paddingLeft: cqw(26),
                  paddingRight: cqw(20),
                }}
              >
                <p
                  className="font-['Pretendard'] font-normal text-black whitespace-pre-line"
                  style={{
                    fontSize: cqw(24),
                    lineHeight: cqw(33),
                    letterSpacing: cqw(-1.2),
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모바일 버전 (<1024px, 공통 aspect-[2/3] 고정 비율 내 원형 다이어그램 + 3단계 카드 완비) */}
      <div
        className="lg:hidden relative w-full aspect-[2/3] bg-[#BFD3EA] overflow-hidden flex flex-col justify-between items-center"
        style={{
          containerType: 'inline-size',
          padding: `0 ${mcqw(14)} ${mcqw(14)}`,
        }}
      >
        {/* 상단 라운드 헤더 바 */}
        <div
          className="w-full bg-[#002D52] flex flex-col items-center justify-center text-center shadow-xs shrink-0"
          style={{
            height: mcqw(58),
            borderBottomLeftRadius: mcqw(16),
            borderBottomRightRadius: mcqw(16),
            padding: `0 ${mcqw(10)}`,
          }}
        >
          <h2
            data-selectable-text
            className="font-['Paperlogy'] font-extrabold select-text cursor-text leading-tight"
            style={{ fontSize: mcqw(17.5) }}
          >
            <span className="text-white block">진 해독 다이어트 3단계 프로그램</span>
            <span className="text-[#BFD3EA] block" style={{ fontSize: mcqw(14), marginTop: mcqw(2) }}>
              (비운다 → 태운다 → 채운다)
            </span>
          </h2>
        </div>

        {/* 중단 3단계 원형 인포그래픽 (외곽 화살표 + 내부 HTML 텍스트 모두 포함) */}
        <div
          className="relative shrink-0"
          style={{
            width: mcqw(186),
            height: mcqw(186),
          }}
        >
          <Image
            src="/images/main/banners/b10_circle.png"
            alt="진 해독 다이어트 3단계 순환 다이어그램"
            fill
            sizes="200px"
            draggable={false}
            className="object-contain select-none pointer-events-none"
          />
          <Banner10ArrowsOverlay />

          <div
            data-selectable-text
            className="absolute left-[18%] top-[26%] w-[27%] flex flex-col items-center text-center text-white select-text cursor-text"
          >
            <span className="font-medium leading-none" style={{ fontSize: mcqw(9.5) }}>
              01
            </span>
            <strong className="font-bold leading-tight" style={{ fontSize: mcqw(11.5) }}>
              비운다
            </strong>
            <span className="leading-tight whitespace-nowrap" style={{ fontSize: mcqw(7.2) }}>
              해독 프로그램
            </span>
          </div>
          <div
            data-selectable-text
            className="absolute left-[54%] top-[19%] w-[28%] flex flex-col items-center text-center text-white select-text cursor-text"
          >
            <span className="font-medium leading-none" style={{ fontSize: mcqw(9.5) }}>
              02
            </span>
            <strong className="font-bold leading-tight" style={{ fontSize: mcqw(11.5) }}>
              태운다
            </strong>
            <span className="leading-[1.15] whitespace-pre-line" style={{ fontSize: mcqw(6.8) }}>
              {'1:1 맞춤처방을\n15일 단위로\n90일간 감량 코칭'}
            </span>
          </div>
          <div
            data-selectable-text
            className="absolute left-[25%] top-[58%] w-[50%] flex flex-col items-center text-center text-white select-text cursor-text"
          >
            <span className="font-medium leading-none" style={{ fontSize: mcqw(9.5) }}>
              03
            </span>
            <strong className="font-bold leading-tight" style={{ fontSize: mcqw(11.5) }}>
              채운다
            </strong>
            <span className="leading-tight whitespace-nowrap" style={{ fontSize: mcqw(7.2) }}>
              180일간 요요방지 및 유지
            </span>
          </div>
        </div>

        {/* 하단 3단계 상세 카드 (가로 분할 레이아웃으로 3개 카드 전문 수록) */}
        <div
          className="w-full flex flex-col shrink-0"
          style={{ gap: mcqw(7) }}
        >
          {DETOX_STEPS.map((step) => (
            <div
              key={step.num}
              data-selectable-text
              className="w-full overflow-hidden bg-white shadow-xs flex items-stretch select-text cursor-text"
              style={{ borderRadius: mcqw(9) }}
            >
              <div
                className="shrink-0 text-white font-['Pretendard'] flex flex-col justify-center items-center text-center"
                style={{
                  width: mcqw(84),
                  backgroundColor: step.bg,
                  padding: `${mcqw(6)} ${mcqw(4)}`,
                }}
              >
                <span className="font-bold leading-none opacity-95" style={{ fontSize: mcqw(13) }}>
                  {step.num}
                </span>
                <h3
                  className="font-semibold whitespace-pre-line leading-[1.2]"
                  style={{ fontSize: mcqw(12), marginTop: mcqw(2) }}
                >
                  {step.title}
                </h3>
              </div>
              <div
                className="flex-1 flex items-center text-slate-900 font-['Pretendard'] break-keep whitespace-pre-line"
                style={{
                  padding: `${mcqw(7)} ${mcqw(10)}`,
                  fontSize: mcqw(11.2),
                  lineHeight: mcqw(15.2),
                  letterSpacing: '-0.03em',
                }}
              >
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * 11번 배너 — 자주 묻는 질문 Q&A (Figma 571:195)
 */
function Slide11() {
  return (
    <>
      {/* PC 버전 (1920x645 비례) */}
      <div
        className="hidden lg:block relative w-full aspect-[1920/645] bg-[#0E3A5D] overflow-hidden"
        style={{ containerType: 'inline-size' }}
      >
        {/* 상단 타이틀 (571:199 @(697, 18) 535x90) */}
        <div
          className="absolute inset-x-0 flex items-center justify-center"
          style={{
            top: '2.791%',
            height: cqw(90),
            gap: cqw(22),
          }}
        >
          <span
            aria-hidden="true"
            className="rounded-full bg-[#BFD3EA] inline-block"
            style={{ width: cqw(13), height: cqw(13) }}
          />
          <h2
            data-selectable-text
            className="font-['Paperlogy'] font-extrabold select-text cursor-text"
            style={{
              fontSize: cqw(55),
              lineHeight: cqw(90),
              letterSpacing: cqw(-2.75),
            }}
          >
            <span className="text-white">자주 묻는 질문 </span>
            <span className="text-[#BFD3EA]">(Q&amp;A)</span>
          </h2>
          <span
            aria-hidden="true"
            className="rounded-full bg-[#BFD3EA] inline-block"
            style={{ width: cqw(13), height: cqw(13) }}
          />
        </div>

        {/* 좌우 2개의 흰색 질문 카드 (571:365 @(212, 122) 1504x410) */}
        <div
          className="absolute flex items-stretch"
          style={{
            left: '11.042%',
            top: '18.915%',
            width: cqw(1504),
            height: cqw(410),
            gap: cqw(12),
          }}
        >
          {/* 좌측 카드 (746x410) */}
          <div
            className="bg-white flex flex-col justify-between"
            style={{
              width: cqw(746),
              height: cqw(410),
              borderRadius: cqw(33),
              padding: `${cqw(39)} ${cqw(34)} ${cqw(44)} ${cqw(42)}`,
            }}
          >
            {QA_LEFT_ITEMS.map((item, idx) => (
              <div
                key={idx}
                data-selectable-text
                className="flex items-center select-text cursor-text"
                style={{ gap: cqw(9) }}
              >
                <span
                  className="shrink-0 rounded-full bg-[#002A4D] text-white font-['Pretendard'] font-semibold inline-flex items-center justify-center"
                  style={{
                    width: cqw(31),
                    height: cqw(31),
                    fontSize: cqw(22),
                  }}
                >
                  Q
                </span>
                <span
                  className="font-['Pretendard'] font-normal text-[#1E1E1E] whitespace-nowrap"
                  style={{
                    fontSize: cqw(25),
                    lineHeight: cqw(40),
                    letterSpacing: cqw(-1.25),
                  }}
                >
                  {item.q}{' '}
                </span>
                <strong
                  className={`font-['Pretendard'] font-extrabold ${
                    item.isNo ? 'text-[#5B9FDB]' : 'text-[#137E43]'
                  }`}
                  style={{
                    fontSize: cqw(30),
                    lineHeight: cqw(40),
                    letterSpacing: cqw(-1.5),
                    marginLeft: cqw(6),
                  }}
                >
                  {item.a}
                </strong>
              </div>
            ))}
          </div>

          {/* 우측 카드 (746x410) */}
          <div
            className="relative bg-white flex flex-col justify-between"
            style={{
              width: cqw(746),
              height: cqw(410),
              borderRadius: cqw(33),
              padding: `${cqw(36)} ${cqw(34)} ${cqw(34)} ${cqw(42)}`,
            }}
          >
            {QA_RIGHT_ITEMS.map((item, idx) => (
              <div
                key={idx}
                data-selectable-text
                className="flex items-start select-text cursor-text"
                style={{ gap: cqw(9) }}
              >
                <span
                  className="shrink-0 rounded-full bg-[#002D52] text-white font-['Pretendard'] font-semibold inline-flex items-center justify-center"
                  style={{
                    width: cqw(31),
                    height: cqw(31),
                    fontSize: cqw(22),
                    marginTop: cqw(3),
                  }}
                >
                  Q
                </span>
                <div className="flex flex-col">
                  <span
                    className="font-['Pretendard'] font-normal text-[#1E1E1E] whitespace-pre-line"
                    style={{
                      fontSize: cqw(25),
                      lineHeight: cqw(36),
                      letterSpacing: cqw(idx === 0 ? -2 : -1.25),
                    }}
                  >
                    {item.q}
                  </span>
                  <strong
                    className={`font-['Pretendard'] text-[#137E43] ${
                      item.isDescriptive ? 'font-bold' : 'font-extrabold'
                    }`}
                    style={{
                      fontSize: cqw(item.isDescriptive ? 25 : 30),
                      lineHeight: cqw(38),
                      letterSpacing: cqw(-1.25),
                    }}
                  >
                    {item.a}
                  </strong>
                </div>
              </div>
            ))}

            {/* 우측 하단 3D Q&A 채팅 아이콘 (571:372 @(4362, 1972) 217x173) */}
            <div
              className="pointer-events-none select-none absolute"
              style={{
                right: cqw(-8),
                bottom: cqw(-12),
                width: cqw(217),
                height: cqw(173),
              }}
            >
              <Image
                src="/images/main/banners/b11_qa_icon.png"
                alt=""
                fill
                sizes="220px"
                draggable={false}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* 하단 '더 자세한 답변 바로가기' 버튼 (581:221 @(762, 560) 403x59) */}
        <div
          className="absolute inset-x-0 flex justify-center"
          style={{ top: '86.822%' }}
        >
          <button
            type="button"
            data-selectable-text
            className="inline-flex items-center justify-center rounded-full bg-[#5B9FDB] hover:bg-[#498ec9] active:bg-[#3d7eb6] text-white font-['Pretendard'] font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
            style={{
              width: cqw(403),
              height: cqw(59),
              fontSize: cqw(35),
              lineHeight: cqw(41.8),
            }}
          >
            더 자세한 답변 바로가기
          </button>
        </div>
      </div>

      {/* 모바일 버전 (<1024px, 공통 aspect-[2/3] 고정 비율 내 9개 Q&A 전문 + 버튼 배치) */}
      <div
        className="lg:hidden relative w-full aspect-[2/3] bg-[#0E3A5D] overflow-hidden flex flex-col justify-between items-center"
        style={{
          containerType: 'inline-size',
          padding: `${mcqw(14)} ${mcqw(14)} ${mcqw(14)}`,
        }}
      >
        {/* 상단 타이틀 */}
        <div className="flex items-center justify-center shrink-0" style={{ gap: mcqw(8) }}>
          <span
            className="rounded-full bg-[#BFD3EA]"
            style={{ width: mcqw(6), height: mcqw(6) }}
          />
          <h2
            data-selectable-text
            className="font-['Paperlogy'] font-extrabold select-text cursor-text leading-none"
            style={{ fontSize: mcqw(21) }}
          >
            <span className="text-white">자주 묻는 질문 </span>
            <span className="text-[#BFD3EA]">(Q&amp;A)</span>
          </h2>
          <span
            className="rounded-full bg-[#BFD3EA]"
            style={{ width: mcqw(6), height: mcqw(6) }}
          />
        </div>

        {/* 9개 Q&A 전체 카드 (문구 삭제·축약 없음, aspect-[2/3] 높이에 맞춘 정밀 밀도) */}
        <div
          className="w-full bg-white flex flex-col justify-between divide-y divide-slate-100 shadow-md"
          style={{
            borderRadius: mcqw(16),
            padding: `${mcqw(10)} ${mcqw(12)}`,
            height: mcqw(474),
          }}
        >
          {QA_LEFT_ITEMS.map((item, idx) => (
            <div
              key={`m-l-${idx}`}
              data-selectable-text
              className="flex items-center justify-between select-text cursor-text"
              style={{
                paddingTop: idx === 0 ? 0 : mcqw(3),
                paddingBottom: mcqw(3),
                gap: mcqw(6),
              }}
            >
              <div className="flex items-center min-w-0" style={{ gap: mcqw(6) }}>
                <span
                  className="shrink-0 rounded-full bg-[#002A4D] text-white font-semibold inline-flex items-center justify-center"
                  style={{
                    width: mcqw(17),
                    height: mcqw(17),
                    fontSize: mcqw(10.5),
                  }}
                >
                  Q
                </span>
                <span
                  className="font-['Pretendard'] text-[#1E1E1E] break-keep"
                  style={{
                    fontSize: mcqw(11.4),
                    lineHeight: mcqw(14.5),
                    letterSpacing: '-0.03em',
                  }}
                >
                  {item.q}
                </span>
              </div>
              <strong
                className={`shrink-0 font-['Pretendard'] font-extrabold ${
                  item.isNo ? 'text-[#5B9FDB]' : 'text-[#137E43]'
                }`}
                style={{ fontSize: mcqw(13) }}
              >
                {item.a}
              </strong>
            </div>
          ))}

          {QA_RIGHT_ITEMS.map((item, idx) => (
            <div
              key={`m-r-${idx}`}
              data-selectable-text
              className="flex items-start justify-between select-text cursor-text"
              style={{
                paddingTop: mcqw(3.5),
                paddingBottom: idx === QA_RIGHT_ITEMS.length - 1 ? 0 : mcqw(3),
                gap: mcqw(6),
              }}
            >
              <div className="flex items-start min-w-0 flex-1" style={{ gap: mcqw(6) }}>
                <span
                  className="shrink-0 rounded-full bg-[#002D52] text-white font-semibold inline-flex items-center justify-center"
                  style={{
                    width: mcqw(17),
                    height: mcqw(17),
                    fontSize: mcqw(10.5),
                    marginTop: mcqw(1),
                  }}
                >
                  Q
                </span>
                <div className="flex-1 min-w-0">
                  <span
                    className="font-['Pretendard'] text-[#1E1E1E] break-keep block"
                    style={{
                      fontSize: mcqw(11.3),
                      lineHeight: mcqw(14.2),
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {item.q.replace('\n', ' ')}
                  </span>
                  {item.isDescriptive && (
                    <strong
                      className="font-['Pretendard'] font-bold text-[#137E43] block"
                      style={{
                        fontSize: mcqw(11.5),
                        lineHeight: mcqw(14.5),
                        marginTop: mcqw(1),
                      }}
                    >
                      {item.a}
                    </strong>
                  )}
                </div>
              </div>
              {!item.isDescriptive && (
                <strong
                  className="shrink-0 font-['Pretendard'] font-extrabold text-[#137E43] self-center"
                  style={{ fontSize: mcqw(13) }}
                >
                  {item.a}
                </strong>
              )}
            </div>
          ))}
        </div>

        {/* 모바일 하단 버튼 + 3D Q&A 아이콘 */}
        <div className="w-full flex items-center justify-center shrink-0" style={{ gap: mcqw(10) }}>
          <button
            type="button"
            data-selectable-text
            className="inline-flex items-center justify-center rounded-full bg-[#5B9FDB] hover:bg-[#498ec9] active:bg-[#3d7eb6] font-semibold text-white shadow-xs transition-colors cursor-pointer"
            style={{
              height: mcqw(36),
              padding: `0 ${mcqw(22)}`,
              fontSize: mcqw(14.5),
            }}
          >
            더 자세한 답변 바로가기
          </button>
          <div
            className="relative shrink-0 select-none pointer-events-none"
            style={{ width: mcqw(46), height: mcqw(36) }}
          >
            <Image
              src="/images/main/banners/b11_qa_icon.png"
              alt=""
              fill
              sizes="50px"
              draggable={false}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const SLIDE_LABELS = [
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

export function MainHeroSection() {
  const {
    viewportRef,
    index: selectedIndex,
    playing,
    setPlaying,
    scrollTo,
  } = useBannerCarousel();

  const totalSlides = SLIDE_LABELS.length;

  return (
    <section
      aria-label="진한의원 주요 안내"
      aria-roledescription="캐러셀"
      className="relative w-full bg-white"
    >
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="flex touch-pan-y">
          {/* 1번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`1 / ${totalSlides}: ${SLIDE_LABELS[0]}`}
            inert={selectedIndex !== 0}
          >
            <Slide1 />
          </div>

          {/* 2번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`2 / ${totalSlides}: ${SLIDE_LABELS[1]}`}
            inert={selectedIndex !== 1}
          >
            <Slide2 />
          </div>

          {/* 3번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`3 / ${totalSlides}: ${SLIDE_LABELS[2]}`}
            inert={selectedIndex !== 2}
          >
            <Slide3 />
          </div>

          {/* 4번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`4 / ${totalSlides}: ${SLIDE_LABELS[3]}`}
            inert={selectedIndex !== 3}
          >
            <Slide4 />
          </div>

          {/* 5~9번 배너 */}
          {CASE_BANNERS.map((caseBanner, idx) => {
            const slideIdx = 4 + idx;
            return (
              <div
                key={caseBanner.id}
                className="min-w-0 flex-[0_0_100%]"
                role="group"
                aria-roledescription="슬라이드"
                aria-label={`${slideIdx + 1} / ${totalSlides}: ${SLIDE_LABELS[slideIdx]}`}
                inert={selectedIndex !== slideIdx}
              >
                <SlideCaseOverlay data={caseBanner} />
              </div>
            );
          })}

          {/* 10번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`10 / ${totalSlides}: ${SLIDE_LABELS[9]}`}
            inert={selectedIndex !== 9}
          >
            <Slide10 />
          </div>

          {/* 11번 배너 */}
          <div
            className="min-w-0 flex-[0_0_100%]"
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`11 / ${totalSlides}: ${SLIDE_LABELS[10]}`}
            inert={selectedIndex !== 10}
          >
            <Slide11 />
          </div>
        </div>
      </div>

      {/* 배너 하단 외부 독립 페이징 바 (이미지·문구·버튼과 1px도 겹치지 않는 깔끔한 화이트 바) */}
      <div
        role="group"
        aria-label="메인 배너 페이지네이션"
        className="w-full bg-white py-3 flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-1">
          {SLIDE_LABELS.map((label, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <button
                key={label}
                type="button"
                onClick={() => scrollTo(idx)}
                aria-label={`${label} 이동`}
                aria-current={isActive ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-7 bg-[#083560]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            );
          })}

          <span aria-hidden="true" className="mx-1 h-3.5 w-px bg-slate-200" />

          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? '메인 배너 자동 넘김 일시정지' : '메인 배너 자동 넘김 재생'}
            aria-pressed={!playing}
            className="w-6 h-6 inline-flex items-center justify-center rounded-full text-slate-600 hover:text-[#083560] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
}
