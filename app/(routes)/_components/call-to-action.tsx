import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CallToAction() {
  return (
    <div className="max-md:p-8 max-sm:p-4">
      <div className="flex items-center space-x-4 gap-4 max-sm:hidden">
        <Separator
          orientation="vertical"
          className="h-6 max-lg:hidden max-md:hidden"
        />
        <div className="flex space-x-4 max-lg:space-x-3 max-md:space-x-2">
          <Button
            className="border border-2 border-gray-950 font-semibold text-base max-lg:text-sm max-md:text-xs max-lg:px-3 max-md:px-2 max-lg:py-1"
            variant="secondary"
          >
            <Link href={"/login"}>Sign in</Link>
          </Button>
          <Button className="font-semibold text-base max-lg:text-sm max-md:text-xs max-lg:px-3 max-md:px-2 max-lg:py-1">
            <Link href={"/signup"}>Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
