'use client';

import Image from 'next/image';

type ConstitutionTypeProps = {
  title: string;
  image: string;
  imageAlt: string;
  lead: string;
  description: string;
  highlight: string;
  reverse?: boolean;
  pale?: boolean;
};

const products = [
  {
    title: '진 슬림탕',
    description: '개인별 맞춤 다이어트 한약으로 다이어트는 물론 건강까지 챙겨 근본적인 체질개선까지 도와드립니다.',
    image: '/images/che-diet/img07.png',
    alt: '진 슬림탕',
  },
  {
    title: '진 슬림삼총사',
    description: '몸에 체지방을 제거하고 영양소를 제공하며 몸 속의 노폐물과 숙변까지 함께 제거하여 요요까지 관리합니다.',
    image: '/images/che-diet/imge08.png',
    alt: '진 슬림삼총사',
  },
  {
    title: '진 슬림환',
    description: '식욕억제와 함께 체지방을 분해하는 환으로 근육량은 유지하면서 체지방만을 선택적으로 분리합니다.',
    image: '/images/che-diet/imge09.png',
    alt: '진 슬림환',
  },
  {
    title: '진 SS시럽',
    description: '물이 없어도 간편하게 먹는 농축 시럽한약으로 편안하게 식욕조절을 도와드립니다.',
    image: '/images/che-diet/imge10.png',
    alt: '진 SS시럽',
  },
  {
    title: '요요방지환',
    description: '다이어트 감량 후 요요방지를 위해 하루 2번 간편하게 식욕조절을 도와 요요를 예방합니다.',
    image: '/images/che-diet/imge11.png',
    alt: '요요방지환',
  },
  {
    title: '칼로리컷다운',
    description: '탄수화물이 지방으로 전환되는 것을 감소시키고 체지방을 줄여줍니다.',
    image: '/images/che-diet/imge12.png',
    alt: '칼로리컷다운',
  },
];

function ConstitutionType({
  title,
  image,
  imageAlt,
  lead,
  description,
  highlight,
  reverse = false,
  pale = false,
}: ConstitutionTypeProps) {
  return (
    <section className={`constitution-type ${pale ? 'constitution-type--pale' : ''}`}>
      <div className={`type-inner ${reverse ? 'type-inner--reverse' : ''}`}>
        <div className="type-figure">
          <Image src={image} alt={imageAlt} width={309} height={579} unoptimized />
        </div>
        <div className="type-copy">
          <div className="type-title"><span>{title}</span></div>
          <p className="type-lead">{lead}</p>
          <p className="type-description">{description} <mark>{highlight}</mark></p>
        </div>
      </div>
    </section>
  );
}

export default function ConstitutionDietPage() {
  return (
    <div className="constitution-page">
      <article className="constitution-content">
        <header className="page-heading">
          <h1>체질별 다이어트</h1>
        </header>

        <section className="constitution-hero" aria-labelledby="constitution-hero-title">
          <div className="hero-photo">
            <Image
              src="/images/che-diet/MAIN.png"
              alt="인바디 검사와 체질 상담"
              fill
              priority
              sizes="(max-width: 720px) 100vw, 550px"
              className="hero-photo-image"
              unoptimized
            />
          </div>
          <div className="hero-copy">
            <p className="hero-kicker">개인의 체질에 따라 다른 비만의 원인!</p>
            <h2 id="constitution-hero-title"><em>체 질 별</em><br />다 이 어 트</h2>
            <p className="hero-note">실패하지 않는 다이어트 기본에 충실한 진 한의원<br />한방 다이어트 치료 프로세스</p>
          </div>
        </section>

        <section className="constitution-intro" aria-labelledby="intro-title">
          <div className="intro-copy">
            <h2 id="intro-title">체질별 다이어트</h2>
            <p>
              어떤 체질은 에너지를 소모하고 배설하는 장기인 심(心), 폐(肺), 신(腎)의 기능이 상대적으로 강해
              지방으로 축적되기 전에 대부분을 에너지로 소모해서 체중이 쉽게 늘어나지 않는 반면, 또 어떤 체질은
              간(肝), 비(脾)의 소화 흡수기능이 에너지 소모기능보다 상대적으로 강해 비교적 쉽게 살이찌기도 합니다.
            </p>
            <p>
              이처럼 사람들을 오장육부의 체질적 특성에 따라 태양인(太陽人), 태음인(太陰人), 소양인(少陽人),
              소음인(少陰人) 네 가지 체질로 분류한 것을 사상체질(四象體質)이라고 합니다.
              <mark> 각각의 체질은 비만의 기능성도 다르고, 비만이 되더라도 그 타입이 모두 다릅니다. 때문에
              개인마다 자신의 체질에 따른 비만의 원인을 찾은 후 각자에게 맞는 약재와 치료법을 병행하여야만
              효과적인 다이어트를 할 수 있습니다.</mark>
            </p>
          </div>
          <div className="constitution-map">
            <Image src="/images/che-diet/img02.jpg" alt="사상체질 네 가지 분류" width={1248} height={715} loading="eager" unoptimized />
          </div>

          <div className="metabolism-grid" aria-label="체질별 기초대사량 비교">
            <div className="metabolism-card">
              <h3>조금만 먹어도 살이 찌는 체질</h3>
              <div className="metabolism-ring metabolism-ring--low">
                <div className="ring-label ring-label--left">체지방<br /><strong>표준이상</strong></div>
                <div className="ring-center">체중 60kg<br /><b>표준</b></div>
                <div className="ring-label ring-label--right"><b>근육량</b><br /><strong>표준이하</strong></div>
                <i className="ring-marker ring-marker--one" aria-hidden="true" />
                <i className="ring-marker ring-marker--two" aria-hidden="true" />
                <i className="ring-marker ring-marker--three" aria-hidden="true" />
                <i className="ring-marker ring-marker--four" aria-hidden="true" />
              </div>
              <p>조금만 먹어도 살이 찌는 체질<br /><strong>기초대사량 낮음</strong></p>
            </div>
            <div className="metabolism-card">
              <h3>먹어도 살이 안찌는 체질</h3>
              <div className="metabolism-ring metabolism-ring--high">
                <div className="ring-label ring-label--left">체지방<br /><strong>표준이하</strong></div>
                <div className="ring-center">체중 60kg<br /><b>표준</b></div>
                <div className="ring-label ring-label--right"><b>근육량</b><br /><strong>표준이상</strong></div>
                <i className="ring-marker ring-marker--one" aria-hidden="true" />
                <i className="ring-marker ring-marker--two" aria-hidden="true" />
                <i className="ring-marker ring-marker--three" aria-hidden="true" />
                <i className="ring-marker ring-marker--four" aria-hidden="true" />
              </div>
              <p>근육량이 많고 체지방이 적은 체형<br /><strong>기초대사량 높음</strong></p>
            </div>
          </div>
        </section>

        <section className="types-heading" aria-label="사상체질별 특징">
          <h2>사상체질별 특징</h2>
        </section>

        <ConstitutionType
          title="소음인(少陰人)"
          image="/images/che-diet/img03.png"
          imageAlt="소음인 살찌기 쉬운 부위"
          lead="소음인은 팔, 다리는 가늘고 배만 나온 복부비만 혹은 엉덩이가 크고 어깨가 좁은 하체비만형 체격이 많습니다."
          description="소음인은 몸이 차고 양기가 부족하여 기운이 순환하지 못해 부분적인 비만인 경우가 많으며, 위장이 약한 체질이므로 육체적 피로나 스트레스가 누적되면 소화기능에 장애가 발생합니다."
          highlight="지방질이 많은 음식이나 성질이 냉한 음식은 피하고 항상 몸을 따뜻하게 하는 것이 좋습니다."
        />
        <ConstitutionType
          title="소양인(少陽人)"
          image="/images/che-diet/img04.png"
          imageAlt="소양인 살찌기 쉬운 부위"
          lead="소양인은 하체에 비해 상체가 발달한 편으로 여자의 경우 가슴이 큰 사람이 많습니다."
          description="상대적으로 하부장기인 비뇨생식기의 기능이 약해 비만이 될 수 있습니다. 또한 성격이 예민하여 스트레스를 받으면 폭식, 과식을 하는 경향이 있으므로 가벼운 운동을 생활화하고 정신적인 건강관리에도 힘쓰는 것이 좋습니다."
          highlight="열이 많은 체질이기 때문에 미지근하거나 차가운 성질의 음식과 약이 좋고, 열을 내는 음식은 피해야합니다."
          reverse
          pale
        />
        <ConstitutionType
          title="태음인(太陰人)"
          image="/images/che-diet/img05.png"
          imageAlt="태음인 살찌기 쉬운 부위"
          lead="듬직하고 골격이 큰 태음인은 평소 움직이는 것을 싫어하고 음식에 욕심이 많아 단순 과식성 비만체형이 될 확률이 높습니다."
          description="저칼로리 다이어트보다는 규칙적인 운동을 통해 서서히 살이 빠지는 체질로 바꿔나가는 것이 좋습니다. 근육단련보다는 유산소 운동에 중점을 두고 운동과 함께 점차적으로 식사량을 줄이는 다이어트 방법이 효과가 있습니다."
          highlight="비만이 되기 쉬운 체질이므로 다른 사람보다 많이 먹는 습관을 버리고 자극적이거나 지방질이 많은 음식은 피해야합니다."
        />
        <ConstitutionType
          title="태양인(太陽人)"
          image="/images/che-diet/img06.png"
          imageAlt="태양인 살찌기 쉬운 부위"
          lead="태양인은 폐의 기능이 강하고 간의 기능이 약하여 가슴 상부가 발달하고 하체가 약합니다."
          description="체질적으로는 비만한 사람이 드물지만 스트레스를 받으면 폭식을 하게 되는 체질이므로 평소 감정조절과 관리에 신경을 써야 합니다. 간의 기능이 약하므로 간을 보호하는 음식이 좋으며, 기름진 육류는 피해야합니다."
          highlight="몸에 열이 많기 때문에 더운 성질이 있는 음식은 가급적 피하고, 해산물과 채소류, 지방질이 적고 자극성 없는 담백한 맛의 음식이 도움이 됩니다."
          reverse
          pale
        />

        <section className="program-section" aria-labelledby="program-title">
          <h2 id="program-title">진한의원 다이어트 프로그램</h2>
          <div className="program-grid">
            {products.map((product) => (
              <article className="program-card" key={product.title}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="program-image">
                  <Image src={product.image} alt={product.alt} width={398} height={309} loading="eager" unoptimized />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="acupuncture-section" aria-labelledby="acupuncture-title">
          <h2 id="acupuncture-title">산삼비만약침</h2>
          <p className="acupuncture-intro">부분비만에 사용하는 산삼비만약침으로 산삼, 사향, 웅담, 우황이 들어가 있어 지방분해를 촉진하고 해독작용에 도움을 줍니다.</p>
          <div className="acupuncture-content">
            <div className="ingredient-grid">
              <div><h3>산삼</h3><p>혈중 지질감소와 지방세포 분화억제 및 파괴에 효과가 있고 인체의 기초대사량을 높여줍니다.</p></div>
              <div><h3>사향</h3><p>지방분해를 촉진시키며 대사작용을 증가시키고 식욕을 억제하는 효과가 있습니다.</p></div>
              <div><h3>웅담</h3><p>담즙산, 티우로콜산 등이 주성분으로 항염증 작용과 해독작용이 있습니다.</p></div>
              <div><h3>우황</h3><p>비만으로 인한 고혈압을 완화시키고 경련을 예방하며 혈중지질을 감소시킵니다.</p></div>
            </div>
            <Image src="/images/che-diet/sansam_bottle.png" alt="산삼비만약침" width={314} height={258} loading="eager" unoptimized />
          </div>
        </section>

        <section className="diet-tip" aria-label="다이어트 프로그램 팁">
          <Image src="/images/che-diet/diet_tip_bg.jpg" alt="다이어트 프로그램 팁" width={1000} height={541} loading="eager" unoptimized />
          <div className="diet-tip-seo" aria-label="다이어트 프로그램 팁">
            <h2>DIET PROGRAM TIP!</h2>
            <ol>
              <li><h3>FOOD. 음식</h3><p><b>식욕조절</b><span>슬림환</span><span>진SS시럽</span></p></li>
              <li><h3>EAT. 섭취</h3><p><b>체지방분해</b><span>슬림환</span><span>진SS시럽</span><b>탄수화물의 지방화 전환 방지</b><span>칼로리컷다운</span></p></li>
              <li><h3>FAT. 체지방</h3></li>
              <li><h3>SLIM. 배출/해독</h3><p><b>숙변배출, 장해독</b><span>장해독</span><span>숙변환</span><b>독소배출, 간해독</b><span>해독프로그램</span></p></li>
            </ol>
          </div>
        </section>
        <section className="constitution-footer-cta" aria-label="진한의원 비만 홈페이지 안내">
          <Image src="/images/mid-age/MID_29.jpg" alt="진한의원 비만 홈페이지에서 확인" width={1000} height={500} loading="eager" unoptimized />
        </section>
      </article>

      <style>{`
        .constitution-page {
          width: 100%;
          background: #fff;
          color: #444;
          overflow: hidden;
          font-family: 'Pretendard Variable', Pretendard, 'Malgun Gothic', sans-serif;
        }
        .constitution-content {
          width: min(100%, 1000px);
          margin: 0 auto;
          background: #fff;
        }
        .page-heading {
          height: 68px;
          display: flex;
          align-items: center;
          border-bottom: 1px dotted #ddd;
        }
        .page-heading h1 {
          margin: 0;
          color: #171717;
          font-family: Georgia, 'Batang', serif;
          font-size: 37px;
          font-weight: 500;
          letter-spacing: -3px;
        }
        .constitution-hero {
          height: 366px;
          display: grid;
          grid-template-columns: 55% 45%;
          margin-top: 10px;
          overflow: hidden;
        }
        .hero-photo { position: relative; min-height: 100%; overflow: hidden; }
        .hero-photo-image { object-fit: cover; object-position: center; }
        .hero-copy {
          padding: 59px 0 0 64px;
          background: #422c1d;
          color: #fff;
        }
        .hero-kicker { margin: 0 0 8px; color: #b9aaa0; font-size: 17px; letter-spacing: -1.2px; }
        .hero-copy h2 { margin: 0; color: #fff; font-size: 52px; line-height: 1.28; letter-spacing: 14px; font-weight: 400; }
        .hero-copy h2 em { color: #f1de58; font-style: normal; }
        .hero-note { margin: 25px 0 0; color: #d0c7c1; font-size: 13px; line-height: 1.9; letter-spacing: -0.5px; }
        .constitution-intro {
          position: relative;
          min-height: 1098px;
          margin-top: 39px;
          padding: 110px 67px 74px;
          background: #fbf8f8;
          overflow: hidden;
        }
        .intro-copy { position: relative; z-index: 2; width: 505px; }
        .intro-copy h2 {
          margin: 0 0 27px;
          color: #2f2f2f;
          font-family: Georgia, 'Batang', serif;
          font-size: 42px;
          font-weight: 600;
          letter-spacing: -4px;
        }
        .intro-copy p {
          margin: 0 0 42px;
          color: #555;
          font-family: 'Batang', 'Malgun Gothic', serif;
          font-size: 17px;
          line-height: 1.78;
          letter-spacing: -1.3px;
          word-break: keep-all;
        }
        .intro-copy mark, .type-description mark {
          background: linear-gradient(transparent 53%, #fff03e 53%, #fff03e 90%, transparent 90%);
          color: inherit;
          font-weight: 700;
        }
        .constitution-map {
          position: absolute;
          top: 77px;
          right: -95px;
          width: 615px;
          opacity: 0.92;
        }
        .constitution-map img { width: 100%; height: auto; }
        .metabolism-grid {
          position: relative;
          margin: 64px -9px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
        }
        .metabolism-card { text-align: center; color: #4d4d4d; }
        .metabolism-card h3 {
          margin: 0 0 26px;
          padding: 10px 5px;
          color: #fff;
          background: repeating-linear-gradient(-45deg, #aa8d79 0, #aa8d79 2px, #a38470 2px, #a38470 4px);
          font-family: 'Batang', serif;
          font-size: 18px;
          font-weight: 500;
        }
        .metabolism-ring {
          position: relative;
          width: 247px;
          height: 247px;
          margin: 0 auto 19px;
          border: 3px solid #65504a;
          border-radius: 50%;
        }
        .metabolism-ring::before {
          position: absolute;
          content: '';
          inset: 16px;
          border-radius: 50%;
        }
        .metabolism-ring--low::before { background: conic-gradient(from 30deg, #754844 0 32%, #dfdfdf 32% 100%); }
        .metabolism-ring--high::before { background: conic-gradient(from 30deg, #754844 0 64%, #dfdfdf 64% 100%); }
        .metabolism-ring::after {
          position: absolute;
          content: '';
          inset: 85px;
          border-radius: 50%;
          background: #fbf8f8;
          box-shadow: 0 0 0 1px #e5e5e5;
        }
        .ring-center { position: absolute; z-index: 2; top: 100px; left: 0; width: 100%; color: #626262; font-size: 14px; line-height: 1.6; }
        .ring-center b { color: #d6857d; }
        .ring-label { position: absolute; z-index: 2; top: 109px; color: #555; font-size: 14px; line-height: 1.5; }
        .ring-label--left { left: 38px; }
        .ring-label--right { right: 30px; color: #fff; }
        .ring-label--right b { color: #fff22b; }
        .metabolism-card > p { margin: 0; font-family: 'Batang', serif; font-size: 18px; line-height: 1.55; }
        .metabolism-card > p strong { color: #754844; font-size: 19px; }
        .types-heading { padding: 80px 0 44px; text-align: center; }
        .types-heading h2 { margin: 0; color: #3d3d3d; font-size: 39px; letter-spacing: -3px; }
        .constitution-type { padding: 18px 0 50px; background: #fff; }
        .constitution-type--pale { background: #fbf8f8; }
        .type-inner { display: grid; grid-template-columns: 270px 1fr; align-items: center; gap: 31px; padding: 0 42px; }
        .type-inner--reverse { grid-template-columns: 1fr 270px; }
        .type-inner--reverse .type-figure { grid-column: 2; }
        .type-inner--reverse .type-copy { grid-column: 1; grid-row: 1; }
        .type-figure { display: flex; justify-content: center; align-items: center; min-height: 330px; }
        .type-figure img { width: auto; height: 305px; object-fit: contain; }
        .type-copy { min-width: 0; text-align: center; }
        .type-title { display: flex; align-items: center; gap: 18px; margin-bottom: 36px; color: #b09480; }
        .type-title::before, .type-title::after { flex: 1; height: 1px; background: #b09480; content: ''; }
        .type-title span { min-width: 280px; padding: 12px 18px; color: #fff; background: #ab8e78; font-size: 24px; font-weight: 700; letter-spacing: -1.7px; }
        .type-lead { max-width: 620px; margin: 0 auto 22px; color: #5a5a5a; font-family: 'Batang', serif; font-size: 20px; line-height: 1.65; letter-spacing: -1.8px; word-break: keep-all; }
        .type-description { max-width: 675px; margin: 0 auto; color: #666; font-size: 15px; line-height: 1.85; letter-spacing: -1.1px; word-break: keep-all; }
        .program-section { padding: 87px 0 79px; background: #fff; }
        .program-section h2 { margin: 0 0 66px; color: #2e2e2e; text-align: center; font-family: Georgia, 'Batang', serif; font-size: 42px; letter-spacing: -4px; }
        .program-section h2::after { display: block; width: 600px; max-width: 72%; height: 6px; margin: 10px auto 0; background: #574039; content: ''; box-shadow: 0 2px 4px rgba(0,0,0,0.25); }
        .program-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 66px 38px; padding: 0 2px; }
        .program-card h3 { margin: 0 0 11px; padding-bottom: 7px; color: #3d3d3d; border-bottom: 5px solid #67c7ce; font-family: 'Batang', serif; font-size: 31px; font-weight: 500; letter-spacing: -3px; }
        .program-card p { min-height: 73px; margin: 0 0 14px; color: #585858; font-size: 15px; line-height: 1.46; letter-spacing: -1px; word-break: keep-all; }
        .program-image { position: relative; width: 100%; aspect-ratio: 1.31; overflow: hidden; background: #f4f4f4; }
        .program-image img { width: 100%; height: 100%; object-fit: cover; }
        .acupuncture-section { padding: 33px 0 48px; background: #fff; }
        .acupuncture-section h2 { margin: 0 0 14px; color: #444; font-family: 'Batang', serif; font-size: 34px; font-weight: 500; letter-spacing: -3px; }
        .acupuncture-intro { margin: 0 0 24px; color: #676767; font-size: 15px; letter-spacing: -1px; word-break: keep-all; }
        .acupuncture-content { display: grid; grid-template-columns: 1fr 314px; align-items: center; gap: 35px; }
        .ingredient-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px 42px; }
        .ingredient-grid h3 { margin: 0 0 6px; color: #4c4c4c; font-family: 'Batang', serif; font-size: 22px; font-weight: 500; }
        .ingredient-grid p { margin: 0; color: #555; font-size: 13px; line-height: 1.4; letter-spacing: -0.8px; word-break: keep-all; }
        .diet-tip { width: 100%; line-height: 0; }
        .diet-tip img { display: block; width: 100%; height: auto; }
        @media (max-width: 720px) {
          .page-heading { height: 55px; padding: 0 20px; }
          .page-heading h1 { font-size: 28px; letter-spacing: -2px; }
          .constitution-hero { height: auto; grid-template-columns: 1fr; margin-top: 0; }
          .hero-photo { height: 255px; }
          .hero-copy { min-height: 250px; padding: 35px 12% 38px; }
          .hero-kicker { font-size: 14px; }
          .hero-copy h2 { font-size: clamp(38px, 11vw, 52px); }
          .constitution-intro { min-height: auto; margin-top: 0; padding: 58px 24px 50px; }
          .intro-copy { width: 100%; }
          .intro-copy h2 { font-size: 34px; }
          .intro-copy p { font-size: 15px; line-height: 1.75; }
          .constitution-map { position: relative; top: auto; right: auto; width: 130%; margin: -18px -15% 15px; }
          .metabolism-grid { position: relative; inset: auto; grid-template-columns: 1fr; gap: 40px; margin-top: 39px; }
          .metabolism-card h3 { font-size: 16px; }
          .metabolism-ring { width: 225px; height: 225px; }
          .metabolism-ring::after { inset: 77px; }
          .ring-center { top: 91px; }
          .ring-label { top: 99px; }
          .types-heading { padding: 58px 0 32px; }
          .types-heading h2 { font-size: 31px; }
          .constitution-type { padding: 34px 0; }
          .type-inner, .type-inner--reverse { display: flex; flex-direction: column; gap: 15px; padding: 0 23px; }
          .type-inner--reverse .type-figure, .type-inner--reverse .type-copy { display: flex; }
          .type-inner--reverse .type-copy { flex-direction: column; }
          .type-figure { min-height: auto; }
          .type-figure img { height: 246px; }
          .type-copy { width: 100%; }
          .type-title { gap: 10px; margin-bottom: 21px; }
          .type-title span { min-width: 205px; padding: 10px 7px; font-size: 20px; }
          .type-lead { font-size: 17px; }
          .type-description { font-size: 14px; }
          .program-section { padding: 55px 20px; }
          .program-section h2 { margin-bottom: 42px; font-size: 32px; }
          .program-grid { grid-template-columns: 1fr; gap: 42px; }
          .program-card h3 { font-size: 28px; }
          .program-card p { min-height: 0; font-size: 15px; }
          .acupuncture-section { padding: 35px 20px 40px; }
          .acupuncture-section h2 { font-size: 30px; }
          .acupuncture-content { grid-template-columns: 1fr; }
          .acupuncture-content > img { justify-self: center; }
          .ingredient-grid { gap: 20px; }
          .diet-tip { overflow-x: auto; }
          .diet-tip img { width: 1000px; max-width: none; transform-origin: left top; }
        }
      `}</style>
      <style>{`
        .page-heading h1{font-family:Georgia,'Batang',serif;font-weight:700}

        .constitution-hero{height:366px;grid-template-columns:639px 361px;margin-top:10px}
        .hero-copy{padding:55px 0 0 32px;background:#4a352d}
        .hero-kicker{margin:0 0 10px;color:#b9aaa4;font-size:15px;letter-spacing:-1px}
        .hero-copy h2{font-size:52px;font-weight:400;line-height:1.15;letter-spacing:4px}
        .hero-note{margin-top:20px;color:#ddd5d1;font-size:14px;line-height:1.65;letter-spacing:-.65px}

        .constitution-intro{background:#fbf8f8}
        .intro-copy h2{font-family:Georgia,'Batang',serif;font-size:48px;font-weight:400;letter-spacing:-4px}
        .intro-copy p{font-family:Arial,'Malgun Gothic',sans-serif;font-size:18px;line-height:1.78;letter-spacing:-1.3px}
        .constitution-map{top:0;right:0;width:100%;opacity:1;pointer-events:none}

        .metabolism-card{display:grid;grid-template-rows:50px 333px auto;align-items:start}
        .metabolism-card h3{display:flex;height:50px;box-sizing:border-box;margin:0;padding:0 8px;align-items:center;justify-content:center;background:repeating-linear-gradient(-45deg,#b49b89 0,#b49b89 2px,#ad927f 2px,#ad927f 4px);color:#fff;font-family:Georgia,'Batang',serif;font-size:18px;font-weight:600}
        .metabolism-ring{width:290px;height:290px;margin:22px auto 21px;border:0;background:transparent}
        .metabolism-ring::before{inset:9px;z-index:0;box-shadow:0 0 0 3px #fbf8f8}
        .metabolism-ring--low::before{background:conic-gradient(from 30deg,#fbf8f8 0 1.7%,#754844 1.7% 33%,#fbf8f8 33% 34.7%,#d9d9d9 34.7% 98.3%,#fbf8f8 98.3% 100%)}
        .metabolism-ring--high::before{background:conic-gradient(from 30deg,#fbf8f8 0 1.7%,#754844 1.7% 61%,#fbf8f8 61% 62.7%,#d9d9d9 62.7% 98.3%,#fbf8f8 98.3% 100%)}
        .metabolism-ring::after{inset:92px;z-index:1;background:#fbf8f8}
        .ring-center{z-index:2;top:116px;font-family:Arial,'Malgun Gothic',sans-serif;font-size:15px;line-height:1.65}
        .ring-label{z-index:2;top:122px;font-family:Arial,'Malgun Gothic',sans-serif;font-size:15px;line-height:1.55}
        .ring-label--left{left:42px}.ring-label--right{right:32px}
        .ring-marker{position:absolute;z-index:3;display:block;width:11px;height:11px;border-radius:50%;background:#754844}
        .metabolism-ring--high .ring-marker{background:#888}
        .metabolism-ring--low .ring-marker--one{top:5px;left:91px}.metabolism-ring--low .ring-marker--two{top:12px;right:47px}.metabolism-ring--low .ring-marker--three{right:49px;bottom:8px}.metabolism-ring--low .ring-marker--four{bottom:23px;left:28px}
        .metabolism-ring--high .ring-marker--one{top:5px;left:91px}.metabolism-ring--high .ring-marker--two{top:12px;right:47px}.metabolism-ring--high .ring-marker--three{right:49px;bottom:8px}.metabolism-ring--high .ring-marker--four{bottom:23px;left:28px}
        .ring-marker--one::before{position:absolute;top:-5px;left:-91px;box-sizing:border-box;width:288px;height:288px;border:3px solid currentColor;border-radius:50%;color:#754844;content:'';transform:rotate(-13deg);-webkit-mask:conic-gradient(from 0deg,#000 0 112deg,transparent 112deg 160deg,#000 160deg 271deg,transparent 271deg);mask:conic-gradient(from 0deg,#000 0 112deg,transparent 112deg 160deg,#000 160deg 271deg,transparent 271deg)}
        .metabolism-ring--high .ring-marker--one::before{color:#888;transform:rotate(31deg);-webkit-mask:conic-gradient(from 0deg,#000 0 104deg,transparent 104deg 154deg,#000 154deg 265deg,transparent 265deg);mask:conic-gradient(from 0deg,#000 0 104deg,transparent 104deg 154deg,#000 154deg 265deg,transparent 265deg)}
        .metabolism-card>p{font-family:Arial,'Malgun Gothic',sans-serif;font-size:18px;font-weight:400;line-height:1.6}
        .metabolism-card>p strong{font-size:19px}

        .types-heading h2{font-size:38px;font-weight:700}
        .type-inner{grid-template-columns:330px 1fr}.type-inner--reverse{grid-template-columns:1fr 330px}
        .type-figure{min-height:464px}.type-figure img{height:440px}
        .type-lead{font-family:'Batang',serif;font-size:20px;font-weight:400;line-height:1.65}
        .type-description{font-family:Arial,'Malgun Gothic',sans-serif;font-size:18px;font-weight:400;line-height:1.78}

        .program-section h2{display:table;width:fit-content;margin-right:auto;margin-left:auto;font-weight:700}
        .program-section h2::after{width:100%;max-width:none}
        .program-card h3{padding-bottom:9px;font-family:Arial,'Malgun Gothic',sans-serif;font-size:25px;font-weight:600;letter-spacing:-1.4px}
        .program-card p{min-height:92px;font-family:Arial,'Malgun Gothic',sans-serif;font-size:18px;font-weight:400;line-height:1.6;letter-spacing:-1.1px}

        .acupuncture-section h2{display:table;width:fit-content;margin-bottom:24px;font-weight:700}
        .acupuncture-section h2::after{display:block;width:306px;height:5px;margin-top:8px;background:#67c7ce;content:''}
        .acupuncture-intro{font-family:Arial,'Malgun Gothic',sans-serif;font-size:18px;line-height:1.65}
        .ingredient-grid{gap:34px 42px}
        .ingredient-grid>div{position:relative;min-height:86px;padding-left:76px}
        .ingredient-grid>div::before{position:absolute;top:7px;left:12px;width:50px;height:50px;background:#e3eef0;content:'';transform:rotate(45deg)}
        .ingredient-grid h3,.ingredient-grid p{position:relative;z-index:1;font-family:Arial,'Malgun Gothic',sans-serif}
        .ingredient-grid h3{margin-bottom:7px;font-size:20px;font-weight:600}
        .ingredient-grid p{font-size:18px;font-weight:400;line-height:1.55;letter-spacing:-1px}

        .diet-tip{position:relative;overflow:hidden;line-height:0}.diet-tip>img{display:block;width:100%;height:auto}
        .diet-tip-seo{position:absolute;inset:0;z-index:1;color:transparent;font-family:Arial,'Malgun Gothic',sans-serif;line-height:1.35;user-select:text}
        .diet-tip-seo h2,.diet-tip-seo h3,.diet-tip-seo p{margin:0;color:transparent}.diet-tip-seo h2{position:absolute;top:1%;left:0;font-size:5.7vw;line-height:1}
        .diet-tip-seo ol{margin:0;padding:0;list-style:none}.diet-tip-seo li{position:absolute;top:52%;width:21%;text-align:center}.diet-tip-seo li:nth-child(1){left:3%}.diet-tip-seo li:nth-child(2){left:27%}.diet-tip-seo li:nth-child(3){left:51%}.diet-tip-seo li:nth-child(4){left:75%}
        .diet-tip-seo h3{font-size:20px}.diet-tip-seo p{margin-top:47px;font-size:17px;line-height:1.52}.diet-tip-seo b,.diet-tip-seo span{display:block;color:transparent}.diet-tip-seo b{margin-top:8px}.diet-tip-seo::selection,.diet-tip-seo *::selection{background:rgba(103,199,206,.45);color:transparent}
        .constitution-footer-cta{line-height:0}.constitution-footer-cta img{display:block;width:100%;height:auto}

        @media (max-width:1000px) and (min-width:721px){.constitution-hero{height:auto;grid-template-columns:63.9% 36.1%;aspect-ratio:2.73}.hero-copy{padding:12% 0 0 8.8%}.hero-kicker{font-size:1.5vw}.hero-copy h2{font-size:5.2vw;letter-spacing:.9vw}.hero-note{margin-top:5%;font-size:1.2vw}}
        @media (max-width:720px){.constitution-hero{height:auto;grid-template-columns:1fr;aspect-ratio:auto}.hero-copy{min-height:250px;padding:35px 12% 38px}.hero-kicker{font-size:14px}.hero-copy h2{font-size:clamp(38px,11vw,52px);letter-spacing:4px}.hero-note{font-size:14px}.constitution-map{position:relative;top:auto;right:auto;width:130%;margin:-18px -15% 15px}.intro-copy h2{font-size:34px}.intro-copy p{font-size:15px}.metabolism-grid{margin:39px 0 0;grid-template-columns:1fr;gap:40px}.metabolism-card{grid-template-rows:50px 293px auto}.metabolism-ring{width:250px;height:250px}.metabolism-ring::after{inset:83px}.ring-center{top:99px;font-size:13px}.ring-label{top:105px;font-size:13px}.ring-label--left{left:33px}.ring-label--right{right:25px}.metabolism-ring--low .ring-marker--one,.metabolism-ring--high .ring-marker--one{top:3px;left:78px}.metabolism-ring--low .ring-marker--two,.metabolism-ring--high .ring-marker--two{top:10px;right:39px}.metabolism-ring--low .ring-marker--three,.metabolism-ring--high .ring-marker--three{right:41px;bottom:7px}.metabolism-ring--low .ring-marker--four,.metabolism-ring--high .ring-marker--four{bottom:18px;left:23px}.type-inner,.type-inner--reverse{display:flex;flex-direction:column}.type-figure{min-height:auto}.type-figure img{height:354px}.type-lead{font-size:18px}.type-description{font-size:15px}.program-section h2{font-size:32px}.program-card h3{font-size:23px}.program-card p{min-height:0;font-size:16px}.acupuncture-section h2::after{width:260px}.ingredient-grid>div{padding-left:63px}.ingredient-grid>div::before{left:8px;width:42px;height:42px}.ingredient-grid h3{font-size:18px}.ingredient-grid p{font-size:15px}.diet-tip-seo h2{font-size:5.7vw}.diet-tip-seo h3{font-size:2vw}.diet-tip-seo p{margin-top:9.4vw;font-size:1.7vw}.constitution-footer-cta{margin-top:0}}
      `}</style>
      <style>{`
        .type-figure img[src="/images/che-diet/img03.png"]{height:475px}
        @media (max-width:720px){.type-figure img[src="/images/che-diet/img03.png"]{height:383px}}
      `}</style>
    </div>
  );
}
