import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="min-h-screen flex">
          {children}
        </div>
        <footer className="bg-zinc-200 h-40 flex items-center justify-center">
          <p>Copyright (C) Rdbo - 2024</p>
        </footer>
      </body>
    </html>
  );
}
