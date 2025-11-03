"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { chooseData } from "@/constants";

const WhyChooseUsSection = () => {
  const cardVariants: any = {
    hidden: { scale: 0.8, opacity: 0, y: 40 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.25, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen z-12 w-full flex flex-col justify-center text-white overflow-hidden px-[150px] pb-[50px] bg-black">
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

      <div className="absolute inset-0 flex items-center justify-center -z-10 pb-[250px]">
        <div className="animate-spin-slow will-change-transform">
          <Image
            src="/images/whychoose.svg"
            alt="Why Choose Us Icon"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      {/* Creative Platform Tag */}
      <div className="absolute top-[100px] left-[150px] flex items-center gap-2 bg-[#0A0F1E]/80 border border-[#1E2E5C] px-4 py-2 rounded-full text-sm uppercase tracking-wide">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span>Creative Platform</span>
      </div>

      {/* Heading */}
      <div className="mt-[550px] max-w-[600px] text-left">
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
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="relative bg-[#FFFFFF1C]/90 border border-[#1B408F]/50 p-8 w-full text-start backdrop-blur-md origin-center"
          >
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
            <p className="text-base text-gray-300 leading-relaxed w-[400px]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;