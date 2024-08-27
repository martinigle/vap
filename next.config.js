/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  distDir: "build",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
