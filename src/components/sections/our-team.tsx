import Image from "next/image";

const OurTeamSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center py-[100px]">
        <div className="absolute inset-0 -z-10">
            <Image
                src="/images/backgrounds/exposure.svg"
                alt="Hero background"
                fill
                priority
                className="object-cover object-center opacity-100"
            />
        </div>
    </section>
  )
}

export default OurTeamSection;