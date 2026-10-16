'use client';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
interface BannerControlsProps {
  label: string; index: number; count: number; playing: boolean;
  previous: () => void; next: () => void; onToggle: () => void;
}
export function BannerControls({ label, index, count, playing, previous, next, onToggle }: BannerControlsProps) {
  return <div className="flex items-center justify-center gap-3 py-2 text-slate-700">
    <button type="button" onClick={previous} aria-label={`${label} 이전`} className="flex size-11 items-center justify-center rounded-full hover:bg-slate-100 focus-visible:outline-2"><ChevronLeft size={20} /></button>
    <span className="min-w-14 text-center text-sm tabular-nums"><strong>{index + 1}</strong><span className="mx-2 text-slate-300">/</span>{count}</span>
    <button type="button" onClick={next} aria-label={`${label} 다음`} className="flex size-11 items-center justify-center rounded-full hover:bg-slate-100 focus-visible:outline-2"><ChevronRight size={20} /></button>
    <button type="button" onClick={onToggle} aria-label={`${label} 자동 넘김 ${playing ? '일시정지' : '재생'}`} className="flex size-11 items-center justify-center rounded-full hover:bg-slate-100 focus-visible:outline-2">{playing ? <Pause size={17} /> : <Play size={17} />}</button>
  </div>;
}
