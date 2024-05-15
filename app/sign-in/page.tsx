"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { attemptSignIn } from "./actions";
import { useFormState } from "react-dom";

export default function SignIn() {
  const [state, formAction] = useFormState(attemptSignIn, { errorMsg: "" });

  return (
    <div className="flex justify-center mt-4">
      <form
        action={formAction}
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
        <div className="text-red-500">
          <p>{state.errorMsg}</p>
        </div>
        <Button className="w-full mt-2">Sign In</Button>
      </form>
    </div>
  );
}
