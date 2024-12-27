import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import SelectOption from "./select-option";

export default function SearchFilter() {
  return (
    <div className="w-full px-6 sm:px-12 md:px-16 lg:w-[600px] lg:px-0 xl:w-[700px]">
      <div className="mt-2">
        <div className="flex w-full items-center bg-gray-100 rounded-md h-12 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-none has-[input:focus-within]:outline-1 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-300">
          <div className="hidden lg:grid lg:shrink-0 lg:grid-cols-1 lg:focus-within:relative lg:bg-gray-100">
            <SelectOption />
          </div>
          <Separator orientation="vertical" className="hidden lg:block h-5" />
          <input
            id="search"
            name="search"
            type="text"
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
      </div>
    </div>
  );
}
