import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Mematikan Turbopack secara total pada kompilasi produksi
  turbopack: false, 
} as any; 
// Catatan: Teks 'as any' digunakan sebagai bypass jika sistem TypeScript Next.js 16 
// mendeteksi tipe strict bawaan versi beta.

export default nextConfig;
