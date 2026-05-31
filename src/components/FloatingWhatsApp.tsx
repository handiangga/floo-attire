"use client";

import Image from "next/image";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6285113292011"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-white
        shadow-[0_20px_50px_rgba(223,166,184,0.35)]
        ring-4
        ring-[#F7E3EA]
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <Image
        src="/logo/wa.png"
        alt="WhatsApp"
        width={34}
        height={34}
        className="object-contain"
      />
    </a>
  );
}
