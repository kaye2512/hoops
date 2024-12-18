import Image from "next/image";
import logo from "@/public/images/Logo.png";
import Link from "next/link";
export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="Logo" width={128} height={128} />
      </Link>
    </div>
  );
}
