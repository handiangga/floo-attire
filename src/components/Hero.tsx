import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 pb-9 pt-10 text-center sm:px-8">
      <div>
        <Image
          src="/logo/logo.webp"
          alt="Floo Attire"
          width={180}
          height={180}
          priority
          className="mx-auto h-auto w-[142px] object-contain sm:w-[156px]"
        />
        <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.42em] text-[#b87889]">
          FLOO ATTIRE
        </p>
        <h1 className="font-display mt-5 text-[48px] leading-[0.94] tracking-[-0.045em] text-[#2a2023] sm:text-[55px]">
          Rent Your
          <br />
          Dream Kebaya
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-[#d8a7b1]" />
        <p className="mt-5 text-[13px] font-medium tracking-[0.02em] text-[#a76677]">
          Elegant • Exclusive • Timeless
        </p>
        <p className="mx-auto mt-3 max-w-[310px] text-sm leading-6 text-[#786c70]">
          Premium kebaya rental for every special moment ✨
        </p>
        <div className="mt-8 grid grid-cols-3 gap-2.5">
          <div className="rounded-2xl border border-[#ead9d2] bg-white/60 px-2 py-3">
            <p className="font-display text-[22px] font-bold leading-none text-[#b87889]">100+</p>
            <p className="mt-1.5 text-[10px] font-medium text-[#786c70]">Collection</p>
          </div>
          <div className="rounded-2xl border border-[#ead9d2] bg-white/60 px-2 py-3">
            <p className="font-display text-[22px] font-bold leading-none text-[#b87889]">4.9★</p>
            <p className="mt-1.5 text-[10px] font-medium text-[#786c70]">Rating</p>
          </div>
          <div className="rounded-2xl border border-[#ead9d2] bg-white/60 px-2 py-3">
            <p className="font-display text-[22px] font-bold leading-none text-[#b87889]">100+</p>
            <p className="mt-1.5 text-[10px] font-medium text-[#786c70]">Happy Rent</p>
          </div>
        </div>
      </div>
    </section>
  );
}
