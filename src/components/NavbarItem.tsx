"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface NavBarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: NavBarItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-500 dark:hover:text-[#F4F3F2] duration-500 font-semibold tracking-wide text-base
               ${
                 genre === param
                   ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg dark:underline dark:decoration-slate-800"
                   : ""
               }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
