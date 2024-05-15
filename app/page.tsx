import Post from "@/components/Post";
import PostSkeleton from "@/components/PostSkeleton";
import { Suspense } from "react";

async function getPosts() {
  "use server";

  await new Promise((r) => setTimeout(r, 500));

  return Array(12)
    .fill([
      {
        author: "john.doe",
        media: [
          {
            source: "https://wallpaperaccess.com/full/946122.jpg",
            kind: "image" as const,
          },
        ],
        text: "this is an example post",
        likes: 69420,
        comments: 133769420,
      },

      {
        author: "goofy.ahh",
        media: [
          {
            source: "https://wallpaperaccess.com/full/815776.jpg",
            kind: "image" as const,
          },
          {
            source:
              "https://2.bp.blogspot.com/-WWTODyh0MPU/T4WhJ5B4qNI/AAAAAAAAB_0/tsfcYpxdaLE/s1600/Christmas+Trees+Wallpapers+2.jpg",
            kind: "image" as const,
          },
        ],
        text: "this is an example post\nthis post has more than one line\nhello\nabc 123\nhello world",
        likes: 1999999999999999,
        comments: 133713371337,
      },

      {
        author: "ligma.1337",
        media: [
          {
            source: "https://wallpaperaccess.com/full/946122.jpg",
            kind: "image" as const,
          },
        ],
        text: "this is an example post",
        likes: 10203040,
        comments: 9080,
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
            author={post.author}
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
    <div className="flex flex-wrap justify-center">
      <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense>
    </div>
  );
}
