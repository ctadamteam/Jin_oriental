# DB_SCHEMA (Supabase)

## 테이블 구조 (초안)

- **site_settings**: 사이트 기본 설정 (연락처, 운영시간, 외부 링크 등)
- **menus**: 사이트 네비게이션 메뉴 구조
- **pages**: 정적/동적 페이지 콘텐츠
- **reviews**: 환자 후기 데이터
- **videos**: 영상 콘텐츠(스토리) 데이터
- **events**: 진행 중인 이벤트 정보
- **event_options**: 각 이벤트의 세부 옵션(금액 등)
- **before_after_cases**: 치료 전후 사례
- **consultations**: 사용자 상담 신청 내역
- **notices**: 공지사항

*각 테이블은 `id` (UUID, Primary Key)와 `created_at` 필드를 기본으로 포함합니다.*
