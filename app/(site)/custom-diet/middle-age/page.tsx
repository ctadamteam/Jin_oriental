import Image from 'next/image';
import type { ReactNode } from 'react';

const imagePath = (name: string) => `/images/mid-age/${name}`;

const herbs = [
  {
    name: '소체환', image: 'MID_05.png',
    description: '습담(濕痰)이 위장에 정체되어 일어난 팽만감을 치료합니다.',
    benefits: ['식후포감', '소화불량', '위식도 역류질환', '신경성위염'],
  },
  {
    name: '온궁탕', image: 'MID_06.png',
    description: '자궁으로의 혈액 흐름을 촉진하여 냉증을 개선하고, 어혈에 의해서 생기는 질병을 치료합니다.',
    benefits: ['생리통', '냉증', '생리불순'],
  },
  {
    name: '보혈환', image: 'MID_07.png',
    description: '혈허로 인한 월경불순·불임·갱년기 증상을 치료합니다.',
    benefits: ['빈혈', '저혈압', '수족저림'],
  },
  {
    name: '공진단', image: 'MID_08.png',
    description: '타고난 원기를 튼튼히 하여 오장이 조화되고, 병이 생기는 것을 예방합니다.',
    benefits: ['원기회복', '현기증', '간피로'],
  },
  {
    name: '가미소요산', image: 'MID_09.png',
    description: '울화(鬱火)가 쌓여 나타나는 스트레스성 증상을 치료합니다.',
    benefits: ['불면', '두근거림', '스트레스완화', '근긴장 해소'],
  },
  {
    name: '어혈환', image: 'MID_10.png',
    description: '관절 주위의 원활한 혈액 흐름을 돕고, 어지럼과 저림으로 수술을 예방하고 만성 통증 완화에 좋습니다.',
    benefits: ['수족저림', '요통', '슬통', '퇴행성관절염'],
  },
];

const products = [
  { name: '진 슬림탕', image: 'MID_12.png', description: '개인별 맞춤 다이어트 한약으로 다이어트는 물론 건강까지 챙겨 근본적인 체질개선까지 도와드립니다.' },
  { name: '진 슬림삼총사', image: 'MID_13.png', description: '몸에 체지방을 제거하고 영양소를 제공하며 몸 속의 노폐물과 숙변까지 함께 제거하여 요요까지 관리합니다. 환으로 되어 있어 한약을 잘 못 드시는 분들에게 권해드립니다.' },
  { name: '진 슬림환', image: 'MID_14.png', description: '식욕억제와 함께 체지방을 분해하는 환으로 근육량은 유지하면서 체지방만을 선택적으로 분리합니다.' },
  { name: '진 SS시럽', image: 'MID_15.png', description: '물이 없어도 간편하게 먹는 농축 시럽한약으로 편안하게 식욕조절을 도와 드립니다. 휴대성이 좋고, 한약의 쓴맛을 잘 못 느끼는 분들도 소아비만인 아이에게 좋습니다.' },
  { name: '요요방지환', image: 'MID_16.png', description: '다이어트 감량 후 요요방지를 위해 하루 2번 간편하게 식욕조절을 도와 요요를 예방합니다.' },
  { name: '칼로리컷다운', image: 'MID_17.png', description: '탄수화물이 지방으로 전환되는 것을 감소시키고 체지방을 줄여줍니다.' },
];

const sizePrograms = [
  { name: '산삼비만약침', image: 'MID_19.png', tone: 'aqua', description: '산삼, 사향, 웅담, 우황이 들어가 지방분해를 촉진시키고 해독작용에 도움을 줍니다.' },
  { name: '쿨쉐이핑(미쿨)', image: 'MID_20.png', tone: 'aqua', description: '쿨쉐이핑(미쿨)은 지방세포를 선택적으로 차가운 온도에 지속적으로 노출시켜 지방세포가 자연적으로 사멸하는 원리를 이용한 비수술적 체형관리 시술법입니다.' },
  { name: '심부투열치료', image: 'MID_21.png', tone: 'light', description: '하복부를 온열요법으로 마사지하여 자궁·장기와 제하복부 순환을 활성화 시킵니다.' },
  { name: '지방분해침', image: 'MID_22.png', tone: 'light', description: '피하지방층에 장침을 삽입한 후 지방분해에 적합한 자극수용을 올려보내 전기적 자극을 주는 방법으로, 지방조직을 자극하고 국소 혈류순환을 개선하여 지방분해 효과를 가속화 시켜 지방세포의 원활한 순환을 유도합니다.' },
  { name: '한방메조테라피', image: 'MID_23.png', tone: 'dark', description: '지방분해 효과가 있는 한약재를 정제하여 피하지방층의 경혈에 직접 주입함으로써 한방적용의 지방량에 종속되는 과정에서 경혈자극을 통한 교감신경을 촉진시키고, 에너지 대사량을 증진시켜 지방분해 효과를 나타나게 합니다.' },
  { name: '다이어트 이침', image: 'MID_24.png', tone: 'dark', description: '귀에 소화액 분비와 식욕을 조절하는 경혈점에 작은 이침을 붙여 식욕을 억제하고 식사 조절을 돕고, 근본을 통해 전체적으로 칼로리 섭취를 감소시키는 효과를 얻을 수 있습니다.' },
  { name: '위(胃)회춘침', image: 'MID_25.png', tone: 'light', description: '팔꿈치 아래와 무릎 아래쪽에 있는 주요 경혈점에 수침을 자극하여 반복되는 다이어트와 무절제한 식이로 지친 위와 장의 운동을 활성화시키는 진한의원만의 특별한 침 치료법 입니다.' },
  { name: '온열적선/중저주파', image: 'MID_26.png', tone: 'light', description: '온열마사지 및 다량의 초음파를 균일하게 방사하는 중저주파 시술을 통해 원하는 부위의 근육과 조직 등을 이완시키고 혈류하고 산소공급량을 증가시켜 다이어트 효과가 극대화 될 수 있도록 유도합니다.' },
];

function Chat({ doctor = false, woman = false, children }: { doctor?: boolean; woman?: boolean; children: ReactNode }) {
  const icon = doctor ? 'MID_03.png' : woman ? 'MID_04.png' : 'MID_02.png';
  return (
    <div className={`mid-chat ${doctor ? 'mid-chat--doctor' : ''}`}>
      {!doctor && <Image src={imagePath(icon)} alt="상담자" width={100} height={100} loading="eager" unoptimized />}
      <p>{children}</p>
      {doctor && <Image src={imagePath(icon)} alt="진한의원 의료진" width={100} height={105} loading="eager" unoptimized />}
    </div>
  );
}

function DecorativeTitle({ children }: { children: ReactNode }) {
  return <h2 className="mid-deco-title">{children}<span aria-hidden="true" /></h2>;
}

export default function MiddleAgeDietPage() {
  return (
    <main className="mid-page">
      <article className="mid-content">
        <header className="mid-page-heading"><h1>중년 다이어트</h1></header>

        <section className="mid-hero" aria-labelledby="mid-hero-title">
          <div className="mid-hero-photo"><Image src={imagePath('MID_01.png')} alt="중년 다이어트 상담" fill priority sizes="672px" unoptimized /></div>
          <div className="mid-hero-copy">
            <p>적절한 체중감량으로 건강한 노후를 준비!</p>
            <h2 id="mid-hero-title">
              <div className="mid-hero-top-row"><span>중</span><span>년</span></div>
              <b>다이어트</b>
            </h2>
            <p className="mid-hero-detail">중년이라서 더 어렵고 포기했던 체중감량과 함께<br />대사성질환의 예방과 관리를 동시에!<br />실패하지 않는 건강한 다이어트를 위한 맞춤 치료<br />프로세스</p>
          </div>
        </section>

        <section className="mid-introduction">
          <h2>중년비만이란?</h2>
          <p className="mid-lead">40대 후반에서 50대 중반, 즉 우리가 갱년기라고 부르는 시기를 거치면서 성호르몬의 변화로 인해 등, 팔뚝과 같은 상체와 복부를 중심으로 <mark>체지방이 침착되면서 군살이 붙기 쉽고, 근육량과 골밀도는 감소하는 특징적인 비만이 진행되는 시기입니다.</mark></p>
          <p>특히, 갱년기비만을 방치하게 되면 늘어난 체지방이 여성은 여성호르몬을 남성은 남성호르몬의 분비가 감소하여 골밀도 감소 등 갱년기 질환을 일으키는 악순환이 되풀이되므로 반드시 적절한 체중감량으로 건강한 노후를 준비해야 합니다.</p>
        </section>

        <section className="mid-causes">
          <h2>중년비만의 원인</h2>
          <div className="mid-cause-flow">
            {['성호르몬의\n급격한 저하', '신진대사 기능\n감소', '근육량\n감소', '에너지 대사율\n감소'].map((cause, index) => (
              <div className="mid-cause-item" key={cause}>
                <b>{cause.split('\n').map(line => <span key={line}>{line}</span>)}</b>
                {index < 3 && <i aria-hidden="true">›</i>}
              </div>
            ))}
          </div>
          <p>갱년기가 되면 성호르몬이 급격히 저하되는 만큼 몸의 신진대사 기능이 떨어져 근육량은 줄어 들고 상대적으로 에너지 대사율이 감소하게 됩니다. 때문에 평소와 같은 열량을 섭취해도 잉여 에너지가 남아 지방으로 전환되어 축적되기 때문에 오히려 체중이 쉽게 증가하게 됩니다. 또한 나이가 들수록 생활여건의 호전으로 음식을 과다 섭취하거나, 운동량이 현저히 줄어드는 것 역시 중년비만의 원인이 될 수 있습니다.</p>
        </section>

        <section className="mid-conversations">
          <div className="mid-question">다이어트를 하고 싶은데 나이가 들수록 관절은 아파 운동이 힘듭니다. 가능할까요?</div>
          <div className="mid-chat-area">
            <Chat>나이가 들수록 만사가 귀찮고 몸도 힘들고 관절도 약해졌는데 괜히 다이어트 했다가 몸이 더 나빠지거나 없던 병도 생기지 않을까요?</Chat>
            <Chat doctor>‘나이살이겠거니..’ 하고 방치하기에 중년층 비만은 대사성 질환과 관절질환에 매우 안좋습니다. 하지만 운동만으로는 중년층 체중감량에 한계가 있습니다. 약해진 뼈와 관절에 더 이상 무리가 가지 않기 위해서도 과체중은 해결해야 하며, 지방의 증가는 혈액의 염증과 순환장애를 유발하므로 중년기의 생리적·병리적 특성에 맞는 관리가 필요합니다.</Chat>
          </div>
          <div className="mid-question">갱년기가 오고 몸이 붓고 군살이 붙습니다.</div>
          <div className="mid-chat-area mid-chat-area--second">
            <Chat woman>최근 갑자기 몸이 무거운 느낌입니다. 갱년기까지 와서 머리와 가슴으로 화는 치밀어 오르는데 배와 손발은 냉기가 돌고 피가 안 통하는지 늘 여기저기 저리고 붓는데, 살이 찌니 갱년기 증상이 더 심해지는 것 같습니다. 늘어난 뱃살과 갱년기 증상을 동시에 치료할 수는 없나요?</Chat>
            <Chat doctor>갱년기 증상은 누구나 다 겪어야 하는 필수 증상만은 아닙니다. 나이가 들면 주름살이 늘어나는 것을 막을 수 없는 것처럼 자궁과 난소의 노화로 인한 여성 호르몬의 감소는 막을 수 없지만 모든 중년층의 사람들이 똑같은 정도의 안면홍조, 상열감, 감정조절 장애 등을 겪는 것은 아닙니다.</Chat>
            <Chat doctor>한의학에서는 자궁·난소 외에도 다른 장기들의 기능이 저하되고 오장육부간의 균형이 깨진 사람일수록 갱년기 증상이 심해지고 순환장애로 인한 습담, 어혈로 군살이 붙고 부종이 심해지므로 적절한 체내환경의 회복과 치료를 통해 갱년기 증상 완화와 체중감량이 동시에 가능합니다.</Chat>
          </div>
        </section>

        <section className="mid-change">
          <h2>중년 체중감량을 통한 신체적 변화</h2>
          <div className="mid-chart">
            <div className="mid-chart-tabs"><b>01. 해독치료 단계</b><b>02. 감량치료 단계</b><b>03. 회복치료 단계</b></div>
            <svg viewBox="0 0 900 460" role="img" aria-label="중년 체중감량에 따른 신체 변화 그래프">
              <defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="#b97f9f" strokeOpacity=".18" strokeWidth="1" /></pattern></defs>
              <rect x="0" y="0" width="900" height="420" fill="url(#grid)" />
              <g stroke="#5c4b4a" strokeWidth="2"><line x1="0" y1="420" x2="900" y2="420" /><line x1="0" y1="0" x2="0" y2="420" /></g>
              <g stroke="#7b617d" strokeDasharray="4 4"><line x1="300" y1="0" x2="300" y2="420" /><line x1="600" y1="0" x2="600" y2="420" /></g>
              <path d="M10 100 C125 105 180 167 280 275 S535 360 890 370" fill="none" stroke="#487dc8" strokeWidth="3" />
              <path d="M10 118 C175 150 210 235 330 290 S590 355 890 385" fill="none" stroke="#50ad38" strokeWidth="3" />
              <path d="M10 150 C152 158 250 169 360 235 S660 360 890 370" fill="none" stroke="#1d3978" strokeWidth="3" />
              <path d="M10 165 C135 178 198 296 305 350 S640 387 890 396" fill="none" stroke="#e4006d" strokeWidth="3" />
              <path d="M10 390 C215 390 280 300 405 208 S705 60 890 60" fill="none" stroke="#20c9da" strokeWidth="4" />
              <g fill="#51433e" fontSize="16" fontWeight="700"><text x="294" y="452">1개월</text><text x="594" y="452">2개월</text><text x="863" y="452">시간</text></g>
              <g fontSize="16" fontWeight="700"><text x="45" y="262" fill="#d80062">복부 팽만감,가스<tspan x="45" dy="21">등의 소화기 불편감</tspan></text><text x="667" y="116" fill="#00a4ca">체력, 신진대사<tspan x="667" dy="21">혈행순환 소화속도</tspan></text><text x="721" y="290" fill="#193370">갱년기증상, 불면,<tspan x="721" dy="20">안면홍조, 상열감 등</tspan></text><text x="786" y="342" fill="#3c9a28">체중</text><text x="696" y="384" fill="#2873cb">부종,순환장애,무기력감 등</text></g>
            </svg>
          </div>
        </section>

        <section className="mid-outcome">
          <p>즉 제반 불편한 증상은 그대로이면서 체중만 감소된 것은 의미가 없습니다.</p>
          <b>[ 소화불량 대사저하, 갱년기 장애 개선 + 체중감량 ]</b>
          <div className="mid-outcome-arrow" aria-hidden="true">
            <svg width="48" height="40" viewBox="0 0 24 24" fill="#fff99c">
              <path d="M12 20L4 12H9V4H15V12H20L12 20Z"/>
            </svg>
          </div>
          <strong>올바른 다이어트</strong>
        </section>

        <section className="mid-herbs visceral-medicine pt-4 md:pt-6 pb-16 md:pb-24 bg-white -mt-[10px]">
          <div className="w-full max-w-[1100px] mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-[38px] mb-16 tracking-tight text-black">
              <span className="font-medium">중년기의 여러문제를 치료하기 위한</span><br className="hidden md:block"/> <span className="font-bold">특별한 노하우를 담은 한약</span>
            </h2>
            
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Top Row: 4 Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {herbs.slice(0, 4).map((med, idx) => (
                  <div key={idx} className={`${['온궁탕', '공진단', '어혈환'].includes(med.name) ? 'bg-white' : 'bg-[#f9f9f9]'} p-6 rounded-xl border border-gray-200 flex flex-col`}>
                     <div className="w-36 h-36 md:w-44 md:h-44 bg-gray-200 rounded-full mb-6 flex flex-col items-center justify-center overflow-hidden relative shadow-sm self-center">
                        <Image src={imagePath(med.image)} alt={med.name} fill className="object-cover" unoptimized={true} />
                     </div>
                     <h3 className="text-2xl font-bold text-[#A5C614] mb-4 text-center tracking-tight">{med.name}</h3>
                     <p className="text-[16px] text-gray-800 font-medium break-keep leading-relaxed mb-6 h-auto min-h-[48px] text-left tracking-tight">
                       {med.description}
                     </p>
                     <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
                     <ul className="text-left w-full flex flex-col gap-2">
                       {med.benefits.map((item, i) => (
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
                {herbs.slice(4, 6).map((med, idx) => (
                  <div key={idx} className={`${['온궁탕', '공진단', '어혈환'].includes(med.name) ? 'bg-white' : 'bg-[#f9f9f9]'} p-6 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center gap-8`}>
                     <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 bg-gray-200 rounded-full flex flex-col items-center justify-center overflow-hidden relative shadow-sm self-center">
                        <Image src={imagePath(med.image)} alt={med.name} fill className="object-cover" unoptimized={true} />
                     </div>
                     <div className="flex flex-col flex-1 text-left w-full">
                       <h3 className="text-2xl font-bold text-[#A5C614] mb-3 tracking-tight">{med.name}</h3>
                       <p className="text-[16px] text-gray-800 font-medium break-keep leading-relaxed mb-5 tracking-tight">
                         {med.description}
                       </p>
                       <div className="w-full h-[1px] bg-gray-200 mb-5"></div>
                       <ul className="text-left flex flex-col gap-2">
                         {med.benefits.map((item, i) => (
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

        <section className="mid-doctor-intro">
          <div>
            <h2>진한의원 중년 다이어트</h2>
            <p>갱년기 증후군을 겪는 여성들은 개인에 따라 정도의 차이가 있지만 몸과 마음에 모두 큰 변화를 겪는 시기인 만큼 적절한 관리가 필요합니다. 때문에 이런 특성을 고려하여 불필요한 지방은 감소시키면서도 근육과 뼈는 최대한 보호하는 갱년기 환자만을 위한 다이어트 프로그램이 반드시 필요합니다.</p>
            <p className="mid-highlight">
              <mark>오랜 기간 비만과 부인과 치료에 대한 임상경험을 축적해온 진한의원 에서는</mark><br />
              <mark>단순한 다이어트 처방만이 아닌 다양한 갱년기 증상을 완화시키고 건강한</mark><br />
              <mark>노후생활을 준비하기 위한 초석을 다지는 갱년기 다이어트 프로세스를 통해</mark><br />
              <mark>자연스러운 체중감량을 도와드립니다.</mark>
            </p>
          </div>
          <Image src={imagePath('MID_11.png')} alt="진한의원 중년 다이어트 안내" width={327} height={472} loading="eager" unoptimized />
        </section>

        <section className="mid-products"><DecorativeTitle>진한의원 다이어트 프로그램</DecorativeTitle><div className="mid-product-grid">{products.map(product => <article key={product.name}><h3>{product.name}</h3><p>{product.description}</p><Image src={imagePath(product.image)} alt={product.name} width={306} height={239} loading="eager" unoptimized /></article>)}</div></section>

        <section className="mid-injection"><h2>산삼비만약침</h2><p>부분비만에 사용하는 산삼비만약침으로 산삼, 사향, 웅담, 우황이 들어가 있어 지방분해를 촉진하고 해독작용에 도움을 줍니다.</p><div className="mid-injection-detail"><div className="mid-ingredient-list"><article><b>산삼</b><p>혈중 지질감소와 지방세포 분화 억제 및 피괴에 효과가 있고 인체의 기초대사량을 높여줍니다.</p></article><article><b>사향</b><p>지방분해를 촉진시키며 대사작용을 증가시키고 식욕을 억제하는 효과가 있습니다.</p></article><article><b>웅담</b><p>담즙산, 티우르콜산 등이 주성분으로 항염증 작용, 해독작용이 있으며 혈중지질을 감소시킵니다.</p></article><article><b>우황</b><p>비만으로 인한 고혈압을 완화시키고 경련을 예방하고 웅담과 함께 혈중지질을 감소시킵니다.</p></article></div><Image src={imagePath('MID_18.png')} alt="산삼비만약침" width={311} height={238} loading="eager" unoptimized /></div></section>

        <section className="mid-tip"><Image src="/images/che-diet/diet_tip_bg.jpg" alt="DIET PROGRAM TIP" width={1000} height={541} loading="eager" unoptimized /></section>

        <section className="mid-size"><DecorativeTitle>부위별 사이즈 감소 프로그램</DecorativeTitle><p>운동으로 빼기 힘든 등, 허벅지, 복부 등 <strong>국소적인 부위의 사이즈 감소</strong>에 효과적인 프로그램입니다.</p><div className="mid-size-grid">{sizePrograms.map(program => <article className={`mid-size-card mid-size-card--${program.tone}`} key={program.name}><div className="mid-size-photo"><Image src={imagePath(program.image)} alt={program.name} fill sizes="250px" loading="eager" unoptimized /></div><div className="mid-size-copy"><h3>{program.name}</h3><p>{program.description}</p></div></article>)}<div className="mid-size-finale"><div className="mid-size-photo"><Image src={imagePath('MID_27.png')} alt="S-body 체형매선" fill sizes="250px" loading="eager" unoptimized /></div><div className="mid-size-copy"><h3>S-body 체형매선</h3><p>다이어트, 임신, 출산 등으로 늘어지고 처진 부위에 경혈과 경락자리를 따라 한방약실을 자입하여 지방세포의 소실로 인한 탄력저하를 개선하고 이상적인 몸매라인을 형성합니다. 체형매선 시술후에는 특수약실의 피부속 내에서 스스로 녹으면서 지속적인 피부의 혈부조직을 자극, 탄력증가 및 리프팅 효과를 얻을 수 있습니다.</p></div><div className="mid-size-logo"><Image src={imagePath('MID_28.png')} alt="진한의원" fill sizes="250px" loading="eager" unoptimized /></div></div></div>
        </section>

        <footer className="mid-footer"><Image src={imagePath('MID_29.jpg')} alt="진한의원 비만 상담" width={1000} height={500} loading="eager" unoptimized /></footer>
      </article>

      <style dangerouslySetInnerHTML={{ __html: `
        .mid-page{width:100%;overflow:hidden;background:#fff;color:#444;font-family:Arial,'Malgun Gothic',sans-serif}.mid-content{width:min(100%,1000px);margin:0 auto;background:#fff}.mid-content *{box-sizing:border-box}.mid-page-heading{height:100px;padding-top:14px;border-bottom:1px dotted #bbb}.mid-page-heading h1{margin:0;color:#0b0b0b;font-family:Arial,'Malgun Gothic',sans-serif;font-size:38px;font-weight:700;letter-spacing:-4px}
        .mid-hero{display:grid;margin-top:10px;grid-template-columns:672px 328px;height:365px}.mid-hero-photo{position:relative;overflow:hidden}.mid-hero-photo img{object-fit:cover}.mid-hero-copy{padding:58px 0 0 37px;background:#433124}.mid-hero-copy p{margin:0;color:#cfc5bd;font-size:15px;letter-spacing:-1px}
        .mid-hero-copy h2{display:block;margin:10px 0 17px;color:#ffec55;font-size:55px;font-weight:400;line-height:.95}
        .mid-hero-top-row{display:flex;justify-content:space-between;width:252px}
        .mid-hero-copy h2 b{display:block;margin-top:12px;color:#fff;font-size:55px;font-weight:700;letter-spacing:14px;white-space:nowrap}
        .mid-hero-copy .mid-hero-detail{font-size:14px;line-height:1.8}
        .mid-introduction{padding:90px 0 50px}.mid-introduction h2{margin:0 0 26px;color:#9a55ad;font-family:Arial,'Malgun Gothic',sans-serif;font-size:43px;font-weight:700;letter-spacing:-4px}.mid-introduction p{margin:0;color:#777;font-size:15px;line-height:1.75;letter-spacing:-1.25px}.mid-introduction .mid-lead{margin-bottom:11px;color:#3d3d3d;font-size:18px;font-weight:700;line-height:1.6;letter-spacing:-1.8px}.mid-introduction mark{padding:0;background:linear-gradient(transparent 59%,#fff117 59%,#fff117 91%,transparent 91%)}
        .mid-causes{min-height:565px;padding:52px 58px 48px;background:#70547a;color:#fff}.mid-causes h2{margin:0 0 56px;text-align:center;font-size:38px;font-weight:700;letter-spacing:-3px}.mid-cause-flow{display:flex;align-items:center;justify-content:space-between}.mid-cause-item{display:flex;align-items:center;gap:17px}.mid-cause-item b{display:flex;width:182px;height:182px;align-items:center;justify-content:center;border-radius:50%;box-shadow:0 3px 4px rgba(0,0,0,.3);background:#fff;color:#70547a;text-align:center;font-size:26px;font-weight:700;line-height:1.18;letter-spacing:-2.5px}.mid-cause-item b span{display:block}.mid-cause-item i{color:#d9cae2;font-size:62px;font-style:normal;font-weight:200;line-height:1}.mid-causes>p{margin:39px auto 0;padding-top:21px;border-top:6px solid #c9b1d3;color:#fff;font-size:16px;line-height:1.65;letter-spacing:-1.4px;word-break:keep-all;text-align:center}
        .mid-conversations{background:#fff}.mid-question{display:flex;min-height:100px;align-items:center;justify-content:center;padding:18px 45px;background:linear-gradient(#73514e,#573e3f);color:#fff;text-align:center;font-size:24px;font-weight:700;line-height:1.38;letter-spacing:-2px}.mid-chat-area{padding:52px 39px 52px;background-color:#6d8bb8;background-image:repeating-linear-gradient(-45deg,rgba(255,255,255,.03) 0 2px,transparent 2px 5px)}.mid-chat{display:flex;gap:28px;align-items:flex-start;margin:0 0 25px}.mid-chat:last-child{margin-bottom:0}.mid-chat>img{width:100px;height:100px;flex:0 0 auto;border-radius:18px;background:#fff}.mid-chat p{position:relative;max-width:640px;margin:30px 0 0;padding:30px 44px;border-radius:42px;background:#fff;color:#0a0a0a;font-size:21px;font-weight:700;line-height:1.42;letter-spacing:-1.9px;word-break:keep-all}.mid-chat:not(.mid-chat--doctor) p:before{position:absolute;top:28px;left:-17px;border-width:12px 18px 12px 0;border-style:solid;border-color:transparent #fff transparent transparent;content:''}.mid-chat--doctor{justify-content:flex-end;align-items:center}.mid-chat--doctor p{margin:0;background:#fff898}.mid-chat--doctor p:after{position:absolute;right:-17px;bottom:24px;border-width:12px 0 12px 18px;border-style:solid;border-color:transparent transparent transparent #fff898;content:''}.mid-chat--doctor>img{height:105px}.mid-chat-area--second{padding-top:50px;padding-bottom:61px}.mid-chat-area--second .mid-chat:first-child p{margin-top:19px}
        .mid-change{padding:84px 48px 52px;background:#fdfbfc}.mid-change h2{margin:0 0 49px;color:#3a3a3a;text-align:center;font-size:37px;font-weight:700;letter-spacing:-3.5px}.mid-chart{padding:45px 47px 18px;background-color:#f1e3ee;background-image:linear-gradient(rgba(147,84,119,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(147,84,119,.13) 1px,transparent 1px);background-size:10px 10px}.mid-chart-tabs{display:grid;margin-bottom:16px;grid-template-columns:repeat(3,1fr);gap:98px}.mid-chart-tabs b{padding:10px 0;border-radius:26px;background:#ac9999;color:#fff;text-align:center;font-size:15px;font-weight:700}.mid-chart-tabs b:nth-child(2){background:#74527f}.mid-chart-tabs b:nth-child(3){background:#c00971}.mid-chart svg{display:block;width:100%;height:auto}
        .mid-outcome{display:flex;min-height:386px;align-items:center;flex-direction:column;justify-content:center;padding:47px 20px;background:#70547a;color:#fff;text-align:center}.mid-outcome p{margin:0 0 13px;font-size:24px;letter-spacing:-2px}.mid-outcome b{font-size:32px;font-weight:700;letter-spacing:-2px}.mid-outcome-arrow{margin:20px 0 18px;display:flex;align-items:center;justify-content:center}.mid-outcome strong{padding:13px 47px;border-radius:45px;background:#2f2f2f;color:#fff99c;font-size:39px;font-weight:700;line-height:1}
        .mid-herbs{background:#fff!important}.mid-herbs>div{max-width:1100px!important;padding-right:16px!important;padding-left:16px!important}
        .mid-doctor-intro{display:grid;min-height:550px;margin-top:54px;padding:62px 66px 0;grid-template-columns:1fr 327px;gap:25px;background:#fdfafb}.mid-doctor-intro h2{margin:15px 0 34px;color:#292427;font-family:Arial,'Malgun Gothic',sans-serif;font-size:46px;font-weight:700;letter-spacing:-4px}.mid-doctor-intro p{margin:0 0 26px;color:#6d6869;font-size:16px;line-height:1.72;letter-spacing:-1.35px;word-break:keep-all}.mid-doctor-intro .mid-highlight{margin:0;color:#222;font-size:16px;font-weight:700;line-height:2.0}.mid-doctor-intro .mid-highlight mark{background:#fff319;color:#222;padding:3px 6px;border-radius:2px;display:inline-block;margin-bottom:2px}.mid-doctor-intro>img{align-self:end;width:327px;height:472px}
        .mid-deco-title{position:relative;margin:0 auto;color:#1b1919;text-align:center;font-family:Arial,'Malgun Gothic',sans-serif;font-size:53px;font-weight:700;letter-spacing:-5px}.mid-deco-title:after{display:block;width:600px;height:9px;margin:14px auto 0;background:linear-gradient(90deg,#48271c,#855846,#48271c);box-shadow:0 3px 3px rgba(0,0,0,.25);content:''}.mid-deco-title span{position:absolute;bottom:-8px;left:50%;width:0;height:0;border-right:48px solid transparent;border-bottom:25px solid #6d4634;border-left:48px solid transparent;transform:translateX(-50%)}.mid-products{padding:117px 0 81px}.mid-products .mid-deco-title{margin-bottom:104px}.mid-product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:76px 40px}.mid-product-grid article h3{margin:0 0 13px;padding-bottom:8px;border-bottom:5px solid #64c4cb;color:#3c3c3c;font-size:31px;font-weight:700;letter-spacing:-3px}.mid-product-grid article p{min-height:91px;margin:0 0 16px;color:#555;font-size:16px;line-height:1.46;letter-spacing:-1.35px;word-break:keep-all}.mid-product-grid article>img{display:block;width:100%;height:236px;object-fit:cover}
        .mid-injection{padding:9px 0 68px}.mid-injection>h2{display:inline-block;width:fit-content;margin:0 0 12px;padding-bottom:9px;border-bottom:5px solid #64c4cb;color:#333;font-size:35px;font-weight:700;letter-spacing:-3px}.mid-injection>p{margin:0 0 25px;color:#555;font-size:16px;letter-spacing:-1.2px}.mid-injection-detail{display:grid;grid-template-columns:1fr 310px;gap:38px;align-items:center}.mid-ingredient-list{display:grid;grid-template-columns:repeat(2,1fr);gap:29px 40px}.mid-ingredient-list article{position:relative;padding-left:64px}.mid-ingredient-list article:before{position:absolute;top:3px;left:12px;width:37px;height:37px;background:#dfe7e8;content:'';transform:rotate(45deg)}.mid-ingredient-list b{position:relative;color:#333;font-family:Arial,'Malgun Gothic','Pretendard',sans-serif;font-size:29px;font-weight:400 !important;letter-spacing:-2px}.mid-ingredient-list p{position:relative;margin:6px 0 0;color:#555;font-size:14px;line-height:1.45;letter-spacing:-1px}.mid-injection-detail>img{width:310px;height:auto}.mid-tip{line-height:0}.mid-tip img{width:100%;height:auto}
        .mid-size{padding:113px 0 0}.mid-size .mid-deco-title{margin-bottom:73px}.mid-size>p{margin:0 0 55px;padding:13px 15px;background:repeating-linear-gradient(-45deg,#f6f6f6 0 1px,#fff 1px 4px);color:#444;text-align:center;font-size:20px;letter-spacing:-1.8px}.mid-size>p strong{color:#e56c5b;font-weight:700}.mid-size-grid{display:grid;grid-template-columns:repeat(2,1fr)}.mid-size-card{display:grid;min-height:204px;grid-template-columns:47.5% 52.5%}.mid-size-photo{position:relative;min-height:204px;overflow:hidden}.mid-size-photo img{object-fit:cover}.mid-size-copy{padding:17px 15px;background:#fff;color:#3f3f3f}.mid-size-copy h3{display:table;width:fit-content;margin:0 0 11px;padding-bottom:5px;border-bottom:3px solid #069fb0;color:#0297a7;font-size:29px;font-weight:700;line-height:1;letter-spacing:-2.7px}.mid-size-copy p{margin:0;font-size:15px;line-height:1.31;letter-spacing:-1.15px;word-break:keep-all}.mid-size-card--aqua .mid-size-copy{background:#3d9cac;color:#fff}.mid-size-card--aqua .mid-size-copy h3{border-color:#fff;color:#fff}.mid-size-card--dark .mid-size-copy{background:#4c4c4c;color:#fff}.mid-size-card--dark .mid-size-copy h3{border-color:#fff;color:#fff}.mid-size-finale{display:grid;min-height:204px;grid-column:1 / -1;grid-template-columns:23.6% 50% 26.4%}.mid-size-finale .mid-size-copy{padding:18px;background:#3d9cac;color:#fff}.mid-size-finale .mid-size-copy h3{border-color:#fff;color:#fff}.mid-size-logo{position:relative;overflow:hidden;min-height:204px}.mid-size-logo img{object-fit:cover}.mid-footer{margin-top:245px;line-height:0}.mid-footer img{width:100%;height:auto}
        @media(max-width:1000px){.mid-content{width:100%}.mid-hero{grid-template-columns:67.2% 32.8%;height:auto;aspect-ratio:1000 / 365}.mid-hero-copy{padding:5.8vw 0 0 3.7vw}.mid-hero-copy h2,.mid-hero-copy h2 b{font-size:5.5vw}.mid-hero-top-row{width:24.4vw}.mid-product-grid{gap:7.6vw 4vw}.mid-products,.mid-injection{padding-right:2vw;padding-left:2vw}}
        @media(max-width:680px){.mid-page-heading{height:70px;padding:15px 18px}.mid-page-heading h1{font-size:30px}.mid-hero{display:block;height:auto;aspect-ratio:auto}.mid-hero-photo{height:auto;aspect-ratio:672 / 365}.mid-hero-copy{min-height:265px;padding:38px 32px}.mid-hero-copy h2,.mid-hero-copy h2 b{font-size:43px}.mid-hero-top-row{width:190px}.mid-introduction{padding:55px 22px 42px}.mid-introduction h2{font-size:34px}.mid-introduction .mid-lead{font-size:16px}.mid-introduction p{font-size:14px}.mid-causes{padding:46px 18px}.mid-causes h2{margin-bottom:35px;font-size:30px}.mid-cause-flow{display:grid;grid-template-columns:1fr 1fr;gap:18px}.mid-cause-item{justify-content:center}.mid-cause-item b{width:125px;height:125px;font-size:19px}.mid-cause-item i{display:none}.mid-causes>p{font-size:13px}.mid-question{font-size:19px}.mid-chat-area{padding:31px 16px}.mid-chat{gap:10px}.mid-chat>img{width:54px;height:54px;border-radius:9px}.mid-chat p{margin-top:9px;padding:18px 21px;border-radius:25px;font-size:14px;letter-spacing:-1.25px}.mid-chat--doctor>img{height:57px}.mid-change{padding:54px 15px}.mid-change h2{font-size:27px}.mid-chart{padding:15px 8px}.mid-chart-tabs{gap:8px}.mid-chart-tabs b{font-size:10px}.mid-outcome{min-height:260px}.mid-outcome p{font-size:16px}.mid-outcome b{font-size:22px}.mid-outcome strong{font-size:28px}.mid-doctor-intro{display:flex;min-height:0;margin-top:25px;padding:35px 22px;flex-direction:column}.mid-doctor-intro h2{font-size:35px}.mid-doctor-intro p{font-size:14px}.mid-doctor-intro>img{width:240px;height:auto;align-self:center}.mid-deco-title{font-size:38px}.mid-products{padding:65px 20px}.mid-products .mid-deco-title{margin-bottom:60px}.mid-product-grid{grid-template-columns:1fr;gap:44px}.mid-product-grid article p{min-height:0}.mid-injection{padding:10px 20px 45px}.mid-injection>h2{font-size:30px}.mid-injection>p{font-size:14px}.mid-injection-detail{grid-template-columns:1fr}.mid-ingredient-list{gap:20px}.mid-injection-detail>img{justify-self:center}.mid-size{padding-top:65px}.mid-size .mid-deco-title{margin-bottom:48px}.mid-size>p{font-size:15px}.mid-size-grid{grid-template-columns:1fr}.mid-size-card{min-height:190px}.mid-size-photo{min-height:190px}.mid-size-finale{grid-template-columns:24% 50% 26%;min-height:190px}.mid-size-finale .mid-size-photo,.mid-size-logo{min-height:190px}.mid-size-copy h3{font-size:24px}.mid-size-copy p{font-size:13px}.mid-footer{margin-top:90px}}
      ` }} />
    </main>
  );
}
