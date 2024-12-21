import { Button } from "@/components/ui/button";
import Link from "next/link";
import BellButton from "./bell-button";
import BagButton from "./bag-button";
import HeartButton from "./heart-button";
import { Separator } from "@/components/ui/separator";

export default function CallToAction() {
  return (
    <div className="p-12">
      <div className="flex items-center space-x-4 gap-4">
        <div className="flex items-center gap-4">
          <BellButton />
          <HeartButton />
          <BagButton />
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
