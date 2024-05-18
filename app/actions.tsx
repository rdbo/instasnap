"use server";

import { Author, Media } from "@/components/Post";
import { openDb } from "@/lib/db";
import { cookies } from "next/headers";

export async function getUserSession(authToken: string) {
  const db = await openDb();

  let session = await db.get(
    "SELECT users.name, users.handle, users.profile_picture AS profilePicture FROM users JOIN user_session ON user_session.user_id = users.id WHERE user_session.auth_token = ?",
    authToken,
  );

  return session;
}

export interface Post {
  id: number;
  text: string;
  author: Author;
  media: Media[];
  likes: number;
  comments: number;
  hasLiked: boolean;
}

export async function getPosts() {
  "use server";

  const authToken = cookies().get("auth_token")?.value;

  const db = await openDb();

  type PostsQuery = {
    id: number;
    handle: string;
    profile_picture: string;
    text: string;
    likes: number;
    comments: number;
    has_liked: number;
  };
  const postsResult = await db.all<PostsQuery[]>(
    "SELECT posts.id, users.handle, users.profile_picture, posts.text, (SELECT COUNT(*) FROM post_likes WHERE post_likes.post_id = posts.id) AS likes, (SELECT COUNT(*) FROM post_comments WHERE post_comments.post_id = posts.id) AS comments, (SELECT COUNT(*) FROM post_likes WHERE user_id = (SELECT user_id FROM user_session WHERE auth_token = ?) AND post_id = posts.id) AS has_liked FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.ROWID DESC LIMIT 32;",
    [authToken],
  );

  console.log(postsResult);

  type MediasQuery = { post_id: number; kind: string; source: string };
  const postIdList = postsResult.map((post) => post.id);
  const mediasResult = await db.all<MediasQuery[]>(
    "SELECT post_id, kind, source FROM post_media WHERE post_id IN (" +
      Array(postIdList.length).fill("?").join(", ") +
      ")",
    [...postIdList],
  );

  let posts = new Map<number, Post>();
  for (let postResult of postsResult) {
    posts.set(postResult.id, {
      id: postResult.id,
      text: postResult.text,
      author: {
        handle: postResult.handle,
        profilePicture: postResult.profile_picture,
      },
      media: [],
      likes: postResult.likes,
      comments: postResult.comments,
      hasLiked: postResult.has_liked > 0,
    });
  }

  for (let mediaResult of mediasResult) {
    let post = posts.get(mediaResult.post_id) as Post;

    post.media.push({
      kind: mediaResult.kind as "image" | "video",
      source: mediaResult.source,
    });
  }

  return posts;
}
