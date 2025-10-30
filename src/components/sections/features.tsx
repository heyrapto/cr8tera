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
      // initial states
      gsap.set([leftTopRef.current, rightTopRef.current], {
        opacity: 1,
        yPercent: 0,
      });
      gsap.set([leftBottomRef.current, rightBottomRef.current], {
        opacity: 0,
        yPercent: 100,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000", // controls scroll length
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // top pair move up & fade out
      tl.to([leftTopRef.current, rightTopRef.current], {
        yPercent: -100,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });

      // bottom pair move up & fade in
      tl.to(
        [leftBottomRef.current, rightBottomRef.current],
        {
          yPercent: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        },
        "<" // overlap
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Static Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/features-bg.svg"
          alt="Features background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Floating cards area */}
      <div className="relative flex justify-between items-center w-full max-w-[1400px] px-[150px]">
        {/* Left cards */}
        <div
          ref={leftTopRef}
          className="absolute left-0 top-1/2 -translate-y-1/2"
        >
          <FeaturesCard {...featuresData[0]} />
        </div>
        <div
          ref={leftBottomRef}
          className="absolute left-0 top-1/2 -translate-y-1/2"
        >
          <FeaturesCard {...featuresData[2]} />
        </div>

        {/* Right cards */}
        <div
          ref={rightTopRef}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          <FeaturesCard {...featuresData[1]} />
        </div>
        <div
          ref={rightBottomRef}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          <FeaturesCard {...featuresData[3]} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
