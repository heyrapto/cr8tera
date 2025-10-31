import Image from "next/image";
import InfiniteScroll from "../reusable/infinite-scroll";

const TestimonialsSection = () => {
    const testimonialsData = [
        { title: "Name", desc: "May Bless" },
        { title: "Name", desc: "May Bless" },
        { title: "Name", desc: "May Bless" },
        { title: "Name", desc: "May Bless" },
        { title: "Name", desc: "May Bless" },
        { title: "Name", desc: "May Bless" },
        { title: "Name", desc: "May Bless" },
    ];

    return (
        <section className="relative h-fit flex flex-col text-center py-[100px] text-white overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/backgrounds/testimonialsBg.svg"
                    alt="Testimonials background"
                    fill
                    priority
                    className="object-cover object-center opacity-100"
                />
            </div>

            <div className="flex flex-col gap-8">
                {/* Top ruler */}
                <Image
                    src="/images/ctaRuler.svg"
                    alt="Ruler"
                    width={300}
                    height={60}
                    className="mx-auto"
                />
                <InfiniteScroll speed={30} direction="left" className=" py-4">
                    {["Ready to connect?", "Say Hello", "Contact Us", "Ready to connect?", "Say Hello", "Ready to connect?", "Say Hello", "Contact Us", "Ready to connect?", "Say Hello", "Ready to connect?", "Say Hello", "Contact Us", "Ready to connect?", "Say Hello", "Ready to connect?", "Say Hello", "Contact Us", "Ready to connect?", "Say Hello"].map((text, i) => (
                        <div key={i} className="flex items-center gap-6 px-6">
                            <h1 className="text-white/70 text-5xl font-light whitespace-nowrap">{text}</h1>
                            {/* Pause icon separator */}
                            <Image
                                src="/images/rectangle.svg"
                                alt="corner"
                                width={10}
                                height={10}
                                className={`flex`}
                            />
                        </div>
                    ))}
                </InfiniteScroll>

                {/* Testimonials */}
                <div className="flex flex-col gap-10 w-full mx-auto px-[120px] md:px-[180px]">
                    {testimonialsData.map((t, i) => (
                        <div key={i} className="flex flex-col gap-4 items-start w-full">
                            {/* Text */}
                            <div>
                                <p className="font-semibold text-[24px]">{t.title}</p>
                                <span className="text-gray-300">{t.desc}</span>
                            </div>

                            {/* FULL-WIDTH LINE — goes beyond container */}
                            <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 h-[30px]">
                                <Image
                                    src="/images/line.svg"
                                    alt="divider line"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;