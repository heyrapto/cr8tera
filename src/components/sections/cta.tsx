"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

const CTASection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const buttonVariants: any = {
    hidden: {
      width: 56, // roughly icon width
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      width: 220,
      opacity: 1,
      scale: [1, 1.05, 1],
      transition: {
        width: { duration: 0.8, ease: "easeInOut" },
        opacity: { duration: 0.4 },
        scale: { delay: 0.9, duration: 0.3, ease: "easeOut" },
      },
    },
  };

  const textVariants: any = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.8, duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/ctaBg.svg"
          alt="CTA background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Content */}
      <div ref={ref} className="flex flex-col gap-16 items-center">
        <span className="text-5xl md:text-8xl w-full md:w-[1200px] leading-tight">
          Creating new worlds, an AI workflow at a time.
        </span>

        <div className="flex flex-col gap-12 items-center">
          {/* Animated Button */}
          <motion.div
            className="overflow-hidden flex items-center justify-center"
            variants={buttonVariants}
            initial="hidden"
            animate={controls}
            style={{
              borderRadius: "9999px", // fully rounded
            }}
          >
            <Button
              variant="primary"
              radius="full"
              icon={Icons.BlueButtonEllipse}
              
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <motion.span variants={textVariants} initial="hidden" animate={controls}>
                Try Demo
              </motion.span>
            </Button>
          </motion.div>

          {/* Decorative ruler */}
          <Image
            src="/images/ctaRuler.svg"
            alt="Ruler"
            width={300}
            height={60}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
