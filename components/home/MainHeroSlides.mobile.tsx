'use client';

import Image from 'next/image';
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
  );
}

/**
 * 2번 배너 모바일 — 한방내과 전문의 비만 진료 (Figma 569:52)
 */
export function Slide2Mobile() {
  return (
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

  return (
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
  );
}

/**
 * 5~9번 배너 모바일 — M_5~M_9 1024x1536 (aspect-[2/3]) 전용 이미지 + 선택 오버레이
 */
export function SlideCaseOverlayMobile({ data }: { data: CaseBannerData }) {
  const moMetricTops = ['65.8%', '73.2%', '80.6%', '88.0%'];

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
  );
}
