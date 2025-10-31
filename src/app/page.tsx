import ParallaxTransition from "@/components/animations/parallax";
import HeroToCTAParallax from "@/components/animations/parallax";
import CTASection from "@/components/sections/cta";
import ExposureSection from "@/components/sections/exposure";
import FeaturesSection from "@/components/sections/features";
import HeroSection from "@/components/sections/hero";
import MixUpSection from "@/components/sections/mixup";
import OurTeamSection from "@/components/sections/our-team";
import SummarySection from "@/components/sections/summary";
import TestimonialsSection from "@/components/sections/testimonials";
import WhyChooseUsSection from "@/components/sections/whychooseus";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { Ruler } from "@/layout/ruler";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
   <ReactLenis root>
    <Navbar />
    <ParallaxTransition topSection={<HeroSection />} bottomSection={<CTASection />} />
    <FeaturesSection />
    <OurTeamSection />
    <ParallaxTransition topSection={<MixUpSection />} bottomSection={<WhyChooseUsSection />} />
    <SummarySection />
    <ExposureSection />
    <TestimonialsSection />
    <Footer />
    <Ruler /> 
   </ReactLenis>
  );
}
