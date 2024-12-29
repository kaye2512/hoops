import Logo from "./logo";
import Container from "@/components/container";
import SearchFilter from "./search-filter";
import CallToAction from "./call-to-action";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import LocationButton from "./location-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


export default function NavBar() {
  return (
    <div className="border-b border-border">
      <Container>
        {/* Premier bloc - Header principal */}
        <div className="flex h-16 items-center justify-between">
          <Logo />
          {/* SearchFilter et CallToAction cachés sur mobile */}
          <div className="hidden sm:block">
            <SearchFilter />
          </div>
          <div className="hidden sm:block">
            <CallToAction />
          </div>

          {/* Menu mobile */}
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

        {/* Second bloc - Navigation et Location */}
        <div className="hidden sm:grid sm:grid-cols-7 sm:gap-4">
          <div></div>
          <div className="col-span-5 m-3 flex gap-6 pl-10 md:gap-10 lg:gap-14 lg:pl-20 lg:pl-8">
            <Link href="/">
              <p className="text-sm text-[#87878C]">Holographic Neon Jacket</p>
            </Link>
            <Link href="/">
              <p className="text-sm text-gray-900">Casual Streetwear</p>
            </Link>
            <Link href="/">
              <p className="text-sm text-[#87878C]">80&apos;s Outfit</p>
            </Link>
          </div>

          <div className="m-3 flex gap-1 text-center lg:gap-2">
            <LocationButton />
            <div className="flex gap-1">
              <p className="text-sm text-[#1D1D1F]">
                <span className="text-[#87878C]">Ship to</span> Address
              </p>
              <ChevronDown className="w-4 md:w-5" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
