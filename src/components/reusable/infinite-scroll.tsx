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

    const containerWidth = containerRef.current.offsetWidth;
    const scrollerWidth = scrollerRef.current.scrollWidth / 2; // half because we duplicated

    // Use real width for perfect looping
    const keyframes = `
      @keyframes scroll-${direction} {
        0% { transform: translateX(0); }
        100% { transform: translateX(${direction === "left" ? -scrollerWidth : scrollerWidth}px); }
      }
    `;

    // Inject dynamic keyframes
    const styleTag = document.createElement("style");
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [direction]);

  return (
    <div ref={containerRef} className={`relative w-screen overflow-hidden ${className}`}>
      <div
        ref={scrollerRef}
        className="flex w-fit"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {/* Two identical sets for seamless loop */}
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
