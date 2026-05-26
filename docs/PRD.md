# PRD (Project Requirements Document)

## 1. 프로젝트 개요
- 프로젝트명: Jin_oriental
- 목적: 진한의원 홈페이지 프로젝트 1차 구축
- 핵심 가치: 안정적 확장 가능성, 재사용 가능한 공통 컴포넌트, 향후 Supabase 및 Vercel 기반의 서버리스 환경 도입 준비

## 2. 기술 스택
- 프레임워크: Next.js App Router
- 언어: TypeScript
- 스타일링: Tailwind CSS
- 패키지 매니저: pnpm
- 배포 플랫폼: Vercel (예정)
- 데이터베이스: Supabase (구조 준비)

## 3. 이번 작업 범위 (1차)
- 프로젝트 뼈대 및 폴더 구조 생성
- 공통 레이아웃 컴포넌트(Header, Footer, QuickMenu 등) 생성
- 메인페이지 8개 섹션 정적 컴포넌트(placeholder) 생성
- 서브페이지 라우트 및 placeholder 컴포넌트 생성
- BMI 계산기 기능 구현
- Supabase, Vercel 연동을 위한 환경 변수 및 SQL 뼈대 준비

## 4. 제약 사항
- 관리자 페이지, 결제 기능, 네이버 예약 API 연동, 알림톡 자동화 등은 이번 범위 제외.
- 보장성, 과장된 의료효과 문구 사용 금지.
