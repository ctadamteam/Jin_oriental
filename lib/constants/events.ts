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
}

export const EVENTS_PER_PAGE = 9;

export const EVENT_ITEMS: EventItem[] = [
  {
    id: 11,
    slug: 'power-tolerance-slim-hwan',
    title: "내성 다이어트 초고농축환 '파워내성슬림환' 이벤트",
    summary: '체지방 감소 · 장건강 개선 · 식욕억제 · 대사활동 촉진 · 1·3·6개월 단계별 혜택',
    category: 'EVENT · 다이어트',
    image: '/images/events/event11.jpg',
    width: 1086,
    height: 1448,
    bgColor: '#C56B6C',
  },
  {
    id: 10,
    slug: 'belly-fat-edema-capsule',
    title: "출시 기념 이벤트 — '뱃살 부종캡슐'",
    summary: '뱃살 지방량 감소 · 부종 개선 천연 한약재 캡슐 · 1통 15만원 / 2+1통 30만원 특가',
    category: 'EVENT · 다이어트',
    image: '/images/events/event10.jpg',
    width: 1080,
    height: 1350,
    bgColor: '#FDF0F5',
  },
  {
    id: 9,
    slug: 'seasonal-immunity-kit',
    title: '진한의원 환절기 면역키트 10+1 이벤트',
    summary: '청폐경옥고 · 쌍화탕 · 은교산 츄어블 · 온후차 4종 구성 환절기 집중 면역 케어',
    category: 'EVENT · 면역/보약',
    image: '/images/events/event09.jpg',
    width: 1086,
    height: 1448,
    bgColor: '#FBF3E6',
  },
  {
    id: 8,
    slug: 'fat-allkill-capsule',
    title: "출시 기념 이벤트 — 농축 '지방올킬 캡슐'",
    summary: '식욕 억제 · 체지방 연소 · 부종 개선 · 내장지방 감소 맞춤형 A/B안 특가',
    category: 'EVENT · 다이어트',
    image: '/images/events/event08.png',
    width: 922,
    height: 1382,
    bgColor: '#DFB6FE',
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
  },
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
