import type { NextConfig } from "next";

// GITHUB_PAGES=true 일 때만 정적 export + basePath 적용 (github.io/seller-consulting/).
// Vercel 등 일반 배포에서는 기본값(루트 경로) 사용 → 깔끔한 도메인.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      basePath: "/seller-consulting",
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
