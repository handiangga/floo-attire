import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#f0e6e2] px-5 pb-10 pt-10">
      <div className="text-center">
        <Image
          src="/logo/logo.webp"
          alt="Floo Attire"
          width={100}
          height={100}
          className="mx-auto mb-4 h-auto w-[88px]"
        />

        <h3 className="font-display text-3xl text-[#2a2023]">Floo Attire</h3>

        <p className="mt-3 text-[9px] font-medium tracking-[0.3em] text-[#b87889]">
          ELEGANT • EXCLUSIVE • TIMELESS
        </p>

        <div className="mx-auto my-6 h-px w-16 bg-[#d8a7b1]" />

        <p className="text-sm leading-6 text-[#786c70]">
          Premium Kebaya Rental
          <br />
          For Every Special Occasion ✨
        </p>

        <p className="mt-6 text-[11px] text-[#a39298]">
          © 2026 Floo Attire. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
