"use client";

import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Heart,
  Shuffle,
  Music, // Tambahan ikon untuk tombol kecil saat disembunyikan
  ChevronDown, // Tambahan ikon untuk menutup kotak lagu
} from "lucide-react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false,}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  // PERBAIKAN: State untuk menyembunyikan kotak pemutar musik
  const [isMinimized, setIsMinimized] = useState(true); 

  useEffect(() => {
    if (!autoPlay || !audioRef.current)
      return;

    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => {});
  }, [autoPlay]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/dirayakan.mp3"
        loop
        onLoadedMetadata={() => {
          if (!audioRef.current) return;
          setDuration(audioRef.current.duration);
        }}
        onTimeUpdate={() => {
          if (!audioRef.current) return;
          setCurrentTime(audioRef.current.currentTime);
        }}
      />

      {/* WADAH UTAMA: Dipindah ke pojok kanan bawah agar tidak menghalangi konten */}
      <div
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          flex-col
          items-end
          gap-3
        "
      >
        {/* 1. KOTAK PEMUTAR MUSIK UTAMA */}
        {!isMinimized && (
          <div
            className="
              w-[290px]         {/* Ukuran disesuaikan agar pas di HP */}
              sm:w-[320px]       {/* Kembali w-320 di Desktop */}
              rounded-[32px]
              p-5
              bg-black/60        {/* Dibuat sedikit lebih gelap agar tulisan lagu terbaca jelas */}
              backdrop-blur-xl
              border border-pink-300/10
              shadow-[0_20px_50px_rgba(0,0,0,0.5)]
              animate-in fade-in slide-in-from-bottom-5 duration-300
            "
          >
            {/* Tombol Minimize */}
            <div className="flex justify-end mb-2">
              <button 
                onClick={() => setIsMinimized(true)}
                className="text-white/60 hover:text-pink-300 flex items-center gap-1 text-xs bg-white/10 px-3 py-1 rounded-full transition"
              >
                Sembunyikan <ChevronDown size={14} />
              </button>
            </div>

            {/* Album */}
            <div className="overflow-hidden rounded-3xl relative">
              <img
                src="/memories/h6.webp"
                alt="album"
                className="
                  w-full
                  h-[240px]      {/* Dikurangi sedikit untuk mobile agar seimbang */}
                  sm:h-[280px]
                  object-cover
                "
              />
            </div>

            {/* Song */}
            <div className="mt-4">
              <h3 className="text-white text-2xl sm:text-3xl font-semibold leading-tight truncate">
                Semua Aku Dirayakan
              </h3>
              <p className="text-pink-300 mt-1 text-base sm:text-lg">
                Nadin Amizah
              </p>
            </div>

            {/* Progress */}
            <div className="mt-4">
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="
                    h-1
                    bg-pink-400
                    rounded-full
                    transition-all
                    duration-300
                  "
                  style={{
                    width: `${
                      duration
                        ? (currentTime / duration) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>

              <div className="flex justify-between mt-2 text-white/60 text-xs sm:text-sm">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div
              className="
                mt-5
                flex
                items-center
                justify-between
              "
            >
              <Shuffle className="text-pink-300 cursor-pointer hover:text-pink-400 transition" size={20} />
              <SkipBack className="text-white cursor-pointer hover:text-pink-300 transition" size={24} />

              <button
                onClick={toggleMusic}
                className="
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16
                  rounded-full
                  bg-pink-500/20
                  border border-pink-400/30
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_25px_rgba(255,105,180,0.4)]
                  hover:scale-105
                  active:scale-95
                  transition
                "
              >
                {playing ? (
                  <Pause size={26} className="text-white" />
                ) : (
                  <Play size={26} className="text-white ml-1" />
                )}
              </button>

              <SkipForward className="text-white cursor-pointer hover:text-pink-300 transition" size={24} />
              <Heart className="text-white cursor-pointer hover:text-pink-400 transition" size={22} />
            </div>
          </div>
        )}

        {/* 2. TOMBOL BULAT KECIL (Akan muncul saat kotak disembunyikan) */}
        {isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            className="
              w-14
              h-14
              rounded-full
              bg-pink-500
              shadow-[0_0_20px_rgba(255,105,180,0.6)]
              flex
              items-center
              justify-center
              text-white
              hover:scale-105
              active:scale-95
              transition
              relative
            "
          >
            {/* Efek radar gelombang animasi jika lagu sedang berputar */}
            {playing && (
              <span className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-75" />
            )}
            <Music size={24} className="relative z-10" />
          </button>
        )}
      </div>
    </>
  );
}
