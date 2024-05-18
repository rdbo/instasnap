"use server";

import { openDb } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { getUserSession } from "../actions";

export async function attemptSignIn(_prevState: any, data: FormData) {
  const formUsername = data.get("username");
  const formPassword = data.get("password");

  const db = await openDb();

  type QueryUser = { id: number; password_hash: string };
  const user = await db.get<QueryUser>(
    "SELECT id, password_hash FROM users WHERE handle = ?",
    [formUsername],
  );
  if (!user) return { session: null, errorMsg: "Invalid username or password" };

  const isPasswordCorrect = await bcrypt.compare(
    formPassword,
    user.password_hash,
  );
  if (!isPasswordCorrect) {
    return { session: null, errorMsg: "Invalid username or password" };
  }

  let authToken = uuidv4();
  const { expiration_date } = await db.get(
    "INSERT INTO user_session(user_id, auth_token) VALUES (?, ?) RETURNING expiration_date",
    user.id,
    authToken,
  );

  const expirationDate = new Date(expiration_date);
  console.log(expirationDate);

  cookies().set("auth_token", authToken, { expires: new Date(expirationDate) });
  return { session: await getUserSession(authToken), errorMsg: "" };
}
