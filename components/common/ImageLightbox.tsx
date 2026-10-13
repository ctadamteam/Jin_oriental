'use client';

import { useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';
import { useAccessibleOverlay } from './useAccessibleOverlay';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  children: ReactNode;
}

export function ImageLightbox({ src, alt, className = '', children }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const dialogRef = useRef<HTMLDivElement>(null);
  useAccessibleOverlay(open, dialogRef, () => setOpen(false));

  return <>
    <button type="button" className={`cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${className}`} aria-label={`${alt} 크게 보기`} onClick={() => { setZoom(1); setOpen(true); }}>
      {children}
    </button>
    {open && createPortal(
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={`${alt} 확대 보기`} tabIndex={-1} className="fixed inset-0 z-[300] flex flex-col bg-slate-950/95 text-white" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/15 px-4 py-2">
          <p className="min-w-0 text-sm font-medium break-keep">{alt}</p>
          <button data-autofocus type="button" aria-label="이미지 닫기" className="flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-white/15 focus-visible:outline-2" onClick={() => setOpen(false)}><X size={24} /></button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-6">
          {/* Width-based zoom keeps the enlarged image scrollable from its top-left corner. */}
          <div className="flex min-h-full items-start justify-center" style={{ width: `${zoom * 100}%` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="block h-auto w-full" style={zoom === 1 ? { maxHeight: 'calc(100dvh - 160px)', objectFit: 'contain' } : undefined} />
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-center gap-2 border-t border-white/15 px-3 py-2 text-sm">
          <button type="button" className="flex min-h-11 items-center gap-1 rounded-lg px-3 hover:bg-white/15 disabled:opacity-35" aria-label="이미지 축소" disabled={zoom === 1} onClick={() => setZoom((value) => Math.max(1, value - 1))}><ZoomOut size={19} /></button>
          <span className="min-w-10 text-center tabular-nums" aria-live="polite">{zoom * 100}%</span>
          <button type="button" className="flex min-h-11 items-center gap-1 rounded-lg px-3 hover:bg-white/15 disabled:opacity-35" aria-label="이미지 확대" disabled={zoom === 4} onClick={() => setZoom((value) => Math.min(4, value + 1))}><ZoomIn size={19} /></button>
          <a href={src} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 rounded-lg px-3 hover:bg-white/15">원본 보기<ExternalLink size={16} /></a>
        </div>
      </div>, document.body
    )}
  </>;
}
