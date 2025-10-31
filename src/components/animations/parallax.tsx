"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxTransitionProps {
  topSection: React.ReactNode;
  bottomSection: React.ReactNode;
  scrollDistance?: number; // optional fallback scroll distance
}

const ParallaxTransition = ({
  topSection,
  bottomSection,
  scrollDistance = 1500, // px fallback if measurement fails
}: ParallaxTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(scrollDistance);

  // measure bottom section height dynamically
  useLayoutEffect(() => {
    if (bottomRef.current) {
      const height = bottomRef.current.offsetHeight + window.innerHeight;
      setTotalHeight(height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animations
  const topScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.96, 0.96]);
  const topOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);
  const bottomY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height: `${totalHeight}px` }}
    >
      {/* Top Section */}
      <motion.div
        className="sticky top-0 h-screen w-full z-1"
        style={{ scale: topScale, opacity: topOpacity }}
      >
        {topSection}
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        ref={bottomRef}
        className="absolute top-0 left-0 w-full z-2"
        style={{ y: bottomY }}
      >
        {bottomSection}
      </motion.div>
    </div>
  );
};

export default ParallaxTransition;
