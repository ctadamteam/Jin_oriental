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
  scqw,
} from './SignatureMedicineShared';

/**
 * 배너 01 PC — 개인맞춤 다이어트 한약 (Figma 774:3, 1200x523)
 */
export function SignatureSlide1Pc() {
  return (
    <div
      className="hidden lg:block relative w-full aspect-[1200/523] bg-[#F8F8F8] overflow-hidden font-['Pretendard']"
      style={{ containerType: 'inline-size' }}
    >
      {/* 좌측 패널 (#9CB1C9, 323px) */}
      <div
        className="absolute left-0 top-0 h-full bg-[#9CB1C9]"
        style={{ width: scqw(323) }}
      >
        <h3
          data-selectable-text
          className="absolute inset-x-0 text-center font-bold text-[#083560] whitespace-pre-line select-text cursor-text"
          style={{
            top: scqw(32),
            fontSize: scqw(25),
            lineHeight: scqw(35),
            letterSpacing: scqw(-1.25),
          }}
        >
          {'비만주사제를\n처방받기 어렵거나 부작용이\n우려되는 분'}
        </h3>

        {BANNER01_TARGETS.map((item) => (
          <div
            key={item.text}
            className="absolute bg-white"
            style={{
              left: scqw(23),
              top: scqw(item.cardTop),
              width: scqw(278),
              height: scqw(item.cardHeight),
              borderRadius: scqw(10),
              boxShadow: `${scqw(4)} ${scqw(4)} ${scqw(4)} rgba(0, 0, 0, 0.25)`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CHECK_ICON_SRC}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute object-contain select-none pointer-events-none"
              style={{
                left: scqw(21),
                top: scqw(21),
                width: scqw(27),
                height: scqw(27),
              }}
            />
            <p
              data-selectable-text
              className="absolute font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
              style={{
                left: scqw(59),
                top: scqw(21),
                fontSize: scqw(22),
                lineHeight: scqw(27),
                letterSpacing: scqw(-1.1),
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* 중앙 타이틀 & 본문 (554px) */}
      <div
        className="absolute top-0 h-full text-center"
        style={{ left: scqw(323), width: scqw(554) }}
      >
        <p
          data-selectable-text
          className="absolute inset-x-0 font-['Paperlogy'] font-normal text-[#161616] select-text cursor-text whitespace-nowrap"
          style={{
            top: scqw(67),
            fontSize: scqw(40),
            lineHeight: scqw(40),
            letterSpacing: scqw(-2),
          }}
        >
          식욕억제제ㆍ비만주사제 대신
        </p>

        <h2
          data-selectable-text
          className="absolute inset-x-0 font-['Paperlogy'] font-normal text-[#161616] select-text cursor-text"
          style={{
            top: scqw(112),
            fontSize: scqw(65),
            lineHeight: scqw(70),
            letterSpacing: scqw(-3.25),
          }}
        >
          개인맞춤
          <br />
          <strong className="font-extrabold text-[#083560]">다이어트 한약</strong>은
          <br />
          어떠세요?
        </h2>

        <p
          data-selectable-text
          className="absolute inset-x-0 font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
          style={{
            top: scqw(369),
            fontSize: scqw(20),
            lineHeight: scqw(30),
            letterSpacing: scqw(-1),
          }}
        >
          {'개인의 건강 상태에 맞춰 무리없는 감량 계획을 세웁니다.\n체력이 약하거나 근육량이 적은 분,\n위장이 불편한 분도 상담 후 맞춤 처방을 고려할 수 있습니다.'}
        </p>
      </div>

      {/* 우측 패널 (#9CB1C9, 323px) */}
      <div
        className="absolute right-0 top-0 h-full bg-[#9CB1C9]"
        style={{ width: scqw(323) }}
      >
        {BANNER01_PRODUCTS.map((prod) => (
          <div
            key={prod.name}
            className="absolute bg-white"
            style={{
              left: scqw(23),
              top: scqw(prod.cardTop),
              width: scqw(278),
              height: scqw(113),
              borderRadius: scqw(10),
              boxShadow: `${scqw(4)} ${scqw(4)} ${scqw(4)} rgba(0, 0, 0, 0.25)`,
            }}
          >
            <p
              data-selectable-text
              className="absolute font-medium text-[#083560] select-text cursor-text whitespace-nowrap"
              style={{
                left: scqw(19),
                top: scqw(21),
                fontSize: scqw(22),
                lineHeight: scqw(27),
                letterSpacing: scqw(-1.1),
              }}
            >
              {prod.name}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={prod.img}
              alt={prod.name}
              draggable={false}
              className="absolute object-contain select-none pointer-events-none"
              style={{
                left: scqw(prod.imgLeft),
                top: scqw(prod.imgTop),
                width: scqw(prod.imgW),
                height: scqw(prod.imgH),
                filter: `drop-shadow(${scqw(3)} ${scqw(3)} ${scqw(3)} rgba(0, 0, 0, 0.2))`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 배너 02 PC — 일상생활 솔루션 (Figma 774:52, 1200x523)
 */
export function SignatureSlide2Pc() {
  const renderCard = (card: (typeof BANNER02_LEFT_CARDS)[number] | (typeof BANNER02_RIGHT_CARDS)[number]) => (
    <div
      key={card.name}
      className="absolute bg-white overflow-hidden"
      style={{
        left: scqw(34),
        top: scqw(card.cardTop),
        width: scqw(286),
        height: scqw(229),
        borderRadius: scqw(10),
        boxShadow: `${scqw(4)} ${scqw(4)} ${scqw(10)} rgba(0, 0, 0, 0.25)`,
      }}
    >
      {/* 우상단 워터마크 의료 아이콘 (Figma에서 20% 알파가 이미 반영된 PNG) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.icon}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute z-0 object-contain select-none pointer-events-none"
        style={{
          left: scqw(card.iconLeft),
          top: scqw(card.iconTop),
          width: scqw(card.iconW),
          height: scqw(card.iconH),
        }}
      />

      {/* 병 바닥 소프트 그림자 */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          left: scqw(22),
          bottom: scqw(31),
          width: scqw(98),
          height: scqw(10),
          background: 'rgba(0, 0, 0, 0.45)',
          filter: `blur(${scqw(5)})`,
        }}
      />

      {/* 제품 병 누끼 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.img}
        alt={card.name}
        draggable={false}
        className="absolute z-[1] object-contain select-none pointer-events-none"
        style={{
          left: scqw(card.imgLeft),
          top: scqw(card.imgTop),
          width: scqw(card.imgW),
          height: scqw(card.imgH),
        }}
      />

      {/* 증상 목록 텍스트 */}
      <p
        data-selectable-text
        className="absolute z-[2] font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
        style={{
          left: scqw(138),
          top: scqw(card.descTop),
          fontSize: scqw(20),
          lineHeight: scqw(25),
          letterSpacing: scqw(-1),
        }}
      >
        {card.desc}
      </p>

      {/* 하단 네이비 제품명 바 */}
      <div
        className="absolute inset-x-0 bottom-0 z-[3] flex items-center justify-center bg-[#083560]"
        style={{ height: scqw(36) }}
      >
        <span
          data-selectable-text
          className="font-bold text-white select-text cursor-text"
          style={{
            fontSize: scqw(22),
            lineHeight: scqw(36),
            letterSpacing: scqw(-1.1),
          }}
        >
          {card.name}
        </span>
      </div>
    </div>
  );

  return (
    <div
      className="hidden lg:block relative w-full aspect-[1200/523] bg-[#F8F8F8] overflow-hidden font-['Pretendard']"
      style={{ containerType: 'inline-size' }}
    >
      {/* 좌측 패널 (#9CB1C9, 353px) */}
      <div className="absolute left-0 top-0 h-full bg-[#9CB1C9]" style={{ width: scqw(353) }}>
        {BANNER02_LEFT_CARDS.map(renderCard)}
      </div>

      {/* 중앙 영역 (494px) */}
      <div
        className="absolute top-0 h-full text-center"
        style={{ left: scqw(353), width: scqw(494) }}
      >
        {/* '솔루션' 하단 하늘색(#79AEEB) 강조 바 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bg-[#79AEEB]"
          style={{
            left: scqw(127),
            top: scqw(213),
            width: scqw(235),
            height: scqw(14),
          }}
        />

        <h2
          data-selectable-text
          className="absolute inset-x-0 z-10 font-['Paperlogy'] font-extrabold select-text cursor-text"
          style={{
            top: scqw(45),
            fontSize: scqw(90),
            lineHeight: scqw(90),
            letterSpacing: scqw(-4.5),
          }}
        >
          <span className="text-[#161616]">일상생활</span>
          <br />
          <span className="text-[#083560]">솔루션</span>
        </h2>

        <p
          data-selectable-text
          className="absolute inset-x-0 font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
          style={{
            top: scqw(260),
            fontSize: scqw(20),
            lineHeight: scqw(30),
            letterSpacing: scqw(-1),
          }}
        >
          {'흔해서 방치되기 쉬운 불편증상은\n질병의 신호이므로 적극적으로 치료해야 합니다.'}
        </p>

        {/* 맞춤관리 포인트 필 배지 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-[#083560]"
          style={{
            top: scqw(342),
            width: scqw(192),
            height: scqw(37),
          }}
        >
          <span
            data-selectable-text
            className="font-semibold text-white select-text cursor-text whitespace-nowrap"
            style={{
              fontSize: scqw(25),
              lineHeight: scqw(30),
              letterSpacing: scqw(-1.25),
            }}
          >
            맞춤관리 포인트
          </span>
        </div>

        <p
          data-selectable-text
          className="absolute inset-x-0 font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
          style={{
            top: scqw(391),
            fontSize: scqw(20),
            lineHeight: scqw(30),
            letterSpacing: scqw(-1),
          }}
        >
          {'소화ㆍ탈모ㆍ생리ㆍ순환 등\n일상 속 불편증상을 체계적으로 관리하여\n건강한 일상을 지켜드립니다.'}
        </p>
      </div>

      {/* 우측 패널 (#9CB1C9, 353px) */}
      <div className="absolute right-0 top-0 h-full bg-[#9CB1C9]" style={{ width: scqw(353) }}>
        {BANNER02_RIGHT_CARDS.map(renderCard)}
      </div>
    </div>
  );
}

/**
 * 배너 03 PC — 보약 다이어트 (Figma 774:105, 1200x523)
 */
export function SignatureSlide3Pc() {
  const renderCard = (card: (typeof BANNER03_LEFT_CARDS)[number] | (typeof BANNER03_RIGHT_CARDS)[number]) => (
    <div
      key={card.name}
      className="absolute bg-white"
      style={{
        left: scqw(32),
        top: scqw(card.cardTop),
        width: scqw(286),
        height: scqw(219),
        borderRadius: scqw(10),
        boxShadow: `${scqw(4)} ${scqw(4)} ${scqw(10)} rgba(0, 0, 0, 0.25)`,
      }}
    >
      <p
        data-selectable-text
        className="absolute font-semibold text-[#083560] select-text cursor-text whitespace-nowrap"
        style={{
          left: scqw(20),
          top: scqw(17),
          fontSize: scqw(22),
          lineHeight: scqw(30),
          letterSpacing: scqw(-1.1),
        }}
      >
        {card.name}
      </p>

      <p
        data-selectable-text
        className="absolute font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
        style={{
          left: scqw(20),
          top: scqw(53),
          fontSize: scqw(20),
          lineHeight: scqw(25),
          letterSpacing: scqw(-1),
        }}
      >
        {card.desc}
      </p>

      {/* 병 바닥 소프트 그림자 */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          left: scqw(169),
          top: scqw(191),
          width: scqw(87),
          height: scqw(9),
          background: 'rgba(0, 0, 0, 0.45)',
          filter: `blur(${scqw(5)})`,
        }}
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.img}
        alt={card.name}
        draggable={false}
        className="absolute object-contain select-none pointer-events-none"
        style={{
          left: scqw(card.imgLeft),
          top: scqw(card.imgTop),
          width: scqw(card.imgW),
          height: scqw(card.imgH),
        }}
      />
    </div>
  );

  return (
    <div
      className="hidden lg:block relative w-full aspect-[1200/523] bg-[#F8F8F8] overflow-hidden font-['Pretendard']"
      style={{ containerType: 'inline-size' }}
    >
      {/* 좌측 패널 (#9CB1C9, 353px) */}
      <div className="absolute left-0 top-0 h-full bg-[#9CB1C9]" style={{ width: scqw(353) }}>
        {BANNER03_LEFT_CARDS.map(renderCard)}
      </div>

      {/* 중앙 영역 (494px) */}
      <div
        className="absolute top-0 h-full text-center"
        style={{ left: scqw(353), width: scqw(494) }}
      >
        <p
          data-selectable-text
          className="absolute inset-x-0 font-['Paperlogy'] font-normal text-[#161616] select-text cursor-text whitespace-nowrap"
          style={{
            top: scqw(29),
            fontSize: scqw(25),
            lineHeight: scqw(40),
            letterSpacing: scqw(-1.25),
          }}
        >
          예민한 분·마른비만·중년을 위한
        </p>

        <h2
          data-selectable-text
          className="absolute inset-x-0 font-['Paperlogy'] font-extrabold select-text cursor-text"
          style={{
            top: scqw(63),
            fontSize: scqw(100),
            lineHeight: scqw(100),
            letterSpacing: scqw(-5),
          }}
        >
          <span className="text-[#083560]">보약</span>
          <br />
          <span className="text-[#161616]">다이어트</span>
        </h2>

        <p
          data-selectable-text
          className="absolute inset-x-0 font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
          style={{
            top: scqw(282),
            fontSize: scqw(20),
            lineHeight: scqw(30),
            letterSpacing: scqw(-1),
          }}
        >
          {'무리하게 살 빼기보다 건강을 고려하며 기력저하,\n불면증, 갱년기증상, 순환장애 등을 같이\n개선하는 나에게 맞춤 다이어트를 진행합니다.'}
        </p>

        {/* 맞춤관리 포인트 필 배지 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-[#083560]"
          style={{
            top: scqw(385),
            width: scqw(192),
            height: scqw(37),
          }}
        >
          <span
            data-selectable-text
            className="font-semibold text-white select-text cursor-text whitespace-nowrap"
            style={{
              fontSize: scqw(25),
              lineHeight: scqw(30),
              letterSpacing: scqw(-1.25),
            }}
          >
            맞춤관리 포인트
          </span>
        </div>

        {/* 빨간 크레용 별 (기존 프로젝트 에셋 재사용) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={RED_STAR_SRC}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute object-contain select-none pointer-events-none"
          style={{
            left: scqw(64),
            top: scqw(418),
            width: scqw(26),
            height: scqw(24),
          }}
        />

        {/* 빨간 밑줄 2줄 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bg-[#DF2F2F]"
          style={{ top: scqw(458), width: scqw(315), height: scqw(2) }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bg-[#DF2F2F]"
          style={{ top: scqw(489), width: scqw(225), height: scqw(2) }}
        />

        <p
          data-selectable-text
          className="absolute inset-x-0 font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
          style={{
            top: scqw(430),
            fontSize: scqw(20),
            lineHeight: scqw(30),
            letterSpacing: scqw(-1),
          }}
        >
          {'현기증, 소화불량, 부종, 기력저하, 두근거림,\n불면증, 홧병, 변비, 순환장애 등'}
        </p>
      </div>

      {/* 우측 패널 (#9CB1C9, 353px) */}
      <div className="absolute right-0 top-0 h-full bg-[#9CB1C9]" style={{ width: scqw(353) }}>
        {BANNER03_RIGHT_CARDS.map(renderCard)}
      </div>
    </div>
  );
}

/**
 * 배너 04 PC — 뱃살·붓기 프로그램 (Figma 774:161, 1200x523)
 */
export function SignatureSlide4Pc() {
  return (
    <div
      className="hidden lg:block relative w-full aspect-[1200/523] bg-[#F8F8F8] overflow-hidden font-['Pretendard']"
      style={{ containerType: 'inline-size' }}
    >
      {/* 좌측 딥네이비 패널 (#083560, 323px) */}
      <div className="absolute left-0 top-0 h-full bg-[#083560]" style={{ width: scqw(323) }}>
        {/* 바닥 소프트 그림자 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full"
          style={{
            left: scqw(103),
            top: scqw(326),
            width: scqw(122),
            height: scqw(20),
            background: 'rgba(0, 0, 0, 0.65)',
            filter: `blur(${scqw(7)})`,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET_BASE}/prod-belly-edema.png`}
          alt="뱃살·부종 캡슐"
          draggable={false}
          className="absolute object-contain select-none pointer-events-none"
          style={{
            left: scqw(53),
            top: scqw(55),
            width: scqw(229),
            height: scqw(287),
          }}
        />
        <div
          className="absolute flex items-center justify-center rounded-full bg-[#9CB1C9]"
          style={{
            left: scqw(53),
            top: scqw(380),
            width: scqw(217),
            height: scqw(38),
          }}
        >
          <span
            data-selectable-text
            className="font-bold text-[#083560] select-text cursor-text whitespace-nowrap"
            style={{
              fontSize: scqw(25),
              lineHeight: scqw(38),
              letterSpacing: scqw(-1.25),
            }}
          >
            뱃살·부종 캡슐
          </span>
        </div>
        <p
          data-selectable-text
          className="absolute inset-x-0 text-center font-normal text-white whitespace-pre-line select-text cursor-text"
          style={{
            top: scqw(429),
            fontSize: scqw(22),
            lineHeight: scqw(27),
            letterSpacing: scqw(-1.1),
          }}
        >
          {'복부와 붓기를 함께\n관리하고 싶을 때'}
        </p>
      </div>

      {/* 중앙 영역 (554px) */}
      <div
        className="absolute top-0 h-full text-center"
        style={{ left: scqw(323), width: scqw(554) }}
      >
        <h2
          data-selectable-text
          className="absolute inset-x-0 font-['Paperlogy'] font-extrabold select-text cursor-text"
          style={{
            top: scqw(44),
            fontSize: scqw(90),
            lineHeight: scqw(90),
            letterSpacing: scqw(-4.5),
          }}
        >
          <span className="text-[#083560]">뱃살·붓기</span>
          <br />
          <span className="text-[#161616]">프로그램</span>
        </h2>

        {/* 1줄 형광펜(#FFF2B1) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bg-[#FFF2B1]"
          style={{
            top: scqw(269),
            width: scqw(417),
            height: scqw(12),
          }}
        />
        <p
          data-selectable-text
          className="absolute inset-x-0 z-10 font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
          style={{
            top: scqw(253),
            fontSize: scqw(20),
            lineHeight: scqw(30),
            letterSpacing: scqw(-1),
          }}
        >
          {'붓기가 빠지고 내장지방이 줄어야 건강한 다이어트입니다.\n배가 더부룩하고 자주 붓는다면\n해독 프로그램을 병행하시면 더욱 좋습니다.'}
        </p>

        {/* 키워드 필 칩 3개 */}
        <div
          className="absolute inset-x-0 flex items-center justify-center"
          style={{ top: scqw(353), gap: scqw(14) }}
        >
          {BANNER04_CHIPS.map((chip) => (
            <span
              key={chip}
              data-selectable-text
              className="inline-flex items-center justify-center rounded-full bg-[#083560] font-semibold text-white select-text cursor-text whitespace-nowrap"
              style={{
                width: scqw(104),
                height: scqw(30),
                fontSize: scqw(20),
                lineHeight: scqw(30),
                letterSpacing: scqw(-1),
              }}
            >
              {chip}
            </span>
          ))}
        </div>

        {/* 강조 문구 형광펜(#FFF2B1) + 노란 별 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bg-[#FFF2B1]"
          style={{
            top: scqw(429),
            width: scqw(417),
            height: scqw(23),
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET_BASE}/icon-yellow-star.png`}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute object-contain select-none pointer-events-none"
          style={{
            left: scqw(486),
            top: scqw(392),
            width: scqw(35),
            height: scqw(33),
          }}
        />
        <p
          data-selectable-text
          className="absolute inset-x-0 z-10 font-normal text-[#161616] select-text cursor-text whitespace-nowrap"
          style={{
            top: scqw(407),
            fontSize: scqw(35),
            lineHeight: scqw(45),
            letterSpacing: scqw(-1.75),
          }}
        >
          붓기와 뱃살은 <strong className="font-bold text-[#083560]">만성염증의 신호!</strong>
        </p>

        <p
          data-selectable-text
          className="absolute inset-x-0 font-normal text-[#161616] select-text cursor-text whitespace-nowrap"
          style={{
            top: scqw(457),
            fontSize: scqw(20),
            lineHeight: scqw(30),
            letterSpacing: scqw(-1),
          }}
        >
          내 몸 상태에 맞춰 원장님과 상담 후 처방합니다.
        </p>
      </div>

      {/* 우측 딥네이비 패널 (#083560, 323px) */}
      <div className="absolute right-0 top-0 h-full bg-[#083560]" style={{ width: scqw(323) }}>
        {/* 붓기제로 바닥 그림자 + 병 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full"
          style={{
            left: scqw(50),
            top: scqw(274),
            width: scqw(122),
            height: scqw(20),
            background: 'rgba(0, 0, 0, 0.65)',
            filter: `blur(${scqw(7)})`,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET_BASE}/prod-butgizero.png`}
          alt="붓기제로"
          draggable={false}
          className="absolute object-contain select-none pointer-events-none"
          style={{
            left: scqw(24),
            top: scqw(45),
            width: scqw(172),
            height: scqw(258),
          }}
        />

        {/* 배사라정 바닥 그림자 + 병 (전면 겹침 배치) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full"
          style={{
            left: scqw(144),
            top: scqw(322),
            width: scqw(122),
            height: scqw(20),
            background: 'rgba(0, 0, 0, 0.65)',
            filter: `blur(${scqw(7)})`,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET_BASE}/prod-baesara.png`}
          alt="배사라정"
          draggable={false}
          className="absolute object-contain select-none pointer-events-none"
          style={{
            left: scqw(110),
            top: scqw(91),
            width: scqw(191),
            height: scqw(265),
          }}
        />

        <div
          className="absolute flex items-center justify-center rounded-full bg-[#9CB1C9]"
          style={{
            left: scqw(53),
            top: scqw(380),
            width: scqw(217),
            height: scqw(38),
          }}
        >
          <span
            data-selectable-text
            className="font-bold text-[#083560] select-text cursor-text whitespace-nowrap"
            style={{
              fontSize: scqw(25),
              lineHeight: scqw(38),
              letterSpacing: scqw(-1.25),
            }}
          >
            붓기제로 / 배사라정
          </span>
        </div>
        <p
          data-selectable-text
          className="absolute inset-x-0 text-center font-normal text-white whitespace-pre-line select-text cursor-text"
          style={{
            top: scqw(429),
            fontSize: scqw(22),
            lineHeight: scqw(27),
            letterSpacing: scqw(-1.1),
          }}
        >
          {'순환·붓기와 배변 상태까지\n고려한 맞춤 한방 관리'}
        </p>
      </div>
    </div>
  );
}

/**
 * 배너 05 PC — 비만주사제 후 유지 (Figma 774:238, 1200x523)
 */
export function SignatureSlide5Pc() {
  return (
    <div
      className="hidden lg:block relative w-full aspect-[1200/523] bg-[#F8F8F8] overflow-hidden font-['Pretendard']"
      style={{ containerType: 'inline-size' }}
    >
      {/* 좌측 콘텐츠 영역 (755px) */}
      <div className="absolute left-0 top-0 h-full" style={{ width: scqw(755) }}>
        <p
          data-selectable-text
          className="absolute font-['Paperlogy'] font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
          style={{
            left: scqw(71),
            top: scqw(71),
            fontSize: scqw(40),
            lineHeight: scqw(45),
            letterSpacing: scqw(-2),
          }}
        >
          {'주사제를 계속 맞기는 부담스럽고,\n다시 왕성해지는 식욕은 잡고 싶다면?'}
        </p>

        <h2
          data-selectable-text
          className="absolute font-['Paperlogy'] font-normal text-[#161616] select-text cursor-text"
          style={{
            left: scqw(71),
            top: scqw(161),
            fontSize: scqw(88),
            lineHeight: scqw(88),
            letterSpacing: scqw(-4.4),
          }}
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
          className="absolute font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
          style={{
            left: scqw(71),
            top: scqw(361),
            fontSize: scqw(20),
            lineHeight: scqw(30),
            letterSpacing: scqw(-1),
          }}
        >
          {'감량 후 식욕과 체중을 관리하는 유지 계획도 중요합니다.\n주사 후 유지, 혼자 고민하지 말고 상담하세요.'}
        </p>

        <div
          className="absolute flex items-center bg-[#D7E3F0]"
          style={{
            left: scqw(71),
            top: scqw(431),
            width: scqw(415),
            height: scqw(33),
            paddingLeft: scqw(6),
          }}
        >
          <p
            data-selectable-text
            className="font-normal text-[#161616] select-text cursor-text whitespace-nowrap"
            style={{
              fontSize: scqw(20),
              lineHeight: scqw(30),
              letterSpacing: scqw(-1),
            }}
          >
            1일 1~2회 복용 권장, 수개월 ~ 수년 등 장기간 복용가능
          </p>
        </div>
      </div>

      {/* 우측 제품 패널 (#9CB1C9, 445px) */}
      <div className="absolute right-0 top-0 h-full bg-[#9CB1C9]" style={{ width: scqw(445) }}>
        {BANNER05_PRODUCTS.map((prod) => (
          <div
            key={prod.name}
            className="absolute bg-white"
            style={{
              left: scqw(53),
              top: scqw(prod.cardTop),
              width: scqw(339),
              height: scqw(137),
              borderRadius: scqw(10),
              boxShadow: `${scqw(4)} ${scqw(4)} ${scqw(10)} rgba(0, 0, 0, 0.25)`,
            }}
          >
            <p
              data-selectable-text
              className="absolute font-medium text-[#083560] select-text cursor-text whitespace-nowrap"
              style={{
                left: scqw(23),
                top: scqw(19),
                fontSize: scqw(20),
                lineHeight: scqw(30),
                letterSpacing: scqw(-1),
              }}
            >
              {prod.name}
            </p>
            <p
              data-selectable-text
              className="absolute font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
              style={{
                left: scqw(23),
                top: scqw(49),
                fontSize: scqw(16),
                lineHeight: scqw(22),
                letterSpacing: scqw(-0.8),
              }}
            >
              {prod.desc}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={prod.img}
              alt={prod.name}
              draggable={false}
              className="absolute object-contain select-none pointer-events-none"
              style={{
                left: scqw(prod.imgLeft),
                top: scqw(prod.imgTop),
                width: scqw(prod.imgW),
                height: scqw(prod.imgH),
                filter: `drop-shadow(${scqw(3)} ${scqw(3)} ${scqw(3)} rgba(0, 0, 0, 0.2))`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 배너 06 PC — 해독 프로그램 (Figma 774:269, 1200x523)
 */
export function SignatureSlide6Pc() {
  return (
    <div
      className="hidden lg:block relative w-full aspect-[1200/523] bg-[#F8F8F8] overflow-hidden font-['Pretendard']"
      style={{ containerType: 'inline-size' }}
    >
      {/* 좌측 콘텐츠 영역 (755px) */}
      <div className="absolute left-0 top-0 h-full" style={{ width: scqw(755) }}>
        <h2
          data-selectable-text
          className="absolute font-['Paperlogy'] font-extrabold select-text cursor-text whitespace-nowrap"
          style={{
            left: scqw(71),
            top: scqw(49),
            fontSize: scqw(80),
            lineHeight: scqw(80),
            letterSpacing: scqw(-4),
          }}
        >
          <span className="text-[#083560]">해독 </span>
          <span className="text-[#161616]">프로그램</span>
        </h2>

        {/* 도입부 2번째 줄 하단 하늘색(#79AEEB) 밑줄 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bg-[#79AEEB]"
          style={{
            left: scqw(71),
            top: scqw(188),
            width: scqw(433),
            height: scqw(2),
          }}
        />

        <p
          data-selectable-text
          className="absolute z-10 font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
          style={{
            left: scqw(71),
            top: scqw(140),
            fontSize: scqw(18),
            lineHeight: scqw(25),
            letterSpacing: scqw(-0.9),
          }}
        >
          {'萬病一毒(만병일독), 모든 병은 독 때문입니다.\n다이어트 및 현대 치료의 시작은 독소 배출 및 해독 능력의 복구에서 시작됩니다.\n특히 뱃살과 붓기가 고민이라면 해독요법이 도움이 됩니다.'}
        </p>

        {/* 간 해독 · 장 해독 · 림프해독 3행 */}
        {BANNER06_DETOX_STEPS.map((step) => (
          <div key={step.badge}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={step.icon}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute object-contain select-none pointer-events-none"
              style={{
                left: scqw(54),
                top: scqw(step.rowTop),
                width: scqw(95),
                height: scqw(72),
              }}
            />

            <div
              className="absolute flex items-center justify-center rounded-full bg-[#083560]"
              style={{
                left: scqw(162),
                top: scqw(step.badgeTop),
                width: scqw(82),
                height: scqw(30),
              }}
            >
              <span
                data-selectable-text
                className="font-semibold text-white select-text cursor-text whitespace-nowrap"
                style={{
                  fontSize: scqw(18),
                  lineHeight: scqw(30),
                  letterSpacing: scqw(-0.9),
                }}
              >
                {step.badge}
              </span>
            </div>

            <p
              data-selectable-text
              className="absolute font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
              style={{
                left: scqw(271),
                top: scqw(step.descTop),
                fontSize: scqw(20),
                lineHeight: scqw(25),
                letterSpacing: scqw(-1),
              }}
            >
              {step.desc}
            </p>

            {/* 노랑 형광펜(#FFF2B1) + 키워드 */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bg-[#FFF2B1]"
              style={{
                left: scqw(271),
                top: scqw(step.tagTop + 6),
                width: scqw(step.hlWidth),
                height: scqw(12),
              }}
            />
            <p
              data-selectable-text
              className="absolute z-10 font-medium text-[#161616] select-text cursor-text whitespace-nowrap"
              style={{
                left: scqw(271),
                top: scqw(step.tagTop),
                fontSize: scqw(15),
                lineHeight: scqw(15),
                letterSpacing: scqw(-0.75),
              }}
            >
              {step.tags}
            </p>
          </div>
        ))}
      </div>

      {/* 우측 제품 패널 (#083560, 445px) */}
      <div className="absolute right-0 top-0 h-full bg-[#083560]" style={{ width: scqw(445) }}>
        {BANNER06_PRODUCTS.map((prod) => (
          <div
            key={prod.name}
            className="absolute bg-white"
            style={{
              left: scqw(53),
              top: scqw(prod.cardTop),
              width: scqw(339),
              height: scqw(137),
              borderRadius: scqw(10),
              boxShadow: `${scqw(4)} ${scqw(4)} ${scqw(10)} rgba(0, 0, 0, 0.25)`,
            }}
          >
            <p
              data-selectable-text
              className="absolute font-medium text-[#083560] select-text cursor-text whitespace-nowrap"
              style={{
                left: scqw(23),
                top: scqw(19),
                fontSize: scqw(20),
                lineHeight: scqw(30),
                letterSpacing: scqw(-1),
              }}
            >
              {prod.name}
            </p>
            <p
              data-selectable-text
              className="absolute font-normal text-[#161616] whitespace-pre-line select-text cursor-text"
              style={{
                left: scqw(23),
                top: scqw(49),
                fontSize: scqw(16),
                lineHeight: scqw(22),
                letterSpacing: scqw(-0.8),
              }}
            >
              {prod.desc}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={prod.img}
              alt={prod.name}
              draggable={false}
              className="absolute object-contain select-none pointer-events-none"
              style={{
                left: scqw(prod.imgLeft),
                top: scqw(prod.imgTop),
                width: scqw(prod.imgW),
                height: scqw(prod.imgH),
                filter: `drop-shadow(${scqw(3)} ${scqw(3)} ${scqw(3)} rgba(0, 0, 0, 0.2))`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
