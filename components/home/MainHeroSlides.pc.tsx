'use client';

import Image from 'next/image';
import {
  Banner10ArrowsOverlay,
  Banner2HandwritingTitle,
  CaseBannerData,
  cqw,
  DETOX_STEPS,
  QA_LEFT_ITEMS,
  QA_RIGHT_ITEMS,
} from './MainHeroShared';

/**
 * 1번 배너 PC — 다이어트 요요 관리 (Figma 569:3)
 */
export function Slide1Pc() {
  return (
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
  );
}

/**
 * 2번 배너 PC — 한방내과 전문의 비만 진료 (Figma 569:52)
 */
export function Slide2Pc() {
  return (
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
  );
}

/**
 * 3번 배너 PC — 진한의원 후기 (Figma 569:70)
 */
export function Slide3Pc() {
  return (
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
  );
}

/**
 * 4번 배너 PC — 방송 및 언론매체 다수 출연 (Figma 569:25)
 */
export function Slide4Pc() {
  const thumbs = [
    { src: '/images/main/banners/b4_thumb_1.png', alt: 'KNN 방송 출연 장면 1' },
    { src: '/images/main/banners/b4_thumb_2.png', alt: '방송 및 언론 출연 장면 2' },
    { src: '/images/main/banners/b4_thumb_3.png', alt: '방송 및 언론 출연 장면 3' },
  ];

  return (
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
  );
}

/**
 * 5~9번 배너 PC — PNG 기반 이미지 + 정밀 좌표 HTML 텍스트 선택/복사 오버레이
 */
export function SlideCaseOverlayPc({ data }: { data: CaseBannerData }) {
  const isSlide5 = data.id === 5;
  const isSlide7Or9 = data.id === 7 || data.id === 9;

  const badgeStyle = isSlide5
    ? { left: '73.4%', width: '10.5%', top: '24.5%', height: '26.3%' }
    : isSlide7Or9
      ? { left: '72.1%', width: '9.8%', top: '25.3%', height: '24.5%' }
      : { left: '71.7%', width: '10.4%', top: '28.2%', height: '26.2%' };

  const periodStyle = isSlide5
    ? { left: '73.4%', width: '10.5%', top: '51.5%', height: '4.2%' }
    : isSlide7Or9
      ? { left: '72.1%', width: '9.8%', top: '50.2%', height: '4.0%' }
      : { left: '71.7%', width: '10.4%', top: '54.6%', height: '4.0%' };

  const capsuleBox = isSlide5
    ? { left: '71.3%', width: '14.7%', height: '5.8%' }
    : isSlide7Or9
      ? { left: '69.8%', width: '14.5%', height: '5.8%' }
      : { left: '69.5%', width: '14.8%', height: '5.8%' };

  const pcMetricTops = isSlide5
    ? ['56.7%', '63.9%', '71.2%', '78.6%']
    : isSlide7Or9
      ? ['54.8%', '61.8%', '68.8%', '76.0%']
      : ['59.2%', '66.3%', '73.5%', '80.7%'];

  return (
    <div
      className="hidden lg:block relative w-full aspect-[1920/645] bg-[#FAF7EE] overflow-hidden"
      style={{ containerType: 'inline-size' }}
    >
      <Image
        src={data.pcImg}
        alt={`${data.title} ${data.weightLoss} 감량 사례`}
        fill
        sizes="100vw"
        unoptimized
        draggable={false}
        className="object-contain select-none pointer-events-none"
      />

      {/* 6.png ("55 3") 소수점 누락 시각 보정 점 */}
      {data.fixDotOnPc && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            left: '81.93%',
            top: '63.45%',
            width: cqw(3.5),
            height: cqw(3.5),
          }}
        />
      )}

      {/* ① 좌측 상단 서브 타이틀 ('眞' 직인 우측 손글씨 영역) */}
      <div
        data-selectable-text
        className="absolute flex items-center select-text cursor-text"
        style={{
          left: '19.2%',
          top: '29.5%',
          width: '31.0%',
          height: '9.0%',
        }}
      >
        <p
          className="text-transparent selection:bg-[#08325D]/20 selection:text-transparent font-medium leading-none whitespace-nowrap"
          style={{ fontSize: cqw(36) }}
        >
          {data.subTitle}
        </p>
      </div>

      {/* ② 좌측 메인 타이틀 (대형 청록색 타이틀 영역) */}
      <div
        data-selectable-text
        className="absolute flex items-center select-text cursor-text"
        style={{
          left: '8.0%',
          top: '50.5%',
          width: '49.5%',
          height: '21.5%',
        }}
      >
        <h2
          className="text-transparent selection:bg-[#08325D]/20 selection:text-transparent font-extrabold leading-none whitespace-nowrap"
          style={{ fontSize: cqw(108), letterSpacing: '-0.04em' }}
        >
          {data.title}
        </h2>
      </div>

      {/* ③ 우측 사진 카드 상단 Before / After 라벨 */}
      <span
        data-selectable-text
        className="absolute left-[61.0%] top-[13.0%] text-transparent selection:bg-white/35 selection:text-transparent font-bold italic leading-none select-text cursor-text"
        style={{ fontSize: cqw(34) }}
      >
        Before
      </span>
      <span
        data-selectable-text
        className="absolute left-[87.8%] top-[13.0%] text-transparent selection:bg-white/35 selection:text-transparent font-bold italic leading-none select-text cursor-text"
        style={{ fontSize: cqw(34) }}
      >
        After
      </span>

      {/* ④ 원형 감량 배지 수치 (-24.3kg 등) */}
      <div
        data-selectable-text
        className="absolute flex items-center justify-center text-center select-text cursor-text"
        style={badgeStyle}
      >
        <strong
          className="text-transparent selection:bg-white/35 selection:text-transparent font-extrabold leading-none whitespace-nowrap"
          style={{ fontSize: cqw(44) }}
        >
          {data.weightLoss}
        </strong>
      </div>

      {/* ⑤ 감량 기간 (감량 기간 4개월 등) */}
      <div
        data-selectable-text
        className="absolute flex items-center justify-center text-center select-text cursor-text"
        style={periodStyle}
      >
        <span
          className="text-transparent selection:bg-white/35 selection:text-transparent font-bold leading-none whitespace-nowrap"
          style={{ fontSize: cqw(22) }}
        >
          {data.period}
        </span>
      </div>

      {/* ⑥ 우측 사진 하단 4개 체성분 수치 캡슐 ([Before] [항목명] [After] 3열 매핑) */}
      {data.metrics.map((m, idx) => {
        const cleanLabel = m.label.replace(/\(.*\)/, '');
        return (
          <div
            key={m.label}
            data-selectable-text
            className="absolute grid grid-cols-3 items-center px-[0.9%] select-text cursor-text"
            style={{
              left: capsuleBox.left,
              width: capsuleBox.width,
              height: capsuleBox.height,
              top: pcMetricTops[idx],
            }}
          >
            <span
              className="text-left text-transparent selection:bg-white/35 selection:text-transparent font-semibold leading-none whitespace-nowrap"
              style={{ fontSize: cqw(22) }}
            >
              {m.before}{' '}
            </span>
            <span
              className="text-center text-transparent selection:bg-white/35 selection:text-transparent font-medium leading-none whitespace-nowrap"
              style={{ fontSize: cqw(18) }}
            >
              {cleanLabel}{' '}
            </span>
            <span
              className="text-right text-transparent selection:bg-white/35 selection:text-transparent font-bold leading-none whitespace-nowrap"
              style={{ fontSize: cqw(23) }}
            >
              {m.after}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * 10번 배너 PC — 진 해독 다이어트 3단계 프로그램 (Figma 571:111)
 */
export function Slide10Pc() {
  return (
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
          top: '25.581%',
          width: cqw(1012),
          gap: cqw(15),
        }}
      >
        {DETOX_STEPS.map((step) => {
          const pcHeightPx = step.num === '03' ? 174 : step.heightPx;
          const pcStep3Bullets = [
            '감량된 몸무게를 꾸준히 편안하게 유지할 수 있도록 유지환 처방',
            '체중 세트 포인트 정착을 위한 밀착관리',
            '피부탄력저하ㆍ탈모ㆍ현기증ㆍ체력저하ㆍ무기력감 등을 예방하고 회복을\n도와드림.',
          ];

          return (
            <div
              key={step.num}
              data-selectable-text
              className="flex overflow-hidden bg-white shadow-xs select-text cursor-text"
              style={{
                height: cqw(pcHeightPx),
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
                  className="absolute font-semibold opacity-50"
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
                {step.num === '03' ? (
                  <div
                    className="w-full flex flex-col font-['Pretendard'] font-normal text-black"
                    style={{
                      fontSize: cqw(24),
                      lineHeight: cqw(33),
                      letterSpacing: cqw(-1.2),
                    }}
                  >
                    {pcStep3Bullets.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-start">
                        <span className="shrink-0 whitespace-pre">{'- '}</span>
                        <span className="flex-1 whitespace-pre-line">{bullet}</span>
                      </div>
                    ))}
                  </div>
                ) : (
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
 * 11번 배너 PC — 자주 묻는 질문 Q&A (Figma 571:195)
 */
export function Slide11Pc() {
  return (
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

          {/* 우측 하단 3D Q&A 채팅 아이콘 (흰색 박스 내부 우측 하단 배치) */}
          <div
            className="pointer-events-none select-none absolute"
            style={{
              right: cqw(22),
              bottom: cqw(18),
              width: cqw(195),
              height: cqw(155),
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
  );
}
