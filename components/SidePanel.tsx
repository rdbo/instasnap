import SideNavBar from "@/components/SideNavBar";
import { Button } from "@/components/ui/button";
import AppLogo from "./AppLogo";
import Link from "next/link";
import { useContext } from "react";
import { SessionContext } from "@/lib/context";
import { LogOut } from "lucide-react";

export default function SidePanel() {
  const { session } = useContext(SessionContext);

  return (
    <div className="px-2 py-2 relative hidden lg:inline">
      <Link href="/">
        <AppLogo className="text-2xl" />
      </Link>
      <div className="mt-8 flex flex-col items-center w-60">
        <div className="bg-gradient-to-r from-rose-600 to-amber-400 px-1 py-1 rounded-full">
          <div className="px-2 py-2 bg-zinc-100 rounded-full">
            <img className="rounded-full bg-gray-300 w-40 h-40" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="mt-2 font-bold text-lg">
            {(session && session.name) || "Guest"}
          </p>
          <p className="text-zinc-500">
            {(session && `@${session.handle}`) || "Viewing as guest"}
          </p>
        </div>

        <div className="mt-8">
          <SideNavBar />
        </div>
        <div className="absolute bottom-0 w-full px-2 py-2">
          {(session && (
            <Link href="/sign-out">
              <Button variant="outline" className="w-full"><LogOut className="h-4" />Sign Out</Button>
            </Link>
          )) || (
            <Link href="/sign-in">
              <Button className="w-full">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
