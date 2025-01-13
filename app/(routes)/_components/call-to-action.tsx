import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import IconCTA from "./icon-cta";

export default function CallToAction() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="hidden sm:flex sm:items-center sm:gap-4">
        <IconCTA />
        <Separator orientation="vertical" className="hidden lg:block h-6" />
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <Button
            className="border-2 border-gray-950 text-xs font-semibold sm:text-sm sm:px-3 md:text-base md:px-4"
            variant="secondary"
          >
            <Link href={"/sign-in"}>Sign in</Link>
          </Button>
          <Button className="text-xs font-semibold sm:text-sm sm:px-3 md:text-base md:px-4">
            <Link href={"/sign-up"}>Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
