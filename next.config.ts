import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production'
const repositoryName = 'a11y-demo'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProduction ? `/${repositoryName}` : '',
  assetPrefix: isProduction ? `/${repositoryName}/` : '',
};

export default nextConfig;
