'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JsonLd } from '@/components/seo/JsonLd';

const origin = 'https://jinclinic.co.kr';

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  const pathname = usePathname();
  const linkedItems = [
    { label: '홈', href: '/' },
    ...items.flatMap((item, index) => {
      const href = index === items.length - 1 ? pathname : item.href;
      return href ? [{ label: item.label, href }] : [];
    }),
  ];
  return (
    <nav aria-label="현재 위치" className="bg-white border-b border-gray-200">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: linkedItems.map((item, index) => ({
          '@type': 'ListItem', position: index + 1,
          name: item.label, item: new URL(item.href, origin).href,
        })),
      }} />
      <div className="mx-auto max-w-[1440px] px-4 py-3 flex items-center text-sm text-gray-500 gap-2">
        <Link href="/">Home</Link>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span aria-hidden="true">/</span>
            {item.href && i !== items.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current={i === items.length - 1 ? 'page' : undefined} className={i === items.length - 1 ? "text-gray-900 font-medium" : ""}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
