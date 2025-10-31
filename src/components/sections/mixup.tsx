"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const scatterText = (text: string) =>
  text.split("").map((char, i) => (
    <motion.span key={i} variants={scatterChild} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

const scatterChild: any = {
  hidden: { opacity: 0, y: 20, x: (Math.random() - 0.5) * 80, rotate: (Math.random() - 0.5) * 60 },
  visible: { opacity: 1, y: 0, x: 0, rotate: 0, transition: { type: "spring", damping: 12, stiffness: 120 } },
};

const MixUpSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const scatterContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };

  const fadeUp: any = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.3, 1], delay },
    },
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-start text-start bg-white rounded-t-[60px] pt-[300px] pb-32 mt-48 overflow-hidden -z-10 h-screen"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl px-6">
        {/* h2 scatter animation */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          variants={scatterContainer}
          initial="hidden"
          animate={controls}
        >
          {scatterText("Mix it up")}
        </motion.h2>

        {/* h3 */}
        <motion.h3
          className="text-lg md:text-xl text-gray-700 font-semibold mb-4"
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={controls}
        >
          All the best AI tools to create what you really want to see in the world
        </motion.h3>

        {/* p */}
        <motion.p
          className="text-gray-500 leading-relaxed"
          variants={fadeUp(0.7)}
          initial="hidden"
          animate={controls}
        >
          All the best AI tools to create what you really want to see in the world. All the best AI
          tools to create what you really want to see in the world. All the best AI tools to create
          what you really want to see in the world. All the best AI tools to create what you really
          want to see in the world.
        </motion.p>
      </div>

      {/* Graphic Area */}
      <motion.div
        className="relative z-10 mt-0 flex flex-col items-center justify-center w-full max-w-[700px] px-4"
        variants={fadeUp(1.1)}
        initial="hidden"
        animate={controls}
      >
        <div className="relative w-full aspect-square">
          <Image src="/images/mix-up.png" alt="Mix it up graphic" fill className="object-contain" />
        </div>
      </motion.div>
    </section>
  );
};

export default MixUpSection;
