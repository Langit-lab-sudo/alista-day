import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Menonaktifkan Turbopack untuk kompilasi produksi (memaksa menggunakan Webpack)
    turbo: false, 
  },
};

export default nextConfig;
