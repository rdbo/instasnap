"use server";

import { openDb } from "@/lib/db";

export async function getUserSession(authToken: string) {
  const db = await openDb();

  let session = await db.get(
    "SELECT users.name, users.handle, users.profile_picture AS profilePicture FROM users JOIN user_session ON user_session.user_id = users.id WHERE user_session.auth_token = ?",
    authToken,
  );

  return session;
}

export interface Media {
  kind: string;
  source: string;
}

export interface Post {
  text: string;
  author: string;
  media: Media[];
  likes: number;
  comments: number;
}

export async function getPosts() {
  "use server";

  await new Promise((r) => setTimeout(r, 2000)); // TODO: REMOVE

  const db = await openDb();

  type PostsQuery = { id: number; handle: string; text: string; likes: number, comments: number };
  const postsResult = await db.all<PostsQuery[]>(
    "SELECT posts.id, users.handle, posts.text, (SELECT COUNT(*) FROM post_likes WHERE post_likes.post_id = posts.id) AS likes, (SELECT COUNT(*) FROM post_comments WHERE post_comments.post_id = posts.id) AS comments FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.ROWID DESC LIMIT 32;",
  );

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
      text: postResult.text,
      author: postResult.handle,
      media: [],
      likes: postResult.likes,
      comments: postResult.comments,
    });
  }

  for (let mediaResult of mediasResult) {
    let post = posts.get(mediaResult.post_id) as Post;

    post.media.push({ kind: mediaResult.kind, source: mediaResult.source });
  }

  return posts;
}
