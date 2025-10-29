import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/heroBg.svg" 
          alt="Hero background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Title */}
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold leading-tight md:text-8xl">Create</h1>
          <p className="text-lg md:text-xl mt-1">your</p>
          <div className="relative mt-2">
            {/* Background behind “story” */}
            <Image
              src="/images/backgrounds/story-bg.svg"
              alt="Story background"
              width={500}
              height={120}
              className="inset-0 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Try Demo Button */}
        <div className="mt-6">
          <Button
            className="relative px-8 py-3 rounded-full bg-linear-to-r from-[#1B408F] to-[#70FDFD] font-semibold text-white shadow-lg hover:opacity-90"
          >
            Try Demo
          </Button>
        </div>

        {/* Ruler + Cursor */}
        <div className="relative mt-6">
          <Image
            src="/images/ruler.svg"
            alt="Ruler"
            width={300}
            height={60}
            className="mx-auto"
          />
          <Image
            src="/images/cursor.svg"
            alt="Cursor"
            width={30}
            height={30}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]"
          />
        </div>
      </div>

      {/* Bottom Texts */}
      <div className="absolute bottom-10 left-10 max-w-sm text-left text-sm leading-relaxed md:text-base">
        <p>
          Welcome to create8
          <br />
          A new era of AI that puts you in the driver’s seat
        </p>
      </div>

      <div className="absolute bottom-10 right-10 max-w-md text-right text-sm leading-relaxed md:text-base">
        <p>
          Our mission is to enhance your online presence, your brand story, and
          elevate your visibility. We accomplish this by prioritizing quality
          content generation, multichannel formats, scalability and speed.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;