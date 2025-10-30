"use client";

import Image from "next/image";

const MixUpSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-start text-start bg-white rounded-t-[60px] pt-64 pb-32 mt-48 overflow-hidden -z-10">
      {/* White background (seamless transition) */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Mix it up
        </h2>
        <h3 className="text-lg md:text-xl text-gray-700 font-semibold mb-4">
          All the best Ai tools to create what you really want to see in the world
        </h3>
        <p className="text-gray-500 leading-relaxed">
          All the best Ai tools to create what you really want to see in the world.
          All the best Ai tools to create what you really want to see in the world.
          All the best Ai tools to create what you really want to see in the world.
          All the best Ai tools to create what you really want to see in the world.
        </p>
      </div>

      {/* Graphic Area */}
      <div className="relative z-10 mt-24 flex items-center justify-center w-full max-w-4xl px-4">
        {/* Replace this Image with your actual Mix-up graphic */}
        <div className="relative w-full max-w-lg aspect-square">
          <Image
            src="/images/mix-up.svg" 
            alt="Mix it up graphic"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MixUpSection;