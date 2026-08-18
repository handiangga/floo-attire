"use client";

import Image from "next/image";
import { Globe, MapPin } from "lucide-react";

const links = [
  {
    title: "WhatsApp Admin",
    subtitle: "Personal Styling Assistance",
    image: "/logo/wa.png",
    href: "https://wa.me/6285113292011",
  },
  {
    title: "Instagram",
    subtitle: "Daily Outfit Inspiration",
    image: "/logo/ig.png",
    href: "https://www.instagram.com/floo_attire",
  },
  {
    title: "TikTok",
    subtitle: "Latest Trends & Collection",
    image: "/logo/tiktok.png",
    href: "https://www.tiktok.com/@floo_attire",
  },
  {
    title: "Lokasi Boutique",
    subtitle: "Visit Our Showroom",
    icon: <MapPin className="h-7 w-7" />,
    href: "https://maps.app.goo.gl/SLE377L4LrMpkVCh7",
  },
];

export default function MainCTA() {
  return (
    <section className="relative overflow-hidden px-5 py-6">
      {/* Background Blur */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-pink-200 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-rose-200 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main CTA */}
        <a
          href="https://drive.google.com/file/d/1jZQWSKkLVIaHur4Tm45VcbNIqtNCuOgm/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            mb-4
            flex
            items-center
            justify-between
            rounded-[30px]
            bg-[#E3A9BA]
            px-5
            py-5
            text-white
            shadow-[0_15px_40px_rgba(227,169,186,0.35)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#D996A9]
          "
        >
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
              <Globe className="h-7 w-7 text-[#E3A9BA]" />
            </div>

            <div>
              <h3 className="text-[20px] font-bold leading-tight">
                Katalog Kebaya
              </h3>

              <p className="text-sm text-white/80">
                Explore Our Signature Collection
              </p>
            </div>
          </div>

          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Other Links */}
        <div className="space-y-4">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              flex
              items-center
              justify-between
              rounded-[32px]
              bg-gradient-to-r
              from-[#E8BAC8]
              via-[#E1AFC0]
              to-[#D89FB3]
              px-6
              py-5
             text-white
              shadow-[0_20px_50px_rgba(223,166,184,0.28)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:scale-[1.01]
              hover:shadow-[0_30px_70px_rgba(223,166,184,0.35)]
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={30}
                      height={30}
                      className="h-auto w-auto object-contain"
                    />
                  ) : (
                    <div className="text-[#E3A9BA]">{item.icon}</div>
                  )}
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/75">{item.subtitle}</p>
                </div>
              </div>

              <span className="text-xl opacity-90 transition-all duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
