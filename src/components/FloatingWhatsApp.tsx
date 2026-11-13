import Image from "next/image";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6285113292011"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-4 right-4
        z-50
        flex
        h-14 w-14
        items-center
        justify-center
        rounded-full
        bg-[#b87889] shadow-[0_12px_24px_rgba(150,91,108,0.25)]
        ring-4 ring-white transition-transform duration-300 hover:scale-105
      "
    >
      <Image
        src="/logo/wa.webp"
        alt="WhatsApp"
        width={28}
        height={28}
        className="h-7 w-7 object-contain brightness-0 invert"
      />
    </a>
  );
}
