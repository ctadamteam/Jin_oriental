'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Expand, X } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

type InbodyCase = {
  id: number;
  profile: string;
  period: string;
  maintenance?: string;
  weightBefore: string;
  weightAfter: string;
  totalLoss: string;
  fatBefore: string;
  fatAfter: string;
  fatLoss: string;
  fatLabel: string;
  visceralBefore: string;
  visceralAfter: string;
  visceralLoss: string;
  visceralLabel: string;
  visceralDescription?: string;
  concernLabel: string;
  concerns: string[];
  concernPopoverMode: 'compact' | 'wide';
  imageUrl: string;
};

type ConcernPopoverPosition = {
  top: number;
  left: number;
  placement: 'top' | 'bottom';
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
    fatBefore: '62.4',
    fatAfter: '32.5',
    fatLoss: '29.9',
    fatLabel: '체지방',
    visceralBefore: '20',
    visceralAfter: '14',
    visceralLoss: '6',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concernLabel: '내원 당시',
    concerns: ['소아비만', '초고도비만', '무월경', '다낭성난소증후군', '우울감'],
    concernPopoverMode: 'compact',
    imageUrl: '/images/home/inbody/display/case-01-before-after.png',
  },
  {
    id: 2,
    profile: '남성 · 41세 · 176.5cm',
    period: '4개월 감량',
    maintenance: '2개월 유지 중',
    weightBefore: '104',
    weightAfter: '83',
    totalLoss: '21',
    fatBefore: '34',
    fatAfter: '15.9',
    fatLoss: '18.1',
    fatLabel: '체지방',
    visceralBefore: '15',
    visceralAfter: '7',
    visceralLoss: '8',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concernLabel: '내원 당시',
    concerns: ['고혈압', '고지혈증', '통풍', '3교대 근무', '과민성대장증후군'],
    concernPopoverMode: 'compact',
    imageUrl: '/images/home/inbody/display/case-02-before-after.png',
  },
  {
    id: 3,
    profile: '여성 · 48세 · 165.1cm',
    period: '3개월 감량',
    weightBefore: '73.6',
    weightAfter: '52.1',
    totalLoss: '21.5',
    fatBefore: '23.7',
    fatAfter: '9.1',
    fatLoss: '14.6',
    fatLabel: '체지방',
    visceralBefore: '10',
    visceralAfter: '3',
    visceralLoss: '7',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concernLabel: '내원 당시',
    concerns: ['갱년기증상(상열감, 두근거림, 안면홍조)', '갑상선기능저하증', '목디스크', '허리디스크 질환', '얼굴/손/발 부종이 심하다', '만성방광염', '자궁근종', '소화불량'],
    concernPopoverMode: 'wide',
    imageUrl: '/images/home/inbody/display/case-03-before-after.png',
  },
  {
    id: 4,
    profile: '여성 · 53세 · 158.2cm',
    period: '6개월 감량',
    maintenance: '6개월 유지 중',
    weightBefore: '92.2',
    weightAfter: '63.7',
    totalLoss: '28.5',
    fatBefore: '47',
    fatAfter: '20.9',
    fatLoss: '26.1',
    fatLabel: '체지방',
    visceralBefore: '20',
    visceralAfter: '10',
    visceralLoss: '10',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concernLabel: '내원 당시',
    concerns: ['양약/한약 다이어트 시도 경험 다수', '불면증', '대상포진', '변비', '갱년기증상(가슴 답답하고 얼굴, 상체로 땀나는 증상)', '발시림', '다리저림'],
    concernPopoverMode: 'wide',
    imageUrl: '/images/home/inbody/display/case-04-before-after.png',
  },
  {
    id: 5,
    profile: '여성 · 13세 · 173.8cm',
    period: '6개월 감량',
    maintenance: '5개월 유지 중',
    weightBefore: '102',
    weightAfter: '77',
    totalLoss: '25',
    fatBefore: '42.6',
    fatAfter: '24.7',
    fatLoss: '17.9',
    fatLabel: '체지방',
    visceralBefore: '18',
    visceralAfter: '11',
    visceralLoss: '7',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concernLabel: '내원 당시',
    concerns: ['소아비만', '고도비만', '생리통', '생리불순', '빈혈', '여드름', '과민성대장증후군'],
    concernPopoverMode: 'compact',
    imageUrl: '/images/home/inbody/display/case-05-before-after.png',
  },
  {
    id: 6,
    profile: '남성 · 36세 · 178.8cm',
    period: '3개월 감량',
    maintenance: '4개월 유지 중',
    weightBefore: '100.4',
    weightAfter: '79.7',
    totalLoss: '20.7',
    fatBefore: '34.5',
    fatAfter: '14.6',
    fatLoss: '19.9',
    fatLabel: '체지방',
    visceralBefore: '15',
    visceralAfter: '6',
    visceralLoss: '9',
    visceralLabel: '복부비만',
    visceralDescription: '내장지방레벨',
    concernLabel: '내원 당시',
    concerns: ['지방간', '고혈압', '역류성식도염', '만성피로', '변비', '두통'],
    concernPopoverMode: 'compact',
    imageUrl: '/images/home/inbody/display/case-06-before-after.png',
  },
];

function getCaseLabel(id: number) {
  return `CASE ${String(id).padStart(2, '0')}`;
}

function InbodyCaseCard({ item, onOpen }: { item: InbodyCase; onOpen: (item: InbodyCase) => void }) {
  const caseLabel = getCaseLabel(item.id);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isTooltipReady, setIsTooltipReady] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<ConcernPopoverPosition | null>(null);
  const extraConcernsButtonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const primaryConcerns = item.concerns.slice(0, 3);
  const extraConcerns = item.concerns.slice(3);
  const hasExtra = extraConcerns.length > 0;

  const updateTooltipPosition = () => {
    const button = extraConcernsButtonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const viewportPadding = 16;
    const maxWidth = Math.min(288, window.innerWidth - viewportPadding * 2);
    const width = item.concernPopoverMode === 'wide'
      ? maxWidth
      : Math.min(tooltipRef.current?.getBoundingClientRect().width ?? maxWidth, maxWidth);
    const left = Math.min(
      Math.max(rect.left + rect.width / 2 - width / 2, viewportPadding),
      window.innerWidth - width - viewportPadding,
    );
    const placement = rect.top < 160 ? 'bottom' : 'top';

    setTooltipPosition({
      top: placement === 'top' ? rect.top - 8 : rect.bottom + 8,
      left,
      placement,
    });
  };

  const openTooltip = () => {
    setIsTooltipReady(false);
    setShowTooltip(true);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
    setIsTooltipReady(false);
  };

  // 팝오버를 보이지 않는 상태로 먼저 마운트하고, 실제 폭을 측정한 뒤 한 번에 표시합니다.
  // useLayoutEffect는 브라우저가 화면을 그리기 전에 실행되어 첫 프레임의 위치 점프를 막습니다.
  useLayoutEffect(() => {
    if (!showTooltip) return;

    updateTooltipPosition();
    setIsTooltipReady(true);

    const handleOutsidePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && extraConcernsButtonRef.current?.contains(event.target)) return;
      closeTooltip();
    };

    document.addEventListener('pointerdown', handleOutsidePointerDown);
    window.addEventListener('resize', updateTooltipPosition);
    window.addEventListener('scroll', updateTooltipPosition, true);

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointerDown);
      window.removeEventListener('resize', updateTooltipPosition);
      window.removeEventListener('scroll', updateTooltipPosition, true);
    };
  }, [showTooltip]);

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(8,53,96,0.07)]">
      {/* 1. 상단 헤더 & 우측 대형 원 뱃지 영역 */}
      <div className="flex items-center justify-between gap-3 px-6 pt-6 sm:px-7 sm:pt-7">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-extrabold tracking-[0.12em] text-[#123960]">{caseLabel}</span>
            <span className="rounded-md bg-[#EAF0F7] px-2.5 py-1 text-xs font-bold text-[#083560]">
              {item.period}{item.maintenance && ` · ${item.maintenance}`}
            </span>
          </div>
          <p className="mt-1.5 text-sm font-semibold text-slate-700">{item.profile}</p>
          <div className="mt-3 flex items-center gap-2 text-base font-bold text-slate-700 sm:text-lg">
            <span>{item.weightBefore}kg</span>
            <ArrowRight size={17} aria-hidden="true" className="text-[#A4B7CC]" />
            <span className="text-lg font-black text-[#083560] sm:text-[21px]">{item.weightAfter}kg</span>
          </div>
        </div>

        {/* 우측 상단 대형 원 뱃지 (라인 제거 & 크기 확대: 96px) */}
        <div className="relative flex h-[96px] w-[96px] shrink-0 flex-col items-center justify-center rounded-full bg-[#083560] text-white shadow-[0_8px_20px_rgba(8,53,96,0.28)]">
          <div className="flex items-baseline justify-center">
            <span className="text-[24px] font-black leading-none tracking-tight">-{item.totalLoss}</span>
            <span className="ml-0.5 text-[15px] font-bold text-slate-200">kg</span>
          </div>
          <span className="mt-0.5 text-[13px] font-bold tracking-wider text-[#D7C28D]">감량</span>
        </div>
      </div>

      {/* 2. 체지방 & 내장지방 2분할 듀얼 카드 */}
      <div className="mx-6 mt-6 grid grid-cols-2 gap-3.5 sm:mx-7">
        {/* 체지방 */}
        <div className="rounded-xl bg-[#F4F7FB] p-4 sm:p-4.5">
          <span className="text-sm font-bold text-slate-700">{item.fatLabel}</span>
          <div className="mt-1.5 flex items-baseline gap-1">
            <span className="text-[26px] font-black leading-none tracking-tight text-[#083560] sm:text-[28px]">-{item.fatLoss}</span>
            <span className="text-sm font-bold text-[#083560]">kg</span>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 text-sm font-bold text-slate-700 sm:text-[15px]">
            <span>{item.fatBefore}kg</span>
            <span className="text-slate-400">→</span>
            <span className="text-[#083560]">{item.fatAfter}kg</span>
          </div>
        </div>

        {/* 복부비만 / 내장지방레벨 */}
        <div className="rounded-xl bg-[#F4F7FB] p-4 sm:p-4.5">
          <div className="flex items-baseline gap-1 whitespace-nowrap">
            <span className="text-sm font-bold text-slate-700">{item.visceralLabel}</span>
            {item.visceralDescription && (
              <span className="text-[11px] font-semibold text-slate-500">({item.visceralDescription})</span>
            )}
          </div>
          <div className="mt-1.5 flex items-baseline gap-1">
            <span className="text-[26px] font-black leading-none tracking-tight text-[#083560] sm:text-[28px]">-{item.visceralLoss}</span>
            <span className="text-xs font-bold text-[#083560]">LEVEL</span>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 text-sm font-bold text-slate-700 sm:text-[15px]">
            <span>{item.visceralBefore}</span>
            <span className="text-slate-400">→</span>
            <span className="text-[#083560]">{item.visceralAfter}</span>
          </div>
        </div>
      </div>

      {/* 3. 내원 당시 주요 고민: 그리드에서는 두 줄 높이를 확보해 이미지 시작선을 통일 */}
      <div className="px-6 pt-5 sm:px-7">
        <p className="text-[13px] font-extrabold tracking-wide text-slate-700">{item.concernLabel}</p>
        <div className="relative mt-1 flex flex-wrap items-center text-[15px] font-bold leading-normal text-[#123960] sm:min-h-[44px]">
          {primaryConcerns.map((concern, idx) => (
            <span key={concern} className="inline-flex items-center">
              {idx > 0 && <span className="mx-1.5 text-slate-300">·</span>}
              <span>{concern}</span>
            </span>
          ))}

          {/* 추가 고민 +N: 화면 영역 안에서 열리는 팝오버 */}
          {hasExtra && (
            <div className="ml-1 inline-flex items-center">
              <button
                ref={extraConcernsButtonRef}
                type="button"
                onClick={() => (showTooltip ? closeTooltip() : openTooltip())}
                onMouseEnter={openTooltip}
                onMouseLeave={closeTooltip}
                className="cursor-pointer rounded-full bg-[#EAF0F7] px-2 py-0.5 text-xs font-black text-[#083560] transition-colors hover:bg-[#083560] hover:text-white"
                aria-label={`추가 고민 ${extraConcerns.length}개 보기`}
                aria-expanded={showTooltip}
                aria-describedby={showTooltip ? `inbody-concerns-tooltip-${item.id}` : undefined}
              >
                +{extraConcerns.length}
              </button>
            </div>
          )}
        </div>
      </div>

      {showTooltip && typeof document !== 'undefined' && createPortal(
        <div
          ref={tooltipRef}
          id={`inbody-concerns-tooltip-${item.id}`}
          role="tooltip"
          className={`pointer-events-none fixed z-[120] rounded-lg bg-[#083560] px-3 py-2 text-xs font-bold leading-5 text-white shadow-xl transition-opacity duration-100 ${isTooltipReady && tooltipPosition ? 'visible opacity-100' : 'invisible opacity-0'} ${item.concernPopoverMode === 'compact' ? 'w-max max-w-[calc(100vw-2rem)] text-left' : 'w-72 max-w-[calc(100vw-2rem)] text-center'} ${tooltipPosition?.placement === 'top' ? '-translate-y-full' : ''}`}
          style={{ top: tooltipPosition?.top ?? -9999, left: tooltipPosition?.left ?? -9999 }}
        >
          <span>{extraConcerns.join(' · ')}</span>
          <div className={`absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#083560] ${tooltipPosition?.placement === 'top' ? '-bottom-1' : '-top-1'}`} />
        </div>,
        document.body,
      )}

      {/* 4. 하단 인바디 검사 결과지 (밀착 배치 & 블랙 그라데이션) */}
      <div className="mt-2.5 px-6 pb-6 pt-0 sm:mt-3 sm:px-7 sm:pb-7">
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="group relative block w-full overflow-hidden rounded-xl border border-[#D7E1EB] bg-[#F7F9FC] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#083560] focus-visible:ring-offset-2"
          aria-label={`${caseLabel} 인바디 검사 결과 확대 보기`}
        >
          <img
            src={item.imageUrl}
            alt={`${caseLabel} 감량 전후 인바디 검사 결과`}
            className="aspect-[75/22] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/75 via-black/35 to-transparent px-3 py-2 text-[10px] font-bold tracking-[0.12em] text-white">
            <span>BEFORE</span>
            <span>AFTER</span>
          </span>
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-xs font-semibold text-white opacity-0 transition-all duration-200 group-hover:bg-black/40 group-hover:opacity-100">
            <Expand size={15} aria-hidden="true" className="mr-1.5" /> 결과 크게 보기
          </span>
        </button>
      </div>
    </article>
  );
}

export function InbodyCasesSection() {
  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [selectedCase, setSelectedCase] = useState<InbodyCase | null>(null);

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
    <section id="inbody-cases" className="scroll-mt-28 bg-[#F7F9FC] py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="INBODY CASES" title="인바디로 보는 감량 사례" className="mb-4" />
        <p className="mx-auto max-w-xl text-center text-sm leading-6 text-slate-600 md:text-base">
          개인별 감량 기간과 체성분 변화를 확인해 보세요.
        </p>

        <div className="mx-auto mt-12 hidden max-w-[1320px] grid-cols-2 gap-x-6 gap-y-7 sm:grid lg:grid-cols-3">
          {INBODY_CASES.map((item) => (
            <InbodyCaseCard key={item.id} item={item} onOpen={setSelectedCase} />
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <div
            ref={mobileScrollerRef}
            onScroll={handleMobileScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {INBODY_CASES.map((item) => (
              <div key={item.id} className="min-w-[calc(100%-1.25rem)] snap-start">
                <InbodyCaseCard item={item} onOpen={setSelectedCase} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {INBODY_CASES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => moveToMobileCase(index)}
                className={`h-2 rounded-full transition-all ${mobileIndex === index ? 'w-5 bg-[#083560]' : 'w-2 bg-[#C7D3E0]'}`}
                aria-label={`${getCaseLabel(item.id)} 보기`}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-xs font-medium text-slate-500">{mobileIndex + 1} / {INBODY_CASES.length}</p>
        </div>

        <p className="mx-auto mt-7 max-w-[1320px] text-center text-xs leading-5 text-slate-500">
          본 사례는 개인별 상태와 관리 조건에 따라 결과가 다를 수 있습니다.
        </p>
      </div>

      {selectedCase && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-[3px] p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="inbody-modal-title"
          onClick={() => setSelectedCase(null)}
        >
          <div className="relative w-full max-w-5xl rounded-2xl bg-white p-5 shadow-2xl sm:p-7" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedCase(null)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#083560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#083560]"
              aria-label="인바디 결과 닫기"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <p className="text-sm font-bold tracking-[0.12em] text-[#123960]">{getCaseLabel(selectedCase.id)}</p>
            <h3 id="inbody-modal-title" className="mt-1 text-xl font-bold text-[#083560]">감량 전후 인바디 검사 결과</h3>
            <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="mr-1 font-bold text-slate-500">{selectedCase.concernLabel}:</span>
              {selectedCase.concerns.map((c) => (
                <span key={c} className="rounded bg-[#EAF0F7] px-2.5 py-1 font-semibold text-[#083560]">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm text-slate-500">Before / After</p>
            <img
              src={selectedCase.imageUrl}
              alt={`${getCaseLabel(selectedCase.id)} 감량 전후 인바디 검사 결과 확대 이미지`}
              className="mt-5 w-full rounded-xl border border-[#D7E1EB] bg-[#F7F9FC]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
