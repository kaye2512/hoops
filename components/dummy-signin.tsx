import Image from "next/image";
import loginImage from "@/public/images/taras-chernus--au3XMzfhro-unsplash.jpg";
import { executeAction } from "@/app/action/execute-action";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
  return (
    <div>
      <div className="w-full h-screen bg-gray-100 flex">
        <div className="relative w-1/2 h-screen hidden lg:block">
          <Image
            src={loginImage}
            alt="login"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
          <div className="w-full max-w-lg px-8">
            <h1 className="text-2xl font-bold mb-6">Get Started</h1>
            <form
              className="space-y-4"
              action={async (formData) => {
                "use server";
                await executeAction({
                  actionFn: async () => {
                    await signIn("credentials", formData);
                  },
                });
              }}
            >
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Email address
                </label>
                <Input
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                  autoComplete="email"
                  className="h-12"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <Input
                  name="password"
                  placeholder="Password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="h-12"
                />
              </div>

              <Button className="w-full h-12" type="submit">
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
