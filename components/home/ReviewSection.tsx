import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import Link from 'next/link';
import { Slider } from '../ui/Slider';

const mockReviews = [
  { id: 1, title: '한 달 만에 5kg 감량 성공했어요!', imageUrl: '/images/review/review.png', naverReviewUrl: '#' },
  { id: 2, title: '원장님이 너무 친절하시고 약이 잘 맞아요.', imageUrl: '/images/review/review.png', naverReviewUrl: '#' },
  { id: 3, title: '요요 없이 잘 유지하고 있습니다.', imageUrl: '/images/review/review.png', naverReviewUrl: '#' },
  { id: 4, title: '붓기가 정말 많이 빠졌어요!', imageUrl: '/images/review/review.png', naverReviewUrl: '#' },
];

export function ReviewSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Real Reviews"
          title={<>진한의원과 함께한<br/>고객님들의 솔직한 후기</>} 
        />
        <Slider className="mt-12">
          {mockReviews.map((review) => (
            <Link 
              key={review.id} 
              href={review.naverReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-72 md:w-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${review.imageUrl})` }}
                />
              </div>
              <div className="p-6">
                <p className="text-gray-900 font-medium line-clamp-2">{review.title}</p>
                <div className="mt-4 flex items-center text-[var(--color-primary)] text-sm font-bold">
                  네이버 리뷰 보기 →
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
}
