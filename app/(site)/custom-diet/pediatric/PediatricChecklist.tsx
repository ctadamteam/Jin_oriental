const CHECKLIST_ITEMS = [
  '아이가 배가 부를 때까지 먹는다.',
  '평소에 군것질을 많이하고 한꺼번에 많이 먹는다.',
  '배가 불러도 음식이 있으면 또 먹는다.',
  '체력이 많이 약하고 집에서 노는 것을 더 좋아한다.',
  '다른 사람보다 먹는 속도가 빠르다.',
  '밀가루 음식이나 패스트푸드 음식을 좋아한다.',
  '항상 집에 간식을 상비해둔다.',
  '아이의 식사시간이 일정하지 않다.',
  '야식이나 밤참을 자주 먹는 편이다.',
];

export default function PediatricChecklist() {
  return (
    <div className="ped-checklist-card">
      <div className="ped-checklist-items">
        {CHECKLIST_ITEMS.map((text, idx) => (
          <div key={idx} className="ped-check-row">
            <div className="ped-check-box" aria-hidden="true" />
            <p className="ped-check-text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
