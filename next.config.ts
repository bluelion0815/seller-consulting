import type { NextConfig } from "next";

// GitHub Pages 정적 배포 설정 (username.github.io/seller-consulting/)
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/seller-consulting",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
