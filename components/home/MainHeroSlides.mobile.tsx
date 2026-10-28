'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Banner10ArrowsOverlay,
  Banner2HandwritingTitle,
  CaseBannerData,
  DETOX_STEPS,
  mcqw,
  QA_LEFT_ITEMS,
  QA_RIGHT_ITEMS,
} from './MainHeroShared';

/**
 * 1번 배너 모바일 — 다이어트 요요 관리 (Figma 569:3)
 */
export function Slide1Mobile() {
  return (
    <div
      className="lg:hidden relative w-full aspect-[2/3] bg-[#BFD3EA] overflow-hidden flex flex-col justify-between items-center"
      style={{
        containerType: 'inline-size',
        paddingTop: mcqw(32),
      }}
    >
      {/* 하단~우측: 여성 이미지 10% 확대 및 그라데이션 레이어(569:12) 제거 원본 적용 */}
      <div
        className="pointer-events-none select-none absolute z-0"
        style={{
          left: mcqw(-204),
          bottom: mcqw(-14),
          width: mcqw(1001),
          height: mcqw(337),
        }}
      >
        <Image
          src="/images/main/banners/b1_studio_mo.png"
          alt="김효진 원장 스튜디오"
          fill
          sizes="100vw"
          priority
          draggable={false}
          className="object-contain select-none pointer-events-none"
        />
      </div>

      {/* 상단~중단: 1. 타이틀·본문 아래로 이동 + 2. 본문 5줄 줄바꿈 + 3. 인바디 배지 20px 아래 이동 */}
      <div
        className="relative z-10 w-full flex flex-col items-center"
        style={{
          paddingLeft: mcqw(12),
          paddingRight: mcqw(12),
        }}
      >
        <div
          data-selectable-text
          className="w-full text-center select-text cursor-text"
        >
          <h2
            className="font-['Paperlogy'] font-extrabold tracking-tight break-keep mx-auto"
            style={{
              fontSize: mcqw(36.85),
              lineHeight: mcqw(43),
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
            className="font-['Pretendard'] text-slate-900 text-center whitespace-nowrap mx-auto"
            style={{
              marginTop: mcqw(13),
              fontSize: mcqw(16.5),
              lineHeight: mcqw(22.5),
              letterSpacing: '-0.03em',
            }}
          >
            진한의원 김효진 원장도 10년 이상 꾸준히 복용하며
            <br />
            똑같은 체중을 유지 중입니다.
            <br />
            슬림환을 복용하면 배고픔을 힘들게 참지 않아도 되고,
            <br />
            운동안해도 살이 잘 빠집니다. 유지할 때 배고플 때
            <br />
            한번씩 복용하면 요요현상 크게 걱정하지 않아도 되요.
          </p>
        </div>

        {/* 3단계: 인바디 사진 가로폭에 맞춘 슬림 세로형 카드 & 20px 추가 아래 이동 */}
        <div
          className="self-start bg-[#002D52] flex flex-col items-center shadow-md shrink-0"
          style={{
            marginLeft: mcqw(2),
            marginTop: mcqw(31.5),
            borderRadius: mcqw(12),
            padding: mcqw(7),
            gap: mcqw(6),
          }}
        >
          <div
            className="relative aspect-[373/243] overflow-hidden bg-white shrink-0"
            style={{
              width: mcqw(178),
              height: mcqw(116),
              borderRadius: mcqw(6),
            }}
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
            className="text-white font-['Pretendard'] text-left select-text cursor-text"
            style={{
              width: mcqw(178),
              fontSize: mcqw(12.4),
              lineHeight: mcqw(16.5),
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

      {/* 5단계: 하단 흰색 라운드 배지 (문구 길이에 맞게 좌우 여백 축소) */}
      <div
        data-selectable-text
        className="relative z-20 flex items-center justify-center bg-white/92 backdrop-blur-xs rounded-full shadow-xs select-text cursor-text whitespace-nowrap"
        style={{
          marginBottom: mcqw(12),
          padding: `${mcqw(6)} ${mcqw(18)}`,
          gap: mcqw(10),
        }}
      >
        <span
          className="relative shrink-0 rounded-full bg-[#093055] font-semibold text-white"
          style={{
            left: mcqw(-5),
            padding: `${mcqw(4.5)} ${mcqw(14)}`,
            fontSize: mcqw(13.5),
          }}
        >
          김효진 원장
        </span>
        <span
          className="text-[#01223D] font-medium text-left"
          style={{
            fontSize: mcqw(11.8),
            lineHeight: mcqw(15.5),
          }}
        >
          한방내과 전문의 · 임상 19년차
          <br />
          대한한방비만학회 정회원
        </span>
      </div>
    </div>
  );
}

/**
 * 2번 배너 모바일 — 한방내과 전문의 비만 진료 (Figma 569:52)
 */
export function Slide2Mobile() {
  return (
    <div
      className="lg:hidden relative w-full aspect-[2/3] bg-[#B7C9DD] overflow-hidden flex flex-col justify-between"
      style={{
        containerType: 'inline-size',
        padding: `${mcqw(32)} ${mcqw(18)} 0`,
      }}
    >
      {/* 상단: 지정 2줄 중앙 정렬 손글씨 타이틀 + 중앙 정렬 본문 */}
      <div
        className="relative z-10 w-full flex flex-col items-center text-center"
        style={{ gap: mcqw(14) }}
      >
        <Banner2HandwritingTitle isMobile={true} />
        <p
          data-selectable-text
          className="font-['Pretendard'] text-slate-900 text-center whitespace-nowrap mx-auto select-text cursor-text"
          style={{
            fontSize: mcqw(18.5),
            lineHeight: mcqw(26.5),
            letterSpacing: '-0.02em',
          }}
        >
          체중만 보는 다이어트가 아닌,
          <br />
          개인의 체질·대사·생활습관까지 함께 살피는
          <br />
          진한의원만의 비만 진료를 시작하세요.
        </p>
      </div>

      {/* 중앙~하단: 150% 확대된 원장 인물 (투명 PNG 누끼, 원본 비율 유지, 좌하단 기준 배치) */}
      <div
        className="pointer-events-none select-none absolute z-10"
        style={{
          left: mcqw(-106),
          bottom: mcqw(-16),
          width: mcqw(705),
          height: mcqw(396),
        }}
      >
        <Image
          src="/images/main/banners/b2_doctor.png"
          alt="김효진 원장"
          fill
          sizes="100vw"
          draggable={false}
          className="object-contain object-bottom-left select-none pointer-events-none"
        />
      </div>

      {/* 우측 하단: 원장 이름 배지 및 약력 (위로 총 100px 이동) */}
      <div
        data-selectable-text
        className="absolute z-20 flex flex-col items-end text-right select-text cursor-text"
        style={{
          right: mcqw(16),
          bottom: mcqw(116),
          gap: mcqw(6),
        }}
      >
        <span
          className="inline-flex items-center justify-center rounded-full bg-[#00223D] font-semibold text-white shadow-xs"
          style={{
            padding: `${mcqw(6)} ${mcqw(16)}`,
            fontSize: mcqw(15.5),
          }}
        >
          김효진 원장
        </span>
        <span
          className="text-[#00213D] font-medium drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)]"
          style={{
            fontSize: mcqw(13),
            lineHeight: mcqw(18),
          }}
        >
          한방내과 전문의 · 임상 19년차
          <br />
          대한한방비만학회 정회원
        </span>
      </div>
    </div>
  );
}

/**
 * 3번 배너 모바일 — 진한의원 후기 (Figma 569:70)
 */
export function Slide3Mobile() {
  return (
    <div
      className="lg:hidden relative w-full aspect-[2/3] bg-[#A4B7CC] overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        containerType: 'inline-size',
        padding: mcqw(20),
      }}
    >
      {/* 미세 선명화(Unsharp Mask) 필터 정의 */}
      <svg className="pointer-events-none absolute w-0 h-0 opacity-0" aria-hidden="true">
        <defs>
          <filter id="b3-mo-sharpen" colorInterpolationFilters="sRGB">
            <feConvolveMatrix
              order="3"
              kernelMatrix="0 -0.25 0 -0.25 2.0 -0.25 0 -0.25 0"
              preserveAlpha="true"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="pointer-events-none select-none absolute inset-x-0 bottom-0"
        style={{ top: mcqw(-10) }}
      >
        <Image
          src="/images/main/banners/b3_bg.png"
          alt="진한의원 후기 배경"
          fill
          sizes="100vw"
          unoptimized
          draggable={false}
          className="object-cover select-none pointer-events-none"
          style={{
            objectPosition: `calc(69% - ${mcqw(10)}) 0%`,
            filter: 'url(#b3-mo-sharpen) brightness(1.13) contrast(1.08)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2
          data-selectable-text
          className="font-['Paperlogy'] font-extrabold tracking-tight select-text cursor-text leading-none flex flex-col items-center"
          style={{
            fontSize: mcqw(54),
            rowGap: mcqw(18),
          }}
        >
          <span className="block">
            <span className="text-[#08325D] text-[1.24em]">진</span>
            <span className="text-white drop-shadow-[0_3px_8px_rgba(8,50,93,0.35)]">
              한의원은
            </span>
          </span>
          <span className="block">
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
          </span>
        </h2>
        <p
          data-selectable-text
          className="font-['Pretendard'] font-medium text-slate-950 text-center whitespace-nowrap select-text cursor-text"
          style={{
            marginTop: mcqw(20),
            fontSize: mcqw(22),
            lineHeight: mcqw(31),
          }}
        >
          진한의원의 후기에는
          <br />
          ‘진심’이 가득 담겨 있습니다.
        </p>
      </div>
    </div>
  );
}

/**
 * 4번 배너 모바일 — 방송 및 언론매체 다수 출연 (Figma 569:25)
 */
export function Slide4Mobile() {
  const thumbs = [
    { src: '/images/main/banners/b4_thumb_1.png', alt: 'KNN 방송 출연 장면 1' },
    { src: '/images/main/banners/b4_thumb_2.png', alt: '방송 및 언론 출연 장면 2' },
    { src: '/images/main/banners/b4_thumb_3.png', alt: '방송 및 언론 출연 장면 3' },
  ];

  const mediaHistoryCols = [
    ['KNN 공개클리닉 웰', '100세시대 건강하이소', '메디컬24시 닥터스', '건강 365'],
    [
      '라디오 KNN 웰빙라이프',
      'BBS 불교방송',
      '네이버 상담주치의',
      '하이닥 건강ㆍ의학 위촉상담의',
    ],
  ];

  return (
    <div
      className="lg:hidden relative w-full aspect-[2/3] bg-[#121212] text-white overflow-hidden flex flex-col justify-between"
      style={{
        containerType: 'inline-size',
        padding: `${mcqw(22)} ${mcqw(10)} ${mcqw(20)}`,
      }}
    >
      {/* 중단~하단: 배경형 진료실 촬영 비주얼 (좌측 위아래 2단 이력과 우측 원장님 분리) */}
      <div
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
        style={{
          height: mcqw(348),
        }}
      >
        <div
          className="relative h-full"
          style={{
            width: `calc(100% + ${mcqw(14)})`,
            transform: `translateX(calc(-1 * ${mcqw(10)})) scale(1.08)`,
            transformOrigin: '74% 80%',
          }}
        >
          <Image
            src="/images/main/banners/b4_photo.png"
            alt="진료실 방송 촬영"
            fill
            sizes="100vw"
            draggable={false}
            className="object-cover object-[73%_25%] select-none pointer-events-none"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #121212 0%, rgba(18,18,18,0.48) 10%, rgba(18,18,18,0) 20%)',
          }}
        />
      </div>

      {/* 상단: 타이틀 [방]과 본문 시작점이 정확히 일치하도록 정렬 */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="flex items-center justify-center" style={{ gap: mcqw(8) }}>
          <div
            className="relative select-none pointer-events-none"
            style={{ width: mcqw(100), height: mcqw(36) }}
          >
            <Image
              src="/images/main/banners/b4_logo_knn.png"
              alt="KNN"
              fill
              sizes="100px"
              draggable={false}
              className="object-contain"
            />
          </div>
          <span
            className="rounded-full bg-white inline-block"
            style={{ width: mcqw(7), height: mcqw(7) }}
          />
          <div
            className="relative select-none pointer-events-none"
            style={{ width: mcqw(96), height: mcqw(55) }}
          >
            <Image
              src="/images/main/banners/b4_logo_bbs.png"
              alt="BBS 불교방송"
              fill
              sizes="100px"
              draggable={false}
              className="object-contain"
            />
          </div>
          <span
            data-selectable-text
            className="font-['Paperlogy'] text-white select-text cursor-text"
            style={{ fontSize: mcqw(31) }}
          >
            등
          </span>
        </div>

        <div className="inline-flex flex-col items-start mx-auto">
          <h2
            data-selectable-text
            className="font-['Paperlogy'] text-left select-text cursor-text whitespace-nowrap"
            style={{
              marginTop: mcqw(-4),
              fontSize: mcqw(33.5),
              lineHeight: mcqw(39),
              letterSpacing: '-0.045em',
            }}
          >
            <span className="font-normal text-white">방송 및 언론매체 </span>
            <strong className="font-extrabold text-[#BCD0E8]">다수 출연</strong>
          </h2>

          <ul
            data-selectable-text
            className="relative font-['Pretendard'] text-white/95 text-left inline-flex flex-col items-start whitespace-nowrap select-text cursor-text drop-shadow-[0_1px_6px_rgba(0,0,0,0.75)]"
            style={{
              left: mcqw(-2),
              marginTop: mcqw(24),
              fontSize: mcqw(15),
              lineHeight: mcqw(19.5),
              gap: mcqw(5.5),
              letterSpacing: '-0.04em',
            }}
          >
            <li className="flex items-start">
              <span className="shrink-0">ㆍ</span>
              <span>임상 20년차 한방내과 전문의</span>
            </li>
            <li className="flex items-start">
              <span className="shrink-0">ㆍ</span>
              <span>
                다이어트, 갱년기질환, 면역저하 등 한방지식과
                <br />
                정확한 건강관련 정보 전달
              </span>
            </li>
            <li className="flex items-start">
              <span className="shrink-0">ㆍ</span>
              <span>
                체계적인 검사와 임상경험이 풍부한 의료진의 진단과
                <br />
                안심 한약 처방
              </span>
            </li>
          </ul>

          {/* 방송·언론매체 활동 이력 위아래 2단 (상단 4개 + 하단 4개) + 연노랑 세로선 */}
          <div
            data-selectable-text
            className="flex flex-col items-start text-left select-text cursor-text drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
            style={{
              marginTop: mcqw(15),
              rowGap: mcqw(12),
            }}
          >
            {mediaHistoryCols.map((col, colIdx) => (
              <ul
                key={colIdx}
                className="relative flex flex-col font-['Pretendard'] font-normal text-white/95 whitespace-nowrap"
                style={{
                  paddingLeft: mcqw(10),
                  fontSize: mcqw(15),
                  lineHeight: mcqw(19.5),
                  rowGap: mcqw(4),
                  letterSpacing: '-0.04em',
                }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-[2px] bottom-[2px] bg-[#E8CF8B]"
                  style={{ width: mcqw(2.2) }}
                />
                {col.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 방송 이미지 3개 그리드 (기존 가로폭 유지) */}
      <div
        className="relative z-10 grid grid-cols-3"
        style={{
          gap: mcqw(8),
          paddingLeft: mcqw(10),
          paddingRight: mcqw(10),
        }}
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
  );
}

/**
 * 5~9번 배너 모바일 — M_5~M_9 1024x1536 (aspect-[2/3]) 전용 이미지 + 선택 오버레이
 */
export function SlideCaseOverlayMobile({ data }: { data: CaseBannerData }) {
  const isSlide5 = data.id === 5;
  const isSlide7Or9 = data.id === 7 || data.id === 9;

  // 배너별 원형 감량 배지 및 기간 위치 (1024x1536 원본 실측 비율)
  const badgeStyle = isSlide5
    ? { left: '36.8%', width: '26.4%', top: '48.4%', height: '17.0%' }
    : isSlide7Or9
      ? { left: '37.2%', width: '25.6%', top: '49.5%', height: '16.0%' }
      : { left: '37.2%', width: '25.6%', top: '51.2%', height: '16.0%' };

  const periodStyle = isSlide5
    ? { left: '36.8%', width: '26.4%', top: '65.2%', height: '3.0%' }
    : isSlide7Or9
      ? { left: '37.2%', width: '25.6%', top: '63.8%', height: '2.8%' }
      : { left: '37.2%', width: '25.6%', top: '67.3%', height: '2.8%' };

  // 배너별 하단 4개 체성분 캡슐 위치
  const capsuleBox = isSlide5
    ? { left: '29.2%', width: '41.6%', height: '4.0%' }
    : { left: '30.2%', width: '39.6%', height: '3.9%' };

  const moMetricTops = isSlide5
    ? ['68.8%', '73.3%', '77.8%', '82.6%']
    : isSlide7Or9
      ? ['67.1%', '71.5%', '76.0%', '80.5%']
      : ['70.6%', '75.1%', '79.6%', '84.4%'];

  return (
    <div
      className="lg:hidden relative w-full aspect-[2/3] bg-[#FAF7EE] overflow-hidden"
      style={{ containerType: 'inline-size' }}
    >
      <Image
        src={data.moImg}
        alt={`${data.title} ${data.weightLoss} 감량 사례`}
        fill
        sizes="100vw"
        unoptimized
        draggable={false}
        className="object-cover select-none pointer-events-none"
      />

      {/* ① 상단 서브타이틀 ('眞' 직인 우측 손글씨 영역) */}
      <div
        data-selectable-text
        className="absolute flex items-center justify-center text-center select-text cursor-text"
        style={{
          left: '33%',
          width: '50%',
          top: '13.5%',
          height: '4.2%',
        }}
      >
        <p className="text-transparent selection:bg-[#08325D]/20 selection:text-transparent text-[4.2cqw] font-medium leading-none whitespace-nowrap">
          {data.subTitle}
        </p>
      </div>

      {/* ② 상단 메인 타이틀 (굵은 청록색 타이틀 영역) */}
      <div
        data-selectable-text
        className="absolute flex items-center justify-center text-center select-text cursor-text"
        style={{
          left: '9.5%',
          width: '81%',
          top: '25.0%',
          height: '8.8%',
        }}
      >
        <h2 className="text-transparent selection:bg-[#08325D]/20 selection:text-transparent text-[9.6cqw] font-extrabold leading-none whitespace-nowrap">
          {data.title}
        </h2>
      </div>

      {/* ③ Before / After 라벨 선택 영역 */}
      <span
        data-selectable-text
        className="absolute left-[7%] top-[41.2%] text-transparent selection:bg-white/35 selection:text-transparent text-[5.2cqw] font-bold italic leading-none select-text cursor-text"
      >
        Before
      </span>
      <span
        data-selectable-text
        className="absolute right-[7%] top-[41.2%] text-transparent selection:bg-white/35 selection:text-transparent text-[5.2cqw] font-bold italic leading-none select-text cursor-text"
      >
        After
      </span>

      {/* ④ 원형 감량 배지 수치 (-24.3kg 등) */}
      <div
        data-selectable-text
        className="absolute flex items-center justify-center text-center select-text cursor-text"
        style={badgeStyle}
      >
        <strong className="text-transparent selection:bg-white/35 selection:text-transparent text-[7.2cqw] font-extrabold leading-none whitespace-nowrap">
          {data.weightLoss}
        </strong>
      </div>

      {/* ⑤ 감량 기간 (감량 기간 4개월 등) */}
      <div
        data-selectable-text
        className="absolute flex items-center justify-center text-center select-text cursor-text"
        style={periodStyle}
      >
        <span className="text-transparent selection:bg-white/35 selection:text-transparent text-[3.8cqw] font-bold leading-none whitespace-nowrap">
          {data.period}
        </span>
      </div>

      {/* ⑥ 하단 4개 체성분 캡슐 ([Before] [항목명] [After] 3열 매핑) */}
      {data.metrics.map((m, idx) => {
        const cleanLabel = m.label.replace(/\(.*\)/, '');
        return (
          <div
            key={m.label}
            data-selectable-text
            className="absolute grid grid-cols-3 items-center px-[2.5%] select-text cursor-text"
            style={{
              left: capsuleBox.left,
              width: capsuleBox.width,
              height: capsuleBox.height,
              top: moMetricTops[idx],
            }}
          >
            <span className="text-left text-transparent selection:bg-white/35 selection:text-transparent text-[3.8cqw] font-semibold leading-none whitespace-nowrap">
              {m.before}{' '}
            </span>
            <span className="text-center text-transparent selection:bg-white/35 selection:text-transparent text-[3.1cqw] font-medium leading-none whitespace-nowrap">
              {cleanLabel}{' '}
            </span>
            <span className="text-right text-transparent selection:bg-white/35 selection:text-transparent text-[4.0cqw] font-bold leading-none whitespace-nowrap">
              {m.after}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * 10번 배너 모바일 — 진 해독 다이어트 3단계 프로그램 (Figma 571:111)
 */
export function Slide10Mobile() {
  return (
    <div
      className="lg:hidden relative w-full aspect-[2/3] bg-[#BFD3EA] overflow-hidden flex flex-col justify-between items-center"
      style={{
        containerType: 'inline-size',
        padding: `0 ${mcqw(15)} ${mcqw(20)}`,
      }}
    >
      {/* 상단 라운드 헤더 바 (박스 및 타이틀 10% 확대) */}
      <div
        className="bg-[#002D52] flex flex-col items-center justify-center text-center shadow-xs shrink-0"
        style={{
          width: mcqw(343),
          height: mcqw(75),
          borderBottomLeftRadius: mcqw(17.5),
          borderBottomRightRadius: mcqw(17.5),
          padding: `0 ${mcqw(12)}`,
        }}
      >
        <h2
          data-selectable-text
          className="font-['Paperlogy'] font-extrabold select-text cursor-text leading-tight"
          style={{ fontSize: mcqw(23.6) }}
        >
          <span className="text-white block">진 해독 다이어트 3단계 프로그램</span>
          <span className="text-[#BFD3EA] block" style={{ fontSize: mcqw(17.6), marginTop: mcqw(2.2) }}>
            (비운다 → 태운다 → 채운다)
          </span>
        </h2>
      </div>

      {/* 중단 3단계 원형 인포그래픽 (하단 단계별 박스와 간격 축소) */}
      <div
        className="relative shrink-0"
        style={{
          width: mcqw(252),
          height: mcqw(252),
          marginTop: mcqw(-15),
          marginBottom: mcqw(-22),
        }}
      >
        <Image
          src="/images/main/banners/b10_circle.png"
          alt="진 해독 다이어트 3단계 순환 다이어그램"
          fill
          sizes="260px"
          draggable={false}
          className="object-contain select-none pointer-events-none"
        />
        <Banner10ArrowsOverlay />

        <div
          data-selectable-text
          className="absolute left-[14.5%] top-[23.5%] w-[34%] flex flex-col items-center text-center text-white select-text cursor-text"
        >
          <span className="font-semibold leading-none" style={{ fontSize: mcqw(13.5) }}>
            01
          </span>
          <strong className="font-bold leading-tight" style={{ fontSize: mcqw(18) }}>
            비운다
          </strong>
          <span
            className="leading-tight whitespace-nowrap"
            style={{ fontSize: mcqw(11.8), letterSpacing: '-0.035em' }}
          >
            해독 프로그램
          </span>
        </div>
        <div
          data-selectable-text
          className="absolute left-[50.5%] top-[19.5%] w-[36%] flex flex-col items-center text-center text-white select-text cursor-text"
        >
          <span className="font-semibold leading-none" style={{ fontSize: mcqw(13.5) }}>
            02
          </span>
          <strong className="font-bold leading-tight" style={{ fontSize: mcqw(18) }}>
            태운다
          </strong>
          <span
            className="leading-[1.16] whitespace-pre-line"
            style={{ fontSize: mcqw(11), letterSpacing: '-0.04em' }}
          >
            {'1:1 맞춤처방을\n15일 단위로\n90일간 감량 코칭'}
          </span>
        </div>
        <div
          data-selectable-text
          className="absolute left-[19%] top-[56.5%] w-[62%] flex flex-col items-center text-center text-white select-text cursor-text"
        >
          <span className="font-semibold leading-none" style={{ fontSize: mcqw(13.5) }}>
            03
          </span>
          <strong className="font-bold leading-tight" style={{ fontSize: mcqw(18) }}>
            채운다
          </strong>
          <span
            className="leading-tight whitespace-nowrap"
            style={{ fontSize: mcqw(11.8), letterSpacing: '-0.035em' }}
          >
            180일간 요요방지 및 유지
          </span>
        </div>
      </div>

      {/* 하단 3단계 상세 카드 (박스 높이 살짝 확대 + 박스 내부 여백 여유 확보) */}
      <div
        className="w-full flex flex-col shrink-0"
        style={{ gap: mcqw(6) }}
      >
        {DETOX_STEPS.map((step) => {
          const mobileTitle =
            step.num === '02'
              ? '집중감량\n단계'
              : step.num === '03'
                ? '요요방지\n및\n유지단계'
                : step.title;
          const mobileDesc = (
            step.num === '03'
              ? step.desc
              : step.desc.replace(/ㆍ\n/g, 'ㆍ').replace(/\n/g, ' ')
          ).replace(/ㆍ/g, 'ㆍ\u200B');
          return (
            <div
              key={step.num}
              data-selectable-text
              className="w-full overflow-hidden bg-white shadow-xs flex items-stretch select-text cursor-text"
              style={{ borderRadius: mcqw(10) }}
            >
              <div
                className="shrink-0 text-white font-['Pretendard'] flex flex-col justify-center items-center text-center"
                style={{
                  width: mcqw(72),
                  backgroundColor: step.bg,
                  padding: `${mcqw(7.5)} ${mcqw(4)}`,
                }}
              >
                <span className="font-bold leading-none opacity-50" style={{ fontSize: mcqw(16) }}>
                  {step.num}
                </span>
                <h3
                  className="font-semibold whitespace-pre-line leading-[1.18]"
                  style={{ fontSize: mcqw(14), marginTop: mcqw(2.5), letterSpacing: '-0.04em' }}
                >
                  {mobileTitle}
                </h3>
              </div>
              <div
                className="flex-1 flex items-center text-slate-900 font-['Pretendard'] break-keep whitespace-pre-line"
                style={{
                  padding: `${mcqw(8.5)} ${mcqw(10.5)}`,
                  fontSize: mcqw(14),
                  lineHeight: mcqw(18.2),
                  letterSpacing: '-0.04em',
                }}
              >
                {step.num === '03' ? (
                  <div className="w-full flex flex-col">
                    {mobileDesc.split('\n').map((line, lineIdx) => (
                      <div key={lineIdx} className="flex items-start">
                        <span className="shrink-0 whitespace-pre">{'- '}</span>
                        <span className="flex-1">{line.replace(/^-\s*/, '')}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  mobileDesc
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * 11번 배너 모바일 — 자주 묻는 질문 Q&A (Figma 571:195)
 */
export function Slide11Mobile() {
  return (
    <div
      className="lg:hidden relative w-full aspect-[2/3] bg-[#0E3A5D] overflow-hidden flex flex-col justify-between items-center"
      style={{
        containerType: 'inline-size',
        padding: `${mcqw(33)} ${mcqw(14)} ${mcqw(26)}`,
      }}
    >
      {/* 상단 타이틀 (아래로 10px 추가 이동) */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{ gap: mcqw(8.5) }}
      >
        <span
          className="rounded-full bg-[#BFD3EA]"
          style={{ width: mcqw(8.5), height: mcqw(8.5) }}
        />
        <h2
          data-selectable-text
          className="font-['Paperlogy'] font-extrabold select-text cursor-text leading-none"
          style={{ fontSize: mcqw(28) }}
        >
          <span className="text-white">자주 묻는 질문 </span>
          <span className="text-[#BFD3EA]">(Q&amp;A)</span>
        </h2>
        <span
          className="rounded-full bg-[#BFD3EA]"
          style={{ width: mcqw(8.5), height: mcqw(8.5) }}
        />
      </div>

      {/* 9개 Q&A 전체 카드 (상하 간격 11px:11px 대칭 밸런스 유지) */}
      <div
        className="relative w-full bg-white shadow-md"
        style={{
          borderRadius: mcqw(16),
          padding: `${mcqw(10.5)} ${mcqw(9.5)}`,
          height: mcqw(442),
        }}
      >
        <div className="w-full h-full flex flex-col justify-between">
          {QA_LEFT_ITEMS.map((item, idx) => {
            const mobileQuestion =
              idx === 2
                ? '잠 못자거나 스트레스가 심해도\n체중에 영향을 주나요?'
                : item.q;
            return (
              <div
                key={`m-l-${idx}`}
                data-selectable-text
                className="flex items-start justify-between select-text cursor-text"
                style={{
                  gap: mcqw(5),
                }}
              >
                <div className="flex items-start min-w-0 flex-1" style={{ gap: mcqw(5.5) }}>
                  <span
                    className="shrink-0 rounded-full bg-[#002A4D] text-white font-semibold inline-flex items-center justify-center"
                    style={{
                      width: mcqw(21.5),
                      height: mcqw(21.5),
                      fontSize: mcqw(13),
                    }}
                  >
                    Q
                  </span>
                  <span
                    className="font-['Pretendard'] text-[#1E1E1E] break-keep whitespace-pre-line"
                    style={{
                      fontSize: mcqw(15.2),
                      lineHeight: mcqw(18.8),
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {mobileQuestion}
                  </span>
                </div>
                <strong
                  className={`shrink-0 font-['Pretendard'] font-extrabold self-center ${
                    item.isNo ? 'text-[#5B9FDB]' : 'text-[#137E43]'
                  }`}
                  style={{ fontSize: mcqw(17) }}
                >
                  {item.a}
                </strong>
              </div>
            );
          })}

          {QA_RIGHT_ITEMS.map((item, idx) => {
            const mobileQuestion =
              idx === 0
                ? '혈압약, 고지혈증, 당뇨약, 갑상선약을 먹고 있는데\n같이 복용해도 되나요?'
                : item.q.replace('\n', ' ');
            return (
              <div
                key={`m-r-${idx}`}
                data-selectable-text
                className="flex items-start justify-between select-text cursor-text"
                style={{
                  paddingRight: item.isDescriptive ? mcqw(112) : 0,
                  gap: mcqw(5),
                }}
              >
                <div className="flex items-start min-w-0 flex-1" style={{ gap: mcqw(5.5) }}>
                  <span
                    className="shrink-0 rounded-full bg-[#002D52] text-white font-semibold inline-flex items-center justify-center"
                    style={{
                      width: mcqw(21.5),
                      height: mcqw(21.5),
                      fontSize: mcqw(13),
                    }}
                  >
                    Q
                  </span>
                  <div className="flex-1 min-w-0">
                    <span
                      className="font-['Pretendard'] text-[#1E1E1E] break-keep whitespace-pre-line block"
                      style={{
                        fontSize: mcqw(15.2),
                        lineHeight: mcqw(18.8),
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {mobileQuestion}
                    </span>
                    {item.isDescriptive && (
                      <strong
                        className="font-['Pretendard'] font-bold text-[#137E43] break-keep block"
                        style={{
                          fontSize: mcqw(14.8),
                          lineHeight: mcqw(18.4),
                          marginTop: mcqw(2),
                          letterSpacing: '-0.04em',
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
                    style={{ fontSize: mcqw(17) }}
                  >
                    {item.a}
                  </strong>
                )}
              </div>
            );
          })}
        </div>

        {/* 8번(해독은...) & 9번(체중감량 후...) 질답 우측에 약 2배 확대 배치된 3D Q&A 아이콘 */}
        <div
          className="pointer-events-none select-none absolute"
          style={{
            right: mcqw(6),
            bottom: mcqw(10),
            width: mcqw(106),
            height: mcqw(85),
          }}
        >
          <Image
            src="/images/main/banners/b11_qa_icon.png"
            alt=""
            fill
            sizes="115px"
            draggable={false}
            className="object-contain"
          />
        </div>
      </div>

      {/* 모바일 하단 버튼 (살짝 확대 및 위로 이동) */}
      <div className="w-full flex items-center justify-center shrink-0">
        <Link
          href="/about/diet-system#qa-section"
          data-selectable-text
          className="inline-flex items-center justify-center rounded-full bg-[#5B9FDB] hover:bg-[#498ec9] active:bg-[#3d7eb6] font-semibold text-white shadow-xs transition-colors cursor-pointer"
          style={{
            height: mcqw(34),
            padding: `0 ${mcqw(24)}`,
            fontSize: mcqw(14.5),
          }}
        >
          더 자세한 답변 바로가기
        </Link>
      </div>
    </div>
  );
}
