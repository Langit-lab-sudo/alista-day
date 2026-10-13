"use client";

import { motion } from "framer-motion";

export default function Stars() {
  const stars = Array.from({ length: 40 });

  return (
    <>
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 13) % 100}%`,
            top: `${(i * 17) % 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + (i % 4),
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </>
  );
}