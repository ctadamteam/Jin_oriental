'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { ImageLightbox } from '../common/ImageLightbox';
import type { ReviewCardData } from './ReviewSection';

export function ReviewMobileCards({ cards }: { cards: Array<ReviewCardData & { id: string }> }) {
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: 'start' });
  const [index, setIndex] = useState(0);
  const regionRef = useRef<HTMLDivElement>(null);

  const moveManually = (direction: 'previous' | 'next') => {
    if (!api) return;
    if (direction === 'previous') api.scrollPrev();
    else api.scrollNext();
    // A shorter next card can leave its beginning above the viewport after a button click.
    requestAnimationFrame(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      regionRef.current?.scrollIntoView({ block: 'start', behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  };

  useEffect(() => {
    if (!api) return;
    const viewport = api.rootNode();
    const fitCurrentCard = () => {
      const slide = api.slideNodes()[api.selectedScrollSnap()];
      if (slide) viewport.style.height = `${Math.ceil(slide.getBoundingClientRect().height)}px`;
    };
    const syncSelection = () => {
      setIndex(api.selectedScrollSnap());
      fitCurrentCard();
    };
    const observer = new ResizeObserver(fitCurrentCard);
    api.slideNodes().forEach((slide) => observer.observe(slide));
    const frame = requestAnimationFrame(syncSelection);
    api.on('select', syncSelection).on('reInit', syncSelection);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      api.off('select', syncSelection).off('reInit', syncSelection);
      viewport.style.removeProperty('height');
    };
  }, [api]);

  return (
    <div ref={regionRef} className="mx-auto mt-8 max-w-[640px] scroll-mt-20 lg:hidden" role="region" aria-label="고객 후기" aria-roledescription="슬라이더">
      <div ref={viewportRef} className="overflow-hidden rounded-2xl motion-safe:transition-[height] motion-safe:duration-200">
        <div className="flex touch-pan-y items-start">
          {cards.map((card, cardIndex) => (
            <article key={card.id} role="group" aria-roledescription="슬라이드" aria-label={`후기 ${cardIndex + 1} / ${cards.length}`} aria-hidden={index !== cardIndex} inert={index !== cardIndex} className="min-w-0 flex-[0_0_100%] rounded-2xl border border-[#D7E1EB] bg-[#F8FAFC] p-5 sm:p-7">
              <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-[#D7E1EB] pb-4">
                <p className="text-sm font-bold tracking-wide text-[#083560]">후기 {String(cardIndex + 1).padStart(2, '0')}</p>
                <div className="text-right text-sm leading-6 text-slate-600">
                  {card.stats && <p>{card.stats}</p>}
                  {card.meta && <p>{card.meta}</p>}
                </div>
              </div>
              <blockquote className="whitespace-pre-line break-words text-base leading-7 text-slate-800">{card.content}</blockquote>
              {card.hasPhoto && card.photoUrl && (
                <figure className="mt-5">
                  <ImageLightbox src={card.photoUrl} alt={`후기 ${cardIndex + 1} 첨부 사진`} className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#D7E1EB] bg-white">
                    <Image src={card.photoUrl} alt={`후기 ${cardIndex + 1} 첨부 사진`} fill sizes="(max-width: 639px) calc(100vw - 74px), 584px" className="object-contain" draggable={false} />
                    <span className="absolute bottom-2 right-2 flex min-h-9 items-center gap-1 rounded-full bg-white/95 px-3 text-xs font-semibold text-[#083560] shadow-sm"><ZoomIn size={15} aria-hidden="true" />사진 크게 보기</span>
                  </ImageLightbox>
                </figure>
              )}
            </article>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button type="button" onClick={() => moveManually('previous')} aria-label="이전 후기" className="flex size-12 items-center justify-center rounded-full border border-[#D7E1EB] text-[#083560] focus-visible:outline-2 focus-visible:outline-offset-2"><ChevronLeft size={22} /></button>
        <p className="min-w-16 text-center text-sm tabular-nums text-slate-600" aria-live="polite" aria-atomic="true"><strong className="text-[#083560]">{index + 1}</strong><span className="mx-2">/</span>{cards.length}</p>
        <button type="button" onClick={() => moveManually('next')} aria-label="다음 후기" className="flex size-12 items-center justify-center rounded-full border border-[#D7E1EB] text-[#083560] focus-visible:outline-2 focus-visible:outline-offset-2"><ChevronRight size={22} /></button>
      </div>
      <p className="mt-3 text-center text-xs leading-5 text-slate-500">옆으로 밀어 다른 후기를 확인하세요.</p>
    </div>
  );
}
