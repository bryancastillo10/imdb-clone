import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const IconStyle = "text-2xl sm:hidden";
    return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
          <div className="flex gap-4 p-2">            
                <MenuItem title="home" address="/" Icon={<AiFillHome className={IconStyle} />} />
              <MenuItem title="about" address="/about" Icon={<BsFillInfoCircleFill className={IconStyle}/>} />
            </div>
            <div className="flex items-center gap-4">
            <ThemeToggle/>
            <Link href={"/"} className="flex gap-1 items-center">
                <span className="'text-2xl font-bold bg-amber-500 text-white px-2 py-1 rounded-lg">IMDb</span>
                <span className="text-xl hidden sm:inline">Clone</span>
                </Link>
            </div>
    </div>
  )
};
