"use client";

import Container from "@/components/container";
import { Category } from "@/types";
import CallToAction from "./call-to-action";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../logo/logo";
import SearchFilter from "../search/search-filter";
import LocationButton from "../button/location-button";
import fetchCategories from "@/actions/get-categories";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function NavBar() {
  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategories,
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <Container className="border-b border-border">
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
          {categories && categories.length > 0 ? (
            categories.map((category: Category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className={`text-sm ${
                  selectedCategory === category.id
                    ? "text-gray-900 font-medium"
                    : "text-[#87878C]"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Link>
            ))
          ) : (
            <>
              <Link
                href="/"
                className={`text-sm ${
                  selectedCategory === "holographic"
                    ? "text-gray-900 font-medium"
                    : "text-[#87878C]"
                }`}
                onClick={() => setSelectedCategory("holographic")}
              >
                Holographic Neon Jacket
              </Link>
              <Link
                href="/"
                className={`text-sm ${
                  selectedCategory === "casual"
                    ? "text-gray-900 font-medium"
                    : "text-[#87878C]"
                }`}
                onClick={() => setSelectedCategory("casual")}
              >
                Casual Streetwear
              </Link>
              <Link
                href="/"
                className={`text-sm ${
                  selectedCategory === "80s"
                    ? "text-gray-900 font-medium"
                    : "text-[#87878C]"
                }`}
                onClick={() => setSelectedCategory("80s")}
              >
                80&apos;s Outfit
              </Link>
            </>
          )}
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
  );
}
