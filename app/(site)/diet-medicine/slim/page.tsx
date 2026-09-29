import Image from 'next/image';
import './slim-page.css';
import '../../_shared/detail-page-scale.css';

const ASSET_PATH = '/images/diet-medicine/slim';

type SpriteVariant = 'small' | 'custom' | 'schedule' | 'comfort';

const slimFeatures: Array<{
  title: string;
  body: React.ReactNode;
  sprite: SpriteVariant;
}> = [
  {
    title: '작은 알약, 편안한 목넘김',
    body: <>여타 다이어트 환보다 알약 크기가 작고<br />표면이 매끈하며, 코팅 과정을 한 번 더 거쳐<br />한약 특유의 냄새를 줄이고<br />목넘김이 편하도록 만들었습니다.</>,
    sprite: 'small',
  },
  {
    title: '1:1 개인별 맞춤 처방',
    body: <>단계나 강도만 나눈 기성한약이 아닌,<br />15일 단위로 환자의 나이, 체질,<br />체력상태, 불편 증상 등을 고려해<br />진단·처방합니다.</>,
    sprite: 'custom',
  },
  {
    title: '복용 시간까지 고려한 처방',
    body: <>아침 공복 복용이 불편하거나<br />수면에 불편함이 있는 경우를 고려해,<br />필요에 따라 아침·점심·저녁 슬림환을<br />다르게 처방하기도 합니다.</>,
    sprite: 'schedule',
  },
  {
    title: '변비 부담까지 고려',
    body: <>숙변환(변비약)을 별도로<br />복용하지 않아도 되도록, 변비가 최대한<br />덜 생길 수 있게 처방합니다.</>,
    sprite: 'comfort',
  },
];

const recommendations = [
  '체력·면역력이 떨어져 체중 감량과 유지가 어려운 중년층',
  '근육량이 적거나 저혈압·빈혈이 있는 마른 비만형',
  '소화가 잘되지 않거나, 스트레스 시 소화기 불편이 잦은 분',
  '생리통·관절통 등 여러 불편 증상을 함께 관리하고 싶은 분',
  '우울감·불안 등 감정 기복으로 식이 조절이 어려운 분',
  '산후 붓기·산후 쇠약감 등 회복과 체중 관리를 함께 원하는 분',
  '성장기 체중 관리가 필요한 소아·청소년',
];

function FeatureSprite({ variant }: { variant: SpriteVariant }) {
  return (
    <span className={`slim-feature__sprite slim-feature__sprite--${variant}`} aria-hidden="true">
      <Image
        src={`${ASSET_PATH}/slim-capsule.png`}
        alt=""
        width={1536}
        height={1024}
        unoptimized
      />
    </span>
  );
}

export default function SlimDietMedicinePage() {
  return (
    <div className="slim-page">
      <div className="slim-page__content">
        <header className="slim-page__heading">
          <h1>슬림환ㆍ습담탕</h1>
          <Image
            className="slim-page__divider"
            src={`${ASSET_PATH}/top-divider.svg`}
            alt=""
            width={1440}
            height={1}
            unoptimized
          />
        </header>

        <section className="slim-hero" aria-labelledby="slim-hero-title">
          <div className="slim-hero__photo">
            <Image
              src={`${ASSET_PATH}/hero-left-overlay.png`}
              alt="진 한의원 슬림환과 습담탕 제품"
              width={1680}
              height={945}
              priority
              unoptimized
            />
          </div>
          <div className="slim-hero__panel">
            <p>다시 돌아오는 체중 관리</p>
            <h2 id="slim-hero-title">
              <span>슬림</span>환<br />
              <span>습담</span>탕
            </h2>
          </div>
        </section>

        <section className="slim-overview" aria-labelledby="slim-overview-title">
          <div className="slim-overview__image" aria-hidden="true">
            <Image
              src={`${ASSET_PATH}/slim-background.png`}
              alt=""
              width={1672}
              height={1530}
              unoptimized
            />
          </div>
          <div className="slim-overview__wash" aria-hidden="true" />
          <div className="slim-overview__copy">
            <p className="slim-overview__headline">
              식욕은 <span className="slim-underline slim-underline--short">다스리고<Image src={`${ASSET_PATH}/slim-accent-short.svg`} alt="" width={430} height={5} unoptimized /></span><br />
              체지방은 <span className="slim-underline slim-underline--wide">선택적으로<Image src={`${ASSET_PATH}/slim-accent-wide.svg`} alt="" width={531} height={5} unoptimized /></span>
            </p>
            <h2 id="slim-overview-title">진 슬림환</h2>
            <p className="slim-overview__description">식욕 조절과 체지방 연소를 돕고,<br />근육량은 유지하며 체지방 감소를 돕습니다.</p>
          </div>
        </section>

        <section className="slim-features" aria-label="진 슬림환의 특징">
          <div className="slim-features__grid">
            {slimFeatures.map((feature) => (
              <article className="slim-feature" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
                <FeatureSprite variant={feature.sprite} />
              </article>
            ))}
          </div>
        </section>

        <section className="slim-safety" aria-labelledby="slim-safety-title">
          <div className="slim-safety__image" aria-hidden="true">
            <Image src={`${ASSET_PATH}/safety-background.png`} alt="" width={1600} height={900} unoptimized />
          </div>
          <div className="slim-safety__wash" aria-hidden="true" />
          <div className="slim-safety__content">
            <h2 id="slim-safety-title">안전성은 <strong>UP!!!!</strong><br />걱정과 불안은 <strong>DOWN!!!</strong></h2>
            <p className="slim-safety__lead">다이어트는 사실 평생 관리인 만큼 지속가능하면서도 약을 장기간<br />복용하더라도 무조건 <strong>안전성이 확보</strong>되어야 합니다!</p>
            <p className="slim-safety__notice">진슬림환은 다년간의 임상연구와 경험을 바탕으로 수개월~수년 이상 복용하더라도<br />간 기능 및 신장 기능을 비롯한 혈액과 소변 검사 상에<br />이상 소견이 최대한 생기지 않도록 독성 우려 한약재는 쓰지 않습니다.</p>
          </div>
        </section>

        <section className="slim-doctor" aria-labelledby="slim-doctor-title">
          <div className="slim-doctor__surface" />
          <Image
            className="slim-doctor__portrait"
            src={`${ASSET_PATH}/doctor.png`}
            alt="대표원장 김효진"
            width={1024}
            height={1365}
            unoptimized
          />
          <div className="slim-doctor__copy">
            <h2 id="slim-doctor-title">저 또한 진슬림환을<br />직접 10년 이상 복용하고 적정 체중과 건강을 유지하고 있습니다.</h2>
            <p className="slim-doctor__notice">(다만, 간독성 한약재가 아니더라도 음수량이 너무 적으면 담즙울체형<br />간수치 상승이 있을 수 있으므로 한약 복용시 하루 1.5리터 이상의 물을 반드시<br />마셔주는 것이 좋습니다.)</p>
            <p className="slim-doctor__body">
              배고픔을 억지로 참지 않아도 운동을 하지 않아도<br />
              <strong>식사량이 자연스럽게 줄어들어 </strong>과식과 폭식으로 늘어나 있던<br />
              위장 크기가 충분히 줄어들게 되면,<br />
              <strong>슬림환 복용횟수를 점차 줄이시며 관리</strong>하시면 됩니다.
            </p>
          </div>
        </section>

        <section className="supdangtang" aria-labelledby="supdangtang-title">
          <div className="supdangtang__image" aria-hidden="true">
            <Image
              src={`${ASSET_PATH}/supdangtang-background.png`}
              alt=""
              width={1671}
              height={1755}
              unoptimized
            />
          </div>
          <div className="supdangtang__wash" aria-hidden="true" />
          <div className="supdangtang__copy">
            <p className="supdangtang__headline">
              다이어트는 물론<br />
              <span className="slim-underline slim-underline--short">건강까지<Image src={`${ASSET_PATH}/slim-accent-short.svg`} alt="" width={430} height={5} unoptimized /></span> 함께
            </p>
            <h2 id="supdangtang-title">진 습담탕</h2>
            <p className="supdangtang__description">개인의 체질과 상태를 고려한 맞춤 다이어트 탕약으로,<br />15일마다 개인별 맞춤 처방을 진행합니다.</p>
          </div>
        </section>

        <section className="slim-recommendations" aria-labelledby="slim-recommendations-title">
          <h2 id="slim-recommendations-title">이런분들에게 <strong>추천해요</strong></h2>
          <ul>
            {recommendations.map((item) => (
              <li key={item}>
                <Image src={`${ASSET_PATH}/bullet.svg`} alt="" width={6} height={6} unoptimized />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
