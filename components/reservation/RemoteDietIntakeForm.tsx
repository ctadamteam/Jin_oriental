'use client';

import { CheckCircle2, Search } from 'lucide-react';
import React, { useState } from 'react';

type PostcodeData = {
  address: string;
  roadAddress: string;
  zonecode: string;
};

declare global {
  interface Window {
    daum?: {
      Postcode: new (options: { oncomplete: (data: PostcodeData) => void }) => {
        open: () => void;
      };
    };
  }
}

type FormData = {
  visitHistory: '' | '초진' | '재진';
  phone: string;
  name: string;
  birthDate: string;
  postalCode: string;
  address: string;
  addressDetail: string;
  contactTimes: string[];
  referrer: string;
  paymentMethod: '' | '카드결제' | '계좌이체 (현금영수증 발급)';
  prescriptions: string[];
};

type FieldName =
  | 'visitHistory'
  | 'phone'
  | 'name'
  | 'birthDate'
  | 'address'
  | 'contactTimes'
  | 'paymentMethod';

type FieldErrors = Partial<Record<FieldName, string>>;

const initialFormData: FormData = {
  visitHistory: '',
  phone: '',
  name: '',
  birthDate: '',
  postalCode: '',
  address: '',
  addressDetail: '',
  contactTimes: [],
  referrer: '',
  paymentMethod: '',
  prescriptions: [],
};

const contactTimeOptions = ['시간 무관 (9시반~6시)', '오전', '오후', '토요일', '카톡 혹은 문자'];

const prescriptionGroups = [
  {
    title: 'A. 다이어트 한약',
    desktopRowHeight: 'lg:auto-rows-[112px]',
    items: [
      { name: '슬림환', description: '식욕억제, 체지방감소, 신진대사 활성화, 체중감량' },
      { name: '삭뺀다정', description: '식욕억제, 체지방감소, 신진대사 활성화, 체중감량' },
      { name: '빼빼정(블랙정)', description: '식욕억제, 체지방감소, 신진대사 활성화, 체중감량' },
      { name: '다이어트 탕약' },
      { name: '올인원', description: '다이어트약(캡슐 혹은 타블렛) + 치료약\n변비, 소화불량, 현기증, 불면, 두근거림, 생리불순, 붓기 중 택 2' },
      { name: '유지환(요요방지환)' },
      { name: '요요방지캡슐' },
      { name: '숙변환(변비예방)' },
    ],
  },
  {
    title: 'B. 내장지방 및 염증제거, 독소배출',
    desktopRowHeight: 'lg:auto-rows-[104px]',
    items: [
      { name: '배사라정', description: '내장지방 감소, 숙취 및 간해독, 변비개선 및 예방, 장해독' },
      { name: '붓기제로', description: '붓기감소, 수분대사 개선, 노폐물 및 염증 배출, 내장지방감소에 도움' },
      { name: '체질 개선 및 면역 탕약' },
    ],
  },
  {
    title: 'C. 해독프로그램',
    desktopRowHeight: 'lg:auto-rows-[68px]',
    items: [
      { name: '해독탕' },
      { name: '수독환' },
      { name: '발효선식' },
    ],
  },
  {
    title: 'D. 치료약',
    desktopRowHeight: 'lg:auto-rows-[88px]',
    items: [
      { name: '꿀잠정', description: '수면장애, 두근거림' },
      { name: '심밸런스', description: '불안감, 공황장애, 홧병' },
      { name: '갱년기SOS', description: '상열감, 안면홍조 등' },
      { name: '자궁미인', description: '생리통, 생리불순, 생리전증후군' },
      { name: '보기활력정', description: '현기증, 체력저하' },
      { name: '익기보혈시럽', description: '면역력, 체력저하, 빈혈' },
      { name: '공진단', description: '시럽 / 탄자대' },
      { name: '경옥고', description: '시럽 / 환 / 단지' },
      { name: '쾌통정', description: '만성통증, 손발시림, 저림' },
      { name: '계족환', description: '골절, 골다공증, 퇴행성관절염' },
      { name: '속시원정', description: '소화불량, 윗배팽만감' },
      { name: '과민장Q환', description: '과민성대장증후군, 장염, 설사' },
      { name: '개울화담전', description: '속쓰림, 역류성식도염, 위궤양' },
      { name: '청혈정', description: '고지혈증, 혈관염증, 지방간' },
      { name: '미인수', description: '시술 및 수술 후 붓기, 멍 감소' },
      { name: '탈모STOP', description: '두피혈류개선, 모발영양, 탈모치료' },
    ],
  },
];

function RequiredMark() {
  return <span className="ml-1 text-[#B42318]">*</span>;
}

function QuestionTitle({ number, children, required = false }: { number: number; children: React.ReactNode; required?: boolean }) {
  return (
    <h3 className="text-lg font-bold leading-snug text-[#083560] sm:text-xl">
      <span className="mr-2 text-[#A4B7CC]">{number}.</span>
      {children}
      {required && <RequiredMark />}
    </h3>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-2 text-sm font-medium text-[#B42318]">{message}</p>;
}

function loadDaumPostcode() {
  if (window.daum?.Postcode) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById('daum-postcode-script') as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Daum postcode load failed')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = 'daum-postcode-script';
    script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Daum postcode load failed'));
    document.head.appendChild(script);
  });
}

export function RemoteDietIntakeForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setError = (field: FieldName) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const toggleContactTime = (value: string) => {
    setFormData((current) => ({
      ...current,
      contactTimes: current.contactTimes.includes(value)
        ? current.contactTimes.filter((item) => item !== value)
        : [...current.contactTimes, value],
    }));
    setError('contactTimes');
  };

  const togglePrescription = (value: string) => {
    setFormData((current) => ({
      ...current,
      prescriptions: current.prescriptions.includes(value)
        ? current.prescriptions.filter((item) => item !== value)
        : [...current.prescriptions, value],
    }));
  };

  const openAddressSearch = async () => {
    try {
      await loadDaumPostcode();

      new window.daum!.Postcode({
        oncomplete: (data) => {
          const address = data.roadAddress || data.address;
          setFormData((current) => ({
            ...current,
            postalCode: data.zonecode,
            address,
          }));
          setError('address');
        },
      }).open();
    } catch {
      window.alert('주소 검색 기능을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const validate = () => {
    const nextErrors: FieldErrors = {};
    const phoneDigits = formData.phone.replace(/\D/g, '');

    if (!formData.visitHistory) nextErrors.visitHistory = '초진 또는 재진 중 하나를 선택해주세요.';
    if (!/^01[016789]\d{7,8}$/.test(phoneDigits)) nextErrors.phone = '연락처를 정확히 입력해주세요.';
    if (!formData.name.trim()) nextErrors.name = '이름을 입력해주세요.';
    if (!formData.birthDate) nextErrors.birthDate = '생년월일을 입력해주세요.';
    if (!formData.postalCode || !formData.address) nextErrors.address = '주소 검색을 통해 주소를 입력해주세요.';
    if (formData.contactTimes.length === 0) nextErrors.contactTimes = '연락 가능한 시간대를 하나 이상 선택해주세요.';
    if (!formData.paymentMethod) nextErrors.paymentMethod = '결제 방법을 선택해주세요.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="rounded-2xl border border-[#CDD9E6] bg-white px-6 py-16 text-center shadow-[0_16px_40px_rgba(8,53,96,0.08)] sm:px-12 sm:py-20">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF0F7] text-[#083560]">
          <CheckCircle2 size={36} strokeWidth={2.2} aria-hidden="true" />
        </div>
        <p className="mt-7 text-sm font-bold tracking-[0.14em] text-[#123961]">JIN ORIENTAL CLINIC</p>
        <h2 className="mt-3 text-2xl font-bold text-[#083560] sm:text-3xl">비대면 접수가 완료되었습니다.</h2>
        <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">순차적으로 전화 또는 카카오 상담을 드립니다.</p>
        <button type="button" onClick={() => setIsSubmitted(false)} className="mt-9 rounded-lg border border-[#083560] px-6 py-3 text-sm font-bold text-[#083560] transition-colors hover:bg-[#EAF0F7] focus:outline-none focus:ring-2 focus:ring-[#083560] focus:ring-offset-2">
          입력 내용 다시 작성하기
        </button>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-[#CDD9E6] bg-white shadow-[0_16px_40px_rgba(8,53,96,0.08)]">
      <div className="border-b border-[#D7E1EB] bg-[#F8FAFC] px-6 py-8 sm:px-10 sm:py-10">
        <p className="text-lg font-bold text-[#083560]">안녕하세요. 해운대 진한의원입니다.</p>
        <div className="mt-5 space-y-4 break-keep text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
          <p>
            김효진 원장님이 직접 조제하고 원장님도, 가족도 복용하는 간수치, 신장수치 걱정 없는 안심 다이어트 한약입니다.
            <br />
            비대면 다이어트도 진한의원이 잘 합니다.
          </p>
          <p>재내원율 87% 이상, 저희는 중년층, 대사질환, 갱년기증상이 있더라도 편안하고 건강하게 감량할 수 있는 다이어트 노하우를 가지고 있습니다.</p>
          <p>상담, 처방, 사후까지 내원하지 않더라도 꼼꼼하게 관리해드립니다.</p>
        </div>
        <ul className="mt-7 space-y-3.5 border-t border-[#D7E1EB] pt-7">
          {[
            '다년간 임상 경험과 연구 검증된 다이어트 한약',
            '감량부터 유지까지 책임지는 다이어트 한의원',
            '최적의 약 구성으로 운동 없이도 붓기, 변비도 같이 해결해드립니다.',
          ].map((point) => (
            <li key={point} className="flex items-start gap-3 text-base font-semibold leading-7 text-[#123961] sm:text-[17px] sm:leading-7">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-b border-[#D7E1EB] bg-[#EAF0F7] px-6 py-7 sm:px-10 sm:py-8">
        <h2 className="text-lg font-bold text-[#083560]">공지사항</h2>
        <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-sm leading-6 text-slate-700 sm:text-[15px]">
          <li>아래 문항 작성 후 제출해주시면 <strong className="font-bold text-[#123961]">[전화 상담 → 계좌입금 혹은 카드결제 → 택배수령 혹은 방문수령]</strong>의 순서로 진행됩니다.</li>
          <li>문항 제출 후 기다려주시면 순차대로 전화 혹은 카카오 상담을 해드립니다.</li>
          <li>처방 문의가 많아 상담이 지연될 수 있습니다. 미리 양해 부탁드립니다.</li>
          <li>일반적으로 접수 당일 혹은 익일에 상담을 진행합니다.</li>
          <li>초진, 재진 환자 모두 비대면 접수 가능합니다.</li>
          <li>10만원 미만인 경우 택배비 3,500원이 발생합니다.</li>
          <li>설문지 작성이 어려우면 필수사항 <strong className="font-bold text-[#B42318]">*</strong>만 입력하셔도 됩니다.</li>
        </ol>
      </div>

      <form onSubmit={handleSubmit} noValidate className="px-6 py-9 sm:px-10 sm:py-12">
        <p className="mb-8 text-sm text-slate-500"><span className="text-[#B42318]">*</span> 표시는 필수 입력 항목입니다.</p>

        <div className="space-y-10 sm:space-y-12">
          <fieldset>
            <legend><QuestionTitle number={1} required>진한의원에서 진료받으신 적이 있나요?</QuestionTitle></legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {(['초진', '재진'] as const).map((value) => (
                <label key={value} className="inline-flex min-h-12 cursor-pointer items-center gap-3 px-1 py-2 text-[15px] font-semibold text-slate-700">
                  <input type="radio" name="visitHistory" value={value} checked={formData.visitHistory === value} onChange={() => { setFormData((current) => ({ ...current, visitHistory: value })); setError('visitHistory'); }} className="peer sr-only" />
                  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#A4B7CC] transition-colors after:h-2 after:w-2 after:scale-0 after:rounded-full after:bg-[#EAF0F7] after:transition-transform peer-checked:border-[#083560] peer-checked:bg-[#083560] peer-checked:after:scale-100 peer-focus-visible:ring-4 peer-focus-visible:ring-[#EAF0F7]" />
                  <span className="transition-colors peer-checked:text-[#083560]">{value}</span>
                </label>
              ))}
            </div>
            <FieldError message={errors.visitHistory} />
          </fieldset>

          <div>
            <QuestionTitle number={2} required>연락처를 입력해주세요.</QuestionTitle>
            <input type="tel" inputMode="tel" autoComplete="tel" value={formData.phone} onChange={(event) => { setFormData((current) => ({ ...current, phone: event.target.value })); setError('phone'); }} placeholder="010-0000-0000" className={`mt-5 h-12 w-full rounded-lg border bg-white px-4 text-[15px] text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-[#083560] focus:ring-4 focus:ring-[#EAF0F7] ${errors.phone ? 'border-[#B42318]' : 'border-[#CDD9E6]'}`} />
            <FieldError message={errors.phone} />
          </div>

          <div>
            <QuestionTitle number={3} required>이름을 입력해주세요.</QuestionTitle>
            <input type="text" autoComplete="name" value={formData.name} onChange={(event) => { setFormData((current) => ({ ...current, name: event.target.value })); setError('name'); }} placeholder="이름을 입력해주세요." className={`mt-5 h-12 w-full rounded-lg border bg-white px-4 text-[15px] text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-[#083560] focus:ring-4 focus:ring-[#EAF0F7] ${errors.name ? 'border-[#B42318]' : 'border-[#CDD9E6]'}`} />
            <FieldError message={errors.name} />
          </div>

          <div>
            <QuestionTitle number={4} required>생년월일을 입력해주세요.</QuestionTitle>
            <input type="date" value={formData.birthDate} onChange={(event) => { setFormData((current) => ({ ...current, birthDate: event.target.value })); setError('birthDate'); }} className={`mt-5 h-12 w-full rounded-lg border bg-white px-4 text-[15px] text-slate-900 outline-none transition-shadow focus:border-[#083560] focus:ring-4 focus:ring-[#EAF0F7] ${errors.birthDate ? 'border-[#B42318]' : 'border-[#CDD9E6]'}`} />
            <FieldError message={errors.birthDate} />
          </div>

          <div>
            <QuestionTitle number={5} required>주소를 입력해주세요.</QuestionTitle>
            <div className="mt-5 flex gap-2">
              <input type="text" value={formData.postalCode} readOnly placeholder="우편번호" className={`h-12 min-w-0 flex-1 rounded-lg border bg-slate-50 px-4 text-[15px] text-slate-900 outline-none placeholder:text-slate-400 ${errors.address ? 'border-[#B42318]' : 'border-[#CDD9E6]'}`} />
              <button type="button" onClick={openAddressSearch} className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#083560] px-4 text-sm font-bold text-white transition-colors hover:bg-[#01223D] focus:outline-none focus:ring-2 focus:ring-[#083560] focus:ring-offset-2">
                <Search size={17} aria-hidden="true" /> 주소 검색
              </button>
            </div>
            <input type="text" value={formData.address} readOnly placeholder="기본 주소" className={`mt-2 h-12 w-full rounded-lg border bg-slate-50 px-4 text-[15px] text-slate-900 outline-none placeholder:text-slate-400 ${errors.address ? 'border-[#B42318]' : 'border-[#CDD9E6]'}`} />
            <input type="text" autoComplete="address-line2" value={formData.addressDetail} onChange={(event) => setFormData((current) => ({ ...current, addressDetail: event.target.value }))} placeholder="상세 주소를 입력해주세요." className="mt-2 h-12 w-full rounded-lg border border-[#CDD9E6] bg-white px-4 text-[15px] text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-[#083560] focus:ring-4 focus:ring-[#EAF0F7]" />
            <FieldError message={errors.address} />
          </div>

          <fieldset>
            <legend><QuestionTitle number={6} required>연락가능한 시간대를 체크해주세요. (중복 가능)</QuestionTitle></legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {contactTimeOptions.map((value) => (
                <label key={value} className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border border-[#CDD9E6] px-4 text-[15px] font-semibold text-slate-700 transition-colors has-[:checked]:border-[#083560] has-[:checked]:bg-[#EAF0F7] ${value === '시간 무관 (9시반~6시)' ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                  <input type="checkbox" checked={formData.contactTimes.includes(value)} onChange={() => toggleContactTime(value)} className="h-4 w-4 rounded accent-[#083560]" />
                  {value}
                </label>
              ))}
            </div>
            <FieldError message={errors.contactTimes} />
          </fieldset>

          <div>
            <QuestionTitle number={7}>저희 한의원을 소개해주신 분이 있나요?</QuestionTitle>
            <input type="text" value={formData.referrer} onChange={(event) => setFormData((current) => ({ ...current, referrer: event.target.value }))} placeholder="있다면 성함을 입력해주세요. (선택)" className="mt-5 h-12 w-full rounded-lg border border-[#CDD9E6] bg-white px-4 text-[15px] text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-[#083560] focus:ring-4 focus:ring-[#EAF0F7]" />
          </div>

          <fieldset>
            <legend><QuestionTitle number={8} required>원하시는 결제 방법이 있으세요?</QuestionTitle></legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {(['카드결제', '계좌이체 (현금영수증 발급)'] as const).map((value) => (
                <label key={value} className="inline-flex min-h-12 cursor-pointer items-center gap-3 px-1 py-2 text-[15px] font-semibold text-slate-700">
                  <input type="radio" name="paymentMethod" value={value} checked={formData.paymentMethod === value} onChange={() => { setFormData((current) => ({ ...current, paymentMethod: value })); setError('paymentMethod'); }} className="peer sr-only" />
                  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#A4B7CC] transition-colors after:h-2 after:w-2 after:scale-0 after:rounded-full after:bg-[#EAF0F7] after:transition-transform peer-checked:border-[#083560] peer-checked:bg-[#083560] peer-checked:after:scale-100 peer-focus-visible:ring-4 peer-focus-visible:ring-[#EAF0F7]" />
                  <span className="transition-colors peer-checked:text-[#083560]">{value}</span>
                </label>
              ))}
            </div>
            <FieldError message={errors.paymentMethod} />
          </fieldset>

          <fieldset>
            <legend><QuestionTitle number={9}>처방을 체크해주세요.</QuestionTitle></legend>
            <p className="mt-3 text-sm leading-6 text-slate-500">여러 항목을 동시에 선택할 수 있습니다.</p>
            <div className="mt-6 space-y-8">
              {prescriptionGroups.map((group) => (
                <section key={group.title} className="overflow-hidden border border-[#D7E1EB] bg-white">
                  <div className="flex items-center justify-between gap-4 bg-[#F8FAFC] px-5 py-4 sm:px-6">
                    <h4 className="text-base font-bold text-[#123961]">{group.title}</h4>
                    <span className="shrink-0 text-xs font-semibold text-slate-500">복수 선택 가능</span>
                  </div>
                  <div className={`grid px-5 sm:px-6 lg:grid-cols-2 lg:gap-x-8 ${group.desktopRowHeight}`}>
                    {group.items.map((item) => (
                      <label key={item.name} className="flex min-h-[68px] cursor-pointer items-center gap-3 border-b border-[#E4EBF2] py-4 text-slate-700 transition-colors last:border-b-0 has-[:checked]:bg-[#F3F7FB] lg:h-full lg:px-2">
                        <input type="checkbox" checked={formData.prescriptions.includes(item.name)} onChange={() => togglePrescription(item.name)} className="peer sr-only" />
                        <span className="relative mt-0.5 flex h-5 w-5 shrink-0 rounded-[4px] border-2 border-[#A4B7CC] transition-colors after:absolute after:left-[5px] after:top-[1px] after:h-2.5 after:w-1.5 after:scale-0 after:rotate-45 after:border-b-2 after:border-r-2 after:border-[#EAF0F7] after:transition-transform peer-checked:border-[#083560] peer-checked:bg-[#083560] peer-checked:after:scale-100 peer-focus-visible:ring-4 peer-focus-visible:ring-[#EAF0F7]" />
                        <span className="min-w-0">
                          <strong className="block text-[15px] leading-6 text-slate-800 transition-colors peer-checked:text-[#083560]">{item.name}</strong>
                          {item.description && <span className="mt-0.5 block whitespace-pre-line break-keep text-sm leading-5 text-slate-500">{item.description}</span>}
                        </span>
                      </label>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </fieldset>
        </div>

        <button type="submit" className="mt-12 flex h-14 w-full cursor-pointer items-center justify-center rounded-lg bg-[#083560] px-6 text-lg font-bold text-white focus:outline-none focus:ring-4 focus:ring-[#A4B7CC] focus:ring-offset-2">
          비대면 접수 신청하기
        </button>
      </form>
    </section>
  );
}
