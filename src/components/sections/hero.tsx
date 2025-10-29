import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
        <Image 
        src="/images/heroBg.svg"
        width={2000}
        height={1000}
        alt="Hero bg image"
        className="absolute top-0 left-0 right-0 mx-auto"
        />
    </section>
  )
}

export default HeroSection;