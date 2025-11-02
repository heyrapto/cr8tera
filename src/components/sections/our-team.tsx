"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const teamData = [
  { id: 1, title: "Harness the power of AI-Powered workflow", svg: "/images/vectors/team/1.svg", img: "/images/team-1.png" },
  { id: 2, title: "Harness the power of AI-Powered workflow", svg: null, img: "/images/team-2.png" },
  { id: 3, title: "Harness the power of AI-Powered workflow", svg: "/images/vectors/team/3.svg", img: "/images/team-3.png" },
];

export default function OurTeamSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true, // ✅ only trigger once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const middleCardVariants: any = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative z-50 min-h-fit flex flex-col items-center justify-center text-center bg-transparent -mt-40"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
       <div className="bg-white"></div>
      </div>

      <h2 className="text-white text-4xl md:text-5xl font-bold mb-16 absolute bottom-20">Our Team</h2>

      <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-12 w-full max-w-6xl px-6 absolute -top-50 overflow-hidden">
        {teamData.map((member, index) => {
          const isMiddle = index === 1;

          const CardContent = (
            <>
              {member.svg && (
                <Image
                  src={member.svg}
                  alt="Team card border"
                  fill
                  className="object-contain opacity-90 pointer-events-none select-none"
                />
              )}

              <div className="absolute inset-0 flex items-center justify-center z-10 w-[250px]">
                <Image
                  src={member.img}
                  alt={member.title}
                  fill
                  className="object-contain opacity-90"
                />
              </div>

              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${
                  member.svg ? "w-[90%]" : "w-full"
                } bg-black/70 rounded-xl py-3 px-5 text-white text-sm font-medium z-20`}
              >
                {member.title}
              </div>
            </>
          );

          return isMiddle ? (
            <motion.div
              key={member.id}
              variants={middleCardVariants}
              initial="hidden"
              animate={controls}
              className={`relative group w-full max-w-sm aspect-3/4 flex items-center justify-center ${
                member.svg
                  ? ""
                  : "rounded-[20px] border border-white backdrop-blur-sm bg-transparent h-[350px]"
              }`}
            >
              {CardContent}
            </motion.div>
          ) : (
            <div
              key={member.id}
              className={`relative group w-full max-w-sm aspect-3/4 flex items-center justify-center ${
                member.svg
                  ? ""
                  : "rounded-[20px] border border-white backdrop-blur-sm bg-transparent h-[350px]"
              }`}
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
