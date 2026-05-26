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
    <div className={`mb-12 ${alignMap[align]} ${className}`}>
      {subtitle && (
        <span className="block mb-3 text-sm font-bold text-[var(--color-primary)] tracking-widest uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}
