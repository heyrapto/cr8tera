import CTASection from "@/components/sections/cta";
import ExposureSection from "@/components/sections/exposure";
import HeroSection from "@/components/sections/hero";
import SummarySection from "@/components/sections/summary";
import TestimonialsSection from "@/components/sections/testimonials";
import WhyChooseUsSection from "@/components/sections/whychooseus";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
   <ReactLenis root>
    <Navbar />
    <HeroSection />
    <CTASection />
    <WhyChooseUsSection />
    <SummarySection />
    <ExposureSection />
    <TestimonialsSection />
    <Footer />
   </ReactLenis>
  );
}
