import Image from "next/image";
import React from "react";

interface FeaturedCardProps {
  tagline: {
    value: {
      primaryTagline: string;
      secondaryTagline: string;
    };
    isSlanted: boolean;
  };
  title: string;
  desc: string;
  style?: React.CSSProperties;
  size: {
    width: string;
  };
  hasBackSide: boolean;
}

export const FeaturesCard: React.FC<FeaturedCardProps> = ({
  tagline,
  title,
  desc,
  style,
  size,
  hasBackSide,
}) => {
  return (
    <div
      className={`flip-card ${hasBackSide ? "has-back" : ""}`}
      style={{ width: size.width, height: "350px" }}
    >
      <div className="flip-card-inner cursor-pointer">
        {/* FRONT SIDE */}
        <div className="flip-card-front flex flex-col justify-between border border-white/50 backdrop-blur-md relative overflow-hidden rounded-2xl items-start text-start p-[20px]">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/backgrounds/feature-card-bg.svg"
              alt="Card background"
              fill
              priority
              className="object-cover object-center opacity-100"
            />
          </div>

          {/* Tagline */}
          <div className="relative z-10">
            {tagline.isSlanted ? (
              <h3 className="font-light mb-2 flex gap-4">
                <span className="text-cyan-400 text-3xl">{tagline.value.primaryTagline}</span>{" "}
                <span className="text-white text-[1rem] w-[300px]">{tagline.value.secondaryTagline}</span>
              </h3>
            ) : (
              <h3 className="font-light mb-2 flex gap-4 items-center">
                <span className="text-cyan-400 text-3xl">{tagline.value.primaryTagline}</span>{" "}
                <span className="text-white">{tagline.value.secondaryTagline}</span>
              </h3>
            )}
          </div>

          {/* Title + Description */}
          <div className="relative z-10 max-w-[300px]">
            <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
          </div>
        </div>

        {/* BACK SIDE */}
        {hasBackSide && (
          <div className="flip-card-back flex flex-col justify-start items-start border border-white/50 backdrop-blur-md rounded-2xl text-center p-[20px] bg-transparent">
            <div className="relative z-10">
              {tagline.isSlanted ? (
                <h3 className="font-light mb-2 flex gap-4">
                  <span className="text-cyan-400 text-3xl">{tagline.value.primaryTagline}</span>{" "}
                  <span className="text-white text-[1rem] w-[300px]">{tagline.value.secondaryTagline}</span>
                </h3>
              ) : (
                <h3 className="font-light mb-2 flex gap-4 items-center">
                  <span className="text-cyan-400 text-3xl">{tagline.value.primaryTagline}</span>{" "}
                  <span className="text-white">{tagline.value.secondaryTagline}</span>
                </h3>
              )}
            </div>

            <Image
            src="/images/project-timeline.svg"
            alt="Project tl"
            fill
            className="w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};
