'use client';

/**
 * 메인 2섹션(SIGNATURE MEDICINE) PC CQW 스케일링 헬퍼:
 * Figma 원본(1200x523px) 비율을 유지하면서 1024px ~ 1320px+ 모든 PC 화면에서
 * zoom / transform: scale() 없이 모든 좌표·폰트·카드·여백을 1:1 비례 스케일링합니다.
 */
export const scqw = (px: number) => `calc(${px} * 100cqw / 1200)`;

export const ASSET_BASE = '/images/home/signature-medicine';
export const CHECK_ICON_SRC = '/images/diet-medicine/injection-maintenance/icon-check-box.png';
export const RED_STAR_SRC = '/images/diet-medicine/injection-maintenance/sec04-red-star.png';

export const SIGNATURE_SLIDE_LABELS = [
  '1. 개인맞춤 다이어트 한약',
  '2. 일상생활 솔루션',
  '3. 보약 다이어트',
  '4. 뱃살·붓기 프로그램',
  '5. 비만주사제 후 유지',
  '6. 해독 프로그램',
] as const;

export const BANNER01_TARGETS = [
  { text: '근육량이 적은 분', cardHeight: 69, cardTop: 153 },
  { text: '마른 비만', cardHeight: 69, cardTop: 233 },
  { text: '간ㆍ췌장ㆍ갑상선이\n안좋은 분', cardHeight: 94, cardTop: 313 },
  { text: 'BMI가 27미만인 경우', cardHeight: 69, cardTop: 418 },
] as const;

export const BANNER01_PRODUCTS = [
  {
    name: '슬림환',
    img: `${ASSET_BASE}/prod-slimhwan.png`,
    cardTop: 22,
    imgLeft: 182,
    imgTop: 0,
    imgW: 87,
    imgH: 106,
  },
  {
    name: '올인원',
    img: `${ASSET_BASE}/prod-allinone.png`,
    cardTop: 143,
    imgLeft: 189,
    imgTop: 6,
    imgW: 75,
    imgH: 100,
  },
  {
    name: '블랙정',
    img: `${ASSET_BASE}/prod-blackjeong.png`,
    cardTop: 264,
    imgLeft: 177,
    imgTop: -8,
    imgW: 95,
    imgH: 127,
  },
  {
    name: '지방올킬캡슐',
    img: `${ASSET_BASE}/prod-allkill.png`,
    cardTop: 385,
    imgLeft: 154,
    imgTop: 10,
    imgW: 128,
    imgH: 92,
  },
] as const;

export const BANNER02_LEFT_CARDS = [
  {
    name: '속시원정',
    desc: '소화불량 · \n울렁거림 · \n숙취 해소 · \n배둘레 감소',
    descTop: 81,
    img: `${ASSET_BASE}/prod-soksiwon.png`,
    imgLeft: -9,
    imgTop: 5,
    imgW: 160,
    imgH: 213,
    icon: `${ASSET_BASE}/icon-life-soksiwon.png`,
    iconLeft: 210,
    iconTop: 5,
    iconW: 81,
    iconH: 106,
    cardTop: 29,
  },
  {
    name: '탈모 STOP',
    desc: '모발 가늘어짐 · \n탈모',
    descTop: 125,
    img: `${ASSET_BASE}/prod-talmo-stop.png`,
    imgLeft: -9,
    imgTop: 10,
    imgW: 162,
    imgH: 216,
    icon: `${ASSET_BASE}/icon-life-talmo.png`,
    iconLeft: 210,
    iconTop: 5,
    iconW: 81,
    iconH: 106,
    cardTop: 271,
  },
] as const;

export const BANNER02_RIGHT_CARDS = [
  {
    name: '자궁미인',
    desc: '생리불순 · \n생리통 · PMS',
    descTop: 126,
    img: `${ASSET_BASE}/prod-jagungmiin.png`,
    imgLeft: -5,
    imgTop: 11,
    imgW: 156,
    imgH: 208,
    icon: `${ASSET_BASE}/icon-life-jagung.png`,
    iconLeft: 196,
    iconTop: 5,
    iconW: 83,
    iconH: 106,
    cardTop: 29,
  },
  {
    name: '쾌통정',
    desc: '수족냉증(시림) · \n관절통증',
    descTop: 125,
    img: `${ASSET_BASE}/prod-kwaetong.png`,
    imgLeft: 1,
    imgTop: 12,
    imgW: 144,
    imgH: 199,
    icon: `${ASSET_BASE}/icon-life-kwaetong.png`,
    iconLeft: 210,
    iconTop: 5,
    iconW: 62,
    iconH: 106,
    cardTop: 271,
  },
] as const;

export const BANNER03_LEFT_CARDS = [
  {
    name: '심밸런스',
    desc: '예민함과 긴장으로\n컨디션이 흔들릴 때',
    img: `${ASSET_BASE}/prod-simbalance.png`,
    cardTop: 35,
    imgLeft: 152,
    imgTop: 17,
    imgW: 125,
    imgH: 188,
  },
  {
    name: '꿀잠정',
    desc: '잠들기 어렵고\n휴식이 필요할 때',
    img: `${ASSET_BASE}/prod-kkuljam.png`,
    cardTop: 269,
    imgLeft: 141,
    imgTop: 15,
    imgW: 143,
    imgH: 190,
  },
] as const;

export const BANNER03_RIGHT_CARDS = [
  {
    name: '보기활력정',
    desc: '기운이 없고\n쉽게 지칠 때',
    img: `${ASSET_BASE}/prod-bogihwallyeok.png`,
    cardTop: 36,
    imgLeft: 149,
    imgTop: 14,
    imgW: 128,
    imgH: 190,
  },
  {
    name: '갱년기 SOS',
    desc: '중년기 변화로\n불편함이 느껴질 때',
    img: `${ASSET_BASE}/prod-menopause-sos.png`,
    cardTop: 270,
    imgLeft: 142,
    imgTop: 18,
    imgW: 142,
    imgH: 188,
  },
] as const;

export const BANNER04_CHIPS = ['복부관리', '붓기제어', '순환관리'] as const;

export const BANNER05_PRODUCTS = [
  {
    name: '유지환',
    desc: '식욕 조절과 체중 유지\n과정에 활용',
    img: `${ASSET_BASE}/prod-yujihwan.png`,
    cardTop: 46,
    imgLeft: 225,
    imgTop: 8,
    imgW: 101,
    imgH: 126,
  },
  {
    name: '블랙정',
    desc: '식욕과 몸 상태를 살펴\n맞춤 처방',
    img: `${ASSET_BASE}/prod-blackjeong.png`,
    cardTop: 193,
    imgLeft: 225,
    imgTop: 0,
    imgW: 101,
    imgH: 135,
  },
  {
    name: '지방올킬캡슐',
    desc: '포만감과 장 컨디션을\n함께 고려',
    img: `${ASSET_BASE}/prod-allkill.png`,
    cardTop: 340,
    imgLeft: 211,
    imgTop: 23,
    imgW: 128,
    imgH: 92,
  },
] as const;

export const BANNER06_DETOX_STEPS = [
  {
    badge: '간 해독',
    desc: '담즙 분비와 순환을 원활히 하여 지쳐 있는 간의 해독 기능을\n회복·복구시킴',
    tags: '* 과음ㆍ만성염증ㆍ만성피로ㆍ고지혈증ㆍ지방간ㆍ간수치 관리',
    icon: `${ASSET_BASE}/icon-detox-liver.png`,
    rowTop: 227,
    badgeTop: 237,
    descTop: 238,
    tagTop: 291,
    hlWidth: 343,
  },
  {
    badge: '장 해독',
    desc: '몸속의 과잉된 노폐물을 제거하고 독소를 몸 밖으로 배출해\n건강한 장내 환경을 만들어 줌',
    tags: '* 변비ㆍ내장지방ㆍ복부팽만감ㆍ피부 트러블',
    icon: `${ASSET_BASE}/icon-detox-gut.png`,
    rowTop: 312,
    badgeTop: 320,
    descTop: 321,
    tagTop: 374,
    hlWidth: 246,
  },
  {
    badge: '림프해독',
    desc: '담음과 어혈을 제거함으로써 기혈순환을 촉진하여 부종, 통증,\n저림 증상 완화',
    tags: '* 얼굴ㆍ손발부종ㆍ다리 무거운 느낌',
    icon: `${ASSET_BASE}/icon-detox-lymph.png`,
    rowTop: 400,
    badgeTop: 403,
    descTop: 404,
    tagTop: 457,
    hlWidth: 200,
  },
] as const;

export const BANNER06_PRODUCTS = [
  {
    name: '해독탕',
    desc: '간해독 + 장해독',
    img: `${ASSET_BASE}/prod-haedoktang.png`,
    cardTop: 46,
    imgLeft: 187,
    imgTop: 24,
    imgW: 133,
    imgH: 89,
  },
  {
    name: '수독환',
    desc: '림프해독, 순환장애 및 부종',
    img: `${ASSET_BASE}/prod-sudokhwan.png`,
    cardTop: 193,
    imgLeft: 226,
    imgTop: 9,
    imgW: 102,
    imgH: 115,
  },
  {
    name: '한방발효효소 선식',
    desc: '부종 감소·면역 증가·관절 건강에\n도움되는 한약재 포함',
    img: `${ASSET_BASE}/prod-enzyme-seonsik.png`,
    cardTop: 340,
    imgLeft: 250,
    imgTop: 19,
    imgW: 70,
    imgH: 104,
  },
] as const;
