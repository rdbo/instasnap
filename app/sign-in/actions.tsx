"use server";

import { openDb } from "@/lib/db";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export async function attemptSignIn(_prevState: any, data: FormData) {
  const formUsername = data.get("username");
  const formPassword = data.get("password");

  const db = await openDb();

  type QueryUser = { id: number; name: string; password_hash: string };
  const user = await db.get<QueryUser>(
    "SELECT id, name, password_hash FROM users WHERE handle = ?",
    [formUsername],
  );
  if (!user) return { session: null, errorMsg: "Invalid username or password" };

  const isPasswordCorrect = await bcrypt.compare(formPassword, user.password_hash);
  if (!isPasswordCorrect) {
    return { session:null, errorMsg: "Invalid username or password" };
  }

  let authToken = uuidv4();
  await db.run("INSERT INTO user_session(user_id, auth_token) VALUES (?, ?)", user.id, authToken);

  cookies().set("auth_token", authToken);

  return { session: { name: user.name, handle: formUsername }, errorMsg: "" };
}
