import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import { Icons } from "@/components/ui/icons";

const Navbar = () => {
    return (
      <nav className="flex justify-between w-full items-center px-[150px] py-4">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />

        <Button variant="secondary" radius="md" icon={Icons.BlueButtonEllipse}>Menu</Button>

        <div className="flex items-center gap-2">
            <Button variant="ghost" icon={Icons.WhiteButtonEllipse}>Login</Button>
            <Button variant="secondary" radius="md" icon={Icons.WhiteButtonEllipse} className="font-bold">Try Demo</Button>
        </div>
      </nav>
    )
}
  
export default Navbar