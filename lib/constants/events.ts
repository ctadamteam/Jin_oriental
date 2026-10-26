export interface EventDetailSection {
  heading: string;
  items: { label: string; value: string }[];
}

export interface EventItem {
  id: number;
  slug: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  width: number;
  height: number;
  bgColor: string;
  detailSections: EventDetailSection[];
  detailNotes?: string[];
}

export const EVENTS_PER_PAGE = 9;

export const EVENT_ITEMS: EventItem[] = [
  {
    id: 1,
    slug: 'autumn-diet',
    title: '가을시즌 맞춤 다이어트 프로그램',
    summary: '슬림 삼총사 · 면역/뱃살/성인병 맞춤 패키지 · 샤인모드 · 침치료 패키지',
    category: 'EVENT · 다이어트',
    image: '/images/events/event01.png',
    width: 1086,
    height: 1448,
    bgColor: '#FDF0D5',
    detailSections: [
      {
        heading: '슬림 삼총사와 맞춤 패키지',
        items: [
          { label: '슬림 삼총사 1개월', value: '390,000원' },
          { label: '슬림 삼총사 3개월', value: '994,500원' },
          { label: '면역집중 다이어트', value: '삼총사 3개월 + 해독탕 1회 + 수독환 1회 + 한방맞춤선식 1통 + 공진단 시럽 2통 · 1,170,000원' },
          { label: '뱃살·부종 다이어트', value: '1,320,000원 · 세부 구성은 위 포스터에서 확인하실 수 있습니다.' },
          { label: '성인병 집중 면역 다이어트', value: '삼총사 3개월 + 해독탕 1회 + 수독환 1회 + 한방맞춤선식 1통 + 공진단 시럽 2통 + 청혈정 1통 + 꿀잠정 1통 + 배사라정 1통 · 1,383,000원' },
        ],
      },
      {
        heading: '샤인모드와 침치료 패키지',
        items: [
          { label: '페이스 FX + 포마', value: '1회 100,000원 / 5회 450,000원' },
          { label: '바디 샤인 FX', value: '1회 100,000원 / 5회 325,000원 / 10회 590,000원' },
          { label: '다이어트 침치료 패키지', value: '지방분해침 3회 + 버섯목(거북목) 약침 + 뱃살 약침 · 2회분 120,000원' },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'autumn-skin',
    title: '10·11월 가을 피부 이벤트 (진스킨 부스터 패키지)',
    summary: '엑소좀 · 리라필 · 미주안 2cc · 시술/성형 후 붓기한약 미인수',
    category: 'EVENT · 피부클리닉',
    image: '/images/events/event02.png',
    width: 1086,
    height: 1449,
    bgColor: '#FEF4DF',
    detailSections: [
      {
        heading: '진스킨 부스터 패키지',
        items: [
          { label: '이벤트 기간', value: '10·11월' },
          { label: '엑소좀', value: '1회 150,000원 / 3회 380,000원 / 5회 600,000원' },
          { label: '엑소좀 + 리라필', value: '1회 200,000원 / 3회 540,000원 / 5회 850,000원' },
          { label: '미주안 2cc', value: '1회 150,000원 / 3회 380,000원 / 5회 600,000원' },
          { label: '미주안 2cc + 리라필', value: '1회 200,000원 / 3회 540,000원 / 5회 850,000원' },
        ],
      },
      {
        heading: '미인수 구성',
        items: [
          { label: '매선 후 3일분', value: '9포 · 27,000원' },
          { label: '레이저 후 3일분', value: '9포 · 27,000원' },
          { label: '눈수술 후 7일분', value: '21포 · 63,000원' },
          { label: '코수술 후 10일분', value: '30포 · 90,000원' },
          { label: '안면윤곽 및 가슴 1개월', value: '90포 · 270,000원' },
        ],
      },
    ],
    detailNotes: ['부가세 별도입니다.', '기간에는 연도가 표시되어 있지 않습니다. 현재 적용 여부는 문의해 주세요.'],
  },
  {
    id: 3,
    slug: 'jin-slim-hwan',
    title: "진한의원 다이어트환 '진슬림환' 수독환 증정 이벤트",
    summary: '가을맞이 기념 수독환 2회 증정 · 1개월/3개월/4개월 단계별 혜택',
    category: 'EVENT · 다이어트',
    image: '/images/events/event03.png',
    width: 1086,
    height: 1448,
    bgColor: '#FBE8D5',
    detailSections: [
      {
        heading: '진슬림환 기간별 구성',
        items: [
          { label: '1개월분', value: '90포 · 210,000원' },
          { label: '3개월분', value: '270포 · 570,000원 (1개월분 190,000원)' },
          { label: '4개월분', value: '360포 · 680,000원 (1개월분 170,000원)' },
        ],
      },
      {
        heading: '증정 및 조제 안내',
        items: [
          { label: '가을맞이 증정', value: '수독환 2회 증정 · 다른 약으로 전환 불가' },
          { label: '조제 구성', value: '숙변환 포함 조제 가능' },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'mochaewum-scalp',
    title: '건강한 두피, 다시 풍성하게! 모채움 프로그램',
    summary: '약물 스케일링 · 줄기세포 엑소좀 MTS · 물리치료 · 두피침&약침 4단계 관리',
    category: 'EVENT · 두피·탈모',
    image: '/images/events/event04.jpg',
    width: 1145,
    height: 1374,
    bgColor: '#FDF5F6',
    detailSections: [
      {
        heading: '모채움 4단계 관리',
        items: [
          { label: '1단계', value: '약물 스케일링' },
          { label: '2단계', value: '줄기세포 엑소좀 MTS' },
          { label: '3단계', value: '물리치료 (ICT)' },
          { label: '4단계', value: '두피침 & 모채움 약침' },
        ],
      },
      {
        heading: '횟수별 금액',
        items: [
          { label: '1회', value: '120,000원' },
          { label: '4회', value: '400,000원 (1회당 100,000원)' },
          { label: '12회', value: '1,080,000원 (1회당 90,000원)' },
        ],
      },
    ],
    detailNotes: ['부가세 10% 별도입니다.'],
  },
  {
    id: 5,
    slug: 'deer-antler-tonic',
    title: '진한의원 녹용 & 면역 증강 탕약 이벤트',
    summary: '최상급 러시아산 녹용 분골 탕약 · 면역 증강 탕약 1·3개월 할인 혜택',
    category: 'EVENT · 면역/보약',
    image: '/images/events/event05.jpg',
    width: 794,
    height: 1123,
    bgColor: '#E3DBD1',
    detailSections: [
      {
        heading: '녹용 탕약',
        items: [
          { label: '녹용 구성', value: '러시아산 녹용 분골 사용' },
          { label: '1개월', value: '550,000원' },
          { label: '3개월', value: '1,500,000원 (1개월 500,000원)' },
        ],
      },
      {
        heading: '면역 증강 탕약',
        items: [
          { label: '1개월', value: '400,000원' },
          { label: '3개월', value: '1,080,000원 (1개월 360,000원)' },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'ppaeppae-black',
    title: "출시 기념 이벤트 — 빼빼정 블랙 (다이어트 프리미엄 4알)",
    summary: '농축 100% 순수 한약재 · 더 강한 식욕 조절 · 1개월/3개월/4개월 특가',
    category: 'EVENT · 다이어트',
    image: '/images/events/event06.png',
    width: 2480,
    height: 3508,
    bgColor: '#111111',
    detailSections: [
      {
        heading: '빼빼정 블랙 기간별 구성',
        items: [
          { label: '1개월', value: '90포 · 230,000원' },
          { label: '3개월', value: '270포 · 600,000원 (90포당 200,000원)' },
          { label: '4개월', value: '360포 · 720,000원 (90포당 180,000원)' },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'jin-allinone-capsule',
    title: "면역과 다이어트 한번에! '진 올인원 캡슐'",
    summary: '슬림톡 캡슐 + 면역119 + 붓기제로 + 배사라정 집중 처방 프로그램',
    category: 'EVENT · 다이어트',
    image: '/images/events/event07.jpg',
    width: 800,
    height: 1200,
    bgColor: '#F6B97F',
    detailSections: [
      {
        heading: '진 올인원 캡슐 구성',
        items: [
          { label: '구성 안내', value: '슬림톡 캡슐, 면역119, 붓기제로, 배사라정' },
        ],
      },
      {
        heading: '1일 2회 구성',
        items: [
          { label: '1개월', value: '60포 · 170,000원' },
          { label: '3개월', value: '180포 · 470,000원' },
          { label: '4개월', value: '240포 · 590,000원' },
        ],
      },
      {
        heading: '1일 3회 구성',
        items: [
          { label: '1개월', value: '90포 · 210,000원' },
          { label: '3개월', value: '270포 · 570,000원' },
          { label: '4개월', value: '360포 · 680,000원' },
        ],
      },
    ],
  },
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return EVENT_ITEMS.find((item) => item.slug === slug);
}

export function getAdjacentEvents(slug: string): {
  prev: EventItem | null;
  next: EventItem | null;
} {
  const index = EVENT_ITEMS.findIndex((item) => item.slug === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? EVENT_ITEMS[index - 1] : null,
    next: index < EVENT_ITEMS.length - 1 ? EVENT_ITEMS[index + 1] : null,
  };
}
