import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alista Deserves The World",
  description: "A special birthday website for Alista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 
        PERBAIKAN FINAL:
        Menggunakan 'overflow-y-auto' tanpa pembatas 'lg:' agar HP dan komputer 
        sama-sama bisa melakukan scroll ke bawah dengan bebas dan lancar.
      */}
      <body 
        className={`min-h-full flex flex-col overflow-y-auto ${playfair.className}`}
      >
        {children}
      </body>
    </html>
  );
}
