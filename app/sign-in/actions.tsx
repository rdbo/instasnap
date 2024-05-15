"use server";

import { openDb } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function attemptSignIn(_prevState: any, data: FormData) {
  const formUsername = data.get("username");
  const formPassword = data.get("password");

  const db = await openDb();

  type QueryUser = { id: number; password_hash: string };
  const user = await db.get<QueryUser>(
    "SELECT id, password_hash FROM users WHERE handle = ?",
    [formUsername],
  );
  if (!user) return { errorMsg: "Invalid username or password" };

  const isPasswordCorrect = await bcrypt.compare(formPassword, user.password_hash);
  if (!isPasswordCorrect) {
    return { errorMsg: "Invalid username or password" };
  }

  cookies().set("hello", (Math.random() * 1000).toString());
  redirect("/");
}
