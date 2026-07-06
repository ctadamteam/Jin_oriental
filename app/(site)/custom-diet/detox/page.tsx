import Image from 'next/image';

export default function DetoxDietPage() {
  return (
    <main className="w-full bg-white font-sans text-gray-800">
      {/* 1. Hero Section (상단 메인 타이틀) */}
      <section className="w-full h-[460px] md:h-[560px] relative bg-[#3a332d]">
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="w-full md:w-[55%] h-1/2 md:h-full relative">
            <Image 
              src="/images/personal/detox_title.jpg" 
              alt="진한의원 해독프로그램 진료" 
              fill 
              className="object-cover object-left"
              priority
            />
          </div>
          <div className="w-full md:w-[45%] h-1/2 md:h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block border border-white/40 text-white/80 text-xs md:text-sm px-3 py-1 mb-4 rounded-full font-light tracking-widest">
                1:1 체질별 맞춤
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 tracking-tight">진 한 의 원</h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#A5C614] tracking-tight">해독프로그램</h2>
              <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed break-keep font-light opacity-90">
                개개인의 체질, 체형, 신진대사 등 몸의 각 기관에 따라 진단을 내려 치료법을 달리하여 진행하는 해독프로그램입니다.
              </p>
            </div>
            {/* [슬라이스 필요] 우측 배경 패턴 (만약 패턴 이미지가 있다면 여기에 Absolute 로 추가) */}
          </div>
        </div>
      </section>

      {/* 2. Intro Section (독소란 무엇인가요?) */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">진한의원 <span className="text-[#A5C614]">해독요법</span></h2>
          <div className="w-12 h-1 bg-gray-200 mx-auto mt-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight break-keep tracking-tight">
              한의학에서 말하는 <span className="font-bold relative inline-block">
                독소
                {/* 텍스트 하단 형광펜 효과 */}
                <span className="absolute bottom-1 left-0 w-full h-[40%] bg-[#A5C614]/20 -z-10"></span>
              </span>란 무엇인가요?
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed break-keep text-lg">
              <span className="border-b-2 border-gray-400 font-medium pb-1 inline-block">
                독소는 일상생활 속에서 유입되는 <strong className="font-bold text-black">외부 독소</strong>와 인체에서 끊임없이 만들어 내는 대사산물과 노폐물인 <strong className="font-bold text-black">내부 독소</strong>가 있습니다.
              </span>
            </p>
            <div className="text-gray-600 leading-relaxed break-keep text-sm md:text-base space-y-4">
              <p>
                한의학적으로는 위장관에 쌓이는 식적, 조직 내에 쌓여있는 습담, 혈액 내에 쌓여있는 어혈 등으로 독소를 분류합니다. 현대인들은 과도한 스트레스, 잘못된 생활습관, 갖가지 알 수 없는 인공 독소에 노출되어 있어서 <strong className="text-black bg-yellow-100/60 px-1 py-0.5 rounded-sm">과거에 비해 독소의 유입량, 생성량은 많아지는데 비해 독소를 처리하고 배출하는 능력은 약화되었습니다.</strong>
              </p>
              <p className="text-base md:text-lg text-gray-800 font-medium pt-2">
                이는 체내 갖가지 손상과 불편한 증상들, 나아가 여러 질환을 유발하는 씨앗의 역할을 합니다.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 relative h-[350px] md:h-[450px]">
            <Image 
              src="/images/personal/detox_section_1.png" 
              alt="인체 실루엣 및 독소 그래픽" 
              fill 
              className="object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* 3. Target Audience (이런 분들께 추천합니다) */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="w-full max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mb-12">
            해독요법! <span className="text-black">이런분들께 추천</span>합니다
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-yellow-400 flex items-center justify-center mb-6 shadow-sm overflow-hidden relative">
                 <Image src="/images/personal/detox_section_3_1.png" alt="아이콘 1" fill className="object-cover scale-110" />
              </div>
              <p className="text-sm md:text-base text-gray-700 break-keep leading-snug">이유 없이 몸이 무겁고 피곤해요</p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-yellow-400 flex items-center justify-center mb-6 shadow-sm overflow-hidden relative">
                 <Image src="/images/personal/detox_section_3_2.png" alt="아이콘 2" fill className="object-cover scale-110" />
              </div>
              <p className="text-sm md:text-base text-gray-700 break-keep leading-snug">먹는 양에 비해 살이 많이 찌거나<br/>운동을 해도 살이 잘 빠지지 않아요</p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-yellow-400 flex items-center justify-center mb-6 shadow-sm overflow-hidden relative">
                 <Image src="/images/personal/detox_section_3_3.png" alt="아이콘 3" fill className="object-cover scale-110" />
              </div>
              <p className="text-sm md:text-base text-gray-700 break-keep leading-snug">피부가 가렵거나 여드름이 있거나<br/>다른 피부 질환이 있어요</p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-yellow-400 flex items-center justify-center mb-6 shadow-sm overflow-hidden relative">
                 <Image src="/images/personal/detox_section_3_4.png" alt="아이콘 4" fill className="object-cover scale-110" />
              </div>
              <p className="text-sm md:text-base text-gray-700 break-keep leading-snug">팔, 다리가 자주 저리고<br/>쥐가 나며 잘 부어요</p>
            </div>
            {/* Item 5 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-yellow-400 flex items-center justify-center mb-6 shadow-sm overflow-hidden relative">
                 <Image src="/images/personal/detox_section_3_5.png" alt="아이콘 5" fill className="object-cover scale-110" />
              </div>
              <p className="text-sm md:text-base text-gray-700 break-keep leading-snug">잦은 설사나 변비로 고생하고<br/>있어요</p>
            </div>
            {/* Item 6 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-yellow-400 flex items-center justify-center mb-6 shadow-sm overflow-hidden relative">
                 <Image src="/images/personal/detox_section_3_6.png" alt="아이콘 6" fill className="object-cover scale-110" />
              </div>
              <p className="text-sm md:text-base text-gray-700 break-keep leading-snug">두피에 염증이 생기고,<br/>모발이 많이 빠져요</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Symptom Process (각종 이상 증상들) */}
      <section className="w-full relative py-20 md:py-32 text-white bg-[#3a332d] overflow-hidden">
        {/* 배경 이미지 래퍼 (가장자리 그라데이션 페이드 효과 적용) */}
        <div 
          className="absolute inset-0 w-full max-w-5xl mx-auto z-0" 
          style={{ 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)', 
            maskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)' 
          }}
        >
          <Image 
            src="/images/personal/detox_section_4_bg.jpg" 
            alt="해독 이상 증상 배경" 
            fill 
            className="object-cover object-center opacity-30" 
          />
          {/* 상하 기본 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3a332d]/50 to-[#3a332d]/90 z-0 pointer-events-none"></div>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 md:mb-24 tracking-tight">
            몸 속에 독소가 쌓일 때 생기는 <span className="text-[#A5C614]">각종 이상 증상들</span>
          </h2>
          
          <div className="relative w-full">
            {/* 가로 점선 (PC에서만 보임) */}
            <div className="hidden md:block absolute top-[85px] left-[12%] right-[12%] h-0 border-t-[3px] border-dotted border-white/40 z-0"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center w-full md:w-1/4 relative">
                <p className="text-sm md:text-base text-gray-200 mb-6 break-keep h-10 flex items-end justify-center font-light">잘못된 식습관과 피부를 통해<br/>외부독소가 유입</p>
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#f4f4f4] text-[#3a332d] font-bold text-xl flex items-center justify-center mb-10 relative z-10 shadow-lg">01</div>
                  {/* 수직선 */}
                  <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[2px] h-[40px] bg-white z-0"></div>
                  
                  {/* 큰 원 (SVG 적용) */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-white/20"></div>
                    {/* SVG 두꺼운 반원: 2 * pi * 46 = 289 */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="46" fill="none" stroke="#f4f4f4" strokeWidth="8" strokeLinecap="round" strokeDasharray="289" strokeDashoffset="130" />
                    </svg>
                    <span className="relative z-10 text-base md:text-lg font-bold">독소유입</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center w-full md:w-1/4 relative">
                <p className="text-sm md:text-base text-gray-200 mb-6 break-keep h-10 flex items-end justify-center font-light">몸속에 지방, 특히 내장지방이 쌓임</p>
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#f4f4f4] text-[#3a332d] font-bold text-xl flex items-center justify-center mb-10 relative z-10 shadow-lg">02</div>
                  <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[2px] h-[40px] bg-white z-0"></div>
                  
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-white/20"></div>
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="46" fill="none" stroke="#f4f4f4" strokeWidth="8" strokeLinecap="round" strokeDasharray="289" strokeDashoffset="130" />
                    </svg>
                    <span className="relative z-10 text-base md:text-lg font-bold leading-snug">체내지방<br/>축적</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center w-full md:w-1/4 relative">
                <p className="text-sm md:text-base text-gray-200 mb-6 break-keep h-10 flex items-end justify-center font-light">독소로부터 염증물질이 분비되어<br/>염증이 발생</p>
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#f4f4f4] text-[#3a332d] font-bold text-xl flex items-center justify-center mb-10 relative z-10 shadow-lg">03</div>
                  <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[2px] h-[40px] bg-white z-0"></div>
                  
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-white/20"></div>
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="46" fill="none" stroke="#f4f4f4" strokeWidth="8" strokeLinecap="round" strokeDasharray="289" strokeDashoffset="130" />
                    </svg>
                    <span className="relative z-10 text-base md:text-lg font-bold leading-snug">염증물질<br/>분비</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center w-full md:w-1/4 relative">
                <p className="text-sm md:text-base text-gray-200 mb-6 break-keep h-10 flex items-end justify-center font-light">비만, 만성피로, 탈모, 피부질환 등<br/>각종 증상이 발생</p>
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#f4f4f4] text-[#3a332d] font-bold text-xl flex items-center justify-center mb-10 relative z-10 shadow-lg">04</div>
                  <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[2px] h-[40px] bg-white z-0"></div>
                  
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-white/20"></div>
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="46" fill="none" stroke="#f4f4f4" strokeWidth="8" strokeLinecap="round" strokeDasharray="289" strokeDashoffset="130" />
                    </svg>
                    <span className="relative z-10 text-base md:text-lg font-bold leading-snug">각종질병<br/>발생</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Mechanism Diagram (해독한약의 치료기전) */}
      <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mb-2">해독한약의 <span className="text-[#A5C614]">치료기전</span></h2>
          </div>
          
          <div className="relative flex flex-col items-center justify-center w-full min-h-[600px] md:min-h-[700px]">
            {/* 중앙 일러스트 플레이스홀더 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[400px] md:w-[300px] md:h-[500px] bg-gray-50 border border-dashed border-gray-300 rounded-full flex flex-col items-center justify-center text-gray-400 z-0">
               <span>[이미지 교체 필요]</span>
               <span className="text-sm">인체 장기 일러스트</span>
            </div>
            
            {/* 왼쪽 노드들 */}
            <div className="absolute top-[10%] left-0 md:left-[2%] w-[200px] md:w-[250px] z-10 bg-white/80 p-2 rounded-lg">
               <div className="flex items-center mb-2">
                 <div className="w-8 h-8 rounded-full bg-[#3a332d] text-white flex items-center justify-center font-bold mr-2">간</div>
               </div>
               <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed break-keep space-y-1">
                 <li>시호, 청피, 치자 등으로 열기를 분비, 촉진하고, 소엽, 곽향 등으로 스트레스로 인한 <strong>기체(기의 막힘)를 풀어줍니다.</strong></li>
               </ol>
            </div>
            
            <div className="absolute bottom-[25%] left-0 md:left-0 w-[200px] md:w-[250px] z-10 bg-white/80 p-2 rounded-lg">
               <div className="flex items-center mb-2">
                 <div className="w-8 h-8 rounded-full bg-[#3a332d] text-white flex items-center justify-center font-bold mr-2">대장</div>
               </div>
               <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed break-keep space-y-1">
                 <li>대황, 망초 등의 약재로 <strong>숙변을 제거</strong>하고 대장의 염증을 치료합니다.</li>
                 <li>목향, 빈랑 등의 약재로 점막에 상처가 나지 않도록 도와주고 <strong>배변을 원활히 해줍니다.</strong></li>
               </ol>
            </div>
            
            {/* 오른쪽 노드들 */}
            <div className="absolute top-[5%] right-0 md:right-0 w-[220px] md:w-[280px] z-10 bg-white/80 p-2 rounded-lg">
               <div className="flex items-center mb-2">
                 <div className="w-8 h-8 rounded-full bg-[#3a332d] text-white flex items-center justify-center font-bold mr-2">위</div>
               </div>
               <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed break-keep space-y-1">
                 <li>인삼, 건강, 육계 등으로 위장의 혈관을 확장하고 혈액순환을 개선하여, 염증 치료 및 <strong>위장 연동 운동을 촉진합니다.</strong></li>
                 <li>창출, 진피, 지실 등 위벽이 정상보다 부어있는 것을 치료하고 위장 평활근의 과긴장을 이완시키고, 위액 분비를 촉진을 통해 <strong>소화력을 향상시킵니다.</strong></li>
                 <li>석창포, 맥아 등으로 위의 기능이 향상되어 <strong>소화액 분비와 식욕을 촉진시킵니다.</strong></li>
                 <li>석고, 모려 등으로 <strong>위산의 과다분비를 제어</strong>하고 과도한 식욕으로 위산이 역류하지 않도록 해줍니다.</li>
               </ol>
            </div>
            
            <div className="absolute bottom-[10%] right-0 md:right-[2%] w-[200px] md:w-[260px] z-10 bg-white/80 p-2 rounded-lg">
               <div className="flex items-center mb-2">
                 <div className="w-8 h-8 rounded-full bg-[#3a332d] text-white flex items-center justify-center font-bold mr-2">소장</div>
               </div>
               <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed break-keep space-y-1">
                 <li>백작약, 진피, 복령 등으로 장의 긴장을 풀어 장기능의 혈액순환을 촉진하고, <strong>장의 운동성을 향상</strong>시켜 줍니다.</li>
                 <li>목통, 택사, 복령 등의 약재로 <strong>수분 흡수를 돕고 노폐물을 배출</strong>하여 장내 환경을 개선합니다.</li>
               </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ingredients List (해독 효능이 있는 한약재) */}
      <section className="w-full bg-[#f8f9f6] py-16 md:py-24">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">해독 효능이 있는 <span className="text-[#A5C614]">한약재</span></h2>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* 한약재 1 */}
            <div className="flex flex-col md:flex-row bg-white border border-gray-200 p-6 items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative rounded-lg overflow-hidden border border-gray-100">
                <Image src="/images/personal/detox_section6_1.png" alt="대황" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">대황 [大黃] : 대장운동 촉진</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  설사를 하여 체내의 열과 독을 배설하는 작용을 합니다. 장위를 세척하고 대사를 촉진하며 열성 변비와 더부룩한 속을 치료해줍니다. 복통에도 도움을 주며 약리작용으로 대장운동 촉진, 담즙 분비 촉진, 항균, 이뇨, 간 기능 보호 작용이 있습니다.
                </p>
              </div>
            </div>
            
            {/* 한약재 2 */}
            <div className="flex flex-col md:flex-row bg-white border border-gray-200 p-6 items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative rounded-lg overflow-hidden border border-gray-100">
                <Image src="/images/personal/detox_section6_2.png" alt="복령" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">복령 [茯苓] : 부종감소</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  땅속 소나무의 묵은 뿌리에서 자생하는 버섯의 일종으로 소변을 원활하게 배출해줍니다. 수분의 정체로 인한 부종, 소변불리 등에 효과적이며 위장을 튼튼하게 하여 소화기능을 향상시키고 심신을 안정시켜주는 작용이 있습니다.
                </p>
              </div>
            </div>

            {/* 한약재 3 */}
            <div className="flex flex-col md:flex-row bg-white border border-gray-200 p-6 items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative rounded-lg overflow-hidden border border-gray-100">
                <Image src="/images/personal/detox_section6_3.png" alt="의이인" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">의이인 [薏苡仁] : 조직간 독소 배출</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  우리가 잘 알고 있는 율무를 말하는 것으로, 이뇨, 진통, 진경, 강장작용이 있어 부종, 신경통, 류머티즘, 방광결석 등에 사용합니다.<br/>
                  <strong className="bg-yellow-100/80 px-1 font-medium">- 이뇨작용이 있어 부종을 예방해주며, 비만을 튼튼하게 합니다.<br/>- 소화기를 보호하고 비장을 튼튼하게 하며 장내 독소를 배출시켜줍니다.</strong>
                </p>
              </div>
            </div>

            {/* 한약재 4 */}
            <div className="flex flex-col md:flex-row bg-white border border-gray-200 p-6 items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative rounded-lg overflow-hidden border border-gray-100">
                <Image src="/images/personal/detox_section6_4.png" alt="천궁" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">천궁 [川芎] : 혈액정화</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  어혈은 탁한 피를 의미하며 체내에 머물러 혈액순환을 방해하는 독소입니다. 천궁은 이런 어혈을 풀어주고 혈액순환을 원활하게 해주며 통증을 완화하는 작용을 합니다.<br/>
                  <strong className="bg-yellow-100/80 px-1 font-medium">- 혈액 내 노폐물 배출을 도와주고 혈액을 깨끗하게 도와줍니다.</strong>
                </p>
              </div>
            </div>

            {/* 한약재 5 */}
            <div className="flex flex-col md:flex-row bg-white border border-gray-200 p-6 items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative rounded-lg overflow-hidden border border-gray-100">
                <Image src="/images/personal/detox_section6_5.png" alt="작약" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">작약 [芍藥] : 간 기능 개선</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  봄에 함박꽃이라 불리는 꽃을 피우는 작약의 뿌리로 진통, 해열, 진경, 이뇨, 항균작용이 뛰어납니다. 간 기능을 보호하고 위장염, 위경련 등에 효과적입니다.<br/>
                  <strong className="bg-yellow-100/80 px-1 font-medium">- 피를 생성해주는 보혈 작용이 있어 월경통, 무월경, 빈혈에 효과적입니다.<br/>- 기혈순환과 혈액순환에 효과적입니다.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 3 Stages & Body Parts (3단계 프로세스 및 부위별 해독) */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
              해독은 <span className="text-[#A5C614]">청소 - 재건 - 유지</span>의 3단계로 이루어집니다
            </h2>
          </div>
          
          <div className="relative w-full max-w-[1200px] mx-auto mb-24 md:h-[550px] flex flex-col md:block items-center">
            {/* 다이어그램 이미지 및 오버레이 텍스트 */}
            <div className="relative w-[270px] h-[270px] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[450px] md:h-[450px] z-0 shrink-0">
               <Image src="/images/personal/detox_section7_1.png" alt="해독 3단계 프로세스 배경" fill className="object-contain" />
               
               {/* 텍스트 오버레이 (드래그 가능) */}
               {/* 중앙 텍스트 */}
               <div className="absolute top-1/2 left-[53%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mt-[-10px]">
                 <span className="text-[#3a332d] font-black text-base md:text-xl tracking-tight">해독 단계</span>
               </div>
               
               {/* 01 청소 */}
               <div className="absolute top-[39%] left-[31%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
                 <span className="font-bold text-[10px] md:text-xs leading-none mb-1">01</span>
                 <span className="font-bold text-base md:text-xl leading-none">청소</span>
               </div>
               
               {/* 02 재건 */}
               <div className="absolute top-[39%] left-[74%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
                 <span className="font-bold text-[10px] md:text-xs leading-none mb-1">02</span>
                 <span className="font-bold text-base md:text-xl leading-none">재건</span>
               </div>
               
               {/* 03 유지 */}
               <div className="absolute top-[72%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-white">
                 <span className="font-bold text-[10px] md:text-xs">03</span>
                 <span className="font-bold text-base md:text-xl">유지</span>
               </div>
            </div>

            {/* 텍스트 요소들 - 컨테이너 */}
            <div className="w-full mt-12 md:mt-0 flex flex-col gap-10 md:block relative z-10 md:h-full md:w-full pointer-events-none">
              
              {/* Top Left (청소) */}
              <div className="md:absolute md:top-[18%] md:left-[15px] md:w-[310px] w-full text-left px-4 md:px-0 pointer-events-auto">
                <p className="text-gray-800 text-lg md:text-[20px] leading-snug break-keep border-l-[3px] border-gray-300 pl-4 py-1">
                  소화기관 및 주요한<br className="hidden md:block" />기관으로부터 <strong className="bg-[#fcfc30]/80 px-1 font-bold">점액질과독소를<br className="hidden md:block" />청소해내는 단계입니다.</strong>
                </p>
              </div>

              {/* Top Right (재건) */}
              <div className="md:absolute md:top-[12%] md:-right-[20px] md:w-[320px] w-full text-left px-4 md:px-0 pointer-events-auto">
                <div className="border-l-[3px] border-gray-300 pl-4 py-1">
                  <p className="text-gray-800 text-lg md:text-[20px] leading-snug break-keep mb-3">
                    독소를 청소한 후 <strong className="bg-[#fcfc30]/80 px-1 font-bold">조직을<br className="hidden md:block" />건강하고 최상의 상태로 만드는<br className="hidden md:block" />단계입니다.</strong>
                  </p>
                  <p className="text-[14px] md:text-[15px] text-gray-700 break-keep leading-relaxed mt-4">
                    재건단계에서는 신선한 음식이나 최소로 조리한 음식을 먹습니다. 지방과 유제품 섭취는 줄이고 튀긴 음식은 금해야 하며. 알코올, 카페인, 설탕, 담배도 멀리하며 해산물을 제외한 육류도 피하는 것이 좋습니다.
                  </p>
                </div>
              </div>

              {/* Bottom Left (유지) */}
              <div className="md:absolute md:bottom-[2%] md:left-[20px] md:w-[350px] w-full text-left px-4 md:px-0 pointer-events-auto">
                <div className="border-l-[3px] border-gray-300 pl-4 py-1">
                  <p className="text-gray-800 text-lg md:text-[20px] leading-snug break-keep mb-2">
                    해독에 있어서 가장 중요한 단계입니다.
                  </p>
                  <p className="text-[14px] md:text-[15px] text-gray-700 break-keep leading-relaxed mt-3">
                    <strong className="bg-[#fcfc30]/80 px-1 font-bold">생활 습관을 조절하여 저항력이 강한 인체를 만들도록 해야 합니다.</strong> 섬유질이 풍부한 건강한 식단과 적당한 운동을 병행하여 독소의 축적을 막는 것이 좋습니다.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* 장해독 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden bg-transparent">
                <Image src="/images/personal/detox_section7_11.png" alt="장해독 아이콘" fill className="object-cover" unoptimized={true} />
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 flex-1 w-full border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">장해독</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  설탕, 밀가루, 인스턴트, 가공식품의 과도한 섭취로 인해 나쁜 균이 늘어나게 되고 각종 노폐물과 독소를 만들어 냅니다. <strong className="bg-yellow-100/80 px-1">장 해독은 몸속의 과잉된 노폐물 찌꺼기와 독소를 몸 밖으로 배출해 건강한 장내 환경을 만들어줍니다.</strong>
                </p>
              </div>
            </div>

            {/* 간해독 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden bg-transparent">
                <Image src="/images/personal/detox_section7_22.png" alt="간 해독 아이콘" fill className="object-cover" unoptimized={true} />
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 flex-1 w-full border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">간 해독</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  외부환경에 의해 생성되는 독소도 있지만 몸속 에너지 대사 과정에서 나오는 대사산물과 박테리아 등으로 인한 인체 내에서 발생하는 내부독소도 있습니다. 술, 밀가루 등 해독이 필요한 음식을 다량으로 섭취하게 되면 우리 몸이 스스로 해독할 수 있는 정화시스템의 과부하로 간 기능이 저하되어 이상이 생깁니다. <strong className="bg-yellow-100/80 px-1">간 해독은 몸속의 잉여 노폐물과 독소로 인해 기능이 저하된 간을 정화해 몸속 독소 배출을 도와줍니다.</strong>
                </p>
              </div>
            </div>

            {/* 혈액해독 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden bg-transparent">
                <Image src="/images/personal/detox_section7_33.png" alt="혈액 해독 아이콘" fill className="object-cover" unoptimized={true} />
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 flex-1 w-full border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">혈액 해독</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  기름진 식사와 과식은 노폐물이 제대로 배출되지 못해 몸속의 독소로 남아 혈액 속을 돌아다닙니다. <br/>이렇게 <strong className="bg-yellow-100/80 px-1">탁해진 혈액은 신진대사를 방해해 질병이나 비만의 원인이 됩니다. 혈액 해독은 혈액과 함께 몸속을 돌아다니는 독소를 빠른 시간 내 제거해 혈액이 깨끗해질 수 있도록 도와드립니다.</strong>
                </p>
              </div>
            </div>

            {/* 피부해독 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden bg-transparent">
                <Image src="/images/personal/detox_section7_44.png" alt="피부해독 아이콘" fill className="object-cover scale-110" unoptimized={true} />
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 flex-1 w-full border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">피부해독</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  체내에 쌓인 독소가 제대로 배출되지 못하고 기혈의 순환이 원활하지 못하면 각종 피부 트러블과 여드름, 아토피 등 다양한 증상으로 나타나게 됩니다. 피부해독은 체질에 맞게 처방되어, <strong className="bg-yellow-100/80 px-1">몸속에 정체되어 있는 독소와 노폐물을 배출해 피부 트러블의 원인을 제거합니다.</strong>
                </p>
              </div>
            </div>

            {/* 자궁해독 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden bg-transparent">
                <Image src="/images/personal/detox_section7_55.png" alt="자궁해독 아이콘" fill className="object-cover" unoptimized={true} />
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 flex-1 w-full border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">자궁해독</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  환경 호르몬과 같은 적체된 자궁내 독소를 배출하고 자궁내의 혈액과 림프 순환을 촉진시켜 어혈을 배출하고 <strong className="bg-yellow-100/80 px-1">자궁환경 개선을 통해 염증을 치료하고 자궁관련 질환에 있어서 근본적인 치료를 가능하게 도와줍니다.</strong> 특히 평소 생리통증군이 심하거나 생리주기가 일정하지 못한 경우에 도움이 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Quality Assurance (청정한약 시스템) */}
      <section className="w-full pt-16 md:pt-24 bg-[#f9f9f9]">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-sm text-gray-400 mb-2">믿을 수 있는 진한의원</h4>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">청정한약 시스템</h2>
            <div className="w-12 h-1 bg-[#A5C614] mx-auto mt-6"></div>
          </div>
        </div>
        
        <div className="w-full relative h-[400px] flex">
         {/* 좌측 박스 */}
         <div className="w-1/2 h-full bg-[#e8eee1] relative overflow-hidden flex flex-col items-center justify-center border-r border-white/30">
           <div className="relative z-10 flex flex-col items-center text-center">
             <div className="w-24 h-24 md:w-32 md:h-32 bg-transparent relative flex items-center justify-center mb-6">
               <Image src="/images/personal/detox_section_8_1.png" alt="GMP 마크" fill className="object-contain" unoptimized={true} />
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">
               GMP 식약청 인증한약사용과<br/>한약이력시스템 도입
             </h3>
           </div>
           <div className="absolute top-4 left-4 text-white text-[10rem] font-bold leading-none -z-0">1</div>
         </div>
         {/* 우측 박스 */}
         <div className="w-1/2 h-full bg-[#e8e4db] relative overflow-hidden flex flex-col items-center justify-center">
           <Image src="/images/personal/detox_section_8_2.jpg" alt="한약재 배경" fill className="object-cover z-0" unoptimized={true} />
           <div className="absolute inset-0 bg-black/30 z-0"></div>
           <div className="relative z-10 flex flex-col items-center text-center px-4">
             <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
               믿을 수 있는 최고품질의<br/>청정약재만을 사용
             </h3>
           </div>
           <div className="absolute top-4 right-4 text-white/50 text-[10rem] font-bold leading-none -z-0">2</div>
         </div>
        </div>
      </section>

      {/* 9. Case Studies (해독 치료사례) */}
      <section className="w-full bg-[#1a1a1a] py-16 md:py-24 text-white">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-sm text-gray-400 mb-2">진한의원 해독 프로그램</h4>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">해독 치료사례</h2>
            <div className="w-12 h-1 bg-gray-600 mx-auto mt-6"></div>
          </div>

          <div className="flex flex-col gap-12">
            {/* 사례 1 */}
            <div className="bg-[#2a2a2a] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-6 text-gray-300">윤OO님 (35세 여) <span className="font-normal text-sm ml-2">치료기간: 4개월</span></h3>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
                <div className="w-full md:w-[45%] h-[300px] bg-black relative rounded-md overflow-hidden">
                  <Image src="/images/personal/detox_section9_1_1.png" alt="치료 전" fill className="object-contain" unoptimized={true} />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#A5C614] flex items-center justify-center text-white shrink-0 -my-4 md:my-0 md:-mx-4 z-10">
                  ▶
                </div>
                <div className="w-full md:w-[45%] h-[300px] bg-black relative rounded-md overflow-hidden">
                  <Image src="/images/personal/detox_section9_1_2.png" alt="치료 후" fill className="object-contain" unoptimized={true} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-[40px] justify-center text-center">
                <div className="w-full md:w-[45%]">
                  <strong className="block text-[#A5C614] text-xl mb-2">Before</strong>
                  <p className="text-sm text-gray-400 break-keep">상체, 특히 머리 쪽에 열감이 많아 안압이 있고, 두피가 가렵고 모발 빠짐도 있음. 복부가 차고, 소화가 불량아 심했음.</p>
                </div>
                <div className="w-full md:w-[45%]">
                  <strong className="block text-[#A5C614] text-xl mb-2">After</strong>
                  <p className="text-sm text-gray-400 break-keep">상체에 열감이 내려가, 안압 증상이 좋아졌으며, 두피에 가려움증이 줄어듦. 혈액순환이 원활해져 복부가 따뜻해지고, 소화가 잘됨.</p>
                </div>
              </div>
            </div>

            {/* 사례 2 */}
            <div className="bg-[#2a2a2a] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-6 text-gray-300">강OO님 (30세 남) <span className="font-normal text-sm ml-2">치료기간: 5개월</span></h3>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
                <div className="w-full md:w-[45%] h-[300px] bg-black relative rounded-md overflow-hidden">
                  <Image src="/images/personal/detox_section9_2_1.png" alt="치료 전" fill className="object-contain" unoptimized={true} />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#A5C614] flex items-center justify-center text-white shrink-0 -my-4 md:my-0 md:-mx-4 z-10">
                  ▶
                </div>
                <div className="w-full md:w-[45%] h-[300px] bg-black relative rounded-md overflow-hidden">
                  <Image src="/images/personal/detox_section9_2_2.png" alt="치료 후" fill className="object-contain" unoptimized={true} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-[40px] justify-center text-center">
                <div className="w-full md:w-[45%]">
                  <strong className="block text-[#A5C614] text-xl mb-2">Before</strong>
                  <p className="text-sm text-gray-400 break-keep">상체에 열감이 많아 두통과 무기력 증상이 있음. 수면의 질이 떨어지고, 명치답답과 속쓰림이 있음. 심했음. 하체쪽에 혈액순환이 안 돼 손발이 참.</p>
                </div>
                <div className="w-full md:w-[45%]">
                  <strong className="block text-[#A5C614] text-xl mb-2">After</strong>
                  <p className="text-sm text-gray-400 break-keep">상열감이 없어지면서 두통과 머리 무거운 증상이 완화됨. 수면 양호. 변비가 호전되고, 위장 불편감이 해소됨.</p>
                </div>
              </div>
            </div>

            {/* 사례 3 */}
            <div className="bg-[#2a2a2a] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-6 text-gray-300">이OO님 (35세 남) <span className="font-normal text-sm ml-2">치료기간: 4개월</span></h3>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
                <div className="w-full md:w-[45%] h-[300px] bg-black relative rounded-md overflow-hidden">
                  <Image src="/images/personal/detox_section9_3_1.png" alt="치료 전" fill className="object-contain" unoptimized={true} />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#A5C614] flex items-center justify-center text-white shrink-0 -my-4 md:my-0 md:-mx-4 z-10">
                  ▶
                </div>
                <div className="w-full md:w-[45%] h-[300px] bg-black relative rounded-md overflow-hidden">
                  <Image src="/images/personal/detox_section9_3_2.png" alt="치료 후" fill className="object-contain" unoptimized={true} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-[40px] justify-center text-center">
                <div className="w-full md:w-[45%]">
                  <strong className="block text-[#A5C614] text-xl mb-2">Before</strong>
                  <p className="text-sm text-gray-400 break-keep">머리에는 열이 많고 피로감이 심함. 복부가 차서 복부냉증, 복부팽만, 설사증상이 있음. 하체혈액순환이 안 돼 대장이 건강하지 못함.</p>
                </div>
                <div className="w-full md:w-[45%]">
                  <strong className="block text-[#A5C614] text-xl mb-2">After</strong>
                  <p className="text-sm text-gray-400 break-keep">복부 냉감과 명치답답이 줄어들었으며, 딱딱했던 배가 부드러워졌음. 몸무게가 줄어들었음.</p>
                </div>
              </div>
            </div>

            {/* 사례 4 */}
            <div className="bg-[#2a2a2a] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-6 text-gray-300">김OO님 (30세 여) <span className="font-normal text-sm ml-2">치료기간: 5개월</span></h3>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
                <div className="w-full md:w-[45%] h-[300px] bg-black relative rounded-md overflow-hidden">
                  <Image src="/images/personal/detox_section9_4_1.png" alt="치료 전" fill className="object-contain" unoptimized={true} />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#A5C614] flex items-center justify-center text-white shrink-0 -my-4 md:my-0 md:-mx-4 z-10">
                  ▶
                </div>
                <div className="w-full md:w-[45%] h-[300px] bg-black relative rounded-md overflow-hidden">
                  <Image src="/images/personal/detox_section9_4_2.png" alt="치료 후" fill className="object-contain" unoptimized={true} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-[40px] justify-center text-center">
                <div className="w-full md:w-[45%]">
                  <strong className="block text-[#A5C614] text-xl mb-2">Before</strong>
                  <p className="text-sm text-gray-400 break-keep">목부터 얼굴에 상열감 있음, 얼굴 홍조. 생리 주기가 불규칙하고 생리통이 심함.</p>
                </div>
                <div className="w-full md:w-[45%]">
                  <strong className="block text-[#A5C614] text-xl mb-2">After</strong>
                  <p className="text-sm text-gray-400 break-keep">생리 주기가 일정해짐. 생리통이 줄어듦. 어깨결림 완화. 수면장애가 호전되었음.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 10. Broadcast Snippet (방송 소개) */}
      <section className="w-full py-16 md:py-24 bg-white flex justify-center">
        <div className="w-full max-w-5xl px-4 flex flex-col items-center">
           <div className="w-full flex flex-col items-end">
             <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
               <Image 
                 src="/images/personal/detox_section_10.png" 
                 alt="진한의원 방송 캡처 및 설명 그래픽" 
                 fill 
                 className="object-contain" 
               />
               
               {/* 우측 텍스트 오버레이 */}
               <div className="absolute top-[10%] md:top-[15%] right-[2%] md:right-[8%] w-[55%] md:w-[48%] text-left mt-[-40px] mr-[-70px]">
                 <div className="flex items-end gap-1 md:gap-2 mb-2 md:mb-5">
                   <div className="text-[#e60012] font-bold text-[8px] sm:text-xs md:text-sm lg:text-[17px] leading-tight tracking-tighter text-right pb-1 md:pb-2">
                     부산경남<br/>대표방송
                   </div>
                   <div className="text-[#e60012] font-black text-3xl sm:text-5xl md:text-6xl lg:text-[70px] tracking-tighter italic leading-none">
                     KNN
                   </div>
                 </div>
                 
                 <h3 className="text-sm sm:text-lg md:text-xl lg:text-[26px] font-light text-gray-800 tracking-tight mb-1 md:mb-2">
                   〈메디컬24시 닥터스〉에 소개된
                 </h3>
                 <h2 className="text-base sm:text-xl md:text-2xl lg:text-[36px] font-bold text-gray-900 tracking-tight mb-2 md:mb-4 leading-snug">
                   진한의원 김효진원장의<br/>
                   <span className="block mt-1">‘내 몸이 건강해지는 해독요법’</span>
                 </h2>
                 
                 <p className="text-gray-600 text-[10px] sm:text-sm md:text-[15px] lg:text-[17px] leading-relaxed break-keep mt-2 md:mt-6">
                   진한의원 해독프로그램은 근본적으로 내 몸의 기능을 파악하여<br className="hidden xl:block" />
                   간, 신장, 장해독을 통해 혈액을 정화 하고, 장내 기름때와 노폐물<br className="hidden xl:block" />
                   배출을 돕습니다
                 </p>
               </div>
             </div>

             {/* 방영일자 (이미지 밖 우측 하단) */}
             <div className="relative z-10 text-gray-500 text-[10px] md:text-xs font-normal mt-[-25px] mr-[35px] text-right w-full pointer-events-none">
               2015년 9월 5일 방영
             </div>
           </div>
        </div>
      </section>
      
    </main>
  );
}
