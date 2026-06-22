import React from 'react';
import { SectionTitle } from '../common/SectionTitle';

export function InformationSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="INFORMATION"
          title="오시는길"
        />

        <div className="mt-12 bg-white rounded-xl shadow-xl flex flex-col lg:flex-row overflow-hidden min-h-[540px] max-w-[1320px] mx-auto w-full">
          {/* Left: Map */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-auto bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.2723707755866!2d129.1738734!3d35.1691238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35688d5e825ba831%3A0xcf82414dbb2c9a62!2z67aA7IKw6rSR7Jet7IucIO2VtOyatOuMgOq1rCDsoIwgMTQ3OS0y!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Right: Information */}
          <div className="w-full lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center items-center">
            
            <div className="flex flex-col gap-10 w-fit">
              {/* Address */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <h3 className="text-xl font-bold text-[var(--color-primary)] shrink-0 sm:w-20 mt-1 sm:mt-0 whitespace-nowrap">주소</h3>
                <p className="text-gray-700 text-[18px] leading-relaxed font-medium">
                  부산광역시 해운대구 좌동 1479-2 엘리움 빌딩 6층
                </p>
              </div>

              {/* Business Hours */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <h3 className="text-xl font-bold text-[var(--color-primary)] shrink-0 sm:w-20 mt-1 sm:mt-0 whitespace-nowrap">진료시간</h3>
                <div className="flex-1 w-full">
                  <ul className="text-[17px] text-gray-700 space-y-4 w-full">
                    <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="font-semibold text-gray-600 shrink-0 sm:w-24 whitespace-nowrap">월/화/수/금</span>
                      <span className="text-left font-medium">오전 9시 30분 ~ 오후 6시</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="font-semibold text-gray-600 shrink-0 sm:w-24 whitespace-nowrap">목요일</span>
                      <span className="text-left font-medium">오전 9시 30분 ~ 오후 2시 <span className="text-gray-500 font-normal">(점심없음)</span></span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="font-semibold text-gray-600 shrink-0 sm:w-24 whitespace-nowrap">토 / 공휴일</span>
                      <span className="text-left font-medium">오전 9시 30분 ~ 오후 2시 <span className="text-gray-500 font-normal">(점심없음)</span></span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="font-semibold text-gray-600 shrink-0 sm:w-24 whitespace-nowrap">점심 시간</span>
                      <span className="text-left font-medium">오후 1시 ~ 오후 2시</span>
                    </li>
                  </ul>
                  <p className="mt-5 text-[var(--color-primary)] font-bold text-[17px]">
                    *일요일은 휴진입니다.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <h3 className="text-xl font-bold text-[var(--color-primary)] shrink-0 sm:w-20 mt-1 sm:mt-0 whitespace-nowrap">연락처</h3>
                <p className="text-gray-800 text-[18px] font-bold tracking-wide mt-0.5">
                  051.714.0040 / 010.7686.0041
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
