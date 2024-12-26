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
      className="cursor-pointer max-lg:w-24 max-lg:h-16 max-md:w-20 max-md:h-14 max-sm:w-16 max-sm:h-12"
    />
  );
}
