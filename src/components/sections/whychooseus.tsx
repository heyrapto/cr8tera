import Image from "next/image";

const WhyChooseUsSection = () => {
  const chooseData = [
    {
      id: 1,
      title: "Get the exposure you deserve",
      text: "Harness the power of AI-Powered workflow automation for your marketing, creative & business projects.",
    },
    {
      id: 2,
      title: "Get the exposure you deserve",
      text: "Harness the power of AI-Powered workflow automation for your marketing, creative & business projects.",
    },
  ];

  return (
    <section className="relative min-h-fit w-full flex flex-col justify-center text-white overflow-hidden px-[150px] pt-[450px] pb-[50px]">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/backgrounds/choose.svg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Centered Logo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pb-[250px]">
        <Image
          src="/images/whychoose.svg"
          alt="Why Choose Us Icon"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Creative Platform Tag */}
      <div className="absolute top-[100px] left-[150px] flex items-center gap-2 bg-[#0A0F1E]/80 border border-[#1E2E5C] px-4 py-2 rounded-full text-sm uppercase tracking-wide">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span>Creative Platform</span>
      </div>

      {/* Heading (Left-Aligned) */}
      <div className="mt-[300px] max-w-[600px] text-left">
        <h1 className="text-6xl font-extrabold leading-tight">
          Why Use <br /> cre8tera?
        </h1>
      </div>

      {/* Cards Section (Centered Below Logo) */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-16 z-10">
        {chooseData.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#FFFFFF1C]/90 border border-[#1B408F]/50 rounded-2xl p-8 w-full text-start backdrop-blur-md"
          >
            {/* Corner Decorations */}
            <Image
              src="/images/rectangle.svg"
              alt="corner"
              width={10}
              height={10}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/images/rectangle.svg"
              alt="corner"
              width={10}
              height={10}
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/images/rectangle.svg"
              alt="corner"
              width={10}
              height={10}
              className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-180"
            />
            <Image
              src="/images/rectangle.svg"
              alt="corner"
              width={10}
              height={10}
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-180"
            />

            <h3 className="text-2xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-base text-gray-300 leading-relaxed w-[400px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Ruler */}
      <div className="mt-12 flex justify-center">
        <Image
          src="/images/whychooseRuler.svg"
          alt="Ruler"
          width={250}
          height={100}
        />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;