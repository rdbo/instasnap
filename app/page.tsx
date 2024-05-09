import BottomNavBar from "@/components/BottomNavBar";
import PostSkeleton from "@/components/PostSkeleton";
import SidePanel from "@/components/SidePanel";
import TopBar from "@/components/TopBar";
import { Suspense } from "react";

async function getPosts() {
  "use server";

  await new Promise((r) => setTimeout(r, 50000));

  return ["hello", "hey there", "wassup"];
}

async function Posts() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post, index) => (
        <h1 key={index} className="text-4xl">
          {post}
        </h1>
      ))}
    </>
  );
}

function PostsSkeleton() {
  return (
    <>
      {Array.from({ length: 32 }, (_, i) => {
        return (
          <div key={i} className="sm:mx-2 my-2">
            <PostSkeleton />
          </div>
        );
      })}
    </>
  );
}

export default async function Home() {
  return (
    <main className="flex grow bg-zinc-200">
      <SidePanel />

      <div className="grow h-screen overflow-y-scroll lg:rounded-b-2xl lg:rounded-r-none bg-zinc-50">
        <div className="sticky top-0">
          <TopBar />
        </div>

        <div className="px-2 sm:px-8 pb-20">
          <div className="flex flex-wrap justify-center">
            <Suspense fallback={<PostsSkeleton />}>
              <Posts />
            </Suspense>
          </div>
        </div>

        <div className="fixed bottom-0 lg:hidden bg-zinc-50 h-14 flex justify-center items-center w-full">
          <BottomNavBar />
        </div>
      </div>
    </main>
  );
}
