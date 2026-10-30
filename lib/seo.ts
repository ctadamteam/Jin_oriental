import type { Metadata } from 'next';
import { EVENT_ITEMS } from '@/lib/constants/events';

export const SITE_URL = 'https://jinclinic.co.kr';
const DEFAULT_IMAGE = '/images/seo/jinclinic-og.png';

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const STATIC_PAGES: readonly PageMetadataInput[] = [
  {
    "path": "/about/diet-system",
    "title": "진 다이어트 시스템 | 진한의원",
    "description": "진한의원의 개인별 맞춤 다이어트 진료 시스템을 소개합니다. 비우기·태우기·채우기 3단계 프로그램, 진료 과정과 자주 묻는 질문을 확인하세요."
  },
  {
    "path": "/diet-medicine/allinone",
    "title": "진 올인원 캡슐 | 진한의원",
    "description": "진한의원 올인원 다이어트 캡슐을 소개합니다. 기본형·파워형의 구성, 개인별 상담과 처방 및 복용 안내를 확인하세요."
  },
  {
    "path": "/diet-medicine/rebound-prevention",
    "title": "요요방지한약·유지환 | 진한의원",
    "description": "감량 이후 체중 유지를 위한 진한의원 요요방지한약과 유지환 안내입니다. 유지 관리의 단계, 개인별 처방 및 생활습관 관리 내용을 확인하세요."
  },
  {
    path: '/',
    title: '진한의원 | 부산 해운대 한의원',
    description: '부산 해운대 진한의원입니다. 개인별 맞춤 다이어트와 한약, 여성·산후 관리, 피부 및 면역·보약 진료와 함께 의료진의 진료 철학, 진료시간과 오시는 길을 안내합니다.',
  },
  {
    path: '/about/story',
    title: '진한의원 소개 | 진한의원',
    description: '사람을 먼저 생각하는 진한의원의 진료 철학을 소개합니다. 환자의 체질과 생활환경을 살피는 진료, 약재 관리, 연구하는 의료진의 약속을 확인하세요.',
  },
  {
    path: '/diet-medicine/slim',
    title: '슬림환·습담탕 | 진한의원',
    description: '진한의원 다이어트 한약 슬림환과 습담탕을 소개합니다. 제형별 특징, 개인별 처방과 복용에 관한 안내를 확인하세요.',
  },
  {
    path: '/diet-medicine/zero',
    title: '붓기제로·배사라정 | 진한의원',
    description: '붓기제로와 배사라정의 특징을 소개합니다. 붓기와 순환, 과식·회식 후 체중 관리에서 살펴볼 사항과 진한의원 한약 프로그램을 안내합니다.',
  },
  {
    path: '/diet-medicine/tok',
    title: '슬림톡·삭뺀다정·블랙정 | 진한의원',
    description: '진한의원의 슬림톡, 삭뺀다정, 블랙정(빼빼정)을 소개합니다. 농축 한약의 제형과 구성, 다이어트 한약 선택 시 살펴볼 특징을 안내합니다.',
  },
  {
    path: '/diet-medicine/injection-discomfort',
    title: '지방분해시술 | 진한의원',
    description: '진한의원 지방분해시술 프로그램을 소개합니다. 전기지방분해침, 체형매선, 약침, 샤인모드, 심부온열 및 심부장기EMS의 구성과 관리 방법을 안내합니다.',
  },
  {
    path: '/custom-diet/detox',
    title: '해독 다이어트 | 진한의원',
    description: '진한의원 해독 다이어트의 상담과 관리 과정을 소개합니다. 해독, 집중감량, 요요 방지와 유지의 단계별 프로그램 및 생활습관 관리 내용을 확인하세요.',
  },
  {
    path: '/custom-diet/visceral',
    title: '내장지방형 비만 | 진한의원',
    description: '내장지방형 비만과 복부비만의 특징을 알아보세요. 진한의원에서 안내하는 원인과 동반 건강 문제, 개인별 진단 및 한방 관리 과정을 소개합니다.',
  },
  {
    path: '/custom-diet/edema',
    title: '부종형 비만 | 진한의원',
    description: '부종과 비만의 차이, 수분 정체와 순환에 관한 정보를 안내합니다. 진한의원 부종형 비만 관리에서 확인하는 증상과 체질별 한방 프로그램을 살펴보세요.',
  },
  {
    path: '/custom-diet/chronic-inflammation',
    title: '만성염증형 비만 | 진한의원',
    description: '만성염증과 체중 관리에서 살펴볼 증상 및 생활 요인을 소개합니다. 진한의원의 자가 점검 항목과 개인별 한방 관리 프로그램을 확인하세요.',
  },
  {
    path: '/custom-diet/pediatric',
    title: '소아·청소년 비만 | 진한의원',
    description: '성장과 생활습관을 함께 살피는 소아·청소년 체중 관리 안내입니다. 비만의 원인, 점검 항목, 성장기 상담과 진한의원의 맞춤 한방 프로그램을 소개합니다.',
  },
  {
    path: '/custom-diet/autonomic',
    title: '자율신경실조형 비만 | 진한의원',
    description: '스트레스와 수면, 소화, 대사 균형을 함께 살피는 진한의원 자율신경실조형 비만 관리 안내입니다. 관련 증상과 상담 및 한방 프로그램을 확인하세요.',
  },
  {
    path: '/custom-diet/qi-blood',
    title: '기혈부족형 비만 | 진한의원',
    description: '기혈부족형 비만의 주요 증상과 체중 관리 시 살펴볼 사항을 안내합니다. 진한의원의 원인 설명, 대표 한약재 및 개인별 한방 프로그램을 확인하세요.',
  },
  {
    path: '/custom-diet/hormone',
    title: '호르몬 불균형 비만 | 진한의원',
    description: '호르몬 변화와 체중 관리의 관계를 소개합니다. 진한의원에서 살펴보는 여성호르몬, 스트레스, 자율신경 및 기혈 상태와 맞춤 한방 프로그램을 안내합니다.',
  },
  {
    path: '/custom-diet/middle-age',
    title: '중년 비만 | 진한의원',
    description: '중년의 신체 변화와 생활습관을 함께 살피는 체중 관리 안내입니다. 진한의원의 중년 비만 상담, 한약과 시술 프로그램 및 관리 과정을 소개합니다.',
  },
  {
    path: '/custom-diet/severe',
    title: '고도비만 | 진한의원',
    description: '고도비만의 원인과 동반 건강 문제, 생활습관 관리의 중요성을 안내합니다. 진한의원의 단계적 감량과 유지, 체질별 상담 및 한방 프로그램을 확인하세요.',
  },
  {
    path: '/custom-diet/postpartum',
    title: '산후 비만 | 진한의원',
    description: '출산 후 회복과 체중 관리를 함께 살펴보세요. 진한의원의 산후 비만 원인 안내, 생활 관리 및 개인 상태에 따른 한약과 관리 프로그램을 소개합니다.',
  },
  {
    path: '/custom-diet/constitution',
    title: '체질별 다이어트 | 진한의원',
    description: '체질별 특성과 생활습관을 고려한 진한의원 다이어트 안내입니다. 각 체질의 관리 방향과 개인별 상담, 다이어트 한약 및 프로그램 구성을 확인하세요.',
  },
  {
    path: '/women-postpartum/care',
    title: '산후조리 | 진한의원',
    description: '출산 후 몸의 변화와 회복을 위한 산후조리 정보를 안내합니다. 진한의원의 산후 증상 상담, 시기별 관리와 한방 프로그램을 확인하세요.',
  },
  {
    path: '/women-postpartum/miscarriage',
    title: '유산 후 조리 | 진한의원',
    description: '유산 후 신체 회복과 건강 관리를 위한 진한의원 안내입니다. 회복기에 살펴볼 증상, 개인별 상담과 한방 조리 프로그램을 소개합니다.',
  },
  {
    path: '/women-postpartum/menopause',
    title: '갱년기 증후군 | 진한의원',
    description: '갱년기 신체 변화와 주요 증상, 생활 관리 정보를 확인하세요. 진한의원에서 안내하는 개인별 상담과 갱년기 한방 관리 프로그램을 소개합니다.',
  },
  {
    path: '/skin-clinic/lifting',
    title: '매선·실리프팅 | 진한의원',
    description: '진한의원 피부 클리닉의 매선·실리프팅 프로그램을 소개합니다. 눈가, 팔자, 얼굴 윤곽 등 부위별 시술 구성과 피부 관리 안내를 확인하세요.',
  },
  {
    path: '/immunity-tonic/thyroid',
    title: '갑상선기능저하증 | 진한의원',
    description: '갑상선기능저하증의 원인과 증상, 검사 및 관리 정보를 소개합니다. 진한의원에서 안내하는 단계별 상담, 한방 프로그램과 관련 연구 자료를 확인하세요.',
  },
  {
    path: '/reservation',
    title: '다이어트 한약 비대면 접수 안내 | 진한의원',
    description: '진한의원 다이어트 한약 비대면 접수에 필요한 정보를 확인하세요. 접수 입력 항목과 함께 진료시간, 위치 및 연락처를 안내합니다.',
  },
  {
    path: '/events',
    title: '진료 프로그램 이벤트 | 진한의원',
    description: '진한의원의 다이어트, 피부, 두피 및 면역·보약 프로그램 이벤트를 모았습니다. 각 이벤트의 구성과 상세 안내를 확인하세요.',
  },
];

const EVENT_DETAILS: Record<string, Pick<PageMetadataInput, 'title' | 'description'>> = {
  'autumn-diet': {
    title: '가을 맞춤 다이어트 이벤트 | 진한의원',
    description: '진한의원 가을 맞춤 다이어트 이벤트입니다. 슬림 삼총사, 개인별 한약, 샤인모드와 침치료 패키지의 구성 및 안내를 확인하세요.',
  },
  'autumn-skin': {
    title: '10·11월 가을 피부 이벤트 | 진한의원',
    description: '진한의원 10·11월 가을 피부 이벤트를 안내합니다. 엑소좀, 리라필, 미주안과 붓기 한약 프로그램의 구성 및 상담 정보를 확인하세요.',
  },
  'jin-slim-hwan': {
    title: '진슬림환·수독환 증정 이벤트 | 진한의원',
    description: '진한의원 진슬림환 이벤트의 프로그램 구성과 수독환 증정 안내입니다. 복용 기간별 혜택 및 상세 적용 내용을 확인하세요.',
  },
  'mochaewum-scalp': {
    title: '모채움 두피 관리 이벤트 | 진한의원',
    description: '진한의원 모채움 두피 관리 프로그램을 소개합니다. 약물 스케일링, 엑소좀 MTS, 물리치료, 두피침과 약침의 4단계 구성을 확인하세요.',
  },
  'deer-antler-tonic': {
    title: '녹용·면역 탕약 이벤트 | 진한의원',
    description: '진한의원 녹용 및 면역 탕약 이벤트 안내입니다. 녹용 분골 탕약과 면역 관리 탕약의 프로그램 구성, 기간별 혜택을 확인하세요.',
  },
  'ppaeppae-black': {
    title: '빼빼정 블랙 출시 이벤트 | 진한의원',
    description: '진한의원 빼빼정 블랙 출시 이벤트를 안내합니다. 농축 한약 프로그램의 구성과 기간별 이벤트 내용을 확인하세요.',
  },
  'jin-allinone-capsule': {
    title: '진 올인원 캡슐 이벤트 | 진한의원',
    description: '진한의원 진 올인원 캡슐 이벤트 안내입니다. 슬림톡 캡슐, 면역119, 붓기제로와 배사라정으로 구성된 프로그램을 확인하세요.',
  },
};

// Only completed public pages belong in this registry. Placeholder and legacy
// duplicate routes are omitted. Dates stay absent until content changes can be verified.
export const PUBLISHED_PAGES: readonly PageMetadataInput[] = [
  ...STATIC_PAGES,
  ...EVENT_ITEMS.map((event) => ({
    path: `/events/${event.slug}`,
    title: EVENT_DETAILS[event.slug]?.title ?? `${event.title} | 진한의원`,
    description: EVENT_DETAILS[event.slug]?.description ?? event.summary,
  })),
];

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
}: PageMetadataInput): Metadata {
  const url = new URL(path, SITE_URL).href;
  const imageUrl = new URL(image, SITE_URL).href;

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      siteName: '진한의원',
      title,
      description,
      url,
      images: [{
        url: imageUrl,
        alt: title,
        ...(image === DEFAULT_IMAGE ? { width: 1200, height: 630 } : {}),
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
  };
}

export function getPageMetadata(path: string): Metadata {
  const page = PUBLISHED_PAGES.find((entry) => entry.path === path);
  if (!page) {
    throw new Error(`No published page metadata registered for: ${path}`);
  }
  return createPageMetadata(page);
}
