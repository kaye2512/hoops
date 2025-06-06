import Image from "next/image";
import british from "@/public/images/British GQ Logo.png";

export default function BritishLogo() {
  return (
    <Image
      src={british}
      width={200}
      height={100}
      alt="vogue-logo"
      className="h-5 w-20 md:h-4 md:w-32 lg:h-6 lg:w-20"
    />
  );
}
