import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative flex flex-col px-[150px] py-[100px] overflow-hidden">
      {/* top content */}
      <div className="flex justify-between z-10 relative">
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
              <Button variant="primary" radius="md" icon={<Icons.BlueButtonEllipse />}>Try Demo</Button>
            </div>
          </div>

          <input
            type="text"
            placeholder="Enter Email"
            className="outline-none border-b border-dotted border-white pb-2"
          />
        </div>
      </div>

      {/* footer text image - normal flow, centered, below content */}
      <div className="relative flex justify-center -mt-20 z-20">
        <Image
          src="/images/image.png"
          alt="Footer text"
          width={1700}
          height={300}
          className="object-contain"
        />
      </div>

      {/* background gradient - behind everything */}
      <Image
        src="/images/backgrounds/footer-grad.svg"
        alt="Footer gradient"
        fill
        className="absolute bottom-0 left-0 right-0 -z-10 object-cover"
      />
    </footer>
  )
}

export default Footer