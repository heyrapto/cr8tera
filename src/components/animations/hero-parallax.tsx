"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "../sections/hero";
import CTASection from "../sections/cta";

const HeroToCTAParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero shrinks slightly and fades out completely
  const heroScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.95, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  // CTA slides upward fully
  const ctaY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[200vh] overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="sticky top-0 h-screen w-full z-1"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        <HeroSection />
      </motion.div>

      {/* CTA slides over Hero */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen z-2"
        style={{ y: ctaY }}
      >
        <CTASection />
      </motion.div>

      {/* Spacer for smooth transition into next section */}
      <div className="relative h-screen z-0" />
    </div>
  );
};

export default HeroToCTAParallax;
