import type { Metadata } from 'next';
import { getPreparingPageMetadata, PreparingPage } from '@/components/subpage/PreparingPage';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return getPreparingPageMetadata(`/skin-clinic/${slug}`);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <PreparingPage path={`/skin-clinic/${slug}`} />;
}
