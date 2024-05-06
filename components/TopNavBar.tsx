"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Mail, Star } from "lucide-react";

function TopNavItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`transition w-[6.5rem] sm:w-32 md:w-40 flex justify-center items-center border mx-1 sm:mx-2 px-1 sm:px-2 py-2 rounded-full ${pathname === href ? "bg-rose-500 text-white" : "hover:bg-rose-200 hover:text-zinc-600"}`}
    >
      {icon}
      <p className="ml-1 sm:ml-2 text-sm sm:text-base">{text}</p>
    </Link>
  );
}

export default function TopNavBar() {
  const iconSize = 16;

  return (
    <div className="flex justify-center pb-2">
      <div className="flex">
        <TopNavItem href="/" icon={<LayoutGrid size={iconSize} />} text="Feed" />
        <TopNavItem href="/trending" icon={<Star size={iconSize} />} text="Trending" />
        <TopNavItem href="/messages" icon={<Mail size={iconSize} />} text="Messages" />
      </div>
    </div>
  );
}
