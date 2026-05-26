# COMPONENT_MAP

## 구조적 역할 분류

### `components/common/`
- **Header.tsx**: 글로벌 네비게이션(GNB)
- **Footer.tsx**: 사이트 하단 정보
- **TopStripBanner.tsx**: 최상단 띠배너 (이벤트/공지 등)
- **SideQuickMenu.tsx**: 우측(또는 하단) 고정 퀵메뉴
- **BottomQuickConsultForm.tsx**: 전역 하단 상담 신청 폼
- **SectionTitle.tsx**: 공통 섹션 타이틀 UI

### `components/home/`
- **MainHeroSection.tsx**: 메인페이지 최상단 비주얼 영역
- **DoctorProfileSection.tsx**: 대표원장 소개 슬라이드
- **ReviewSection.tsx**: 후기 슬라이드
- **MedicineIntroSection.tsx**: 주요 약 소개
- **BeforeAfterSection.tsx**: 체중감량 전후 사례
- **JinStorySection.tsx**: 영상/방송출연 스토리 모음
- **EventMenuSection.tsx**: 진행 중 이벤트 및 상품 모음
- **PrescriptionCheckSection.tsx**: BMI 기반 맞춤 처방 확인 영역

### `components/subpage/`
- **SubPageHero.tsx**: 서브페이지 상단 타이틀 영역
- **Breadcrumb.tsx**: 현재 위치 표시 네비게이션
- **ContentSection.tsx**: 서브페이지 본문 래퍼

### `components/ui/`
- 기본 UI 요소 (Button, Input, Select, Checkbox, Modal, Slider)
