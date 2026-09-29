const CHECKLIST_ITEMS = [
  '아침에 일어나면 얼굴이나 눈 주변이 잘 붓는다',
  '오후가 되면 발·발목·종아리가 붓고 무겁다',
  '양말 자국이나 옷 자국이 피부에 오래 남는다',
  '반지나 신발이 시간대에 따라 꽉 끼는 느낌이 있다',
  '하루 사이에도 체중이 1kg 이상 오르내리는 날이 있다',
  '오래 앉아 있거나 서 있으면 붓기가 심해진다',
  '짠 음식·야식·음주 후 체중과 붓기가 확실히 증가한다',
  '생리 전이나 컨디션이 좋지 않을 때 붓기가 심해진다',
  '손발이 차거나 혈액순환이 잘 안 되는 느낌이 있다',
  '몸이 무겁고 쉽게 피로하며 활동량이 적다',
  '땀을 내거나 운동한 다음 날 몸이 가벼워지는 느낌이 있다',
  '체중이 잘 빠지지 않으면서 몸이 전체적으로 붓고 물렁한 느낌이 있다',
];

interface InterpretationTier {
  id: number;
  range: string;
  desc: string;
}

const TIERS: InterpretationTier[] = [
  { id: 1, range: '0  ~  3개', desc: '부종 경향이 크지 않은 편' },
  { id: 2, range: '4  ~  7개', desc: '부종 경향이 있어 생활습관 점검 권장' },
  { id: 3, range: '8개 이상', desc: '부종이 반복되는 원인을 확인해볼 필요가 있음' },
];

export default function EdemaChecklist() {
  return (
    <div className="ede-checklist-wrap">
      {/* 12문항 체크리스트 카드 */}
      <div className="ede-checklist-card">
        <ul className="ede-checklist-items">
          {CHECKLIST_ITEMS.map((item, index) => (
            <li key={index} className="ede-check-row">
              <span className="ede-check-box" aria-hidden="true" />
              <span className="ede-check-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 하단 간단한 해석 카드 */}
      <div className="ede-interpretation">
        <div className="ede-interpretation__badge">간단한 해석</div>
        <div className="ede-interpretation__card">
          <div className="ede-interpretation__rows">
            {TIERS.map((tier) => (
              <div key={tier.id} className="ede-interpretation__row">
                <span className="ede-interpretation__range">{tier.range}</span>
                <span className="ede-interpretation__desc">{tier.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
