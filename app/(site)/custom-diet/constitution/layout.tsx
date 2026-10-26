import type { ReactNode } from 'react';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('/custom-diet/constitution');

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
