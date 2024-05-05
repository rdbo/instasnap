import SideNavBar from "@/components/SideNavBar";
import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function SidePanel() {
  return (
    <div className="px-2 py-2 relative">
      <h1 className={`${pacifico.className} text-2xl`}>InstaSnap</h1>
      <div className="mt-8 flex flex-col items-center w-60">
        <div className="bg-gradient-to-r from-rose-600 to-amber-400 px-1 py-1 rounded-full">
          <div className="px-2 py-2 bg-zinc-200 rounded-full">
            <img className="rounded-full bg-gray-400 w-40 h-40" />
          </div>
        </div>

        <div>
          <p className="mt-2 font-bold text-lg">Guest</p>
          <p className="text-zinc-500">@guest</p>
        </div>

        <div className="mt-8">
          <SideNavBar />
        </div>
        <div className="absolute bottom-0 w-full px-2 py-2">
          <Button className="w-full">Sign In</Button>
        </div>
      </div>
    </div>
  );
}
