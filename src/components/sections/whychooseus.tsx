import Image from "next/image";

const WhyChooseUsSection = () => {
  const chooseData = [
    {
      id: 1,
      title: "AI-Powered Creativity",
      text: "Our intelligent system helps you generate content faster, smarter, and tailored to your brand.",
    },
    {
      id: 2,
      title: "Scalable Performance",
      text: "Easily create and manage content across multiple channels with speed and precision.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden px-[150px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/choose.svg"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Top title */}
      <div className="relative flex flex-col w-full items-center text-left">
        <Image
          src="/images/whychoose.svg"
          alt="Why Choose Us"
          width={500}
          height={500}
          className="mb-8 "
        />

        <h1 className="text-6xl">Why Use <br /> cre8tera?</h1>
      </div>

      {/* Cards section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 mt-4 w-full">
        {chooseData.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#FFFFFF1C]/200 border-[#1B408F]/50 rounded-2xl p-10 w-full text-start shadow-[0_0_30px_rgba(27,64,143,0.4)] backdrop-blur-md"
          >
            {/* 4 corner rectangles */}
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

            {/* Text content */}
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-[24px] text-gray-300 leading-relaxed w-[400px]">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Bottom Ruler */}
      <div className="mt-12">
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
