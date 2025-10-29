import Image from "next/image";

const TestimonialsSection = () => {
    const testimonialsData = [
        {
            title: "Name",
            desc: "May Bless"
        },
        {
            title: "Name",
            desc: "May Bless"
        },
        {
            title: "Name",
            desc: "May Bless"
        },
        {
           title: "Name",
            desc: "May Bless"
        },
        {
           title: "Name",
            desc: "May Bless"
        },
        {
            title: "Name",
            desc: "May Bless"
        },
        {
           title: "Name",
            desc: "May Bless"
        },
    ]
    return (
        <section className="relative h-fit flex flex-col text-center py-[100px]">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/backgrounds/testimonialsBg.svg"
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover object-center opacity-100"
                />
            </div>

            <div className="flex flex-col gap-4">
                <Image
                    src="/images/ctaRuler.svg"
                    alt="Ruler"
                    width={300}
                    height={60}
                    className="mx-auto"
                />

                <div></div>

                <div className="flex flex-col gap-10 w-full max-w-[1440px] mx-auto">
                    {testimonialsData.map((t, i) => (
                        <div key={i} className="flex flex-col gap-4 items-start w-full">
                            <div className="">
                            <p className="font-semibold text-[24px]">{t.title}</p>
                            <span>{t.desc}</span>
                            </div>

                            <Image
                            src="/images/line.svg"
                            alt="lines"
                            fill
                            className="block"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;