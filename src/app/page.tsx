import Hero from "@/components/Hero";
import MainCTA from "@/components/mainCTA";
import Collection from "@/components/Collection";
import Testimoni from "@/components/Testimoni";
import WhyChoose from "@/components/WhyChoose";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-[#f2eeea] px-0 py-0 sm:px-5 sm:py-8">
      <div className="w-full max-w-[480px] overflow-hidden bg-[#fffaf8] shadow-[0_18px_60px_rgba(52,32,38,0.10)] sm:rounded-[32px]">
        <Hero />
        <MainCTA />
        <Collection />
        <Testimoni />
        <WhyChoose />
        <Location />
        <Footer />
      </div>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}
