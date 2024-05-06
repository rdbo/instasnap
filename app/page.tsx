import SidePanel from "@/components/SidePanel";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main className="flex grow bg-zinc-200">
      <div className="hidden lg:inline">
        <SidePanel />
      </div>

      <div className="grow h-screen overflow-y-scroll rounded-b-2xl rounded-r-none">
        <div className="sticky top-0">
          <TopBar />
        </div>

        <div className="bg-zinc-50 px-8 pb-4">
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
      </div>
    </main>
  );
}
