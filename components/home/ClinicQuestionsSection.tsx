import { SITE_CONFIG } from '@/lib/constants/site';

export function ClinicQuestionsSection() {
  return (
    <section aria-labelledby="clinic-questions-title" className="bg-white px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[960px]">
        <p className="mb-3 text-sm font-semibold tracking-widest text-[#476786]">VISIT GUIDE</p>
        <h2 id="clinic-questions-title" className="text-2xl font-bold tracking-tight text-[#083560] sm:text-3xl">방문 전 자주 묻는 질문</h2>
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          <details className="group py-5">
            <summary className="cursor-pointer text-base font-semibold leading-7 text-slate-900 sm:text-lg">진한의원은 어디에 있나요?</summary>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">{SITE_CONFIG.contact.address}에 있습니다. 부산 지하철 2호선 장산역 11번 또는 13번 출구 앞입니다. <a href="#location" className="font-medium text-[#083560] underline underline-offset-4">지도와 오시는 길 보기</a></p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer text-base font-semibold leading-7 text-slate-900 sm:text-lg">진료시간과 점심시간은 어떻게 되나요?</summary>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">월·화·수·금요일은 오전 9시 30분부터 오후 6시까지이며, 점심시간은 오후 1시부터 2시까지입니다. 목요일과 토요일·대체공휴일은 오전 9시 30분부터 오후 2시까지 점심시간 없이 진료합니다. 일요일은 휴진입니다.</p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer text-base font-semibold leading-7 text-slate-900 sm:text-lg">상담이나 진료 예약은 어디로 문의하나요?</summary>
            <p className="mt-3 text-[15px] leading-7 text-slate-600"><a href="tel:0517140040" className="font-medium text-[#083560] underline underline-offset-4">{SITE_CONFIG.contact.phoneMain}</a>로 전화하시거나 <a href={SITE_CONFIG.links.kakao} className="font-medium text-[#083560] underline underline-offset-4">카카오톡 상담</a>으로 문의하실 수 있습니다. <a href={SITE_CONFIG.links.naverReservation} className="font-medium text-[#083560] underline underline-offset-4">네이버 예약</a>에서도 예약 안내를 확인하실 수 있습니다.</p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer text-base font-semibold leading-7 text-slate-900 sm:text-lg">어떤 진료 내용을 홈페이지에서 확인할 수 있나요?</summary>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">다이어트 한약과 개인별 맞춤 다이어트, 여성·산후, 피부, 면역·보약 클리닉을 안내합니다. <a href="/about/story" className="font-medium text-[#083560] underline underline-offset-4">진한의원 소개</a>에서 진료 철학도 확인하실 수 있습니다.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
