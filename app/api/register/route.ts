import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { SignUpSchema } from "@/lib/zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = SignUpSchema.safeParse(body);
    if (result.success) {
      const { firstname, lastname, email, password } = body;

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          firstname,
          lastname,
          email,
          password: hashedPassword,
        },
      });

      return NextResponse.json(user);
    }
    const serverErrors = Object.fromEntries(
      result.error?.issues?.map((issue) => [issue.path[0], issue.message]) ||
        [] ||
        []
    );
    return NextResponse.json({ errors: serverErrors });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.error;
  }
}
