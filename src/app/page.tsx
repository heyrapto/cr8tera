import CTASection from "@/components/sections/cta";
import ExposureSection from "@/components/sections/exposure";
import FeaturesSection from "@/components/sections/features";
import HeroSection from "@/components/sections/hero";
import OurTeamSection from "@/components/sections/our-team";
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
    <FeaturesSection />
    <OurTeamSection />
    <WhyChooseUsSection />
    <SummarySection />
    <ExposureSection />
    <TestimonialsSection />
    <Footer />
   </ReactLenis>
  );
}
