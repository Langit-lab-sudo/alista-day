"use client";

import Image from "next/image";

interface Props {
  image: string;
  onClose: () => void;
}

export default function Lightbox({
  image,
  onClose,
}: Props) {
  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        bg-black/90
        z-[9999]
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div
        className="
          relative
          w-full
          max-w-5xl
          h-[80vh]
        "
      >
        <Image
          src={image}
          alt="Memory"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}