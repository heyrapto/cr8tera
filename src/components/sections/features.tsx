"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FeaturesCard } from "../ui/features-card";
import { featuresData } from "@/constants";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black pt-[100px]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
  <Image
    src="/images/backgrounds/features-bg.svg"
    alt="Features background"
    fill
    priority
    className="object-cover object-center opacity-80"
  />
</div>


      {/* Tag */}
      <div className="absolute top-[100px] left-[150px] z-10">
        <div className="flex items-center gap-2 bg-[#0A0F1E]/80 border border-[#1E2E5C] px-4 py-2 rounded-full text-sm uppercase tracking-wide">
          <div className="w-2 h-2 bg-white rounded-full" />
          <span>Creative Platform</span>
        </div>
      </div>

      {/* Cards wrapper */}
      <div
        ref={cardsWrapperRef}
        className="absolute inset-0 w-full max-w-[1400px] mx-auto flex flex-col justify-center"
      >
        {/* Row 1 — visible */}
        <div className="flex w-full justify-between items-start px-[120px]">
          <div className="transform translate-y-[-40px] flex-1 flex justify-start">
            <FeaturesCard {...featuresData[0]} />
          </div>
          <div className="transform translate-y-[60px] flex-1 flex justify-end">
            <FeaturesCard {...featuresData[1]} />
          </div>
        </div>

        {/* Row 2 — positioned below viewport, hidden by overflow */}
        <div
          className="absolute left-0 w-full flex justify-between items-start px-[180px] gap-20"
          style={{ top: "100vh" }}
        >
          <div className="transform translate-y-[40px] flex-1 flex justify-start">
            <FeaturesCard {...featuresData[2]} />
          </div>
          <div className="relative transform translate-y-[-20px] flex-1 flex justify-end">
            <FeaturesCard {...featuresData[3]} />
            {/* Try Demo Button */}
            <button className="absolute right-[50px] bottom-[-80px] bg-[#3B6AFF] hover:bg-[#335AD9] text-white px-6 py-3 rounded-full text-sm font-medium transition">
              Try Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
