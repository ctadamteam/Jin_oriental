import React from 'react';

export function SubPageHero({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="bg-gray-100 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {desc && <p className="mt-4 text-gray-600">{desc}</p>}
    </div>
  );
}
