# Jin_oriental 홈페이지 프로젝트

## 프로젝트 개요
진한의원 공식 홈페이지 1차 구축 프로젝트입니다. Next.js App Router와 Tailwind CSS를 활용하여 구축되며, 향후 Supabase 및 Vercel을 통한 확장을 고려하여 설계되었습니다.

## 기술 스택
- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **패키지 매니저**: pnpm
- **데이터베이스**: Supabase (예정)

## 로컬 실행 방법
```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```
접속 URL: http://localhost:3000

## 폴더 구조
- `app/`: Next.js 라우트 및 페이지
- `components/`: 재사용 가능한 UI 컴포넌트 (common, home, subpage, ui)
- `docs/`: 프로젝트 산출물 (PRD, IA 등)
- `lib/`: 유틸리티, 상수, Supabase 클라이언트
- `public/`: 정적 리소스 (이미지, 아이콘)
- `sql/`: 데이터베이스 스키마 및 마이그레이션 스크립트

## 환경변수
루트 디렉토리의 `.env.example` 파일을 복사하여 `.env.local` 파일을 생성하고 필요한 값을 입력합니다.

## 개발 브랜치 전략
- `main`: 운영 서버 배포 브랜치
- `develop`: 개발 서버 배포 및 통합 브랜치
- `feature/*`: 개별 기능 개발 브랜치

## 롤백 전략
- **코드 롤백**: 문제 발생 시 `git revert` 또는 `git reset`을 통해 이전 안정적인 커밋으로 복구합니다.
- **DB 롤백**: `sql/rollback/` 디렉토리에 있는 SQL 스크립트를 역순으로 실행하여 테이블 및 데이터를 롤백합니다. (자세한 내용은 `docs/CHANGELOG.md` 템플릿 참고)

## 다음 작업 단계
1. Supabase 프로젝트 생성 및 실제 환경변수 연결
2. 메인페이지 상세 디자인 (Figma) 적용 및 반응형 최적화
3. 관리자 기능 부재를 고려한 초기 정적 데이터 기반 퍼블리싱 고도화
