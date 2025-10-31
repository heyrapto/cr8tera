"use client";

import { useEffect, useRef } from "react";
import { ReactNode } from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  speed?: number; // seconds for full loop
  direction?: "left" | "right";
  className?: string;
}

const InfiniteScroll = ({
  children,
  speed = 20,
  direction = "left",
  className = "",
}: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
  
    const scrollerWidth = scrollerRef.current.scrollWidth / 2;
    const animationName = `scroll-${direction}-${Date.now()}`; // Unique name
  
    const keyframes = `
      @keyframes ${animationName} {
        0% { transform: translateX(0); }
        100% { transform: translateX(${direction === "left" ? -scrollerWidth : scrollerWidth}px); }
      }
    `;
  
    const styleTag = document.createElement("style");
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);
  
    // Apply the animation
    if (scrollerRef.current) {
      scrollerRef.current.style.animation = `${animationName} ${speed}s linear infinite`;
    }
  
    return () => {
      document.head.removeChild(styleTag);
    };
  }, [direction, speed]);

  return (
    <div ref={containerRef} className={`relative w-screen overflow-hidden ${className}`}>
      <div
  ref={scrollerRef}
  className="flex w-fit"
>
        {/* Two identical sets for seamless loop */}
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
