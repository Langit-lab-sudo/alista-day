"use client";

import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section
      id="landing"
      className="
        relative
        z-20
        min-h-screen
        flex
        items-center
        justify-center
        bg-transparent  {/* Murni transparan */}
      "
    >
      {/* 💡 GAMBAR BACKGROUND DAN OVERLAY SUDAH DIHAPUS DARI SINI */}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-pink-200 font-serif italic text-base md:text-xl mb-4 md:mb-6"
        >
          a birthday serenade in bloom
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-8xl text-white font-serif leading-tight"
        >
          Happy Birthday,
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl md:text-7xl italic font-serif mb-6 md:mb-8 text-pink-300"
        >
          My Everything
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl text-white/80 text-sm md:text-xl"
        >
          Today the whole universe is celebrating the day you were born into my world 💗
        </motion.p>

        {/* Spinning Flower */}
        <div className="relative mt-10 md:mt-14">
          <div className="absolute inset-0 bg-pink-400/40 blur-[50px] md:blur-[90px] rounded-full scale-150" />
          <motion.img
            src="/images/sakura2.png"
            alt="flower"
            className="relative w-20 h-20 md:w-48 md:h-48 object-contain drop-shadow-[0_0_20px_rgba(255,192,203,0.8)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
