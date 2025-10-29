import Image from "next/image";

const SummarySection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10">
            <Image
                src="/images/backgrounds/summary.svg"
                alt="Hero background"
                fill
                priority
                className="object-cover object-center opacity-100"
            />
        </div>

        <div className="flex flex-col gap-10 relative mt-[100px]">
            <span className="text-[50px] w-[800px] font-semibold leading-14">Test, generate, edit, & share content, even after it’s made. Your brand identity, your way.</span>
            <p className="text-[24px] w-[800px]">Test, generate, edit, & share content, even after it’s made. Your brand identity, your way.</p>

            <div className="absolute top-0 left-0 right-0 mx-auto">
            <Image src="/images/ai.svg" alt="AI image" width={800} height={800} />
            </div>
        </div>
      </section>
    )
  }
  
  export default SummarySection;