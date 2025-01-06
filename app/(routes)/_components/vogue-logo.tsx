import Image from "next/image";
import vogue from "@/public/images/vogue.png";

export default function VogueLogo() {
  return (
    <Image
      src={vogue}
      width={100}
      height={100}
      alt="vogue-logo"
      className="h-5 w-40 md:h-4 md:w-32 lg:h-6 lg:w-32"
    />
  );
}
