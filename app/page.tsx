import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex grow">
      <div className="bg-zinc-100 px-2 py-2">
        <h1 className={`${pacifico.className} text-2xl`}>InstaSnap</h1>
        <div className="mt-8 flex flex-col items-center">
          <div className="bg-gradient-to-r from-rose-600 to-amber-400 px-1 py-1 rounded-full">
            <div className="px-2 py-2 bg-zinc-100 rounded-full">
              <img className="rounded-full bg-gray-400 w-40 h-40" />
            </div>
          </div>
          <p className="mt-2 font-bold text-lg">John Doe</p>
        </div>
      </div>

      <div></div>

      <div></div>
    </main>
  );
}
