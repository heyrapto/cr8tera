"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const WhyChooseUsSection = () => {
  const chooseData = [
    {
      id: 1,
      title: "Get the exposure you deserve",
      text: "Harness the power of AI-Powered workflow automation for your marketing, creative & business projects.",
    },
    {
      id: 2,
      title: "Build smarter, not harder",
      text: "Use next-gen AI systems to accelerate your creative process and make better decisions faster.",
    },
  ];

  // intersection + animation controls
  const controls = useAnimation();
  const logoControls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      logoControls.start("visible");
    }
  }, [inView, controls, logoControls]);

  const cardVariants: any = {
    hidden: { scaleX: 0.7, opacity: 0 },
    visible: (i: number) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.25 * i,
        ease: [0.25, 1, 0.3, 1],
      },
    }),
  };

  const logoVariants: any = {
    hidden: { rotateX: 0 },
    visible: {
      rotateY: [0, 360],
      transition: {
        duration: 12,
        ease: "linear",
        repeat: Infinity, 
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-fit w-full flex flex-col justify-center text-white overflow-hidden px-[150px] pt-[450px] pb-[50px]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/backgrounds/choose.svg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Centered Rotating Logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center -z-10 pb-[250px]"
        variants={logoVariants}
        initial="hidden"
        animate={logoControls}
        style={{ transformOrigin: "center", transformStyle: "preserve-3d" }}
      >
        <Image
          src="/images/whychoose.svg"
          alt="Why Choose Us Icon"
          width={500}
          height={500}
          className="object-contain"
        />
      </motion.div>

      {/* Creative Platform Tag */}
      <div className="absolute top-[100px] left-[150px] flex items-center gap-2 bg-[#0A0F1E]/80 border border-[#1E2E5C] px-4 py-2 rounded-full text-sm uppercase tracking-wide">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span>Creative Platform</span>
      </div>

      {/* Heading */}
      <div className="mt-[300px] max-w-[600px] text-left">
        <h1 className="text-6xl font-extrabold leading-tight">
          Why Use <br /> cre8tera?
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-16 z-10">
        {chooseData.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="relative bg-[#FFFFFF1C]/90 border border-[#1B408F]/50 rounded-2xl p-8 w-full text-start backdrop-blur-md origin-center"
          >
            {/* Corner rectangles */}
            {[
              "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
              "top-0 right-0 translate-x-1/2 -translate-y-1/2",
              "bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-180",
              "bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-180",
            ].map((pos, j) => (
              <Image
                key={j}
                src="/images/rectangle.svg"
                alt="corner"
                width={10}
                height={10}
                className={`absolute ${pos}`}
              />
            ))}

            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-base text-gray-300 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom ruler */}
      <div className="mt-12 flex justify-center">
        <Image
          src="/images/whychooseRuler.svg"
          alt="Ruler"
          width={250}
          height={100}
        />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
