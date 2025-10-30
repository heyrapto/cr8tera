import Image from "next/image";

const FeaturesSection = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center py-[100px] px-[150px]">
        <div className="absolute inset-0 -z-10">
            <Image
                src="/images/backgrounds/exposure.svg"
                alt="Hero background"
                fill
                priority
                className="object-cover object-center opacity-100"
            />
        </div>

        <div className="absolute top-[100px] left-[150px] flex items-center gap-2 bg-[#0A0F1E]/80 border border-[#1E2E5C] px-4 py-2 rounded-full text-sm uppercase tracking-wide">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span>Creative Platform</span>
      </div>
      </section>
    )
  }
  
export default FeaturesSection;