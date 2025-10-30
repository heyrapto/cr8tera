"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeaturesCard } from "../ui/features-card";
import { featuresData } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftTopRef = useRef<HTMLDivElement>(null);
  const leftBottomRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([leftTopRef.current, rightTopRef.current], { yPercent: 0, zIndex: 2 });
      gsap.set([leftBottomRef.current, rightBottomRef.current], { yPercent: 100, zIndex: 1, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate top cards out (up) and new ones in (from below)
      tl.to(
        [leftTopRef.current, rightTopRef.current],
        {
          yPercent: -100,
          ease: "power2.inOut",
          duration: 1,
        },
        0
      );

      tl.to(
        [leftBottomRef.current, rightBottomRef.current],
        {
          yPercent: 0,
          opacity: 1,
          ease: "power2.inOut",
          duration: 1,
        },
        0
      );

      // Hide the top ones once fully moved out to prevent ghost overlap
      tl.set([leftTopRef.current, rightTopRef.current], { opacity: 0 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background stays static */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/features-bg.svg"
          alt="Features background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Tag */}
      <div className="absolute top-[100px] left-[150px] z-10">
        <div className="flex items-center gap-2 bg-[#0A0F1E]/80 border border-[#1E2E5C] px-4 py-2 rounded-full text-sm uppercase tracking-wide">
          <div className="w-2 h-2 bg-white rounded-full" />
          <span>Creative Platform</span>
        </div>
      </div>

      {/* Cards container */}
      <div className="relative w-full max-w-[1400px] h-full px-[150px]">
        {/* Left cards */}
        <div ref={leftTopRef} className="absolute left-0 top-1/2 -translate-y-1/2">
          <FeaturesCard {...featuresData[0]} />
        </div>
        <div ref={leftBottomRef} className="absolute left-0 top-1/2 -translate-y-1/2">
          <FeaturesCard {...featuresData[2]} />
        </div>

        {/* Right cards */}
        <div ref={rightTopRef} className="absolute right-0 top-1/2 -translate-y-1/2">
          <FeaturesCard {...featuresData[1]} />
        </div>
        <div ref={rightBottomRef} className="absolute right-0 top-1/2 -translate-y-1/2">
          <FeaturesCard {...featuresData[3]} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
