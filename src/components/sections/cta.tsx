"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

const CTASection = () => {
  const controls = useAnimation();
  const buttonControls = useAnimation(); // separate for sequential timing
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      // Step 1: Play text scatter animation
      controls.start("visible").then(() => {
        // Step 2: Trigger button animation after text completes
        buttonControls.start("visible");
      });
    }
  }, [controls, buttonControls, inView]);

  const scatterText = "Creating new worlds, an AI workflow at a time.";

  // scatter-in text animation
  const scatterVariants: any = {
    hidden: (i: number) => ({
      opacity: 0,
      x: Math.random() * 400 - 200,
      y: Math.random() * 200 - 100,
      rotate: Math.random() * 180 - 90,
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.02,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants: any = {
    hidden: {
      width: 56,
      opacity: 0,
      scale: 0.9,
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
        {/* Scatter text */}
        <motion.span
          className="text-5xl md:text-8xl w-full md:w-[1200px] leading-tight font-semibold flex flex-wrap justify-center"
          initial="hidden"
          animate={controls}
        >
          {scatterText.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={scatterVariants}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>

        {/* Button and Ruler */}
        <div className="flex flex-col gap-12 items-center">
          <motion.div
            className="overflow-hidden flex items-center justify-center"
            variants={buttonVariants}
            initial="hidden"
            animate={buttonControls}
            style={{
              borderRadius: "9999px",
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
              <motion.span variants={textVariants} initial="hidden" animate={buttonControls}>
                Try Demo
              </motion.span>
            </Button>
          </motion.div>

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
