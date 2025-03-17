import { ChevronLeft } from "lucide-react";
import { X } from "lucide-react";
export default function Filter() {
  return (
    <div>
      {/* on clique sur le bouton de filtre, on affiche le filtre */}
      <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
        <p className="text-lg font-semibold ">Filters</p>
        <ChevronLeft className="w-6 h-5 text-[#87878C] md:w-4 md:h-6 lg:w-5 lg:h-7" />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex justify-between">
          <p className="text-xs text-[#87878C]">Applied filters</p>
          <p className="text-xs text-[#D0011B] ">Clear all x</p>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 md:gap-2 lg:gap-2 ">
          <div className="h-6 w-auto border flex items-center justify-center rounded-full hover:bg-[#1D1D1F]  hover:text-[#F9FAFB] py-3  text-sm md:text-base lg:text-lg cursor-pointer">
            <p className="p-1 text-xs">Filter</p>
            <X className="w-2 h-2" />
          </div>
          <div className="h-6 w-auto border flex items-center justify-center rounded-full text-[#F9FAFB] bg-[#1D1D1F] hover:bg-[#F9FAFB]  hover:text-[#1D1D1F]  py-3  text-sm md:text-base lg:text-lg cursor-pointer">
            <p className="p-1 text-xs ">Exemples</p>
            <X className="w-2 h-2 " />
          </div>
          <div className="h-6 w-auto border flex items-center justify-center rounded-full hover:bg-[#1D1D1F]  hover:text-[#F9FAFB]  py-3  text-sm md:text-base lg:text-lg cursor-pointer">
            <p className="p-1 text-xs">Filter</p>
            <X className="w-2 h-2" />
          </div>
          <div className="h-6 w-auto border flex items-center justify-center rounded-full hover:bg-[#1D1D1F]  hover:text-[#F9FAFB]  py-3  text-sm md:text-base lg:text-lg cursor-pointer">
            <p className="p-1 text-xs">Exemples</p>
            <X className="w-2 h-2" />
          </div>
          <div className="h-6 w-auto border flex items-center justify-center rounded-full hover:bg-[#1D1D1F]  hover:text-[#F9FAFB] py-3  text-sm md:text-base lg:text-lg cursor-pointer">
            <p className="p-1 text-xs">Filter</p>
            <X className="w-2 h-2" />
          </div>
          <div className="h-6 w-auto border flex items-center justify-center rounded-full hover:bg-[#1D1D1F]  hover:text-[#F9FAFB]  py-3  text-sm md:text-base lg:text-lg cursor-pointer">
            <p className="p-1 text-xs">Exemples</p>
            <X className="w-2 h-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
