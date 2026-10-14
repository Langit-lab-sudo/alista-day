// @ts-nocheck
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Opsi konfigurasi Anda yang lain di sini */

  experimental: {
    webpackMemoryOptimizations: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
