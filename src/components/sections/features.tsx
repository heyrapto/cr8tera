"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FeaturesCard } from "../ui/features-card";
import { featuresData } from "@/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = cardsWrapperRef.current;

    if (!section || !wrapper) return;

    // Create a timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%", // controls scroll length
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate wrapper up by one viewport height
    tl.to(wrapper, {
      y: "-100vh",
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
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

      {/* Cards Wrapper */}
      <div
        ref={cardsWrapperRef}
        className="absolute inset-0 w-full max-w-[1400px] mx-auto flex flex-col justify-center"
      >
        {/* Row 1 */}
        <div className="flex w-full justify-between items-start px-[120px]">
          <div className="transform translate-y-[-40px] flex-1 flex justify-start">
            <FeaturesCard {...featuresData[0]} />
          </div>
          <div className="transform translate-y-[60px] flex-1 flex justify-end">
            <FeaturesCard {...featuresData[1]} />
          </div>
        </div>

        {/* Row 2 */}
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
