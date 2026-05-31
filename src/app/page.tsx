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
    <main className="flex min-h-screen justify-center bg-[#f9eef1] px-4 py-6">
      {/* Main Mobile Card */}
      <div className="w-full max-w-md overflow-hidden rounded-[40px] bg-[#fff8fa] shadow-luxury">
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
