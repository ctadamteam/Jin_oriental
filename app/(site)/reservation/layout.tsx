import type { ReactNode } from 'react';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('/reservation');

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
