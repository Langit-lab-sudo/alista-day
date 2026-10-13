"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./LightBox";

const photos = [
  "/memories/alista1.webp",
  "/memories/alista5.webp",
  "/memories/alista10.webp",
  "/memories/alista2.webp",
  "/memories/alista8.webp",
  "/memories/alista3.webp",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="min-h-screen px-6 py-16 md:py-20 relative z-20 bg-transparent -mt-[1px]"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Pink Glow - PERBAIKAN DI SINI (Dibuat Responsive & Fluid) */}
      {/* 
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-full
          max-w-[800px]
          h-[300px]
          md:h-[500px]
          rounded-full
          bg-pink-500/20
          blur-[100px]
          md:blur-[180px]
        "
      />*/}
      

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-pink-300 text-center mb-2 md:mb-4 italic font-serif text-sm md:text-base">
          Memories
        </p>

        {/* PERBAIKAN: Mengecilkan teks judul khusus di HP */}
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-10 md:mb-16 font-serif text-white">
          Château de Fleurs
        </h2>

        {/* Grid layout otomatis 1 kolom di HP, 2 kolom di tablet, 3 kolom di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelected(photo)}
              onContextMenu={(e) => e.preventDefault()}
              className="
                relative
                h-72            {/* Di HP tingginya sedikit dikurangi agar tidak terlalu memanjang */}
                md:h-80         {/* Di layar besar kembali ke ukuran semula */}
                overflow-hidden
                rounded-3xl
                group
                cursor-pointer
              "
            >
              <Image
                src={photo}
                alt={`Memory ${index + 1}`}
                fill
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                  select-none
                  pointer-events-none
                "
              />

              {/* Invisible protection layer */}
              <div
                className="absolute inset-0 z-10"
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Watermark */}
              <div
                className="
                  absolute
                  bottom-3
                  right-4
                  z-20
                  text-xs
                  text-white/40
                  font-serif
                  pointer-events-none
                "
              >
                Alista
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <Lightbox
            image={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </section>
  );
}
