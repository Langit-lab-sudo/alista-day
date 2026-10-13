"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "typewriter-effect";

export default function Envelope() {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      setShowLetter(true);
    }, 1200);
  };

  return (
    <section
      id="letter"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden bg-transparent -mt-[1px]"
    >
      {/* 
        💡 SOLUSI RADIKAL:
        Elemen 'Background Glow' internal di sini resmi KITA HAPUS / HILANGKAN.
        Cahaya pink melingkar sekarang sepenuhnya diatur secara aman dan global 
        melalui file kontainer utama (app/page.tsx) yang kemarin kita buat.
      */}

      <div className="relative z-20 text-center w-full max-w-2xl">
        {!showLetter ? (
          <>
            <motion.div
              onClick={handleOpen}
              whileHover={{ scale: 1.03 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-72 h-56 md:w-96 md:h-72 mx-auto cursor-pointer"
              style={{ perspective: "1200px" }}
            >
              {/* Letter / Isi Kertas Surat */}
              <motion.div
                initial={{ y: 30 }}
                animate={{
                  y: opened ? (window.innerWidth < 768 ? -130 : -180) : 20,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  bottom-10
                  -translate-x-1/2
                  w-56
                  h-72
                  md:w-72
                  md:h-96
                  rounded-2xl
                  bg-white
                  shadow-[0_0_50px_rgba(255,192,203,0.5)]
                  z-10
                "
              >
                <div className="p-4 md:p-6 text-pink-400 text-left">
                  <p className="text-xs md:text-sm">
                    💌 A letter for Alista
                  </p>
                </div>
              </motion.div>

              {/* Envelope Body / Bungkus Amplop */}
              <div
                className="
                  absolute
                  bottom-0
                  w-full
                  h-44
                  md:h-56
                  rounded-2xl
                  bg-gradient-to-b
                  from-pink-200
                  to-pink-300
                  shadow-[0_0_50px_rgba(255,105,180,0.4)]
                  overflow-hidden
                  z-20
                "
              >
                {/* Left Fold */}
                <div
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-1/2
                    h-full
                    bg-pink-300
                    [clip-path:polygon(0_0,100%_50%,0_100%)]
                  "
                />

                {/* Right Fold */}
                <div
                  className="
                    absolute
                    right-0
                    bottom-0
                    w-1/2
                    h-full
                    bg-pink-300
                    [clip-path:polygon(100%_0,0_50%,100%_100%)]
                  "
                />

                {/* Bottom Fold */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    h-1/2
                    bg-pink-200
                    [clip-path:polygon(0_100%,50%_0,100%_100%)]
                  "
                />

                {/* Sakura Seal */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-12
                    h-12
                    md:w-16
                    md:h-16
                    rounded-full
                    bg-pink-500
                    shadow-[0_0_20px_rgba(255,105,180,0.8)]
                    flex
                    items-center
                    justify-center
                    text-xl
                    md:text-2xl
                    z-50
                  "
                >
                  🌸
                </motion.div>
              </div>

              {/* Top Flap / Penutup Atas */}
              <motion.div
                animate={{
                  rotateX: 180,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: "top",
                }}
                className="
                  absolute
                  top-12
                  md:top-18
                  left-0
                  w-full
                  h-32
                  md:h-40
                  bg-gradient-to-b
                  from-pink-300
                  to-pink-400
                  [clip-path:polygon(0_0,100%_0,50%_100%)]
                  z--10
                "
              />
            </motion.div>

            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-6 md:mt-10 text-zinc-300 text-sm md:text-base"
            >
              Click the envelope to open 💌
            </motion.p>
          </>
        ) : (
          /* Kotak Surat Terbuka */
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="
              w-full
              rounded-3xl
              border
              border-pink-300/30
              bg-black/40
              backdrop-blur-md
              p-6
              md:p-10
              shadow-[0_0_50px_rgba(255,182,193,0.2)]
            "
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 font-serif">
              Dear Alista
            </h2>

            <div className="text-zinc-200 leading-7 md:leading-8 text-left text-base md:text-lg min-h-[250px] overflow-y-auto max-h-[60vh] md:max-h-none pr-1">
              <Typewriter
                options={{
                  delay: 30,
                  cursor: "|",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`
                      <strong>The Beginning</strong> <br><br>
                      Every story starts somewhere. Maybe neither of us knew that one day I'd be sitting here making an entire website just to celebrate your birthday. Yet somehow, here we are. <br><br>
                      <strong>The Memories</strong> <br><br>
                      Some moments stay with us longer than others. The laughs, the conversations, the little things that seemed ordinary at the time but became unforgettable memories later. Those moments are the reason this story exists. <br><br> 
                      <strong>What Makes You Special</strong> <br><br>
                      Some people leave a mark without even trying. It's not one single thing. It's the way you laugh, the way you care, and the way you make ordinary moments feel a little brighter. That's what makes you unforgettable. <br><br>
                      — Langit
                    `)
                    .start();
                }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
