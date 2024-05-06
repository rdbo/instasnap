import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function AppLogo({ className = "" }: { className?: string; }) {
  return <h1 className={`${pacifico.className} ${className}`}>InstaSnap</h1>;
}
