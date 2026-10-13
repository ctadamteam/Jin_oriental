import React from 'react';

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionTitle({ title, subtitle, align = 'center', className = '' }: SectionTitleProps) {
  const alignMap = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-8 md:mb-12 ${alignMap[align]} ${className}`}>
      {subtitle && (
        <span className="block mb-3 text-sm font-bold text-primary-medium tracking-widest uppercase md:text-[13pt]">
          {subtitle}
        </span>
      )}
      <h2 className="break-keep text-[28px] md:text-4xl font-bold text-gray-900 leading-[1.35] md:leading-tight [overflow-wrap:anywhere]">
        {title}
      </h2>
    </div>
  );
}
