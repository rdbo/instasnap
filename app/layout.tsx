import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/Main";
import { cookies } from "next/headers";
import { getUserSession } from "./actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstaSnap",
  description: "An open source photo and video sharing social media",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authToken = cookies().get("auth_token");
  let session = null;
  if (authToken) {
    session = await getUserSession(authToken.value);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex">
          <main className="flex grow bg-zinc-100">
            <Main sessionProp={session}>{children}</Main>
          </main>
        </div>
      </body>
    </html>
  );
}
