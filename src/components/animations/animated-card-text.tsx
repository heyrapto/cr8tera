"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const texts = ["content", "story", "world"];

export const AnimatedCard = () => {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      // Animate flip up
      await controls.start({
        rotateX: 90,
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      // Change text after halfway
      setIndex((prev) => (prev + 1) % texts.length);

      // Rotate back down
      await controls.start({
        rotateX: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="relative mt-2 w-[500px] h-[120px] md:w-[600px] md:h-[160px]" style={{ perspective: "1000px" }}>
      <motion.div
        animate={controls}
        initial={{ rotateX: 0 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-lg border border-white/50 flex items-center justify-center text-center bg-black/20"
      >
        {/* Background */}
        <Image
          src="/images/story-bg.png"
          alt="Story background"
          fill
          className="object-cover rounded-lg -z-10"
        />

        {/* Animated Text */}
        <motion.h1
          key={texts[index]}
          className="text-[96px] font-bold text-white z-10"
        >
          {texts[index]}
        </motion.h1>

        {/* Corners */}
        {["top-0 left-0 -translate-x-1/2 -translate-y-1/2",
          "top-0 right-0 translate-x-1/2 -translate-y-1/2",
          "bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-180",
          "bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-180"
        ].map((pos, i) => (
          <Image
            key={i}
            src="/images/rectangle.svg"
            alt="corner"
            width={12}
            height={12}
            className={`absolute ${pos}`}
          />
        ))}
      </motion.div>
    </div>
  );
};
