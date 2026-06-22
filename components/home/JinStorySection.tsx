import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function JinStorySection() {
  const realVideos = [
    {
      title: '[KNN건강튜브] 체질에 맞춰 뺀다! 한방 다이어트의 모든 것!',
      thumbnailUrl: 'https://i.ytimg.com/vi/jw-MfFAtVlY/hqdefault.jpg',
      videoUrl: 'https://youtu.be/jw-MfFAtVlY',
    },
    {
      title: '[닥터스] 한방 해독치료 대박 비법 공개! (부산 진한의원 / 051-714-0040)',
      thumbnailUrl: 'https://i.ytimg.com/vi/jIitb2gBDL8/hqdefault.jpg',
      videoUrl: 'https://youtu.be/jIitb2gBDL8',
    }
  ];

  const mockVideos = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: realVideos[i % 2].title,
    thumbnailUrl: realVideos[i % 2].thumbnailUrl,
    videoUrl: realVideos[i % 2].videoUrl,
  }));

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="JIN STORY"
          title="영상으로 전하는 건강한 감량 이야기"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-[1320px] mx-auto">
          {mockVideos.map((video) => (
            <Link 
              key={video.id} 
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-gray-50 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-gray-200 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-gray-900 line-clamp-2">{video.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/about/story">
            <Button variant="outline" className="px-12">더보기</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
