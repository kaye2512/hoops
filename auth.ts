import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { SignInSchema } from "./lib/zod";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // You can implement any logic you want in here.
        // For example, you can check if the user exists, and then return
        // false if they don't, to show an error message (e.g., no account with that email address exists).
        const validatedCredentials = SignInSchema.parse(credentials);
        if (!validatedCredentials) {
          return new Error("Invalid credentials");
        }

        const user = await prisma.user.findFirst({
          where: {
            email: validatedCredentials.email,
          },
        });

        if (!user || !user.password || !user.email) {
          return new Error("Invalid email or password");
        }
        const isPasswordCorrect = await bcrypt.compare(
          validatedCredentials.password,
          user.password
        );
        if (isPasswordCorrect) {
          return user;
        }
        return null;
      },
    }),
  ],
});
