import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import SelectOption from "./select-option";

export default function SearchFilter() {
  return (
    <div className="w-full px-24 max-xl:px-16 max-lg:px-12 max-md:px-6 max-sm:hidden">
      <div className="mt-2">
        <div className="flex w-full items-center bg-gray-100 rounded-md h-12  pl-3  outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-none has-[input:focus-within]:outline-1 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-300">
          <div className="grid shrink-0 grid-cols-1 focus-within:relative bg-gray-100 max-lg:hidden">
            <SelectOption />
          </div>
          <Separator orientation="vertical" className="h-5 max-lg:hidden" />
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search..."
            className="block px-5 max-lg:px-3 max-md:px-2 bg-slate-100 min-w-0 grow py-1.5 pl-1 pr-3 text-base max-md:text-sm text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
          />
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-300 sm:size-6 max-md:size-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
