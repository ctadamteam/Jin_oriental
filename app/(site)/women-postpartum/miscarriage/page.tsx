import Image from 'next/image';

const symptoms = [
  ['USH_02.png', '이유 없이 몸이 무겁고 피곤해요'],
  ['USH_03.png', '생리양이 줄어들고 생리 주기가 불규칙해요'],
  ['USH_04.png', '피부가 가렵고 민감해지는 것 같아요'],
  ['USH_05.png', '입맛이 떨어지고 몸이 무겁고 부어요'],
  ['USH_06.png', '불안하고 우울해요'],
  ['USH_07.png', '잠이 잘 오지 않고 자다가 많이 깨요'],
];

const treatmentSteps = [
  {
    image: 'USH_08.png',
    stage: '1단계',
    title: '유산 후 어혈제거',
    text: '유산시에 자궁내부에는 배출되지 못한 부속물 및 노폐물이 있을 수 있습니다. 특히 태아를 성장시키기 위해 혈류가 집중되어 있다가 임신이전의 상태로 돌아가면서 어혈이라고 하는 비정상적인 혈액이 생길 수 있습니다. 이러한 어혈은 각종 자궁질환이나 월경의 이상을 만들 수 있으므로 초기에 잘 제거하여 자궁수축이 잘 되고 자궁 안에 고인 피가 남아있지 않도록 하여야 합니다.',
    highlight: '특히 태아를 성장시키기 위해 혈류가 집중되어 있다가 임신이전의 상태로 돌아가면서 어혈이라고 하는 비정상적인 혈액이 생길 수 있습니다. 이러한 어혈은 각종 자궁질환이나 월경의 이상을 만들 수 있으므로 초기에 잘 제거하여 자궁수축이 잘 되고 자궁 안에 고인 피가 남아있지 않도록 하여야 합니다.',
  },
  {
    image: 'USH_09.png',
    stage: '2단계',
    title: '손상 받은 자궁내막의 회복',
    text: '유산은 대부분 임신 3개월 전후 태반이 형성되는 시기에 발생합니다. 특히 임신유지기간이 오래될수록 태아도 성장하고 주위 부속물들이 많아지면서 유산 시 출혈량도 많고 내막의 손상부위도 많아집니다. 특히 계류유산의 경우 소파수술 과정에서 자궁내막의 손상이 심해지고 그 부분의 유착이 일어날 가능성이 커집니다. 그러므로 손상받은 자궁내막이 잘 회복되어 다음 월경을 정상적으로 할 수 있는 치료가 반드시 필요합니다.',
    highlight: '특히 계류유산의 경우 소파수술 과정에서 자궁내막의 손상이 심해지고 그 부분의 유착이 일어날 가능성이 커집니다. 그러므로 손상받은 자궁내막이 잘 회복되어 다음 월경을 정상적으로 할 수 있는 치료가 반드시 필요합니다.',
  },
  {
    image: 'USH_10.png',
    stage: '3단계',
    title: '월경의 정상화',
    text: '유산 후에는 다음 임신을 시도하기 전까지 적어도 3개월 정도의 시간이 필요합니다. 손상 받은 자궁내막에 다시 임신이 될 시에는 여성의 체력 및 자궁의 회복이 되지 않은 상태에서 또 다른 유산이 일어날 가능성이 있기 때문입니다. 그러므로 월경이 예전처럼 정상적인 주기로 정상양이 이상 없이 배출되는지 관찰하고 그렇지 않은지 지속적으로 살피는 것이 필요합니다.',
    highlight: '유산 후에는 다음 임신을 시도하기 전까지 적어도 3개월 정도의 시간이 필요합니다. 손상 받은 자궁내막에 다시 임신이 될 시에는 여성의 체력 및 자궁의 회복이 되지 않은 상태에서 또 다른 유산이 일어날 가능성이 있기 때문입니다. 그러므로 월경이 예전처럼 정상적인 주기로 정상양이 이상 없이 배출되는지 관찰하고 그렇지 않은지 지속적으로 살피는 것이 필요합니다.',
  },
];

const research = [
  ['USH_11.png', '습관성 유산 치료 14례 임상보고', '조철주, 임은미, 대한한방부인과학회지 2005;18(2)', '습관성 유산 환자 14명을 대상으로 1~10개월간 한방치료를 시행하여 결과적으로 전원이 생존 출산을 분만하였고, 치료 시작 후 임신까지 걸린 시간은 평균 3.5개월이고 10건의 임신이 치료 후 3개월 이내에 이루어진 것으로 보고되었습니다.'],
  ['USH_12.png', '인공 유산 후 유발된 산후풍 환자에 대한 임상적 고찰', '임성민, 배상진, 김형준, 이동일, 대한한방부인과학회지', '인공 유산 후 유발된 무기력감, 관절통증, 수족냉증, 우울감 등을 호소한 환자가 2주간의 한방 치료로 제반 증상이 거의 다 소실되었습니다.'],
];

const processLabels = [
  '자궁 내부에 생긴 어혈을 제거하고 오로 배출을 촉진시켜 자궁환경을 회복',
  '손상받은 자궁 내막의 회복을 촉진',
  '차후 임신 준비를 위해 정상적인 월경주기의 회복',
];

const quickLinks = [
  { image: 'USH_20.png', title: ['여성질환', '시스템'], description: ['진한의원은', '이 세상 모든 어머니이자', '딸인 여성의 건강을', '위해 노력합니다.'] },
  { image: 'USH_21.png', title: ['이벤트'], description: ['진한의원에서 준비한', '특별한 이벤트입니다.'] },
  { image: 'USH_22.png', title: ['치료후기'], description: ['진한의원에서', '치료받으신 분들의', '귀중한 솔직후기입니다.'] },
  { image: 'USH_23.png', title: ['온라인상담'], description: ['진한의원에서는', '고객의 고민을', '친절하게 상담해 드립니다.'] },
  { image: 'USH_24.png', title: ['온라인예약'], description: ['예약을 하시면 보다', '빠르고 편리하게', '진료를 받으실 수 있습니다.'] },
  { image: 'USH_25.png', title: ['문의및상담'], description: [], phone: true },
];

export default function MiscarriageCarePage() {
  return (
    <main className="miscarriage-page">
      <div className="miscarriage-shell">
        <header className="miscarriage-page-title"><h1>유산후조리</h1></header>

        <section className="miscarriage-hero" aria-labelledby="miscarriage-hero-title">
          <Image src="/images/miscarriage/USH_01.png" alt="복부를 감싸고 있는 여성" width={900} height={521} priority unoptimized />
          <div className="miscarriage-hero-copy">
            <p>진&nbsp;/&nbsp;한&nbsp;/&nbsp;의&nbsp;/&nbsp;원</p>
            <h2 id="miscarriage-hero-title">유산후조리</h2>
            <span>유산은 임신을 준비하는 부부에게 엄청나게 슬프고 힘든 일입니다. 여성 10명 중 1~2명이 유산을 경험하는 만큼 생각보다 흔히 일어나므로 여성 스스로 자책하실 필요는 없습니다.</span>
          </div>
        </section>

        <section className="miscarriage-intro" aria-labelledby="miscarriage-intro-title">
          <div className="miscarriage-intro-copy">
            <h2 id="miscarriage-intro-title">동의보감에서는 유산을 반산(半産), 즉 ‘절반의 출산’이라하여 정상적인 출산을 했을 때 보다 <strong><b>10배는 더 신경써서 치료</b>해야 한다고 하였습니다.</strong></h2>
            <p>정상적인 출산이 ‘밤의 껍질이 알맞게 익어서 저절로 벌어진 것’이라고 한다면 유산은 ‘밤 껍질을 발로 밟아 터져 나오는 것’과 같다고 했습니다. 이는 그만큼 유산이 여성의 몸에 큰 충격이 될 수 있음을 의미하며 다음 임신에 대한 준비 뿐만 아니라 여성의 평생 건강을 위해서도 반드시 치료받아야 함을 의미합니다.</p>
          </div>
          <div className="miscarriage-intro-photo" aria-hidden="true" />
        </section>

        <section className="miscarriage-note">
          <b>주의!!</b>
          <p><mark>유산 후 특별히 불편 증상이 없다고 해서 유산 후 후유증이 없는 것이 아닙니다.</mark><br /><mark>아무렇지 않다 하더라도 유산 후에는 적극적인 치료를 하는 것이 필요합니다.</mark></p>
        </section>

        <section className="miscarriage-risk" aria-labelledby="miscarriage-risk-title">
          <div>
            <p>최근에 늦은 결혼, 노산, 맞벌이 등으로 인해<br />더욱 임신 중 몸 관리와 산후 조리를 제대로 하기 힘든 환경 때문에<br /><strong>난임 및 유산의 위험성이 더욱 증가</strong>하고 있습니다.</p>
            <p>정상적인 분만 후에 조리하는 것보다 유산 후 조리가 여러 가지 여성상의 어려움이 많은 것은 사실이나 오히려 정상 출산보다 몇 배로 신경을 써야 합니다.<br />왜냐하면 <mark>짧은 시간에 임신이 중단됨으로 인해 호르몬의 교란이 생기고 자궁 내막에 상처가 남는 등 자궁 환경에 많은 악영향을 끼칠 수 있기 때문입니다.</mark></p>
            <p>35세 이상이거나 이전에 유산 경험이 있는 임산부일수록 유산이 발생하는 빈도가 높으며 <mark>손상된 자궁의 회복과 다음 임신의 준비를 위해서도 정상 분만보다 더 세심하고 각별한 조리가 필요합니다.</mark></p>
          </div>
        </section>

        <section className="miscarriage-need" aria-labelledby="miscarriage-need-title">
          <h2 id="miscarriage-need-title">유산 후 조리가 필요한 이유</h2>
          <p>유산 후에는 어혈이 남지 않아야 자궁내막이 잘 회복될 수 있으며 특히 <mark>계류유산 등으로 자궁내막을 긁어내는 수술을 받은 후에는 내막에 상처가 나서 유착이 생기거나 수정란 착상을 받아서 다음 임신에 부정적인 영향을 미칠 수 있습니다.</mark> 유산 후에 월경량이 줄거나 생리가 불규칙해지는 경우에는 차후 난임으로 발전할 가능성이 있으므로 <mark>월경 3주기 동안은 월경 상태가 정상적인지 다른 불편 증상은 없는지 확인하는 것이 좋습니다.</mark></p>
          <div className="miscarriage-charts" aria-label="유산 이후 임신의 재유산 가능성과 자궁내유착 발병 위험률">
            <article><div className="chart-bars chart-recurrence"><i style={{ height: '30%' }}><b>15%</b><span>1회 유산</span></i><i style={{ height: '70%' }}><b>35%</b><span>2회 유산</span></i><i style={{ height: '90%' }}><b>45%</b><span>3회 유산</span></i></div><h3>유산 이후 임신의 재유산 가능성 (%)</h3></article>
            <article><div className="chart-bars chart-adhesion"><i style={{ height: '30%' }}><b>15%</b><span>소파술 1회</span></i><i style={{ height: '50%' }}><b>23%</b><span>소파술 2회</span></i></div><h3>자궁내유착 발병 위험률 (%)</h3></article>
          </div>
          <p>유산 후 소파수술로 인해 자궁경부 무력증이나 전치태반, 태반조기 박리 등 조산의 위험률이 높아질 수 있으므로 소파수술로 인한 자궁 내막의 상처가 잘 아물도록 적절한 치료가 필요합니다. <mark>오로 배출을 도와주는 한약은 자연 유산 후 소파수술로 인한 자궁내막의 유착이 발생할 수 있는 부분들을 예방하고 유착을 어느 정도 풀어줄 수 있는데 도움이 됩니다.</mark></p>
          <div className="miscarriage-note miscarriage-note--peach"><b>주의!!</b><p><mark>유산이 되었다면 특히 첫 4주간에 각별한 몸조리가 필요합니다.</mark><br />목욕을 할 때에도 따뜻한 물로 간단히 샤워하시는 것이 좋으며 공중목욕탕 이용을 되도록 삼가주시는 것이 좋습니다. 목욕시에 찬 바람에 노출되지 않는 것도 중요하며 성관계 또한 2주 후 가능하긴 하나 되도록 유산 후 첫 월경을 한 이후에 하는 것이 더욱 안전합니다.</p></div>
          <p className="miscarriage-restored-copy">유산 후에는 오로가 1주일간 정도 나옵니다. 피부에 난 상처가 처음에 붉은색이었다가 점차 갈색으로 변하면서 회복하듯이 자궁내막의 상처가 아무는 과정에서 혈성 분비물이 점차 갈색의 분비물로 배출되는 것인데 자궁의 수축력이 저하되면 배출되지 못하고 자궁 안에 고이기도 하고 간혹 산후조리 과정 중에 몸이 나빠지면 갈색 분비물이 다시 혈성 분비물로 배출되기도 합니다.</p>
        </section>

        <section className="miscarriage-symptoms" aria-labelledby="miscarriage-symptoms-title">
          <h2 id="miscarriage-symptoms-title">유산에 따른 호발하기 쉬운 <strong>이상 증상</strong></h2>
          <div className="symptoms-grid">
            {symptoms.map(([image, caption]) => <figure key={image}><Image src={`/images/miscarriage/${image}`} alt="" width={205} height={170} unoptimized /><figcaption>{caption}</figcaption></figure>)}
          </div>
          <p>유산 후에는 자율신경계·호르몬의 변화가 급격하여 <mark>생리양의 감소, 생리 주기의 변화, 피부 소양증이나 알레르기와 같은 피부 증상, 우울 및 두근거림, 불안, 불면증과 같은 신경증상, 식욕의 이상, 체중증가, 부종과 같은 소화기계 및 대사 기능의 감소</mark> 등이 생길 수 있습니다.</p>
          <h3>더욱이 유산이 거듭될수록 습관성 유산이나 불임의 가능성을 높이게 됩니다.</h3>
        </section>

        <section className="miscarriage-goals" aria-labelledby="miscarriage-goals-title">
          <div><h2 id="miscarriage-goals-title">유산 후 조리의 목표</h2><ol><li><em>01</em> 자궁 내에 쌓여 있는 노폐물 배출과 부종 감소</li><li><em>02</em> 자궁 내막의 상처 회복과 유착 방지</li><li><em>03</em> 호르몬 균형과 면역력 및 체력 회복</li><li><em>04</em> 다음 임신의 준비와 유산의 발생률 감소</li></ol></div>
        </section>

        <section className="miscarriage-treatment" aria-labelledby="miscarriage-treatment-title">
          <h2 id="miscarriage-treatment-title">유산 후 조리 치료과정</h2>
          <div className="process-flow">{processLabels.map((label, index) => <div key={label}><b>Step 0{index + 1}</b><span>{label}</span></div>)}</div>
          <div className="treatment-articles">{treatmentSteps.map((step) => <article key={step.stage}><Image src={`/images/miscarriage/${step.image}`} alt="" width={290} height={236} unoptimized /><div><p><em>{step.stage}</em><strong>{step.title}</strong></p><span>{step.highlight ? <>{step.text.split(step.highlight)[0]}<mark>{step.highlight}</mark>{step.text.split(step.highlight)[1]}</> : step.text}</span></div></article>)}</div>
        </section>

        <section className="miscarriage-research" aria-labelledby="miscarriage-research-title">
          <h2 id="miscarriage-research-title"><span>논문으로 증명된 </span><strong>한의학 치료 효과</strong></h2>
          <h3>유산 후 조리</h3>
          <div>{research.map(([image, title, author, body]) => <article key={title}><Image src={`/images/miscarriage/${image}`} alt="논문 표지" width={128} height={162} unoptimized /><div><h4>{title}</h4><p>{author}</p><span>{body}</span></div></article>)}</div>
        </section>

        <section className="miscarriage-clean" aria-labelledby="miscarriage-clean-title">
          <h2 id="miscarriage-clean-title"><span>믿을 수 있는 진한의원</span> 청정한약 시스템</h2>
          <div className="clean-panels"><article><Image src="/images/miscarriage/USH_18.png" alt="GMP 식약청 인증" width={313} height={280} unoptimized /><i>1</i><p>GMP 식약청 인증한약사용과<br />한약이력시스템 도입</p></article><article><Image src="/images/miscarriage/USH_19.jpg" alt="청정약재" width={4488} height={4488} unoptimized /><i>2</i><p>믿을 수 있는 최고품질의<br />청정약재만을 사용</p></article></div>
          <p>아무리 내 체질에 맞고 몸에 좋은 처방이라도 약재가 믿을 수 없다면 안심하고 복용하기 힘듭니다. 진한의원에서는 포장지나 한약을 담는 파우치도 환경호르몬이 검출되지 않는 안심 파우치이며 모든 한약재는 식약처가 요구하는 잔류 농약, 중금속 오염도, 성분 검사를 거친 GMP 인증을 받은 의약품용 한약재로만 사용하고 있습니다.</p>
        </section>

        <section className="miscarriage-card" aria-labelledby="miscarriage-card-title"><div><h2 id="miscarriage-card-title">진한의원에서<br /><strong>국민행복카드(前 고운맘카드) 사용</strong>이 가능합니다.</h2><p>예비 엄마들의 임신과 출산 의료비 부담을 줄여드리기 위한 국민행복카드, 진한의원에서도 사용할 수 있습니다.</p></div><Image src="/images/miscarriage/USH_13.png" alt="국민행복카드" width={333} height={222} unoptimized /></section>

        <section className="miscarriage-links" aria-label="진한의원 바로가기">
          {quickLinks.map((link, index) => (
            <article className={link.phone ? 'miscarriage-link-card miscarriage-link-card--phone' : 'miscarriage-link-card'} key={link.image}>
              <Image src={`/images/miscarriage/${link.image}`} alt="" width={index < 3 ? 335 : 332} height={index < 3 ? 298 : 152} unoptimized />
              <div className="miscarriage-link-copy">
                <h3>{link.title.map((line, lineIndex) => <span key={line}>{lineIndex > 0 && <br />}{line}</span>)}</h3>
                {link.phone ? <><p className="miscarriage-link-phone"><span>051.</span><b>714</b><span>.0040</span></p><small>진료시간 자세히보기 ▸</small></> : <p>{link.description.map((line, lineIndex) => <span key={line}>{lineIndex > 0 && <br />}{line}</span>)}</p>}
              </div>
            </article>
          ))}
        </section>
      </div>
      <style>{styles}</style>
    </main>
  );
}

const styles = String.raw`
  .miscarriage-page{padding:38px 0 92px;background:#fff;color:#3d3b39;font-family:'Noto Sans KR','Malgun Gothic',sans-serif}.miscarriage-shell{width:1000px;margin:0 auto}.miscarriage-page-title{margin:0 0 14px;border-bottom:1px dotted #c7c2bb;padding:0 8px 11px}.miscarriage-page-title h1{margin:0;font-family:'Batang','Times New Roman',serif;font-size:40px;font-weight:500;letter-spacing:-4px}.miscarriage-hero{display:grid;grid-template-columns:61.5% 38.5%;min-height:365px;overflow:hidden;background:#efc8b3}.miscarriage-hero>img{width:100%;height:100%;object-fit:cover;object-position:left center}.miscarriage-hero-copy{display:flex;flex-direction:column;justify-content:center;padding:50px 70px;color:#302d2c}.miscarriage-hero-copy p{margin:0 0 18px;text-align:right;font-weight:700;font-size:20px;letter-spacing:8px}.miscarriage-hero-copy h2{margin:0 0 18px;font-size:57px;font-weight:800;letter-spacing:-7px;white-space:nowrap}.miscarriage-hero-copy span{font-size:17px;line-height:1.7;letter-spacing:-1px;word-break:keep-all}.miscarriage-intro{position:relative;display:grid;grid-template-columns:57% 43%;min-height:490px;padding:80px 72px;overflow:hidden;background:linear-gradient(105deg,#eeece9 0%,#e7e3e0 55%,#efe8e4 100%)}.miscarriage-intro:after{position:absolute;content:'';inset:0;background:radial-gradient(circle at 72% 40%,rgba(255,255,255,.65),transparent 26%);pointer-events:none}.miscarriage-intro-copy{position:relative;z-index:1}.miscarriage-intro h2{margin:0 0 26px;font-family:'Batang','Times New Roman',serif;font-size:31px;line-height:1.55;font-weight:400;letter-spacing:-2.6px}.miscarriage-intro h2 strong{color:#e4772a;font-weight:600}.miscarriage-intro p{width:78%;margin:0;font-size:16px;line-height:1.9;color:#68625f;letter-spacing:-1.35px}.miscarriage-intro-photo{position:absolute;right:0;bottom:0;width:55%;height:100%;background:linear-gradient(90deg,rgba(238,236,233,.3),rgba(238,236,233,.1)),url('/images/miscarriage/USH_01.png') 30% 68%/155% auto no-repeat;filter:grayscale(1);opacity:.64}.miscarriage-note{display:grid;grid-template-columns:160px 1fr;align-items:center;margin:0;padding:28px 65px;border-radius:0 0 0 0;background:#fff}.miscarriage-note>b{font-family:'THEFACESHOP INKLIPQUID','Batang',serif;font-size:56px;color:#ba2623;transform:rotate(-9deg)}.miscarriage-note p{margin:0;font-size:17px;line-height:1.65;letter-spacing:-1.3px}.miscarriage-page mark{padding:0 3px;background:linear-gradient(transparent 44%,#fff476 44%);color:inherit;font-weight:700}.miscarriage-risk{padding:105px 95px;background:linear-gradient(rgba(49,34,29,.71),rgba(49,34,29,.78)),radial-gradient(circle at 70% 45%,#7d574b 0 1%,#392620 48%,#271c18 100%);color:#fff;text-align:center}.miscarriage-risk>div{max-width:840px;margin:auto}.miscarriage-risk p{margin:0 0 50px;font-size:22px;line-height:1.65;letter-spacing:-1.6px}.miscarriage-risk strong{color:#f1a15f;font-size:26px}.miscarriage-risk mark{background:#171311;color:#f2a36b;padding:0 6px}.miscarriage-risk p:last-child{margin-bottom:0}.miscarriage-need{padding:86px 54px 72px;background:#f2e1cc;text-align:center}.miscarriage-need>h2,.miscarriage-symptoms h2{margin:0 0 28px;font-size:48px;letter-spacing:-4.7px;line-height:1.2}.miscarriage-need>p{margin:0 auto 36px;max-width:875px;font-size:17px;line-height:1.75;letter-spacing:-1.5px}.miscarriage-charts{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin:20px 0 35px;padding:38px 46px 26px;background:#fff}.miscarriage-charts article{display:grid;grid-template-rows:260px auto}.chart-bars{position:relative;display:flex;justify-content:center;align-items:end;gap:62px;padding:0 34px 36px;border-bottom:1px solid #aaa;background:repeating-linear-gradient(to bottom,transparent 0 51px,#ddd 51px 52px)}.chart-bars:before{position:absolute;top:0;left:0;content:'50\A\A40\A\A30\A\A20\A\A10\A\A0';white-space:pre;font-size:14px;line-height:52px;transform:translateX(-28px)}.chart-bars i{position:relative;display:block;width:51px;background:#d9d0bb}.chart-bars i:last-child{background:#ff810b}.chart-bars b{position:absolute;top:-52px;left:50%;transform:translateX(-50%);font-size:27px;font-style:normal}.chart-bars i:last-child b{color:#ff810b;font-size:40px}.chart-bars span{position:absolute;top:calc(100% + 14px);left:50%;width:90px;transform:translateX(-50%);font-size:17px;font-style:normal;font-weight:700;white-space:nowrap}.chart-adhesion{gap:105px}.miscarriage-charts h3{margin:28px 0 0;padding:12px;background:#65524e;color:#fff;font-size:17px;letter-spacing:-1.2px}.miscarriage-note--peach{margin-top:40px;padding:27px 52px;border-radius:12px;background:#fff;text-align:left}.miscarriage-note--peach p{font-size:16px}.miscarriage-symptoms{padding:95px 45px 80px;text-align:center}.miscarriage-symptoms h2 strong{font-weight:900}.symptoms-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:42px 62px;margin:52px 0}.symptoms-grid figure{margin:0}.symptoms-grid img{width:100%;max-width:230px;height:auto;border-radius:8px;box-shadow:0 1px 4px rgba(45,33,24,.14)}.symptoms-grid figcaption{margin-top:14px;font-size:16px;letter-spacing:-1.1px}.miscarriage-symptoms>p{max-width:840px;margin:0 auto 34px;font-size:18px;line-height:1.75;letter-spacing:-1.4px}.miscarriage-symptoms>h3{margin:0;font-size:24px;letter-spacing:-1.9px}.miscarriage-goals{position:relative;padding:92px 66px;background:linear-gradient(90deg,rgba(66,43,38,.9),rgba(66,43,38,.72)),url('/images/miscarriage/USH_01.png') right 30%/68% auto no-repeat #57403a;color:#fff}.miscarriage-goals>div{width:560px}.miscarriage-goals h2{margin:0 0 38px;font-size:52px;letter-spacing:-4.4px;white-space:nowrap}.miscarriage-goals ol{display:grid;gap:14px;margin:0;padding:0;list-style:none}.miscarriage-goals li{display:flex;align-items:center;min-height:60px;padding:0 28px;border-radius:22px;background:#fff;color:#554946;font-size:22px;letter-spacing:-1.7px}.miscarriage-goals em{display:inline-block;width:58px;font-family:'Batang',serif;font-size:34px;font-style:italic;color:#65514e}.miscarriage-treatment{padding:88px 36px 96px;background:#fb9843}.miscarriage-treatment>h2{margin:0 0 44px;color:#fff;text-align:center;font-size:52px;letter-spacing:-4px}.process-flow{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:48px 68px;background:#fff}.process-flow>div{position:relative;min-height:230px;border:1px solid #796c58;border-radius:20px;background:#ffff91;overflow:visible;text-align:center}.process-flow>div:not(:last-child):after{position:absolute;top:50%;right:-44px;z-index:1;content:'›';display:grid;width:42px;height:42px;place-items:center;transform:translateY(-50%);border-radius:50%;background:#5a443e;color:#fff;font-size:40px}.process-flow b{display:block;padding:24px 14px;border-bottom:1px solid #81746a;font-family:'Batang',serif;font-size:31px;font-style:italic;font-weight:400}.process-flow span{display:grid;min-height:132px;place-items:center;padding:16px;font-size:19px;line-height:1.55;font-weight:700;letter-spacing:-1.4px}.treatment-articles{display:grid;gap:33px;margin-top:36px}.treatment-articles article{position:relative;display:grid;grid-template-columns:292px 1fr;gap:34px;align-items:center;padding:34px 58px;background:#fff}.treatment-articles article:not(:last-child):after{position:absolute;right:45%;bottom:-28px;content:'';border:28px solid transparent;border-top-color:#fff}.treatment-articles img{width:290px;height:236px;object-fit:cover}.treatment-articles p{margin:0 0 19px;display:flex;align-items:center;gap:18px}.treatment-articles p em{display:grid;place-items:center;width:68px;height:68px;border-radius:50%;background:#69534d;color:#fff;font-family:'Batang',serif;font-size:22px;font-style:normal}.treatment-articles p strong{font-family:'Batang',serif;font-size:33px;font-weight:500;letter-spacing:-2.8px}.treatment-articles article span{font-size:17px;line-height:1.75;letter-spacing:-1.3px}.miscarriage-research{padding:95px 66px 84px}.miscarriage-research>h2{margin:0 0 76px;text-align:center;font-size:48px;letter-spacing:-4.2px}.miscarriage-research>h2 span{background:linear-gradient(transparent 59%,#fff067 59%)}.miscarriage-research>h3{margin:0 0 28px;border-top:1px solid #aaa;padding-top:26px;font-family:'Batang',serif;font-size:30px;font-weight:500}.miscarriage-research>div{display:grid;grid-template-columns:1fr 1fr;gap:68px}.miscarriage-research article{display:grid;grid-template-columns:125px 1fr;gap:20px}.miscarriage-research img{width:125px;height:160px;object-fit:contain;filter:drop-shadow(7px 8px 0 rgba(82,58,47,.16))}.miscarriage-research h4{margin:18px 0 5px;color:#243f96;font-size:17px;line-height:1.45}.miscarriage-research p,.miscarriage-research span{font-size:14px;line-height:1.55;letter-spacing:-1px}.miscarriage-research p{margin:0 0 10px}.miscarriage-clean{padding:38px 0 0}.miscarriage-clean>h2{margin:0;padding:0 20px 34px;font-size:23px;font-weight:400;letter-spacing:-1.8px}.miscarriage-clean>h2 span{display:block}.miscarriage-clean>h2:before{content:'';display:inline-block;width:5px;height:49px;margin-right:13px;vertical-align:middle;background:#65615f}.clean-panels{display:grid;grid-template-columns:1fr 1fr;height:310px;background:#947453}.clean-panels article{position:relative;overflow:hidden;padding:70px 45px;color:#fff;text-align:center}.clean-panels article:first-child{background:#947453}.clean-panels article:last-child{background:linear-gradient(rgba(86,61,46,.32),rgba(86,61,46,.32)),radial-gradient(circle at 67% 22%,#af916d 0 8%,#735943 12% 25%,#4f3a2c 80%)}.clean-panels b{display:grid;place-items:center;width:128px;height:100px;margin:0 auto 16px;border-radius:50%;background:#fff6dc;color:#eb5d17;font-family:Georgia,serif;font-size:43px}.clean-panels i{position:absolute;top:15px;font-size:95px;font-style:normal;font-weight:100;opacity:.72}.clean-panels article:first-child i{right:42px}.clean-panels article:last-child i{right:48px}.clean-panels p{margin:0;font-size:28px;line-height:1.3;font-weight:800;letter-spacing:-2.6px}.miscarriage-clean>p{margin:0;padding:35px 80px;background:#947453;color:#fff;text-align:center;font-size:16px;line-height:1.8;letter-spacing:-1.2px}.miscarriage-card{display:grid;grid-template-columns:1fr 360px;align-items:center;gap:70px;padding:96px 90px;background:#f0ece7}.miscarriage-card h2{margin:0 0 22px;font-size:36px;line-height:1.35;letter-spacing:-3px}.miscarriage-card h2 strong{color:#f07d18}.miscarriage-card p{margin:0;font-size:18px;line-height:1.7;letter-spacing:-1.3px}.miscarriage-card img{width:100%;height:auto;border-radius:13px;box-shadow:0 9px 25px rgba(62,43,37,.18)}.miscarriage-contact{display:block;width:100%;height:auto;margin:50px auto 0}.miscarriage-page .miscarriage-contact{max-height:410px;object-fit:cover;object-position:top}
  @media(max-width:1050px){.miscarriage-shell{width:min(100%,1000px)}.miscarriage-page{padding-top:24px}.miscarriage-hero-copy{padding:40px}.miscarriage-hero-copy h2{font-size:clamp(40px,5vw,57px)}.miscarriage-hero-copy span{font-size:15px}.miscarriage-intro{padding:65px 55px}.miscarriage-intro h2{font-size:28px}.miscarriage-intro p{width:90%}.miscarriage-charts{padding:34px 44px}.miscarriage-clean>p{padding-inline:45px}}
  /* 유산후조리 시각 기준선 */
  .miscarriage-page{--brand:#a7ce00;--brand-soft:#eef6db;--brand-deep:#7d9b00;--ink:#3f3b39;padding-top:28px}
  .miscarriage-page-title{height:58px;display:flex;align-items:center;margin-bottom:14px;padding:0;border-bottom:1px dotted #cfcfcf}
  .miscarriage-page-title h1{font-size:36px;font-weight:400;letter-spacing:-3px}
  .miscarriage-hero{grid-template-columns:61.5% 38.5%;min-height:365px;background:#efc8b3}.miscarriage-hero-copy{padding:45px 68px}.miscarriage-hero-copy h2{font-size:57px;letter-spacing:-5px}.miscarriage-hero-copy span{font-size:17px}
  .miscarriage-intro{display:block;min-height:470px;padding:73px 72px;background:#f2f3f4}.miscarriage-intro:after{display:none}.miscarriage-intro-copy{width:61%}.miscarriage-intro h2{font-size:38px;line-height:1.35;letter-spacing:-3px}.miscarriage-intro h2 strong{color:var(--brand);font-weight:400}.miscarriage-intro h2 strong b{font-weight:800}.miscarriage-intro p{width:100%;font-size:18px;line-height:1.75;color:#4a4644}.miscarriage-intro-photo{right:0;width:58%;background:linear-gradient(90deg,#f2f3f4 0%,rgba(242,243,244,.92) 24%,rgba(242,243,244,0) 53%),url('/images/miscarriage/USH_15.jpg') 62% center/cover no-repeat;filter:none;opacity:1}
  .miscarriage-note{width:78%;margin:-34px auto 0;grid-template-columns:110px 1fr;padding:25px 38px;border-radius:18px;background:#fff;box-shadow:0 4px 18px rgba(56,48,42,.08);position:relative;z-index:2}.miscarriage-note>b{font-size:45px}.miscarriage-note p{font-size:16px}.miscarriage-page mark{padding:1px 3px 3px;background:linear-gradient(transparent 20%,#fff4b0 20% 94%,transparent 94%);font-weight:400}
  .miscarriage-risk{padding:100px 95px;background:linear-gradient(rgba(74,79,75,.52),rgba(91,107,73,.52)),url('/images/miscarriage/USH_16.jpg') center/cover no-repeat}.miscarriage-risk strong{color:var(--brand-soft)}.miscarriage-risk mark{background:rgba(242,246,235,.88);color:#555;padding:2px 6px}.miscarriage-risk p{font-size:21px}
  .miscarriage-need{padding:86px 54px 78px;background:#fff}.miscarriage-need>h2,.miscarriage-symptoms h2{font-size:38px;font-weight:800;letter-spacing:-3px}.miscarriage-need>p,.miscarriage-need>.miscarriage-restored-copy{max-width:875px;font-size:18px;line-height:1.75}.miscarriage-charts{margin-top:42px;padding:38px 54px 26px}.chart-bars{border-bottom-color:#bdbdbd}.chart-bars i{background:#ddd1b6}.chart-bars i:last-child{background:var(--brand)}.chart-bars i:last-child b{color:var(--brand-deep)}.miscarriage-charts h3{background:#584842;font-size:18px}.miscarriage-note--peach{width:auto;margin:40px 0 0;border-radius:14px;background:#f6f6f6}.miscarriage-restored-copy{margin:34px auto 0!important;padding:25px 35px;background:#f5e5d2;text-align:center;color:#4a4542}
  .miscarriage-symptoms{padding:88px 45px 75px}.symptoms-grid figcaption{font-size:18px}.miscarriage-symptoms>p{font-size:18px;font-weight:400}.miscarriage-symptoms>h3{font-size:23px;font-weight:600}
  .miscarriage-goals{padding:84px 66px;background:linear-gradient(rgba(62,66,59,.60),rgba(101,118,75,.60)),url('/images/miscarriage/USH_17.jpg') center/cover no-repeat}.miscarriage-goals h2{font-size:38px}.miscarriage-goals li{font-size:20px}.miscarriage-goals em{font-size:30px}
  .miscarriage-treatment{background:var(--brand);padding:85px 36px 96px}.miscarriage-treatment>h2{font-size:38px}.process-flow{background:transparent;padding:35px 66px}.process-flow>div{border:0;border-radius:0;background:#fff;min-height:205px}.process-flow>div:not(:last-child):after{right:-38px;width:52px;height:52px;background:var(--brand);font-size:0}.process-flow>div:not(:last-child):before{position:absolute;z-index:2;top:50%;right:-30px;width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;border-left:16px solid #fff;content:'';transform:translateY(-50%)}.process-flow b{font-family:'Malgun Gothic',sans-serif;font-weight:800;font-size:25px;color:var(--brand-deep)}.process-flow span{font-size:19px;font-style:italic}.treatment-articles article{border-radius:12px}.treatment-articles p em{background:var(--brand);font-family:'Malgun Gothic',sans-serif}.treatment-articles p strong{font-style:italic}
  .miscarriage-research{padding:85px 66px}.miscarriage-research>h2{font-size:38px;font-weight:400}.miscarriage-research>h2 span{background:#fff4b0}.miscarriage-research>h2 strong{font-weight:800}.miscarriage-research>h3{font-family:'Batang','Times New Roman',serif;font-size:30px}.miscarriage-research article{gap:24px}
  .miscarriage-clean{padding-top:62px}.miscarriage-clean>h2{font-size:25px}.clean-panels{height:420px}.clean-panels article{padding:0}.clean-panels article>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.clean-panels article:first-child{background:#edf1e9}.clean-panels article:first-child>img{object-fit:contain;background:#edf1e9}.clean-panels article:last-child{background:#333}.clean-panels article:last-child:after{position:absolute;inset:0;background:rgba(37,30,24,.46);content:''}.clean-panels i{z-index:2;color:rgba(255,255,255,.38);font-size:142px}.clean-panels article:first-child i{color:rgba(125,156,92,.22)}.clean-panels b{display:none}.clean-panels p{position:absolute;z-index:3;right:0;bottom:56px;left:0;color:#fff;font-size:26px}.clean-panels article:first-child p{color:#303b3d}.miscarriage-clean>p{padding:28px 90px;background:#f3f3f3;color:#4c4a47;font-size:18px}
  .miscarriage-card{gap:62px;padding:76px 90px;background:#f4f3f1}.miscarriage-card h2{font-size:38px;font-weight:600}.miscarriage-card h2 strong{color:var(--brand)}.miscarriage-card p{font-size:18px}.miscarriage-card img{width:333px;justify-self:center;box-shadow:none}
  .miscarriage-contact{margin-top:32px}.miscarriage-links{display:grid;margin-top:38px;margin-bottom:54px;grid-template-columns:repeat(3,1fr);border-top:1px solid #c6c1c1;border-left:1px solid #c6c1c1}.miscarriage-link-card{position:relative;height:298px;overflow:hidden;border-right:1px solid #c6c1c1;border-bottom:1px solid #c6c1c1}.miscarriage-link-card:nth-child(n+4){height:152px}.miscarriage-link-card>img{position:absolute!important;inset:0;width:100%!important;height:100%!important;object-fit:cover}.miscarriage-link-copy{position:absolute;top:24px;left:28px;color:#414141}.miscarriage-link-copy h3{margin:0 0 15px;font-size:22px;font-weight:600;line-height:1.1;letter-spacing:-2px;text-decoration:underline;text-underline-offset:5px}.miscarriage-link-copy p{margin:0;color:#b88f83;font-size:16px;line-height:1.4;letter-spacing:-1px}.miscarriage-link-card:nth-child(n+4) .miscarriage-link-copy{top:20px}.miscarriage-link-card--phone .miscarriage-link-copy{right:22px}.miscarriage-link-phone{display:flex!important;align-items:baseline;color:#444!important;font-family:Arial,sans-serif!important;font-size:34px!important;font-weight:700!important;letter-spacing:-2.6px!important}.miscarriage-link-phone b{color:#b56931}.miscarriage-link-card small{display:block;margin-top:5px;color:#b7a095;font-size:12px;text-align:right}
  @media(max-width:700px){.miscarriage-page{padding:20px 0 55px}.miscarriage-page-title{height:56px;padding:0 18px}.miscarriage-page-title h1{font-size:30px}.miscarriage-hero{grid-template-columns:1fr}.miscarriage-hero>img{height:220px}.miscarriage-hero-copy{min-height:230px;padding:28px}.miscarriage-hero-copy h2{font-size:42px}.miscarriage-intro{padding:50px 27px}.miscarriage-intro-copy{width:100%}.miscarriage-intro h2{font-size:28px}.miscarriage-note{width:auto;margin:0 20px;padding:22px}.miscarriage-risk{padding:65px 24px}.miscarriage-charts{grid-template-columns:1fr;padding:28px}.miscarriage-goals{padding:62px 22px}.process-flow{grid-template-columns:1fr;padding:28px 42px}.process-flow>div:not(:last-child):after{top:auto;right:50%;bottom:-41px;transform:translateX(50%)}.process-flow>div:not(:last-child):before{top:auto;right:calc(50% - 8px);bottom:-31px;transform:rotate(90deg)}.miscarriage-clean>p{padding:28px 24px}.miscarriage-card{grid-template-columns:1fr;padding:60px 30px}.miscarriage-links{grid-template-columns:1fr;margin-bottom:34px}.miscarriage-link-card,.miscarriage-link-card:nth-child(n+4){height:64vw;min-height:210px}.miscarriage-link-copy{top:7vw;left:8vw}.miscarriage-link-copy h3{font-size:24px}.miscarriage-link-copy p{font-size:16px}}
  /* 네이비 컬러 체계: CSS로 제어되는 연두 계열만 교체 */
  .miscarriage-page{--brand:#123961;--brand-soft:#F3F5F7;--brand-deep:#0D3155}
  .miscarriage-hero,.miscarriage-hero-copy{background:#123960;color:#fff}.miscarriage-hero-copy p,.miscarriage-hero-copy h2{color:#A4B7CC}.miscarriage-hero-copy span{color:#EEF3F8}
  .miscarriage-risk{background:linear-gradient(rgba(18,57,97,.56),rgba(13,49,85,.64)),url('/images/miscarriage/USH_16.jpg') center/cover no-repeat}
  .miscarriage-goals{background:linear-gradient(rgba(18,57,97,.68),rgba(13,49,85,.68)),url('/images/miscarriage/USH_17.jpg') center/cover no-repeat}
  .clean-panels article:first-child,.clean-panels article:first-child>img{background:#F3F5F7}.clean-panels article:first-child i{color:rgba(164,183,204,.38)}
`;
