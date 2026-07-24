import Image from 'next/image';

export default function SevereObesityDietPage() {
  return (
    <main className="w-full bg-white font-sans text-gray-800">
      <div className="mx-auto w-full max-w-[1000px] overflow-hidden pb-16 md:pb-24">
        {/* 1. 최상단 헤더 (detox 페이지 스타일 동기화) */}
        <header className="py-4 border-b border-dashed border-gray-300 mb-2 px-4 md:px-0">
          <h1 className="text-3xl md:text-[38px] font-serif text-gray-900 tracking-tighter leading-none font-normal">고도 비만</h1>
        </header>

        <HeroSection />
        <FiveCoreSection />
        <IntroSection />
        <CausesSection />
        <NecessitySection />
        <ViciousCycleSection />
        <ProgramHeaderSection />
        <ProgramStep1Section />
        <ProgramStep2Section />
        <ProgramStep3Section />
        <ProgramStep4Section />
        <FooterBannerSection />
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-[672px_1fr] md:h-[365px] overflow-hidden bg-[#433124] text-white mb-8">
      <div className="relative w-full h-[250px] md:h-full overflow-hidden">
        <Image 
          src="/images/personal/gd_section1.jpg" 
          alt="고도비만 다이어트 상담" 
          fill 
          className="object-cover object-left"
          priority
        />
      </div>
      <div className="flex flex-col justify-center p-6 md:py-8 md:px-[37px]">
        <p className="text-sm md:text-[15px] text-[#cfc5bd] tracking-tight mb-2">체질개선과 원인 치료!</p>
        <h2 className="w-full text-3xl md:text-[55px] leading-[0.95] mb-4 tracking-tight">
          <div className="flex justify-between w-[252px] text-[#ffec55]"><span>고도</span><span> </span></div>
          <b className="text-white font-bold block mt-3 text-[55px] tracking-[14px]">비만</b>
        </h2>
        <p className="text-xs md:text-[14px] text-gray-200 leading-[1.8] break-keep font-light opacity-90 w-full">
          고도비만은 유전적 요인과 여러 질환이 관련되므로 일반 다이어트와는 다르게 접근해야 합니다. 장시간 진행되기 때문에 오랫동안 복용할 수 있는 '안전한 약이어야 하며' 근본적인 생활습관 개선과 동반질병 치료가 필수적입니다.
        </p>
      </div>
    </section>
  );
}

function FiveCoreSection() {
  return (
    <section className="relative w-full">
      {/* Title Area - 왼쪽 정렬 적용 */}
      <div className="relative z-10 w-full bg-white pt-10 md:pt-12 pb-4 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-6">
          <span className="text-6xl md:text-7xl font-bold text-[#fce8c0] leading-none">Jin</span>
          <span className="text-gray-600 text-lg md:text-xl font-serif">소중한 당신의 몸과 아름다운 당신의 몸매를 위한 건강한 다이어트</span>
        </div>
      </div>
      
      <div className="relative w-full h-[455px]">
        <Image
          src="/images/personal/gd_section2_1.jpg"
          alt="고도비만 다이어트 5가지 핵심"
          fill
          className="object-cover object-center block"
        />
        
        {/* Transparent overlay for SEO and Selectability */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-transparent selection:bg-[#ec6f68]/30 selection:text-white px-[12%] pt-[2%] md:pt-[4%] -mt-[155px]">
          <div className="text-center mb-[4%] md:mb-[6%] translate-y-[25px]">
            <h2 className="text-xs md:text-sm lg:text-base tracking-widest mb-1 md:mb-2">JIN DIET</h2>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-black">고도비만 다이어트 5가지 핵심</h3>
          </div>
          
          <div className="w-[70%] mx-auto grid grid-cols-5 gap-2 md:gap-6 lg:gap-10 text-[8px] md:text-xs lg:text-sm leading-normal md:leading-relaxed break-keep text-left">
            <div className="flex flex-col translate-x-[50px]">
              <h4 className="font-bold mb-2 md:mb-4 inline-block self-start text-[10px] md:text-[14px] lg:text-[16px]">체내 환경 개선</h4>
              <p>비정상적인 식욕의 원인인 과잉된 체내 노폐물과 독소를 제거하여 살을 빼기 위한 환경을 만듭니다.</p>
            </div>
            
            <div className="flex flex-col translate-x-[25px]">
              <h4 className="font-bold mb-2 md:mb-4 inline-block self-start text-[10px] md:text-[14px] lg:text-[16px]">위 용적 축소</h4>
              <p>잦은 과식과 폭식으로 위가 커지고 위벽이 단단하게 부어있는 상태가 지속되면 위의 운동 능력과 소화기능이 떨어져 먹어도 배가 부른 상태를 인지하기 어렵습니다. 이런 위의 용적을 줄이고 잘못된 식습관을 바로잡습니다.</p>
            </div>
            
            <div className="flex flex-col">
              <h4 className="font-bold mb-2 md:mb-4 inline-block self-start text-[10px] md:text-[14px] lg:text-[16px]">살이 찌는 원인 치료</h4>
              <p>비만이 된 원인을 진단합니다. 식적형, 어혈형, 담음형, 기허형, 칠정형 비만에 따라 살이 찔 수 밖에 없는 이유를 치료합니다.</p>
            </div>
            
            <div className="flex flex-col -translate-x-[25px]">
              <h4 className="font-bold mb-2 md:mb-4 inline-block self-start text-[10px] md:text-[14px] lg:text-[16px]">단계적인 체중감량</h4>
              <p>일정한 체중 감량 후 몸이 변화된 체중을 인지하고 익숙해지는 기간이 꼭 필요합니다. 감량의 폭이 큰 고도비만일수록 이런 감량기와 회복기의 체계적인 관리가 있어야 요요현상을 줄일 수 있습니다.</p>
            </div>
            
            <div className="flex flex-col -translate-x-[50px]">
              <h4 className="font-bold mb-2 md:mb-4 inline-block self-start text-[10px] md:text-[14px] lg:text-[16px]">생활습관 치료</h4>
              <p>고도비만 다이어트가 특히 힘든 이유가 생활 습관이 고쳐지지 않는 상태로 치료가 중단되는 경우가 대부분이기 때문입니다. 요요현상을 방지하기 위해서는 반드시 잘못된 식습관 치료와 생활습관 치료는 필요합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <div className="max-w-4xl mx-auto mb-12 flex flex-col items-center">
        <h3 
          className="text-3xl md:text-4xl text-gray-900 mb-8 leading-tight tracking-tight"
          style={{ fontFamily: "'THEFACESHOP INKLIPQUID', '더페이스샵 잉크립퀴드체', sans-serif" }}
        >
          "또 먹니? 그만 먹어!" "그걸 다 먹었어?" "먹고 바로 눕지마!"<br/>
          <span>매번 시도하는 다이어트 왜 나는 더 힘이 들까요?</span>
        </h3>
        {/* 요청사항 5번: 한방내과 전문의가 진단하는 고도비만은 질병입니다. > 48px */}
        <p className="text-3xl md:text-[48px] text-gray-800 flex flex-col items-center gap-0 leading-tight">
          <span className="font-normal">한방내과 전문의가 진단하는</span>
          <span className="text-gray-900 mt-1">
            <span className="font-bold">고도비만은 질병</span><span className="font-normal">입니다.</span>
          </span>
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto mb-12">
        <Image 
          src="/images/personal/gd_section3.jpg" 
          alt="고도비만 다이어트"
          width={900}
          height={600}
          className="w-full h-auto block"
        />
      </div>

      {/* 요청사항 5번: 고도 비만인들이 살 빼기 몇 배로 어려운 이유가 무엇일까요? > 23px */}
      <div className="max-w-4xl mx-auto mb-8">
        <h4 className="text-lg md:text-[23px] text-black font-normal text-center">
          <span className="bg-[#fff4b0] px-1">고도 비만인들이 살 빼기 몇 배로 어려운 이유가 무엇일까요?</span>
        </h4>
      </div>

      {/* 요청사항 5번: 고도비만이란~ > 20px / 고도비만은~ > 18px */}
      <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed break-keep mb-16 px-4 text-center">
        <p className="text-base md:text-[20px] font-semibold text-gray-800 mb-6">
          고도비만이란? 체질량지수(BMI)가 35이상이거나 30이상인데 관련 질환이 동반된 경우를 고도비만이라고 하며 대개로 감량해야 되는 몸무게가 20키로가 넘습니다.
        </p>
        <p className="text-sm md:text-[18px] text-gray-700 leading-relaxed">
          고도비만은 하나의 원인으로 발생하기보다 체질적 요인, 스트레스, 부적절한 식생활, 질병이나 약물 복용 등 다양한 원인이<br className="hidden md:block"/>
          복합적으로 작용하여 신체가 감당하기 어려운 수준으로 지방 량이 급격히 증가되어 나타납니다. 체중 조절 시스템도 이미<br className="hidden md:block"/>
          고장 나 있는 경우가 많고 단순히 지방의 증가로 그치는 것이 아니라 전신적이고 복합적인 문제를 동반합니다.<br className="hidden md:block"/>
          <strong className="bg-[#fff4b0] px-1 text-black font-medium">고도비만은 체중 감량도 중요하지만 고도비만을 유발하거나 악화시키는 원인을 치료하는 것이 가장 중요합니다.</strong><br className="hidden md:block"/>
          적게 먹고 운동을 한다고 다이어트의 전부는 아닙니다. 몸의 오장육부의 균형을 개선시켜 살이 찌는 근본 적인 이유를 찾아<br className="hidden md:block"/>
          치료하고 개선하는 것이 감량은 물론이고 요요현상을 줄이는 건강한 다이어트라고 시작이라고 할 수 있습니다.
        </p>
      </div>

      <div className="flex justify-center text-[22px] md:text-[24px] font-bold text-[#333333]">
        <div className="border-2 border-[#4b4b4b] rounded-full py-3 px-8 md:px-10 bg-white inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <div className="flex items-center gap-2">
            <span>현재 체중 - 표준 체중</span>
            <span className="text-[#A5C614] text-sm">▶</span>
            <span>20kg 이상</span>
          </div>
          <div className="flex items-center gap-2">
            <span>BMI (Body Mass Index)</span>
            <span className="text-[#A5C614] text-sm">▶</span>
            <span>30 이상</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[#A5C614] font-bold text-[20px]">(BMI가 35 이상이면 초고도 비만)</p>
    </section>
  );
}

function CausesSection() {
  return (
    /* 요청사항 6번: 고도비만의 유발원인 > 48px, 양옆 여백 확장, 소제목 > 22px, 각각의 설명 > 18px */
    <section className="py-20 bg-[#f0f9f0] text-center px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-[48px] font-bold text-gray-900 mb-12 tracking-tight">
        <span className="font-medium">고도비만의</span> 유발 원인
      </h2>
      
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-8 md:p-14 relative">
        {/* Dotted lines for 2x2 grid */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0 border-t-2 border-dotted border-gray-300 transform -translate-y-1/2"></div>
        <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-0 border-l-2 border-dotted border-gray-300 transform -translate-x-1/2"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-y-16 gap-x-12 relative z-10">
          {/* Cause 1 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-full bg-gray-100 mb-6 flex items-center justify-center overflow-hidden">
              <Image src="/images/personal/gd_section4_1.png" alt="유전적 요인" width={144} height={144} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl md:text-[22px] font-bold text-gray-900 mb-4">유전적 요인 (기허형)</h3>
            <div className="w-[95%]">
              <ul className="text-gray-700 text-sm md:text-[18px] text-left list-disc list-outside ml-[11px] space-y-0.5 leading-snug break-keep">
                <li>어릴 적부터 줄곧 통통한 체형이며, 먹는 것을 좋아 하나 움직이기를 싫어하는 경향.</li>
                <li>폐활량이 작고 지구력이 낮아 운동을 잘 못함.</li>
                <li>조금만 움직여도 숨이 차고 땀이 많이 남.</li>
              </ul>
            </div>
          </div>

          {/* Cause 2 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-full bg-gray-100 mb-6 flex items-center justify-center overflow-hidden">
              <Image src="/images/personal/gd_section4_2.png" alt="식이 요인" width={144} height={144} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl md:text-[22px] font-bold text-gray-900 mb-4">식이 요인 (식적형)</h3>
            <div className="w-[95%]">
              <ul className="text-gray-700 text-sm md:text-[18px] text-left list-disc list-outside ml-[21px] space-y-0.5 leading-snug break-keep">
                <li>탄수화물, 단순당류 등 GI지수가 높은 음식을 좋아함.</li>
                <li>칼로리가 높거나 살찌는 음식을 좋아함.</li>
                <li>불규칙하게 먹거나 한끼에 몰아먹는 경향.</li>
                <li>밥 먹는 속도가 남보다 빠르다.</li>
                <li>야식을 하지 않으면 밤에 잠이 오지 않는다.</li>
              </ul>
            </div>
          </div>

          {/* Cause 3 */}
          <div className="flex flex-col items-center relative top-[10px]">
            <div className="w-36 h-36 rounded-full bg-gray-100 mb-6 flex items-center justify-center overflow-hidden">
              <Image src="/images/personal/gd_section4_3.png" alt="질병적 요인" width={144} height={144} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl md:text-[22px] font-bold text-gray-900 mb-4">질병적 요인 (어혈·담음형)</h3>
            <div className="w-[95%]">
              <ul className="text-gray-700 text-sm md:text-[18px] text-left list-disc list-outside ml-[11px] space-y-0.5 leading-snug break-keep">
                <li>관절척추 및 부인과 질환의 수술 및 장기 입원</li>
                <li>갑상선 기능 저하.</li>
                <li>쿠싱 증후군.</li>
                <li>진통 소염제 및 스테로이드 장기 복용.</li>
              </ul>
            </div>
          </div>

          {/* Cause 4 */}
          <div className="flex flex-col items-center relative top-[10px]">
            <div className="w-36 h-36 rounded-full bg-gray-100 mb-6 flex items-center justify-center overflow-hidden">
              <Image src="/images/personal/gd_section4_4.png" alt="정신적 요인" width={144} height={144} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl md:text-[22px] font-bold text-gray-900 mb-4">정신적 요인 (칠정형)</h3>
            <div className="w-[95%]">
              <ul className="text-gray-700 text-sm md:text-[18px] text-left list-disc list-outside ml-[21px] space-y-0.5 leading-snug break-keep">
                <li>우울감 및 불안, 긴장으로 인한 스트레스성 폭식.</li>
                <li>무기력·심리적 위축으로 인한 활동량 감소.</li>
                <li>집에서 누워있거나 앉아있는 시간이 길다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NecessitySection() {
  return (
    /* 요청사항 7번 & 추가검토: [고도 비만 다이어트에] > 38px, [치료가 꼭 필요한 이유] > 48px, 내용 > 18px, 양옆 여백 확장 (px-8 md:px-16 lg:px-20) */
    <section className="py-24 bg-[#A5C614] text-center px-8 md:px-16 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-[38px] font-medium text-white mb-1 md:mb-1 tracking-tight">고도 비만 다이어트에</h2>
        <h2 className="text-3xl md:text-[48px] font-bold text-gray-900 mb-16 tracking-tight">치료가 꼭 필요한 이유</h2>
        
        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NecessityItem num="1" text="<span class='bg-[#fff4b0]'>높아진 체중의 set point</span><br/>와 <span class='bg-[#fff4b0]'>망가진 체중 조절</span><br/><span class='bg-[#fff4b0]'>시스템</span>" />
            <NecessityItem num="2" text="<span class='bg-[#fff4b0]'>늘어나버린 위 용적</span>으로<br/>웬만큼 많이 먹지<br/>않고서야 가지기 힘든<br/>포만감" />
            <NecessityItem num="3" text="<span class='bg-[#fff4b0]'>체내 독소와 장내 유해균</span><br/><span class='bg-[#fff4b0]'>(비만균) 증가</span>로 식욕<br/>자극 호르몬 (그렐린)<br/>분비 상승" />
          </div>
          
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <NecessityItem num="4" text="커진 체구에 비해 저하된<br/>체력으로 인한 <span class='bg-[#fff4b0]'>만성 피로</span>" />
            <NecessityItem num="5" text="혈당의 기복이 커서<br/><span class='bg-[#fff4b0]'>허기를 많이 느끼고</span><br/><span class='bg-[#fff4b0]'>인슐린 저항성 증가</span>로<br/>대사 장애 유발" />
            <NecessityItem num="6" text="혈액이 끈적하고 흐름이<br/>나빠져 혈액, 림프 순환<br/>장애로 <span class='bg-[#fff4b0]'>부종 증가</span>" />
            <NecessityItem num="7" text="오장 육부의 만성적 피로와<br/>신진대사, 순환, 배설 기능<br/>저하로 <span class='bg-[#fff4b0]'>더욱 살빼기 어려운</span><br/><span class='bg-[#fff4b0]'>체질로 고착화</span>" />
          </div>
        </div>
      </div>
    </section>
  );
}
function NecessityItem({num, text}: {num:string, text:string}) {
  return (
    <div className="bg-white px-2 py-10 shadow-sm flex flex-col items-center justify-start h-full">
       <div className="text-[26px] font-medium text-gray-800 mb-4">{num}</div>
       <div className="w-10 border-b-2 border-[#A5C614] mb-6"></div>
       <p className="text-gray-800 text-sm md:text-[18px] leading-[1.6] break-keep" dangerouslySetInnerHTML={{__html: text}}></p>
    </div>
  );
}

function ViciousCycleSection() {
  return (
    /* 요청사항 8번 & 추가검토: [고도비만이 불러오는 악영향] > 48px, 소제목 > 20px, 설명 > 18px, 양옆 여백 확장 (px-8 md:px-16 lg:px-24), 카드 간격 축소 (gap-6) */
    <section className="py-20 bg-[#f0f9f0] text-center px-8 md:px-16 lg:px-24 border-b border-gray-200">
      <h2 className="text-3xl md:text-[48px] font-bold text-gray-900 mb-16 tracking-tight">
        <span className="font-medium">고도비만이 불러오는</span> 악영향
      </h2>
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1 flex flex-col items-center w-full">
          <div className="w-full max-w-[260px] bg-white rounded-2xl flex flex-col overflow-hidden mb-6">
            <div className="relative h-48 w-full pt-4 px-4 flex items-end justify-center">
               <div className="relative w-full h-full">
                 <Image src="/images/personal/gd_section5_1.png" alt="심리적 영향" fill className="object-contain object-bottom scale-110 transform origin-bottom translate-y-[11px]" />
               </div>
            </div>
            <div className="bg-[#A5C614] text-white py-2 w-full text-center font-bold text-lg md:text-[20px]">
              심리적 영향
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-[18px] leading-relaxed break-keep px-2">우울감, 분노, 대인 기피, 자신감 상실, 심리적 위축 불면 등 수면장애, 무력감, 낮은 자존감</p>
        </div>

        <div className="flex-1 flex flex-col items-center w-full">
          <div className="w-full max-w-[260px] bg-white rounded-2xl flex flex-col overflow-hidden mb-6">
            <div className="relative h-48 w-full pt-4 px-4 flex items-end justify-center">
               <div className="relative w-full h-full">
                 <Image src="/images/personal/gd_section5_2_v2.png" alt="내과적 영향" fill className="object-contain object-bottom scale-110 transform origin-bottom translate-y-[15px]" />
               </div>
            </div>
            <div className="bg-[#A5C614] text-white py-2 w-full text-center font-bold text-lg md:text-[20px]">
              내과적 영향
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-[18px] leading-relaxed break-keep px-2">역류성 식도염, 소화불량, 고혈압, 이상지질혈증, 당뇨, 심장질환, 생리불순 및 다낭성 난소증후군, 성기능 감퇴, 성조숙증</p>
        </div>

        <div className="flex-1 flex flex-col items-center w-full">
          <div className="w-full max-w-[260px] bg-white rounded-2xl flex flex-col overflow-hidden mb-6">
            <div className="relative h-48 w-full pt-4 px-4 flex items-end justify-center">
               <div className="relative w-full h-full">
                 <Image src="/images/personal/gd_section5_3.png" alt="외과적 영향" fill className="object-contain object-bottom" />
               </div>
            </div>
            <div className="bg-[#A5C614] text-white py-2 w-full text-center font-bold text-lg md:text-[20px]">
              외과적 영향
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-[18px] leading-relaxed break-keep px-2">척추, 관절의 손상과 퇴행성 변화 촉진, 체형의 변화</p>
        </div>
      </div>
    </section>
  );
}

function ProgramHeaderSection() {
  return (
    <section className="relative w-full py-16 text-center text-white overflow-hidden bg-[#3a332d]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/personal/gd_section7.png"
          alt="다이어트 프로그램 배경"
          fill
          className="object-cover object-left scale-110 -translate-x-[250px]"
        />
        <div className="absolute inset-0 bg-[#3a332d]/90"></div>
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl md:text-[38px] font-medium text-white mb-1 md:mb-1 tracking-tight">진한의원 단계별</h2>
        <h1 className="text-3xl md:text-[48px] font-bold text-white mb-16 tracking-tight leading-tight">
          <span className="text-[#A5C614] text-4xl md:text-[48px]">고도비만</span><br/> 
          <span className="text-2xl md:text-[38px] font-medium">다이어트 프로그램</span>
        </h1>
      
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row px-4 md:px-8 justify-center drop-shadow-2xl">
          <div className="relative flex-1 bg-[#f0ece1] text-gray-900 flex flex-col items-center justify-center pt-8 pb-12 md:py-10 md:pl-6 md:pr-10 [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_24px),50%_100%,0_calc(100%_-_24px))] md:[clip-path:polygon(0_0,calc(100%_-_24px)_0,100%_50%,calc(100%_-_24px)_100%,0_100%)]">
             <p className="font-light text-xl md:text-2xl mb-1">1단계</p>
             <p className="text-sm md:text-[18px] font-medium leading-tight mt-1">꺼져있는 지방대사<br/>스위치를 켜자.</p>
          </div>
          <div className="relative flex-1 bg-[#fcd147] text-gray-900 flex flex-col items-center justify-center pt-12 pb-12 md:py-10 md:pl-12 md:pr-10 -mt-[20px] md:mt-0 md:-ml-[20px] [clip-path:polygon(0_0,50%_24px,100%_0,100%_calc(100%_-_24px),50%_100%,0_calc(100%_-_24px))] md:[clip-path:polygon(0_0,calc(100%_-_24px)_0,100%_50%,calc(100%_-_24px)_100%,0_100%,24px_50%)]">
             <p className="font-light text-xl md:text-2xl mb-1">2단계</p>
             <p className="text-sm md:text-[18px] font-medium leading-tight mt-1">살이 찌는 원인부터<br/>치료하자.</p>
          </div>
          <div className="relative flex-1 bg-[#fdb53d] text-gray-900 flex flex-col items-center justify-center pt-12 pb-12 md:py-10 md:pl-12 md:pr-10 -mt-[20px] md:mt-0 md:-ml-[20px] [clip-path:polygon(0_0,50%_24px,100%_0,100%_calc(100%_-_24px),50%_100%,0_calc(100%_-_24px))] md:[clip-path:polygon(0_0,calc(100%_-_24px)_0,100%_50%,calc(100%_-_24px)_100%,0_100%,24px_50%)]">
             <p className="font-light text-xl md:text-2xl mb-1">3단계</p>
             <p className="text-sm md:text-[18px] font-medium leading-tight mt-1">단계별 회복기를<br/>가지자.</p>
          </div>
          <div className="relative flex-1 bg-[#f5749b] text-gray-900 flex flex-col items-center justify-center pt-12 pb-12 md:py-10 md:pl-12 md:pr-10 -mt-[20px] md:mt-0 md:-ml-[20px] [clip-path:polygon(0_0,50%_24px,100%_0,100%_calc(100%_-_24px),50%_100%,0_calc(100%_-_24px))] md:[clip-path:polygon(0_0,calc(100%_-_24px)_0,100%_50%,calc(100%_-_24px)_100%,0_100%,24px_50%)]">
             <p className="font-light text-xl md:text-2xl mb-1">4단계</p>
             <p className="text-sm md:text-[18px] font-medium leading-tight mt-1">생활 습관을<br/>치료하자.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramStep1Section() {
  return (
    <section className="pt-20 pb-[50px] bg-white px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
           <div className="bg-[#A5C614] text-white rounded-full w-[92px] h-[92px] flex items-center justify-center font-bold text-[35px]">1단계</div>
           <h2 className="text-[28px] md:text-[35px] font-bold text-gray-900">꺼져있는 지방 대사 스위치를 켜자.</h2>
        </div>
        
        <h3 className="text-[24px] font-bold text-gray-700 mb-4 inline-block">
          <span className="bg-[#fff4b0]">내 장속에 비만세균이 산다??</span>
        </h3>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed break-keep mb-8">
          장내에는 수많은 균이 살고 있는데 장내 유익균은 식욕 억제시키고 장내 유해균은 식욕을 촉진시키게 합니다. 장내 세균 층이 건강해야 식욕이 정상적이고 장내에 독소가 쌓이지 않습니다. 비만인들의 대체로 식습관이 좋지 못하고 좋지 못한 음식들을 선호하다보니 장내 환경이 나빠지고 장내 노폐물과 독소가 쌓이고 유해균, 비만균이 많아지면서 더욱 과식과 폭식으로 이어지게 됩니다.<br/><br/>
          고도비만 환자는 오랜 기간 동안 잘못된 식습관으로 인한 과잉독소가 훨씬 많아서 본인이 통제할 수 없는 비정상적인 식욕과, 소화·대사·순환·배설이 순탄하지 못해서 노폐물은 몸에 쌓이고 피로감, 지방대사 저하, 혈액순환을 방해하여 점점 더 살을 빼기 힘든 체내 환경을 만듭니다.
        </p>
        
        <p className="text-gray-800 text-base md:text-lg font-normal leading-relaxed break-keep mb-4">
          <span className="bg-[#fff4b0]">해독 요법을 통해서 병적인 과잉 식욕을 유발하는 독소와 노폐물을 청장 작용과 간의 해독 작용으로 개선하고 만성 적인 피로와 전신적인 부종을 개선하고 과식과 과체중으로 망가진 몸 상태를 근본적으로 개선해야 요요 현상이 줄어들 수 있습니다.</span>
        </p>
        <div className="border border-[#A5C614] px-4 py-2 md:px-5 md:py-3 mb-16">
          <p className="text-base md:text-lg text-gray-700 font-normal"><span className="bg-[#A5C614] text-white px-2 py-1 rounded text-xs mr-2 font-bold">Tip</span> 배가 많이 나올수록, 체중 민감할 때 복부가 찬 사람일수록 <span className="bg-[#fff4b0]">장내 환경이 나빠져 있고 독소가 많다</span>고 볼 수 있습니다.</p>
        </div>

        <div className="text-center mb-8 mt-16">
          <h4 className="text-[33px] font-normal text-gray-600">비정상적인 식욕의 원인!</h4>
          <h3 className="text-[33px] font-bold text-gray-800 -mt-3">잘못된 섭식으로 인한 비만 세균 증식과 과잉독소</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
          <div className="border-2 border-[#3a332d]/80 rounded-3xl overflow-hidden flex flex-col bg-white">
            <div className="pt-14 pb-0 px-0 flex-1 relative">
              <span className="font-bold text-slate-800 text-lg absolute top-5 left-6 z-20">해독치료 전</span>
              <div className="relative w-full">
                <Image src="/images/personal/gd_section8_1.png" alt="해독치료 전 비정상식욕" width={600} height={700} className="w-full h-auto translate-y-[2px]" />
              </div>
            </div>
            <div className="bg-[#3a332d]/80 py-3 text-center">
              <span className="text-white font-bold text-lg md:text-xl tracking-wider">비정상식욕</span>
            </div>
          </div>

          <div className="border-2 border-[#A5C614] rounded-3xl overflow-hidden flex flex-col bg-[#fffef9]">
            <div className="pt-14 pb-0 px-0 flex-1 relative">
              <span className="font-bold text-slate-800 text-lg absolute top-5 left-6 z-20">해독치료 후</span>
              <div className="relative w-full">
                <Image src="/images/personal/gd_section8_2.png" alt="해독치료 후 정상식욕" width={600} height={700} className="w-full h-auto translate-y-[1px]" />
              </div>
            </div>
            <div className="bg-[#A5C614] py-3 text-center shadow-[0_-4px_15px_rgba(165,198,20,0.2)]">
              <span className="text-white font-bold text-lg md:text-xl tracking-wider">정상식욕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramStep2Section() {
  return (
    <section className="pt-[50px] pb-10 bg-white px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
           <div className="bg-[#A5C614] text-white rounded-full w-[92px] h-[92px] flex items-center justify-center font-bold text-[35px]">2단계</div>
           <h2 className="text-[28px] md:text-[35px] font-bold text-gray-900">살이 찌는 원인부터 치료하자.</h2>
        </div>
        
        <p className="text-left text-gray-700 text-base md:text-lg leading-relaxed break-keep mb-16">
          고도비만이 살이 빼기 힘든 이유는 늘어나고 커진 위장으로 인해 많이 먹어야 포만감을 느끼고 스스로 먹는 행위를 중단하기 어렵습니다.<br />
          <span className="bg-[#fff4b0] font-medium text-[18px] md:text-[20px]">정상적으로는 위 용적에 70%가 찰 때 포만감을 느끼게 되는데 잦은 과식과 폭식으로 위가 늘어난 만큼 많은 음식을 먹어야 배부름을 느끼게 됩니다.</span>
        </p>

        <h3 className="text-[33px] font-bold text-gray-900 text-center mb-8 break-keep">1. 과식의 이유! 커져버린 위 용적을 줄이자.</h3>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed break-keep mb-8">
          위가 커지고 위벽이 두껍게 되면서 난단백이며 음식을 적게 먹어도 느리게 소화가 잘 안 됨으로써 위내에 머물러 있는 시간이 길어지는 것을 한의학에서는 <strong>식적(食積)</strong>이라고 하며 기능성, 운동성 소화불량증에 해당합니다. 식적을 치료하는 한약을 통해 물컹해지고 기능이 떨어져 있는 위를 회복시키며 식욕이 정상적으로 돌아옵니다. 늘어나고 커진 위장으로 인해 많이 먹어야 포만감을 느끼고 스스로 먹는 행위를 중단하기 어렵습니다.<br/><br/>
          <span className="font-normal text-gray-700 text-[17px] md:text-[19px] bg-[#fff4b0]">위 용적에 70%가 찰 때 포만감을 느끼게 되는데 잦은 과식과 폭식으로 위가 늘어난 만큼 많은 음식을 먹어야 배부름을 느끼고 다 쓰지 못한 열량은 지방으로 저장됩니다.</span>
        </p>

        <div className="w-full mb-16 relative">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-2 lg:gap-4 relative">
            
            <div className="flex-1 flex flex-col">
              <div className="bg-white border-2 border-[#A5C614] rounded-2xl overflow-hidden flex flex-col h-full">
                <div className="relative min-h-[280px] flex-1 flex items-center justify-center p-6">
                  <span className="absolute top-16 left-[20%] md:left-[25%] translate-x-[20px] translate-y-[20px] text-[#c02b23] text-2xl font-bold z-20">70%</span>
                  <Image src="/images/personal/gd_section9_1.png" alt="정상인의 위(Stomach)" width={240} height={265} className="w-auto h-[160px] md:h-[180px] object-contain" />
                </div>
                {/* Title */}
                <div className="bg-[#A5C614] py-2 text-center text-white font-bold text-lg md:text-xl">
                  정상인의 위용적
                </div>
              </div>
              {/* Description below left card */}
              <div className="mt-6 px-2 md:min-h-[120px]">
                <h4 className="font-bold text-gray-800 text-lg md:text-xl mb-2">양이 적어 간과 근육에서만 영양 저장</h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed break-keep">
                  위용적에 70%가 찰때 포만감을 느끼게 되는 잦은 회식,폭식으로 위가 늘어난 만큼 많은 음식을 먹어야 배부름을 느끼고 다 쓰지 못한 열량은 지방으로 저장됩니다.
                </p>
              </div>
            </div>

            {/* Center Arrow for Mobile */}
            <div className="flex md:hidden flex-col items-center justify-center shrink-0 py-6 w-full">
              {/* Arrow */}
              <div className="mb-2 flex items-center justify-center h-12">
                <Image src="/images/personal/gd_allow.png" alt="화살표" width={66} height={22} className="w-auto h-[22px]" />
              </div>
              <div className="relative text-center text-lg font-bold break-keep">
                <div className="absolute left-0 top-0 w-full text-white z-0" style={{ WebkitTextStroke: '5px white' }} aria-hidden="true">
                  위가 늘어나면서<br/>위벽이 붓고 단단해짐
                </div>
                <div className="relative z-10 text-[#A5C614]">
                  위가 늘어나면서<br/>위벽이 붓고 단단해짐
                </div>
              </div>
            </div>

            {/* Right Card: 고도비만의 위용적 */}
            <div className="flex-1 flex flex-col">
              <div className="bg-white border-2 border-[#3a332d]/80 rounded-2xl overflow-hidden flex flex-col h-full">
                {/* Image Area */}
                <div className="relative min-h-[280px] flex-1 flex items-center justify-center p-6">
                  <div className="absolute top-16 left-[15%] md:left-[20%] translate-x-[20px] translate-y-[20px] text-[#c02b23] font-bold text-center flex flex-col items-center z-20">
                    <span className="text-[30px] leading-none">70%</span>
                    <span className="text-base leading-none mt-1">(양이 많다)</span>
                  </div>
                  <span className="absolute top-12 right-[15%] md:right-[20%] translate-x-[20px] text-gray-800 text-sm md:text-base font-bold leading-tight text-left z-20">뇌의 식욕중추<br/>포만감 전달</span>
                  <Image src="/images/personal/gd_section9_2.png" alt="고도비만의 늘어난 위" width={290} height={315} className="w-auto h-[195px] md:h-[220px] object-contain z-10" />
                </div>
                {/* Title */}
                <div className="bg-[#3a332d]/80 py-2 text-center text-white font-bold text-lg md:text-xl">
                  고도비만의 위용적
                </div>
              </div>
              {/* Description below right card */}
              <div className="mt-6 px-2 md:min-h-[120px]">
                <h4 className="font-bold text-gray-800 text-lg md:text-xl text-center md:text-left">
                  먹을수록 더 많이 더 빨리 허기를 느낌.
                </h4>
              </div>
            </div>

            {/* Center Arrow for Desktop (Absolute Overlay) */}
            <div className="hidden md:flex absolute top-[160px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center justify-center">
              <div className="mb-1 flex items-center justify-center h-12">
                <Image src="/images/personal/gd_allow.png" alt="화살표" width={66} height={22} className="w-auto h-[26px]" />
              </div>
              <div className="relative text-center text-xl font-bold break-keep">
                <div className="absolute left-0 top-0 w-full text-white z-0" style={{ WebkitTextStroke: '5px white' }} aria-hidden="true">
                  위가 늘어나면서<br/>위벽이 붓고 단단해짐
                </div>
                <div className="relative z-10 text-[#A5C614]">
                  위가 늘어나면서<br/>위벽이 붓고 단단해짐
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2-2 */}
        <h3 className="text-[33px] font-bold text-gray-900 text-center mb-8 break-keep">2. 이상식욕의 이유! 인슐린 분비의 기복을 줄이자.</h3>
        
        <div className="relative w-full mb-8">
          <Image src="/images/personal/gd_section9_3.png" alt="2단계 인슐린 분비 그래프 (슈거 스파이크 및 크래쉬)" width={1200} height={700} className="w-full h-auto" />
          
          {/* SEO를 위한 투명 텍스트 레이어 (실제 이미지 내 글씨 위치와 유사하게 배치, 마우스 드래그 가능) */}
          <div className="absolute inset-0 z-10 text-[20px] text-transparent">
            <span className="absolute top-[5%] left-[2%] font-bold text-[22px] translate-y-[10px]">혈당</span>
            <span className="absolute bottom-[2%] right-[2%] font-bold -translate-x-[15px] -translate-y-[10px]">시간</span>
            
            <div className="absolute top-[8%] left-[22%] flex flex-col leading-tight translate-x-[10px]">
              <strong className="text-[22px]">슈거 스파이크</strong>
              <span>급격한 인슐린 반응 유발</span>
              <span>-지질분해 억제</span>
              <span>-지질연소 억제</span>
              <span>-인슐린저항성, 체지방 증가</span>
            </div>
            
            <span className="absolute top-[18%] left-[53%] font-bold text-[22px]">지방전환 (식적, 어혈, 담음)</span>
            <span className="absolute top-[44%] right-[5%] font-bold text-[22px] -translate-y-[15px]">체지방 변환점</span>
            
            <span className="absolute top-[53%] right-[10%] font-bold text-[22px] -translate-y-[10px] translate-x-[15px]">정상인의 혈량</span>
            
            <div className="absolute bottom-[10%] left-[30%] flex flex-col leading-tight -translate-y-[15px] translate-x-[10px]">
              <strong className="text-[22px]">슈거 크래쉬</strong>
              <span>피로감</span>
              <span>스트레스 반응(코티졸, 아드레날린 분비)</span>
              <span>공복감</span>
            </div>
            
            <div className="absolute bottom-[10%] right-[10%] text-center leading-tight flex flex-col items-center">
              <strong className="text-[22px] translate-x-[15px] -translate-y-[20px]">비만인의 혈량</strong>
              <span className="translate-x-[15px] -translate-y-[10px]">(기복이 크다)</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 text-[17px] md:text-[19px] leading-relaxed break-keep mb-4">
          혈당이 높게 유지되고 인슐린 수치가 높을 때에는 체지방이 연소되지 않으며 <strong className="bg-[#fff4b0]">과식할수록, 체중이 많이 나갈수록 인슐린 저항성이 생겨서 점점 더 지방을 쓰지 않는 몸으로 바뀌게 됩니다.</strong>
        </p>
        <div className="border border-[#A5C614] px-4 py-2 md:px-5 md:py-3 mb-10">
          <p className="text-base md:text-lg text-gray-700 font-normal leading-relaxed break-keep"><span className="bg-[#A5C614] text-white px-2 py-1 rounded text-xs mr-2 font-bold">Tip</span> 높아진 인슐린 저항성을 개선하기 위해서는 혈당을 짙게 올리는 음식의 섭취를 줄이고, <span className="bg-[#fff4b0]">공복을 잘 견딜 수 있는 몸 상태를 만드는 것이 무엇보다 중요</span>합니다. <span className="bg-[#fff4b0]">빈혈이 있거나 체력이 떨어질수록 소식을 하고 공복을 견디기 어려우므로 지속적으로 소식</span>할 수 있도록 보약 다이어트가 필요한 이유가 이 때문입니다.</p>
        </div>

        {/* Treatment Mechanism */}
        <div className="pt-8">
          <h3 className="text-[33px] font-bold text-gray-900 text-center mb-6 break-keep">고도비만 치료 한약재의 치료기전</h3>
          <div className="relative w-full max-w-[1000px] mx-auto mt-4">
            <Image
              src="/images/personal/gd_anatomy_final2.png"
              alt="고도비만 한약재 치료 기전 인체 해부도"
              width={1000}
              height={790}
              unoptimized={true}
              className="w-full h-auto"
            />
            {/* SEO 투명 텍스트 */}
            <div className="absolute inset-0 text-transparent selection:bg-blue-200 selection:text-gray-900 text-[18px] leading-tight break-keep">
              {/* Left Side */}
              <div className="absolute top-[1%] left-[42%] w-[28%]">
                <strong className="text-[25px] inline-block transform -translate-x-[170px] translate-y-[100px]">심장</strong>
                <div className="transform -translate-x-[350px] translate-y-[110px]">
                  <p>1 백자인, 맥문동, 원지 등의 한약재로 심장을 안정시키고 인삼, 황기등의 약재로 저하되어 있는 체력을 강화시켜줍니다.</p>
                </div>
              </div>
              <div className="absolute top-[24%] left-[42%] w-[28%]">
                <strong className="text-[25px] inline-block transform -translate-x-[200px] translate-y-[100px]">간</strong>
                <div className="transform -translate-x-[380px] translate-y-[120px]">
                  <p>1 시호, 청피, 치자 등으로 쓸개즙 분비를 촉진하고, 산사, 치자 등으로 콜레스테롤 수치를 내려주고 간의 해독효능을 향상시켜줍니다.</p>
                </div>
              </div>
              <div className="absolute top-[49%] left-[42%] w-[28%]">
                <strong className="text-[25px] inline-block transform -translate-x-[210px] translate-y-[100px]">대장</strong>
                <div className="transform -translate-x-[350px] translate-y-[120px]">
                  <p>1 대왕, 망초 등의 약재로 숙변과 독소를 제거하고 대장의 염증을 치료하고 장의 해독효과가 있습니다.</p>
                </div>
              </div>
              <div className="absolute top-[66%] left-[42%] w-[38%]">
                <strong className="text-[25px] inline-block transform -translate-x-[140px] translate-y-[120px]">근육</strong>
                <div className="transform -translate-x-[350px] translate-y-[150px]">
                  <p>1 백작약, 감초, 모과, 오약 등의 한약재로 말초혈액순환을 도와주고 근육을 이완시켜 근육이 뭉치거나 씰룩거리고 저리는 증상 등을 치료해줍니다.</p>
                </div>
              </div>

              {/* Right Side */}
              <div className="absolute top-[12%] right-[5%] w-[28%]">
                <strong className="text-[25px]">뼈</strong>
                <div className="transform translate-x-[50px]">
                  <p>1 우슬, 속단, 오가피 등의 한약재로 뼈, 관절, 인대를 강화시켜서 과체중으로 인한 통증 및 손상을 치료해줍니다.</p>
                </div>
              </div>
              <div className="absolute top-[33%] right-[12%] w-[28%]">
                <strong className="text-[25px] inline-block transform translate-x-[40px] -translate-y-[30px]">위</strong>
                <div className="transform translate-x-[100px] -translate-y-[30px]">
                  <p>1 인삼, 건강, 육계 등으로 위장의 혈관을 확장하고 혈행순환을 개선하여, 염증 치료 및 진정·진통 작용을 합니다.</p>
                  <p>2 창출, 진피, 지실 등 위벽이 정상보다 부어있는 것을 치료하고 위장 평활근의 과긴장을 이완시키고, 위의 연동운동 촉진을 통해 소화력을 향상시켜줍니다.</p>
                  <p>3 석고, 모려 등으로 위산의 과다분비를 정상화 시키고 식도로 위산이 역류하지 않도록 해줍니다.</p>
                </div>
              </div>
              <div className="absolute top-[68%] right-[2%] w-[28%]">
                <strong className="text-[25px] inline-block transform translate-y-[30px]">소장</strong>
                <div className="transform translate-y-[50px]">
                  <p>1 백작약, 진피, 목향 등으로 장의 긴장을 풀어 장기들의 혈액순환을 촉진하고, 장의 운동성을 향상시켜 줍니다.</p>
                  <p>2 목통, 택사, 복령 등의 약재로 소화 흡수를 돕고 장점막의 부종을 제거하여 림프순환을 촉진합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ProgramStep3Section() {
  return (
    <section className="pt-10 pb-12 bg-white px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
           <div className="bg-[#A5C614] text-white rounded-full w-[92px] h-[92px] flex items-center justify-center font-bold text-[35px]">3단계</div>
           <h2 className="text-[28px] md:text-[35px] font-bold text-gray-900">감량 후 회복기를 가지자</h2>
        </div>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed break-keep mb-4">
          고도비만다이어트는 장거리 달리기와 같습니다. 체중이 급하강 곡선을 그릴수록 급상승 곡선을 가지기 쉽습니다.<br/>
          종전 변화된 체중을 인지하고 환경을 적응할 시간을 충분히 갖지 못하기 때문에 요요현상이 생기게 되기에 일정한 체중 감량 후 몸이 변화된 체중을 인지하고 적응하는 회복기가 반드시 필요합니다.<br/>
          <span className="bg-[#fff4b0] font-medium text-[18px] md:text-[20px]">이 기간에 적정 감량속도 유지하며 떨어진 체력을 보충하여 신진대사율이 떨어지지 않도록 합니다.</span>
        </p>

        {/* 3-1 */}
        <div className="relative border-[3px] border-[#A5C614] rounded-3xl p-6 md:p-10 mt-16 mb-6">
          {/* Header Badge */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#A5C614] text-white font-bold text-[18px] md:text-[22px] px-8 py-2 whitespace-nowrap">
            단식을 통한 급속 감량법
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            {/* Left Graph Image */}
            <div className="w-full md:w-1/2 relative">
               <Image 
                 src="/images/personal/gd_section10_1.png"
                 alt="3단계 급속 감량 그래프"
                 width={600}
                 height={450}
                 className="w-full h-auto object-contain bg-white"
                 unoptimized={true}
               />
               {/* SEO Text Overlays (Transparent but Selectable) */}
               <div className="absolute inset-0 pointer-events-auto select-text text-[12pt] text-transparent leading-tight">
                 <span className="absolute top-[10%] left-[5%] -translate-x-[10px] -translate-y-[10px]">체중</span>
                 <span className="absolute top-[17%] left-[30%] -translate-y-[10px]">적정체중 선</span>
                 <span className="absolute top-[70%] left-[17%] text-center">첫번째<br/>다이어트</span>
                 <span className="absolute top-[42%] left-[32%] -translate-y-[13px]">요요</span>
                 <span className="absolute top-[65%] left-[42%] text-center -translate-x-[10px] -translate-y-[5px]">두번째<br/>다이어트</span>
                 <span className="absolute top-[32%] left-[55%] -translate-y-[13px]">요요</span>
                 <span className="absolute top-[50%] left-[65%] text-center -translate-x-[10px] -translate-y-[5px]">세번째<br/>다이어트</span>
                 <span className="absolute top-[18%] left-[78%] -translate-y-[13px]">요요</span>
                 <span className="absolute top-[38%] left-[84%] text-center -translate-y-[5px]">네번째<br/>다이어트</span>
                 <span className="absolute bottom-[5%] right-[10%]">시간</span>
               </div>
            </div>

            {/* Right Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h4 className="text-[20px] md:text-[26px] font-extrabold text-gray-800 leading-snug break-keep">
                무리한 단식만으로 체중을 급속 감량하면<br/>
                보상작용으로 체내 흡수율이 현저히 높아집니다.
              </h4>
              <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.7] break-keep">
                <span className="bg-[#fff4b0] font-medium">몸이 변화된 체중을 인지하지 못한 상태에 감량을 지속하면</span><br className="hidden md:block"/>
                <span className="bg-[#fff4b0] font-medium">체중의 setpoint가 옮겨질 수 있는 시간적 여유가 없어져 조금만</span><br className="hidden md:block"/>
                <span className="bg-[#fff4b0] font-medium">먹어도 살이 찌는 요요현상이 반복됩니다.</span>
              </p>
            </div>
          </div>
        </div>

        {/* 3-2 */}
        <div className="relative border-[3px] border-[#A5C614] rounded-3xl p-6 md:p-10 mt-16 mb-16">
          {/* Header Badge */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#A5C614] text-white font-bold text-[18px] md:text-[22px] px-8 py-2 whitespace-nowrap">
            적정감량속도를 지키고 유지기를 거치는 단계적 감량법
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            {/* Left Graph Image */}
            <div className="w-full md:w-1/2 relative">
               <Image 
                 src="/images/personal/gd_section10_2.png"
                 alt="3단계 단계적 감량 그래프"
                 width={600}
                 height={450}
                 className="w-full h-auto object-contain bg-white"
                 unoptimized={true}
               />
               {/* SEO Text Overlays (Transparent but Selectable) */}
               <div className="absolute inset-0 pointer-events-auto select-text text-[12pt] text-transparent leading-tight">
                 <span className="absolute top-[8%] left-[4%] -translate-x-[10px] -translate-y-[13px]">체중</span>
                 <span className="absolute top-[13%] left-[28%] translate-x-[8px]">적정체중 선</span>
                 <span className="absolute top-[62%] left-[17%] -translate-x-[10px]">다이어트</span>
                 <span className="absolute top-[62%] left-[33%] -translate-x-[5px]">유지기</span>
                 <span className="absolute top-[62%] left-[52%] -translate-x-[10px]">다이어트</span>
                 <span className="absolute top-[62%] left-[72%] -translate-x-[5px]">유지기</span>
                 <span className="absolute bottom-[13%] left-[24%] translate-y-[10px] -translate-x-[10px]">1개월</span>
                 <span className="absolute bottom-[13%] left-[42%] translate-y-[10px] -translate-x-[10px]">2개월</span>
                 <span className="absolute bottom-[13%] left-[61%] translate-y-[10px] -translate-x-[10px]">3개월</span>
                 <span className="absolute bottom-[13%] left-[78%] translate-y-[10px]">4개월</span>
                 <span className="absolute bottom-[4%] right-[5%] -translate-y-[13px] translate-x-[10px]">시간</span>
               </div>
            </div>

            {/* Right Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h4 className="text-[20px] md:text-[26px] font-extrabold text-gray-800 leading-snug break-keep">
                일정한 체중 감량 후 몸이 변화된 체중을<br/>
                인지하고 익숙해지는 유지기가 중요합니다.<br/>
                감량의 폭이 큰 고도비만의 경우 감량-<br/>
                유지기를 여러단계 거치는 것이 좋습니다.
              </h4>
              <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.7] break-keep">
                <span className="bg-[#fff4b0] font-medium">고도 비만일수록 체중 감량에 따른 변화된 신체 환경에 몸이</span><br className="hidden md:block"/>
                <span className="bg-[#fff4b0] font-medium">적응할 시간을 충분히 갖도록 해야 합니다. (유지기 확보)</span><br className="hidden md:block"/>
                <br className="block md:hidden"/>
                <span>체중이 급하강 곡선을 그릴수록 급상승 곡선을 갖기 쉽습니다.<br className="hidden md:block"/>
                너무 급하게 뺄수록 요요 현상이 생기기 쉽습니다. 다이어트를<br className="hidden md:block"/>
                시도하면 할수록 그 다음 번 다이어트는 더 어려워집니다.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Herbs */}
        <h3 className="text-[33px] font-bold text-gray-900 text-center mb-6 pt-4 break-keep"><span className="font-normal">치료 효능이 있는</span> 주요 한약재</h3>
        
        <div className="flex flex-col">
          {[
            {
              name: '녹용',
              hanja: '鹿茸',
              img: '/images/personal/gd_section10_3_1.png',
              desc: '다양한 성장인자와 필수 아미노산, 당단백 등이 풍부하고, 골수에서 조혈인자 활성화로 빈혈 치료, 신경 세포 활성화 작용과 골 밀도 강화, 발육 촉진과 항 피로 작용, 항염증 작용, 항암 작용, 간 보호와 상처 회복 촉진과 성 기능 강화, 면역 조절 기능이 뛰어납니다.'
            },
            {
              name: '인삼',
              hanja: '人蔘',
              img: '/images/personal/gd_section10_3_2.png',
              desc: '동의보감에서 성질이 따뜻하고 맛이 달며 독이 없고 사람 모양처럼 생긴 것이 효과가 좋다고 하였습니다. 인삼을 먹으면 몸이 따뜻해져서 추위를 덜 타고 감기에 덜 걸리며 혈액순환이 잘 되도록 도와주며 위장과 폐의 기능을 돕고 진액 생성과 정신 안정 효능이 있으며 여러 가지 만성 질병으로 쇠약해졌을 때 많이 씁니다. 동맥 경화증 발생 억제, 조혈 기능 강화, 세포 DNA 합성 및 물질 대사 촉진, 음식물 소화 흡수력 강화 효능이 알려져 있습니다.'
            },
            {
              name: '당귀',
              hanja: '當歸',
              img: '/images/personal/gd_section10_3_3.png',
              desc: '성이 온화하고 맛이 달며 여성의 인삼이라고 알려져 있는 만큼 보혈 작용이 현저하여 빈혈에 좋으며 혈액 순환 개선과 체내 저항력 증강으로 타박상이나 혈전 및 상처 치료 촉진, 변비에 복용하면 장관 운동을 원활히 해주어 배변을 용이하게 합니다. 특히, 여성의 생리를 고르게 하고, 진통 효과, 신경 쇠약, 혈압 강하 작용, 빈혈 등에 많이 쓰입니다.'
            },
            {
              name: '맥문동',
              hanja: '麥門冬',
              img: '/images/personal/gd_section10_3_4.png',
              desc: '심장의 열을 내리고 진액을 생기게 하며 심장을 안정시키고 폐를 촉촉하게 해주는 약으로 강심 작용, 폐 기관지 보호, 맥을 안정시키는 약입니다. 기관지 질환이나 만성 기침, 체력 증강, 불안, 갈증 해소, 원기 충전에 좋습니다.'
            },
            {
              name: '구기자',
              hanja: '枸杞子',
              img: '/images/personal/gd_section10_3_5.png',
              desc: '하수오, 인삼과 더불어 3대 명약으로 여겨지며 베타인이 풍부해서 간에 지방이 축적되는 것을 억제하여 지방간 예방과 콜레스테롤과 지질 강하 작용, 혈당 강하 작용, 간 보호 작용도 알려져 있습니다. 비타민, 루틴이 있어 피로회복에 도움이 되며 간과 신장의 기운을 강화하고 골수의 생성을 촉진하고 몸이 허약해서 어지럽고 허리와 무릎이 시큰거리고 아플 때도 사용됩니다.'
            }
          ].map((herb, idx, arr) => (
             <div key={idx} className={`flex flex-col md:flex-row gap-8 py-8 ${idx !== arr.length - 1 ? 'border-b border-dotted border-gray-400' : ''}`}>
                <div className="w-full md:w-[260px] shrink-0">
                  <div className="w-full relative aspect-[4/3] shadow-md overflow-hidden bg-white">
                    <Image
                      src={herb.img}
                      alt={`${herb.name} 이미지`}
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className="w-full md:flex-1 flex flex-col justify-center">
                   <h4 className="font-bold text-[22px] md:text-[24px] text-gray-900 mb-4">{herb.name} <span className="font-medium text-gray-600">[{herb.hanja}]</span></h4>
                   <p className="text-[17px] md:text-[18px] text-gray-700 leading-relaxed break-keep">
                     {herb.desc}
                   </p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramStep4Section() {
  return (
    <section className="pt-12 pb-20 bg-white px-8 md:px-16">
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-8">
           <div className="bg-[#A5C614] text-white rounded-full w-[92px] h-[92px] flex items-center justify-center font-bold text-[35px] shrink-0">4단계</div>
           <h2 className="text-[28px] md:text-[35px] font-bold text-gray-900 break-keep">생활습관을 치료하자.</h2>
        </div>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed break-keep">
          요요현상을 방지하기 위해서는 반드시 잘못된 식습관 치료와 생활습관 치료는 필수입니다.<br/>
          고도비만 다이어트가 특히 힘든 이유가 이런 습관이 고쳐지지 않는 상태로 치료가 중단되는 경우가 대부분이기 때문입니다. 살이 찌는 습관, 살찌는 음식에 대해서 뇌를 훈련하게 하는 체질개선 다이어트 한약을 복용하는 동안 <br/>
          <span className="bg-[#fff4b0] font-medium text-[18px] md:text-[20px]">건강한 식습관, 건강한 음식에 대한 선호도를 가지는 것에 익숙해져야 약을 중단하더라도 좋은 식습관을 유지하는 것이 쉽게 무너지지 않습니다.</span>
        </p>
      </div>

      <div className="max-w-5xl mx-auto w-full bg-[#6a809b] overflow-hidden">
        {/* Dark Header */}
        <div className="w-full bg-[#4e3a3d] py-6 px-6 shadow-sm">
          <h3 className="text-[26px] md:text-[32px] font-bold text-white text-center break-keep">고도 비만인들이 운동으로 살을 뺀다???</h3>
        </div>
        
        {/* Chat Area */}
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 flex flex-col gap-8 md:gap-10">
          
          {/* Question */}
          <div className="flex items-start gap-3 md:gap-5">
             <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] shrink-0 relative overflow-hidden shadow-md rounded-[20px] md:rounded-[28px]">
               <Image
                 src="/images/personal/gd_section11_1.png"
                 alt="프로필 (환자)"
                 fill
                 className="object-cover"
                 unoptimized={true}
               />
             </div>
             <div className="relative bg-white rounded-3xl p-5 md:p-7 max-w-[85%] shadow-sm mt-2">
               <div className="absolute top-4 -left-3 w-0 h-0 border-t-[10px] border-t-transparent border-r-[14px] border-r-white border-b-[10px] border-b-transparent"></div>
               <p className="text-gray-900 font-bold text-[17px] md:text-[20px] break-keep leading-snug">
                 고도 비만인들이 운동만으로 살을 뺄수 있나요?
               </p>
             </div>
          </div>

          {/* Answer 1 */}
          <div className="flex items-start gap-3 md:gap-5 flex-row-reverse">
             <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] shrink-0 relative overflow-hidden shadow-md rounded-[20px] md:rounded-[28px]">
               <Image
                 src="/images/personal/gd_section11_2.png"
                 alt="프로필 (원장님)"
                 fill
                 className="object-cover"
                 unoptimized={true}
               />
             </div>
             <div className="relative bg-[#fef187] rounded-3xl p-5 md:p-7 max-w-[85%] shadow-sm mt-2">
               <div className="absolute top-4 -right-3 w-0 h-0 border-t-[10px] border-t-transparent border-l-[14px] border-l-[#fef187] border-b-[10px] border-b-transparent"></div>
               <p className="text-gray-900 font-medium text-[16px] md:text-[18px] break-keep leading-relaxed">
                 운동만으로는 일시적인 체중 감량만 가능할 뿐입니다.<br className="hidden md:block"/>
                 조금 운동해놓고 얼마 못가서 식사량만 늘어나는 경우가 많습니다.
               </p>
             </div>
          </div>

          {/* Answer 2 */}
          <div className="flex items-start gap-3 md:gap-5 flex-row-reverse">
             <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] shrink-0 relative overflow-hidden shadow-md rounded-[20px] md:rounded-[28px]">
               <Image
                 src="/images/personal/gd_section11_2.png"
                 alt="프로필 (원장님)"
                 fill
                 className="object-cover"
                 unoptimized={true}
               />
             </div>
             <div className="relative bg-[#fef187] rounded-3xl p-5 md:p-7 max-w-[85%] shadow-sm mt-2">
               <div className="absolute top-4 -right-3 w-0 h-0 border-t-[10px] border-t-transparent border-l-[14px] border-l-[#fef187] border-b-[10px] border-b-transparent"></div>
               <p className="text-gray-900 font-medium text-[16px] md:text-[18px] break-keep leading-relaxed">
                 일반적으로 체중 감량에 있어서 식이와 운동은 7:3정도로 식이조절이 훨씬 중요하며 비만도가 높을수록 운동보다는 식이요법에 훨씬 더 많은 비중을 두는 것이 체중 감량에 있어서 효과적이며 몸에 무리가 적습니다. 체중 감량에 있어서 운동은 힘이 많이 들더라도 기대만큼 큰 역할을 하지 못합니다.<br/>
                 더욱이 고도 비만인들은 강도 높은 운동 중 부상을 당하기 쉽고 오히려 허기를 많이 느껴서 운동량에 비해 식사량이 늘어서 살이 더 찔 수 있는 상황이 초래될 수 있습니다.
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FooterBannerSection() {
  return (
    <section className="w-full mt-16" aria-label="진한의원 비만 홈페이지 안내">
      <Image 
        src="/images/mid-age/MID_29.jpg" 
        alt="진한의원 비만 상담" 
        width={1000} 
        height={500} 
        className="w-full h-auto block" 
        loading="eager" 
        unoptimized 
      />
    </section>
  );
}
