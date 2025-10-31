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
      const next = (index + 1) % texts.length;
      setIndex(next);
      await controls.start({
        rotateX: next * -120, // flip on X axis
        transition: { duration: 1, ease: "easeInOut" },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [index, controls]);

  return (
    <div
      className="relative mt-2 w-[500px] h-[120px] md:w-[600px] md:h-[160px]"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Scene */}
      <motion.div
        animate={controls}
        initial={{ rotateX: 0 }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
        }}
        className="relative w-full h-full"
      >
        {texts.map((text, i) => (
          <div
            key={text}
            className="absolute w-full h-full flex items-center justify-center rounded-lg border border-white/50 bg-black/40 text-white text-[96px] font-bold"
            style={{
              transform: `rotateX(${i * 120}deg) translateZ(80px)`,
              backfaceVisibility: "hidden",
            }}
          >
            {/* Background */}
            <Image
              src="/images/story-bg.png"
              alt="Story background"
              fill
              className="object-cover rounded-lg -z-10"
            />

            {/* Text */}
            <h1 className="text-[96px] font-bold text-white z-10">{text}</h1>

            {/* Decorative Corners */}
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
                width={12}
                height={12}
                className={`absolute ${pos}`}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
