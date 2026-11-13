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
    <section className="border-t border-[#f0e6e2] px-5 py-12 sm:px-8">
      <div>
        <div className="mb-8 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-[#b87889]">
            WHY CHOOSE US
          </p>

          <h2 className="font-display text-[40px] leading-[0.98] tracking-[-0.04em] text-[#2a2023]">
            Why Choose
            <br />
            Floo Attire
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-[#d8a7b1]" />

          <p className="mx-auto mt-5 max-w-[330px] text-sm leading-6 text-[#786c70]">
            We provide elegant kebaya rental experiences for your most memorable
            moments.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="
                rounded-[22px] border border-[#ead9d2] bg-white p-4
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-11 w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f2d8de]
                  text-white
                "
              >
                {item.icon}
              </div>

              <h3 className="mb-2 text-[15px] font-semibold leading-5 text-[#2a2023]">
                {item.title}
              </h3>

              <p className="text-[11px] leading-5 text-[#786c70]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-5 rounded-[22px] bg-[#b87889] p-6
            text-center
            text-white
          "
        >
          <p className="font-display text-[19px] leading-7">
            ✨ Creating beautiful memories with elegant kebaya for every special
            moment ✨
          </p>
        </div>
      </div>
    </section>
  );
}
