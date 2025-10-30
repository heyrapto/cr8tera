import Image from "next/image";

const OurTeamSection = () => {
    const teamData = []
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center py-[100px]">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/backgrounds/features-bg.svg"
                    alt="Hero background"
                    fill
                    priority
                    className="object-contain object-center opacity-100 rotate-180"
                />
            </div>
        </section>
    )
}

export default OurTeamSection;