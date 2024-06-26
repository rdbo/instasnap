import Post, { Media } from "@/components/Post";
import PostSkeleton from "@/components/PostSkeleton";
import { Suspense } from "react";
import { getPosts } from "./actions";

async function Posts() {
  const posts = await getPosts();

  return (
    <>
      {Array.from(posts.values()).map((post, index) => (
        <div key={index} className="sm:mx-2 my-2">
          <Post
            id={post.id}
            author={post.author}
            media={post.media as Media[]}
            text={post.text}
            likes={post.likes}
            comments={post.comments}
            hasLiked={post.hasLiked}
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
