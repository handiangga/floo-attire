"use client";

import { MapPin, Navigation } from "lucide-react";

export default function Location() {
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
            VISIT US
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#2b2b2b]">
            Visit Our
            <br />
            Boutique
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#E3A9BA]" />

          <p className="mt-5 text-sm leading-7 text-[#8A7C85]">
            Come and discover our beautiful collection in person.
          </p>
        </div>

        {/* Location Card */}
        <div
          className="
            rounded-[32px]
            bg-white/90
            p-6
            shadow-[0_15px_40px_rgba(223,166,184,0.15)]
            backdrop-blur-sm
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
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
              <MapPin className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2b2b2b]">
                Floo Attire Boutique
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#8A7C85]">
                Visit our boutique and find the perfect kebaya for your special
                moment.
              </p>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://maps.app.goo.gl/SLE377L4LrMpkVCh7"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
              rounded-[24px]
              bg-gradient-to-r
              from-[#E6B5C4]
              to-[#DFA6B8]
              px-6
              py-4
              text-white
              font-semibold
              shadow-[0_15px_40px_rgba(223,166,184,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
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
