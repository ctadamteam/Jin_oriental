'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { SectionTitle } from '../common/SectionTitle';
import { ImageLightbox } from '../common/ImageLightbox';

type InbodyCase = {
  id: number;
  profile: string;
  period: string;
  maintenance?: string;
  weightBefore: string;
  weightAfter: string;
  totalLoss: string;
  fatLoss: string;
  fatLabel: string;
  visceralLoss: string;
  visceralLabel: string;
  visceralDescription?: string;
  concerns: string[];
  treatment: string;
  imageUrl: string;
  imagePositionY: number;
  markerBeforeX: number;
  markerAfterX: number;
  markerBeforeY?: number;
  markerAfterY?: number;
};

const INBODY_CASES: InbodyCase[] = [
  {
    id: 1,
    profile: '여성 · 19세 · 166.7cm',
    period: '6개월 감량',
    maintenance: '2개월 유지 중',
    weightBefore: '122.9',
    weightAfter: '90.1',
    totalLoss: '32.8',
    fatLoss: '29.9',
    fatLabel: '체지방',
    visceralLoss: '6',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concerns: ['소아비만', '초고도비만', '무월경', '다낭성난소증후군', '우울감'],
    treatment: '해독프로그램 + 슬림삼총사 + 자궁미인',
    imageUrl: '/images/home/inbody/display/case-01-before-after.png',
    imagePositionY: 70,
    markerBeforeX: 46.8,
    markerAfterX: 83.8,
  },
  {
    id: 2,
    profile: '남성 · 41세 · 176.5cm',
    period: '4개월 감량',
    maintenance: '2개월 유지 중',
    weightBefore: '104',
    weightAfter: '83',
    totalLoss: '21',
    fatLoss: '18.1',
    fatLabel: '체지방',
    visceralLoss: '8',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concerns: ['고혈압', '고지혈증', '통풍', '3교대 근무', '과민성대장증후군'],
    treatment: '해독프로그램 + 습담탕 + 청혈정',
    imageUrl: '/images/home/inbody/display/case-02-before-after.png',
    imagePositionY: 90,
    markerBeforeX: 37.3,
    markerAfterX: 79.7,
  },
  {
    id: 3,
    profile: '여성 · 48세 · 165.1cm',
    period: '3개월 감량',
    weightBefore: '73.6',
    weightAfter: '52.1',
    totalLoss: '21.5',
    fatLoss: '14.6',
    fatLabel: '체지방',
    visceralLoss: '7',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concerns: ['갱년기증상(상열감, 두근거림, 안면홍조)', '갑상선기능저하증', '목디스크', '허리디스크 질환', '얼굴/손/발 부종이 심하다', '만성방광염', '자궁근종', '소화불량'],
    treatment: '올인원 + 붓기제로 + 갱년기SOS',
    imageUrl: '/images/home/inbody/display/case-03-before-after.png',
    imagePositionY: 90,
    markerBeforeX: 31.9,
    markerAfterX: 71.3,
    markerBeforeY: 42.1,
    markerAfterY: 42.1,
  },
  {
    id: 4,
    profile: '여성 · 53세 · 158.2cm',
    period: '6개월 감량',
    maintenance: '6개월 유지 중',
    weightBefore: '92.2',
    weightAfter: '63.7',
    totalLoss: '28.5',
    fatLoss: '26.1',
    fatLabel: '체지방',
    visceralLoss: '10',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concerns: ['양약/한약 다이어트 시도 경험 다수', '불면증', '대상포진', '변비', '갱년기증상(가슴 답답하고 얼굴, 상체로 땀나는 증상)', '발시림', '다리저림'],
    treatment: '해독프로그램 + 지방올킬캡슐 + 꿀잠정',
    imageUrl: '/images/home/inbody/display/case-04-before-after.png',
    imagePositionY: 95,
    markerBeforeX: 41.5,
    markerAfterX: 78.2,
  },
  {
    id: 5,
    profile: '여성 · 13세 · 173.8cm',
    period: '6개월 감량',
    maintenance: '5개월 유지 중',
    weightBefore: '102',
    weightAfter: '77',
    totalLoss: '25',
    fatLoss: '17.9',
    fatLabel: '체지방',
    visceralLoss: '7',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concerns: ['소아비만', '고도비만', '생리통', '생리불순', '빈혈', '여드름', '과민성대장증후군'],
    treatment: '슬림환 + 자궁미인 + 보기활력정',
    imageUrl: '/images/home/inbody/display/case-05-before-after.png',
    imagePositionY: 100,
    markerBeforeX: 37.4,
    markerAfterX: 79.5,
    markerBeforeY: 42.1,
    markerAfterY: 42.1,
  },
  {
    id: 6,
    profile: '남성 · 36세 · 178.8cm',
    period: '3개월 감량',
    maintenance: '4개월 유지 중',
    weightBefore: '100.4',
    weightAfter: '79.7',
    totalLoss: '20.7',
    fatLoss: '19.9',
    fatLabel: '체지방',
    visceralLoss: '9',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concerns: ['지방간', '고혈압', '역류성식도염', '만성피로', '변비', '두통'],
    treatment: '해독프로그램 + 슬림삼총사 + 공진단 + 배사라정',
    imageUrl: '/images/home/inbody/display/case-06-before-after.png',
    imagePositionY: 100,
    markerBeforeX: 33.3,
    markerAfterX: 76.8,
  },
];

function getCaseLabel(id: number) {
  return `CASE ${String(id).padStart(2, '0')}`;
}

function WeightHighlight({
  beforeX,
  afterX,
  beforeY = 53,
  afterY = 53,
}: {
  beforeX: number;
  afterX: number;
  beforeY?: number;
  afterY?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <ellipse cx={beforeX} cy={beforeY} rx="6.7" ry="21" fill="none" stroke="#B42318" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
      <ellipse cx={afterX} cy={afterY} rx="6.7" ry="21" fill="none" stroke="#B42318" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function InbodyCaseCard({ item }: { item: InbodyCase }) {
  const caseLabel = getCaseLabel(item.id);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(8,53,96,0.07)]">
      <div className="flex items-start justify-between gap-3 px-4 pt-5 sm:px-6 sm:pt-6 xl:px-7 xl:pt-7">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-extrabold tracking-[0.12em] text-[#123960]">{caseLabel}</span>
            <span className="flex flex-wrap gap-x-1.5 gap-y-0.5 rounded-md bg-[#EAF0F7] px-2.5 py-1 text-xs font-bold leading-5 text-[#083560]">
              <span className="whitespace-nowrap">{item.period}</span>
              {item.maintenance && <span className="whitespace-nowrap">· {item.maintenance}</span>}
            </span>
          </div>
          <p className="mt-1.5 break-keep text-sm font-semibold leading-6 text-slate-700">{item.profile}</p>
        </div>

        <div className="relative z-10 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full bg-[#083560] text-white shadow-[0_8px_20px_rgba(8,53,96,0.28)] xl:h-[96px] xl:w-[96px]">
          <div className="flex items-baseline justify-center">
            <span className="text-[21px] font-black leading-none tracking-tight xl:text-[24px]">-{item.totalLoss}</span>
            <span className="ml-0.5 text-[13px] font-bold text-slate-200 xl:text-[15px]">kg</span>
          </div>
          <span className="mt-0.5 text-[13px] font-bold tracking-wider text-[#D7C28D]">감량</span>
        </div>
      </div>

      <figure className="relative mx-4 mt-5 overflow-hidden rounded-xl border border-[#D7E1EB] bg-[#F7F9FC] sm:mx-6 xl:mx-7">
        <div className="flex items-center justify-center gap-3 border-b border-[#D7E1EB] bg-white px-3 py-2.5 xl:gap-4">
          <div className="flex flex-col items-start gap-1 whitespace-nowrap sm:flex-row sm:items-baseline sm:gap-1.5">
            <span className="text-[10px] font-extrabold tracking-[0.1em] text-slate-500">BEFORE</span>
            <span className="text-[17px] font-black leading-none tracking-tight text-[#083560] sm:text-lg">{item.weightBefore}<span className="ml-0.5 text-xs font-bold">kg</span></span>
          </div>
          <span className="text-xl font-bold leading-none text-[#B42318]" aria-hidden="true">→</span>
          <div className="flex flex-col items-start gap-1 whitespace-nowrap sm:flex-row sm:items-baseline sm:gap-1.5">
            <span className="text-[10px] font-extrabold tracking-[0.1em] text-slate-500">AFTER</span>
            <span className="text-[17px] font-black leading-none tracking-tight text-[#083560] sm:text-lg">{item.weightAfter}<span className="ml-0.5 text-xs font-bold">kg</span></span>
          </div>
        </div>
        <ImageLightbox src={item.imageUrl} alt={`${caseLabel} 감량 전후 체중 변화 인바디 결과`} className="relative block aspect-[4/1] w-full">
          <Image
            src={item.imageUrl}
            alt={`${caseLabel} 감량 전후 체중 변화 인바디 결과`}
            fill
            sizes="(min-width: 1280px) 360px, (min-width: 768px) calc(50vw - 80px), calc(100vw - 64px)"
            className="object-cover"
            style={{ objectPosition: `center ${item.imagePositionY}%` }}
            loading="lazy"
            decoding="async"
          />
          <WeightHighlight
            beforeX={item.markerBeforeX}
            afterX={item.markerAfterX}
            beforeY={item.markerBeforeY}
            afterY={item.markerAfterY}
          />
        </ImageLightbox>
        <figcaption className="border-t border-[#D7E1EB] px-3 py-2 text-center text-xs font-semibold text-[#083560]">이미지를 누르면 인바디 결과를 확대할 수 있습니다.</figcaption>
      </figure>

      <div className="mx-4 mt-4 grid grid-cols-2 gap-3 sm:mx-6 xl:mx-7 xl:gap-3.5">
        <div className="min-w-0 rounded-xl bg-[#F4F7FB] px-3 py-3.5 xl:px-4">
          <div className="min-h-10 xl:min-h-5">
            <span className="text-sm font-bold text-slate-700">{item.fatLabel}</span>
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-[25px] font-black leading-none tracking-tight text-[#B42318]">-{item.fatLoss}</span>
            <span className="text-sm font-bold text-slate-700">kg</span>
          </div>
        </div>

        <div className="min-w-0 rounded-xl bg-[#F4F7FB] px-3 py-3.5 xl:px-4">
          <div className="flex min-h-10 flex-wrap content-start items-baseline gap-x-1 gap-y-0.5 xl:min-h-5">
            <span className="text-sm font-bold text-slate-700">{item.visceralLabel}</span>
            {item.visceralDescription && <span className="break-keep text-[11px] font-semibold text-slate-500">{item.visceralDescription}</span>}
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-[25px] font-black leading-none tracking-tight text-[#B42318]">-{item.visceralLoss}</span>
            <span className="text-xs font-bold text-slate-700">LEVEL</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-5 pt-5 sm:px-6 sm:pb-6 xl:px-7 xl:pb-7">
        <p className="text-sm font-semibold text-[#123960]">내원 당시 증상</p>
        <p className="mt-1.5 break-keep text-sm font-medium leading-6 text-slate-700 [overflow-wrap:anywhere]">
          <span className="bg-[linear-gradient(to_top,#FFF2B1_55%,transparent_55%)] px-1 py-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
            {item.concerns.join(' · ')}
          </span>
        </p>

        <div className="mt-auto pt-3">
          <div className="rounded-lg border border-[#D6EAF5] bg-[#EAF5FC] px-3 py-2 sm:px-3.5 sm:py-2">
            <p className="text-sm font-semibold text-[#123960]">치료방법</p>
            <p className="mt-[3px] break-keep text-sm font-medium leading-6 text-[#234B67] [overflow-wrap:anywhere]">
              {item.treatment}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function InbodyCasesSection() {
  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const moveToMobileCase = (index: number) => {
    const scroller = mobileScrollerRef.current;
    if (!scroller) return;

    const card = scroller.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  const handleMobileScroll = () => {
    const scroller = mobileScrollerRef.current;
    if (!scroller) return;

    const firstCard = scroller.children[0] as HTMLElement | undefined;
    if (!firstCard) return;

    const step = firstCard.offsetWidth + 16;
    setMobileIndex(Math.min(INBODY_CASES.length - 1, Math.max(0, Math.round(scroller.scrollLeft / step))));
  };

  return (
    <section id="inbody-cases" className="scroll-mt-28 bg-[#F7F9FC] py-14 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="INBODY CASES" title="인바디로 보는 감량 사례" className="mb-4" />
        <p className="mx-auto max-w-xl text-center text-sm leading-6 text-slate-600 md:text-base">
          개인별 감량 기간과 체성분 변화를 확인해 보세요.
        </p>

        <div className="mx-auto mt-12 hidden max-w-[1320px] auto-rows-fr grid-cols-2 gap-x-6 gap-y-7 md:grid xl:grid-cols-3">
          {INBODY_CASES.map((item) => <InbodyCaseCard key={item.id} item={item} />)}
        </div>

        <div className="mt-8 md:hidden">
          <div
            ref={mobileScrollerRef}
            onScroll={handleMobileScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {INBODY_CASES.map((item) => (
              <div key={item.id} className="flex w-full min-w-0 shrink-0 snap-start">
                <InbodyCaseCard item={item} />
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-center">
            {INBODY_CASES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => moveToMobileCase(index)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#083560]"
                aria-label={`${getCaseLabel(item.id)} 보기`}
                aria-current={mobileIndex === index ? 'true' : undefined}
              >
                <span className={`h-2 rounded-full transition-all ${mobileIndex === index ? 'w-5 bg-[#083560]' : 'w-2 bg-[#C7D3E0]'}`} aria-hidden="true" />
              </button>
            ))}
          </div>
          <p className="mt-1 text-center text-xs font-medium text-slate-500">{mobileIndex + 1} / {INBODY_CASES.length}</p>
        </div>

        <p className="mx-auto mt-7 max-w-[1320px] text-center text-xs leading-5 text-slate-500">
          본 사례는 개인별 상태와 관리 조건에 따라 결과가 다를 수 있습니다.
        </p>
      </div>
    </section>
  );
}
