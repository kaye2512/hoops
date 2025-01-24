"use client";
import GithubSignInButton from "@/components/Github-sign-in-button";
import GoogleSignInButton from "@/components/google-sign-in-button";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/lib/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
      <div className="w-full max-w-lg px-8">
        <h1 className="text-2xl font-bold mb-6">Get Started</h1>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email adress</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@example.com"
                      {...field}
                      className="h-12"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      type="password"
                      {...field}
                      className="h-12"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full h-12" type="submit">
              Sign In
            </Button>
            <div className="">
              <div className=" inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-6">
              <GoogleSignInButton />
              <GithubSignInButton />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
