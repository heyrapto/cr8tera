"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SummarySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false }); // 👈 replay every time

  useEffect(() => {
    if (inView) {
      controls.set("hidden"); // reset before replay
      controls.start("visible");
    } else {
      controls.set("hidden"); // reset when out of view
    }
  }, [inView, controls]);

  const sentence =
    "Test, generate, edit, & share content, even after it’s made. Your brand identity, your way.";
  const words = sentence.split(" ");

  const wordVariants: any = {
    hidden: { color: "#1e1e1e" },
    visible: (i: number) => ({
      color: "#ffffff",
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center text-center"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/summary.svg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="flex flex-col gap-10 relative mt-[100px]">
        {/* Word-by-word animated text */}
        <h1 className="text-[50px] w-[800px] font-semibold leading-14 flex flex-wrap justify-center">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate={controls}
              className="mx-1"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <p className="text-[24px] w-[800px]">
          Test, generate, edit, & share content, even after it’s made. Your brand identity, your way.
        </p>

        <div className="absolute top-0 left-0 right-0 mx-auto">
          <Image src="/images/ai.svg" alt="AI image" width={800} height={800} />
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
