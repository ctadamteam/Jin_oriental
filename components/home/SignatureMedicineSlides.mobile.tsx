'use client';

import {
  ASSET_BASE,
  BANNER01_PRODUCTS,
  BANNER01_TARGETS,
  BANNER02_LEFT_CARDS,
  BANNER02_RIGHT_CARDS,
  BANNER03_LEFT_CARDS,
  BANNER03_RIGHT_CARDS,
  BANNER04_CHIPS,
  BANNER05_PRODUCTS,
  BANNER06_DETOX_STEPS,
  BANNER06_PRODUCTS,
  CHECK_ICON_SRC,
  RED_STAR_SRC,
} from './SignatureMedicineShared';

/**
 * 배너 01 모바일 — 개인맞춤 다이어트 한약
 * (B안: 연블루 박스 라인 제거 + 대상자 4종 모두 1줄 2×2 + 하단 카드 좌측 상단 제품명·우측 하단 투명여백 상쇄 대폭 확대)
 */
const BANNER01_MOBILE_IMG_CLASS: Record<string, string> = {
  슬림환:
    'h-[94px] min-[375px]:h-[106px] sm:h-[120px] right-1 min-[375px]:right-1.5 sm:right-3 -bottom-0.5',
  올인원:
    'h-[84px] min-[375px]:h-[96px] sm:h-[108px] right-2 min-[375px]:right-2.5 sm:right-4 bottom-1',
  블랙정:
    'h-[106px] min-[375px]:h-[120px] sm:h-[136px] right-0.5 min-[375px]:right-1 sm:right-2.5 -bottom-2 min-[375px]:-bottom-2.5 sm:-bottom-3',
  지방올킬캡슐:
    'h-[76px] min-[375px]:h-[88px] sm:h-[98px] -right-2 sm:-right-0.5 bottom-1',
};

export function SignatureSlide1Mobile() {
  return (
    <div className="lg:hidden h-full flex flex-col bg-[#F8F8F8] overflow-hidden font-['Pretendard']">
      {/* 상단 타이틀 · 3줄 본문 · 대상자 4종 연블루 통합 박스 (#F8F8F8, 라인 제거 + 4종 모두 1줄) */}
      <div className="grow flex flex-col justify-center px-3 min-[375px]:px-3.5 py-4 sm:px-6 text-center">
        <p
          data-selectable-text
          className="font-['Paperlogy'] font-normal text-[#161616] text-[18px] min-[360px]:text-[20px] sm:text-[24px] md:text-[28px] leading-snug tracking-[-0.04em] select-text cursor-text break-keep"
        >
          식욕억제제ㆍ비만주사제 대신
        </p>
        <h2
          data-selectable-text
          className="mt-1 font-['Paperlogy'] font-normal text-[#161616] text-[27px] min-[360px]:text-[30px] sm:text-[36px] md:text-[44px] leading-[1.15] tracking-[-0.05em] select-text cursor-text break-keep"
        >
          개인맞춤
          <br />
          <strong className="font-extrabold text-[#083560]">다이어트 한약</strong>은 어떠세요?
        </h2>
        <p
          data-selectable-text
          className="mt-2.5 text-[12px] min-[360px]:text-[13.5px] sm:text-[14.5px] md:text-[15.5px] leading-[1.52] tracking-[-0.045em] text-[#161616] select-text cursor-text break-keep mx-auto"
        >
          개인의 건강 상태에 맞춰 무리없는 감량 계획을 세웁니다.
          <br />
          체력이 약하거나 근육량이 적은 분, 위장이 불편한 분도 상담 후
          <br />
          맞춤 처방을 고려할 수 있습니다.
        </p>

        {/* 대상자 4종 연블루 통합 박스 (테두리 라인 제거 + 57:43 비대칭 2열로 4개 항목 모두 1줄) */}
        <div className="mt-3.5 mx-auto w-full max-w-[540px] rounded-[12px] bg-[#E8EFF7] px-3 py-3 sm:px-5 sm:py-3.5">
          <h3
            data-selectable-text
            className="text-center font-bold text-[#083560] text-[14px] min-[360px]:text-[15px] sm:text-[17px] leading-snug tracking-[-0.04em] select-text cursor-text break-keep"
          >
            비만주사제를 처방받기 어렵거나 부작용이 우려되는 분
          </h3>
          <div className="mt-2.5 grid grid-cols-1 min-[360px]:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-x-2 min-[375px]:gap-x-2.5 sm:gap-x-4 gap-y-2 text-left">
            {BANNER01_TARGETS.map((item) => (
              <div key={item.text} className="min-w-0 flex items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CHECK_ICON_SRC}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="size-4 sm:size-[18px] shrink-0 object-contain select-none pointer-events-none"
                />
                <span
                  data-selectable-text
                  className="min-w-0 text-[12px] min-[375px]:text-[13px] sm:text-[14px] leading-[1.32] tracking-[-0.045em] text-[#161616] whitespace-nowrap select-text cursor-text"
                >
                  {item.text.replace(/\n/g, ' ').replace(/ㆍ/g, '·')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 제품 4종 전용 영역 (#9CB1C9 — B안: 좌측 상단 제품명 + 우측 하단 대폭 확대 이미지) */}
      <div className="shrink-0 flex flex-col justify-center bg-[#9CB1C9] px-3 min-[375px]:px-3.5 py-6 sm:px-6">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
          {BANNER01_PRODUCTS.map((prod) => (
            <div
              key={prod.name}
              className="min-w-0 relative overflow-hidden rounded-[10px] bg-white pt-3 pl-3 min-[375px]:pl-3.5 pr-2.5 pb-2 sm:pt-3.5 sm:pl-4 h-[116px] min-[375px]:h-[130px] sm:h-[146px] shadow-[2px_3px_6px_rgba(0,0,0,0.2)]"
            >
              <span
                data-selectable-text
                className="relative z-10 block font-bold text-[#083560] text-[14px] min-[375px]:text-[15.5px] min-[410px]:text-[16px] sm:text-[17px] leading-tight tracking-[-0.045em] select-text cursor-text whitespace-nowrap"
              >
                {prod.name}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={prod.img}
                alt={prod.name}
                draggable={false}
                className={`absolute w-auto max-w-none object-contain select-none pointer-events-none drop-shadow-[2px_2px_3px_rgba(0,0,0,0.18)] ${
                  BANNER01_MOBILE_IMG_CLASS[prod.name] ?? 'h-[96px] right-2 bottom-1'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 배너 02 모바일 — 일상생활 솔루션
 * (A안: 타이틀 1줄 +2px / 우측 문구 우측 하단 배치 / 우상단 아이콘 약 1.8배 확대 + 4종 균일 안쪽 여백 보정)
 */
const BANNER02_MOBILE_ICON_POS: Record<string, string> = {
  속시원정: '-top-2.5 min-[375px]:-top-3.5 sm:-top-4 -right-1 sm:right-1',
  '탈모 STOP': '-top-2 min-[375px]:-top-3 sm:-top-3.5 -right-0.5 sm:right-1.5',
  자궁미인: '-top-3 min-[375px]:-top-4 sm:-top-5 right-1 min-[375px]:right-1.5 sm:right-4',
  쾌통정: '-top-2 min-[375px]:-top-2.5 sm:-top-3 right-1 min-[375px]:right-1.5 sm:right-4',
};

export function SignatureSlide2Mobile() {
  const allCards = [...BANNER02_LEFT_CARDS, ...BANNER02_RIGHT_CARDS];

  return (
    <div className="lg:hidden h-full flex flex-col bg-[#F8F8F8] overflow-hidden font-['Pretendard']">
      {/* 상단 타이틀(1줄 +2px) & 설명(기존 크기·내부 간격 유지) */}
      <div className="grow flex flex-col justify-center items-center px-4 py-5 sm:px-6 text-center">
        <h2
          data-selectable-text
          className="font-['Paperlogy'] font-extrabold text-[30px] min-[360px]:text-[36px] sm:text-[44px] md:text-[50px] leading-[1.12] tracking-[-0.05em] select-text cursor-text whitespace-nowrap"
        >
          <span className="text-[#161616]">일상생활 </span>
          <span className="relative inline-block text-[#083560]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-[2px] h-[8px] sm:h-[10px] bg-[#79AEEB]"
            />
            <span className="relative z-10">솔루션</span>
          </span>
        </h2>

        <p
          data-selectable-text
          className="mt-2.5 text-[13.5px] sm:text-[14.5px] leading-[1.52] tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
        >
          흔해서 방치되기 쉬운 불편증상은
          <br />
          질병의 신호이므로 적극적으로 치료해야 합니다.
        </p>

        <div className="mt-2.5 inline-flex items-center justify-center rounded-full bg-[#083560] px-4 py-1">
          <span
            data-selectable-text
            className="font-semibold text-white text-[13.5px] sm:text-[15px] tracking-[-0.04em] select-text cursor-text"
          >
            맞춤관리 포인트
          </span>
        </div>

        <p
          data-selectable-text
          className="mt-2 text-[13.5px] sm:text-[14.5px] leading-[1.5] tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
        >
          소화ㆍ탈모ㆍ생리ㆍ순환 등 일상 속 불편증상을
          <br />
          체계적으로 관리하여 건강한 일상을 지켜드립니다.
        </p>
      </div>

      {/* 하단 제품 4종 그리드 (#9CB1C9, 2열 2행 — 위·아래 20px 고정) */}
      <div className="shrink-0 flex flex-col justify-center bg-[#9CB1C9] px-3 min-[375px]:px-3.5 py-5 sm:px-6">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
          {allCards.map((card) => {
            const mobileDesc = card.desc
              .replace(/ ·\s*\n/g, '\u00A0·\n')
              .replace(/ · /g, '\u00A0· ');
            const isFourLine = card.name === '속시원정';
            return (
              <div
                key={card.name}
                className="min-w-0 relative flex flex-col overflow-hidden rounded-[10px] bg-white shadow-[2px_3px_8px_rgba(0,0,0,0.2)]"
              >
                {/* 우상단 워터마크 아이콘 (A안 약 1.8배 확대: 51→90 / 64→116 / 87→148, 4종 균일 안쪽 여백) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className={`pointer-events-none select-none absolute h-[90px] min-[375px]:h-[116px] sm:h-[148px] w-auto object-contain ${
                    BANNER02_MOBILE_ICON_POS[card.name] ?? '-top-3 right-1'
                  }`}
                />

                {/* 알약통 이미지(크기 유지) + 오른쪽 설명 우측 하단 배치 */}
                <div className="relative z-10 flex flex-1 items-center gap-0.5 pl-0.5 pr-1.5 sm:pl-2 sm:pr-3 pt-5 sm:pt-6 pb-2 sm:pb-3">
                  <div className="relative flex shrink-0 items-center justify-center w-[60px] h-[112px] min-[375px]:w-[74px] min-[375px]:h-[132px] min-[410px]:w-[82px] min-[410px]:h-[140px] sm:w-[108px] sm:h-[164px] overflow-visible">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.img}
                      alt={card.name}
                      draggable={false}
                      className="h-full w-auto max-w-none object-contain select-none pointer-events-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)]"
                    />
                  </div>
                  <p
                    data-selectable-text
                    className={`min-w-0 flex-1 self-end text-[11.5px] min-[375px]:text-[13.5px] min-[410px]:text-[14px] sm:text-[15.5px] leading-[1.32] tracking-[-0.055em] text-[#161616] whitespace-pre-line select-text cursor-text break-keep ${
                      isFourLine ? 'pb-0' : 'pb-1 sm:pb-1.5'
                    }`}
                  >
                    {mobileDesc}
                  </p>
                </div>

                {/* 하단 네이비 제품명 바 */}
                <div className="relative z-20 flex h-[34px] sm:h-10 items-center justify-center bg-[#083560]">
                  <span
                    data-selectable-text
                    className="font-bold text-white text-[14px] min-[375px]:text-[14.5px] sm:text-[16px] tracking-[-0.04em] select-text cursor-text"
                  >
                    {card.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * 배너 03 모바일 — 보약 다이어트
 * (보조문구·타이틀 +2px & 1줄화 / 지정 3줄 본문 / 알약통 4종 투명여백 상쇄 균일 확대 & 왼쪽 문구 좌측 상단 정렬)
 */
export function SignatureSlide3Mobile() {
  const allCards = [...BANNER03_LEFT_CARDS, ...BANNER03_RIGHT_CARDS];

  return (
    <div className="lg:hidden h-full flex flex-col bg-[#F8F8F8] overflow-hidden font-['Pretendard']">
      {/* 상단 타이틀(1줄 +2px) & 설명(고려하며 유지 + 지정 3줄) */}
      <div className="grow flex flex-col justify-center items-center px-3 min-[375px]:px-4 py-6 sm:px-6 text-center">
        <p
          data-selectable-text
          className="font-['Paperlogy'] font-normal text-[#161616] text-[15px] min-[360px]:text-[16.5px] sm:text-[19px] tracking-[-0.04em] select-text cursor-text"
        >
          예민한 분·마른비만·중년을 위한
        </p>
        <h2
          data-selectable-text
          className="mt-1 font-['Paperlogy'] font-extrabold text-[32px] min-[360px]:text-[38px] sm:text-[46px] md:text-[52px] leading-[1.12] tracking-[-0.05em] select-text cursor-text whitespace-nowrap"
        >
          <span className="text-[#083560]">보약 </span>
          <span className="text-[#161616]">다이어트</span>
        </h2>

        <p
          data-selectable-text
          className="mt-2.5 text-[11.5px] min-[360px]:text-[12.8px] min-[375px]:text-[13.5px] sm:text-[14.5px] leading-[1.48] tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
        >
          무리하게 살 빼기보다 건강을 고려하며
          <br />
          기력저하, 불면증, 갱년기증상, 순환장애 등을 같이 개선하는
          <br />
          나에게 맞춤 다이어트를 진행합니다.
        </p>

        <div className="mt-2.5 inline-flex items-center justify-center rounded-full bg-[#083560] px-4 py-1">
          <span
            data-selectable-text
            className="font-semibold text-white text-[13.5px] sm:text-[15px] tracking-[-0.04em] select-text cursor-text"
          >
            맞춤관리 포인트
          </span>
        </div>

        {/* 빨간 크레용 별 + 빨간 밑줄 증상 나열 */}
        <div className="relative mt-2 inline-block max-w-full px-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={RED_STAR_SRC}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none select-none inline-block align-top mr-1 -mt-0.5 size-4 sm:size-5 object-contain"
          />
          <span
            data-selectable-text
            className="text-[13px] sm:text-[14.5px] leading-[1.65] tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
            style={{
              backgroundImage: 'linear-gradient(to top, #DF2F2F 0, #DF2F2F 2px, transparent 2px)',
              paddingBottom: '2px',
              boxDecorationBreak: 'clone',
              WebkitBoxDecorationBreak: 'clone',
            }}
          >
            현기증, 소화불량, 부종, 기력저하, 두근거림,
            <br />
            불면증, 홧병, 변비, 순환장애 등
          </span>
        </div>
      </div>

      {/* 하단 제품 4종 그리드 (#9CB1C9, 2열 2행 — 위·아래 24px 고정, 여분 여백 상단 집중) */}
      <div className="shrink-0 flex flex-col justify-center bg-[#9CB1C9] px-3 min-[375px]:px-3.5 py-6 sm:px-6">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
          {allCards.map((card) => {
            const mobileDesc = card.desc.replace(/ 때/g, '\u00A0때');
            return (
              <div
                key={card.name}
                className="min-w-0 flex items-stretch justify-between gap-0.5 rounded-[10px] bg-white overflow-hidden pl-2 pr-1 min-[375px]:pl-2.5 min-[375px]:pr-1 sm:pl-4 sm:pr-3 py-3 sm:py-3.5 shadow-[2px_3px_8px_rgba(0,0,0,0.2)]"
              >
                <div className="relative z-10 min-w-0 flex-1 flex flex-col justify-start pt-0.5 sm:pt-1">
                  <p
                    data-selectable-text
                    className="font-bold text-[#083560] text-[13.5px] min-[375px]:text-[15.5px] min-[410px]:text-[16px] sm:text-[17px] leading-snug tracking-[-0.045em] select-text cursor-text whitespace-nowrap"
                  >
                    {card.name}
                  </p>
                  <p
                    data-selectable-text
                    className="mt-1 text-[11.5px] min-[375px]:text-[13.5px] min-[410px]:text-[14px] sm:text-[15px] leading-[1.35] tracking-[-0.055em] text-[#161616] whitespace-pre-line select-text cursor-text break-keep"
                  >
                    {mobileDesc}
                  </p>
                </div>
                <div className="relative flex shrink-0 self-center items-center justify-center w-[56px] h-[112px] min-[375px]:w-[68px] min-[375px]:h-[132px] min-[410px]:w-[74px] min-[410px]:h-[138px] sm:w-[96px] sm:h-[154px] overflow-visible">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.name}
                    draggable={false}
                    className="h-full w-auto max-w-none translate-x-0.5 object-contain select-none pointer-events-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.22)]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * 배너 04 모바일 — 뱃살·붓기 프로그램
 * (타이틀 1줄 +2px / 알약통 크기 유지 / 하단 제품명 배지 통일 확대 및 설명 +2px 확대)
 */
export function SignatureSlide4Mobile() {
  return (
    <div className="lg:hidden h-full flex flex-col bg-[#F8F8F8] overflow-hidden font-['Pretendard']">
      {/* 상단 타이틀(1줄 +2px) & 설명(기존 크기 유지) */}
      <div className="grow flex flex-col justify-center items-center px-3 min-[375px]:px-4 py-5 sm:px-6 text-center">
        <h2
          data-selectable-text
          className="font-['Paperlogy'] font-extrabold text-[30px] min-[360px]:text-[36px] sm:text-[44px] md:text-[50px] leading-[1.12] tracking-[-0.05em] select-text cursor-text whitespace-nowrap"
        >
          <span className="text-[#083560]">뱃살·붓기 </span>
          <span className="text-[#161616]">프로그램</span>
        </h2>

        <p
          data-selectable-text
          className="mt-2.5 text-[13.5px] sm:text-[14.5px] leading-[1.58] tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
        >
          <span className="bg-[linear-gradient(to_top,#FFF2B1_45%,transparent_45%)] px-1">
            붓기가 빠지고 내장지방이 줄어야 건강한 다이어트입니다.
          </span>
          <br />
          배가 더부룩하고 자주 붓는다면
          <br />
          해독 프로그램을 병행하시면 더욱 좋습니다.
        </p>

        {/* 키워드 필 칩 3개 */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {BANNER04_CHIPS.map((chip) => (
            <span
              key={chip}
              data-selectable-text
              className="inline-flex items-center justify-center rounded-full bg-[#083560] px-3.5 py-1 text-[13px] sm:text-[14px] font-semibold text-white tracking-[-0.04em] select-text cursor-text"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* 강조 문구 + 노란 별 */}
        <div className="mt-3.5 inline-flex items-center justify-center gap-1">
          <p
            data-selectable-text
            className="bg-[linear-gradient(to_top,#FFF2B1_52%,transparent_52%)] px-1.5 text-[18px] sm:text-[22px] leading-snug tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
          >
            붓기와 뱃살은 <strong className="font-bold text-[#083560]">만성염증의 신호!</strong>
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${ASSET_BASE}/icon-yellow-star.png`}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="-mt-3 size-5 sm:size-6 shrink-0 object-contain select-none pointer-events-none"
          />
        </div>

        <p
          data-selectable-text
          className="mt-1.5 text-[13px] sm:text-[14px] text-[#161616] tracking-[-0.04em] select-text cursor-text break-keep"
        >
          내 몸 상태에 맞춰 원장님과 상담 후 처방합니다.
        </p>
      </div>

      {/* 하단 딥네이비(#083560) 제품 전시 2열 (알약통 크기 유지 / 배지 통일·설명 +2px 확대) */}
      <div className="grow flex flex-col justify-center bg-[#083560] px-3 min-[375px]:px-3.5 py-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 items-end">
          {/* 좌: 뱃살·부종 캡슐 */}
          <div className="min-w-0 flex flex-col items-center text-center">
            <div className="flex h-[172px] sm:h-[195px] items-end justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET_BASE}/prod-belly-edema.png`}
                alt="뱃살·부종 캡슐"
                draggable={false}
                className="h-full w-auto object-contain select-none pointer-events-none drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)]"
              />
            </div>
            <span
              data-selectable-text
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[#9CB1C9] px-3 min-[375px]:px-3.5 py-1 text-[13px] min-[375px]:text-[15.5px] min-[410px]:text-[16px] sm:text-[16.5px] font-bold text-[#083560] tracking-[-0.04em] select-text cursor-text whitespace-nowrap"
            >
              뱃살·부종 캡슐
            </span>
            <p
              data-selectable-text
              className="mt-2 text-[12px] min-[375px]:text-[14.5px] min-[410px]:text-[15px] sm:text-[16px] leading-[1.4] tracking-[-0.05em] text-white whitespace-pre-line select-text cursor-text break-keep"
            >
              {'복부와 붓기를 함께\n관리하고 싶을 때'}
            </p>
          </div>

          {/* 우: 붓기제로 / 배사라정 */}
          <div className="min-w-0 flex flex-col items-center text-center">
            <div className="relative flex h-[172px] sm:h-[195px] w-full max-w-[180px] items-end justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET_BASE}/prod-butgizero.png`}
                alt="붓기제로"
                draggable={false}
                className="h-[88%] w-auto -mr-6 mb-3 object-contain select-none pointer-events-none drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET_BASE}/prod-baesara.png`}
                alt="배사라정"
                draggable={false}
                className="relative z-10 h-[90%] w-auto -ml-4 object-contain select-none pointer-events-none drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)]"
              />
            </div>
            <span
              data-selectable-text
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[#9CB1C9] px-3 min-[375px]:px-3.5 py-1 text-[13px] min-[375px]:text-[15.5px] min-[410px]:text-[16px] sm:text-[16.5px] font-bold text-[#083560] tracking-[-0.04em] select-text cursor-text whitespace-nowrap"
            >
              붓기제로 / 배사라정
            </span>
            <p
              data-selectable-text
              className="mt-2 text-[12px] min-[375px]:text-[14.5px] min-[410px]:text-[15px] sm:text-[16px] leading-[1.4] tracking-[-0.05em] text-white whitespace-pre-line select-text cursor-text break-keep"
            >
              {'순환·붓기와 배변 상태까지\n고려한 맞춤 한방 관리'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 배너 05 모바일 — 비만주사제 후 유지
 * (A안: 서브·타이틀 +2px / 세로 3행 유지 + 카드·글자·3종 이미지 투명여백 상쇄 대폭 확대)
 */
const BANNER05_MOBILE_IMG_CLASS: Record<string, string> = {
  유지환: 'h-[96px] min-[375px]:h-[106px] md:h-[118px]',
  블랙정: 'h-[104px] min-[375px]:h-[116px] md:h-[128px]',
  지방올킬캡슐: 'h-[76px] min-[375px]:h-[84px] md:h-[94px]',
};

export function SignatureSlide5Mobile() {
  return (
    <div className="lg:hidden h-full flex flex-col bg-[#F8F8F8] overflow-hidden font-['Pretendard']">
      {/* 상단 질문형 서브(+2px) + 타이틀(+2px) + 본문 + 안내 바 (중앙정렬 통일) */}
      <div className="grow flex flex-col justify-center items-center px-3 min-[375px]:px-4 py-5 sm:px-6 text-center">
        <p
          data-selectable-text
          className="font-['Paperlogy'] font-normal text-[#161616] text-[15.5px] min-[360px]:text-[18.5px] sm:text-[23px] md:text-[26px] leading-[1.3] tracking-[-0.04em] select-text cursor-text break-keep"
        >
          주사제를 계속 맞기는 부담스럽고,
          <br />
          다시 왕성해지는 식욕은 잡고 싶다면?
        </p>

        <h2
          data-selectable-text
          className="mt-2 font-['Paperlogy'] font-normal text-[#161616] text-[28px] min-[360px]:text-[33px] sm:text-[42px] md:text-[48px] leading-[1.12] tracking-[-0.05em] select-text cursor-text break-keep"
        >
          <strong className="font-extrabold text-[#083560]">
            마운자로 등
            <br />
            비만주사제
          </strong>
          {' 후 유지'}
        </h2>

        <p
          data-selectable-text
          className="mt-2.5 text-[13.5px] sm:text-[15px] leading-[1.52] tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
        >
          감량 후 식욕과 체중을 관리하는 유지 계획도 중요합니다.
          <br />
          주사 후 유지, 혼자 고민하지 말고 상담하세요.
        </p>

        <div className="mt-2.5 mx-auto inline-block max-w-full bg-[#D7E3F0] px-3 py-1.5">
          <p
            data-selectable-text
            className="text-[12.5px] sm:text-[14px] leading-snug tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
          >
            1일 1~2회 복용 권장, 수개월 ~ 수년 등 장기간 복용가능
          </p>
        </div>
      </div>

      {/* 하단 제품 3종 카드 (#9CB1C9, 세로 3행 확대 / 태블릿 3열 유지) */}
      <div className="shrink-0 flex flex-col justify-center bg-[#9CB1C9] px-3 min-[375px]:px-3.5 py-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
          {BANNER05_PRODUCTS.map((prod) => (
            <div
              key={prod.name}
              className="min-w-0 flex items-center justify-between gap-3 md:flex-col md:items-center md:justify-center md:text-center rounded-[10px] bg-white overflow-hidden px-4 min-[375px]:px-5 py-2 md:px-3 md:py-5 h-[100px] min-[375px]:h-[110px] md:h-auto md:min-h-[210px] shadow-[2px_3px_8px_rgba(0,0,0,0.2)]"
            >
              <div className="relative z-10 min-w-0 flex-1 md:flex-none">
                <p
                  data-selectable-text
                  className="font-bold text-[#083560] text-[15.5px] min-[375px]:text-[17px] sm:text-[18px] leading-snug tracking-[-0.04em] select-text cursor-text"
                >
                  {prod.name}
                </p>
                <p
                  data-selectable-text
                  className="mt-1 text-[13px] min-[375px]:text-[14.5px] sm:text-[15.5px] leading-[1.38] tracking-[-0.045em] text-[#161616] whitespace-pre-line select-text cursor-text break-keep"
                >
                  {prod.desc}
                </p>
              </div>
              <div className="relative flex shrink-0 items-center justify-center w-[84px] h-[84px] min-[375px]:w-[96px] min-[375px]:h-[94px] md:w-[116px] md:h-[104px] overflow-visible">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prod.img}
                  alt={prod.name}
                  draggable={false}
                  className={`${BANNER05_MOBILE_IMG_CLASS[prod.name] ?? 'h-[96px]'} w-auto max-w-none object-contain select-none pointer-events-none drop-shadow-[2px_2px_3px_rgba(0,0,0,0.18)]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 배너 06 모바일 — 해독 프로그램
 * (타이틀 +2px · 도입 설명 +1px / 간·장·림프해독 라벨 아이콘 하단 배치 & 라인 정렬 / 하단 A안 세로 3행 대폭 확대)
 */
const BANNER06_MOBILE_IMG_CLASS: Record<string, string> = {
  해독탕: 'h-[58px] min-[375px]:h-[68px] sm:h-[74px] md:h-[62px]',
  수독환: 'h-[74px] min-[375px]:h-[84px] sm:h-[90px] md:h-[78px]',
  '한방발효효소 선식': 'h-[70px] min-[375px]:h-[80px] sm:h-[86px] md:h-[74px]',
};

export function SignatureSlide6Mobile() {
  return (
    <div className="lg:hidden h-full flex flex-col md:flex-row bg-[#F8F8F8] overflow-hidden font-['Pretendard']">
      {/* 상단(태블릿 좌측): 타이틀(+2px)·도입(+1px) 중앙정렬 + 간·장·림프해독 3행 왼쪽정렬 유지 */}
      <div className="min-w-0 grow md:flex-1 px-3 min-[375px]:px-3.5 py-4 sm:px-6 flex flex-col justify-center">
        {/* 상단 타이틀 & 도입 문구만 중앙정렬 */}
        <div className="text-center">
          <h2
            data-selectable-text
            className="font-['Paperlogy'] font-extrabold text-[28px] min-[360px]:text-[32px] sm:text-[38px] md:text-[42px] leading-[1.1] tracking-[-0.05em] select-text cursor-text"
          >
            <span className="text-[#083560]">해독 </span>
            <span className="text-[#161616]">프로그램</span>
          </h2>

          <p
            data-selectable-text
            className="mt-2 -mx-2 sm:mx-0 text-[10.5px] min-[360px]:text-[12.2px] min-[375px]:text-[13.5px] sm:text-[14.5px] leading-[1.46] tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
          >
            萬病一毒(만병일독), 모든 병은 독 때문입니다.
            <br />
            <span className="tracking-[-0.072em] [word-spacing:-0.08em] sm:tracking-[-0.04em] sm:[word-spacing:normal]">
              <span className="border-b-2 border-[#79AEEB] pb-[1px]">
                다이어트 및 현대 치료의 시작은 독소 배출 및 해독 능력의 복구에서
              </span>{' '}
              시작됩니다.
            </span>
            <br />
            특히 뱃살과 붓기가 고민이라면 해독요법이 도움이 됩니다.
          </p>
        </div>

        {/* 간·장·림프해독 3단계 — 좌측 [아이콘 + 아래 라벨] / 우측 [설명 + 노란 태그] 라인 통일 */}
        <div className="mt-3 flex flex-col gap-2.5 text-left">
          {BANNER06_DETOX_STEPS.map((step) => (
            <div key={step.badge} className="min-w-0 flex items-center gap-2 min-[375px]:gap-2.5">
              <div className="w-[58px] min-[375px]:w-[66px] sm:w-[76px] shrink-0 flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.icon}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="h-[26px] w-[36px] min-[375px]:h-[32px] min-[375px]:w-[42px] sm:h-[38px] sm:w-[50px] object-contain select-none pointer-events-none"
                />
                <span
                  data-selectable-text
                  className="mt-1 w-full inline-flex items-center justify-center rounded-full bg-[#083560] py-0.5 text-[10.5px] min-[375px]:text-[11.5px] sm:text-[13px] font-semibold text-white tracking-[-0.04em] whitespace-nowrap select-text cursor-text"
                >
                  {step.badge}
                </span>
              </div>

              <div className="min-w-0 flex-1 flex flex-col justify-center">
                <p
                  data-selectable-text
                  className="text-[11.5px] min-[375px]:text-[12.5px] sm:text-[13.5px] leading-[1.35] tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
                >
                  {step.desc.replace('\n', ' ')}
                </p>
                <div className="mt-0.5">
                  <span
                    data-selectable-text
                    className="inline px-0.5 text-[10.5px] min-[375px]:text-[11.5px] sm:text-[12.5px] font-medium leading-[1.45] tracking-[-0.04em] text-[#161616] select-text cursor-text break-keep"
                    style={{
                      backgroundImage: 'linear-gradient(to top, #FFF2B1 60%, transparent 60%)',
                      boxDecorationBreak: 'clone',
                      WebkitBoxDecorationBreak: 'clone',
                    }}
                  >
                    {step.tags.replace(/ㆍ/g, 'ㆍ\u200B')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단(태블릿 우측): 딥네이비(#083560) 제품 3종 카드 (A안: 세로 3행 대폭 확대 + 좌측 문구 좌측 상단 정렬) */}
      <div className="min-w-0 shrink-0 md:w-[40%] flex flex-col justify-center bg-[#083560] px-3 min-[375px]:px-3.5 py-3.5 sm:px-5">
        <div className="flex flex-col gap-2.5">
          {BANNER06_PRODUCTS.map((prod) => (
            <div
              key={prod.name}
              className="min-w-0 flex items-stretch justify-between gap-2 rounded-[10px] bg-white overflow-hidden px-3.5 min-[375px]:px-4 py-2 h-[86px] min-[375px]:h-[92px] sm:h-[104px] md:h-auto md:min-h-[104px] shadow-[2px_3px_8px_rgba(0,0,0,0.22)]"
            >
              <div className="relative z-10 min-w-0 flex-1 flex flex-col justify-start pt-1.5 sm:pt-2">
                <p
                  data-selectable-text
                  className="font-bold text-[#083560] text-[14.5px] min-[375px]:text-[16px] sm:text-[17px] md:text-[15.5px] leading-snug tracking-[-0.04em] select-text cursor-text break-keep"
                >
                  {prod.name}
                </p>
                <p
                  data-selectable-text
                  className="mt-0.5 text-[12px] min-[375px]:text-[13.5px] sm:text-[14.5px] md:text-[12.5px] leading-[1.34] tracking-[-0.045em] text-[#161616] whitespace-pre-line select-text cursor-text break-keep"
                >
                  {prod.desc}
                </p>
              </div>
              <div className="relative flex shrink-0 self-center items-center justify-center w-[84px] h-[74px] min-[375px]:w-[104px] min-[375px]:h-[84px] sm:w-[112px] sm:h-[90px] md:w-[90px] md:h-[78px] overflow-visible">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prod.img}
                  alt={prod.name}
                  draggable={false}
                  className={`${BANNER06_MOBILE_IMG_CLASS[prod.name] ?? 'h-[76px]'} w-auto max-w-none object-contain select-none pointer-events-none drop-shadow-[2px_2px_3px_rgba(0,0,0,0.18)]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
