import CTASection from "@/components/sections/cta";
import ExposureSection from "@/components/sections/exposure";
import HeroSection from "@/components/sections/hero";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";

export default function Home() {
  return (
   <main>
    <Navbar />
    <HeroSection />
    <CTASection />
    <ExposureSection />
    <Footer />
   </main>
  );
}
