import Image from "next/image";
import dribbleLogo from "@/public/images/dribble.png";
export default function DribbleLogo() {
  return (
    <Image src={dribbleLogo} alt="blackberry logo" width={100} height={100} />
  );
}
