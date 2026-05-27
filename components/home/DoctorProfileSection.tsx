import React from 'react';
import { SectionTitle } from '../common/SectionTitle';

export function DoctorProfileSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="JIN DOCTOR"
          title={<>대표원장이 직접 살피는<br />맞춤 감량 진료</>}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-full min-h-[400px] relative">
            <div className="absolute inset-0 bg-[url('/images/profile/doctor.png')] bg-cover bg-[center_top]" />
          </div>
          <div className="space-y-8">
            <div className="text-[20pt] font-bold text-gray-900 leading-snug">
              안녕하세요. 진한의원 대표원장 <span className="text-[var(--color-primary)]">김효진</span>입니다.
            </div>
            
            <div className="text-gray-600 space-y-3 leading-relaxed text-[18px] break-keep">
              <p>
                오랜 시간 환자분들의 체중 변화와 몸의 균형을 살피며 저는 늘 한 가지를 중요하게 생각해왔습니다.
              </p>
              <p className="font-semibold text-gray-800">
                “감량은 숫자를 줄이는 일이 아니라,<br />
                몸이 다시 균형을 찾아가는 과정이어야 한다.”
              </p>
              <p>
                같은 다이어트를 해도<br />
                누군가는 쉽게 빠지고, 누군가는 쉽게 지칩니다.<br />
                그 차이는 단순한 의지의 문제가 아니라<br />
                체질, 대사 상태, 스트레스, 수면, 호르몬 변화, 자율신경의 균형과도 깊이 연결되어 있습니다.
              </p>
              <p>
                진한의원은<br />
                환자분의 몸 상태를 세밀하게 살피고<br />
                개인에게 맞는 한약 처방과 치료 방향을 제안합니다.
              </p>
              <p>
                무리한 감량보다<br />
                몸이 감당할 수 있는 변화,<br />
                그리고 오래 유지할 수 있는 건강한 감량을 지향합니다.
              </p>
              <p>
                대표원장이 직접 상담하고 처방하며<br />
                한 분 한 분의 몸에 맞는 진료를 이어가겠습니다.
              </p>
            </div>

            <div className="pt-8 mt-4 border-t border-gray-200/60">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 text-[13pt] text-gray-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>한방내과 전문의</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>동의대학교 한의과대학 졸업</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>동의대학교 한의과대학 석사 수료</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>대한한의학회 정회원</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>대한한방비만학회 정회원</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>대한한방내과학회 정회원</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>대한약침학회 정회원</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>한방두피모발연구회 정회원</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>한방피부과학회 정회원</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>한방미용성형학회 정회원</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>대한한의통증체형학회 정회원</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>네이버 지식in 상담주치의</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
