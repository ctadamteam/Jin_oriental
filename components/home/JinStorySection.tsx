import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import Link from 'next/link';

export function JinStorySection() {
  const videos = [
    {
      id: 1,
      title: '한방 다이어트의 모든 것!',
      thumbnailUrl: 'https://i.ytimg.com/vi/jw-MfFAtVlY/hqdefault.jpg',
      videoUrl: 'https://youtu.be/jw-MfFAtVlY',
    },
    {
      id: 2,
      title: '한방 해독치료 대박 비법 공개!',
      thumbnailUrl: 'https://i.ytimg.com/vi/jIitb2gBDL8/hqdefault.jpg',
      videoUrl: 'https://youtu.be/jIitb2gBDL8',
    },
    {
      id: 3,
      title: '다이어트 적. 부종을 잡아라',
      thumbnailUrl: 'https://i.ytimg.com/vi/e0Hq1HGTyL4/hqdefault.jpg',
      videoUrl: 'https://youtu.be/e0Hq1HGTyL4',
    },
    {
      id: 4,
      title: '한방해독 다이어트',
      thumbnailUrl: 'https://i.ytimg.com/vi/esw_t4jduI8/hqdefault.jpg',
      videoUrl: 'https://youtu.be/esw_t4jduI8',
    },
    {
      id: 5,
      title: '중년의 비만. 뱃살은 해독이 필요하다',
      thumbnailUrl: 'https://i.ytimg.com/vi/LFM_nLK1tps/hqdefault.jpg',
      videoUrl: 'https://youtu.be/LFM_nLK1tps',
    },
    {
      id: 6,
      title: '생애주기별 다이어트',
      thumbnailUrl: 'https://i.ytimg.com/vi/hVHHpD-LN24/hqdefault.jpg',
      videoUrl: 'https://youtu.be/hVHHpD-LN24',
    },
  ];

  return (
    <section id="jin-story" className="scroll-mt-28 bg-[#EAF0F7] py-14 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="JIN STORY"
          title="영상으로 전하는 건강한 감량 이야기"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-8 md:mt-12 max-w-[1320px] mx-auto">
          {videos.map((video) => (
            <Link 
              key={video.id} 
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block min-w-0 rounded-2xl overflow-hidden bg-gray-50 hover:shadow-md transition-shadow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#083560]"
            >
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={video.thumbnailUrl}
                  alt=""
                  width={480}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="p-4">
                <p className="break-keep text-base font-medium leading-6 text-gray-900">{video.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <Link href="/about/story" className="jin-story-more-button inline-flex min-h-11 items-center justify-center rounded-md border-2 px-12 font-medium transition-colors">
            더보기
          </Link>
        </div>
      </div>
    </section>
  );
}
