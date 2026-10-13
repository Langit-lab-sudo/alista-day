"use client";

import { motion } from "framer-motion";

export default function Sakura() {
  const petals = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map((_, i) => {
        const size = 20 + Math.random() * 60;
        const useImage = Math.random() > 0.3;

        if (useImage) {
          return (
            <motion.img
              key={i}
              src="/images/sakura-petal.png"
              alt=""
              className="absolute select-none"
              style={{
                width: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `-${size}px`,
                opacity: 0.6 + Math.random() * 0.4,
                filter: `blur(${Math.random() * 2}px)`,
              }}
              initial={{
                y: "-10vh",
                rotate: Math.random() * 360,
              }}
              animate={{
                y: "110vh",
                x: [
                  0,
                  -40 + Math.random() * 80,
                  -40 + Math.random() * 80,
                ],
                rotate: 360,
              }}
              transition={{
                duration: 12 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          );
        }

       return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-300"
            style={{
              width: size,
              height: size * 0.7,
              left: `${Math.random() * 100}%`,
              top: `-${size}px`,
              opacity: 0.01 + Math.random() * 0.5,
              filter: `blur(${6 + Math.random() * 12}px)`,
            }}
            initial={{
              y: -200,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: "120vh",
              x: [
                0,
                -40 + Math.random() * 80,
                -40 + Math.random() * 80,
              ],
              rotate: 360,
            }}
            transition={{
              duration: 25 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        );
      })}
    </div>
  );
}