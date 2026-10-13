"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Ending() {
  return (
    <section
      id="ending"
      className="min-h-screen flex items-center justify-center px-6 relative z-20 bg-transparent -mt-[1px]"
    >
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[500px]
          rounded-full
          bg-pink-500/20
          blur-[180px]
        "
      />
    <FadeIn>
      <motion.div className="max-w-3xl text-center"
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
        transition={{ duration: 2.5 }}>
        <p className="text-pink-300 mb-4 italic font-serif">
          Wish
        </p>

        <h2 className="text-5xl font-bold mb-8 font-serif">
          (˶ᵔ ᵕ ᵔ˶)
        </h2>

        <p className="text-zinc-300 leading-8 text-lg">

                      Thank you for being part of my life.

                      I hope this year brings you happiness,
                      peace, success, and countless beautiful moments.

                      No matter where life takes us,
                      you'll always have a special place in my heart.

                      Thank you for every smile,
                      every laugh,
                      and every memory we've shared.<br/><br/>

                      Happy Birthday once again. 💗<br/><br/>

                      — Langit
        </p>
      <div className="mt-16 text-3xl text-pink-300">
  ✦
</div>
      </motion.div>
    </FadeIn>
    </section>
  );
}