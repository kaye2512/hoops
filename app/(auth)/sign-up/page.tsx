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
import { SignUpSchema } from "@/lib/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import GoogleSignInButton from "@/components/google-sign-in-button";
import FacebookSignInButton from "@/components/facebook-sign-in-button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignUpSchema>) {
    setIsLoading(true);
    axios
      .post("/api/register", values)
      .then(() => {
        toast.success("Registered!");
        router.push("/sign-in");
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

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
          <div className="w-full max-w-[680px] px-6 lg:px-24">
            <h1 className="text-2xl font-bold mb-6">Get Started</h1>
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder="David"
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
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder="Clerk"
                            {...field}
                            className="h-12"
                          />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email adress</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
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
                          disabled={isLoading}
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
                <FormField
                  control={form.control}
                  name="confirmpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
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
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <FormLabel
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to Terms of Service & Privacy Policy
                    </FormLabel>
                  </div>
                </div>
                <Button type="submit" className="w-full h-12 text-lg">
                  Sign Up
                </Button>
                <div className="">
                  <div className=" inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 mt-6">
                  <GoogleSignInButton />
                  <FacebookSignInButton />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
