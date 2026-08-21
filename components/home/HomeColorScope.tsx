'use client';

import { useEffect, type ReactNode } from 'react';

type HomeColorScopeProps = {
  children: ReactNode;
};

/**
 * 메인 화면에만 적용되는 색상 범위입니다.
 * 공통 헤더·상담 바도 메인에서는 같은 색상 체계를 사용해야 하므로
 * body에 한정 클래스만 추가하고, 상세 페이지로 이동하면 즉시 제거합니다.
 */
export function HomeColorScope({ children }: HomeColorScopeProps) {
  useEffect(() => {
    document.body.classList.add('home-page-theme');

    return () => {
      document.body.classList.remove('home-page-theme');
    };
  }, []);

  return <>{children}</>;
}
