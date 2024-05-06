"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, X, Mail, Plus, Search, UserRound } from "lucide-react";
import AppLogo from "./AppLogo";
import { useState } from "react";

const iconSize = 16;

function SearchBar({ className = "" }: { className?: string }) {
  return (
    <div className={`ml-2 grow ${className}`}>
      <Input
        className="rounded-full rounded-r-none h-8 text-sm sm:text-base px-2 sm:px-3"
        placeholder="Search for people, posts and #tags"
      />
      <Button
        variant="outline"
        className="rounded-full rounded-l-none border-l-0 h-8 text-zinc-500"
      >
        <Search size={iconSize} />
      </Button>
    </div>
  );
}

export default function TopBar() {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  return (
    <div className="bg-zinc-50 lg:bg-zinc-200">
      <div className="bg-zinc-50 flex items-center justify-between md:justify-normal px-4 lg:px-8 py-2 lg:rounded-2xl lg:rounded-b-none lg:rounded-r-none relative">
        <div className="lg:hidden">
          <AppLogo className="text-2xl" />
        </div>
        <SearchBar className="hidden md:flex" />

        <div className="flex items-center ml-2">
          <Button className="mx-1 lg:hidden w-12 h-8 sm:w-auto sm:h-auto">
            <Plus size={iconSize} className="sm:hidden" />
            <span className="hidden sm:inline">New Post</span>
          </Button>

          <Button
            variant="outline"
            className="md:hidden rounded-full w-8 h-8 px-0 py-0"
            onClick={() => setShowSearchOverlay(!showSearchOverlay)}
          >
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
            className="rounded-full w-8 h-8 px-0 py-0 ml-1 hidden lg:inline-flex"
          >
            <Mail size={iconSize} />
          </Button>

          <Button
            variant="outline"
            className="rounded-full w-8 h-8 px-0 py-0 ml-1 lg:hidden"
          >
            <UserRound size={iconSize} />
          </Button>

          <Button className="ml-2 hidden lg:inline-flex">New Post</Button>
        </div>

        <div
          className={`absolute top-0 left-0 w-full bg-zinc-50 h-full ${showSearchOverlay ? "flex" : "hidden"} md:hidden items-center`}
        >
          <SearchBar className="flex" />
          <Button
            variant="destructive"
            onClick={() => setShowSearchOverlay(false)}
            className="rounded-full w-6 h-6 flex items-center justify-center px-0 py-0 mx-1"
          >
            <X size="12" />
          </Button>
        </div>
      </div>
    </div>
  );
}
