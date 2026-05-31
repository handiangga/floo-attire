"use client";

import Image from "next/image";

const collections = [
  "/collection/1.png",
  "/collection/2.png",
  "/collection/3.png",
  "/collection/4.png",
  "/collection/5.png",
  "/collection/6.png",
  "/collection/7.png",
];

export default function Collection() {
  return (
    <section className="relative overflow-hidden px-5 py-10">
      {/* Blur Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-pink-200 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-rose-200 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.45em] text-[#D88FA7]">
            OUR COLLECTION
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#2b2b2b]">
            Elegance For
            <br />
            Every Occasion
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#E3A9BA]" />

          <p className="mt-5 text-sm leading-7 text-[#8A7C85]">
            Discover our curated collection of premium kebaya designed for every
            special moment.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-4 overflow-hidden rounded-[32px] bg-white shadow-[0_15px_40px_rgba(223,166,184,0.15)]">
          <Image
            src={collections[0]}
            alt="Featured Collection"
            width={1000}
            height={1200}
            className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {collections.slice(1).map((item, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-[0_10px_30px_rgba(223,166,184,0.12)]
              "
            >
              <Image
                src={item}
                alt={`Collection ${index + 2}`}
                width={500}
                height={600}
                className="
                  h-[220px]
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href="https://drive.google.com/file/d/1dN8nWznVnz_gy4s1LWM1mKpJRql28HPs/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8
            flex
            items-center
            justify-center
            rounded-[28px]
            bg-gradient-to-r
            from-[#E6B5C4]
            to-[#DFA6B8]
            px-6
            py-5
            text-center
            text-lg
            font-semibold
            text-white
            shadow-[0_20px_50px_rgba(223,166,184,0.25)]
            transition-all
            duration-500
            hover:-translate-y-1
          "
        >
          Browse Full Collection →
        </a>
      </div>
    </section>
  );
}
