"use client";

const links = [
  { id: "landing", label: "Home" },
  { id: "letter", label: "Letter" },
  { id: "gallery", label: "Gallery" },
  { id: "ending", label: "Wish" },
];

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="
        fixed
        bottom-8
        left-1/2
        -translate-x-1/2
        z-50
      "
    >
      <div
        className="
          flex
          items-center
          gap-8
          px-8
          py-4
          rounded-full
          backdrop-blur-xl
          bg-white/[0.04]
          border
          border-pink-300/10
          shadow-[0_0_30px_rgba(255,105,180,0.08)]
        "
      >
        <span className="text-pink-400 text-xs">✦</span>

        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="
              text-white/70
              hover:text-pink-300
              transition-all
              duration-300
              text-sm
            "
          >
            {link.label}
          </button>
        ))}

        <span className="text-pink-400 text-xs">✦</span>
      </div>
    </nav>
  );
}