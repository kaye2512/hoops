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
import IconCTA from "./icon-cta";

export default function NavBar() {
  return (
    <div className="border-b border-border">
      <Container>
        <div className="flex h-16 shrink-0 items-center justify-between gap-28 max-lg:gap-16 max-md:gap-8 max-sm:flex max-sm:justify-between max-lg:justify-between">
          <Logo />
          <SearchFilter />
          <IconCTA />
          <CallToAction />
          {/* Menu mobile */}
          <Sheet>
            <SheetTrigger className="hidden max-sm:block">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[200px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              {/* Menu mobile avec sections */}
              <div className="flex flex-col gap-6 pt-10">
                {/* Section authentification */}
                <div className="flex flex-col gap-4 border-b border-border pb-6">
                  <Link href="/sign-in">
                    <p className="text-gray-900 font-medium">Sign In</p>
                  </Link>
                  <Link href="/register">
                    <p className="text-gray-900 font-medium">Register</p>
                  </Link>
                </div>
                {/* Section navigation principale */}
              </div>
            </SheetContent>
          </Sheet>
          {/* Menu mobile */}
        </div>
        <div className="grid grid-cols-7 gap-4 max-sm:hidden">
          {/* grid vide pour me permettre de mettre de bouger les liens sur la 2e colonne */}
          <div className=""></div>
          {/* rendre les lien interactifs */}
          <div className="flex gap-14 col-span-5 pl-20 m-3 max-lg:gap-10 max-md:gap-6 max-md:pl-10">
            <Link href="/">
              <p className="text-[#87878C] text-sm">Holographic Neon Jacket</p>
            </Link>

            <Link href="/">
              <p className="text-sm text-gray-900">Casual Streetwear</p>
            </Link>

            <Link href="/">
              <p className="text-[#87878C] text-sm">80&apos;s Outfit</p>
            </Link>
          </div>

          <div className="text-center m-3 flex gap-2 max-lg:gap-1 ">
            <LocationButton />
            <div className="flex gap-1 ">
              <p className="text-[#1D1D1F] text-sm">
                <span className="text-[#87878C]">Ship to</span> Address
              </p>
              <ChevronDown size={20} className="max-md:w-4" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
