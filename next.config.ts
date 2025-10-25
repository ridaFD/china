import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization to avoid 403 errors from Alibaba CDN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.1688.com',
      },
      {
        protocol: 'https',
        hostname: '**.alicdn.com',  // All Alibaba CDN domains
      },
      {
        protocol: 'https',
        hostname: 'cbu01.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cbu02.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cbu03.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: 'img.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
