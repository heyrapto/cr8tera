"use client";

import { useEffect, useState } from "react";

export const Ruler = () => {
    const [progress, setProgress] = useState(0);
    const [isLight, setIsLight] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const newProgress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        setProgress(newProgress);
  
        // Detect if we're in a light section
        const sections = document.querySelectorAll("section");
        let light = false;
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            const bg = window.getComputedStyle(section).backgroundColor;
            const rgb = bg.match(/\d+/g);
            if (rgb) {
              const brightness =
                (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
              light = brightness > 180;
            }
          }
        });
        setIsLight(light);
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[430px] h-[84px] rounded-full backdrop-blur-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-blue-500/10 z-9999">
      <div className="relative w-[380px] h-[2px] bg-white/40 rounded-full">
        {/* Active segment */}
        <div
          className={`"absolute left-0 top-0 h-full rounded-full transition-[width] duration-200 ease-linear" ${
            isLight ? "bg-linear-to-r from-black/90 to-gray-700" : "bg-linear-to-r from-white via-blue-300 to-blue-400"
          }`}
          style={{ width: `${progress * 100}%` }}
        />

        {/* Tick marks */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`absolute top-1/2 -translate-y-1/2 w-px h-[10px] ${
              isLight ? "bg-black/50" : "bg-white/70"
            }`}
            style={{ left: `${(i / 5) * 100}%` }}
          />
        ))}

        {/* Labels */}
        <div
          className={`absolute -top-6 left-0 w-full flex justify-between text-xs font-semibold tracking-widest transition-colors duration-500 ${
            isLight ? "text-black/70" : "text-white/80"
          }`}
        ><span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </div>
      </div>
    </div>
  );
};
