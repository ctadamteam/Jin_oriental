import Image from 'next/image';
import type { Metadata } from 'next';
import './autonomic.css';
import '../../_shared/detail-page-scale.css';

export const metadata: Metadata = {
  title: '자율신경실조형 비만 | 진한의원',
  description:
    '스트레스와 수면, 소화, 대사 균형을 함께 살피는 진한의원 자율신경실조형 비만 관리 안내.',
};

const ASSET_PATH = '/images/custom-diet/autonomic';

const FLOW_STEPS = [
  {
    title: '스트레스·자율신경 불균형',
    image: 'flow-stress.png',
    alt: '스트레스로 머리를 감싸고 있는 모습',
    items: ['스트레스', '과로', '수면 부족', '우울·불안', '생활리듬 불규칙'],
  },
  {
    title: '호르몬 변화',
    image: 'flow-hormone.png',
    alt: '호르몬을 나타내는 뇌 그림',
    items: ['식욕 증가 (그렐린 ↑)', '포만감 저하 (렙틴 ↓)', '코르티솔 증가 (스트레스 호르몬)'],
    result: '복부지방 축적',
  },
  {
    title: '수면의 질 저하',
    image: 'flow-sleep.png',
    alt: '숙면하지 못하는 모습',
    items: ['잠들기 어렵고 자주 깸', '수면이 얕아짐', '아침에 피곤함'],
    note: '수면부족은 식욕을 증가시키고\n지방연소를 감소시킵니다.',
  },
  {
    title: '식욕 증가·폭식 경향',
    image: 'flow-appetite.png',
    alt: '고열량 음식을 먹는 모습',
    items: ['단 음식, 탄수화물 당김', '야식 습관', '스트레스성 폭식', '식사 조절이 어려움'],
  },
  {
    title: '소화기능 저하',
    image: 'flow-digestion.png',
    alt: '복부 불편감을 느끼는 모습',
    items: ['소화불량, 더부룩함', '복부팽만', '변비 또는 설사', '장내환경 악화', '(장-뇌 축의 영향)'],
  },
  {
    title: '활동량 감소',
    image: 'flow-activity.png',
    alt: '무기력하게 소파에 누워 있는 모습',
    items: ['만성피로', '무기력감', '운동 의욕 저하', '일상 활동량 감소'],
  },
  {
    title: '체중 증가 및 감량 정체',
    image: 'flow-weight.png',
    alt: '체중 증가를 걱정하는 모습',
    items: ['복부지방 증가', '체중 증가', '다이어트 시 잘 빠지지 않음', '요요가 반복됨'],
  },
];

const SIGNALS = [
  { label: '두근거림', image: 'signal-palpitations.png', tone: 'navy' },
  { label: '어지러움', image: 'signal-dizziness.png', tone: 'blue' },
  { label: '소화불량', image: 'signal-indigestion.png', tone: 'navy' },
  { label: '불면', image: 'signal-insomnia.png', tone: 'blue' },
  { label: '안면홍조', image: 'signal-flushing.png', tone: 'blue' },
  { label: '피부가려움', image: 'signal-itching.png', tone: 'navy' },
  { label: '발한', image: 'signal-sweating.png', tone: 'blue' },
  { label: '추웠다 더웠다 하는 증상', image: 'signal-temperature.png', tone: 'navy' },
];

const TREATMENTS = [
  {
    step: 'STEP 01',
    title: '한약재',
    desc: '심열을 내리고 심혈을\n보충하며, 하복부를\n따뜻하게 돕는 한약재',
    position: 'first',
  },
  {
    step: 'STEP 02',
    title: '약침',
    desc: '수승화강을 돕고\n상하 순환의\n균형을 돕는 약침',
    position: 'second',
  },
  {
    step: 'STEP 03',
    title: '침치료',
    desc: '경락과 기혈의\n순환을 돕고 몸의 흐름을\n바로잡는 침치료',
    position: 'third',
  },
];

function SectionTitle({
  light,
  strong,
  inverse = false,
}: {
  light: string;
  strong: string;
  inverse?: boolean;
}) {
  return (
    <h2 className={`ad-section-title${inverse ? ' ad-section-title--inverse' : ''}`}>
      <span>{light}</span>
      <strong>{strong}</strong>
    </h2>
  );
}

function FlowArrow({ className = '' }: { className?: string }) {
  return (
    <Image
      src={`${ASSET_PATH}/flow-arrow.png`}
      alt=""
      aria-hidden="true"
      width={50}
      height={53}
      className={`ad-flow__arrow ${className}`}
    />
  );
}

export default function AutonomicDietPage() {
  return (
    <div className="ad-page">
      <div className="ad-page__content">
        <header className="ad-page__heading">
          <h1>자율신경실조형 비만</h1>
          <Image
            className="ad-page__divider"
            src="/images/diet-medicine/slim/top-divider.svg"
            alt=""
            width={1440}
            height={1}
            unoptimized
          />
        </header>

        <section className="ad-hero" aria-label="자율신경실조형 비만 안내">
          <div className="ad-hero__visual">
            <Image
              src={`${ASSET_PATH}/hero-photo.png`}
              alt="자율신경 균형 관리를 위한 진한의원 제품"
              fill
              sizes="(max-width: 1024px) 100vw, 852px"
              className="ad-hero__photo"
              priority
            />
            <Image
              src={`${ASSET_PATH}/hero-logo.png`}
              alt="진 해운대 진한의원"
              width={310}
              height={104}
              className="ad-hero__logo"
              priority
            />
          </div>
          <div className="ad-hero__panel">
            <p className="ad-hero__eyebrow">무너진 자율신경 밸런스 관리</p>
            <h2>
              자율신경실조형
              <strong>비만</strong>
            </h2>
            <p className="ad-hero__description">
              자율신경 기능이 나빠지면 스트레스성 폭식,
              <br />
              야식, 단음식이 당김, 불면, 두근거림, 쉽게 긴장,
              <br />
              소화불량, 복부팽만, 변비 혹은 설사, 만성피로,
              <br />
              생리불순, 부종이 잘 나타납니다.
              <br />
              또한 신진대사가 불리해져 체중 관리가 더욱
              <br />
              어려워집니다.
            </p>
          </div>
        </section>

        <section className="ad-flow" aria-labelledby="ad-flow-title">
          <h2 id="ad-flow-title">자율신경실조형 비만</h2>
          <p className="ad-flow__intro">
            현대인들은 스트레스, 과로, 수면 부족, 불규칙한 생활 등으로 인해 뇌의 피로가<br className="ad-flow__intro-br" />
            많아졌습니다. 뇌 신경 중에서 특히 장기 기능, 호르몬 분비, 신진대사, 혈액순환을<br className="ad-flow__intro-br" />
            지배하는 자율신경이 많이 약해지면 몸은 불편하면서도<br className="ad-flow__intro-br" />
            정확한 병명이나 진단명이 나오지 않고 검사 결과로도 설명되지 않는 경우가 많습니다.
          </p>

          <div className="ad-flow__grid">
            {FLOW_STEPS.map((step, index) => (
              <div className={`ad-flow__item ad-flow__item--${index + 1}`} key={step.title}>
                <div className="ad-flow__image">
                  <Image
                    src={`${ASSET_PATH}/${step.image}`}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 78vw, 333px"
                  />
                </div>
                <article className="ad-flow-card">
                  <h3>{step.title}</h3>
                  <div className="ad-flow-card__body">
                    {index === 1 ? (
                      <>
                        <div className="ad-flow-card__hormones">
                          <p>식욕 증가 (그렐린 ↑)</p>
                          <p>포만감 저하 (렙틴 ↓)</p>
                        </div>
                        <p className="ad-flow-card__cortisol">
                          코르티솔 증가 <small>(스트레스 호르몬)</small>
                        </p>
                        <Image
                          src={`${ASSET_PATH}/flow-arrow.png`}
                          alt=""
                          aria-hidden="true"
                          width={18}
                          height={19}
                          className="ad-flow-card__arrow"
                        />
                        <strong className="ad-flow-card__result">{step.result}</strong>
                      </>
                    ) : (
                      <>
                        <ul>
                          {step.items.map((item) => (
                            <li
                              key={item}
                              className={item.startsWith('(') ? 'ad-flow-card__sub-item' : ''}
                            >
                              {item === '다이어트 시 잘 빠지지 않음' ? (
                                <>
                                  다이어트 시 잘 빠지지
                                  <br />
                                  <span className="ad-flow-card__sub-indent">않음</span>
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>
                        {step.note && <p className="ad-flow-card__note">{step.note}</p>}
                      </>
                    )}
                  </div>
                </article>
                {index !== 3 && index < 6 && (
                  <FlowArrow />
                )}
              </div>
            ))}
          </div>

          <p className="ad-flow__conclusion">
            자율신경 균형을 회복하면 <strong>식욕, 수면, 소화, 대사가 안정되어 건강한 체중 관리가 가능 합니다!</strong>
          </p>
        </section>

        <section className="ad-signals" aria-labelledby="ad-signals-title">
          <SectionTitle light="몸이 보내는" strong="자율신경 불균형의 신호" />
          <div className="ad-signals__grid">
            {SIGNALS.map((signal) => (
              <article className="ad-signal" key={signal.label}>
                <div className={`ad-signal__circle ad-signal__circle--${signal.tone}`}>
                  <Image
                    src={`${ASSET_PATH}/${signal.image}`}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="270px"
                  />
                </div>
                <h3>{signal.label}</h3>
              </article>
            ))}
          </div>
          <p className="ad-signals__description">
            두근거림, 어지러움, 소화불량, 불면, 안면홍조, 피부가려움, 발한, 추웠다
            더웠다 하는 증상 등이 함께 나타나면 몸에 여러 질환이 동시에 생겼다고 착각하기
            쉽고, 컨디션, 감정변화에 따라 증상의 양상과 정도가 변화무쌍한 경우가 많습니다.
          </p>
          <p className="ad-signals__emphasis">
            자율신경계가 좋지 못하면 <strong>호르몬 밸런스도 나빠지고 면역력도 떨어지게 됩니다.</strong>
          </p>
        </section>

        <section className="ad-test" aria-labelledby="ad-test-title">
          <SectionTitle light="내 몸의 자율신경 균형," strong="검사로 확인합니다" />
          <div className="ad-test__layout">
            <div className="ad-test__visual">
              <Image
                src={`${ASSET_PATH}/hrv-test.png`}
                alt="자율신경계 검사 기기"
                width={543}
                height={752}
                className="ad-test__machine"
              />
              <Image
                src={`${ASSET_PATH}/hrv-report.png`}
                alt="자율신경 검사 결과지 예시"
                width={755}
                height={1064}
                className="ad-test__report"
              />
            </div>
            <div className="ad-test__copy">
              <h3>
                자율신경계검사(HRV) &amp;
                <br />
                혈관노화도 검사
              </h3>
              <p>
                자율신경계의 활성도와 균형 상태를 분석·평가하고, 현재 자율신경이 어느 정도
                안정적으로 기능하고 있는지 확인할 수 있는 검사입니다.
                <br />
                또한 신체 나이와 비교한 혈관 노화도까지 함께 확인해 전반적인 몸의 균형
                상태를 살펴볼 수 있습니다.
              </p>
              <div className="ad-test__time">
                <div className="ad-test__clock" aria-hidden="true">
                  <Image
                    src="/images/diet-medicine/injection-discomfort/node-icon-clock.png"
                    alt=""
                    width={41}
                    height={41}
                    unoptimized
                  />
                </div>
                <strong>소요 시간</strong>
                <span>5분 정도</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ad-balance" aria-labelledby="ad-balance-title">
          <SectionTitle light="긴장과 무기력이" strong="함께 나타나는 이유" />
          <p className="ad-balance__intro">
            한의학에서는 몸의 상태가 한쪽으로 치우치지 않고
            <br />
            심장의 열과 기운이 적절한 균형을 이루는 것을 중요하게 봅니다.
          </p>

          <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
            <defs>
              <clipPath id="ad-lens-clip" clipPathUnits="objectBoundingBox">
                <path d="M 0.5,0.1273 C 0.82,0.23 1,0.35 1,0.5 C 1,0.65 0.82,0.77 0.5,0.8727 C 0.18,0.77 0,0.65 0,0.5 C 0,0.35 0.18,0.23 0.5,0.1273 Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="ad-balance-diagram" aria-label="심장열과 심기허의 적절한 균형">
            <article className="ad-balance-circle ad-balance-circle--left">
              <h3>
                심장열
                <small>(心火)</small>
              </h3>
              <span className="ad-balance-circle__line" />
              <p>
                흥분ㆍ긴장하는
                <br />
                교감신경
                <br />
                (감정조절)
              </p>
            </article>
            <article className="ad-balance-circle ad-balance-circle--right">
              <h3>
                심기허
                <small>(心氣虛)</small>
              </h3>
              <span className="ad-balance-circle__line" />
              <p>
                이완ㆍ휴식하는
                <br />
                부교감신경
                <br />
                (장기조절)
              </p>
            </article>
            <strong className="ad-balance-diagram__center">
              적절한
              <br />
              균형
            </strong>
          </div>

          <div className="ad-comparison">
            <article className="ad-comparison-card ad-comparison-card--heat">
              <h3>심장열 (화병)</h3>
              <dl>
                <div>
                  <dt>상열감</dt>
                  <dd>안면홍조, 뜨거움, 두통, 입마름, 탈모</dd>
                </div>
                <div>
                  <dt>심기항진</dt>
                  <dd>두근거림, 불안, 불안감</dd>
                </div>
                <div>
                  <dt>불면증</dt>
                  <dd>입면장애, 수면유지장애, 조조각성</dd>
                </div>
              </dl>
            </article>
            <article className="ad-comparison-card ad-comparison-card--deficiency">
              <h3>심기허 (우울증ㆍ무기력감)</h3>
              <dl>
                <div>
                  <dt>우울증 무기력</dt>
                  <dd>에너지가 방전된 듯한 번아웃 상태</dd>
                </div>
                <div>
                  <dt>소화장애 복부팽만</dt>
                  <dd>위장운동성 저하, 소화액 분비 감소, 음식물 처리 속도 느려짐</dd>
                </div>
                <div>
                  <dt>체력저하부종</dt>
                  <dd aria-hidden="true">&nbsp;</dd>
                </div>
              </dl>
            </article>
          </div>
        </section>

        <section className="ad-circulation" aria-labelledby="ad-circulation-title">
          <SectionTitle light="몸의 균형을 잡는 핵심," strong="수승화강" inverse />
          <p className="ad-circulation__intro">
            몸의 위아래 기운이 원활하게 순환하려면
            <br />
            위쪽의 뜨거운 기운은 내려가고, 아래쪽의 차가운 기운은 따뜻해지는 균형이
            중요합니다.
            <br />
            이를 한의학에서는 <strong>수승화강</strong>이라고 합니다.
          </p>
          <div className="ad-circulation__figure">
            <div className="ad-circulation__image">
              <Image
                src={`${ASSET_PATH}/susunghwagang.png`}
                alt="상열하한과 수승화강의 기운 흐름 비교"
                fill
                sizes="(max-width: 1024px) 90vw, 1220px"
              />
            </div>
            <div className="ad-circulation__labels" aria-hidden="true">
              <span>상열하한</span>
              <span>수승화강</span>
            </div>
          </div>
          <p className="ad-circulation__description">
            뜨거운 기운은 내려가고, 차가운 기운은 올라가야 순환이 잘 되고,
            <br />
            병이 안 생기고 건강하게 지낼 수 있다는 뜻입니다.
          </p>
        </section>

        <section className="ad-treatment" aria-labelledby="ad-treatment-title">
          <SectionTitle light="무너진 균형을 되찾기 위한" strong="한방 관리" />
          <p className="ad-treatment__intro">
            한의학에서는 몸의 상태가 한쪽으로 치우치지 않고
            <br />
            심장의 열과 기운이 적절한 균형을 이루는 것을 중요하게 봅니다.
          </p>
          <div className="ad-treatment__grid">
            {TREATMENTS.map((item) => (
              <article className="ad-treatment-card" key={item.step}>
                <div className={`ad-treatment-card__image ad-treatment-card__image--${item.position}`}>
                  <Image
                    src={`${ASSET_PATH}/treatments.png`}
                    alt=""
                    aria-hidden="true"
                    width={2172}
                    height={724}
                  />
                </div>
                <p>{item.step}</p>
                <h3>{item.title}</h3>
                <div>{item.desc}</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
