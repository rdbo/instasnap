"use client";

import { LayoutGrid, Mail, Settings, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNavItem({
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
    <Link href={href} className={`transition font-bold flex items-center py-2 ${pathname === href ? "text-rose-600" : "hover:text-amber-600"}`}>
      {icon}
      <p className="ml-2 text-lg">{text}</p>
    </Link>
  );
}


export default function SideNavBar() {
  return (
    <>
      <SideNavItem href="/" icon={<LayoutGrid />} text="Feed" />
      <SideNavItem href="/trending" icon={<Star />} text="Trending" />
      <SideNavItem href="/messages" icon={<Mail />} text="Messages" />
      <SideNavItem href="/settings" icon={<Settings />} text="Settings" />
    </>
  );
}
