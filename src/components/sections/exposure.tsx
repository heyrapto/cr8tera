import Image from "next/image";

const ExposureSection = () => {
    const exposureItems = [
        {
            image: "/images/chat.svg",
            title: "SOCIAL MEDIA",
            tag: ".01"
        },
        {
            image: "/images/chat.svg",
            title: "SOCIAL MEDIA",
            tag: ".01"
        },
        {
            image: "/images/chat.svg",
            title: "SOCIAL MEDIA",
            tag: ".01"
        },
        {
            image: "/images/chat.svg",
            title: "SOCIAL MEDIA",
            tag: ".01"
        },
        {
            image: "/images/chat.svg",
            title: "SOCIAL MEDIA",
            tag: ".01"
        },
    ]
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

        <div className="flex flex-col gap-10 items-start justify-start w-full px-[150px] max-w-[1440px]">
            <span className="text-8xl">Get better exposure</span>

            <div className="flex gap-16 items-center justify-between w-full">
                <Image
                src="/images/exposure-design.svg"
                alt="Exposure design"
                width={600}
                height={600}
                />

                <div className="flex flex-col gap-4">
                    {exposureItems.map((e, i) => (
                        <div className="flex justify-between items-center border border-white w-[600px] rounded-[25px] p-5">
                            <div className="flex gap-3 items-center">
                                <Image src={e.image} alt={e.title} width={50} height={50} />
                                <span>{e.title}</span>
                            </div>
                            <p>{e.tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
    )
  }
  
export default ExposureSection;