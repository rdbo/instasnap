"use client";

import BottomNavBar from "@/components/BottomNavBar";
import SidePanel from "@/components/SidePanel";
import TopBar from "@/components/TopBar";
import { Session, SessionContext } from "@/lib/context";
import { useState } from "react";

export default function Main({ sessionProp, children }: { sessionProp: Session; children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(sessionProp);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <SidePanel />

      <div className="grow h-screen overflow-y-scroll lg:rounded-b-2xl lg:rounded-r-none bg-zinc-50">
        <div className="sticky top-0 z-50">
          <TopBar />
        </div>

        <div className="px-2 sm:px-8 pb-20">{children}</div>

        <div className="fixed bottom-0 lg:hidden bg-zinc-50 h-14 flex justify-center items-center w-full">
          <BottomNavBar />
        </div>
      </div>
    </SessionContext.Provider>
  );
}
