import Logo from "./logo";
import Container from "@/components/container";
import SearchFilter from "./search-filter";
import CallToAction from "./call-to-action";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import LocationButton from "./location-button";

export default function NavBar() {
  return (
    <div className="border-b border-border">
      <Container className="">
        <div className="flex h-16 shrink-0 items-center justify-between  gap-28">
          <Logo />
          <SearchFilter />
          <CallToAction />
        </div>
        <div className="grid grid-cols-7 gap-4">
          {/* grid vide pour me permettre de mettre de bouger les liens sur la 2e colonne */}
          <div className=""></div>
          {/* rendre les lien interactifs */}
          <div className="flex gap-14 col-span-5 pl-20 m-3">
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

          <div className="text-center m-3 flex gap-2 ">
            <LocationButton />
            <div className="flex gap-1 ">
              <p className="text-[#1D1D1F] text-sm">
                <span className="text-[#87878C]">Ship to</span> Address
              </p>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
