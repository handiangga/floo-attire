"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 pb-10 pt-6">
      <div className="text-center">
        <Image
          src="/logo/logo.png"
          alt="Floo Attire"
          width={120}
          height={120}
          className="mx-auto mb-4 h-auto w-auto"
        />

        <h3 className="text-2xl font-light text-[#2b2b2b]">Floo Attire</h3>

        <p className="mt-3 text-sm tracking-[0.2em] text-[#D88FA7]">
          ELEGANT • EXCLUSIVE • TIMELESS
        </p>

        <div className="mx-auto my-6 h-px w-24 bg-[#E3A9BA]" />

        <p className="text-sm leading-7 text-[#8A7C85]">
          Premium Kebaya Rental
          <br />
          For Every Special Occasion ✨
        </p>

        <p className="mt-6 text-xs text-[#B59AA5]">
          © 2026 Floo Attire. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
