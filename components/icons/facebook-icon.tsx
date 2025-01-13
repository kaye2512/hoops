import Image from "next/image";
import facebookIcon from "@/public/images/Face.png";
export default function FacebookIcon() {
  return <Image src={facebookIcon} alt="facebook" width={20} height={20} />;
}
