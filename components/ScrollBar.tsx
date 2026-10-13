"use client";

import { useEffect, useState } from "react";

export default function ScrollBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScroll((window.scrollY / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-pink-300 z-[9999]"
      style={{
        width: `${scroll}%`,
      }}
    />
  );
}