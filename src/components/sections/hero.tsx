import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

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
                    <span className="text-lg md:text-4xl mb-2">your</span>
                    <div className="relative mt-2 w-[500px] h-[120px] md:w-[600px] md:h-[160px] rounded-lg border border-white/50 flex items-center justify-center text-center">
                        {/* Background Image */}
                        <Image
                            src="/images/story-bg.png"
                            alt="Story background"
                            fill
                            className="object-cover rounded-lg -z-10"
                        />

                        {/* Centered Text */}
                        <h1 className="text-[96px] font-bold text-white z-10">Story</h1>

                        {/* Corner Decorations */}
                        <Image
                            src="/images/rectangle.svg"
                            alt="corner"
                            width={12}
                            height={12}
                            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                        />
                        <Image
                            src="/images/rectangle.svg"
                            alt="corner"
                            width={12}
                            height={12}
                            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
                        />
                        <Image
                            src="/images/rectangle.svg"
                            alt="corner"
                            width={12}
                            height={12}
                            className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-180"
                        />
                        <Image
                            src="/images/rectangle.svg"
                            alt="corner"
                            width={12}
                            height={12}
                            className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-180"
                        />
                    </div>

                </div>

                {/* Try Demo Button */}
                <div className="mt-6 relative p-2 rounded-[20px] bg-linear-to-r from-[#1B408F] to-[#70FDFD] font-semibold text-white shadow-lg hover:opacity-90 ">
                    <Button
                        icon={Icons.WhiteButtonEllipse}
                        className="relative px-8 py-2 rounded-[15px] bg-linear-to-r from-[#5B7DCF] to-[#D2E5F5] font-semibold text-white shadow-lg hover:opacity-90"
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

                {/* Bottom Texts */}
                <div className="absolute left-10 top-1/2 translate-y-[50%] max-w-xs text-left text-sm leading-relaxed md:text-[1.3rem] font-semibold">
                    <p>
                        Welcome to create8
                        <br />
                        A new era of AI that puts you in the driver’s seat
                    </p>
                </div>

                <div className="absolute right-10 top-1/2 translate-y-[50%] max-w-sm text-left text-sm leading-relaxed md:text-[1.3rem]">
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