import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section className="border-t border-[#f0e6e2] bg-[#fdf6f5] px-5 py-12 sm:px-8">
      <div>
        <div className="mb-8 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-[#b87889]">
            VISIT US
          </p>

          <h2 className="font-display text-[40px] leading-[0.98] tracking-[-0.04em] text-[#2a2023]">
            Visit Our
            <br />
            Boutique
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-[#d8a7b1]" />

          <p className="mt-5 text-sm leading-6 text-[#786c70]">
            Come and discover our beautiful collection in person.
          </p>
        </div>

        <div
          className="
            rounded-[24px] border border-[#ead9d2] bg-white p-5
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-12 w-12
                items-center
                justify-center
                rounded-full bg-[#f2d8de] text-[#b87889]
              "
            >
              <MapPin className="h-6 w-6" />
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#2a2023]">
                Floo Attire Boutique
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#786c70]">
                Visit our boutique and find the perfect kebaya for your special
                moment.
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/SLE377L4LrMpkVCh7"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              rounded-[18px] bg-[#b87889] px-6 py-3.5
              text-white
              font-semibold
              transition-colors hover:bg-[#9e6574]
            "
          >
            <Navigation className="h-5 w-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
