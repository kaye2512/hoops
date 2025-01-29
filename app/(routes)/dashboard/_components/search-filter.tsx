"use client";

import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import SelectOption from "./select-option";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function SearchFilter() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if (!isSearchOpen) {
      setIsSearchOpen(true);
    }
  };

  return (
    <div className="w-full px-6 sm:px-12 md:px-16 lg:w-[600px] lg:px-0 xl:w-[700px]">
      <div className="mt-2 relative" ref={searchRef}>
        <div className="flex w-full items-center bg-gray-100 rounded-md h-12 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-none has-[input:focus-within]:outline-1 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-300">
          <div className="hidden lg:grid lg:shrink-0 lg:grid-cols-1 lg:focus-within:relative lg:bg-gray-100">
            <SelectOption />
          </div>
          <Separator orientation="vertical" className="hidden lg:block h-5" />
          <input
            id="search"
            name="search"
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            onFocus={() => setIsSearchOpen(true)}
            placeholder="Search..."
            className="block grow py-1.5 px-2 text-sm bg-slate-100 min-w-0 text-gray-900 placeholder:text-gray-400 focus:outline-0 sm:text-base sm:px-3 md:px-4 lg:px-5"
          />
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-300 md:size-6"
            />
          </div>
        </div>

        {isSearchOpen && (
          <div className="absolute w-full mt-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            {/* Recent Searches */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-700">
                Recent Searches
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Search className="mr-2 size-4" />
                  <span>Previous search 1</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Search className="mr-2 size-4" />
                  <span>Previous search 2</span>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-700">
                Suggested Images
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder-1.jpg"
                  alt="Suggestion 1"
                  width={300}
                  height={128}
                  className="h-32 w-full rounded-md object-cover"
                />
                <Image
                  src="/placeholder-2.jpg"
                  alt="Suggestion 2"
                  width={300}
                  height={128}
                  className="h-32 w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
