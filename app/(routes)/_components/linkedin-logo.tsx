import Image from "next/image";
import linkedInLogo from "@/public/images/linkedin.png";
export default function LinkedInLogo() {
  return (
    <Image src={linkedInLogo} alt="blackberry logo" width={100} height={100} />
  );
}
