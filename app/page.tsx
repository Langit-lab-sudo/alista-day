"use client";

import { useState } from "react";

import Landing from "../components/landing";
import Gallery from "../components/Gallery";
import Envelope from "../components/Envelope";
import Ending from "../components/Ending";
import MusicButton from "../components/MusicButton";
import LoadingScreen from "../components/LoadingScreen";
import BackgroundGlow from "../components/BackgroundGlow";
import ScrollBar from "../components/ScrollBar";
import FloatingNav from "../components/FloatingNav";
import Sakura from "../components/Sakura";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <LoadingScreen
        onEnter={() => setEntered(true)}
      />
    );
  }

  return (
    <main className="relative w-full min-h-screen flex flex-col bg-[#050505]">
      
      {/* 1. EFEK GLOBAL DI BELAKANG TEKS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Sakura />
        <BackgroundGlow />

        {/* 
          💡 PINK GLOW INTERAKTIF GLOBAL:
          Kita letakkan cahaya pink besar tepat di area tengah halaman website (antara Landing dan Envelope) 
          secara absolut, sehingga bias cahayanya tidak akan terpotong per halaman lagi!
        */}
        <div
          className="
            absolute
            top-[30%]          {/* Melebur di antara akhir Landing dan awal Envelope */}
            left-1/2
            -translate-x-1/2
            w-full
            max-w-[900px]
            h-[600px]
            rounded-full
            bg-pink-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            top-[60%]          {/* Melebur di antara Envelope dan Gallery */}
            left-1/2
            -translate-x-1/2
            w-full
            max-w-[900px]
            h-[600px]
            rounded-full
            bg-pink-500/10
            blur-[150px]
          "
        />
      </div>

      {/* 2. ELEMEN NAVIGASI & MUSIK */}
      <FloatingNav />
      <MusicButton autoPlay />
      <ScrollBar />

      {/* 3. KONTEN UTAMA */}
      <div className="w-full flex flex-col relative z-10 bg-transparent">
        <Landing />
        <Envelope />
        <Gallery />
        <Ending />
      </div>
    </main>
  );
}
