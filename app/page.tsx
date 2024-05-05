import SidePanel from "@/components/SidePanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Mail, Search } from "lucide-react";

export default function Home() {
  const iconSize = 18;

  return (
    <main className="flex grow bg-zinc-200">
      <SidePanel />

      <div className="grow h-screen overflow-y-scroll">
        <div className="sticky top-0 bg-zinc-200">
          <div className="bg-zinc-50 flex items-center px-2 py-2 rounded-2xl rounded-b-none rounded-r-none">
            <div className="w-96 flex grow">
              <Input
                className="rounded-full rounded-r-none h-8"
                placeholder="Search for people, posts and #tags"
              />
              <Button
                variant="outline"
                className="rounded-full rounded-l-none border-l-0 h-8 text-zinc-500"
              >
                <Search size={iconSize} />
              </Button>
            </div>

            <div className="flex items-center ml-2">
              <Button
                variant="outline"
                className="rounded-full w-8 h-8 px-0 py-0"
              >
                <Bell size={iconSize} />
              </Button>

              <Button
                variant="outline"
                className="rounded-full w-8 h-8 px-0 py-0 ml-1"
              >
                <Mail size={iconSize} />
              </Button>

              <Button className="ml-2">New Post</Button>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 px-2">
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
