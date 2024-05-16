"use server";

import { openDb } from "@/lib/db";
import { cookies } from "next/headers";

export async function doSignOut() {
  let authToken = cookies().get("auth_token");
  if (authToken) {
    let token = authToken.value;
    const db = await openDb();

    await db.run("DELETE FROM user_session WHERE auth_token = ?", [token]);
  }

  cookies().delete("auth_token");
}
