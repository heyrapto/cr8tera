import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const footerLinks = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Home",
            href: "/",
        },
    ]
  return (
    <footer className="flex flex-col px-[150px] relative py-[100px]">
        <div className="flex justify-between">
            <ul className="grid grid-cols-3 gap-y-3 gap-x-6">
                {footerLinks.map((l, i) => (
                    <li className="inline-flex items-center gap-2" key={i}>
                        <Icons.WhiteButtonEllipse width="5px" />
                        <Link href={l.href} className="text-lg">{l.title}</Link>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col gap-10 w-[500px]">
                <div className="flex justify-between items-center">
                    <h4 className="text-[2rem] font-semibold">Email</h4>

                    <div className="inline-flex">
                    <Button variant="primary" radius="md" icon={Icons.BlueButtonEllipse}>Try Demo</Button>
                    </div>
                </div>

                <input type="text" placeholder="Enter Email" className="outline-none border-b border-dotted border-white pb-2" />
            </div>
        </div>

        <h1 className="w-full text-[25vw] text-center text-transparent bg-clip-text bg-[#71C3FD] font-radley">Cr8tera</h1>

        <Image 
        src="./images/backgrounds/footer-grad.svg"
        alt="Footer grad"
        width={1500}
        height={1500}
        className="absolute bottom-0 left-0 right-0 mx-auto -z-10"
        />
    </footer>
  )
}

export default Footer