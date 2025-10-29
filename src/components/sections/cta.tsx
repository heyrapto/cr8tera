import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

const CTASection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/backgrounds/ctaBg.svg"
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover object-center opacity-100"
                />
            </div>
            <div className="flex flex-col gap-50 items-center">
                <span className="text-8xl w-[1200px] leading-24">Creating new worlds, an AI workflow at a time.</span>

                <div className="flex flex-col gap-12 items-center">
                    <Button variant="primary" radius="full" icon={Icons.BlueButtonEllipse} className="font-semibold">Try Demo</Button>
                    <Image
                        src="/images/ctaRuler.svg"
                        alt="Ruler"
                        width={300}
                        height={60}
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default CTASection;