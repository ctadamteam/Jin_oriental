import Image from 'next/image';

const symptomGroups = [
  {
    number: '01',
    title: '국소장애',
    text: '생리불순, 질염, 성교통, 질 위축, 골다공증, 요실금, 방광염 등',
  },
  {
    number: '02',
    title: '전신장애',
    text: '전신 상열감, 가슴 두근거림, 건망증, 우울증, 두통, 어지러움, 불면증, 이명, 불안감 등',
  },
];

const selfCheckGroups = [
  ['혈관운동장애', ['얼굴이 화끈거리고 열감이 있다', '몸이 차고 냉감이 있다']],
  ['비뇨기증상', ['소변이 시원스럽게 나오지 않고 잔뇨감이 있다.', '소변을 참기가 힘들고 지리는 경우가 있다.']],
  ['정신신경증상', ['머리가 무겁거나 아프다.', '귀에서 소리가 난다.', '마음이 불안하다.', '신경질, 짜증이 잘 난다.', '우울한 기분이 든다.', '가슴이 두근거린다.']],
  ['운동기증상', ['등, 허리가 아프다', '어깨, 뒷머리가 아프다']],
  ['소화기증상', ['속이 메스껍거나 구토증이 자주 난다.', '변비가 있거나 설사를 자주 한다.', '배가 더부룩하고 입맛이 없다.']],
  ['전신증상', ['어지럽고 두통이 있다.', '관절이나 근육이 아프다.', '땀이 많이 난다.', '몸이 잘 붓는다.', '입이 바싹바싹 마른다.', '피부에 벌레가 기어다니는 듯한 가려움증을 느낀다.', '감각이 예민해지거나 둔해졌다.', '몸이 저리다.']],
];

const diagnosticSteps = [
  {
    number: '01',
    title: '체질진단',
    image: 'CL_06.png',
    description: '해운대 진한의원의 의료진은 한의학적 집중치료와 다년간 쌓아온 지식경험을 바탕으로 복증 및 허실을 판단하여 병증을 살펴보는 복진과 맥의 박동상태를 촉진하여 병증을 살펴보는 맥진을 통해 오장육부의 강약을 살피고 내부의 긴장 정도를 파악합니다.',
  },
  {
    number: '02',
    title: '스트레스 및 자율신경 균형검사',
    image: 'CL_07.png',
    description: '심박동의 파형을 분석하여 스트레스에 대한 반응을 가시화하여 건강상태 및 정신적인 안정상태를 파악할 수 있습니다.',
  },
  {
    number: '03',
    title: '적외선 체열검사',
    image: 'CL_08.png',
    description: '몸에서 나오는 적외선을 감지하여 미세한 체열변화를 컬러영상으로 보여줌으로써 통증부위 및 질병부위를 직접 눈으로 확인하게 해주어 인체의 이상유무와 질병유무를 진단 할 수 있는 첨단의료 영상진단기입니다.',
  },
  {
    number: '04',
    title: '문진',
    image: 'CL_09.png',
    description: '기계를 이용한 검사 외에 평상시 생활습관과 증상에 대해 상담하므로 전반적인 환자상태를 파악할 수 있습니다.',
  },
];

const quickLinks = [
  {
    image: 'CL_10.png',
    title: ['여성질환', '시스템'],
    description: ['진한의원은', '이 세상 모든 어머니이자', '딸인 여성의 건강을', '위해 노력합니다.'],
  },
  {
    image: 'CL_11.png',
    title: ['이벤트'],
    description: ['진한의원에서 준비한', '특별한 이벤트입니다.'],
  },
  {
    image: 'CL_12.png',
    title: ['치료후기'],
    description: ['진한의원에서', '치료받으신 분들의', '귀중한 솔직후기입니다.'],
  },
  {
    image: 'CL_13.png',
    title: ['온라인상담'],
    description: ['진한의원에서는', '고객의 고민을', '친절하게 상담해 드립니다.'],
  },
  {
    image: 'CL_14.png',
    title: ['온라인예약'],
    description: ['예약을 하시면 보다', '빠르고 편리하게', '진료를 받으실 수 있습니다.'],
  },
  {
    image: 'CL_15.png',
    title: ['문의및상담'],
    description: [],
    phone: true,
  },
];

export default function MenopausePage() {
  return (
    <main className="meno-page">
      <article className="meno-content">
        <header className="meno-title"><h1>갱년기증상</h1></header>

        <section className="meno-hero" aria-labelledby="menopause-hero-heading">
          <Image src="/images/menopause/CL_01.png" alt="" width={999} height={366} priority unoptimized />
          <div className="meno-hero-copy">
            <p>진&nbsp; / &nbsp;한&nbsp; / &nbsp;의&nbsp; / &nbsp;원</p>
            <h2 id="menopause-hero-heading">갱년기증상</h2>
            <span>오직 여성만을 위한,<br />진 한의원의 여성질환 전문치료</span>
          </div>
        </section>
        <section className="meno-intro" aria-labelledby="menopause-intro-heading">
          <div className="meno-intro-copy">
            <h2 id="menopause-intro-heading">갱년기란?</h2>
            <span className="meno-intro-rule" aria-hidden="true" />
            <p className="meno-intro-lead">‘황제내경’에 의하면 여성은 35세를 기점으로 영양의 소화 및 흡수를<br />관장하는 양명맥陽明脈이 쇠퇴하기 시작한다고 했습니다.</p>
            <p>갱년기란 난소기능의 쇠퇴로 인해 생식기로부터 비생식기로의 전환기를 말하며,<br />중년기에서 노년기로 접어드는 과도기적 시기를 의미합니다. 이 시기에는 여성생<br />리의 상징이라고 할 수 있는 월경이 서서히 폐지되어가고, 내분비학적, 신체적 및<br />정신적 변화를 동반한 여러 가지 증상이 나타나게 됩니다. 갱년기를 방치할 경우<br />급격한 노화현상은 물론 골다공증, 심장질환 등 각종 질환으로 이환될 수 있으므<br />로 갱년기 이후의 건강한 삶을 위해서라도 적극적인 관리와 치료가 필요합니다.</p>
          </div>
        </section>

        <section className="meno-symptoms" aria-labelledby="menopause-symptom-heading">
          <h2 id="menopause-symptom-heading"><span>갱년기</span> 증상</h2>
          <div className="meno-symptom-grid">
            {symptomGroups.map((group, index) => (
              <article key={group.number}>
                <div className="meno-symptom-circle"><i>{group.number}</i><b>{group.title}</b></div>
                <p>{group.text}</p>
                {index === 0 && <em>/</em>}
              </article>
            ))}
          </div>
        </section>

        <Image className="meno-chart" src="/images/menopause/CL_03.png" alt="상태에 따른 호르몬 변화 범위" width={1002} height={514} unoptimized />

        <section className="meno-treatment" aria-labelledby="menopause-treatment-heading">
          <div className="meno-treatment-copy">
            <h2 id="menopause-treatment-heading">갱년기 증상의 한의학적 치료원리</h2>
            <p>갱년기증상의 생리학적 원인은 여성호르몬의 감소로, 양방에서는 이를 치료하기 위해 여성호르몬(에스트로겐)을 투여하는 호르몬 대체요법을 주로 처방합니다. 하지만 호르몬 대체요법에 대한 부작용이 많이 알려지게 되면서 치료를 꺼리시는 분들이 많으십니다.</p>
            <p>한방에서는 갱년기의 몸 상태를 신허(腎虛)라고 하여 생식기능을 담당하는 신장의 기능이 떨어지고 혈이 부족해져 이로 인해 인체의 모든 장기 기능이 저하된다고 보고 있습니다. 따라서 갱년기 치료의 경우 신장 기능을 보해주는 치료를 통해 장부의 불균형을 조화롭게 하는 것을 치료의 근간으로 삼고 있습니다. 또한, 자궁의 어혈을 제거하고 혈액순환을 촉진시켜 혈관운동장애로 인한 갱년기 질환을 예방합니다. 이러한 한의학적 치료는 양방의 호르몬 주사나 신경차단제를 쓰지 않고 환자의 체질에 따라 자연스럽게 약해진 기운을 보강하고 신체의 불균형을 조절하게 되므로 부작용에 대한 부담이 없습니다.</p>
          </div>
          <Image src="/images/menopause/CL_04.png" alt="건강한 갱년기를 위한 부부" width={420} height={371} unoptimized />
        </section>

        <section className="meno-beginning" aria-labelledby="menopause-beginning-heading">
          <div className="meno-beginning-mark"><i>“</i><strong>시작</strong><i>”</i></div>
          <div>
            <h2 id="menopause-beginning-heading"><strong>갱년기는 끝이 아니라 시작입니다.</strong><span>당신의 아름다운 갱년기를 위해 진 한의원이 돕겠습니다.</span></h2>
            <p>갱년기를 마치 여성으로서의 인생이 끝났다고 여겨 심각한 우울증과 괴로움을 느끼시는 분이 많습니다. 갱년기는 말 그대로 更年, 새로운 인생으로 다시 시작하는 출발점과 같습니다. 건강한 노년기를 준비하는 과정이라 생각하시고 마음 편히 갱년기를 받아들이시는 것이 좋습니다. 여자의 마음을 누구보다 잘 아는 여성 의료진으로 구성된 해운대 진한의원은 충분한 상담과 개인의 체질과 몸 상태에 따른 정확하고 섬세한 처방으로 앞으로의 새로운 인생을 위한 당신의 힘찬 걸음에 보탬이 되어드리고 싶습니다.</p>
          </div>
        </section>

        <section className="meno-check" aria-labelledby="menopause-check-heading">
          <p className="meno-check-kicker"><span>Check it</span></p>
          <h2 id="menopause-check-heading"><span>갱년기</span> 자가진단표</h2>
          <div className="meno-check-table">
            {selfCheckGroups.map(([label, items]) => (
              <div className="meno-check-row" key={label as string}>
                <h3>{label as string}</h3>
                <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="meno-system" aria-labelledby="menopause-system-heading">
          <h2 id="menopause-system-heading">정확하고 세부적인 원인 진단을 통한<br /><strong>진 한의원의 1:1</strong> 맞춤 치료</h2>
          <i>JIN SYSTEM</i>
          <p>진단부터 치료까지, 체계적이고 과학적인 진 여성치료 시스템!</p>
        </section>

        <section className="meno-diagnosis" aria-label="진 한의원의 맞춤 진단">
          {diagnosticSteps.map((step) => (
            <article key={step.number}>
              <h3><span>{step.number}</span>{step.title}</h3>
              <Image src={`/images/menopause/${step.image}`} alt={step.title} width={step.number === '04' ? 433 : 431} height={step.number === '04' ? 200 : step.number === '03' ? 193 : step.number === '02' ? 195 : 198} unoptimized />
              <p>{step.description}</p>
            </article>
          ))}
        </section>

        <section className="meno-links" aria-label="진한의원 바로가기">
          {quickLinks.map((link, index) => (
            <article className={link.phone ? 'meno-link-card meno-link-card--phone' : 'meno-link-card'} key={link.image}>
              <Image src={`/images/menopause/${link.image}`} alt="" width={index < 3 ? 335 : 332} height={index < 3 ? 298 : 152} unoptimized />
              <div className="meno-link-copy">
                <h3>{link.title.map((line, lineIndex) => <span key={line}>{lineIndex > 0 && <br />}{line}</span>)}</h3>
                {link.phone ? (
                  <>
                    <p className="meno-link-phone"><span>051.</span><b>714</b><span>.0040</span></p>
                    <small>진료시간 자세히보기 ▸</small>
                  </>
                ) : <p>{link.description.map((line, lineIndex) => <span key={line}>{lineIndex > 0 && <br />}{line}</span>)}</p>}
              </div>
            </article>
          ))}
        </section>
      </article>

      <style>{`
        .meno-page{overflow:hidden;background:#fff;color:#4b4b4b;font-family:'Malgun Gothic','Apple SD Gothic Neo',Arial,sans-serif}.meno-content{width:min(100%,1000px);margin:0 auto;background:#fff}.meno-title{height:58px;display:flex;align-items:center;border-bottom:1px dotted #cfcfcf}.meno-title h1{margin:0;color:#3d3d3d;font-family:'Batang','Times New Roman',serif;font-size:36px;font-weight:400;letter-spacing:-3px}.meno-banner,.meno-intro-art,.meno-chart{display:block;width:100%;height:auto}.meno-intro-art{margin-top:46px}.meno-symptoms{padding:65px 0 70px;background:#fff}.meno-symptoms h2{margin:0 0 43px;color:#ed9f2d;font-family:'Batang','Times New Roman',serif;font-size:42px;font-weight:400;letter-spacing:-3px}.meno-symptoms h2 span{color:#70421e}.meno-symptom-grid{display:grid;grid-template-columns:1fr 1fr;gap:42px}.meno-symptom-grid article{position:relative;display:flex;min-width:0;align-items:center;gap:20px}.meno-symptom-circle{display:flex;width:120px;height:120px;flex:0 0 120px;align-items:center;justify-content:center;flex-direction:column;border-radius:50%;background:repeating-linear-gradient(-45deg,#fca095 0 2px,#fa9a8e 2px 4px);color:#fff;font-family:'Batang',serif;text-align:center}.meno-symptom-circle i{margin-bottom:3px;color:#fff45c;font-size:14px;font-style:italic}.meno-symptom-circle b{font-size:25px;font-weight:400;letter-spacing:-2px}.meno-symptom-grid p{margin:0;color:#665f5d;font-size:17px;line-height:1.38;letter-spacing:-1.4px;word-break:keep-all}.meno-symptom-grid em{position:absolute;right:-28px;color:#b5b1af;font-family:'Times New Roman',serif;font-size:44px;font-style:normal;font-weight:200}.meno-treatment{position:relative;display:grid;min-height:470px;padding:70px 0 20px;grid-template-columns:59% 41%;align-items:start}.meno-treatment-copy{position:relative;z-index:1}.meno-treatment-copy:after{position:absolute;right:-37px;bottom:2px;color:#ededed;content:')';font-family:'Times New Roman',serif;font-size:190px;font-weight:200;line-height:.7}.meno-treatment h2{margin:0 0 20px;color:#8a4819;font-family:'Batang','Times New Roman',serif;font-size:39px;font-weight:400;letter-spacing:-3.5px}.meno-treatment p{margin:0 0 28px;color:#665e5b;font-size:16px;line-height:1.65;letter-spacing:-1.15px;word-break:keep-all}.meno-treatment>img{position:relative;z-index:1;width:420px;height:auto;margin:30px 0 0 -10px;align-self:center}.meno-beginning{display:grid;min-height:295px;padding:20px 0 22px;grid-template-columns:285px 1fr;align-items:center;background:linear-gradient(90deg,#fff 0%,#fff 68%,#fff8f3 100%)}.meno-beginning>img{width:260px;height:auto}.meno-beginning h2{margin:0 0 18px;color:#9c501c;font-family:'Batang','Times New Roman',serif;font-size:32px;font-weight:400;line-height:1.3;letter-spacing:-2.7px}.meno-beginning p{max-width:650px;margin:0;color:#665e5b;font-size:16px;line-height:1.67;letter-spacing:-1.15px;word-break:keep-all}.meno-check{padding:35px 0 65px;text-align:center}.meno-check-kicker{position:relative;margin:0 0 5px;color:#cf671f;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-style:italic;letter-spacing:4px}.meno-check-kicker:after{position:absolute;top:50%;left:0;width:100%;height:1px;background:#e1c6bb;content:''}.meno-check-kicker::first-line{position:relative}.meno-check h2{position:relative;z-index:1;display:table;margin:0 auto 18px;padding:2px 11px 3px;background:#d96015;color:#fff;font-size:24px;font-weight:400;letter-spacing:-2px}.meno-check h2 span{color:#ffde2c}.meno-check-table{width:565px;margin:0 auto;border-top:2px solid #777;border-bottom:2px solid #777;text-align:left}.meno-check-row{display:grid;grid-template-columns:182px 1fr}.meno-check-row+ .meno-check-row{border-top:1px solid #d0d0d0}.meno-check-row h3{display:flex;margin:0;align-items:center;justify-content:center;border-right:1px solid #d0d0d0;color:#777;font-size:17px;font-weight:700;letter-spacing:-1.2px}.meno-check-row ul{margin:0;padding:0;list-style:none}.meno-check-row li{min-height:31px;box-sizing:border-box;padding:5px 0 5px 34px;border-bottom:1px solid #dedede;color:#777;font-size:14px;line-height:1.5;letter-spacing:-.7px}.meno-check-row li:last-child{border-bottom:0}.meno-system{padding:0 44px 60px;text-align:center}.meno-system h2{position:relative;margin:0;color:#2f2e2e;font-size:34px;font-weight:300;line-height:1.25;letter-spacing:-2.8px}.meno-system h2:before,.meno-system h2:after{position:absolute;top:50px;width:56px;height:1px;background:#edb74e;content:''}.meno-system h2:before{left:95px;transform:rotate(-47deg)}.meno-system h2:after{right:95px;transform:rotate(-47deg)}.meno-system h2 strong{font-size:39px;font-weight:800}.meno-system>i{display:block;width:222px;margin:22px auto 27px;background:linear-gradient(90deg,transparent,#ffe9ad,transparent);color:#fff;font-family:Arial,sans-serif;font-size:16px;font-style:normal;letter-spacing:1px}.meno-system>p{margin:0;padding:23px 35px;background:linear-gradient(135deg,#e7a30c,#ffbd24 50%,#e7a30c);clip-path:polygon(2.4% 0,100% 0,100% 78%,97.6% 100%,0 100%,0 22%);color:#fff;font-size:19px;letter-spacing:-1.3px}.meno-diagnosis{display:grid;padding:0 50px 28px;grid-template-columns:1fr 1fr;gap:43px 37px}.meno-diagnosis article{min-width:0}.meno-diagnosis h3{margin:0 0 16px;color:#333;font-family:'Malgun Gothic','Apple SD Gothic Neo',sans-serif;font-size:26px;font-weight:400;letter-spacing:-2.5px}.meno-diagnosis h3 span{margin-right:5px;font-family:'Times New Roman',serif;font-size:52px;font-weight:200;line-height:0;vertical-align:-8px}.meno-diagnosis img{display:block;width:100%;height:auto}.meno-diagnosis p{margin:17px 0 0;color:#5c5552;font-size:15px;line-height:1.62;letter-spacing:-1.05px;word-break:keep-all}.meno-links{display:grid;border-top:1px solid #c6c1c1;border-left:1px solid #c6c1c1;grid-template-columns:repeat(3,1fr)}.meno-links img{display:block;box-sizing:border-box;width:100%;height:auto;border-right:1px solid #c6c1c1;border-bottom:1px solid #c6c1c1}.meno-page :focus-visible{outline:2px solid #dd7d24;outline-offset:3px}@media(max-width:1000px){.meno-title{padding:0 20px}.meno-symptoms{padding-right:4vw;padding-left:4vw}.meno-treatment{padding-right:5vw;padding-left:5vw}.meno-treatment>img{width:100%;margin-left:0}.meno-beginning{padding-right:5vw;padding-left:5vw}.meno-diagnosis{padding-right:5vw;padding-left:5vw}.meno-system{padding-right:5vw;padding-left:5vw}}@media(max-width:680px){.meno-title{height:56px}.meno-title h1{font-size:29px}.meno-intro-art{margin-top:25px}.meno-symptoms{padding-top:40px;padding-bottom:45px}.meno-symptoms h2{margin-bottom:28px;font-size:33px}.meno-symptom-grid{grid-template-columns:1fr;gap:22px}.meno-symptom-grid em{display:none}.meno-symptom-circle{width:94px;height:94px;flex-basis:94px}.meno-symptom-circle b{font-size:20px}.meno-symptom-grid p{font-size:14px}.meno-treatment{display:block;min-height:0;padding-top:46px}.meno-treatment-copy:after{display:none}.meno-treatment h2{font-size:30px}.meno-treatment p{font-size:14px}.meno-treatment>img{display:block;width:min(85%,420px);margin:0 auto}.meno-beginning{display:block;padding-top:25px;text-align:center}.meno-beginning>img{width:200px}.meno-beginning h2{font-size:29px}.meno-beginning p{text-align:left;font-size:14px}.meno-check{padding-right:18px;padding-left:18px}.meno-check-table{width:100%}.meno-check-row{grid-template-columns:112px 1fr}.meno-check-row h3{font-size:14px}.meno-check-row li{padding-left:12px;font-size:12px}.meno-system h2{font-size:25px}.meno-system h2 strong{font-size:28px}.meno-system h2:before,.meno-system h2:after{display:none}.meno-system>p{padding:16px;font-size:15px}.meno-diagnosis{grid-template-columns:1fr;gap:37px}.meno-diagnosis h3{font-size:22px}.meno-diagnosis h3 span{font-size:43px}.meno-diagnosis p{font-size:13px}.meno-links{grid-template-columns:1fr}.meno-links img{width:100%}}
      `}</style>
      <style>{`
        .meno-intro{position:relative;height:289px;overflow:hidden;background:url('/images/menopause/CL_02.png') right top/auto 340px no-repeat}.meno-intro:after{position:absolute;z-index:0;inset:0;background:linear-gradient(90deg,#fff 0 55%,rgba(255,255,255,.98) 58%,rgba(255,255,255,.18) 62%,rgba(255,255,255,0) 65%);content:''}.meno-intro-copy{position:relative;z-index:1;padding:20px 0 0 5px}.meno-intro-copy h2{margin:0;color:#464646;font-size:24px;line-height:28px;letter-spacing:-1.8px}.meno-intro-rule{display:block;width:467px;height:14px;margin:5px 0;border-top:1px solid #aaa;border-bottom:1px dotted #cfcfcf}.meno-intro-copy p{margin:0;color:#303030;font-size:14px;line-height:1.72;letter-spacing:-.8px}.meno-intro-copy .meno-intro-lead{margin:15px 0 26px;color:#202020;font-size:17px;font-weight:700;line-height:1.5;letter-spacing:-1.2px}.meno-beginning-mark{display:flex;width:250px;height:250px;margin:auto;align-items:center;justify-content:center;flex-direction:column;background:radial-gradient(circle,rgba(249,216,201,.93) 0%,rgba(255,237,228,.6) 42%,rgba(255,255,255,0) 72%);font-family:'Batang','Times New Roman',serif}.meno-beginning-mark i{height:47px;color:#fff;font-family:Georgia,serif;font-size:72px;font-style:normal;line-height:.6}.meno-beginning-mark strong{color:#de641c;font-size:70px;font-weight:400;letter-spacing:-12px;line-height:1}.meno-beginning-mark i:last-child{align-self:flex-end;margin-right:44px}.meno-beginning-mark i:first-child{align-self:flex-start;margin-left:43px}@media(max-width:680px){.meno-intro{height:auto;min-height:438px;background-position:right bottom;background-size:auto 340px}.meno-intro:after{background:linear-gradient(180deg,#fff 0 78%,rgba(255,255,255,.88) 89%,rgba(255,255,255,.15) 100%)}.meno-intro-copy{padding:25px 20px}.meno-intro-rule{width:100%;box-sizing:border-box}.meno-intro-copy p,.meno-intro-copy .meno-intro-lead{font-size:13px}.meno-intro-copy br{display:none}.meno-beginning-mark{width:185px;height:185px}.meno-beginning-mark strong{font-size:55px}.meno-beginning-mark i{font-size:55px}.meno-beginning-mark i:last-child{margin-right:29px}.meno-beginning-mark i:first-child{margin-left:29px}}
      `}</style>
      <style>{`
        .meno-hero{position:relative;height:366px;overflow:hidden}.meno-hero>img{display:block;width:100%;height:100%;object-fit:cover}.meno-hero-copy{position:absolute;z-index:1;top:0;right:0;bottom:0;left:48%;overflow:hidden;padding:47px 51px 0;background:linear-gradient(90deg,rgba(255,191,31,0),rgba(255,191,31,.64) 25%,#f7b200 45%,#e99b00 100%);color:#fff;text-align:right}.meno-hero-copy p{margin:0 0 21px;font-size:20px;font-weight:700;letter-spacing:3px;white-space:nowrap}.meno-hero-copy h2{position:relative;z-index:1;margin:0;color:#fff51c;font-size:64px;font-weight:700;line-height:1;letter-spacing:-5px;white-space:nowrap}.meno-hero-copy>span{position:relative;z-index:1;display:block;margin-top:25px;font-size:18px;line-height:1.55;letter-spacing:-1.35px}.meno-hero-copy>b{position:absolute;bottom:-15px;left:75px;color:rgba(255,255,255,.25);font-family:Georgia,'Times New Roman',serif;font-size:124px;font-weight:400;letter-spacing:-8px;line-height:1}.meno-intro{height:322px}.meno-treatment{grid-template-columns:61% 39%}.meno-treatment-copy:after{right:-12px;bottom:58px;z-index:0;font-size:126px}.meno-treatment h2,.meno-treatment p{position:relative;z-index:1}.meno-treatment>img{z-index:2;width:355px;margin:67px 0 0;justify-self:end}.meno-check-kicker{display:flex;margin:0 0 5px;align-items:center;gap:16px}.meno-check-kicker:before,.meno-check-kicker:after{height:1px;flex:1;background:#e1c6bb;content:''}.meno-check-kicker:after{position:static;width:auto}.meno-check-kicker span{display:block;padding:0 12px;background:#fff;color:#cf671f;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-style:italic;letter-spacing:4px;line-height:1.1}.meno-links{border:0;gap:0}.meno-link-card{position:relative;min-width:0;height:298px;overflow:hidden;border-top:1px solid #c6c1c1;border-left:1px solid #c6c1c1;background:#fff}.meno-link-card:nth-child(3n){border-right:1px solid #c6c1c1}.meno-link-card:nth-child(n+4){height:152px;border-bottom:1px solid #c6c1c1}.meno-link-card>img{position:absolute!important;z-index:0;inset:0;display:block!important;width:100%!important;height:100%!important;object-fit:cover;border:0!important}.meno-link-card:before{position:absolute;z-index:1;top:0;left:0;background:#fff;content:''}.meno-link-card:nth-child(1):before{width:49%;height:180px}.meno-link-card:nth-child(2):before{width:51%;height:128px}.meno-link-card:nth-child(3):before{width:55%;height:125px}.meno-link-card:nth-child(4):before{width:49%;height:118px}.meno-link-card:nth-child(5):before{width:52%;height:118px}.meno-link-card--phone:before{inset:0;width:auto;height:auto}.meno-link-copy{position:absolute;z-index:2;top:24px;left:28px;color:#404040}.meno-link-copy h3{margin:0 0 16px;color:#454545;font-size:24px;font-weight:400;letter-spacing:-2.1px;line-height:1.08}.meno-link-copy p{margin:0;color:#bf9d90;font-size:14px;font-weight:500;line-height:1.42;letter-spacing:-1px;white-space:nowrap}.meno-link-card:nth-child(n+4) .meno-link-copy{top:20px}.meno-link-card:nth-child(n+4) .meno-link-copy h3{margin-bottom:11px;font-size:23px}.meno-link-card:nth-child(n+4) .meno-link-copy p{font-size:13px}.meno-link-card--phone .meno-link-copy{right:20px;left:29px}.meno-link-card--phone h3{margin-bottom:12px}.meno-link-phone{display:flex!important;align-items:baseline;color:#444!important;font-family:Arial,'Malgun Gothic',sans-serif!important;font-size:38px!important;font-weight:300!important;letter-spacing:-2.8px!important;line-height:1!important}.meno-link-phone b{color:#bf641d;font-weight:400}.meno-link-card--phone small{display:block;margin-top:5px;padding-top:4px;border-top:2px solid #b7a095;color:#b7a095;font-size:11px;text-align:right}@media(max-width:680px){.meno-hero{height:36.6vw;min-height:220px}.meno-hero-copy{left:48%;padding:5vw 5vw 0}.meno-hero-copy p{margin-bottom:2vw;font-size:2vw;letter-spacing:.3vw}.meno-hero-copy h2{font-size:6.4vw;letter-spacing:-.5vw}.meno-hero-copy>span{margin-top:2.5vw;font-size:1.8vw}.meno-hero-copy>b{font-size:12vw}.meno-intro{height:auto;min-height:470px}.meno-treatment{display:block}.meno-treatment>img{width:min(72%,355px);margin:0 auto}.meno-link-card{height:89vw}.meno-link-card:nth-child(n+4){height:46vw}.meno-link-copy{top:7vw;left:8vw}.meno-link-copy h3{margin-bottom:4vw;font-size:7vw}.meno-link-copy p{font-size:4vw}.meno-link-card:nth-child(n+4) .meno-link-copy{top:6vw}.meno-link-card:nth-child(n+4) .meno-link-copy h3{margin-bottom:3vw;font-size:6.8vw}.meno-link-card:nth-child(n+4) .meno-link-copy p{font-size:3.8vw}.meno-link-phone{font-size:10vw!important}.meno-link-card--phone small{font-size:2.5vw}}
      `}</style>
      <style>{`
        .meno-hero-copy{left:0;background:transparent}.meno-hero-copy>b{display:none}.meno-intro:after,.meno-link-card:before{display:none}
      `}</style>
      <style>{`
        .meno-check{padding-top:10px}.meno-check-kicker{display:block;height:52px;margin:0;text-align:center}.meno-check-kicker:before{display:none}.meno-check-kicker:after{position:absolute;top:43px;left:0;width:100%;height:1px;background:#e1c6bb;content:''}.meno-check-kicker span{position:relative;z-index:1;display:inline-block;padding:0;background:transparent;font-size:24px;letter-spacing:3px}.meno-check h2{margin:-10px auto 10px;padding:3px 10px 4px;font-size:20px;line-height:1.25}
      `}</style>
      <style>{`
        .meno-treatment{min-height:360px;padding:45px 0 0}.meno-treatment h2,.meno-treatment p{max-width:535px;z-index:2}.meno-treatment h2{font-size:36px}.meno-treatment p{font-size:14px;line-height:1.5}.meno-treatment-copy:after{top:-55px;right:8px;bottom:auto;z-index:1;color:#e4e4e4;font-size:300px;line-height:1;transform:scaleX(.5);transform-origin:right top}.meno-treatment>img{width:420px;margin:-45px 0 0}.meno-beginning{grid-template-columns:320px 1fr}.meno-beginning h2{line-height:1.18}.meno-beginning h2 strong,.meno-beginning h2 span{display:block;font-weight:400}.meno-beginning h2 strong{font-size:38px;letter-spacing:-3.6px}.meno-beginning h2 span{margin-top:6px;font-size:26px;letter-spacing:-2.6px}.meno-beginning p{max-width:550px;font-size:14px;line-height:1.5}@media(max-width:680px){.meno-treatment{padding-top:46px}.meno-treatment h2,.meno-treatment p{max-width:none}.meno-treatment h2{font-size:30px}.meno-treatment p{font-size:14px}.meno-treatment>img{width:min(72%,355px);margin:0 auto}.meno-beginning{grid-template-columns:1fr}.meno-beginning h2 strong{font-size:31px}.meno-beginning h2 span{font-size:24px}}
      `}</style>
      <style>{`
        .meno-title h1{font-weight:700}
        .meno-hero{margin-top:8px}

        .meno-intro{height:365px;background-position:right bottom}
        .meno-intro-copy h2{font-size:25px;font-weight:700}
        .meno-intro-rule{height:0;margin:7px 0 16px;border:0;border-top:3px double #aaa}
        .meno-intro-copy .meno-intro-lead{font-size:20px;line-height:1.5;text-decoration:none}
        .meno-intro-copy p{font-size:18px;line-height:1.65}

        .meno-symptoms h2{font-size:30px;font-weight:700}
        .meno-symptoms h2 span{font-size:38px;font-weight:700}
        .meno-symptom-circle i{font-size:18px;font-style:normal;font-weight:400}
        .meno-symptom-circle b{font-size:24px;font-weight:500}
        .meno-symptom-grid p{font-size:18px}

        .meno-treatment{min-height:560px;padding-bottom:30px}
        .meno-treatment h2{font-family:'Batang','Times New Roman',serif;font-size:38px}
        .meno-treatment p{font-family:'Malgun Gothic','Apple SD Gothic Neo',Arial,sans-serif;font-size:18px;line-height:1.65}
        .meno-treatment-copy:after{content:'}'}

        .meno-beginning{min-height:350px;padding-top:30px;padding-bottom:30px;background:#fff}
        .meno-beginning-mark{align-items:center}
        .meno-beginning-mark i:first-child,.meno-beginning-mark i:last-child{align-self:center;margin-right:0;margin-left:0}
        .meno-beginning h2{font-family:'Batang','Times New Roman',serif}
        .meno-beginning h2 strong{font-size:38px}
        .meno-beginning h2 span{font-size:30px}
        .meno-beginning p{font-family:'Malgun Gothic','Apple SD Gothic Neo',Arial,sans-serif;font-size:18px;line-height:1.65}

        .meno-check h2{color:#ffde2c}
        .meno-check h2 span{color:#fff}

        .meno-system>p{padding:13px 35px;font-size:25px;line-height:1.25}
        .meno-diagnosis h3{font-size:25px}
        .meno-diagnosis h3 span{font-family:'Malgun Gothic','Apple SD Gothic Neo',Arial,sans-serif;font-weight:300}
        .meno-diagnosis p{font-size:18px}

        .meno-link-copy h3,.meno-link-card:nth-child(n+4) .meno-link-copy h3{font-size:22px;font-weight:600}
        .meno-link-copy p,.meno-link-card:nth-child(n+4) .meno-link-copy p{font-size:18px;line-height:1.38}
        .meno-link-phone{font-size:30px!important;font-weight:700!important}
        .meno-link-phone span,.meno-link-phone b{font-weight:700}
        .meno-link-card--phone small{font-size:13px;font-weight:500}
        .meno-links{margin-bottom:36px}

        @media(max-width:680px){
          .meno-intro{height:auto;min-height:0;padding-bottom:340px;background-position:right bottom}
          .meno-intro-copy h2{font-size:23px}
          .meno-intro-copy .meno-intro-lead{font-size:18px}
          .meno-intro-copy p{font-size:16px}
          .meno-symptoms h2{font-size:27px}.meno-symptoms h2 span{font-size:33px}
          .meno-symptom-circle i{font-size:16px}.meno-symptom-circle b{font-size:20px}.meno-symptom-grid p{font-size:16px}
          .meno-treatment{min-height:0;padding-bottom:35px}.meno-treatment h2{font-size:30px}.meno-treatment p{font-size:16px}.meno-treatment-copy:after{display:none}
          .meno-beginning{min-height:0}.meno-beginning h2 strong{font-size:31px}.meno-beginning h2 span{font-size:24px}.meno-beginning p{font-size:16px}
          .meno-system>p{padding:13px 16px;font-size:20px}.meno-diagnosis h3{font-size:22px}.meno-diagnosis p{font-size:16px}
          .meno-link-copy h3,.meno-link-card:nth-child(n+4) .meno-link-copy h3{font-size:20px}.meno-link-copy p,.meno-link-card:nth-child(n+4) .meno-link-copy p{font-size:16px}.meno-link-phone{font-size:28px!important}
          .meno-links{margin-bottom:24px}
        }
      `}</style>
    </main>
  );
}
