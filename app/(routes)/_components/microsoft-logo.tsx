import Image from "next/image";
import microsoftLogo from "@/public/images/microsoft.png";
export default function MicrosoftLogo() {
  return (
    <Image src={microsoftLogo} alt="blackberry logo" width={100} height={100} />
  );
}
