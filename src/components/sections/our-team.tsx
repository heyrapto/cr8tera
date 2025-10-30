"use client";

import Image from "next/image";

const teamData = [
  { id: 1, title: "Harness the power of AI-Powered workflow", svg: "/images/vectors/team/1.svg", img: "/images/team-1.png" },
  { id: 2, title: "Harness the power of AI-Powered workflow", svg: null, img: "/images/team-2.png" }, 
  { id: 3, title: "Harness the power of AI-Powered workflow", svg: "/images/vectors/team/3.svg", img: "/images/team-3.png" },
];

export default function OurTeamSection() {
  return (
    <section className="relative min-h-fit flex flex-col items-center justify-center py-28 text-center bg-transparent">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/features-bg.svg"
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-100"
        />
      </div>

      <h2 className="text-white text-4xl md:text-5xl font-bold mb-16">Our Team</h2>

      <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-12 w-full max-w-6xl px-6 absolute top-[150px] overflow-hidden">
        {teamData.map((member, index) => (
          <div
            key={member.id}
            className={`relative group w-full max-w-sm aspect-3/4 flex items-center justify-center ${
              member.svg
                ? ""
                : "rounded-[20px] border border-white backdrop-blur-sm bg-transparent h-[350px]"
            }`}
          >
            {/* SVG border for the sides */}
            {member.svg && (
              <Image
                src={member.svg}
                alt="Team card border"
                fill
                className="object-contain opacity-90 pointer-events-none select-none"
              />
            )}

            {/* Team image inside */}
            <div className="absolute inset-0 flex items-center justify-center z-10 w-[250px]">
              <Image
                src={member.img}
                alt={member.title}
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full bg-black/70 rounded-xl py-3 px-5 text-white text-sm font-medium z-20">
              {member.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}