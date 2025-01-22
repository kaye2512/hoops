import Image from "next/image";
import googleLogo from "@/public/images/google.png";

export default function GoogleLogo() {
  return <Image src={googleLogo} alt="google logo" width={100} height={100} />;
}
