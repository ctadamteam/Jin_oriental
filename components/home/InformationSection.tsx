import React from 'react';
import { BusFront, CarFront, TrainFront } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { SITE_CONFIG } from '@/lib/constants/site';

const directions = [
  { label: '지하철', description: '2호선 장산역(종점) 11번 혹은 13번 출구 앞', icon: TrainFront },
  { label: '시내버스', description: '36, 38, 115-1, 180, 1001, 1006', icon: BusFront },
  { label: '자가용', description: '네비게이션에 부산광역시 해운대구 좌동 1473-2 엘리움 6층 입력', icon: CarFront },
];

export function InformationSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div id="location" className="scroll-mt-28">
          <SectionTitle
            subtitle="INFORMATION"
            title="오시는길"
          />
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-xl flex flex-col lg:flex-row overflow-hidden min-h-[540px] max-w-[1320px] mx-auto w-full">
          {/* Left: Map */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-auto bg-gray-100 relative">
            <iframe
              src="https://maps.google.com/maps?ll=35.168815,129.1757451&q=35.168815,129.1757451&z=17&hl=ko&output=embed"
              title="진한의원 위치 지도"
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
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center items-center">
            
            <div className="flex flex-col gap-8 lg:gap-7 w-full max-w-[560px]">
              {/* Address */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <h3 className="text-xl font-bold text-primary-medium shrink-0 sm:w-20 mt-1 sm:mt-0 whitespace-nowrap">주소</h3>
                <p className="text-gray-700 text-[18px] leading-relaxed font-medium">
                  {SITE_CONFIG.contact.address}
                </p>
              </div>

              {/* Business Hours */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <h3 className="text-xl font-bold text-primary-medium shrink-0 sm:w-20 mt-1 sm:mt-0 whitespace-nowrap">진료시간</h3>
                <div className="flex-1 w-full">
                  <ul className="text-[17px] text-gray-700 space-y-3 w-full">
                    <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="font-semibold text-gray-600 shrink-0 sm:w-24 whitespace-nowrap">월/화/수/금</span>
                      <span className="text-left font-medium">오전 9시 30분 ~ 오후 6시</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="font-semibold text-gray-600 shrink-0 sm:w-24 whitespace-nowrap">목요일</span>
                      <span className="text-left font-medium">오전 9시 30분 ~ 오후 2시 <span className="text-gray-500 font-normal">(점심없음)</span></span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="font-semibold text-gray-600 shrink-0 sm:w-24 whitespace-nowrap">{SITE_CONFIG.hours.weekendLabel}</span>
                      <span className="text-left font-medium">오전 9시 30분 ~ 오후 2시 <span className="text-gray-500 font-normal">(점심없음)</span></span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                      <span className="font-semibold text-gray-600 shrink-0 sm:w-24 whitespace-nowrap">점심 시간</span>
                      <span className="text-left font-medium">오후 1시 ~ 오후 2시</span>
                    </li>
                  </ul>
                  <p className="mt-5 text-primary-medium font-bold text-[17px]">
                    *일요일은 휴진입니다.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <h3 className="text-xl font-bold text-primary-medium shrink-0 sm:w-20 mt-1 sm:mt-0 whitespace-nowrap">연락처</h3>
                <p className="text-gray-800 text-[18px] font-bold tracking-wide mt-0.5">
                  051.714.0040 / 010.7686.0041
                </p>
              </div>

              {/* Directions */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <h3 className="text-xl font-bold text-primary-medium shrink-0 sm:w-20 mt-1 sm:mt-0 whitespace-nowrap">오시는 방법</h3>
                <dl className="flex-1 w-full space-y-2.5 text-[16px] leading-relaxed text-gray-700">
                  {directions.map((direction) => (
                    <div key={direction.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#083560] text-[#EAF0F7]" aria-hidden="true">
                        <direction.icon size={16} strokeWidth={2} />
                      </span>
                      <div className="min-w-0">
                        <dt className="font-semibold text-gray-600">{direction.label}</dt>
                        <dd className="font-medium break-keep">
                          {direction.label === '자가용' ? (
                            <>
                              네비게이션에 부산광역시 해운대구 좌동 1473-2
                              <br />
                              엘리움 6층 입력
                            </>
                          ) : direction.description}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
