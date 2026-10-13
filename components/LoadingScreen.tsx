"use client";

interface LoadingScreenProps {
  onEnter: () => void;
}

export default function LoadingScreen({
  onEnter,
}: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-pink-300 text-xl mb-4">
       
        </p>

        <h1 className="text-5xl md:text-7xl text-white font-serif mb-6">
          A Journey For You 
        </h1>

        <p className="text-white/70 mb-10">
          Prepared with love by Langit
        </p>

        <button
          onClick={onEnter}
          className="
            px-8
            py-4
            rounded-full
            bg-pink-500/20
            border border-pink-400/30
            text-white
            backdrop-blur-md
            hover:scale-105
            transition
          "
        >
          Enter The Journey ✨
        </button>
      </div>
    </div>
  );
}