"use server";

import { openDb } from "@/lib/db";

export async function getUserSession(authToken: string) {
  const db = await openDb();

  let session = await db.get(
    "SELECT users.name, users.handle FROM users JOIN user_session ON user_session.user_id = users.id WHERE user_session.auth_token = ?",
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
};

export async function getPosts() {
  "use server";

  const db = await openDb();

  type PostsQuery = { id: number; handle: string; text: string };
  const postsResult = await db.all<PostsQuery[]>(
    "SELECT posts.id, users.handle, posts.text FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.ROWID DESC LIMIT 32",
  );

  type MediasQuery = { post_id: number, kind: string; source: string };
  const postIdList = postsResult.map((post) => post.id);
  const mediasResult = await db.all<MediasQuery[]>(
    "SELECT post_id, kind, source FROM post_media WHERE post_id IN (" +
      Array(postIdList.length).fill("?").join(", ") +
      ")", [...postIdList]
  );

  let posts = new Map<number, Post>();
  for (let postResult of postsResult) {
    posts.set(postResult.id, { text: postResult.text, author: postResult.handle, media: [], likes: 0, comments: 0 });
  }

  for (let mediaResult of mediasResult) {
    let post = posts.get(mediaResult.post_id) as Post;
    
    post.media.push({ kind: mediaResult.kind, source: mediaResult.source });
  }

  return posts;

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
