import Image from 'next/image';

export default function StoryPage() {
  return (
    <main className="w-full bg-white font-sans text-gray-800">
      {/* 1. 상단 인트로 섹션 */}
      <section className="w-full max-w-5xl mx-auto px-4 pt-20 pb-10">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-center">나의 행복이 주변 모두의 행복으로 퍼져나가는</h2>
          <div className="text-3xl md:text-4xl font-bold flex items-center mb-8">
            <span className="bg-black text-[#A5C614] px-2 py-1 mr-1">행복한 진효과</span>를 아시나요?
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto mt-5 mb-4 translate-x-[20px]">
            <Image 
              src="/images/story/jin_oriental%20story_title.png" 
              alt="JIN Story" 
              width={1200} 
              height={500} 
              className="w-[80%] h-auto block"
            />
            
            <div className="mt-6 md:mt-0 md:absolute md:bottom-[12%] md:right-[50px] md:w-[34%] text-[13px] lg:text-[14px] text-gray-600 leading-[1.7] break-keep tracking-tight text-justify px-4 md:px-0">
              '오늘 서울에서 공기를 살랑이게 한 나비의 날개<br className="hidden md:block" />
              짓이 다음 달 북경에서 큰 폭풍우를 몰아치게 할<br className="hidden md:block" />
              수 있다.' 아주 작은 차이가 완전히 다른 결과를<br className="hidden md:block" />
              가져올 수 있다는 유명한 '진효과' 이론입니다.
            </div>
          </div>
        </div>
      </section>

      {/* 2. 회색 배경 메시지 블록 */}
      <section className="w-full bg-[#f4f4f4] py-16">
        <div className="w-full max-w-5xl mx-auto px-4 text-left leading-relaxed text-gray-700 md:text-lg break-keep">
          진 한의원에도 비슷한 나비효과 이론이 있습니다. 바로, <strong className="font-bold border-b border-black pb-0.5">진심은 언제나 더 큰 진심으로 돌아온다는 것</strong>입니다. 언제나 마음을 다해 다가가는 진 의료진과 직원들의 진심어린 날갯짓이 환자분들에게 치료에 대한 만족감과 따뜻한 감동서비스로 전해져 더 행복하고, 더 건강하고, 더 아름다운 나비효과를 만들어가는 것. <strong className="font-bold border-b border-black pb-0.5">진한의원의 행복한 진효과 이론입니다.</strong>
        </div>
      </section>

      {/* 3. 진의 진심 1 */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
            <Image src="/images/story/jin_oriental%20story_1.jpg" alt="진의 진심 하나" fill className="object-cover" />
            {/* 모바일: 하단에서 위로 하얗게 흐려짐 */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent md:hidden"></div>
            {/* PC: 우측에서 좌측으로 하얗게 흐려짐 */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white to-transparent hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center py-6 md:py-10 md:pl-10 lg:pl-16">
            <h4 className="text-lg font-serif mb-2 text-center">진의 진심 <span className="text-2xl font-bold">眞心</span> 하나,</h4>
            <h3 className="text-3xl md:text-4xl font-normal text-[#A5C614] mb-4 tracking-tight text-center">질병이 아닌 <span className="font-bold">사람</span>을 위합니다.</h3>
            <div className="w-full overflow-hidden mb-6 flex justify-center items-center">
              <Image src="/images/story/jin_oriental%20story_line2.png" alt="line" width={1000} height={15} className="w-[130%] max-w-none h-auto shrink-0" />
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              진 한의원의 진료철학은 빠른 진료보다 바른 진료에 있습니다. 단순히 눈에 보이는 병증을 해결하기보다 환자의 타고난 체질과 특성, 생활환경을 고려한 보이지 않는 병의 근원을 치료하고 나아가 치료받는 환자가 마음까지 어루만질 수 있는 '사람을 위하는 진심치료'로 다가가겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 진의 진심 2 */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 border-b border-gray-200">
        <div className="flex flex-col md:flex-row-reverse items-stretch">
          <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
            <Image src="/images/story/jin_oriental%20story_2.jpg" alt="진의 진심 둘" fill className="object-cover" />
            {/* 모바일: 하단에서 위로 하얗게 흐려짐 */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent md:hidden"></div>
            {/* PC: 좌측에서 우측으로 하얗게 흐려짐 (flex-row-reverse 이므로) */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white to-transparent hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center py-6 md:py-10 md:pr-10 lg:pr-16">
            <h4 className="text-lg font-serif mb-2 text-center">진의 진심 <span className="text-2xl font-bold">眞心</span> 둘,</h4>
            <h3 className="text-3xl md:text-4xl font-normal text-[#A5C614] mb-4 tracking-tight break-keep text-center">안전하고 믿을 수 있는 <span className="font-bold">청정약재</span>만 사용합니다.</h3>
            <div className="w-full overflow-hidden mb-6 flex justify-center items-center">
              <Image src="/images/story/jin_oriental%20story_line2.png" alt="line" width={1000} height={15} className="w-[130%] max-w-none h-auto shrink-0" />
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              진 한의원에서 사용하는 한약재는 식품의약품안전처의 한약재 안전검사 기준을 준수한 엄선된 규격 약재만을 사용하며, 본초학을 근거로 한 채취시기, 산지, 사용부위, 수치방법을 철저히 함으로써 항상 믿을 수 있는 최고품질의 청정약재만을 사용할 것을 약속합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 5. 진의 진심 3 */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
            <Image src="/images/story/jin_oriental%20story_3.jpg" alt="진의 진심 셋" fill className="object-cover" />
            {/* 모바일: 하단에서 위로 하얗게 흐려짐 */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent md:hidden"></div>
            {/* PC: 우측에서 좌측으로 하얗게 흐려짐 */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white to-transparent hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center py-6 md:py-10 md:pl-10 lg:pl-16">
            <h4 className="text-lg font-serif mb-2 text-center">진의 진심 <span className="text-2xl font-bold">眞心</span> 셋,</h4>
            <h3 className="text-3xl md:text-4xl font-normal text-[#A5C614] mb-4 tracking-tight break-keep text-center">언제나 <span className="font-bold">연구하고 고민하는</span> 의료진이 되겠습니다.</h3>
            <div className="w-full overflow-hidden mb-6 flex justify-center items-center">
              <Image src="/images/story/jin_oriental%20story_line2.png" alt="line" width={1000} height={15} className="w-[130%] max-w-none h-auto shrink-0" />
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              진 한의원의 의료진은 현재에 만족하지 않고 언제나 끊임없이 공부하며 최선의 치료방법을 찾기 위한 연구를 멈추지 않습니다. 또한 고객님들의 만족도 향상을 위해 시술 후 지속적인 평가와 상담을 통하여 언제나 고객을 중심으로 한 최고 수준의 의료서비스를 추구합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 6. 하단 CTA */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-xl md:text-2xl font-medium text-gray-800 leading-snug">
            <p className="text-gray-500 mb-1">프로그램은 모방해도 그 안에 체득된</p>
            <p className="text-gray-500 mb-2">독자적인 노하우까지는 모방할 수 없습니다.</p>
            <p className="font-bold text-black text-2xl md:text-3xl mt-4">그래서 진한의원의 <span className="text-[#A5C614]">'진심 치료'</span> 는 다릅니다.</p>
          </div>
          
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#A5C614] hover:bg-[#88a50f] transition-colors flex flex-col items-center justify-center text-white shadow-lg group">
              <span className="text-lg md:text-xl font-bold mb-1 group-hover:-translate-y-1 transition-transform">온라인상담</span>
              <span className="text-xs md:text-sm font-light italic">Counsel</span>
            </a>
            <a href="#" className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#A5C614] hover:bg-[#88a50f] transition-colors flex flex-col items-center justify-center text-white shadow-lg group">
              <span className="text-lg md:text-xl font-bold mb-1 group-hover:-translate-y-1 transition-transform">온라인예약</span>
              <span className="text-xs md:text-sm font-light italic">Reserve</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
