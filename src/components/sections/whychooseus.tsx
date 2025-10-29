import Image from "next/image";

const WhyChooseUsSection = () => {
    const chooseData = [];
  return (
    <section className="relative min-h-screen flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10">
            <Image
                src="/images/backgrounds/choose.svg"
                alt="Hero background"
                fill
                priority
                className="object-cover object-center opacity-100"
            />
        </div>

        <div className="flex flex-col relative items-center">
            <Image 
            src="/images/whychoose.svg"
            alt="Why choose img"
            width={800}
            height={800}
            />

            {/* For the rectangles on all four sides on the two cards, the source is /images/reactangle.svg */}
            <div></div>

            <Image 
            src="/images/whychooseRuler.svg"
            alt="Why choose img"
            width={200}
            height={200}
            />
        </div>
    </section>
  )
}

export default WhyChooseUsSection;