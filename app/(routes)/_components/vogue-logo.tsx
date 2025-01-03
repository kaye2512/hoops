import Image from "next/image";
import vogue from "@/public/images/vogue.png";

export default function VogueLogo() {
  return (
    <Image
      src={vogue}
      width={200}
      height={100}
      alt="vogue-logo"
      className="h-5 w-20"
    />
  );
}
