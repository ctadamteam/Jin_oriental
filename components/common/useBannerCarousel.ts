'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type WatchDragOption = NonNullable<Parameters<typeof useEmblaCarousel>[0]>['watchDrag'];

type BannerCarouselOptions = {
  autoplayOnMobile?: boolean;
  intervalMs?: number;
};

export function useBannerCarousel({
  autoplayOnMobile = false,
  intervalMs = 6000,
}: BannerCarouselOptions = {}) {
  const watchDrag = useCallback< Extract<WatchDragOption, (...args: never[]) => unknown> >((_emblaApi, evt) => {
    const target = evt.target as HTMLElement | null;
    if (!target) return true;

    // 이미 텍스트가 선택된 상태라면 선택 영역 조작을 방해하지 않음
    const selection = typeof window !== 'undefined' ? window.getSelection() : null;
    if (selection && selection.toString().trim().length > 0 && 'touches' in evt) {
      return false;
    }

    // 마우스 조작 시 텍스트 요소 위에서 드래그하면 슬라이드 이동 대신 텍스트 선택 허용
    const isMouse = !('touches' in evt);
    if (isMouse) {
      const selectable = target.closest(
        '[data-selectable-text], h1, h2, h3, h4, p, span, li, strong, b, em, a, button'
      );
      if (selectable) {
        return false;
      }
    }

    // 버튼·링크 클릭 시에는 드래그 비활성화
    if (target.closest('button, a')) {
      return false;
    }

    return true;
  }, []);

  const [viewportRef, api] = useEmblaCarousel({
    loop: true,
    watchDrag,
  });
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 1024px)');
    const update = () => setPlaying((autoplayOnMobile || desktop.matches) && !motion.matches);
    update();
    motion.addEventListener('change', update);
    desktop.addEventListener('change', update);
    return () => {
      motion.removeEventListener('change', update);
      desktop.removeEventListener('change', update);
    };
  }, [autoplayOnMobile]);

  useEffect(() => {
    if (!api) return;
    const select = () => setIndex(api.selectedScrollSnap());
    const stop = () => setPlaying(false);
    const viewport = api.rootNode();
    select();
    api.on('select', select).on('reInit', select).on('pointerDown', stop);
    viewport.addEventListener('focusin', stop);
    return () => {
      api.off('select', select).off('reInit', select).off('pointerDown', stop);
      viewport.removeEventListener('focusin', stop);
    };
  }, [api]);

  // Restart the configured interval after navigation and pause behind overlays.
  useEffect(() => {
    if (!api || !playing) return;
    const timer = window.setInterval(() => {
      const selection = window.getSelection();
      const hasSelectedText = Boolean(selection && selection.toString().trim().length > 0);
      if (
        document.visibilityState === 'visible' &&
        document.body.style.overflow !== 'hidden' &&
        !api.rootNode().closest('[inert]') &&
        !hasSelectedText
      ) {
        api.scrollNext();
      }
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [api, playing, index, intervalMs]);

  return {
    viewportRef,
    index,
    playing,
    setPlaying,
    previous: () => {
      setPlaying(false);
      api?.scrollPrev();
    },
    next: () => {
      setPlaying(false);
      api?.scrollNext();
    },
    scrollTo: (targetIndex: number) => {
      setPlaying(false);
      api?.scrollTo(targetIndex);
    },
  };
}
