"use client";

import { Crown, Ruler, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Premium Collection",
    description:
      "Exclusive kebaya designs carefully curated for every special occasion.",
    icon: <Crown className="h-7 w-7" />,
  },
  {
    title: "Perfect Fit",
    description:
      "Various sizes available to ensure comfort and confidence all day.",
    icon: <Ruler className="h-7 w-7" />,
  },
  {
    title: "Easy Rental",
    description:
      "Simple booking process with fast response and friendly assistance.",
    icon: <Sparkles className="h-7 w-7" />,
  },
  {
    title: "Trusted Service",
    description:
      "Loved by hundreds of customers with excellent reviews and experiences.",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden px-5 py-10">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-pink-200 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-rose-200 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.45em] text-[#D88FA7]">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#2b2b2b]">
            Why Choose
            <br />
            Floo Attire
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#E3A9BA]" />

          <p className="mt-5 text-sm leading-7 text-[#8A7C85]">
            We provide elegant kebaya rental experiences for your most memorable
            moments.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="
                rounded-[28px]
                bg-white/90
                p-5
                shadow-[0_12px_30px_rgba(223,166,184,0.12)]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-[#F3C3D1]
                  to-[#E3A9BA]
                  text-white
                "
              >
                {item.icon}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-[#2b2b2b]">
                {item.title}
              </h3>

              <p className="text-xs leading-6 text-[#8A7C85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div
          className="
            mt-6
            rounded-[30px]
            bg-gradient-to-r
            from-[#E6B5C4]
            to-[#DFA6B8]
            p-6
            text-center
            text-white
            shadow-[0_20px_50px_rgba(223,166,184,0.25)]
          "
        >
          <p className="text-lg font-medium leading-8">
            ✨ Creating beautiful memories with elegant kebaya for every special
            moment ✨
          </p>
        </div>
      </div>
    </section>
  );
}
