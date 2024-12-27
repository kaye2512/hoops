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
      className="h-12 w-16 cursor-pointer sm:h-14 sm:w-20 md:h-16 md:w-24 lg:h-20 lg:w-20"
    />
  );
}
