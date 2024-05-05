import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";
import { LayoutGrid, Mail, Settings, Star } from "lucide-react";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

function SideNavItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className="font-bold flex items-center py-2">
      {icon}
      <p className="ml-2 text-lg">{text}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="flex grow">
      <div className="bg-zinc-100 px-2 py-2 relative">
        <h1 className={`${pacifico.className} text-2xl`}>InstaSnap</h1>
        <div className="mt-8 flex flex-col items-center">
          <div className="bg-gradient-to-r from-rose-600 to-amber-400 px-1 py-1 rounded-full">
            <div className="px-2 py-2 bg-zinc-100 rounded-full">
              <img className="rounded-full bg-gray-400 w-40 h-40" />
            </div>
          </div>

          <div>
            <p className="mt-2 font-bold text-lg">Guest</p>
            <p className="text-zinc-500">@guest</p>
          </div>

          <div className="mt-8">
            <SideNavItem href="/" icon={<LayoutGrid />} text="Feed" />
            <SideNavItem href="/" icon={<Star />} text="Trending" />
            <SideNavItem href="/" icon={<Mail />} text="Messages" />
            <SideNavItem href="/" icon={<Settings />} text="Settings" />
          </div>
          <div className="absolute bottom-0 w-full px-2 py-2">
            <Button className="w-full">Sign In</Button>
          </div>
        </div>
      </div>

      <div></div>

      <div></div>
    </main>
  );
}
