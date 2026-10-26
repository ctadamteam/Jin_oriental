import { notFound } from 'next/navigation';

export default function NoticeDetailPage() {
  // No notice records are published yet; arbitrary IDs are not real articles.
  notFound();
}
