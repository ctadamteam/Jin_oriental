import React from 'react';

export function ContentSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 min-h-[50vh]">
      {children}
    </div>
  );
}
