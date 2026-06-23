import VisFatSliderSection from '@/components/personal/visceral/VisFatSliderSection';
import AbdominalComparisonSlider from '@/components/personal/visceral/AbdominalComparisonSlider';
import BellyComorbiditySlider from '@/components/personal/visceral/BellyComorbiditySlider';
import DietTreatmentSlider from '@/components/personal/visceral/DietTreatmentSlider';

export default function Index() {
  return (
    <main className="font-pretendard overflow-x-hidden">
      <HeroSection />
      <StatisticsSection />
      
      {/* Self-contained VisFatSliderSection handles the slider and demo toggle inside */}
      <VisFatSliderSection />

      <AbdominalComparisonSlider />
      <BellyComorbiditySlider />
      <DietTreatmentSlider />
    </main>
  );
}

/* ────────────────── HERO ────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-[#F0F2E7] overflow-hidden min-h-[480px] md:min-h-[600px] lg:min-h-[645px]">
      {/* background blurred image */}
      <img
        src="/images/personal/visceral-fat/visceral-fat-1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay blur-xl opacity-60 pointer-events-none select-none"
      />
      <div className="relative max-w-[1920px] mx-auto px-6 md:px-16 lg:pl-16 lg:pr-32 flex flex-col lg:flex-row items-center justify-between min-h-[480px] md:min-h-[600px] lg:min-h-[645px]">
        {/* left image */}
        <div className="w-full lg:w-[35%] flex-shrink-0 flex justify-center lg:justify-start lg:self-end pt-10 lg:pt-0">
          <img
            src="/images/personal/visceral-fat/visceral-fat-model-new.png"
            alt="내장지방형 비만"
            className="w-full max-w-[320px] md:max-w-[450px] lg:max-w-none lg:w-auto lg:h-[645px] lg:-ml-20 object-cover filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] scale-100 origin-bottom"
          />
        </div>
        {/* right text */}
        <div className="w-full lg:w-[50%] flex-shrink-0 flex flex-col justify-center py-12 lg:py-0 lg:pl-0 lg:-ml-12 z-10">
          <p
            className="font-paperlogy text-primary text-xl md:text-2xl lg:text-[34px] font-normal mb-1 md:mb-2"
            style={{ letterSpacing: '-0.05em' }}
          >
            뱃살 먼저 감량되는 내장 다이어트
          </p>
          <h1
            className="font-paperlogy text-primary font-extrabold text-5xl md:text-7xl lg:text-[100px] leading-none mb-6 md:mb-8"
            style={{ letterSpacing: '-0.05em' }}
          >
            내장지방형 비만
          </h1>
          <p
            className="text-primary text-[15.2px] md:text-[19px] lg:text-[26.6px] leading-[1.4] max-w-[780px]"
            style={{ letterSpacing: '-0.05em' }}
          >
            만성피로, 소화장애, 부종, 대사성 질환을 유발하는 내장지방을 <br className="hidden lg:block" />
            보다 집중적으로 감소할 수 있는 1:1 개인별 맞춤 다이어트
          </p>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── STATISTICS ────────────────── */
function NormalPersonIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 select-none pointer-events-none opacity-85">
      {/* 바깥 흰색 테두리 레이어 (머리와 몸통 통합) */}
      <g fill="white" stroke="white" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round">
        <ellipse cx="116.5" cy="56" rx="23" ry="29" />
        <path d="M 116.5 82 C 105 82, 86 92, 78 112 C 62 112, 58 132, 58 190 C 58 198, 68 202, 116.5 202 C 165 202, 175 198, 175 190 C 175 132, 171 112, 155 112 C 151 92, 128 82, 116.5 82 Z" />
      </g>
      {/* 내부 회색 실루엣 레이어 */}
      <g fill="#E5E8DF">
        <ellipse cx="116.5" cy="56" rx="23" ry="29" />
        <path d="M 116.5 82 C 105 82, 86 92, 78 112 C 62 112, 58 132, 58 190 C 58 198, 68 202, 116.5 202 C 165 202, 175 198, 175 190 C 175 132, 171 112, 155 112 C 151 92, 128 82, 116.5 82 Z" />
      </g>
      {/* 팔 분리선 */}
      <path d="M 78 125 V 192" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M 155 125 V 192" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ObesePersonIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 select-none pointer-events-none filter drop-shadow-[0_10px_25px_rgba(168,204,29,0.12)]">
      {/* 바깥 흰색 테두리 레이어 (머리와 몸통 통합) */}
      <g fill="white" stroke="white" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round">
        <ellipse cx="116.5" cy="56" rx="23" ry="29" />
        <ellipse cx="116.5" cy="142" rx="64" ry="60" />
      </g>

      {/* 내부 연두색 실루엣 레이어 */}
      <g fill="#A8CC1D">
        <ellipse cx="116.5" cy="56" rx="23" ry="29" />
        <ellipse cx="116.5" cy="142" rx="64" ry="60" />
      </g>

      {/* 팔 분리선 (바디 곡선을 따르는 기하학적 대칭 라인) */}
      <path d="M 78 120 C 65 140, 65 170, 68 186" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M 155 120 C 168 140, 168 170, 165 186" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function AbdominalObesePersonIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 select-none pointer-events-none filter drop-shadow-[0_10px_25px_rgba(168,204,29,0.12)]">
      {/* 바깥 흰색 테두리 레이어 (머리와 몸통 통합) */}
      <g fill="white" stroke="white" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round">
        <ellipse cx="116.5" cy="56" rx="23" ry="29" />
        <ellipse cx="116.5" cy="142" rx="64" ry="60" />
      </g>

      {/* 내부 연두색 실루엣 레이어 */}
      <g fill="#A8CC1D">
        <ellipse cx="116.5" cy="56" rx="23" ry="29" />
        <ellipse cx="116.5" cy="142" rx="64" ry="60" />
      </g>

      {/* 팔 분리선 (바디 곡선을 따르는 기하학적 대칭 라인) */}
      <path d="M 78 120 C 65 140, 65 170, 68 186" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M 155 120 C 168 140, 168 170, 165 186" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function StatisticsSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="bg-primary text-white px-8 py-3 rounded-full text-[16.2px] md:text-[21.6px] lg:text-[31.5px] font-bold leading-tight">
            <span className="font-bold">숫자</span>로 알아보는 <span className="font-bold">한국인의 비만</span>
          </div>
        </div>

        {/* Stats card */}
        <div className="bg-[#F4F4F4] rounded-3xl p-6 md:p-10 lg:p-12 mb-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 justify-around items-stretch">
            
            {/* Obesity stat (좌측) */}
            <div className="flex-1 flex flex-col items-center bg-white rounded-[28px] pt-4 pb-6 px-8 md:pt-5 md:pb-8 md:px-10 shadow-[0_12px_40px_rgba(168,204,29,0.06)] border border-[#A8CC1D]/5">
              {/* 입체적 피규어 스테이지 (상단) */}
              <div className="relative w-full max-w-[220px] md:max-w-[260px] lg:max-w-[280px] h-[110px] md:h-[140px] lg:h-[160px] flex justify-center items-end mb-4">
                {/* 뒤쪽 보통체형 2명 (오프셋 배치, 축소, 블러, 반투명) */}
                <div className="absolute left-[-10%] bottom-2 z-10 opacity-35 scale-90 blur-[0.5px] origin-bottom">
                  <NormalPersonIcon />
                </div>
                <div className="absolute right-[-10%] bottom-2 z-10 opacity-35 scale-90 blur-[0.5px] origin-bottom">
                  <NormalPersonIcon />
                </div>
                {/* 앞쪽 비만체형 1명 (중앙 정렬, 확대, 선명, 그림자 강조) */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 scale-110 origin-bottom">
                  <ObesePersonIcon />
                </div>
              </div>
              {/* 설명 텍스트 (하단 중앙) */}
              <div className="text-center">
                <p className="text-[#8F9682] text-[14px] md:text-[16.5px] lg:text-[18px] mb-1 tracking-tight font-medium">성인 3명 중 1명</p>
                <p className="text-primary font-extrabold text-[27px] md:text-[45px] leading-none tracking-[-0.07em]">비만</p>
              </div>
            </div>

            {/* Abdominal obesity stat (우측) */}
            <div className="flex-1 flex flex-col items-center bg-white rounded-[28px] pt-4 pb-6 px-8 md:pt-5 md:pb-8 md:px-10 shadow-[0_12px_40px_rgba(168,204,29,0.06)] border border-[#A8CC1D]/5">
              {/* 입체적 피규어 스테이지 (상단) */}
              <div className="relative w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px] h-[110px] md:h-[140px] lg:h-[160px] flex justify-center items-end mb-4">
                {/* 뒤쪽 보통체형 4명 (대칭식 입체 오프셋 배치, 축소, 블러, 반투명) */}
                {/* 1단계: 가장 뒤쪽 바깥 레이어 (좌/우) */}
                <div className="absolute left-[-14%] bottom-2 z-10 opacity-35 scale-85 blur-[0.5px] origin-bottom">
                  <NormalPersonIcon />
                </div>
                <div className="absolute right-[-14%] bottom-2 z-10 opacity-35 scale-85 blur-[0.5px] origin-bottom">
                  <NormalPersonIcon />
                </div>
                {/* 2단계: 중간 안쪽 레이어 (좌/우) */}
                <div className="absolute left-[10%] bottom-2 z-10 opacity-35 scale-85 blur-[0.5px] origin-bottom">
                  <NormalPersonIcon />
                </div>
                <div className="absolute right-[10%] bottom-2 z-10 opacity-35 scale-85 blur-[0.5px] origin-bottom">
                  <NormalPersonIcon />
                </div>
                {/* 앞쪽 복부비만체형 1명 (중앙 정렬, 확대, 선명, 그림자 강조) */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 scale-110 origin-bottom">
                  <AbdominalObesePersonIcon />
                </div>
              </div>
              {/* 설명 텍스트 (하단 중앙) */}
              <div className="text-center">
                <p className="text-[#8F9682] text-[14px] md:text-[16.5px] lg:text-[18px] mb-1 tracking-tight font-medium">성인 5명 중 1명</p>
                <p className="text-primary font-extrabold text-[27px] md:text-[45px] leading-none tracking-[-0.07em]">복부비만</p>
              </div>
            </div>

          </div>
        </div>

        {/* Description */}
        <p className="text-center text-black text-[14.4px] md:text-[18px] lg:text-[27px] leading-relaxed" style={{ letterSpacing: '-0.05em' }}>
          한 통계에 따르면 성인 3명 중 1명은 비만이며<br />
          성인 5명 중 1명은 복부비만이며 50대 이상 유병율은 50대 이하에 비해 2배에 달합니다.
        </p>
      </div>
    </section>
  );
}

/* ────────────────── BELLY FAT REASON ────────────────── */
function BellyFatReasonSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-black text-lg md:text-2xl lg:text-[35px] mb-4" style={{ letterSpacing: '-0.05em' }}>
          뱃살이 찌는 이유는 뭘까?
        </p>
        <h2
          className="font-paperlogy font-normal text-black text-4xl md:text-6xl lg:text-[70px] mb-8 leading-none"
          style={{ letterSpacing: '-0.05em' }}
        >
          원인은 <span className="text-primary font-extrabold">내장지방!!</span>
        </h2>

        <p className="text-black text-[14.4px] md:text-[18px] lg:text-[31.5px] leading-relaxed max-w-5xl mx-auto mb-8" style={{ letterSpacing: '-0.05em' }}>
          뱃살은 단순히 지방의 증가만을 의미하는 것이 아니라 내장 기능,<br className="hidden md:block" />
          신진대사 저하를 의미하며 이전보다 뱃살이 증가한 것은<br className="hidden md:block" />
          건강의 이상신호를 의미합니다. 특히 중년층의 뱃살은 고혈압, 당뇨,<br className="hidden md:block" />
          고지혈증 등 대사성 질환의 원인이 됩니다.
        </p>

        <p className="text-black text-[14.4px] md:text-[18px] lg:text-[31.5px] leading-relaxed max-w-5xl mx-auto mb-12" style={{ letterSpacing: '-0.05em' }}>
          건강하기 위해서는 <strong className="text-primary">반드시 뱃살을 제거</strong>해야 하며<br className="hidden md:block" />
          배가 불룩한 중년이 배가 나온 중년보다 더 건강하다고 볼 수 없습니다.
        </p>

        {/* Waist criteria cards (Premium Light Split Panel) */}
        <div className="relative max-w-4xl mx-auto mt-12 rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col md:flex-row items-stretch bg-white">
          
          {/* Men Column */}
          <div className="flex-1 relative p-8 md:p-10 flex flex-col justify-between overflow-hidden group">
            {/* Massive background letter (Faint) */}
            <div className="absolute right-4 bottom-[-20px] text-[180px] md:text-[220px] font-black text-gray-100/40 select-none pointer-events-none font-paperlogy leading-none">
              M
            </div>
            
            {/* Top Row: Tag & Symbol */}
            <div className="flex justify-between items-center z-10">
              <span className="inline-block bg-[#4C5EBC]/8 border border-[#4C5EBC]/15 text-[#4C5EBC] text-sm md:text-base font-bold px-4 py-1.5 rounded-full">
                성인 남성 (Male)
              </span>
              <span className="text-[#4C5EBC]/50 text-3xl md:text-4xl font-bold">♂</span>
            </div>
            
            {/* Bottom Row: Core data */}
            <div className="mt-12 text-left z-10">
              <p className="text-gray-400 text-xs md:text-sm font-semibold tracking-wide uppercase">복부비만 허리둘레 기준</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl md:text-7xl font-black text-[#4C5EBC] tracking-tighter">
                  90
                </span>
                <span className="text-gray-800 text-xl md:text-2xl font-bold">cm 이상</span>
              </div>
              <p className="text-gray-400 text-xs mt-3">대한비만학회 남성 복부비만 진단 규격</p>
            </div>
          </div>

          {/* Women Column */}
          <div className="flex-1 relative p-8 md:p-10 flex flex-col justify-between overflow-hidden group border-t md:border-t-0 md:border-l border-gray-100">
            {/* Massive background letter (Faint) */}
            <div className="absolute right-4 bottom-[-20px] text-[180px] md:text-[220px] font-black text-gray-100/40 select-none pointer-events-none font-paperlogy leading-none">
              W
            </div>
            
            {/* Top Row: Tag & Symbol */}
            <div className="flex justify-between items-center z-10">
              <span className="inline-block bg-[#FE772E]/8 border border-[#FE772E]/15 text-[#FE772E] text-sm md:text-base font-bold px-4 py-1.5 rounded-full">
                성인 여성 (Female)
              </span>
              <span className="text-[#FE772E]/50 text-3xl md:text-4xl font-bold">♀</span>
            </div>
            
            {/* Bottom Row: Core data */}
            <div className="mt-12 text-left z-10">
              <p className="text-gray-400 text-xs md:text-sm font-semibold tracking-wide uppercase">복부비만 허리둘레 기준</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl md:text-7xl font-black text-[#FE772E] tracking-tighter">
                  85
                </span>
                <span className="text-gray-800 text-xl md:text-2xl font-bold">cm 이상</span>
              </div>
              <p className="text-gray-400 text-xs mt-3">대한비만학회 여성 복부비만 진단 규격</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ────────────────── VISCERAL FAT EXPLAIN ────────────────── */
function ViscFatExplainSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-20 lg:py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="font-paperlogy font-normal text-center text-black text-4xl md:text-6xl lg:text-[70px] mb-6 leading-none"
          style={{ letterSpacing: '-0.05em' }}
        >
          <span className="text-primary font-extrabold">내장지방</span>은 무엇인가요?
        </h2>

        <p className="text-center text-black text-[14.4px] md:text-[18px] lg:text-[31.5px] leading-relaxed max-w-4xl mx-auto mb-12" style={{ letterSpacing: '-0.05em' }}>
          내장지방은 복강 안 장기 사이 혹은 내방 벽에 존재하는 지방으로 주로 복부에 쌓이며,<br className="hidden md:block" />
          내장지방이 증가할 수록 배가 불룩하게 나오나 손으로 꼬집었을 때<br className="hidden md:block" />
          살집이 두껍게 잡히지 않습니다. 주로 중년층의 배둘레(허리둘레)증가의 원인이 됩니다.
        </p>

        {/* Comparison images */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Normal - with anatomical overlay diagram */}
          <div className="flex-1 relative">
            <div className="border border-[#313131] bg-white rounded-sm overflow-hidden">
              <div className="relative">
                <img
                  src="/images/personal/visceral-fat/visceral-fat-3.png"
                  alt="내장지방 정상"
                  className="w-full h-64 md:h-80 object-cover"
                />
                {/* 피하지방 / 내장지방 labels overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* 피하지방 - top left */}
                  <span className="absolute top-[6%] left-[5%] text-black font-bold text-xs md:text-sm lg:text-base" style={{ letterSpacing: '-0.03em' }}>피하지방</span>
                  <div className="absolute top-[26%] left-[21%] w-[10px] h-[10px] bg-black rounded-full" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                    <line x1="14" y1="16" x2="22" y2="27" stroke="#000" strokeWidth="0.5" />
                  </svg>
                  {/* 내장지방 - top right */}
                  <span className="absolute top-[6%] right-[5%] text-black font-bold text-xs md:text-sm lg:text-base" style={{ letterSpacing: '-0.03em' }}>내장지방</span>
                  <div className="absolute top-[48%] right-[32%] w-[10px] h-[10px] bg-black rounded-full" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                    <line x1="85" y1="16" x2="67" y2="50" stroke="#000" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
              <div className="bg-[#313131] text-white text-center py-3 text-lg md:text-2xl">
                내장지방 정상
              </div>
            </div>
          </div>

          {/* Excessive */}
          <div className="flex-1 relative">
            <div className="border-2 border-primary bg-white rounded-sm overflow-hidden">
              <div className="relative">
                <img
                  src="/images/personal/visceral-fat/visceral-fat-4.png"
                  alt="내장지방 과다"
                  className="w-full h-64 md:h-80 object-cover"
                />
                {/* 피하지방 / 내장지방 labels overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* 피하지방 - top left */}
                  <span className="absolute top-[6%] left-[5%] text-black font-bold text-xs md:text-sm lg:text-base" style={{ letterSpacing: '-0.03em' }}>피하지방</span>
                  <div className="absolute top-[26%] left-[24%] w-[10px] h-[10px] bg-black rounded-full" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                    <line x1="14" y1="16" x2="25" y2="27" stroke="#000" strokeWidth="0.5" />
                  </svg>
                  {/* 내장지방 - top right */}
                  <span className="absolute top-[6%] right-[5%] text-black font-bold text-xs md:text-sm lg:text-base" style={{ letterSpacing: '-0.03em' }}>내장지방</span>
                  <div className="absolute top-[45%] right-[28%] w-[10px] h-[10px] bg-black rounded-full" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                    <line x1="85" y1="16" x2="71" y2="47" stroke="#000" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
              <div className="bg-primary text-white text-center py-3 text-lg md:text-2xl">
                내장지방 과다
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info card - Premium Split Panel */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-100/80">
          {/* Subtle dot pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #A8CC1D 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2">
            {/* 내장지방 Panel */}
            <div className="relative bg-gradient-to-br from-[#F0F2E7] via-[#ECEEE2] to-[#E5E8D8] p-6 md:p-8 flex items-center gap-8 overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-primary/[0.04]" />
              <div className="absolute -right-2 -bottom-2 w-24 h-24 rounded-full bg-primary/[0.06]" />
              
              <div className="relative flex-shrink-0">
                {/* Outer ring glow */}
                <div className="absolute -inset-1.5 rounded-full bg-primary/10 blur-sm" />
                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary via-[#9AB81B] to-[#7FA110] flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(168, 204, 29, 0.3)]">
                  <span className="text-white font-extrabold text-2xl md:text-4xl leading-none tracking-tight mt-0.5">2cm</span>
                  <span className="text-white/80 text-xs md:text-base font-medium mt-0.5">이하</span>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-black font-bold text-2xl md:text-3xl lg:text-4xl" style={{ letterSpacing: '-0.03em' }}>내장지방</p>
              </div>
            </div>

            {/* Center divider accent */}
            <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10 flex-col items-center">
              <div className="flex-1 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            </div>

            {/* 피하지방 Panel */}
            <div className="relative bg-gradient-to-br from-white via-[#FAFBF7] to-[#F4F6EE] p-6 md:p-8 flex items-center gap-8 overflow-hidden border-t md:border-t-0">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-primary/[0.04]" />
              <div className="absolute -right-2 -bottom-2 w-24 h-24 rounded-full bg-primary/[0.06]" />
              
              <div className="relative flex-shrink-0">
                {/* Outer ring glow */}
                <div className="absolute -inset-1.5 rounded-full bg-primary/10 blur-sm" />
                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary via-[#7A9510] to-[#5C7A00] flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(139,166,18,0.3)]">
                  <span className="text-white font-extrabold text-2xl md:text-4xl leading-none tracking-tight mt-0.5">2cm</span>
                  <span className="text-white/80 text-xs md:text-base font-medium mt-0.5">이상</span>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-black font-bold text-2xl md:text-3xl lg:text-4xl" style={{ letterSpacing: '-0.03em' }}>피하지방 <span className="text-primary">↑</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-black text-[14.4px] md:text-[18px] lg:text-[31.5px] leading-relaxed mt-10 max-w-4xl mx-auto" style={{ letterSpacing: '-0.05em' }}>
          내장지방의 증가는 혈액 내 지질 수치의 증가로 이어져<br className="hidden md:block" />
          <strong className="text-primary">콜레스테롤 혈증→동맥경화→ 고혈압→뇌혈류장애, 심장혈관진환으로<br className="hidden md:block" />
          진행할 수 있어</strong> 복강 내 여유 공간을 감소시켜<br className="hidden md:block" />
          혈류-림프순환 장애 and 위장관 운동성 저하를 유발하게 됩니다.
        </p>
      </div>
    </section>
  );
}

/* ────────────────── FOOTER ────────────────── */
function FooterSection() {
  return (
    <footer className="relative bg-[#252525] overflow-hidden py-16 md:py-20">
      {/* Background overlay */}
      <img
        src="/images/personal/visceral-fat/visceral-fat-21.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-30 pointer-events-none select-none"
      />
      <div className="relative text-center">
        <h2 className="text-white font-bold text-4xl md:text-6xl lg:text-[70px] mb-4" style={{ letterSpacing: '-0.05em' }}>
          진한의원 비만
        </h2>
        <p className="text-white text-[14.4px] md:text-[18px] lg:text-[31.5px]" style={{ letterSpacing: '-0.05em' }}>
          더 많은 사례자를 보시려면 홈페이지에서 확인해주세요!
        </p>
      </div>
    </footer>
  );
}
