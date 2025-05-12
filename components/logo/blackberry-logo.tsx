import Image from "next/image";
import blackBerryLogo from "@/public/images/blackberry.png";
export default function BlackBerryLogo() {
  return (
    <Image
      src={blackBerryLogo}
      alt="blackberry logo"
      width={100}
      height={100}
    />
  );
}
