import React from 'react';

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-[1440px] px-4 py-3 flex items-center text-sm text-gray-500 gap-2">
        <span>Home</span>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span>/</span>
            <span className={i === items.length - 1 ? "text-gray-900 font-medium" : ""}>
              {item.label}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
