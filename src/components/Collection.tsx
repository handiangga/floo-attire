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
      {/* Background Blur */}
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

          <h2 className="text-4xl font-light leading-tight text-[#2B2B2B]">
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

        {/* Featured Collection */}
        <div className="mb-4 overflow-hidden rounded-[32px] bg-white shadow-[0_15px_40px_rgba(223,166,184,0.15)]">
          <Image
            src={collections[0]}
            alt="Featured Collection"
            width={1200}
            height={1400}
            priority
            quality={75}
            sizes="100vw"
            className="
              h-[420px]
              w-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>

        {/* Collection Grid */}
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
                width={600}
                height={800}
                loading="lazy"
                quality={70}
                sizes="(max-width:768px) 50vw, 300px"
                className="
                  h-[220px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://drive.google.com/file/d/1oNFf7b6fycdc3hV2VZpVERpogmrs1MXI/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8
            flex
            items-center
            justify-center
            rounded-[30px]
            bg-gradient-to-r
            from-[#E6B5C4]
            to-[#DFA6B8]
            px-6
            py-5
            text-lg
            font-semibold
            text-white
            shadow-[0_20px_50px_rgba(223,166,184,0.25)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_25px_60px_rgba(223,166,184,0.35)]
          "
        >
          Browse Full Collection →
        </a>
      </div>
    </section>
  );
}
