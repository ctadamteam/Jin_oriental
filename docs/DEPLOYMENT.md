# DEPLOYMENT

## Vercel 배포 절차

1. **Github 저장소 연동**
   - Vercel 대시보드에서 `Jin_oriental` 프로젝트 저장소를 Import 합니다.

2. **빌드 설정**
   - Framework Preset: `Next.js`
   - Build Command: `pnpm build`
   - Install Command: `pnpm install`

3. **환경변수 설정 (Environment Variables)**
   Vercel 환경변수 설정 화면에서 아래 키를 입력합니다.
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL`
   - 기타 외부 링크 URL 등 (`.env.example` 참조)

4. **Deploy**
   - Deploy 버튼을 클릭하여 빌드 및 배포를 진행합니다.
