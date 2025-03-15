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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavBarProduct() {
  return (
    <Container className="border-b border-border   ">
      <div className="flex items-center justify-between ">
        {/* amélioration du responsive à faire  */}
        <div className="flex gap-2 hidden sm:flex">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://www.larousse.fr/encyclopedie/data/images/1009457-Drapeau_de_lAustralie.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
      </div>
      <div className="flex justify-center items-center mt-2 ">
        <div className="flex gap-6 ">
          <p className="text-[#1D1D1F] text-sm md:text-base lg:text-lg">
            What&apos;s new
          </p>
          <p className="text-[#1D1D1F] text-sm md:text-base lg:text-lg">Men</p>
          <p className="text-[#1D1D1F] text-sm md:text-base lg:text-lg">
            Women
          </p>
          <p className="text-[#1D1D1F] text-sm md:text-base lg:text-lg">Kids</p>
          <p className="text-[#1D1D1F] text-sm md:text-base lg:text-lg">
            Journal
          </p>
          <p className="text-[#1D1D1F] text-sm md:text-base lg:text-lg">Sale</p>
        </div>
      </div>
    </Container>
  );
}
