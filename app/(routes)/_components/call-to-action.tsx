import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import notif from "@/public/images/notif.png";
import fav from "@/public/images/fav.png";
import bag from "@/public/images/bag.png";
import { Separator } from "@/components/ui/separator";

export default function CallToAction() {
  return (
    <div className="p-4">
      <div className="flex items-center space-x-4 gap-4">
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="h-8 w-8 rounded-full">
            <Image src={notif} alt="notif" width={128} height={128} />
          </Link>
          <Link href={"/"} className="h-8 w-8 rounded-full">
            <Image src={fav} alt="notif" width={128} height={128} />
          </Link>
          <Link href={"/"} className="h-8 w-8 rounded-full">
            <Image src={bag} alt="notif" width={128} height={128} />
          </Link>
        </div>
        <Separator orientation="vertical" className="h-6" />

        <div className="flex space-x-4">
          <Button
            className="border border-2 border-gray-950"
            variant="secondary"
          >
            <Link href={"/login"}>Sign in</Link>
          </Button>
          <Button>
            <Link href={"/signup"}>Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
