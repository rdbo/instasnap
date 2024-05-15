import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn() {
  return (
    <div className="flex justify-center mt-4">
      <div className="bg-white border rounded-lg px-4 py-4 w-full max-w-96">
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
      </div>
    </div>
  );
}
