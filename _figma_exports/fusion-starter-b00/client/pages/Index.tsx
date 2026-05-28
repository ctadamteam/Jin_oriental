export default function Index() {
  return (
    <main className="font-pretendard overflow-x-hidden">
      <HeroSection />
      <StatisticsSection />
      <BellyFatReasonSection />
      <ViscFatExplainSection />
      <ViscFatCausesSection />
      <AbdominalComparisonSection />
      <AgingBellySection />
      <ComorbiditySection />
      <MedicineSection />
      <AbdominalExamSection />
      <WhyExamImportantSection />
      <FooterSection />
    </main>
  );
}

/* ────────────────── HERO ────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-[#FDF4E9] overflow-hidden min-h-[480px] md:min-h-[640px] lg:min-h-[784px]">
      {/* background blurred image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8293d53be9c155d09ae40688964fe7aaabb21cb4?width=2864"
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay blur-xl opacity-60 pointer-events-none select-none"
      />
      <div className="relative max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center min-h-[480px] md:min-h-[640px] lg:min-h-[784px]">
        {/* left image */}
        <div className="flex-1 flex justify-center lg:justify-start pt-10 lg:pt-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1697b50dfc69fa2606a9936ac74b7cb92c4e6ec6?width=2864"
            alt="내장지방형 비만"
            className="w-[260px] md:w-[360px] lg:w-[500px] xl:w-[600px] object-contain drop-shadow-lg"
          />
        </div>
        {/* right text */}
        <div className="flex-1 flex flex-col justify-center py-12 lg:py-0 lg:pl-8">
          <p
            className="text-brand text-xl md:text-2xl lg:text-[40px] font-normal mb-3 md:mb-5"
            style={{ letterSpacing: '-0.05em' }}
          >
            뱃살 먼저 감량되는 내장 다이어트
          </p>
          <h1
            className="font-paperlogy text-brand font-extrabold text-5xl md:text-7xl lg:text-[120px] leading-none mb-6 md:mb-8"
            style={{ letterSpacing: '-0.05em' }}
          >
            내장지방형 비만
          </h1>
          <p
            className="text-brand text-base md:text-xl lg:text-[35px] leading-relaxed max-w-[780px]"
            style={{ letterSpacing: '-0.05em' }}
          >
            만성피로, 소화장애, 부종, 대사성 질환을 유발하는 내장지방을 보다 집중적으로 감소할 수 있는 1:1 개인별 맞춤 다이어트
          </p>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── STATISTICS ────────────────── */
function PersonIcon({ highlight = false }) {
  return (
    <svg width="80" height="80" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 md:w-20 md:h-20">
      {highlight ? (
        <path d="M116.5 26.2203C138.676 26.2203 141.99 47.998 141.99 60.9787C141.99 76.1547 129.631 95.7371 116.5 95.7371C103.369 95.7371 91.0097 76.1547 91.0097 60.9787C91.0097 47.998 94.3235 26.2203 116.5 26.2203ZM179.405 169.018C179.332 175.941 179.255 183.273 179.208 189.408C179.177 193.758 176.79 197.656 172.979 199.593C168.464 201.882 163.903 203.901 159.367 205.651V143.248C159.367 141.969 158.331 140.929 157.047 140.929C155.763 140.929 154.727 141.964 154.727 143.248V207.329C129.341 216.043 103.644 216.043 78.2569 207.329V143.248C78.2569 141.969 77.2213 140.929 75.9372 140.929C74.6531 140.929 73.6176 141.964 73.6176 143.248V205.651C69.087 203.906 64.5202 201.887 60.0052 199.593C56.1944 197.662 53.8074 193.758 53.7763 189.408C53.7297 183.273 53.6521 175.941 53.5796 169.018C53.4812 159.807 53.3932 151.321 53.3932 147.354C53.3932 130.801 61.2945 119.26 74.5341 116.479L76.4136 116.091C86.6397 113.999 100.387 111.177 102.753 95.0329C106.88 98.3312 111.55 100.376 116.49 100.376C121.429 100.376 126.115 98.326 130.247 95.0174C132.603 111.162 146.267 113.989 156.488 116.075L158.445 116.479C171.68 119.265 179.586 130.806 179.586 147.354C179.586 151.321 179.498 159.807 179.4 169.018H179.405Z" fill="#8BA612"/>
      ) : (
        <path opacity="0.2" d="M116.5 26.2203C138.676 26.2203 141.99 47.998 141.99 60.9787C141.99 76.1547 129.631 95.7371 116.5 95.7371C103.369 95.7371 91.0097 76.1547 91.0097 60.9787C91.0097 47.998 94.3235 26.2203 116.5 26.2203ZM179.405 169.018C179.332 175.941 179.255 183.273 179.208 189.408C179.177 193.758 176.79 197.656 172.979 199.593C168.464 201.882 163.903 203.901 159.367 205.651V143.248C159.367 141.969 158.331 140.929 157.047 140.929C155.763 140.929 154.727 141.964 154.727 143.248V207.329C129.341 216.043 103.644 216.043 78.2569 207.329V143.248C78.2569 141.969 77.2213 140.929 75.9372 140.929C74.6531 140.929 73.6176 141.964 73.6176 143.248V205.651C69.087 203.906 64.5202 201.887 60.0052 199.593C56.1944 197.662 53.8074 193.758 53.7763 189.408C53.7297 183.273 53.6521 175.941 53.5796 169.018C53.4812 159.807 53.3932 151.321 53.3932 147.354C53.3932 130.801 61.2945 119.26 74.5341 116.479L76.4136 116.091C86.6397 113.999 100.387 111.177 102.753 95.0329C106.88 98.3312 111.55 100.376 116.49 100.376C121.429 100.376 126.115 98.326 130.247 95.0174C132.603 111.162 146.267 113.989 156.488 116.075L158.445 116.479C171.68 119.265 179.586 130.806 179.586 147.354C179.586 151.321 179.498 159.807 179.4 169.018H179.405Z" fill="#4A4A4A"/>
      )}
    </svg>
  );
}

function StatisticsSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="bg-brand text-white px-8 py-3 rounded-full text-lg md:text-2xl lg:text-[35px] font-bold leading-tight">
            <span className="font-bold">숫자</span>로 알아보는 <span className="font-bold">한국인의 비만</span>
          </div>
        </div>

        {/* Stats card */}
        <div className="bg-[#F4F4F4] rounded-2xl p-8 md:p-12 lg:p-14 mb-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-center items-center">
            {/* Obesity stat */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1 items-end">
                <PersonIcon highlight={true} />
                <PersonIcon />
                <PersonIcon />
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-base md:text-xl mb-1">성인 3명 중 1명</p>
                <p className="text-brand font-extrabold text-3xl md:text-5xl" style={{ letterSpacing: '-0.05em' }}>비만</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-40 bg-gray-300" />

            {/* Abdominal obesity stat */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1 items-end">
                <PersonIcon highlight={true} />
                <PersonIcon />
                <PersonIcon />
                <PersonIcon />
                <PersonIcon />
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-base md:text-xl mb-1">성인 5명 중 1명</p>
                <p className="text-brand font-extrabold text-3xl md:text-5xl" style={{ letterSpacing: '-0.05em' }}>복부비만</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-gray-800 text-base md:text-xl lg:text-[35px] leading-relaxed" style={{ letterSpacing: '-0.05em' }}>
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
        <p className="text-gray-700 text-lg md:text-2xl lg:text-[35px] mb-4" style={{ letterSpacing: '-0.05em' }}>
          뱃살이 찌는 이유는 뭘까?
        </p>
        <h2
          className="font-paperlogy font-extrabold text-4xl md:text-6xl lg:text-[70px] mb-8 leading-none"
          style={{ letterSpacing: '-0.05em' }}
        >
          원인은 <span className="text-brand">내장지방!!</span>
        </h2>

        <p className="text-gray-800 text-base md:text-xl lg:text-[35px] leading-relaxed max-w-3xl mx-auto mb-8" style={{ letterSpacing: '-0.05em' }}>
          뱃살은 단순히 지방의 증가만을 의미하는 것이 아니라 내장 기능,<br className="hidden md:block" />
          신진대사 저하를 의미하며 이전보다 뱃살이 증가한 것은<br className="hidden md:block" />
          건강의 이상신호를 의미합니다. 특히 중년층의 뱃살은 고혈압, 당뇨,<br className="hidden md:block" />
          고지혈증 등 대사성 질환의 원인이 됩니다.
        </p>

        <p className="text-base md:text-xl lg:text-[35px] leading-relaxed max-w-3xl mx-auto mb-12" style={{ letterSpacing: '-0.05em' }}>
          건강하기 위해서는 <strong className="text-brand">반드시 뱃살을 제거</strong>해야 하며<br className="hidden md:block" />
          배가 불룩한 중년이 배가 나온 중년보다 더 건강하다고 볼 수 없습니다.
        </p>

        {/* Waist criteria card */}
        <div className="bg-white rounded-full shadow-xl py-6 px-6 md:px-12 flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
          {/* M */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#4C5EBC] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-3xl md:text-5xl">M</span>
            </div>
            <div className="text-left">
              <p className="text-[#2f2f2f] text-sm md:text-base font-normal">허리둘레</p>
              <p className="text-black font-normal text-xl md:text-3xl">90cm 이상</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-20 bg-gray-200" />
          {/* W */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#FE772E] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-3xl md:text-5xl">W</span>
            </div>
            <div className="text-left">
              <p className="text-[#2f2f2f] text-sm md:text-base font-normal">허리둘레</p>
              <p className="text-black font-normal text-xl md:text-3xl">85cm 이상</p>
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
          className="font-paperlogy text-center text-4xl md:text-6xl lg:text-[70px] mb-6 leading-none"
          style={{ letterSpacing: '-0.05em' }}
        >
          <span className="text-brand font-extrabold">내장지방</span>은 무엇인가요?
        </h2>

        <p className="text-center text-gray-800 text-base md:text-xl lg:text-[35px] leading-relaxed max-w-4xl mx-auto mb-12" style={{ letterSpacing: '-0.05em' }}>
          내장지방은 복강 안 장기 사이 혹은 내방 벽에 존재하는 지방으로 주로 복부에 쌓이며,<br className="hidden md:block" />
          내장지방이 증가할 수록 배가 불룩하게 나오나 손으로 꼬집었을 때<br className="hidden md:block" />
          살집이 두껍게 잡히지 않습니다. 주로 중년층의 배둘레(허리둘레)증가의 원인이 됩니다.
        </p>

        {/* Comparison images */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Normal */}
          <div className="flex-1 relative">
            <div className="border border-[#313131] bg-white rounded-sm overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1512d496db8f58f0f6bd12f0b3afc4994c9cd986?width=1028"
                alt="내장지방 정상"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="bg-[#313131] text-white text-center py-3 text-lg md:text-2xl">
                내장지방 정상
              </div>
            </div>
            {/* Labels */}
            <div className="flex justify-around mt-3 text-sm md:text-base text-gray-600">
              <span>피하지방 ●</span>
              <span>● 내장지방</span>
            </div>
          </div>

          {/* Excessive */}
          <div className="flex-1 relative">
            <div className="border-2 border-brand bg-white rounded-sm overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b1a5ac3eb77afd5e2c51c9c619e97792128178bc?width=1062"
                alt="내장지방 과다"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="bg-brand text-white text-center py-3 text-lg md:text-2xl">
                내장지방 과다
              </div>
            </div>
            <div className="flex justify-around mt-3 text-sm md:text-base text-gray-600">
              <span>피하지방 ●</span>
              <span>● 내장지방</span>
            </div>
          </div>
        </div>

        {/* Bottom info card */}
        <div className="rounded-2xl bg-[#F0F2E7] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl md:text-4xl">2cm</span>
                <span className="text-white text-lg md:text-2xl">이하</span>
              </div>
              <span className="text-black text-xl md:text-3xl">내장지방</span>
            </div>
            <div className="hidden md:block text-3xl text-gray-400 mx-4">→</div>
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl md:text-4xl">2cm</span>
                <span className="text-white text-lg md:text-2xl">이상</span>
              </div>
              <span className="text-black text-xl md:text-3xl">피하지방↑</span>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-base md:text-xl lg:text-[35px] leading-relaxed mt-10 max-w-4xl mx-auto" style={{ letterSpacing: '-0.05em' }}>
          내장지방의 증가는 혈액 내 지질 수치의 증가로 이어져<br className="hidden md:block" />
          <strong className="text-brand">콜레스테롤 혈증→동맥경화→ 고혈압→뇌혈류장애, 심장혈관진환으로<br className="hidden md:block" />
          진행할 수 있어</strong> 복강 내 여유 공간을 감소시켜<br className="hidden md:block" />
          혈류-림프순환 장애와 위장관 운동성 저하를 유발하게 됩니다.
        </p>
      </div>
    </section>
  );
}

/* ────────────────── VISCERAL FAT CAUSES ────────────────── */
type CauseItem = {
  label: string;
  img: string;
};

function ViscFatCausesSection() {
  const causes: CauseItem[] = [
    {
      label: '과식',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/310d7f7a64ade38fb746489ddcb1767f28ba7361?width=820',
    },
    {
      label: '야식',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/b810a99f629f8c70b338eee46a8bf6fe3ae8f773?width=556',
    },
    {
      label: '음주',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/893ef2060a4ecf4a40c50f3d1dfda9ee12048e5a?width=384',
    },
    {
      label: '갱년기',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/00805b00372daddcee4a43786e435fd48958abc3?width=506',
    },
  ];

  return (
    <section className="bg-[#F8F8F8] py-16 md:py-20 lg:py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="font-paperlogy text-4xl md:text-6xl lg:text-[70px] mb-12 leading-none"
          style={{ letterSpacing: '-0.05em' }}
        >
          내장지방은 <span className="text-brand font-extrabold">왜 생기는 걸까요?</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {causes.map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-3">
              <div className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-brand-light overflow-hidden flex items-center justify-center">
                <img
                  src={c.img}
                  alt={c.label}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="bg-brand text-white rounded-full px-8 py-2 text-lg md:text-2xl font-semibold">
                {c.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-base md:text-xl lg:text-[35px]" style={{ letterSpacing: '-0.05em' }}>
          그 외 흡연과 비활동성도 그렇지 않지 않은 성인보다 1.2~1.3배 유병율을 올리게 됩니다.
        </p>
      </div>
    </section>
  );
}

/* ────────────────── ABDOMINAL COMPARISON ────────────────── */
function AbdominalComparisonSection() {
  return (
    <section className="bg-brand-light py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="font-paperlogy text-center text-4xl md:text-6xl lg:text-[70px] mb-12 leading-tight"
          style={{ letterSpacing: '-0.05em' }}
        >
          건강한 사람과 내장비만인의 <span className="text-brand font-extrabold">복강비교</span>
        </h2>

        <div className="flex flex-col gap-8">
          {/* Healthy */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="inline-block bg-black text-white rounded-full px-6 py-2 text-lg md:text-2xl font-bold mb-6">
                  건강한 사람의 복강
                </div>
                <p className="text-gray-800 text-base md:text-xl lg:text-[35px] leading-relaxed" style={{ letterSpacing: '-0.05em' }}>
                  식도 위 소장 대장 등의 장기들은<br />
                  장기 안이 음식물로 인해 가득차 있을수록<br />
                  불편하고 기능이 떨어지며, 장기 안이<br />
                  비어있을수록 장기의 운동성이 활발해져<br />
                  효율적으로 내장지방을 연소하고<br />
                  복강 내 혈액-림프 흐름이 원활해집니다.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c062550867c5856d001334ae031e703128edf0b9?width=1374"
                  alt="건강한 사람의 복강"
                  className="w-full h-64 md:h-80 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Obese */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="inline-block bg-brand text-white rounded-full px-6 py-2 text-lg md:text-2xl font-bold mb-6">
                  내장비만인의 복강
                </div>
                <p className="text-gray-800 text-base md:text-xl lg:text-[35px] leading-relaxed mb-6" style={{ letterSpacing: '-0.05em' }}>
                  처리되지 못한 대사산물의 축적으로 혈액이<br />
                  탁해지고 흐름이 나빠져서 혈액 내 염증<br />
                  수치 증가, 혈중 지질의 증가로 세포, 조직,<br />
                  장기의 기능 저하되어 각종 질병이 발생
                </p>

                {/* Organ effects */}
                <div className="bg-[#F6F6F6] rounded-xl p-5 space-y-3">
                  {[
                    { organ: '간', effect: '과음 과식으로 인한 간의 울혈 현상' },
                    { organ: '심장', effect: '심장의 부담 증가로 혈압 맥박 수 증가' },
                    { organ: '위', effect: '과도한 위 근육 사용으로 위벽이 붓고 단단해짐' },
                    { organ: '복강', effect: '내장지방의 증가로 인해 복강 내 공간 감소로 혈류, 림프 순환장애로 인해 복강 내 부종 발생' },
                    { organ: '장', effect: '장운동 감소로 인한 음식물 독소의 처리속도 지연으로 부패 증가하여 복부 내 가스 생성이 늘어나 복부 팽만감이 생기고 배변 활동도 감소' },
                  ].map((item) => (
                    <div key={item.organ} className="flex gap-3">
                      <span className="flex-shrink-0 mt-1">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><circle cx="4.5" cy="4.5" r="4.5" fill="#8BA612"/></svg>
                      </span>
                      <p className="text-sm md:text-base lg:text-[28px] leading-relaxed" style={{ letterSpacing: '-0.04em' }}>
                        <strong className="font-semibold">{item.organ}</strong>　{item.effect}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/54b163159a7c673de796efd0d645f99f67092a8d?width=1324"
                  alt="내장비만인의 복강"
                  className="w-full h-64 md:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── AGING BELLY ────────────────── */
const symptoms = [
  { num: '1', title: '뇌혈류 감소', detail: '두중감, 두통, 현기증' },
  { num: '2', title: '관상동맥순환 저하', detail: '가슴 답답함, 상열감, 상기감, 두근거림, 숨참' },
  { num: '3', title: '신장혈류감소', detail: '소변량 감소, 부종' },
  { num: '4', title: '위장운동성저하와 혈류정체', detail: '위 부위 팽만감, 식후 답답함' },
  { num: '5', title: '근육혈류량 감소', detail: '근피로도 증가, 팔다리가 쥐나고 저리는 증상, 근육뭉침, 수족냉증' },
  { num: '6', title: '피부혈류 감소', detail: '피부 건조, 색소침착, 잔주름, 다크서클 등' },
];

function AgingBellySection() {
  return (
    <section className="relative bg-black overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Blurred bg */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/afcf69895a6e59dc4f2700844e8f649b1c656b2d?width=3304"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-md pointer-events-none select-none"
      />
      {/* Side image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/180871986763f8969f249e6b0497484938fef0a0?width=3331"
        alt=""
        className="absolute left-0 top-0 h-full w-1/2 object-cover object-right opacity-70 pointer-events-none select-none"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 100%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Text block */}
          <div className="flex-1 lg:pl-8">
            <div className="flex justify-center lg:justify-start mb-6">
              <h2
                className="font-paperlogy text-center lg:text-left text-4xl md:text-5xl lg:text-[70px] leading-tight"
                style={{ letterSpacing: '-0.05em' }}
              >
                <span className="text-white">나이 들수록 </span>
                <span className="text-brand font-extrabold">뱃살이 늘어나는 이유</span>
              </h2>
            </div>
            <p className="text-white text-base md:text-xl lg:text-[40px] font-medium text-center lg:text-left mb-4" style={{ letterSpacing: '-0.05em' }}>
              단순 지방이 아니라 소화기계 과부하로 시작된 전신 기능 저하입니다.
            </p>
            <p className="text-white text-sm md:text-base lg:text-[35px] leading-relaxed text-center lg:text-left mb-8" style={{ letterSpacing: '-0.05em' }}>
              공복 상태이거나 소화기능이 원만할 때보다 과식 시<br className="hidden md:block" />
              소화기계 쪽의 혈류유입량이 35~40%까지 증가되면서{' '}
              <strong className="text-brand">다른 주요 장기와<br className="hidden md:block" />
              말초부위로의 혈류가 감소되면서 전신 불편 증상이 유발할 수 있습니다.</strong>
            </p>

            {/* DOWN arrow + label */}
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-white text-base md:text-2xl lg:text-[50px]">과식 시<br /><strong>소화기계 제외<br />나머지 기능</strong></p>
              </div>
              <div className="text-brand font-extrabold text-4xl md:text-6xl lg:text-[80px]" style={{ letterSpacing: '-0.1em' }}>
                DOWN↓
              </div>
            </div>
          </div>

          {/* Symptoms list */}
          <div className="flex-1 space-y-5">
            {symptoms.map((s) => (
              <div key={s.num} className="flex gap-4">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-brand flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-base md:text-lg">{s.num}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-base md:text-xl lg:text-[33px]" style={{ letterSpacing: '-0.05em' }}>{s.title}</p>
                  <p className="text-white text-sm md:text-base lg:text-[30px]" style={{ letterSpacing: '-0.04em' }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── COMORBIDITY ────────────────── */
type Disease = {
  name: string;
  rate: string;
  svg: React.ReactNode;
};

function ComorbiditySection() {
  const diseases: Disease[] = [
    {
      name: '대사증후군',
      rate: '+4.2배',
      svg: (
        <svg width="80" height="80" viewBox="0 0 243 243" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <path d="M146.902 86.6052C150.568 79.7958 152.329 71.253 152.329 62.1702C152.329 50.2794 148.802 22.6152 121.5 22.6152C94.1976 22.6152 90.6714 50.274 90.6714 62.1702C90.6714 71.2584 92.4318 79.7958 96.0984 86.6052C70.3458 94.5432 37.3032 112.849 33.1938 174.809C32.076 191.695 36.5796 204.935 45.2466 210.233C47.3688 211.529 50.2308 212.636 53.8164 212.636C56.8998 212.636 60.5232 211.81 64.6704 209.59C76.3344 219.272 98.0964 220.385 121.5 220.385C144.904 220.385 166.666 219.272 178.33 209.59C182.477 211.81 186.1 212.636 189.184 212.636C192.769 212.636 195.631 211.529 197.753 210.233C206.415 204.935 210.919 191.695 209.801 174.809C205.697 112.849 172.649 94.5432 146.896 86.6052H146.902Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: '당뇨병',
      rate: '+2.1배',
      svg: (
        <svg width="80" height="80" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <path d="M75 15C81 15 86 17 90 20C94 23 97 27 99 32C103 41 104 52 104 59C104 68 101 77 96 84C95 85 94 86 93 87L94 92C95 97 96 100 98 102C100 104 103 106 108 108C110 109 112 110 115 111C124 115 132 120 138 132C143 143 146 158 147 182L147 183C148 191 147 198 145 204C143 210 140 214 136 217L135 218H135C131 220 127 219 123 217L120 216C117 219 113 221 108 223C97 227 82 229 75 229C68 229 53 227 42 223C37 221 33 219 30 216L27 217C22 220 17 220 13 217C9 214 6 210 4 204C2 198 1 191 2 183L2 182C3 160 6 144 12 132C18 120 26 115 35 111C38 110 40 109 42 108C47 106 50 104 52 102C54 100 55 97 56 92L57 87C56 86 55 85 54 84C49 77 46 68 46 59C46 52 47 41 51 32C53 27 56 23 60 20C64 17 69 15 75 15Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: '고혈압',
      rate: '+2배',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <rect x="10" y="30" width="60" height="5" rx="2" fill="white"/>
          <rect x="10" y="42" width="60" height="5" rx="2" fill="white"/>
          <circle cx="40" cy="20" r="10" stroke="white" strokeWidth="3" fill="none"/>
          <circle cx="40" cy="60" r="10" stroke="white" strokeWidth="3" fill="none"/>
        </svg>
      ),
    },
    {
      name: '골관절염',
      rate: '+1.6배',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <rect x="30" y="5" width="20" height="30" rx="10" fill="white"/>
          <rect x="30" y="45" width="20" height="30" rx="10" fill="white"/>
          <rect x="28" y="33" width="24" height="14" rx="4" fill="white" opacity="0.7"/>
        </svg>
      ),
    },
    {
      name: '만성콩팥병',
      rate: '+1.5배',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <path d="M25 15C15 15 10 25 10 35C10 50 20 60 30 65L35 70L40 65C50 60 70 50 70 35C70 25 65 15 55 15C50 15 45 18 40 25C35 18 30 15 25 15Z" fill="white" opacity="0.9"/>
        </svg>
      ),
    },
    {
      name: '심혈관질환',
      rate: '+1.4배',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <path d="M20 30C20 22 26 16 34 16C38 16 42 18 45 22C48 18 52 16 56 16C64 16 70 22 70 30C70 45 55 55 45 62L45 62C42 64 48 64 45 62C35 55 20 45 20 30Z" fill="white"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-brand py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title badge */}
        <div className="flex justify-center mb-10">
          <div className="bg-black text-white px-8 py-3 rounded-full text-lg md:text-2xl lg:text-[35px] font-bold">
            복부비만 동반질환
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {diseases.map((d) => (
            <div key={d.name} className="flex items-center gap-5 p-4">
              {d.svg}
              <div>
                <p className="text-white text-base md:text-xl lg:text-[30px]">{d.name}</p>
                <p className="text-white font-bold text-2xl md:text-4xl lg:text-[80px] leading-none" style={{ letterSpacing: '-0.05em' }}>{d.rate}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center">
          <p className="text-white text-base md:text-xl lg:text-[35px] mb-3" style={{ letterSpacing: '-0.05em' }}>
            벳살 감소는 위장기능을 개선하고 내장지방을 줄여
          </p>
          <p className="text-white font-bold text-2xl md:text-4xl lg:text-[70px]" style={{ letterSpacing: '-0.05em' }}>
            질병 예방과 건강관리에 도움을 줍니다.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── MEDICINE ────────────────── */
type Medicine = {
  name: string;
  img: string;
  description: string;
  tags: string[];
};

function MedicineSection() {
  const medicines: Medicine[] = [
    {
      name: '소체환',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/1cbc3950bbec4e6138b661ac1cde48bd9b3b6b18?width=712',
      description: '습담(濕痰)이 위장에 정체되어 일어난 팽만감을 치료합니다.',
      tags: ['식후도포감', '소화불량', '위식도 역류질환', '신경성위염'],
    },
    {
      name: '담적환',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/65ffa2ba7085d65617a8380c39119d1cf3f36d6d?width=688',
      description: '체내의 특히 위장관 쪽의 비정상적인 생리물질을 제거하는 데 처방됩니다.',
      tags: ['오심', '구토', '어지럼증', '두근거림'],
    },
    {
      name: '보혈환',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/a84ed926d16c33950432ad59ce7a6100d9dd15a7?width=738',
      description: '혈허로 인한 월경불순 · 불임 · 갱년기 증상을 치료합니다.',
      tags: ['빈혈', '저혈압', '수족저림'],
    },
    {
      name: '수독환',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/b679f581a98932655b25a070f1882f3a12a113fe?width=740',
      description: '몸 안의 수독(水毒)을 끌어내고 몸이 붓는 부종을 치료하는 데 처방됩니다.',
      tags: ['부종', '현기증', '소변이 시원치 않는 증상'],
    },
    {
      name: '가미소요산',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/75908fd1991543f8f9de2f82c2b50cb825d3cd47?width=682',
      description: '울화(火)가 쌓여 나타나는 스트레스성 증상을 치료합니다.',
      tags: ['불면', '두근거림', '스트레스 완화', '근긴장 해소'],
    },
    {
      name: '어혈환',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/af61c8e0ace9dda24c4dcf0c4ab55f4d6652567f?width=692',
      description: '관절 주위의 원활한 혈액 흐름을 돕고, 어혈을 제거하여 연골 손상을 예방하고 만성 통증 완화에 좋습니다.',
      tags: ['수족저림', '요통', '슬통', '퇴행성관절염'],
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="font-paperlogy text-center text-3xl md:text-5xl lg:text-[70px] mb-12 leading-tight"
          style={{ letterSpacing: '-0.05em' }}
        >
          내장지방을 빼기 위한<br />
          <span className="text-brand font-extrabold">특별한 노하우를 담은 치료한약</span>
        </h2>

        <div className="space-y-10">
          {medicines.map((m) => (
            <div key={m.name} className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Medicine image */}
              <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              {/* Info */}
              <div className="flex-1">
                {/* Name with green bar */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-12 bg-brand flex-shrink-0" />
                  <h3 className="font-bold text-2xl md:text-4xl lg:text-[50px]" style={{ letterSpacing: '-0.05em' }}>{m.name}</h3>
                </div>
                <p className="text-gray-700 text-base md:text-xl lg:text-[35px] mb-4" style={{ letterSpacing: '-0.05em' }}>{m.description}</p>
                {/* Tags */}
                <div className="border-2 border-dashed border-brand rounded-xl px-4 py-3 flex flex-wrap gap-4">
                  {m.tags.map((tag) => (
                    <span key={tag} className="text-gray-800 text-sm md:text-base lg:text-[30px]">ㆍ{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── ABDOMINAL EXAM ────────────────── */
function AbdominalExamSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="font-paperlogy text-center text-3xl md:text-5xl lg:text-[70px] mb-12 leading-tight"
          style={{ letterSpacing: '-0.05em' }}
        >
          장기별 불편 증상에 따른<br />
          <span className="text-brand font-extrabold">복부 진찰법</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Body diagram */}
          <div className="flex-shrink-0 w-full lg:w-72">
            <div className="bg-[#D9D9D9] rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/222d0bcbf91925a69b51843e3525aedaaa87beaf?width=1162"
                alt="복부 진찰법 다이어그램"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Organ details */}
          <div className="flex-1 space-y-6">
            {[
              {
                organ: '간',
                location: '오른쪽 갈비뼈 밑',
                tags: ['#간열', '#어혈'],
                symptoms: ['간기능저하', '간피로'],
              },
              {
                organ: '명치부근',
                location: '',
                tags: ['#위열'],
                symptoms: ['역류성식도염', '신경성위염'],
              },
              {
                organ: '위',
                location: '명치와 배꼽사이 중간',
                tags: ['#식적'],
                symptoms: ['기능성, 운동성 소화불량증'],
              },
              {
                organ: '소장',
                location: '배꼽주위',
                tags: ['#담적', '#습담'],
                symptoms: ['장운동성저하', '장명', '복부팽만감', '가스'],
              },
              {
                organ: '대장',
                location: '우, 좌측 아랫배',
                tags: [],
                symptoms: ['변비'],
              },
              {
                organ: '자궁',
                location: '아랫배',
                tags: ['#자궁냉냉', '#어혈'],
                symptoms: ['생리불순', '생리통', '냉대하'],
              },
            ].map((item) => (
              <div key={item.organ} className="border-l-2 border-brand pl-5">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-brand font-bold text-xl md:text-2xl lg:text-[35px]">{item.organ}</span>
                  {item.location && (
                    <span className="text-gray-400 text-sm md:text-base">{item.location}</span>
                  )}
                  {item.tags.map((tag) => (
                    <span key={tag} className="bg-brand text-white text-xs px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {item.symptoms.map((s) => (
                    <span key={s} className="text-gray-800 text-sm md:text-base lg:text-[25px]">ㆍ{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── WHY EXAM IMPORTANT ────────────────── */
function WhyExamImportantSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title badge */}
        <div className="flex justify-center mb-10">
          <div className="bg-brand text-white px-8 py-3 rounded-full text-lg md:text-2xl font-bold">
            복부진찰법이 <span className="font-bold">중요한 이유</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Text content */}
          <div className="flex-1 space-y-6">
            <p className="text-gray-800 text-base md:text-xl lg:text-[35px] leading-relaxed" style={{ letterSpacing: '-0.05em' }}>
              복부는 흉부와 달리 흉곽으로 덮여있지 않아<br className="hidden md:block" />
              복부 안의 장기를 촉진하여 압통처의 반응, 종양유무,<br className="hidden md:block" />
              장부의 건강 상태 등을 알아볼 수 있습니다.
            </p>
            <p className="text-gray-800 text-base md:text-xl lg:text-[35px] leading-relaxed" style={{ letterSpacing: '-0.05em' }}>
              정상적인 경우 일정한 세기로<br className="hidden md:block" />
              눌렀을 때 배가 많이 아프다던지, 단단하던지, 뭉쳤다던지,<br className="hidden md:block" />
              차가운 느낌이 들면 거기 위치해 있는 장기가<br className="hidden md:block" />
              편하지 않거나 활동성이 떨어져 있거나 해당 부위로<br className="hidden md:block" />
              혈액-림프 흐름이 저하되어 있을 확률이 많습니다.
            </p>
            <p className="text-gray-800 text-base md:text-xl lg:text-[35px] leading-relaxed" style={{ letterSpacing: '-0.05em' }}>
              즉, 배가 편하지 않은 사람이 장기의 피로도가<br className="hidden md:block" />
              쌓여있고 장기주변의 혈류가 좋지 못해서<br className="hidden md:block" />
              산소포화도가 낮고 염증 물질은 많아서 피가 끈끈해서<br className="hidden md:block" />
              머리와 팔다리의 혈행도 나빠져서 얼굴과<br className="hidden md:block" />
              손발이 잘 붓고 차고 저리다는 증세를 호소하게 됩니다.
            </p>
          </div>

          {/* Doctor image */}
          <div className="flex-shrink-0 w-full lg:w-80 xl:w-96">
            <div className="bg-[#D9D9D9] rounded-xl overflow-hidden aspect-[2/3]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ea8303a33237a5b18cb5eb1d04940c3a1c423300?width=1354"
                alt="복부 진찰"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Clinical significance card */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8 md:p-10">
          <div className="flex justify-center mb-8">
            <div className="bg-brand text-white px-8 py-3 rounded-full text-lg md:text-2xl font-bold">
              복부의 <span className="font-bold">임상적 의미</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                num: '1',
                title: '복부는 동맥혈과 정맥혈의 교류처',
                detail: '복부의 세로중심선에 해당하는 부분이 복부대동맥 근처로 심장에서 나간 혈액이 뇌 혹은 복부 중요 장기로의 공급 상황을 반영하기 때문',
              },
              { num: '2', title: '소화기계 특히 소장, 간 등이 면역 기능과 관련', detail: '' },
              { num: '3', title: '복부는 오장육부의 집결지', detail: '' },
              { num: '4', title: '장벽의 평활근의 이완과 수축은 내부 장기의 건강 상태를 반영', detail: '' },
            ].map((item) => (
              <div key={item.num}>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 bg-brand flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.num}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-base md:text-xl lg:text-[35px]" style={{ letterSpacing: '-0.05em' }}>{item.title}</p>
                </div>
                {item.detail && (
                  <p className="ml-12 text-gray-600 text-sm md:text-base lg:text-[25px]" style={{ letterSpacing: '-0.04em' }}>{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
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
        src="https://api.builder.io/api/v1/image/assets/TEMP/c23dc8f434f52e963a4d0068e65c3ca1430534e9?width=3928"
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-30 pointer-events-none select-none"
      />
      <div className="relative text-center">
        <h2 className="text-white font-bold text-4xl md:text-6xl lg:text-[70px] mb-4" style={{ letterSpacing: '-0.05em' }}>
          진한의원 비만
        </h2>
        <p className="text-white text-base md:text-xl lg:text-[35px]" style={{ letterSpacing: '-0.05em' }}>
          더 많은 사례자를 보시려면 홈페이지에서 확인해주세요!
        </p>
      </div>
    </footer>
  );
}
