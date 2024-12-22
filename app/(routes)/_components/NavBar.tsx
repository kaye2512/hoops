import Logo from "./logo";
import Container from "@/components/container";
import SearchFilter from "./search-filter";
import CallToAction from "./call-to-action";
import Link from "next/link";

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
          <div className="flex gap-14 col-span-5 pl-20">
            <Link href="/">
              <p className="text-slate-600">Holographic Neon Jacket</p>
            </Link>

            <Link href="/">
              <p>Casual Streetwear</p>
            </Link>

            <Link href="/">
              <p className="text-slate-600">80&apos;s Outfit</p>
            </Link>
          </div>

          <div className="text-center pr-5">
            <p>Ship to Address</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
