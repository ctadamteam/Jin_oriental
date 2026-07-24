import Image from 'next/image';

export default function VisceralFatPage() {
  return (
    <main className="visceral-page w-full bg-white font-sans text-gray-800 overflow-x-hidden">
      <div className="visceral-content mx-auto w-full max-w-[1000px] overflow-hidden">
      <header className="visceral-page-heading border-b border-dashed border-gray-300 mb-[8px]">
        <h1 className="font-bold">내장지방형 비만</h1>
      </header>
      <HeroSection />
      <StatsSection />
      <ReasonSection />
      <CauseSection />
      <WhatIsSection />
      <CavityComparisonSection />
      <ProcessSection />
      <MedicineSection />
      <DiagnosisSection />
      <DiagnosisReasonSection />
      <FooterSection />
      </div>
      <style>{`
        .visceral-page{background:#fff;color:#333;font-family:Arial,'Malgun Gothic',sans-serif}.visceral-content{--visceral-inner-width:920px;width:min(100%,1000px);margin:0 auto;background:#fff}.visceral-page-heading{height:68px;display:flex;align-items:center;border-bottom:1px dotted #ddd}.visceral-page-heading h1{margin:0;color:#171717;font-family:Georgia,'Batang',serif;font-size:37px;font-weight:700;letter-spacing:-3px}
        .visceral-hero{height:365px!important;margin-top:10px;background:#433124!important}.visceral-hero>.absolute{display:grid!important;grid-template-columns:672px 328px;flex-direction:unset!important}.visceral-hero-photo,.visceral-hero-copy{width:auto!important;height:auto!important}.visceral-hero-photo img{object-position:left center}.visceral-hero-copy{padding:32px!important;background:#433124}.visceral-hero-copy>div{max-width:100%!important}.visceral-hero-copy h1,.visceral-hero-copy h2{font-size:54px!important;line-height:1.02;letter-spacing:-4px!important}.visceral-hero-copy h1{margin-bottom:2px!important}.visceral-hero-copy h2{margin-bottom:20px!important}.visceral-hero-copy p{font-size:14px!important;line-height:1.6!important}
        .visceral-stats>div,.visceral-causes>div,.visceral-what-is>div,.visceral-cavity-visual>div{max-width:880px}.visceral-stats>div{padding-right:48px;padding-left:48px}.visceral-reason>div{max-width:880px;padding-right:48px;padding-left:48px}.visceral-reason h3{font-size:48px!important}.visceral-waist-guide{height:260px!important;max-width:760px!important}.visceral-waist-text{position:absolute!important;top:24px!important;width:32%!important}.visceral-waist-text--male{left:16%!important}.visceral-waist-text--female{right:16%!important;left:auto!important;margin-top:0!important}.visceral-waist-text>div:first-child{width:auto!important;height:auto!important;margin:0 0 12px!important;background:transparent!important}.visceral-waist-text>div:first-child span{font-family:'Batang',serif;font-size:50px!important;font-weight:500}.visceral-waist-text>p:nth-of-type(1){margin-bottom:4px!important;color:#3a2a20!important;font-size:20px!important;font-weight:400!important}.visceral-waist-text>p:nth-of-type(2){font-family:'Arial Narrow',Arial,sans-serif;font-size:46px!important;line-height:1!important}.visceral-waist-text>p:nth-of-type(2) span:first-child{font-size:28px!important}
        .visceral-causes{padding-right:0!important;padding-left:0!important}.visceral-causes>div{padding-right:48px;padding-left:48px}.visceral-what-is>div{padding-right:48px;padding-left:48px}
        .visceral-cavity-visual{background:#f8f9f6!important}.visceral-cavity-visual>div{padding-right:48px;padding-left:48px}.visceral-cavity-visual h2+div{gap:86px!important}.visceral-cavity-copy>div{padding:48px 64px!important}.visceral-cavity-copy>div>div{max-width:860px!important}
        .visceral-process-main,.visceral-medicine>div,.visceral-diagnosis>div,.visceral-diagnosis-reason>div{max-width:920px!important;padding-right:24px!important;padding-left:24px!important}.visceral-process h2>span.block{font-size:38px!important}.visceral-process h2>span.block>span{display:inline-block;width:22px;height:14px;margin:0 11px;background:#a5c614;color:transparent!important;font-size:0!important;vertical-align:middle;clip-path:polygon(0 0,68% 0,68% 0,100% 50%,68% 100%,0 100%,26% 50%)}.visceral-comorbidities>div{max-width:920px!important;padding-right:24px!important;padding-left:24px!important}.visceral-comorbidities .w-40{width:168px!important;height:168px!important}.visceral-benefit p{font-size:35px!important;font-weight:400!important}.visceral-benefit p>span.block{font-size:48px!important;font-weight:700!important}
        .visceral-medicine .flex.flex-col.gap-6{gap:16px!important}.visceral-medicine .grid.lg\\:grid-cols-4,.visceral-medicine .grid.lg\\:grid-cols-2{gap:16px!important;align-items:stretch}.visceral-medicine .grid.lg\\:grid-cols-4>div,.visceral-medicine .grid.lg\\:grid-cols-2>div{height:100%}
        .visceral-diagnosis-highlight{padding-top:0!important;padding-bottom:0!important;line-height:1.12!important;margin-bottom:4px!important}.visceral-diagnosis-normal{font-weight:600!important}.visceral-diagnosis .grid{gap:40px 32px!important}
        .visceral-stats>div,.visceral-reason>div,.visceral-causes>div,.visceral-what-is>div,.visceral-cavity-visual>div,.visceral-process-main,.visceral-medicine>div,.visceral-diagnosis>div,.visceral-diagnosis-reason>div{max-width:var(--visceral-inner-width)!important;padding-right:0!important;padding-left:0!important}.visceral-comorbidities,.visceral-benefit{width:100%!important;max-width:1000px!important;margin-right:auto!important;margin-left:auto!important;padding-right:0!important;padding-left:0!important}.visceral-comorbidities>div,.visceral-benefit>div{width:100%!important;max-width:1000px!important;padding-right:0!important;padding-left:0!important}.visceral-cavity-copy>div{padding-right:0!important;padding-left:0!important}.visceral-cavity-copy>div>div{max-width:var(--visceral-inner-width)!important}.visceral-diagnosis .grid>div,.visceral-diagnosis .grid>div>div{min-width:0}.visceral-diagnosis-highlight,.visceral-diagnosis-normal{max-width:100%;overflow-wrap:anywhere}
        .visceral-footer{margin-bottom:64px;background:#fff!important}.visceral-footer-banner{min-height:0!important;line-height:0}.visceral-footer-banner>img{display:block;width:100%;height:auto}.visceral-footer-banner>div{display:none}
        @media(max-width:1000px){.visceral-page-heading{padding:0 18px}.visceral-hero>.absolute{grid-template-columns:67.2% 32.8%}.visceral-hero-copy{padding:3.2vw!important}.visceral-hero-copy h1,.visceral-hero-copy h2{font-size:5.4vw!important}.visceral-waist-text--male{left:12%!important}.visceral-waist-text--female{right:12%!important}.visceral-cavity-visual h2+div{gap:7vw!important}}
        @media(max-width:680px){.visceral-page-heading{height:58px;padding:0 18px}.visceral-page-heading h1{font-size:29px}.visceral-hero{height:auto!important}.visceral-hero>.absolute{display:flex!important}.visceral-hero-photo{height:250px!important}.visceral-hero-copy{min-height:250px;padding:38px 32px!important}.visceral-hero-copy h1,.visceral-hero-copy h2{font-size:43px!important}.visceral-stats>div,.visceral-reason>div,.visceral-causes>div,.visceral-what-is>div,.visceral-cavity-visual>div,.visceral-process-main,.visceral-medicine>div,.visceral-diagnosis>div,.visceral-diagnosis-reason>div{padding-right:22px!important;padding-left:22px!important}.visceral-comorbidities>div,.visceral-benefit>div{padding-right:0!important;padding-left:0!important}.visceral-waist-guide{height:370px!important}.visceral-waist-text{position:relative!important;top:auto!important;left:auto!important;right:auto!important;width:100%!important}.visceral-waist-text--female{margin-top:14px!important}.visceral-cavity-visual h2+div{gap:34px!important}.visceral-cavity-copy>div{padding:34px 22px!important}.visceral-process h2>span.block{font-size:28px!important}.visceral-process h2>span.block>span{width:17px;height:11px;margin:0 6px}.visceral-benefit p{font-size:25px!important}.visceral-benefit p>span.block{font-size:34px!important}.visceral-medicine .grid.lg\\:grid-cols-4,.visceral-medicine .grid.lg\\:grid-cols-2{gap:12px!important}.visceral-footer{margin-bottom:42px}}
      `}</style>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-[672px_1fr] md:h-[365px] overflow-hidden bg-[#433124] text-white mb-0">
      <div className="relative w-full h-[250px] md:h-full overflow-hidden">
        <Image 
          src="/images/personal/visceral_title.jpg" 
          alt="내장지방형 비만 메인 이미지" 
          fill 
          className="object-cover object-left"
          priority
        />
      </div>
      <div className="flex flex-col justify-center p-6 md:py-8 md:px-[32px]">
        <p className="text-sm md:text-[15px] text-[#c7bbb1] tracking-tight mb-2">뱃살 먼저 감량되는 내장 다이어트</p>
        <h2 className="w-full text-3xl md:text-[54px] leading-tight mb-4 tracking-tight">
          <span className="font-bold text-[#A5C614] block">내장지방형</span>
          <b className="text-white font-normal block">비만</b>
        </h2>
        <p className="text-xs md:text-[14px] text-gray-200 leading-relaxed break-keep font-light opacity-90 w-full">
          만성피로, 순환장애, 부종, 대사성 질환을 유발하는 내장지방을 보다 집중적으로 감소할 수 있는 1:1 개인별 맞춤 다이어트
        </p>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="visceral-stats bg-[#f8f9f6] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-left text-gray-800 font-medium text-[15px] md:text-lg mb-12 leading-[1.8] break-keep tracking-tight">
          한 통계에 따르면 <strong className="bg-[#fff4b0] px-1 font-normal text-gray-800">성인 3명 중 한명은 비만</strong>이며, <strong className="bg-[#fff4b0] px-1 font-normal text-gray-800">성인 5명 중 한명은 복부비만</strong>이며 <strong className="bg-[#fff4b0] px-1 font-normal text-gray-800">50대 이상 유병율은 50대 이하에 비해 2배</strong>에 달합니다.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 mb-16">
          {/* 비만 통계 */}
          <div className="relative flex flex-col items-center">
             <div className="w-72 h-72 md:w-80 md:h-80 relative flex items-center justify-center mb-4">
               <Image src="/images/personal/nj_section2_1.png" alt="비만 실루엣" fill className="object-contain" unoptimized={true} />
             </div>
             <div className="absolute top-[26%] left-[calc(25%+40px)] -translate-x-1/2 -translate-y-1/2 scale-90 text-left text-white drop-shadow-md z-10 pointer-events-auto">
                <p className="text-[18px] font-normal text-white mb-0.5">성인</p>
                <p className="text-[23px] font-bold text-[#A5C614] tracking-tight leading-none mb-1">
                  3명 <span className="text-[18px] font-normal text-white mx-0.5">중</span> 1명
                </p>
                <p className="text-[23px] font-bold text-white leading-none mt-1">비만</p>
             </div>
          </div>
          
          {/* 복부비만 통계 */}
          <div className="relative flex flex-col items-center">
             <div className="w-72 h-72 md:w-80 md:h-80 relative flex items-center justify-center mb-4">
               <Image src="/images/personal/nj_section2_2.png" alt="복부비만 실루엣" fill className="object-contain" unoptimized={true} />
             </div>
             <div className="absolute top-[calc(22%+10px)] left-[calc(32%+80px)] -translate-x-1/2 -translate-y-1/2 scale-90 text-left text-white drop-shadow-md z-10 pointer-events-auto">
                <p className="text-[18px] font-normal text-white mb-0.5">성인</p>
                <p className="text-[23px] font-bold text-[#A5C614] tracking-tight leading-none mb-1">
                  5명 <span className="text-[18px] font-normal text-white mx-0.5">중</span> 1명
                </p>
                <p className="text-[23px] font-bold text-white leading-none mt-1">복부비만</p>
              </div>
           </div>
        </div>

        <div className="flex justify-center">
          <p className="text-2xl md:text-[38px] font-light text-gray-800 tracking-tighter leading-snug">
            숫자로 알아보는 <strong className="text-black font-bold">한국인의 비만</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function ReasonSection() {
  return (
    <section className="visceral-reason py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-2 tracking-tight">뱃살이 찌는 이유는 뭘까?</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#A5C614]">원인은 내장지방!!</h3>
        </div>
        <div className="text-left text-gray-500 text-[15px] md:text-lg leading-[1.8] break-keep mb-16 tracking-tight">
          <p className="mb-4">
            뱃살은 단순히 지방의 증가만을 의미하는 것이 아니라 내장 기능, 신진대사 저하를 의미하며 이전보다 뱃살의 증가는 건강의 이상신호를 의미합니다. 특히 중년층의 뱃살은 고혈압, 당뇨, 고지혈증 등 대사성 질환의 원인이 되므로
          </p>
          <p>
            <strong className="bg-[#fff4b0] px-1 text-black font-semibold">건강하기 위해서 반드시 뱃살은 제거되어야 하며 배가 날씬한 중년이 배가 나온 중년보다 더</strong><br className="hidden md:block"/>
            <strong className="bg-[#fff4b0] px-1 text-black font-semibold">건강하다고 해도 과언이 아니라고 할 수 있습니다.</strong>
          </p>
        </div>

        <div className="visceral-waist-guide mt-16 w-full max-w-3xl mx-auto relative h-[180px] md:h-[260px]">
          <Image src="/images/personal/nj_section3.png" alt="남녀 허리둘레 기준" fill className="object-contain" unoptimized={true} />
          
          <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center z-10 pointer-events-none">
            {/* 남자 영역 (왼쪽으로 80px 이동) */}
            <div className="visceral-waist-text visceral-waist-text--male w-full md:w-1/2 flex flex-col items-center pointer-events-auto -translate-x-[80px]">
               <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#4a72b2]/10 flex items-center justify-center mb-3 md:mb-4">
                  <span className="text-[#4a72b2] text-2xl md:text-3xl font-bold">男</span>
               </div>
               <p className="text-gray-500 font-bold mb-1 md:mb-2 tracking-tight">남자 허리 둘레</p>
               <p className="text-4xl md:text-5xl font-black text-black tracking-tighter">90<span className="text-xl md:text-2xl font-bold text-black ml-1">cm</span> <span className="text-lg md:text-xl font-medium text-black">이상</span></p>
            </div>
            
            {/* 여자 영역 (오른쪽으로 80px 이동) */}
            <div className="visceral-waist-text visceral-waist-text--female w-full md:w-1/2 flex flex-col items-center pointer-events-auto mt-6 md:mt-0 translate-x-[80px]">
               <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#d92b2b]/10 flex items-center justify-center mb-3 md:mb-4">
                  <span className="text-[#d92b2b] text-2xl md:text-3xl font-bold">女</span>
               </div>
               <p className="text-gray-500 font-bold mb-1 md:mb-2 tracking-tight">여자 허리 둘레</p>
               <p className="text-4xl md:text-5xl font-black text-black tracking-tighter">85<span className="text-xl md:text-2xl font-bold text-black ml-1">cm</span> <span className="text-lg md:text-xl font-medium text-black">이상</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CauseSection() {
  return (
    <section className="visceral-causes py-20 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-[38px] font-normal text-gray-900 mb-16 tracking-tight">
          <strong className="text-[#A5C614] font-bold">내장지방</strong>은 왜 생기는 건가요?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {['과식', '야식', '음주', '갱년기'].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
              <div className="w-full aspect-square relative flex items-center justify-center bg-white">
                 <Image 
                   src={`/images/personal/nj_section4_${idx + 1}.png`} 
                   alt={item} 
                   fill 
                   className="object-cover" 
                   unoptimized={true} 
                 />
              </div>
              <div className="bg-[#f0f0f0] border-t border-gray-200 py-2 md:py-2.5 w-full flex items-center justify-center px-2">
                <p className="font-bold text-gray-800 text-[18px] tracking-tight text-center">
                  {item === '갱년기' ? '갱년기(성 호르몬 감소)' : item}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-left">
           <p className="text-gray-700 text-[15px] md:text-lg font-medium tracking-tight">
             그 외, 흡연과 비활동성도 그렇지 않은 성인보다 <strong className="bg-[#fff4b0] px-1 text-black font-semibold">1.2~1.3배 유병율</strong>을 올리게 됩니다.
           </p>
        </div>

        <div className="w-full border-b border-dashed border-gray-300 mt-16"></div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section className="visceral-what-is py-20 md:py-32 bg-white">
      <div className="w-full max-w-[1000px] mx-auto px-0">
        <h2 className="text-2xl md:text-[38px] font-bold text-center text-gray-900 mb-16 tracking-tight">
          <strong className="text-[#A5C614]">내장지방</strong>은 무엇인가요?
        </h2>

        {/* 2cm 이하 vs 2cm 이상 비교 이미지 (양옆 여백 없이 100% 가로 사이즈 확장) */}
        <div className="relative w-full mb-20">
           <Image 
             src="/images/personal/nj_section5_1.jpg" 
             alt="피하지방 내장지방 비교" 
             width={0}
             height={0}
             sizes="100vw"
             style={{ width: '100%', height: 'auto' }}
             className="w-full h-auto block"
             unoptimized={true} 
           />
           
           {/* 투명 텍스트 오버레이 (드래그 선택 가능 및 1:1 오프셋 재조정) */}
           <div className="absolute inset-0 z-10 pointer-events-none">
             {/* 상단: 2cm 이하 (원 안) */}
             <div className="absolute top-[10%] left-[43%] -translate-x-[20px] -translate-y-[10px] pointer-events-auto flex flex-col items-center justify-center w-[10%] h-[15%]">
               <p className="text-transparent selection:bg-blue-500/30 selection:text-black font-bold text-[15px] md:text-[27px] leading-tight">2cm</p>
               <p className="text-transparent selection:bg-blue-500/30 selection:text-black font-bold text-[14px] md:text-[21px] leading-tight">이하</p>
             </div>
             
             {/* 상단: 오른쪽 텍스트 */}
             <div className="absolute top-[20%] left-[66%] pointer-events-auto flex flex-col">
               <p className="text-transparent selection:bg-blue-500/30 selection:text-black text-[10px] md:text-[20px] font-medium leading-snug">2cm이하인 사람은</p>
               <p className="leading-snug">
                 <span className="text-transparent selection:bg-blue-500/30 selection:text-black text-sm md:text-2xl font-bold">내장비만</span>
                 <span className="text-transparent selection:bg-blue-500/30 selection:text-black text-[10px] md:text-[20px] font-bold">일 가능성이 있다.</span>
               </p>
             </div>
             
             {/* 하단: 2cm 이상 (원 안) */}
             <div className="absolute top-[60%] left-[36%] -translate-x-[35px] pointer-events-auto flex flex-col items-center justify-center w-[10%] h-[15%]">
               <p className="text-transparent selection:bg-blue-500/30 selection:text-black font-bold text-[15px] md:text-[27px] leading-tight">2cm</p>
               <p className="text-transparent selection:bg-blue-500/30 selection:text-black font-bold text-[14px] md:text-[21px] leading-tight">이상</p>
             </div>
             
             {/* 하단: 오른쪽 텍스트 */}
             <div className="absolute top-[71%] left-[66%] pointer-events-auto flex flex-col">
               <p className="text-transparent selection:bg-blue-500/30 selection:text-black text-[10px] md:text-[20px] font-medium leading-snug">살이 2cm 이상 잡히는 사람은</p>
               <p className="leading-snug">
                 <span className="text-transparent selection:bg-blue-500/30 selection:text-black text-sm md:text-2xl font-bold">피하지방이 많다</span>
                 <span className="text-transparent selection:bg-blue-500/30 selection:text-black text-[10px] md:text-[20px] font-bold">는 의미이다.</span>
               </p>
             </div>
           </div>
        </div>

        {/* 단면도 비교 (연한 회색 배경 bg-[#f8f9f6]) */}
        <div className="bg-[#f8f9f6] p-6 md:p-10 rounded-2xl mb-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
             <div className="flex-1 bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col">
                <div className="w-full aspect-[3/2] bg-white relative p-4 md:p-6 flex items-center justify-center">
                   <div className="relative w-full h-full">
                      <Image src="/images/personal/nj_section5_2.png" alt="내장지방 정상 단면도" fill className="object-contain" unoptimized={true} />
                      <div className="absolute inset-0 z-10 pointer-events-none">
                        <div className="absolute top-[15%] left-[10%] pointer-events-auto">
                          <span className="text-transparent selection:bg-blue-500/30 selection:text-black font-bold text-[16px]">피하지방</span>
                        </div>
                        <div className="absolute top-[40%] right-[10%] pointer-events-auto">
                           <span className="text-transparent selection:bg-blue-500/30 selection:text-black font-bold text-[16px]">내장지방</span>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="w-full bg-[#5894e6] text-white text-center py-3.5 font-bold text-[20px] tracking-tight">내장지방 정상</div>
             </div>
             <div className="flex-1 bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col">
                <div className="w-full aspect-[3/2] bg-white relative p-4 md:p-6 flex items-center justify-center">
                   <div className="relative w-full h-full">
                      <Image src="/images/personal/nj_section5_3.png" alt="내장지방 과다 단면도" fill className="object-contain" unoptimized={true} />
                      <div className="absolute inset-0 z-10 pointer-events-none">
                        <div className="absolute top-[15%] left-[10%] pointer-events-auto">
                          <span className="text-transparent selection:bg-blue-500/30 selection:text-black font-bold text-[16px]">피하지방</span>
                        </div>
                        <div className="absolute top-[40%] right-[10%] pointer-events-auto">
                           <span className="text-transparent selection:bg-blue-500/30 selection:text-black font-bold text-[16px]">내장지방</span>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="w-full bg-[#fd6363] text-white text-center py-3.5 font-bold text-[20px] tracking-tight">내장지방 과다</div>
             </div>
          </div>

           <div className="text-left space-y-3">
             <h3 className="text-[22px] md:text-[25px] font-bold text-gray-900 tracking-tight">체지방은 피하지방과 내장지방으로 나눠볼 수 있습니다.</h3>
             <p className="text-gray-700 text-[15px] md:text-base leading-relaxed break-keep font-medium tracking-tight">
               내장지방은 복강 안 장기 사이 혹은 내장 벽에 존재하는 지방으로 주로 복부에 쌓이며, 내장지방이 증가할수록 배가 불룩하게 나오나 손으로 꼬집었을 때 살집이 두껍게 잡히지 않습니다. 주로 중년층의 배둘레(허리둘레) 증가의 원인이 됩니다.
             </p>
             <p className="text-gray-900 font-bold text-[16px] md:text-[18px] leading-relaxed break-keep tracking-tight pt-1">
               내장지방의 증가는 혈액 내 지질 수치의 증가로 이어져 <strong className="bg-[#fff4b0] px-1 text-black font-bold">콜레스테롤 혈증 → 동맥경화 → 고혈압 → 뇌혈류장애, 심장혈관질환으로 진행할 수 있어</strong> 복강내 여유 공간을 감소시켜 혈류·림프순환 장애와 위장관 운동성 저하를 유발하게 됩니다.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}

function CavityComparisonSection() {
  return (
    <>
      <section className="visceral-cavity-visual pt-20 md:pt-32 pb-20 bg-[#f9f9f9] border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-[38px] font-bold text-center mb-20 tracking-tight text-gray-900">
          <span className="font-medium">건강한 사람과 내장비만인의</span> <strong className="text-[#A5C614]">복강비교</strong>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 justify-center">
           <div className="flex-1 flex flex-col items-center">
              <div className="relative w-full max-w-[350px] aspect-square mb-8">
                 <Image src="/images/personal/nj_section6_1.png" alt="건강한 사람의 복강" fill className="object-contain" unoptimized={true} />
                 <div className="absolute inset-0 z-10 pointer-events-none">
                    <span className="absolute top-[35%] right-[18%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">심장</span>
                    <span className="absolute top-[49%] right-[18%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">위</span>
                    <span className="absolute top-[46%] left-[16%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">간</span>
                    <span className="absolute top-[60%] left-[16%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">대장</span>
                    <span className="absolute top-[72%] left-[18%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">소장</span>
                 </div>
              </div>
              <div className="py-3">
                 <p className="text-xl font-bold tracking-tight text-[#528de8]">건강한 사람의 복강</p>
              </div>
           </div>
           <div className="flex-1 flex flex-col items-center">
              <div className="relative w-full max-w-[350px] aspect-square mb-8">
                 <Image src="/images/personal/nj_section6_2.png" alt="내장비만인의 복강" fill className="object-contain" unoptimized={true} />
                 <div className="absolute inset-0 z-10 pointer-events-none">
                    <span className="absolute top-[35%] right-[18%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">심장</span>
                    <span className="absolute top-[49%] right-[18%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">위</span>
                    <span className="absolute top-[46%] left-[16%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">간</span>
                    <span className="absolute top-[60%] left-[16%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">대장</span>
                    <span className="absolute top-[72%] left-[18%] pointer-events-auto text-transparent selection:bg-blue-500/30 selection:text-black text-[8pt] font-bold">소장</span>
                 </div>
              </div>
              <div className="py-3">
                 <p className="text-xl font-bold tracking-tight text-[#f55b5b]">내장비만인의 복강</p>
              </div>
           </div>
        </div>
        </div>
      </section>

      <div className="visceral-cavity-copy w-full flex flex-col">
        {/* 건강한 사람의 복강 설명 */}
        <div className="bg-[#5894e6] w-full py-12 px-6 md:px-0 text-white flex justify-center">
          <div className="w-full max-w-5xl text-left">
            <h3 className="text-2xl md:text-[28px] font-bold mb-6 text-white tracking-tight">건강한 사람의 복강</h3>
            <p className="text-[16px] md:text-[19px] font-medium leading-[1.7] break-keep text-white/90 tracking-tight">
              식도 위 소장 대장 등의 有腔장기들은 장기 안이 음식물로 인해 가득차 있을수록 불편하고 기능이 떨어지며, 장기 안이 비어있을수록 장기의 운동성이 활발해져 효율적으로 내장지방을 연소하고 복강내 혈액 - 림프 흐름이 원활해집니다.
            </p>
          </div>
        </div>
        
        {/* 내장비만인의 복강 설명 */}
        <div className="bg-[#fd6363] w-full py-12 px-6 md:px-0 text-white flex justify-center">
          <div className="w-full max-w-5xl text-left">
            <h3 className="text-2xl md:text-[28px] font-bold mb-6 tracking-tight">내장비만인의 복강</h3>
            <p className="text-[16px] md:text-[19px] font-medium leading-[1.7] break-keep mb-10 text-white/90 tracking-tight">
              처리되지 못한 대사산물의 축적으로 혈액이 탁해지고 흐름이 나빠져서 혈액 내 염증 수치 증가, 혈중 지질의 증가로 세포, 조직, 장기의 기능 저하되어 각종 질병이 발생
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
                <div className="bg-[#3b3b3b] text-white px-8 py-2.5 rounded-full font-bold w-fit md:w-32 text-center shrink-0">간</div>
                <p className="font-medium text-[16px] md:text-[18px] tracking-tight">과음 과식으로 인한 간의 울혈 현상</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
                <div className="bg-[#3b3b3b] text-white px-8 py-2.5 rounded-full font-bold w-fit md:w-32 text-center shrink-0">심장</div>
                <p className="font-medium text-[16px] md:text-[18px] tracking-tight">심장의 부담 증가 로 혈압 맥박수 증가</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
                <div className="bg-[#3b3b3b] text-white px-8 py-2.5 rounded-full font-bold w-fit md:w-32 text-center shrink-0">위</div>
                <p className="font-medium text-[16px] md:text-[18px] tracking-tight">과도한 위근육 사용으로 위벽이 붓고 단단해짐</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
                <div className="bg-[#3b3b3b] text-white px-8 py-2.5 rounded-full font-bold w-fit md:w-32 text-center shrink-0">복강</div>
                <p className="font-medium text-[16px] md:text-[18px] break-keep tracking-tight">내장지방의 증가로 인해 복강 내 공간 감소로 혈류, 림프 순환장애로 인해 복강 내 부종 발생</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
                <div className="bg-[#3b3b3b] text-white px-8 py-2.5 rounded-full font-bold w-fit md:w-32 text-center shrink-0">장</div>
                <p className="font-medium text-[16px] md:text-[18px] break-keep mt-[21px] tracking-tight">장운동 감소로 인한 음식물 독소의 처리속도 지연으로 부패 증가하여 복부 내 가스 생성이 늘어나 복부 팽만감이 생기고 배변 활동도 감소</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProcessSection() {
  return (
    <section className="visceral-process py-20 md:py-32 bg-white">
      <div className="visceral-process-main max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl mb-8 leading-tight tracking-tight text-gray-900">
          <span className="font-medium">중년의</span> <strong className="text-[#A5C614] font-black">뱃살 증가</strong><br/>
          <span className="text-black text-2xl md:text-3xl mt-4 block font-bold tracking-tight"><span className="text-[#A5C614]">→</span> 소화기계의 과부하 <span className="text-[#A5C614]">→</span> 타장기의 혈류장애와 기능저하</span>
        </h2>
        
        <div className="mb-16 max-w-4xl mx-auto">
           <p className="text-gray-800 text-[16px] md:text-[19px] leading-[1.8] break-keep tracking-tight">
             공복 상태이거나 소화기능이 원만할 때보다 과식시 소화기계 쪽의 혈류유입량이 35~40%까지 증가되면서<br className="hidden md:block"/>
             <strong className="bg-[#fff4b0] px-1 font-bold mt-1 inline-block">다른 주요 장기와 말초부위로의 혈류가 감소되면서 전신 불편 증상을 유발할 수 있습니다.</strong>
           </p>
        </div>
        
        {/* Top: Graph and List */}
        <div className="flex flex-col md:flex-row gap-10 mb-12">
          <div className="flex-1 rounded-2xl flex items-center justify-center min-h-[400px] relative">
             <Image src="/images/personal/nj_section7_1.png" alt="혈류 변화 프로세스 다이어그램" fill className="object-contain" unoptimized={true} />
             <div className="absolute inset-0 z-10 pointer-events-none">
                {[
                  { text: '폐', top: 'calc(5% + 30px)', left: 'calc(48% + 40px)' },
                  { text: '우심실 (체순환시작)', top: 'calc(18% + 50px)', left: 'calc(5% + 50px)' },
                  { text: '우심방', top: 'calc(28% + 50px)', left: 'calc(5% + 50px)' },
                  { text: '정상시', top: 'calc(20% + 50px)', left: 'calc(30% + 50px)' },
                  { text: '과식시', top: 'calc(20% + 50px)', left: 'calc(60% + 10px)' },
                  { text: '좌심방', top: 'calc(18% + 50px)', left: 'calc(80% + 50px)' },
                  { text: '좌심실 (폐순환시작)', top: 'calc(28% + 50px)', left: 'calc(80% + 50px)' },
                  { text: '혈류량감소', top: 'calc(25% + 55px)', left: 'calc(55% + 30px)' },
                  { text: '뇌', top: 'calc(32% + 50px)', left: 'calc(42% + 50px)' },
                  { text: '감소', top: 'calc(32% + 50px)', left: 'calc(55% + 30px)' },
                  { text: '관상순환', top: 'calc(42% + 50px)', left: 'calc(42% + 50px)' },
                  { text: '감소', top: 'calc(42% + 50px)', left: 'calc(55% + 30px)' },
                  { text: '신장', top: 'calc(52% + 50px)', left: 'calc(42% + 50px)' },
                  { text: '감소', top: 'calc(52% + 50px)', left: 'calc(55% + 30px)' },
                  { text: '소화기계', top: 'calc(62% + 50px)', left: 'calc(42% + 50px)' },
                  { text: '증가', top: 'calc(62% + 50px)', left: 'calc(55% + 30px)' },
                  { text: '골격근', top: 'calc(72% + 50px)', left: 'calc(42% + 50px)' },
                  { text: '감소', top: 'calc(72% + 50px)', left: 'calc(55% + 30px)' },
                  { text: '피부', top: 'calc(82% + 50px)', left: 'calc(42% + 50px)' },
                  { text: '감소', top: 'calc(82% + 50px)', left: 'calc(55% + 30px)' },
                  { text: '소화기계외 나머지기능 저하', top: 'calc(68% + 50px)', left: 'calc(70% + 50px)' },
                ].map((item, idx) => (
                   <span key={idx} className="absolute pointer-events-auto text-[8pt] text-transparent selection:bg-blue-500/30 selection:text-black font-bold whitespace-nowrap" style={{ top: item.top, left: item.left, transform: 'translate(-50%, -50%)' }}>
                     {item.text}
                   </span>
                ))}
             </div>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-5">
             {[
               { num: '01', title: '뇌혈류감소', desc: '두중감, 두통, 현기증' },
               { num: '02', title: '관상동맥순환 저하', desc: '가슴 답답함, 상열감, 상기감, 두근거림, 숨참' },
               { num: '03', title: '신장혈류감소', desc: '소변 량 감소, 부종' },
               { num: '04', title: '위장운동성저하와 혈류정체', desc: '위 부위 팽만감, 식후 답답함' },
               { num: '05', title: '근육혈류량 감소', desc: '근피로도 증가, 팔다리가 쥐나고 저리는 증상, 근육 뭉침, 수족냉증' },
               { num: '06', title: '피부혈류 감소', desc: '피부 건조, 색소침착, 잔주름, 다크 서클 등' }
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4 text-left">
                  <div className="bg-[#A5C614] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">{item.num}</div>
                  <div>
                    <strong className="text-lg font-bold bg-[#fff4b0] px-1 text-gray-900 tracking-tight">{item.title}</strong>
                    <p className="text-gray-600 mt-1 text-[15px] break-keep leading-snug tracking-tight">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Middle: Comorbidity (Full Width) - 아이콘 양옆 여백을 주어 안쪽으로 모이게 배치 */}
      <div className="visceral-comorbidities w-full bg-[#f9f9f9] py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
          <div className="flex flex-col gap-8 md:gap-12 w-full md:w-auto relative z-10 mb-10 md:mb-0">
             <div className="flex items-center gap-4">
               <div className="w-[68px] h-[68px] relative flex items-center justify-center shrink-0"><Image src="/images/personal/nj_section7_3.png" alt="대사증후군" fill className="object-contain" unoptimized={true} /></div>
               <div className="text-left">
                 <div className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">4.2배</div>
                 <div className="text-gray-600 text-base md:text-lg tracking-tight">대사증후군</div>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-[68px] h-[68px] relative flex items-center justify-center shrink-0"><Image src="/images/personal/nj_section7_4.png" alt="고혈압" fill className="object-contain" unoptimized={true} /></div>
               <div className="text-left">
                 <div className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">2배</div>
                 <div className="text-gray-600 text-base md:text-lg tracking-tight">고혈압</div>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-[68px] h-[68px] relative flex items-center justify-center shrink-0"><Image src="/images/personal/nj_section7_5.png" alt="만성콩팥병" fill className="object-contain" unoptimized={true} /></div>
               <div className="text-left">
                 <div className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">1.5배</div>
                 <div className="text-gray-600 text-base md:text-lg tracking-tight">만성콩팥병</div>
               </div>
             </div>
          </div>
          
          <div className="flex flex-col items-center relative z-10 mb-10 md:mb-0 md:mx-8">
             <div className="w-40 h-40 md:w-48 md:h-48 mb-4 relative flex items-center justify-center">
                <Image src="/images/personal/nj_section7_2.png" alt="복부비만 동반질환" fill className="object-contain" unoptimized={true} />
             </div>
             <p className="font-bold text-[25px] text-gray-900 tracking-tight">복부비만 동반질환</p>
          </div>
          
          <div className="flex flex-col gap-8 md:gap-12 w-full md:w-auto relative z-10">
             <div className="flex items-center gap-4 md:flex-row-reverse text-left md:text-right">
               <div className="w-[68px] h-[68px] relative flex items-center justify-center shrink-0"><Image src="/images/personal/nj_section7_6.png" alt="당뇨병" fill className="object-contain" unoptimized={true} /></div>
               <div>
                 <div className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">2.1배</div>
                 <div className="text-gray-600 text-base md:text-lg tracking-tight">당뇨병</div>
               </div>
             </div>
             <div className="flex items-center gap-4 md:flex-row-reverse text-left md:text-right">
               <div className="w-[68px] h-[68px] relative flex items-center justify-center shrink-0"><Image src="/images/personal/nj_section7_7.png" alt="골관절염" fill className="object-contain" unoptimized={true} /></div>
               <div>
                 <div className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">1.6배</div>
                 <div className="text-gray-600 text-base md:text-lg tracking-tight">골관절염</div>
               </div>
             </div>
             <div className="flex items-center gap-4 md:flex-row-reverse text-left md:text-right">
               <div className="w-[68px] h-[68px] relative flex items-center justify-center shrink-0"><Image src="/images/personal/nj_section7_8.png" alt="심혈관질환" fill className="object-contain" unoptimized={true} /></div>
               <div>
                 <div className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">1.4배</div>
                 <div className="text-gray-600 text-base md:text-lg tracking-tight">심혈관질환</div>
               </div>
             </div>
          </div>
          {/* Left Connecting Lines */}
          <div className="hidden md:block absolute top-[24%] bottom-[24%] left-[28%] w-[1px] bg-[#eed0d0] z-0"></div>
          <div className="hidden md:block absolute top-[24%] left-[22%] right-[72%] h-[1px] bg-[#eed0d0] z-0"></div>
          <div className="hidden md:block absolute top-1/2 left-[22%] right-[50%] h-[1px] bg-[#eed0d0] z-0 -translate-y-1/2"></div>
          <div className="hidden md:block absolute bottom-[24%] left-[22%] right-[72%] h-[1px] bg-[#eed0d0] z-0"></div>

          {/* Right Connecting Lines */}
          <div className="hidden md:block absolute top-[24%] bottom-[24%] right-[28%] w-[1px] bg-[#eed0d0] z-0"></div>
          <div className="hidden md:block absolute top-[24%] right-[22%] left-[72%] h-[1px] bg-[#eed0d0] z-0"></div>
          <div className="hidden md:block absolute top-1/2 right-[22%] left-[50%] h-[1px] bg-[#eed0d0] z-0 -translate-y-1/2"></div>
          <div className="hidden md:block absolute bottom-[24%] right-[22%] left-[72%] h-[1px] bg-[#eed0d0] z-0"></div>
        </div>
      </div>

      {/* Bottom: Brand Color Box (Full Width, No Top Margin) */}
      <div className="visceral-benefit w-full bg-[#A5C614] text-white py-12 md:py-16 px-6 text-center shadow-sm">
        <div className="max-w-6xl mx-auto">
          <p className="text-[23px] md:text-[27px] font-medium break-keep leading-relaxed tracking-tight">
            뱃살의 감소 <span className="mx-2 md:mx-4 font-black">➡</span> 정상적인 위장기능의 회복과 내장지방의 감소 <br className="hidden md:block"/>
            <span className="text-2xl md:text-4xl mt-2 block font-bold tracking-tight"><span className="mx-1 md:mx-3 font-bold">➡</span> 내과적 질병 예방과 건강관리</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function MedicineSection() {
  const medicinesTop = [
    { name: '소체환', desc: '습담(濕痰)이 위장에 정체되어 일어난 팽만감을 치료합니다.', list: ['식후도포감', '소화불량', '위식도 역류질환', '신경성위염'], image: '/images/personal/nj_section8_1.png' },
    { name: '담적환', desc: '체내의 특히 위장관 쪽의 비정상적인 생리물질을 제거하는데 처방됩니다.', list: ['오심', '구토', '어지러움', '두근거림'], image: '/images/personal/nj_section8_2.png' },
    { name: '보혈환', desc: '혈허로 인한 월경불순 · 불임 · 갱년기 증상을 치료합니다.', list: ['빈혈', '저혈압', '수족저림'], image: '/images/personal/nj_section8_3.png' },
    { name: '수독환', desc: '몸 안의 수독(水毒)을 몰아내고 몸이 붓는 부종을 치료하는데 처방됩니다.', list: ['부종', '현기증', '소변이 시원치 않은 증상'], image: '/images/personal/nj_section8_4.png' },
  ];

  const medicinesBottom = [
    { name: '가미소요산', desc: '울화(鬱火)가 쌓여 나타나는 스트레스성 증상을 치료합니다.', list: ['불면', '두근거림', '스트레스완화', '근긴장 해소'], image: '/images/personal/nj_section8_5.png' },
    { name: '어혈환', desc: '관절 주위의 원활한 혈액 흐름을 돕고, 어혈을 제거하여 연골 손상을 예방하고 만성 통증 완화에 좋습니다.', list: ['수족저림', '요통', '슬통', '퇴행성관절염'], image: '/images/personal/nj_section8_6.png' },
  ];

  return (
    <section className="visceral-medicine py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl mb-16 tracking-tight text-black">
          <span className="font-medium">내장지방을 빼기위한</span><br className="md:hidden"/> <span className="font-bold">특별한 노하우를 담은 치료한약</span>
        </h2>
        
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Top Row: 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {medicinesTop.map((med, idx) => (
              <div key={idx} className={`${['담적환', '수독환', '어혈환'].includes(med.name) ? 'bg-white' : 'bg-[#f9f9f9]'} p-6 rounded-xl border border-gray-200 flex flex-col`}>
                 <div className="w-36 h-36 md:w-44 md:h-44 bg-gray-200 rounded-full mb-6 flex flex-col items-center justify-center overflow-hidden relative shadow-sm self-center">
                    <Image src={med.image} alt={med.name} fill className="object-cover" unoptimized={true} />
                 </div>
                 <h3 className="text-2xl font-bold text-[#A5C614] mb-4 text-center tracking-tight">{med.name}</h3>
                 <p className="text-[16px] text-gray-800 font-medium break-keep leading-relaxed mb-6 h-auto min-h-[48px] text-left tracking-tight">
                   {med.desc}
                 </p>
                 <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
                 <ul className="text-left w-full flex flex-col gap-2">
                   {med.list.map((item, i) => (
                     <li key={i} className="text-gray-600 text-[16px] font-medium flex items-start gap-2 tracking-tight">
                       <span className="text-gray-400 leading-tight">·</span>
                       <span className="leading-tight break-keep">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {medicinesBottom.map((med, idx) => (
              <div key={idx} className={`${['담적환', '수독환', '어혈환'].includes(med.name) ? 'bg-white' : 'bg-[#f9f9f9]'} p-6 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center gap-8`}>
                 <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 bg-gray-200 rounded-full flex flex-col items-center justify-center overflow-hidden relative shadow-sm self-center">
                    <Image src={med.image} alt={med.name} fill className="object-cover" unoptimized={true} />
                 </div>
                 <div className="flex flex-col flex-1 text-left w-full">
                   <h3 className="text-2xl font-bold text-[#A5C614] mb-3 tracking-tight">{med.name}</h3>
                   <p className="text-[16px] text-gray-800 font-medium break-keep leading-relaxed mb-5 tracking-tight">
                     {med.desc}
                   </p>
                   <div className="w-full h-[1px] bg-gray-200 mb-5"></div>
                   <ul className="text-left flex flex-col gap-2">
                     {med.list.map((item, i) => (
                       <li key={i} className="text-gray-600 text-[16px] font-medium flex items-start gap-2 tracking-tight">
                         <span className="text-gray-400 leading-tight">·</span>
                         <span className="leading-tight break-keep">{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagnosisSection() {
  const diagnosisData = [
    {
      highlights: ['간기능 저하,', '간피로'],
      normal: '- 간열, 어혈',
      caption: '오른쪽 갈비뼈 밑',
      align: 'left',
      image: '/images/personal/nj_section9_1.png',
      seoText: '간',
      seoClass: 'translate-x-[-35px] translate-y-[-25px]'
    },
    {
      highlights: ['역류성 식도염,', '신경성 위염'],
      normal: '- 위열',
      caption: '명치부근',
      align: 'right',
      image: '/images/personal/nj_section9_2.png',
      seoText: '명치부근',
      seoClass: 'translate-y-[-10px]'
    },
    {
      highlights: ['장운동성 저하,', '장명,', '복부팽만감, 가스'],
      normal: '- 담적, 습담',
      caption: '배꼽주위',
      align: 'left',
      image: '/images/personal/nj_section9_3.png',
      seoText: '소장',
      seoClass: 'translate-y-[60px]'
    },
    {
      highlights: ['기능성, 운동성', '소화불량증'],
      normal: '- 식적',
      caption: '명치와 배꼽사이 중간',
      align: 'right',
      image: '/images/personal/nj_section9_4.png',
      seoText: '위',
      seoClass: 'translate-x-[30px] translate-y-[-40px]'
    },
    {
      highlights: ['생리불순, 생리통,', '냉대하'],
      normal: '- 자궁냉, 어혈',
      caption: '아랫배',
      align: 'left',
      image: '/images/personal/nj_section9_5.png',
      seoText: '자궁',
      seoClass: 'translate-x-[-10px]'
    },
    {
      highlights: ['변비'],
      normal: '',
      caption: '우,좌측 아랫배',
      align: 'right',
      image: '/images/personal/nj_section9_6.png',
      seoText: '대장',
      seoClass: 'translate-x-[40px] translate-y-[-60px]'
    }
  ];

  return (
    <section className="visceral-diagnosis py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-[38px] font-bold mb-20 tracking-tight text-gray-900">장기별 불편 증상에 따른 복부 진찰법</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16 max-w-5xl mx-auto">
          {diagnosisData.map((item, idx) => (
            <div key={idx} className={`flex flex-row items-center gap-3 md:gap-6 w-full ${item.align === 'left' ? 'justify-end' : 'justify-start'}`}>
              
              {/* Left Column Text (Only if align is left) */}
              {item.align === 'left' && (
                <div className="flex flex-col items-end text-right flex-1">
                  <div className="flex flex-wrap justify-end gap-1 mb-1">
                    {item.highlights.map((h, i) => (
                      <span key={i} className="inline-block bg-[#fff4b0] px-1.5 py-0.5 text-[16px] font-semibold text-gray-800 tracking-tight break-keep leading-snug">{h}</span>
                    ))}
                  </div>
                  {item.normal && <span className="visceral-diagnosis-normal text-gray-700 font-semibold text-[16px] mt-1 break-keep tracking-tight">{item.normal}</span>}
                </div>
              )}

              {/* Image Block */}
              <div className="w-[200px] md:w-[300px] flex flex-col shrink-0 bg-white shadow-sm border border-gray-200 overflow-hidden">
                <div className="w-full aspect-[4/3] bg-gray-100 relative flex flex-col items-center justify-center">
                   <Image src={item.image} alt={item.caption} fill className="object-cover" unoptimized={true} />
                   <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span className={`text-[20px] text-transparent font-bold inline-block ${item.seoClass || ''}`}>{item.seoText}</span>
                   </div>
                </div>
                <div className="w-full py-2 bg-[#f4f4f4] text-center text-[16px] md:text-[19px] font-bold text-gray-800 border-t border-gray-200 z-10 relative tracking-tight">
                  {item.caption}
                </div>
              </div>

              {/* Right Column Text (Only if align is right) */}
              {item.align === 'right' && (
                <div className="flex flex-col items-start text-left flex-1">
                  <div className="flex flex-wrap justify-start gap-1 mb-1">
                    {item.highlights.map((h, i) => (
                      <span key={i} className="inline-block bg-[#fff4b0] px-1.5 py-0.5 text-[16px] font-semibold text-gray-800 tracking-tight break-keep leading-snug">{h}</span>
                    ))}
                  </div>
                  {item.normal && <span className="visceral-diagnosis-normal text-gray-700 font-semibold text-[16px] mt-1 break-keep tracking-tight">{item.normal}</span>}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiagnosisReasonSection() {
  return (
    <section className="visceral-diagnosis-reason py-12 md:py-16 bg-[#f9f9f9] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl text-center mb-16 tracking-tight text-gray-900">
          <span className="font-bold">복부진찰법이</span> <span className="font-medium">중요한 이유?</span>
        </h2>
        
        <div className="bg-white p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
           {/* Top Half: Image and Text */}
           <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 items-stretch">
             {/* Image */}
             <div className="w-full lg:w-1/2 relative bg-gray-200 aspect-[5/4] md:aspect-[6/5] overflow-hidden flex items-center justify-center">
                 <Image src="/images/personal/nj_section10.jpg" alt="여성 복부 진찰 사진" fill className="object-cover" unoptimized={true} />
             </div>
             
             {/* Text Block */}
             <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="text-gray-600 text-[16px] md:text-[18px] leading-[1.8] break-keep font-medium mb-5 tracking-tight">
                  복부는 흉부와 달리 흉곽으로 덮여있지 않아 복부 안의 장기를 촉진하여 압통처의 반응, 종양유무, 장부의 건강 상태 등을 알아볼 수 있습니다. 정상적인 경우 일정한 세기로 눌렀을 때 배가 아프거나 단단하거나 피부가 차갑지 않은데 반해서, <strong className="bg-[#fff4b0] px-1 inline text-gray-900 font-bold">손으로 눌렀을 때 배가 많이 아프다던지, 단단하던지, 뭉쳤다던지, 차가운 느낌이 들면 거기 위치해 있는 장기가 편하지 않거나 활동성이 떨어져 있거나 해당 부위로 혈액·림프 흐름이 저하되어 있을 확률이 많습니다.</strong>
                </p>
                <p className="text-gray-600 text-[16px] md:text-[18px] leading-[1.8] break-keep font-medium tracking-tight">
                  즉, 배가 편하지 않은 사람이 장기의 피로도가 쌓여있고 장기주변의 혈류가 좋지 못해서 산소포화도는 낮고 염증 물질은 많아서 피가 끈끈해서 머리와 팔다리의 혈행도 나빠져서 얼굴과 손발이 잘 붓고 차고 저리다는 증세를 호소하게 됩니다.
                </p>
             </div>
           </div>

           {/* Bottom Half: List */}
           <div>
              <h3 className="text-2xl md:text-[25px] font-bold text-gray-900 mb-8 tracking-tight">복부의 임상적 의미</h3>
              <div className="flex flex-col gap-6">
                 
                 {/* Item 1 */}
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#A5C614] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm mt-1">01</div>
                    <div>
                      <p className="text-gray-900 font-bold text-[20px] tracking-tight mb-2">복부는 동맥혈과 정맥혈의 교류처</p>
                      <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed break-keep tracking-tight">복부의 세로중심선에 해당하는 부분이 복부대동맥 근처로 심장에서 나간 혈액이 뇌 혹은 복부 중요 장기로의 공급 상황을 반영하기 때문</p>
                    </div>
                 </div>

                 {/* Item 2 */}
                 <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#A5C614] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">02</div>
                    <p className="text-gray-900 font-bold text-[20px] tracking-tight">소화기계 특히 소장, 간 등이 면역 기능과 관련</p>
                 </div>

                 {/* Item 3 */}
                 <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#A5C614] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">03</div>
                    <p className="text-gray-900 font-bold text-[20px] tracking-tight">복부는 오장육부의 집결지</p>
                 </div>

                 {/* Item 4 */}
                 <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#A5C614] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">04</div>
                    <p className="text-gray-900 font-bold text-[20px] tracking-tight">장벽의 평활근의 이완과 수축은 내부 장기의 건강 상태를 반영</p>
                 </div>

              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="visceral-footer w-full relative bg-[#151c24]">
       <div className="visceral-footer-banner w-full relative overflow-hidden">
          <Image src="/images/mid-age/MID_29.jpg" alt="진한의원 비만 홈페이지에서 확인" width={1000} height={500} className="w-full h-auto" unoptimized={true} />
          
          {/* SEO Text Overlay (Transparent, exactly over the image text) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
             <h2 className="text-[50px] text-transparent font-bold tracking-tight mb-2 md:mb-3">진한의원 비만</h2>
             <p className="text-center text-[48px] text-transparent font-medium leading-tight">
               더 많은 사례자를 보시려면<br />
               홈페이지에서 확인해주세요
             </p>
          </div>
       </div>
    </footer>
  );
}
