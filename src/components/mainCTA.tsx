import { ArrowRight, Camera, Globe2, MapPin, MessageCircle, Music2 } from "lucide-react";

const links = [
  {
    title: "WhatsApp Admin",
    subtitle: "Personal Styling Assistance",
    icon: MessageCircle,
    href: "https://wa.me/6285113292011",
  },
  {
    title: "Instagram",
    subtitle: "Daily Outfit Inspiration",
    icon: Camera,
    href: "https://www.instagram.com/floo_attire",
  },
  {
    title: "TikTok",
    subtitle: "Latest Trends & Collection",
    icon: Music2,
    href: "https://www.tiktok.com/@floo_attire",
  },
  {
    title: "Lokasi Boutique",
    subtitle: "Visit Our Showroom",
    icon: MapPin,
    href: "https://maps.app.goo.gl/SLE377L4LrMpkVCh7",
  },
];

export default function MainCTA() {
  return (
    <section className="px-5 pb-8 sm:px-8">
      <div>
        <a
          href="https://sewa.floofashionn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mb-4 flex
            items-center
            justify-between
            rounded-[24px]
            bg-[#b87889]
            px-5 py-4
            text-white
            shadow-[0_14px_28px_rgba(150,91,108,0.18)] transition-colors hover:bg-[#9e6574]
          "
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
              <Globe2 className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-[17px] font-semibold leading-tight">
                Katalog Kebaya
              </h3>

              <p className="mt-1 text-xs text-white/80">
                Explore Our Signature Collection
              </p>
            </div>
          </div>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
            <ArrowRight className="h-5 w-5" />
          </span>
        </a>

        <div className="overflow-hidden rounded-[26px] bg-[#f7edef] px-4 py-1.5">
          {links.map((item, index) => {
            const Icon = item.icon;
            return (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-1 py-4 text-[#2a2023] transition-colors hover:bg-white/45 ${
                index !== links.length - 1 ? "border-b border-[#dec8b6]/80" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#b87889] shadow-[0_4px_12px_rgba(112,72,81,0.08)]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-[11px] text-[#786c70]">{item.subtitle}</p>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 text-[#b87889]" strokeWidth={1.7} />
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
