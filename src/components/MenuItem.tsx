import { ReactNode} from "react";
import Link from "next/link";

interface MenuItemProps{
    title: string;
    address: string;
    Icon: ReactNode;
}

export default function MenuItem({title,address,Icon}:MenuItemProps) {
  return (
      <Link href={address} className="hover:text-amber-500">
          {Icon}
          <p className="hidden uppercase sm:inline text-sm">{title}</p>
      </Link>
  )
}
