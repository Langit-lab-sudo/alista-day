"use client";

export default function BackgroundGlow() {
  return (
    <>
      <div
        className="
          fixed
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,80,150,0.2),transparent_60%)]
          z-0
        "
      />

      <div
        className="
          fixed
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[500px]
          bg-pink-500/20
          blur-[180px]
          rounded-full
          z-0
        "
      />
    </>
  );
}