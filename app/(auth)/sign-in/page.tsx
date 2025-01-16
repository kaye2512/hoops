"use client";
import Image from "next/image";
import loginImage from "@/public/images/taras-chernus--au3XMzfhro-unsplash.jpg";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/lib/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FacebookSignInButton from "@/components/facebook-sign-in-button";
import GoogleSignInButton from "@/components/google-sign-in-button";
import { Separator } from "@/components/ui/separator";
import { login } from "@/app/action/login";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    console.log(values);
    setIsLoading(true);
    login(values)
      .then((res) => {
        if (res?.error) {
          setIsLoading(false);
        } else {
          toast.success("Logged in!");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        return toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
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
                          type="password"
                          placeholder="Password"
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-12 text-lg">
                  {isLoading ? "Loading..." : "Sign In"}
                </Button>
                <div className="">
                  <div className=" inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                </div>
              </form>
            </Form>
            <div className="flex justify-center items-center gap-4 mt-6">
              <GoogleSignInButton />
              <FacebookSignInButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
