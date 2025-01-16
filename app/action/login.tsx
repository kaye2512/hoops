"use server";
import * as z from "zod";
import { SignInSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";

export const login = async (values: z.infer<typeof SignInSchema>) => {
  const validatedFields = SignInSchema.parse(values);

  if (!validatedFields) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields;

  const userExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!userExists || !userExists.password || !userExists.email) {
    return { error: "User does not exist" };
  }

  try {
    await signIn("credentials", {
      email: userExists.email,
      password: password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
  return { success: "User logged in!" };
};
