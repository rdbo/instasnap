import BottomNavBar from "@/components/BottomNavBar";
import SidePanel from "@/components/SidePanel";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main className="flex grow bg-zinc-200">
      <SidePanel />

      <div className="grow h-screen overflow-y-scroll lg:rounded-b-2xl lg:rounded-r-none">
        <div className="sticky top-0">
          <TopBar />
        </div>

        <div className="bg-zinc-50 px-8 pb-20">
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
          <h1 className="text-8xl">hello</h1>
        </div>

        <div className="fixed bottom-0 lg:hidden bg-zinc-50 h-14 flex justify-center items-center w-full">
          <BottomNavBar />
        </div>
      </div>
    </main>
  );
}
