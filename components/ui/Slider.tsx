import React from 'react';

interface SliderProps {
  children: React.ReactNode;
  className?: string;
}

export function Slider({ children, className = '' }: SliderProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* TODO: 추후 Swiper 또는 Embla Carousel 로 교체 예정 */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
        {React.Children.map(children, (child) => (
          <div className="shrink-0 snap-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
