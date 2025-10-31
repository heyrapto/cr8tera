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
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsWrapperRef.current) return;
  
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".feature-card");
      const totalSteps = cards.length - 1;
  
      // Reset initial vertical stacking
      gsap.set(cards, { yPercent: (i) => i * 50 });
  
      const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * (totalSteps + 0.5)}`,
            scrub: true, // Change from 0.6 to true (instant response)
            pin: true,
            anticipatePin: 1,
            snap: {
              snapTo: (progress) => {
                const snapPoints = Array.from(
                  { length: totalSteps + 1 },
                  (_, i) => i / totalSteps
                );
                return gsap.utils.snap(snapPoints, progress);
              },
              duration: 0.4,
              ease: "power2.inOut",
            },
          },
      });
  
      // Slide each card upward smoothly (no fade)
      cards.forEach((_, i) => {
        if (i < totalSteps) {
          tl.to(cards, {
            yPercent: `-=${50}`,
            ease: "power2.inOut",
            duration: 1,
          });
        }
      });
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black pt-[100px] -mt-[100vh]"
    >
      {/* Background */}
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

      {/* Cards wrapper */}
      <div
        ref={cardsWrapperRef}
        className="relative grid grid-cols-2 items-center justify-center gap-2 pt-[350px]"
      >
        {featuresData.slice(0, 4).map((data, i) => (
          <div
            key={i}
            className={`feature-card w-full flex ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <FeaturesCard {...data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;