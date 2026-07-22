import Image from 'next/image';
import Link from 'next/link';

export default function MiddleAgedDietPage() {
  return (
    <main className="font-pretendard overflow-x-hidden bg-white">
      <HeroSection />
      <CauseSection />
      <QnASection />
      <CoreProcessSection />
      <MedicineSection />
      <FooterSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="w-full h-[460px] md:h-[560px] relative bg-[#3a332d]">
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="w-full md:w-[55%] h-1/2 md:h-full relative">
          <Image 
            src="/images/personal/joong.jpg" 
            alt="중년 비만 메인 이미지" 
            fill 
            className="object-cover object-left"
            priority
            unoptimized
          />
        </div>
        <div className="w-full md:w-[45%] h-1/2 md:h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-[90%] xl:max-w-[85%]">
            <div className="inline-block border border-white/40 text-white/80 text-xs md:text-sm px-3 py-1 mb-4 rounded-full font-light tracking-widest">
              적절한 체중감량으로 건강한 노후를 준비!
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">진 한 의 원</h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#A5C614] tracking-tight">중년 비만</h2>
            <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed break-keep font-light opacity-90">
              중년이라서 더 어렵고 포기했던 체중감량과 함께 대사성질환의 예방과 관리를 동시에! 실패하지 않는 건강한 다이어트를 위한 맞춤 치료 프로세스
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CauseSection() {
  const causes = [
    {
      title: '기초대사량 저하',
      desc: '노화가 진행되면서 근육량이 감소하고, 이는 기초대사량 저하로 이어져 같은 양을 먹어도 쉽게 살이 찌게 됩니다.',
      icon: '대사량 저하 Icon'
    },
    {
      title: '갱년기 호르몬 변화',
      desc: '여성의 경우 폐경 이후 에스트로겐이 급감하면서 지방이 복부에 집중적으로 쌓이는 내장지방형으로 변합니다.',
      icon: '호르몬 변화 Icon'
    },
    {
      title: '활동량 및 체력 감소',
      desc: '관절의 약화나 만성 피로 등으로 인해 젊을 때에 비해 절대적인 활동량과 운동량이 현저히 줄어듭니다.',
      icon: '활동량 감소 Icon'
    },
    {
      title: '스트레스와 수면장애',
      desc: '중년기의 스트레스와 갱년기 수면장애는 식욕 조절 호르몬의 불균형을 초래하여 폭식과 야식을 유발합니다.',
      icon: '스트레스 Icon'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            중년 비만의 <strong className="text-[#A5C614]">4가지 핵심 원인</strong>
          </h2>
          <p className="text-gray-600 text-[15px] md:text-lg font-medium break-keep">
            단순한 과식이 아닌, 신체적·생리적 변화가 복합적으로 작용하는 <strong className="text-black">질환의 관점</strong>에서 접근해야 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {causes.map((cause, idx) => (
            <div key={idx} className="flex items-start gap-6 bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300">
               <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <span className="text-gray-400 text-xs font-bold text-center">{cause.icon}</span>
               </div>
               <div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 tracking-tight">{cause.title}</h3>
                  <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.7] break-keep">{cause.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QnASection() {
  return (
    <section className="py-20 md:py-32 bg-[#f4ece3]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center text-[#4a4238] mb-20 tracking-tight">
          원장님! 나잇살은 왜 이렇게 안 빠지죠?
        </h2>

        <div className="space-y-12">
          {/* Q1 */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-start">
               <div className="bg-white px-8 py-5 rounded-3xl rounded-tl-none shadow-md max-w-[80%] border border-gray-100">
                  <p className="text-[#d92b2b] font-black text-lg mb-1">환자 질문</p>
                  <p className="text-gray-800 font-bold text-[16px] md:text-[19px] leading-[1.6] break-keep">
                    "젊었을 때처럼 굶고 운동해도 예전처럼 살이 안 빠져요. 물만 먹어도 살이 찌는 기분이에요."
                  </p>
               </div>
            </div>
            <div className="flex justify-end relative">
               <div className="absolute -left-12 top-0 w-16 h-16 bg-white rounded-full border border-gray-200 shadow-sm hidden md:flex items-center justify-center overflow-hidden">
                  <span className="text-gray-400 text-xs font-bold text-center">원장님<br/>사진</span>
               </div>
               <div className="bg-[#665d51] text-white px-8 py-5 rounded-3xl rounded-tr-none shadow-md max-w-[80%] md:max-w-[70%]">
                  <p className="text-[#e2c7a4] font-black text-lg mb-1">원장님 답변</p>
                  <p className="font-medium text-[15px] md:text-[17px] leading-[1.7] break-keep">
                    나이가 들면서 근육량이 감소하고 신진대사가 떨어지기 때문입니다. 기초대사량이 저하되면 똑같은 양을 먹어도 소비되는 에너지가 적어 고스란히 지방으로 축적되는 <strong className="bg-[#A5C614]/20 px-1 text-[#e2c7a4]">'살이 잘 찌는 체질'</strong>로 변하게 됩니다. 중년 다이어트는 굶는 것이 아니라 대사를 끌어올리는 것이 핵심입니다.
                  </p>
               </div>
            </div>
          </div>

          {/* Q2 */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-start">
               <div className="bg-white px-8 py-5 rounded-3xl rounded-tl-none shadow-md max-w-[80%] border border-gray-100">
                  <p className="text-[#d92b2b] font-black text-lg mb-1">환자 질문</p>
                  <p className="text-gray-800 font-bold text-[16px] md:text-[19px] leading-[1.6] break-keep">
                    "팔다리는 얇아지는데 유독 배만 올챙이처럼 불룩하게 나와요."
                  </p>
               </div>
            </div>
            <div className="flex justify-end relative">
               <div className="absolute -left-12 top-0 w-16 h-16 bg-white rounded-full border border-gray-200 shadow-sm hidden md:flex items-center justify-center overflow-hidden">
                  <span className="text-gray-400 text-xs font-bold text-center">원장님<br/>사진</span>
               </div>
               <div className="bg-[#665d51] text-white px-8 py-5 rounded-3xl rounded-tr-none shadow-md max-w-[80%] md:max-w-[70%]">
                  <p className="text-[#e2c7a4] font-black text-lg mb-1">원장님 답변</p>
                  <p className="font-medium text-[15px] md:text-[17px] leading-[1.7] break-keep">
                    여성호르몬(에스트로겐)이 감소하는 갱년기를 기점으로 지방의 분포가 달라집니다. 피하에 골고루 분포하던 지방이 복부 내장에 집중적으로 쌓이는 <strong className="bg-[#A5C614]/20 px-1 text-[#e2c7a4]">내장지방형 비만</strong>으로 변하는 것이죠. 이는 고지혈증, 당뇨 등 대사증후군과 직결되므로 반드시 치료가 필요한 영역입니다.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          진한의원 <strong className="text-[#A5C614]">중년 다이어트</strong>의 핵심
        </h2>
        <p className="text-gray-600 text-[15px] md:text-lg font-medium break-keep mb-20">
          단순한 체중 감량이 아닌 저하된 대사 기능을 회복하고 건강을 되찾는 치료입니다.
        </p>

        <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-gray-50 rounded-3xl flex flex-col items-center justify-center border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden p-6 relative">
           {/* Line Graph Placeholder Layout */}
           <div className="absolute inset-0 bg-white"></div>
           
           {/* Fake Axis */}
           <div className="absolute left-[10%] top-[10%] bottom-[15%] w-px bg-gray-300 z-10"></div>
           <div className="absolute left-[10%] bottom-[15%] right-[10%] h-px bg-gray-300 z-10"></div>
           
           <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
              <span className="text-gray-400 font-bold text-xl mb-4">선 그래프 (체중 감량 추이) Placeholder</span>
              <div className="flex gap-4 md:gap-10 mt-10">
                 <div className="bg-[#4a72b2]/10 text-[#4a72b2] px-4 py-2 rounded-lg border border-[#4a72b2]/20 font-bold text-sm">1단계: 노폐물/독소 배출</div>
                 <div className="bg-[#d92b2b]/10 text-[#d92b2b] px-4 py-2 rounded-lg border border-[#d92b2b]/20 font-bold text-sm">2단계: 신진대사 정상화</div>
                 <div className="bg-[#599c75]/10 text-[#599c75] px-4 py-2 rounded-lg border border-[#599c75]/20 font-bold text-sm">3단계: 기초대사량 향상</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function MedicineSection() {
  const medicines = [
    { name: '보혈환', desc: '혈허로 인한 월경불순, 갱년기 증상 완화 및 혈액순환 개선' },
    { name: '가미소요산', desc: '스트레스로 인한 화를 내리고 갱년기 상열감, 수면장애 치료' },
    { name: '보중익기탕', desc: '중년의 떨어진 기력을 보충하고 면역력과 기초대사량을 증진' },
    { name: '소체환', desc: '약해진 위장 기능을 돕고 복부 내장지방 분해 촉진' }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#f9f9f9] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight text-gray-900">
          중년기 문제 치료 노하우 <span className="text-[#665d51]">맞춤 한약</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {medicines.map((med, idx) => (
             <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-32 h-32 bg-gray-50 rounded-full mb-6 flex items-center justify-center border border-gray-100 shadow-inner overflow-hidden relative">
                   <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('/images/placeholder.jpg')`}}></div>
                   <span className="text-gray-400 font-bold text-sm z-10">{med.name}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#665d51] mb-3">{med.name}</h3>
                <p className="text-[14px] md:text-[15.5px] text-gray-600 font-medium break-keep leading-[1.6]">
                  {med.desc}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="relative bg-[#1f2833] py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center">
       {/* Background overlay */}
       <div className="absolute inset-0 bg-black/20 z-0"></div>
       <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="font-paperlogy text-[150px] font-black text-white whitespace-nowrap">JIN CLINIC</span>
       </div>
       <div className="relative z-10 text-center">
         <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">진한의원 <span className="text-[#A5C614]">비만</span></h2>
         <p className="text-xl md:text-3xl text-gray-300 font-medium break-keep">더 많은 사례자를 보시려면 홈페이지에서 <span className="text-white font-bold border-b-2 border-[#A5C614] pb-1">확인</span>해주세요</p>
       </div>
    </footer>
  );
}
