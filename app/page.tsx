import BottomNavBar from "@/components/BottomNavBar";
import Post from "@/components/Post";
import PostSkeleton from "@/components/PostSkeleton";
import SidePanel from "@/components/SidePanel";
import TopBar from "@/components/TopBar";
import { Suspense } from "react";

async function getPosts() {
  "use server";

  await new Promise((r) => setTimeout(r, 500));

  return Array(16)
    .fill([
      {
        media: [
          {
            source:
              "https://wallpaperaccess.com/full/946122.jpg",
            kind: "video" as const,
          },
        ],
        text: "this is an example post",
        likes: 69420,
        comments: 133769420,
      },

      {
        media: [
          {
            source: "https://wallpapercave.com/wp/wp6981239.jpg",
            kind: "video" as const,
          },
        ],
        text: "this is an example post\nthis post has more than one line\nhello\nabc 123\nhello world",
        likes: 1999999999999999,
        comments: 133713371337,
      },
    ])
    .flat();
}

async function Posts() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className="sm:mx-2 my-2">
          <Post
            media={post.media}
            text={post.text}
            likes={post.likes}
            comments={post.comments}
          />
        </div>
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
        <div className="sticky top-0 z-50">
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
