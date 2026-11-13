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
    <section className="border-t border-[#f0e6e2] bg-[#fdf6f5] px-5 py-12 sm:px-8">
      <div>
        <div className="mb-8 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-[#b87889]">
            TESTIMONIALS
          </p>

          <h2 className="font-display text-[40px] leading-[0.98] tracking-[-0.04em] text-[#2a2023]">
            Loved By
            <br />
            Our Customers
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-[#d8a7b1]" />
        </div>

        <div
          className="
            mb-5 rounded-[24px] border border-[#ead9d2] bg-white p-6
            text-center
          "
        >
          <div className="mb-2 text-2xl tracking-[0.12em]">★★★★★</div>
          <h3 className="font-display text-[38px] font-bold text-[#2a2023]">5.0 / 5.0</h3>
          <p className="mt-2 text-sm text-[#786c70]">
            Trusted by hundreds of happy customers
          </p>
        </div>

        <div className="space-y-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                rounded-[22px] border border-[#ead9d2] bg-white p-5
              "
            >
              <div className="mb-3 text-sm tracking-[0.12em] text-[#b87889]">★★★★★</div>

              <p className="leading-7 text-[14px] text-[#62565a]">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div
                  className="
                    flex
                  h-9 w-9
                    items-center
                    justify-center
                    rounded-full
                  bg-[#e2adb9]
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  ♥
                </div>

                <span className="text-sm font-semibold text-[#2a2023]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[13px] text-[#786c70]">
            ✨ Elegant • Exclusive • Timeless ✨
          </p>
        </div>
      </div>
    </section>
  );
}
