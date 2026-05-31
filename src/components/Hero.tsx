"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-10 pb-8">
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <Image
          src="/logo/logo.png"
          alt="Floo Attire"
          width={180}
          height={180}
          priority
          className="mx-auto object-contain"
        />

        {/* Brand */}
        <p className="mt-2 text-[11px] uppercase tracking-[0.45em] text-[#D88FA8]">
          FLOO ATTIRE
        </p>

        {/* Heading */}
        <h1 className="mt-5 text-5xl leading-none font-light text-[#2F2A2C]">
          Rent Your
          <br />
          Dream Kebaya
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-24 bg-[#D88FA8]/40" />

        {/* Subtitle */}
        <p className="mt-5 text-sm leading-7 text-[#7B6A70]">
          Elegant • Exclusive • Timeless
        </p>

        <p className="mt-2 text-sm leading-7 text-[#7B6A70]">
          Premium kebaya rental for every special moment ✨
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
            <p className="text-base font-semibold text-[#D88FA8]">100+</p>
            <p className="text-[11px] text-[#777]">Collection</p>
          </div>

          <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
            <p className="text-base font-semibold text-[#D88FA8]">4.9★</p>
            <p className="text-[11px] text-[#777]">Rating</p>
          </div>

          <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
            <p className="text-base font-semibold text-[#D88FA8]">100+</p>
            <p className="text-[11px] text-[#777]">Happy Rent</p>
          </div>
        </div>
      </div>
    </section>
  );
}
