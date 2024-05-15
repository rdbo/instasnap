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
