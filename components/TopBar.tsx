import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Mail, Plus, Search } from "lucide-react";
import AppLogo from "./AppLogo";
import TopNavBar from "./TopNavBar";

export default function TopBar() {
  const iconSize = 16;

  return (
    <div className="bg-zinc-50 lg:bg-zinc-200">
      <div className="bg-zinc-50 flex items-center justify-between md:justify-normal px-4 lg:px-8 py-2 lg:rounded-2xl lg:rounded-b-none lg:rounded-r-none">
        <div className="lg:hidden">
          <AppLogo className="text-2xl" />
        </div>
        <div className="ml-2 w-96 hidden md:flex grow">
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
          <Button variant="outline" className="md:hidden rounded-full w-8 h-8 px-0 py-0">
            <Search size={iconSize} />
          </Button>

          <Button
            variant="outline"
            className="rounded-full w-8 h-8 px-0 py-0 ml-1"
          >
            <Bell size={iconSize} />
          </Button>

          <Button
            variant="outline"
            className="rounded-full w-8 h-8 px-0 py-0 ml-1"
          >
            <Mail size={iconSize} />
          </Button>

          <Button className="ml-2">
            <span className="md:hidden">
              <Plus size={iconSize} />
            </span>
            <span className="hidden md:inline">New Post</span>
          </Button>
        </div>
      </div>
      <div className="lg:hidden">
        <TopNavBar />
      </div>
    </div>
  );
}
