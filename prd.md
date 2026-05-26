진한의원 홈페이지 PRD v1.0
1. 프로젝트 개요
1.1 프로젝트명

진한의원 공식 홈페이지 구축

1.2 목적

진한의원의 브랜드 신뢰도, 진료 카테고리, 다이어트 한약, 이벤트, 후기, 맞춤 처방 기능을 한 페이지와 하위 상세 페이지 구조로 제공하는 반응형 홈페이지를 제작한다.

1.3 제작 방향
메인페이지 중심의 랜딩형 구조
7개 1차 메뉴와 하위 카테고리 기반 상세 페이지 확장
진료/다이어트/이벤트/상담 전환 중심 UX
Supabase 기반 데이터 관리
Vercel 배포
Antigravity를 활용한 개발 진행
단계별 Git 브랜치 및 폴더 구조 분리로 롤백 가능하게 설계
1.4 주요 기술 스택
Frontend: Next.js App Router, TypeScript, Tailwind CSS
Backend/Data: Supabase
Database: Supabase PostgreSQL
Storage: Supabase Storage 또는 public assets
Deployment: Vercel
Form Handling: Server Actions 또는 API Route
Styling: Tailwind CSS + CSS Variables
Animation/Slider: Swiper 또는 Embla Carousel
Validation: Zod
Package Manager: pnpm 권장
2. 프로젝트 기본 정보
2.1 로컬 프로젝트 경로
F:\Antigravity\project\Jin_oriental
2.2 참고 이미지 경로
F:\Antigravity\project\Jin_oriental\img
2.3 참고 이미지 목록
profile01.png
profile02.png
review.png
med_01.png
med_02.png
jin_story.png
event_menu.png
recipe_before.png
recipe_after.png
side_quick.png
2.4 디자인 컬러
--color-primary: #8BA612;
--color-sub: #F0F2E7;
2.5 디자인 톤
한의원 신뢰감
깔끔한 의료 브랜드형 레이아웃
과도한 장식 최소화
자연스러운 여백과 정보 중심 구성
이벤트/예약 전환 요소는 명확하게 노출
3. 핵심 사용자 흐름
3.1 일반 방문자 흐름
메인 진입
대표원장/후기/약소개 확인
카테고리 메뉴에서 관심 진료 확인
이벤트 또는 맞춤 처방 확인
빠른 상담 신청 또는 네이버 예약 이동
3.2 다이어트 관심 사용자 흐름
메인 진입
후기 확인
진 다이어트 한약 또는 개인별 맞춤 다이어트 카테고리 탐색
내게 맞는 처방 입력
BMI 결과 확인
빠른 상담 신청
3.3 이벤트 전환 흐름
메인 섹션7 이벤트 확인
이벤트 상세 진입
시술/상품 이벤트 선택
금액 담기
예약하기 버튼 클릭
예약 페이지 또는 네이버 예약으로 이동
4. 사이트맵
4.1 1차 메뉴
진한의원 소개
진 다이어트 한약
개인별 맞춤 다이어트
여성/산후 클리닉
피부 클리닉
면역/보약 클리닉
진한의원 이벤트
4.2 하위 메뉴
진한의원 소개
진한의원 story
공지사항
진 다이어트 한약
슬림환/습담탕
붓기제로ㆍ배사라정
슬림톡(빼빼정ㆍ감비정)
올인원
원인 치료 한약
개인별 맞춤 다이어트
해독 다이어트
내장지방형 비만
고도 비만
체질별 다이어트
부종형 비만
자율신경성 비만
산후 비만
중년 비만
여성/산후 클리닉
산후조리
생리불순ㆍ생리통
갱년기 증후군
피부 클리닉
매선(실 리프팅)
액소좀(모공ㆍ피부결)
미주란(잔주름ㆍ속건조)
샤인모드(심부볼ㆍ이중턱ㆍ얼굴축소)
면역/보약 클리닉
자율신경실조증
불안ㆍ공황장애
화병
갑상선 저하증
공진단
진한의원 이벤트
이벤트
5. 메인페이지 요구사항
5.1 전체 구조

메인페이지는 헤더, 바디 8개 섹션, 퀵메뉴, 하단 빠른 상담 신청, 푸터로 구성한다.

Top Strip Banner
Header / Navigation
Main Section 01
Main Section 02
Main Section 03
Main Section 04
Main Section 05
Main Section 06
Main Section 07
Main Section 08
Side Quick Menu
Bottom Quick Contact Form
Footer
6. 공통 레이아웃 요구사항
6.1 상단 띠배너
헤더 최상단 위에 60px 높이의 띠배너 생성
왼쪽 영역에 로그인, 검색 버튼 배치
모바일에서는 로그인/검색을 아이콘 또는 간단 텍스트로 축약
배경색은 브랜드 컬러 또는 서브컬러 활용
6.2 헤더
로고
7개 1차 메뉴
각 메뉴 hover 시 하위 메뉴 노출
스크롤 시 sticky 적용 여부는 개발 단계에서 선택 가능
모바일에서는 햄버거 메뉴 제공
6.3 푸터
홈페이지 전용 심플 푸터
병원명
대표자명
주소
사업자/의료기관 관련 정보 입력 영역
전화번호
운영시간
개인정보처리방침 링크
저작권 표기
7. 메인 섹션 상세 요구사항
7.1 섹션1 — 메인 비주얼
목적

첫 화면에서 브랜드 이미지와 주요 메시지를 전달한다.

요구사항
높이 약 840px
피그마 파일 기준 메인 페이지 디자인 반영
주요 CTA 버튼 배치 가능
상담 신청
네이버 예약
이벤트 보기
PC/Mobile 반응형 대응
개발 기준
컴포넌트명: MainHeroSection
이미지 또는 Figma 에셋은 /public/images/main 하위에 정리
7.2 섹션2 — 대표원장 소개
목적

대표원장의 전문성과 신뢰도 전달

참고 이미지
profile01.png
profile02.png
요구사항
profile01, profile02 이미지를 슬라이드로 구성
좌우 버튼 또는 pagination 제공
모바일에서는 세로형 이미지 또는 단일 슬라이드 최적화
개발 기준
컴포넌트명: DoctorProfileSection
7.3 섹션3 — 후기 페이지
목적

실제 후기를 통해 신뢰도와 전환율 강화

참고 이미지
review.png
요구사항
후기 카드 슬라이드 구조
각 후기 이미지는 클릭 가능
클릭 시 네이버 리뷰 링크로 이동
링크는 새 탭으로 오픈
후기 데이터는 Supabase에서 관리 가능하게 설계
개발 기준
컴포넌트명: ReviewSection
데이터 테이블: reviews
7.4 섹션4 — 약 소개
목적

진한의원 주요 한약/처방 소개

참고 이미지
med_01.png
med_02.png
요구사항
이미지 기반 소개 또는 카드형 구성
약 소개별 상세 페이지 연결 가능
PC에서는 2단 또는 와이드 구성
모바일에서는 세로 스택 구성
개발 기준
컴포넌트명: MedicineIntroSection
7.5 섹션5 — Before & After
목적

체중감량 사례를 짧고 직관적으로 제시

요구사항
체중감량 전후 결과를 한 섹션에서 표현
비교 이미지 또는 수치 카드 형태 가능
의료광고/후기성 콘텐츠는 표현 검수 필요
과도한 보장성 표현 금지
개발 기준
컴포넌트명: BeforeAfterSection
데이터 테이블: before_after_cases
7.6 섹션6 — 진한의원 Story
목적

병원 스토리, 방송 출연, 영상 콘텐츠를 통해 브랜드 신뢰도 강화

참고 이미지
jin_story.png
요구사항
병원 방송 출연 영상 링크 소개
기본 8개 영상 노출
카드형 영상 리스트 구성
더보기 클릭 시 영상 목록 페이지로 이동
영상은 YouTube 또는 외부 링크 임베드 가능
개발 기준
컴포넌트명: JinStorySection
데이터 테이블: videos
상세 페이지: /story 또는 /about/story
7.7 섹션7 — 이벤트 담기 메뉴
목적

이벤트 상품을 확인하고 예약 전환으로 연결

참고 이미지
event_menu.png
요구사항
이벤트 페이지 형태와 유사하게 구성
이벤트 상세 페이지 제공
시술/상품 이벤트 금액 담기 기능
예약하기 버튼 제공
장바구니 수준의 복잡한 결제 기능은 1차 범위에서 제외
선택 이벤트 정보는 예약 페이지 또는 상담 신청 폼으로 전달
개발 기준
컴포넌트명: EventMenuSection
데이터 테이블: events, event_options
페이지: /events, /events/[slug]
7.8 섹션8 — 내게 맞는 처방
목적

사용자가 기본 신체정보를 입력하면 BMI 결과를 보여주고 상담 신청으로 연결

참고 이미지
입력 전: recipe_before.png
입력 후: recipe_after.png
입력 항목
성별 선택
나이
키
몸무게
출력 항목
성별
나이
키
몸무게
BMI 측정 결과
BMI 계산식
BMI = 몸무게(kg) / (키(m) * 키(m))
결과 분류
저체중
정상
과체중
비만
요구사항
입력 전/후 UI 상태 분리
필수값 검증
숫자 입력 검증
결과 확인 후 빠른 상담 신청으로 연결
개인정보성 저장은 사용자가 상담 신청을 완료한 경우에만 저장
개발 기준
컴포넌트명: PrescriptionCheckSection
유틸 함수: calculateBMI
상담 신청 테이블: consultations
8. 퀵메뉴 요구사항
8.1 사이드 퀵메뉴
참고 이미지
side_quick.png
항목
카톡상담
오시는길
블로그
인스타그램
네이버예약
진료시간
요구사항
PC: 우측 고정형 퀵메뉴
Mobile: 하단 또는 접이식 플로팅 메뉴
각 항목은 외부 링크 또는 내부 섹션으로 연결
링크는 환경변수 또는 Supabase 설정 테이블로 관리 가능
개발 기준
컴포넌트명: SideQuickMenu
8.2 하단 빠른 상담 신청
입력 항목
이름
나이
성별
연락처
개인정보 이용방침 동의 체크박스
요구사항
모든 필수값 검증
연락처 형식 검증
개인정보 동의 체크 필수
제출 시 Supabase consultations 테이블에 저장
관리자 확인용 상태값 기본 new
제출 완료 후 완료 메시지 표시
개발 기준
컴포넌트명: BottomQuickConsultForm
데이터 테이블: consultations
9. 하위 페이지 요구사항
9.1 공통 상세 페이지 구조

각 하위 메뉴는 동일한 기본 템플릿을 사용한다.

SubPageHero
Breadcrumb
ContentSection
RelatedCTA
BottomQuickConsultForm
9.2 진료 상세 페이지
카테고리명
핵심 설명
증상/대상
치료 또는 처방 방향
관련 이벤트 또는 상담 CTA
9.3 공지사항 페이지
목록
상세
검색 또는 카테고리 필터는 2차 범위
9.4 이벤트 페이지
이벤트 목록
이벤트 상세
이벤트 옵션 선택
예약하기 CTA
9.5 Story/영상 페이지
영상 전체 목록
카테고리 또는 연도 필터는 2차 범위
10. 데이터베이스 설계
10.1 Supabase 테이블 목록
site_settings
menus
pages
reviews
videos
events
event_options
before_after_cases
consultations
notices
10.2 site_settings

사이트 공통 설정 관리

컬럼	타입	설명
id	uuid	PK
key	text	설정 키
value	jsonb	설정 값
created_at	timestamptz	생성일
updated_at	timestamptz	수정일

예시 key:

kakao_url
naver_reservation_url
blog_url
instagram_url
clinic_hours
address
10.3 menus

메뉴 구조 관리

컬럼	타입	설명
id	uuid	PK
parent_id	uuid/null	상위 메뉴
title	text	메뉴명
slug	text	URL slug
sort_order	int	정렬 순서
is_active	boolean	노출 여부
created_at	timestamptz	생성일
10.4 pages

하위 페이지 콘텐츠 관리

컬럼	타입	설명
id	uuid	PK
menu_id	uuid	menus FK
title	text	페이지 제목
slug	text	URL slug
summary	text	요약
content	jsonb	본문 블록
hero_image	text	대표 이미지
is_published	boolean	공개 여부
created_at	timestamptz	생성일
updated_at	timestamptz	수정일
10.5 reviews

후기 관리

컬럼	타입	설명
id	uuid	PK
title	text	후기 제목
image_url	text	후기 이미지
naver_review_url	text	네이버 리뷰 링크
sort_order	int	정렬
is_active	boolean	노출 여부
created_at	timestamptz	생성일
10.6 videos

방송/영상 콘텐츠 관리

컬럼	타입	설명
id	uuid	PK
title	text	영상 제목
thumbnail_url	text	썸네일
video_url	text	영상 링크
description	text	설명
sort_order	int	정렬
is_featured	boolean	메인 노출 여부
is_active	boolean	노출 여부
created_at	timestamptz	생성일
10.7 events

이벤트 관리

컬럼	타입	설명
id	uuid	PK
title	text	이벤트명
slug	text	URL slug
summary	text	요약
thumbnail_url	text	썸네일
content	jsonb	상세 내용
start_date	date	시작일
end_date	date	종료일
is_active	boolean	노출 여부
created_at	timestamptz	생성일
updated_at	timestamptz	수정일
10.8 event_options

이벤트 옵션/금액 관리

컬럼	타입	설명
id	uuid	PK
event_id	uuid	events FK
name	text	옵션명
price	int	금액
description	text	옵션 설명
sort_order	int	정렬
is_active	boolean	노출 여부
10.9 before_after_cases

비포앤애프터 사례 관리

컬럼	타입	설명
id	uuid	PK
title	text	사례 제목
before_image_url	text	전 이미지
after_image_url	text	후 이미지
summary	text	요약
display_weight_info	text	노출용 수치 정보
sort_order	int	정렬
is_active	boolean	노출 여부
created_at	timestamptz	생성일
10.10 consultations

빠른 상담 신청 관리

컬럼	타입	설명
id	uuid	PK
name	text	이름
age	int	나이
gender	text	성별
phone	text	연락처
agreed_privacy	boolean	개인정보 동의
source	text	유입 위치
selected_event	jsonb/null	선택 이벤트 정보
bmi_result	jsonb/null	BMI 결과
status	text	new/contacted/closed
memo	text/null	관리자 메모
created_at	timestamptz	신청일
10.11 notices

공지사항 관리

컬럼	타입	설명
id	uuid	PK
title	text	제목
content	text	본문
is_pinned	boolean	상단 고정
is_published	boolean	공개 여부
created_at	timestamptz	생성일
updated_at	timestamptz	수정일
11. 폴더 구조
11.1 기본 구조
F:\Antigravity\project\Jin_oriental
├─ app
│  ├─ (site)
│  │  ├─ page.tsx
│  │  ├─ about
│  │  │  ├─ story
│  │  │  │  └─ page.tsx
│  │  │  └─ notices
│  │  │     ├─ page.tsx
│  │  │     └─ [id]
│  │  │        └─ page.tsx
│  │  ├─ diet-medicine
│  │  │  └─ [slug]
│  │  │     └─ page.tsx
│  │  ├─ custom-diet
│  │  │  └─ [slug]
│  │  │     └─ page.tsx
│  │  ├─ women-postpartum
│  │  │  └─ [slug]
│  │  │     └─ page.tsx
│  │  ├─ skin-clinic
│  │  │  └─ [slug]
│  │  │     └─ page.tsx
│  │  ├─ immunity-tonic
│  │  │  └─ [slug]
│  │  │     └─ page.tsx
│  │  └─ events
│  │     ├─ page.tsx
│  │     └─ [slug]
│  │        └─ page.tsx
│  ├─ api
│  │  └─ consultations
│  │     └─ route.ts
│  ├─ globals.css
│  └─ layout.tsx
│
12. 롤백 가능한 개발 전략
12.1 Git 브랜치 전략
main
├─ develop
│  ├─ feature/01-project-setup
│  ├─ feature/02-layout-header-footer
│  ├─ feature/03-home-main-sections
│  ├─ feature/04-supabase-schema
│  ├─ feature/05-consultation-form
│  ├─ feature/06-events
│  ├─ feature/07-sub-pages
│  ├─ feature/08-responsive
│  └─ feature/09-deploy-vercel
12.2 커밋 단위

각 기능은 최소 단위로 커밋한다.

예시:

chore: initialize next project
feat: add top strip banner
feat: add global header navigation
feat: add main hero section
feat: add doctor profile slider
feat: connect reviews with supabase
feat: add consultation form validation
fix: improve mobile quick menu layout
12.3 롤백 기준
기능별 브랜치 병합 전: 브랜치 삭제로 롤백
기능별 브랜치 병합 후: revert commit으로 롤백
DB 변경: sql/rollback 폴더의 대응 SQL 실행
디자인 변경: 컴포넌트 단위 파일 교체 또는 이전 커밋 복원
배포 변경: Vercel previous deployment로 롤백
12.4 변경 이력 관리

docs/CHANGELOG.md에 아래 항목 기록

날짜
작업 브랜치
변경 파일
변경 내용
영향 범위
롤백 방법
13. 개발 단계별 진행 계획
Phase 0 — 준비
프로젝트 폴더 확인
img 폴더 내 참고 이미지 정리
Figma 에셋 정리
Supabase 프로젝트 생성
Vercel 프로젝트 생성
환경변수 준비
Phase 1 — 프로젝트 초기 세팅
Next.js 프로젝트 생성
TypeScript 설정
Tailwind 설정
폴더 구조 생성
공통 레이아웃 구성
Phase 2 — 공통 UI 개발
TopStripBanner
Header
Footer
SideQuickMenu
BottomQuickConsultForm UI
공통 Button/Input/Select/Checkbox
Phase 3 — 메인페이지 정적 구현
섹션1 메인 비주얼
섹션2 대표원장 슬라이드
섹션3 후기 슬라이드
섹션4 약소개
섹션5 Before & After
섹션6 Story 영상 카드
섹션7 이벤트 메뉴
섹션8 내게 맞는 처방
Phase 4 — Supabase 연동
테이블 생성
Seed 데이터 입력
후기/영상/이벤트 데이터 조회
상담 신청 저장
환경변수 연결
Phase 5 — 하위 페이지 구현
진한의원 소개
다이어트 한약 상세
맞춤 다이어트 상세
여성/산후 클리닉 상세
피부 클리닉 상세
면역/보약 클리닉 상세
이벤트 상세
공지사항
Phase 6 — 반응형/접근성/성능 최적화
모바일 메뉴
모바일 하단 퀵메뉴
이미지 최적화
폰트 최적화
Lighthouse 점검
Phase 7 — QA 및 배포
기능 테스트
폼 제출 테스트
Supabase 권한 확인
Vercel 배포
배포 후 링크 확인
이전 배포 롤백 가능 여부 확인
14. 환경변수
14.1 .env.example
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_NAVER_REVIEW_URL=
NEXT_PUBLIC_NAVER_RESERVATION_URL=
NEXT_PUBLIC_KAKAO_CHANNEL_URL=
NEXT_PUBLIC_BLOG_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
14.2 보안 기준
SUPABASE_SERVICE_ROLE_KEY는 서버 전용으로만 사용
클라이언트 컴포넌트에서 service role key 사용 금지
상담 신청 저장은 서버 액션 또는 API Route에서 처리
Supabase RLS 정책 적용
15. Supabase RLS 정책 방향
15.1 공개 조회 가능 테이블
menus
pages
reviews
videos
events
event_options
notices
site_settings 일부
15.2 익명 insert 가능 테이블
consultations
15.3 관리자만 수정 가능 테이블
menus
pages
reviews
videos
events
event_options
before_after_cases
notices
site_settings
consultations status/memo
16. 주요 컴포넌트 명세
16.1 Header
7개 메뉴 출력
hover/dropdown 지원
모바일 햄버거 메뉴 지원
16.2 ReviewSection
Supabase reviews 조회
슬라이드 출력
클릭 시 naver_review_url 새 탭 이동
16.3 JinStorySection
videos 중 is_featured=true 8개 조회
영상 카드 출력
더보기 클릭 시 /about/story 이동
16.4 EventMenuSection
활성 이벤트 조회
옵션 금액 출력
선택 이벤트 상태 저장
예약하기 클릭 시 예약 URL 또는 상담 신청으로 연결
16.5 PrescriptionCheckSection
성별/나이/키/몸무게 입력
BMI 계산
결과 UI 전환
빠른 상담 신청과 연동
16.6 BottomQuickConsultForm
이름/나이/성별/연락처/동의 체크
Zod 검증
Supabase 저장
완료 메시지 출력
17. URL 구조
/
/about/story
/about/notices
/about/notices/[id]
/diet-medicine/[slug]
/custom-diet/[slug]
/women-postpartum/[slug]
/skin-clinic/[slug]
/immunity-tonic/[slug]
/events
/events/[slug]
17.1 slug 예시
/diet-medicine/slim-hwan
/diet-medicine/boogi-zero
/diet-medicine/slim-talk
/diet-medicine/all-in-one
/diet-medicine/root-cause-herbal


/custom-diet/detox
/custom-diet/visceral-fat
/custom-diet/severe-obesity
/custom-diet/body-type
/custom-diet/edema
/custom-diet/autonomic-nervous
/custom-diet/postpartum
/custom-diet/middle-age
18. SEO 요구사항
18.1 기본 SEO
페이지별 title, description 설정
Open Graph 이미지 설정
canonical URL 설정
sitemap.xml 생성
robots.txt 생성
18.2 주요 키워드 방향
진한의원
다이어트 한약
한방 다이어트
체질별 다이어트
산후 다이어트
한의원 다이어트
부종 다이어트
슬림환
습담탕
18.3 콘텐츠 주의사항
의료 효과 보장 표현 금지
과도한 전후 비교 표현 주의
후기/비포앤애프터는 심의 필요 가능성 검토
가격/이벤트 정보는 변경 가능성을 고려해 Supabase에서 관리
19. 관리자 기능 범위
19.1 1차 범위

별도 관리자 페이지는 1차 개발 범위에서 제외한다. Supabase Dashboard를 통해 데이터 관리한다.

19.2 2차 범위
관리자 로그인
후기 관리
이벤트 관리
공지사항 관리
상담 신청 관리
영상 관리
20. 반응형 기준
20.1 Breakpoints
Mobile: 0~767px
Tablet: 768~1023px
Desktop: 1024px 이상
Wide: 1440px 이상
20.2 모바일 필수 대응
헤더 햄버거 메뉴
섹션별 이미지 세로 배치
슬라이드 터치 지원
사이드 퀵메뉴 하단 고정 또는 접이식 변환
상담 신청 폼 입력 편의성 확보
21. 성능 기준
21.1 이미지 최적화
Next/Image 사용
WebP 변환 권장
LCP 영역 이미지 우선 로드
비노출 이미지 lazy loading 적용
21.2 목표
Lighthouse Performance 85점 이상
Accessibility 90점 이상
SEO 90점 이상
모바일 기준 CLS 최소화
22. 접근성 기준
버튼/링크에 명확한 aria-label 제공
폼 label 연결
키보드 탐색 가능
색상 대비 확인
슬라이더 컨트롤 접근성 확보
23. QA 체크리스트
23.1 공통
PC/Mobile 레이아웃 확인
메뉴 hover/dropdown 확인
모바일 메뉴 열기/닫기 확인
퀵메뉴 링크 확인
푸터 정보 확인
23.2 메인페이지
섹션 8개 순서 확인
대표원장 슬라이드 확인
후기 클릭 시 네이버 리뷰 이동 확인
Story 더보기 이동 확인
이벤트 예약하기 동작 확인
BMI 계산 정확도 확인
23.3 상담 신청
빈 값 제출 방지
연락처 검증
개인정보 동의 필수 확인
Supabase 저장 확인
제출 완료 메시지 확인
23.4 배포
Vercel 환경변수 확인
Production 배포 확인
Supabase 연결 확인
이전 배포 롤백 가능 여부 확인
24. 제외 범위

1차 개발 범위에서 제외한다.

결제 기능
회원가입/로그인 고도화
관리자 CMS 직접 구축
네이버 예약 API 직접 연동
병원 EMR 연동
문자 발송 자동화
카카오 알림톡 자동 발송
다국어 페이지
25. 완료 기준
25.1 기능 완료 기준
메인페이지 8개 섹션 구현
7개 1차 메뉴 및 하위 메뉴 구현
후기 슬라이드/외부 링크 구현
Story 영상 8개 기본 노출 및 더보기 구현
이벤트 목록/상세/예약 CTA 구현
BMI 계산 기능 구현
빠른 상담 신청 Supabase 저장 구현
퀵메뉴 구현
푸터 구현
25.2 운영 완료 기준
Vercel Production 배포 완료
Supabase Production 환경 연결 완료
환경변수 정리 완료
README 및 배포 문서 작성 완료
롤백 절차 문서화 완료
26. 개발 착수용 우선 작업 명령
26.1 Antigravity 작업 시작 순서
1. F:\Antigravity\project\Jin_oriental 경로에 Next.js 프로젝트를 생성한다.
2. TypeScript, Tailwind CSS, App Router 기반으로 초기화한다.
3. public/images 하위에 img 참고 이미지를 분류한다.
4. components/common, components/home, components/subpage 구조를 생성한다.
5. docs 폴더에 PRD.md, DB_SCHEMA.md, COMPONENT_MAP.md, DEPLOYMENT.md를 생성한다.
6. sql 폴더에 init/seed/rollback SQL 파일을 분리한다.
7. Git 브랜치를 develop 및 feature 단위로 나눈다.
8. 공통 레이아웃부터 개발한다.
9. 메인 섹션을 정적 데이터로 먼저 구현한다.
10. 이후 Supabase 연동으로 전환한다.
26.2 첫 번째 개발 브랜치
feature/01-project-setup
26.3 첫 번째 완료 목표
- 프로젝트 초기 생성
- 폴더 구조 생성
- 글로벌 컬러 변수 설정
- Header/Footer 빈 컴포넌트 생성
- 메인 page.tsx 기본 연결
- README 초안 작성
27. 추가 확인 필요 항목

아래 항목은 실제 개발 전 확정이 필요하다.

병원 로고 원본 파일
Figma 메인 비주얼 파일
네이버 리뷰 링크
네이버 예약 링크
카카오 상담 링크
블로그 링크
인스타그램 링크
병원 주소 및 진료시간
푸터 사업자/의료기관 정보
이벤트 실제 가격표
비포앤애프터 이미지 사용 가능 여부
개인정보처리방침 문구
의료광고 심의 필요 콘텐츠 범위
28. 결론

본 PRD는 진한의원 홈페이지의 1차 구축 범위를 기준으로 작성되었다. 1차 목표는 메인페이지 중심의 랜딩형 홈페이지, 7개 메뉴 기반 하위 페이지, Supabase 데이터 연동, Vercel 배포, 롤백 가능한 개발 구조 완성이다.

개발은 정적 UI 구현 후 Supabase 연동으로 전환하는 방식이 가장 안전하다. 각 섹션과 데이터 테이블을 분리하고 Git 브랜치 및 SQL rollback 파일을 함께 관리하여 수정사항 발생 시 부분 롤백이 가능하도록 한다.

1m 46s 동안 생각함

PRD 초안 작성 완료했습니다.

핵심 반영 내용은 다음과 같습니다.

메인페이지 8개 섹션 구조 정리
7개 1차 메뉴와 하위 카테고리 IA 구성
Supabase 테이블 설계
Vercel 배포 기준
Antigravity 개발 시작 순서
F:\Antigravity\project\Jin_oriental 기준 폴더 구조
이미지 파일명 기준 컴포넌트 매핑
Git 브랜치/커밋/SQL rollback 기반 롤백 전략
빠른 상담 신청, BMI 처방, 이벤트 담기 기능 명세
1차 개발 범위와 제외 범위 구분
QA 체크리스트와 완료 기준 정리

참고로 로컬 F: 드라이브의 실제 이미지 파일은 제가 직접 확인할 수 없어서, 전달해준 파일명과 설명 기준으로 PRD에 반영했습니다.