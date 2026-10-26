import { getPageMetadata } from '@/lib/seo';
import Image from 'next/image';
import './qi-blood.css';
import '../../_shared/detail-page-scale.css';

export const metadata = getPageMetadata('/custom-diet/qi-blood');

const ASSET_PATH = '/images/custom-diet/qi-blood';

const CONCERNS = [
  '적게 먹고 싶어도 늘 체력이 떨어지고\n어지러워서 다이어트를 지속할 수가 없네..',
  '조금만 감량해도 면역력이 떨어져서\n감기에 자주 걸리고 잘 낫지 않네..',
  '조금만 걸어도 쉽게 숨이 차고 힘들어서\n운동을 못하겠네..',
  '나이가 있어서 체중 감량하기가 두렵네..',
  '다이어트를 하면 모발이 많이 빠지거나\n생리가 잘 안나와요.',
  '갑상선 기능저하증 진단받은 이후로\n자꾸 살이 쪄요.',
  '갑상선 암이 있어서 부분절제 혹은 완전 절제 한 이후로 체중이 자꾸 늘고 부어요.',
];

const CAUSES = [
  {
    position: 'top-left',
    title: '선천적 체질ㆍ허약한 체력',
    description: '선천적으로 기와 혈이\n부족한 체질로 에너지 생성이\n적고 기초대사량이 적음',
  },
  {
    position: 'top-right',
    title: '과로ㆍ수면 부족',
    description: '과도한 업무, 스트레스, 수면\n부족은 기와 혈을 소모시켜\n몸의 회복력과 대사 기능을\n저하시킴',
  },
  {
    position: 'middle-left',
    title: '영양 불균형ㆍ불규칙한 식사',
    description: '단백질, 철분, 비타민 등\n필수 영양소 섭취가 부족하거나\n불규칙한 식습관',
  },
  {
    position: 'middle-right',
    title: '스트레스ㆍ정서적 요인',
    description: '스트레스와 감정 소모가 지속\n되면 기혈의 흐름이 막히고\n식욕조절이 어려워져 체중이\n증가함',
  },
  {
    position: 'bottom-left',
    title: '과도한 다이어트ㆍ\n잦은 체중 변화',
    description: '무리한 식이제한으로\n기와 혈이 더 소모되어 대사가\n떨어지고 요요로 이어짐',
  },
  {
    position: 'bottom-right',
    title: '여성의 생리적 변화',
    description: '생리, 임신ㆍ출산, 갱년기\n등으로 혈이 소모되어\n기혈이 부족해지고 대사가\n저하됨',
  },
];

const STEPS = [
  { step: 'STEP 01', title: '에너지 생성 감소', note: '(기력저하)', image: 'step-energy.png' },
  { step: 'STEP 02', title: '혈액순환 저하', note: '(산소ㆍ영양 공급 감소)', image: 'step-blood.png' },
  { step: 'STEP 03', title: '근육량 감소', note: '(기초대사량 저하)', image: 'step-muscle.png' },
  { step: 'STEP 04', title: '지방이 쉽게 축적', note: '(체중 증가)', image: 'step-fat.png' },
];

const SYMPTOMS = [
  { image: 'symptom-fatigue.png', text: '조금만 움직여도\n쉽게 피로하고\n무기력해요' },
  { image: 'symptom-dizziness.png', text: '어지럽고\n두근거리는 느낌이\n있어요' },
  { image: 'symptom-pale.png', text: '안색이 창백하고\n생기가 없어요' },
  { image: 'symptom-cold.png', text: '손발이 차고\n냉감을 자주 느껴요' },
  { image: 'symptom-appetite.png', text: '식사량이\n많지 않은데도 살이\n잘 빠지지 않아요' },
  { image: 'symptom-abdominal.png', text: '복부와 하체에\n살이 쉽게 쌓여요' },
  { image: 'symptom-exercise.png', text: '운동을 해도\n금방 지치고\n지속하기 힘들어요' },
  { image: 'symptom-digestion.png', text: '변비, 복부팽만감 등\n장이 불편한\n증상이 있어요' },
  { image: 'symptom-sleep.png', text: '잠이 깊지 않고\n아침에\n개운하지 않아요' },
  { image: 'symptom-focus.png', text: '집중력이 떨어지고\n기억력이 저하돼요' },
  { image: 'symptom-cycle.png', text: '생리량이\n적거나 생리주기가\n불규칙해요' },
  { image: 'symptom-regain.png', text: '다이어트 후에도\n쉽게 다시 살이 쪄요' },
];

const HERBS = [
  {
    name: '녹용 鹿茸',
    image: 'herb-antler.png',
    summary: '허약한 몸의 기초 체력을 보강합니다.',
    efficacy: ['정혈을 보하고 기와 혈을 함께 보강', '체력과 면역력 강화', '허약한 몸을 튼튼하게 해줌'],
    targets: ['쉽게 지치고 피로한 분', '체력이 저하된 분', '면역력이 약한 분'],
  },
  {
    name: '인삼 人蔘',
    image: 'herb-ginseng.png',
    summary: '부족한 기운을 보충하고 활력을 높여줍니다.',
    efficacy: ['기(氣)를 보하고 원기를 북돋음', '비위 기능을 도와 영양 흡수 촉진', '피로 회복과 활력 증진'],
    targets: ['무기력하고 쉽게 피로한 분', '식욕이 없고 기운이 없는 분', '활동량이 적고 기력이 저하된 분'],
  },
  {
    name: '당귀 當歸',
    image: 'herb-angelica.png',
    summary: '부족한 혈을 보하고 혈의 흐름을 돕습니다.',
    efficacy: ['혈(血)을 보하고 혈행을 원활하게 함', '안색을 좋게 하고 피부에 영양을 줌', '여성의 혈허 증상 개선에 도움'],
    targets: ['안색이 창백하고 생기가 없는 분', '어지럽고 두근거리는 분', '생리량이 적거나 주기가 불규칙한 분'],
  },
  {
    name: '작약 芍藥',
    image: 'herb-peony.png',
    summary: '혈을 기르고 몸의 균형을 도와줍니다.',
    efficacy: ['혈을 보하고 부족한 혈을 보완', '근육의 긴장을 풀어줌', '몸의 균형을 맞추고 편안함을 도움'],
    targets: ['근육통, 무거운 느낌이 있는 분', '복부 팽만감, 소화가 잘 안되는 분', '예민하고 신경이 날카로운 분'],
  },
];

const TREATMENTS = [
  {
    name: '습담탕',
    image: 'treatment-seupdamtang.png',
    description:
      '독소가 몰려 있는 장소가 조직인지, 혈액인지,\n어느 장기에 있는지에 따라 치료법과 약재가 달라집니다.\n한약의 경우 독소의 배출구를 열고 전신 혈류 개선 및\n해독 대사를 촉진하는 역할도 하지만, 부족한 부분은 채워\n보호하는 기능도 합니다.',
  },
  {
    name: '보기활력정',
    image: 'treatment-vitality.png',
    description:
      '현기증, 기력저하, 저혈압, 면역저하처럼 기혈이 쇠약한\n증상에 활용되는 처방입니다.\n무기력, 탈모, 근감소 등 기혈 쇠약형 증상을 함께 살펴\n떨어진 기력과 전반적인 활력 회복을 돕습니다.',
  },
  {
    name: '공진단',
    image: 'treatment-gongjindan.png',
    description:
      '기혈이 부족해 피로와 무기력이 쉽게 나타나는 경우\n원기와 체력을 보강하기 위해 활용됩니다.\n기와 혈을 함께 보충하여 떨어진 활력과 회복력을 돕고,\n허약해진 몸의 전반적인 균형을 살피는 처방입니다.',
  },
  {
    name: '경옥고',
    image: 'treatment-gyeongokgo.png',
    description:
      '만성 피로나 잦은 감기처럼 몸의 기력이 떨어졌을 때\n체액과 진액을 보충하고 폐 기능을 돕는 데 활용됩니다.\n오미자, 생지황, 인삼, 맥문동, 갈근 등의 약재를\n바탕으로 허약해진 몸의 기력과 면역력 회복을 돕습니다.',
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="qb-herb-card__list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function QiBloodPage() {
  return (
    <main className="qb-page">
      <div className="qb-page__content">
        <header className="qb-page__heading">
          <h1>기혈부족형 비만</h1>
          <Image
            className="qb-page__divider"
            src="/images/diet-medicine/slim/top-divider.svg"
            alt=""
            width={1440}
            height={1}
            unoptimized
          />
        </header>

        <section className="qb-hero" aria-label="기혈부족형 비만 메인 배너">
          <div className="qb-hero__visual">
            <Image
              className="qb-hero__photo"
              src={`${ASSET_PATH}/hero-photo.png`}
              alt="피로와 무기력 증상을 표현한 여성 이미지"
              width={1448}
              height={1086}
              priority
              unoptimized
            />
            <Image
              className="qb-hero__logo"
              src={`${ASSET_PATH}/hero-logo.png`}
              alt="해운대 진한의원"
              width={2170}
              height={725}
              priority
              unoptimized
            />
          </div>
          <div className="qb-hero__panel">
            <p className="qb-hero__kicker">지치고 빠지지 않는 체중의 이유</p>
            <h2 className="qb-hero__title">
              기혈부족형 <span>비만</span>
            </h2>
            <div className="qb-hero__copy">
              <p>{'기(氣)와 혈(血)이 부족하면 신진대사가\n떨어져 피로, 무기력, 어지러움, 수족냉증 등이\n나타날 수 있습니다.'}</p>
              <p>{'체력과 면역력이 저하돼 체중 감량과 유지가 어렵고,\n무리한 식이조절이나 운동은 오히려\n기혈을 손상시켜 요요현상으로 이어질 수 있습니다.'}</p>
            </div>
          </div>
        </section>

        <section className="qb-concerns">
          <h2 className="qb-section-title">이런 고민이 <strong>반복</strong>된다면?</h2>
          <div className="qb-concerns__grid">
            {CONCERNS.map((concern, index) => (
              <article className={`qb-concern-card${index === CONCERNS.length - 1 ? ' qb-concern-card--wide' : ''}`} key={concern}>
                <span className="qb-concern-card__quote" aria-hidden="true">“</span>
                <p>{concern}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="qb-definition">
          <h2 className="qb-section-title"><strong>기혈부족형 비만</strong>이란?</h2>
          <div className="qb-definition__copy">
            <p>{'기혈부족형 비만은 한의학에서 바라보는 비만의 한 유형으로\n기초 대사량이 낮고, 섭취한 에너지를 제대로 쓰지 못해서 지방으로 잘 쌓이고,\n장기 운동성이 떨어지고, 회복력과 면역력이\n쉽게 떨어져 늘 피곤하고 무기력하고 잔병치레가 많습니다.'}</p>
            <p>{'혈액과 진액, 영양소도 부족해서 장기 및 근육으로 공급이 제대로 되지 않아\n근육통, 근력저하, 쥐남, 저림, 냉증 등을 자주 호소합니다.\n혈액과 체액이 쉽게 정체되어 통증과 부종, 몸이 무겁다고 호소하게 됩니다.'}</p>
            <p>{'대체로 소화력이 약하고, 근육양은 적고, 몸이 냉한 경향이 있습니다.\n또는 큰 질환을 앓은 이후에,\n연령대가 높으신 분들, 수면의 질이 좋지 못한 경우 등이 있습니다.'}</p>
          </div>
          <div className="qb-definition__answer">
            <p className="qb-definition__question">뚱뚱하고 체격이 커도 기혈이 부족할 수 있나??</p>
            <strong>당연히 Yes!!</strong>
            <p className="qb-definition__note">체격이 커도 빈혈, 영양부족이 있을 수 있어요.</p>
          </div>
        </section>

        <section className="qb-causes">
          <h2 className="qb-section-title">기혈부족형 비만의 <strong>원인</strong></h2>
          <p className="qb-section-lead">기와 혈이 부족해 몸의 대사와 순환이 저하되면 에너지 소모가 줄어 살이 쉽게 쌓입니다.</p>

          <div className="qb-causes__map">
            <div className="qb-causes__center">
              <Image
                className="qb-causes__ring"
                src={`${ASSET_PATH}/cause-circle.svg`}
                alt=""
                width={520}
                height={520}
                unoptimized
              />
              <div className="qb-causes__portrait">
                <Image
                  src={`${ASSET_PATH}/cause-center.png`}
                  alt="기혈 부족으로 피로한 여성"
                  width={1448}
                  height={1086}
                  unoptimized
                />
              </div>
            </div>

            <div className="qb-causes__lines" aria-hidden="true">
              <Image className="qb-cause-line qb-cause-line--top-left-horizontal" src={`${ASSET_PATH}/cause-line-328.svg`} alt="" width={328} height={1} unoptimized />
              <Image className="qb-cause-line qb-cause-line--top-left-diagonal" src={`${ASSET_PATH}/cause-diagonal-left.svg`} alt="" width={182.833} height={1} unoptimized />
              <Image className="qb-cause-line qb-cause-line--top-right-diagonal" src={`${ASSET_PATH}/cause-diagonal-right.svg`} alt="" width={183.848} height={1} unoptimized />
              <Image className="qb-cause-line qb-cause-line--top-right-horizontal" src={`${ASSET_PATH}/cause-line-328.svg`} alt="" width={328} height={1} unoptimized />
              <Image className="qb-cause-line qb-cause-line--middle-left" src={`${ASSET_PATH}/cause-line-402.svg`} alt="" width={402} height={1} unoptimized />
              <Image className="qb-cause-line qb-cause-line--middle-right" src={`${ASSET_PATH}/cause-line-398.svg`} alt="" width={398} height={1} unoptimized />
              <Image className="qb-cause-line qb-cause-line--bottom-left-horizontal" src={`${ASSET_PATH}/cause-line-328.svg`} alt="" width={328} height={1} unoptimized />
              <Image className="qb-cause-line qb-cause-line--bottom-left-diagonal" src={`${ASSET_PATH}/cause-diagonal-left.svg`} alt="" width={182.833} height={1} unoptimized />
              <Image className="qb-cause-line qb-cause-line--bottom-right-diagonal" src={`${ASSET_PATH}/cause-diagonal-right.svg`} alt="" width={183.848} height={1} unoptimized />
              <Image className="qb-cause-line qb-cause-line--bottom-right-horizontal" src={`${ASSET_PATH}/cause-line-328.svg`} alt="" width={328} height={1} unoptimized />
              {[
                ['top-left', 549, 206],
                ['top-right', 875, 206],
                ['middle-left', 456, 396],
                ['middle-right', 968, 396],
                ['bottom-left', 549, 609],
                ['bottom-right', 875, 609],
              ].map(([name, left, top]) => (
                <Image
                  className={`qb-cause-point qb-cause-point--${name}`}
                  src={`${ASSET_PATH}/cause-point.svg`}
                  alt=""
                  width={20}
                  height={20}
                  style={{ left, top }}
                  unoptimized
                  key={name}
                />
              ))}
            </div>

            {CAUSES.map((cause) => (
              <article className={`qb-cause qb-cause--${cause.position}`} key={cause.title}>
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>
              </article>
            ))}
          </div>

          <div className="qb-steps">
            <h3>기혈이 부족하면 이렇게 변합니다</h3>
            <div className="qb-steps__grid">
              {STEPS.map((step, index) => (
                <div className="qb-step" key={step.step}>
                  <div className="qb-step__visual">
                    <Image src={`${ASSET_PATH}/${step.image}`} alt="" width={362} height={287} unoptimized />
                    <span className={`qb-step__change qb-step__change--${index === STEPS.length - 1 ? 'up' : 'down'}`} aria-hidden="true" />
                  </div>
                  <strong>{step.step}</strong>
                  <p>{step.title}<br />{step.note}</p>
                  {index < STEPS.length - 1 && <span className="qb-step__next" aria-hidden="true">➜</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="qb-symptoms">
          <h2 className="qb-section-title">기혈부족형 비만의 <strong>주요 증상</strong></h2>
          <p className="qb-section-lead">기와 혈이 부족해 몸의 대사와 순환이 저하되면서 나타나는 증상들입니다.</p>
          <div className="qb-symptoms__grid">
            {SYMPTOMS.map((symptom, index) => (
              <article className="qb-symptom-card" key={symptom.text}>
                <div className="qb-symptom-card__image">
                  <Image src={`${ASSET_PATH}/${symptom.image}`} alt="" width={1254} height={1254} unoptimized />
                </div>
                <strong>POINT {String(index + 1).padStart(2, '0')}</strong>
                <p>{symptom.text}</p>
              </article>
            ))}
          </div>
          <p className="qb-symptoms__banner">기혈을 보충하면 건강한 체중과 활력을 되찾을 수 있습니다.</p>
          <p className="qb-symptoms__footnote">습담과 어혈이 많으면 붓고, 살이 쪄서 먹는양, 활동량 대비 자꾸 살이 찝니다.</p>
        </section>

        <section className="qb-herbs">
          <h2 className="qb-section-title">기혈부족에 좋은 <strong>대표 한약재</strong></h2>
          <div className="qb-herbs__grid">
            {HERBS.map((herb) => (
              <article className="qb-herb-card" key={herb.name}>
                <div className="qb-herb-card__image">
                  <Image src={`${ASSET_PATH}/${herb.image}`} alt={herb.name} width={1448} height={1086} unoptimized />
                </div>
                <h3>{herb.name}</h3>
                <p className="qb-herb-card__summary">{herb.summary}</p>
                <div className="qb-herb-card__group">
                  <h4>기혈부족과 관련한 효능</h4>
                  <CheckList items={herb.efficacy} />
                </div>
                <div className="qb-herb-card__group qb-herb-card__group--target">
                  <h4>이런 분께 도움이 됩니다</h4>
                  <CheckList items={herb.targets} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="qb-treatments">
          <h2 className="qb-section-title">기혈부족형 비만의 <strong>치료</strong></h2>
          <p className="qb-section-lead">환자의 체질, 나이, 몸 상태에 따라 맞춤 치료를 진행하게 됩니다.</p>
          <div className="qb-treatments__list">
            {TREATMENTS.map((treatment) => (
              <article className="qb-treatment" key={treatment.name}>
                <div className="qb-treatment__image">
                  <Image src={`${ASSET_PATH}/${treatment.image}`} alt={treatment.name} width={1598} height={984} unoptimized />
                </div>
                <div className="qb-treatment__copy">
                  <h3>{treatment.name}</h3>
                  <p>{treatment.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
