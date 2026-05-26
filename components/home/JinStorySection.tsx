import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function JinStorySection() {
  const mockVideos = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: `진한의원 다이어트 스토리 ${i + 1}편`,
    thumbnailUrl: '/images/story/jin_story.png',
    videoUrl: '#',
  }));

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Jin Story"
          title={<>방송 출연 및<br/>건강 정보 콘텐츠</>} 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {mockVideos.map((video) => (
            <Link 
              key={video.id} 
              href={video.videoUrl}
              className="group block rounded-2xl overflow-hidden bg-gray-50 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-gray-200 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg">
                    ▶
                  </div>
                </div>
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
