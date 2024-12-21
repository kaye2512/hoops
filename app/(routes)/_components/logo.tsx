"use client";
import Image from "next/image";
import logo from "@/public/images/Logo.png";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      src={logo}
      alt="Logo"
      width={128}
      height={128}
      className="cursor-pointer hidden md:block sm:hidden"
    />
  );
}
