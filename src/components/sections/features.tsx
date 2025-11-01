"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FeaturesCard } from "../ui/features-card";
import { featuresData } from "@/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = cardsWrapperRef.current;
    if (!section || !wrapper) return;

    // kill existing triggers before creating new ones
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + window.innerHeight * 1.2, // 👈 scrolls just past 1 screen height
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Moves wrapper up exactly one viewport height
    tl.to(wrapper, {
      y: "-100vh",
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
        <div className="flex flex-col gap-12 items-center absolute right-[50px] bottom-[-80px]">
          <div
            className="overflow-hidden flex items-center justify-center"
            style={{
              borderRadius: "9999px",
            }}
          >
            <Button
              variant="primary"
              radius="full"
              icon={Icons.BlueButtonEllipse}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <span
              >
                Try Demo
              </span>
            </Button>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
