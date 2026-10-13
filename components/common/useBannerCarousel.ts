'use client';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export function useBannerCarousel() {
  const [viewportRef, api] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 1024px)');
    const update = () => setPlaying(desktop.matches && !motion.matches);
    update();
    motion.addEventListener('change', update);
    desktop.addEventListener('change', update);
    return () => { motion.removeEventListener('change', update); desktop.removeEventListener('change', update); };
  }, []);
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
  useEffect(() => {
    if (!api || !playing) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible' && document.body.style.overflow !== 'hidden') api.scrollNext();
    }, 6000);
    return () => window.clearInterval(timer);
  }, [api, playing]);
  return { viewportRef, index, playing, setPlaying,
    previous: () => { setPlaying(false); api?.scrollPrev(); },
    next: () => { setPlaying(false); api?.scrollNext(); },
  };
}
