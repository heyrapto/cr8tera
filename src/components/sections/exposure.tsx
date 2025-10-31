"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ExposureSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false, // 👈 replay every time it's visible
  });

  useEffect(() => {
    if (inView) {
      // Reset and replay animation when section enters view
      controls.set("hidden");
      controls.start("visible");
    } else {
      // Reset back to hidden when leaving
      controls.set("hidden");
    }
  }, [inView, controls]);

  const exposureItems = [
    { image: "/images/chat.svg", title: "SOCIAL MEDIA", tag: ".01" },
    { image: "/images/chat.svg", title: "SOCIAL MEDIA", tag: ".02" },
    { image: "/images/chat.svg", title: "SOCIAL MEDIA", tag: ".03" },
    { image: "/images/chat.svg", title: "SOCIAL MEDIA", tag: ".04" },
    { image: "/images/chat.svg", title: "SOCIAL MEDIA", tag: ".05" },
  ];

  // Animation: cards expand one after another from center
  const cardVariants: any = {
    hidden: {
      scaleX: 0,
      opacity: 0,
      originX: 0.5,
    },
    visible: (i: number) => ({
      scaleX: 1,
      opacity: 1,
      originX: 0.5,
      transition: {
        duration: 0.4,
        delay: i * 0.15,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center text-center py-[100px]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/exposure.svg"
          alt="Exposure background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-10 items-start justify-start w-full px-[150px] max-w-[1440px]">
        <span className="text-8xl">Get better exposure</span>

        <div className="flex gap-16 items-center justify-between w-full">
          <Image
            src="/images/exposure-design.svg"
            alt="Exposure design"
            width={600}
            height={600}
          />

          {/* Animated Cards */}
          <div className="flex flex-col gap-4">
            {exposureItems.map((e, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                className="flex justify-between items-center border border-white rounded-[25px] p-5 origin-center"
                style={{
                  width: "600px",
                  transformOrigin: "center",
                }}
              >
                <div className="flex gap-3 items-center">
                  <Image src={e.image} alt={e.title} width={50} height={50} />
                  <span className="text-xl">{e.title}</span>
                </div>
                <p className="text-white">{e.tag}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExposureSection;
