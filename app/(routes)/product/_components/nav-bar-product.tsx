import Container from "@/components/container";
import Logo from "../../dashboard/_components/logo";
import CallToAction from "../../dashboard/_components/call-to-action";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Link, Menu } from "lucide-react";
import LocationButton from "../../dashboard/_components/location-button";

export default function NavBarProduct() {
  return (
    <Container className="border-b border-border flex justify-between items-center ">
      {/* amélioration du responsive à faire  */}
      <div className="flex gap-2 hidden sm:flex">
        <div className="bg-red-500 h-6 w-6 rounded-full"></div>
        <div className="flex gap-1 items-center">
          <LocationButton />
          <p className="text-xs">
            <span className="text-[#87878C]">Ship to</span> Address
          </p>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      <div>
        <Logo />
      </div>
      <div className="">
        <div className="hidden sm:block">
          <CallToAction />
        </div>

        <Sheet>
          <SheetTrigger className="block sm:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[200px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 pt-10">
              <div className="flex flex-col gap-4 border-b border-border pb-6">
                <Link href="/sign-in">
                  <p className="font-medium text-gray-900">Sign In</p>
                </Link>
                <Link href="/register">
                  <p className="font-medium text-gray-900">Register</p>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Container>
  );
}
