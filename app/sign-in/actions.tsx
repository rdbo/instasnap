"use server";

import { openDb } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function attemptSignIn(_prevState: any, data: FormData) {
  type QueryUser = { id: number; password_hash: string };

  let db = await openDb();

  let user = await db.get<QueryUser>(
    "SELECT id, password_hash FROM users WHERE handle = ?",
    [data.get("username")],
  );
  if (!user) return { errorMsg: "Invalid username or password" };

  cookies().set("hello", (Math.random() * 1000).toString());
  redirect("/");
}
