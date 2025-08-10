import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // experimental: {
  //   optimizeCss: true,
  // },
  typescript: {
    // Enable strict mode for better type checking
    ignoreBuildErrors: false,
  },
  eslint: {
    // Enable strict ESLint during builds
    ignoreDuringBuilds: false,
  },
  // Enable compression
  compress: true,
  // Power by header
  poweredByHeader: false,
  // Generate robots.txt and sitemap
  trailingSlash: false,
};

export default nextConfig;
