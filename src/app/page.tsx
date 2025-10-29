import CTASection from "@/components/sections/cta";
import ExposureSection from "@/components/sections/exposure";
import HeroSection from "@/components/sections/hero";
import SummarySection from "@/components/sections/summary";
import TestimonialsSection from "@/components/sections/testimonials";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";

export default function Home() {
  return (
   <main>
    <Navbar />
    <HeroSection />
    <CTASection />
    <SummarySection />
    <ExposureSection />
    <TestimonialsSection />
    <Footer />
   </main>
  );
}
