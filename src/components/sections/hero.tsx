import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { AnimatedCard } from "../animations/animated-card-text";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
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
            <div className="flex flex-col items-center gap-4 text-center relative max-w-[1440px] w-full">
                {/* Title */}
                <div className="flex flex-col items-center">
                    <h1 className="text-6xl font-bold leading-tight md:text-8xl">Create</h1>
                    <span className="text-lg md:text-4xl mb-10">your</span>
                    {/* animated card */}
                    <AnimatedCard />
                </div>

                {/* Try Demo Button */}
                <div className="mt-24 relative rounded-[20px] bg-linear-to-r from-[#1B408F] to-[#70FDFD] font-semibold text-white shadow-lg inline-flex justify-start py-2 items-start px-2">
                    <Button
                        icon={<Icons.WhiteButtonEllipse />}
                        isAnimated
                        className="relative px-8 rounded-[15px] font-semibold text-white"
                    >
                        Try Demo
                    </Button>
                </div>

                {/* Ruler + Cursor */}
                {/* <div className="relative mt-6">
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
                </div> */}

                {/* Bottom Texts */}
                <div className="absolute left-10 top-1/2 translate-y-[60%] max-w-xs text-left text-sm leading-relaxed md:text-[1.3rem] font-semibold">
                    <p>
                        Welcome to create8
                        <br />
                        A new era of AI that puts you in the driver’s seat
                    </p>
                </div>

                <div className="absolute right-10 top-1/2 translate-y-[70%] max-w-sm text-left text-sm leading-relaxed md:text-[1.3rem]">
                    <p>
                        Our mission is to enhance your online presence, your brand story, and
                        elevate your visibility. We accomplish this by prioritizing quality
                        content generation, multichannel formats, scalability and speed.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;