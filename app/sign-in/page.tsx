import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { openDb } from "@/lib/db";

async function attemptSignIn(data: FormData) {
  "use server";

  type QueryUser = { id: number; password_hash: string; }

  let db = await openDb();

  let user = await db.get<QueryUser>("SELECT id, password_hash FROM users WHERE handle = ?", [data.get("username")]);
  if (!user)
    return;

  console.log("USER FOUND: ", user);
}

export default function SignIn() {
  return (
    <div className="flex justify-center mt-4">
      <form
        action={attemptSignIn}
        className="bg-white border rounded-lg px-4 py-4 w-full max-w-96"
      >
        <h1 className="font-bold text-2xl text-center">Sign In</h1>
        <div className="my-8">
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" />
        </div>
        <div className="my-8">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
        </div>
        <Button className="w-full mt-2">Sign In</Button>
      </form>
    </div>
  );
}
