import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNavBar from "@/components/BottomNavBar";
import SidePanel from "@/components/SidePanel";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstaSnap",
  description: "An open source photo and video sharing social media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex">
          <main className="flex grow bg-zinc-100">
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
          </main>
        </div>
      </body>
    </html>
  );
}
