import Image from "next/image";

const collections = [
  "/collection/1.webp",
  "/collection/2.webp",
  "/collection/3.webp",
  "/collection/4.webp",
  "/collection/5.webp",
  "/collection/6.webp",
  "/collection/7.webp",
];

export default function Collection() {
  return (
    <section className="border-t border-[#f0e6e2] px-5 py-12 sm:px-8">
      <div>
        <div className="mb-8 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-[#b87889]">
            OUR COLLECTION
          </p>
          <h2 className="font-display text-[40px] leading-[0.98] tracking-[-0.04em] text-[#2a2023]">
            Elegance For
            <br />
            Every Occasion
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-[#d8a7b1]" />
          <p className="mx-auto mt-5 max-w-[330px] text-sm leading-6 text-[#786c70]">
            Discover our curated collection of premium kebaya designed for every
            special moment.
          </p>
        </div>

        <div className="mb-3 overflow-hidden rounded-[24px] bg-[#f7edef]">
          <Image
            src={collections[0]}
            alt="Featured Collection"
            width={1200}
            height={1400}
            priority
            quality={75}
            sizes="100vw"
            className="
              h-[400px]
              w-full
              object-cover
              transition-transform duration-500 hover:scale-[1.02]
            "
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {collections.slice(1).map((item, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-[20px] bg-[#f7edef]
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
                  h-[210px]
                  w-full
                  object-cover
                  transition-transform duration-500 hover:scale-[1.02]
                "
              />
            </div>
          ))}
        </div>

        <a
          href="https://sewa.floofashionn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8
            flex
            items-center
            justify-center
            rounded-[22px] bg-[#b87889] px-6 py-4 text-[15px] font-semibold
            text-white
            shadow-[0_12px_24px_rgba(150,91,108,0.16)] transition-colors hover:bg-[#9e6574]
          "
        >
          Browse Full Collection →
        </a>
      </div>
    </section>
  );
}
