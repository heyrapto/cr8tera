"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { FeaturesCard } from "../ui/features-card";
import { featuresData } from "@/constants";

const FeaturesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            
            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            
            const scrollStart = rect.top;
            const scrollRange = sectionHeight;
            const progress = Math.max(0, Math.min(1, (windowHeight - scrollStart) / scrollRange));
            
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getCardStyle = (index: number): React.CSSProperties => {
        const progressPerCard = 1 / featuresData.length;
        const cardProgress = (scrollProgress - index * progressPerCard) / progressPerCard;
        const clampedProgress = Math.max(0, Math.min(1, cardProgress));
        
        const translateY = -clampedProgress * 120;
        const opacity = 1 - (clampedProgress * 0.6);
        
        return {
            transform: `translateY(${translateY}vh)`,
            opacity: opacity,
            transition: 'none'
        };
    };

    return (
        <section 
            ref={sectionRef}
            className="relative min-h-[300vh] flex flex-col items-center justify-start text-center py-[100px] px-[150px]"
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

            <div className="absolute top-[100px] left-[150px] flex items-center gap-2 bg-[#0A0F1E]/80 border border-[#1E2E5C] px-4 py-2 rounded-full text-sm uppercase tracking-wide">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Creative Platform</span>
            </div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                <div className="relative w-full max-w-[1200px] h-[500px]">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={getCardStyle(index)}
                        >
                            <FeaturesCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>

            {scrollProgress > 0.8 && (
                <div 
                    className="fixed bottom-24 right-24 z-50 transition-opacity duration-500"
                    style={{ opacity: (scrollProgress - 0.8) / 0.2 }}
                >
                    <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                        Try Demo
                    </button>
                </div>
            )}

            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {featuresData.map((_, index) => (
                    <div
                        key={index}
                        className="w-12 h-1 bg-white/20 rounded-full overflow-hidden"
                    >
                        <div
                            className="h-full bg-cyan-400 transition-all duration-300"
                            style={{
                                width: `${Math.max(0, Math.min(1, (scrollProgress * featuresData.length) - index)) * 100}%`
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;