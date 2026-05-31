"use client";

const testimonials = [
  {
    name: "Milla",
    review:
      "Bagus banget, ukurannya pas, jahitannya rapi dan bahkan lebih bagus dari foto. Nyaman dipakai dan bikin percaya diri.",
  },
  {
    name: "Fatimah",
    review:
      "Kebaya terlihat mewah dan elegan. Banyak teman notice dan tanya sewa dimana. Benar-benar worth it.",
  },
  {
    name: "Chelsy",
    review:
      "Dipakai untuk acara wedding dan hasilnya cantik banget. Pelayanan ramah dan koleksinya premium.",
  },
  {
    name: "Arika",
    review:
      "Dipakai saat wisuda dan jadi lebih percaya diri. Banyak teman dan keluarga bilang kebayanya cantik dan elegan. Benar-benar bikin aku jadi pusat perhatian di hari spesial.",
  },
];

export default function Testimoni() {
  return (
    <section className="relative overflow-hidden px-5 py-10">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-200 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-rose-200 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.45em] text-[#D88FA7]">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#2b2b2b]">
            Loved By
            <br />
            Our Customers
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#E3A9BA]" />
        </div>

        {/* Rating Summary */}
        <div
          className="
            mb-6
            rounded-[32px]
            bg-white/90
            p-6
            text-center
            shadow-[0_15px_40px_rgba(223,166,184,0.15)]
          "
        >
          <div className="text-4xl mb-2">⭐️⭐️⭐️⭐️⭐️</div>

          <h3 className="text-4xl font-bold text-[#2b2b2b]">5.0 / 5.0</h3>

          <p className="mt-2 text-sm text-[#8A7C85]">
            Trusted by hundreds of happy customers
          </p>
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                rounded-[28px]
                bg-white/90
                p-5
                shadow-[0_12px_30px_rgba(223,166,184,0.12)]
                backdrop-blur-sm
              "
            >
              <div className="mb-3 text-lg">⭐⭐⭐⭐⭐</div>

              <p className="leading-8 text-[15px] text-[#6F6570]">
                "{item.review}"
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-pink-300
                    to-rose-300
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  ♥
                </div>

                <span className="font-semibold text-[#2b2b2b]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#8A7C85]">
            ✨ Elegant • Exclusive • Timeless ✨
          </p>
        </div>
      </div>
    </section>
  );
}
