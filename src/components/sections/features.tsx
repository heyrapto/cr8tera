"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FeaturesCard } from "../ui/features-card";
import { featuresData } from "@/constants";

const FeaturesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // First two cards (0, 1) - move up and fade out
    const card0Y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
    const card0Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
    
    const card1Y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
    const card1Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

    // Second two cards (2, 3) - move up from below and fade in
    const card2Y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);
    const card2Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
    
    const card3Y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);
    const card3Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setScrollProgress(latest);
        });
    }, [scrollYProgress]);

    return (
        <section 
            ref={sectionRef}
            className="relative min-h-screen flex flex-col items-center justify-start py-[100px] px-[150px] overflow-hidden"
        >
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/backgrounds/features-bg.svg"
                    alt="Hero background"
                    fill
                    priority
                    className="object-contain object-center opacity-100"
                />
            </div>

            <div className="absolute top-[100px] left-[150px] flex items-center gap-2 bg-[#0A0F1E]/80 border border-[#1E2E5C] px-4 py-2 rounded-full text-sm uppercase tracking-wide z-10">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Creative Platform</span>
            </div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                <div className="relative w-full max-w-[1400px]">
                    {/* Left cards */}
                    <motion.div 
                        className="absolute left-0 top-1/2 -translate-y-1/2"
                        style={{ y: card0Y, opacity: card0Opacity }}
                    >
                        <FeaturesCard {...featuresData[0]} />
                    </motion.div>
                    
                    <motion.div 
                        className="absolute left-0 top-1/2 -translate-y-1/2"
                        style={{ y: card2Y, opacity: card2Opacity }}
                    >
                        <FeaturesCard {...featuresData[2]} />
                    </motion.div>

                    {/* Right cards */}
                    <motion.div 
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                        style={{ y: card1Y, opacity: card1Opacity }}
                    >
                        <FeaturesCard {...featuresData[1]} />
                    </motion.div>
                    
                    <motion.div 
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                        style={{ y: card3Y, opacity: card3Opacity }}
                    >
                        <FeaturesCard {...featuresData[3]} />
                    </motion.div>
                </div>
            </div>

            {/* Demo button */}
            {scrollProgress > 0.7 && (
                <motion.div 
                    className="absolute bottom-32 right-[150px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                        Try Demo
                    </button>
                </motion.div>
            )}

            {/* Progress indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {[0, 1].map((index) => (
                    <div
                        key={index}
                        className="w-12 h-1 bg-white/20 rounded-full overflow-hidden"
                    >
                        <motion.div
                            className="h-full bg-cyan-400"
                            style={{
                                width: useTransform(
                                    scrollYProgress,
                                    [index * 0.5, (index + 1) * 0.5],
                                    ["0%", "100%"]
                                )
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;