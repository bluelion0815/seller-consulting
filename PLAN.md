# PLAN — SellerPilot 구현 전략

## 기술 스택
- Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4
- 배포: Vercel (GitHub 연동)

## 디자인 토큰 (에메랄드 — brancast 인디고와 차별화)
| 토큰 | light | dark |
|------|-------|------|
| brand | `#059669` | `#10b981` |
| brand-hover | `#047857` | `#34d399` |
| accent | `#f59e0b` | `#fbbf24` |
| bg / fg | `#f8faf9` / `#0f1a17` | `#0a0f0d` / `#e6efe9` |
- `globals.css` CSS 변수 + `@theme inline`, `html[data-theme="dark"]` 토글

## 컴포넌트 (SSOT = /styleguide)
SiteHeader / SiteFooter / ThemeToggle / ui(Button·Card·Section·Badge)

## 실행 순서
1. [직렬] 토큰 → 공용 컴포넌트 → /styleguide 확정·커밋(락)
2. [병렬] 페이지 4개 서브에이전트 팬아웃 (공용 컴포넌트 소비만)
3. [직렬] next build → GitHub push → Vercel → URL

## 리스크/대응
공용 컴포넌트 동시수정 충돌 → 1단계 락 후 페이지는 소비만.
