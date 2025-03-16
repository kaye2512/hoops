import { ChevronLeft, ChevronUp } from "lucide-react";
import { X } from "lucide-react";
import CategoryCheckbox from "./category-checkbox";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
export default function AppSideBar() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-[290px]">
      {/* on clique sur le bouton de filtre, on affiche le filtre */}
      <div>
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
      <div>
        <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
          <p className="text-lg font-semibold ">Category (2)</p>
          <ChevronUp className="w-6 h-5 text-[#87878C] md:w-4 md:h-6 lg:w-5 lg:h-7" />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <CategoryCheckbox name="Luxury" />
          <CategoryCheckbox name="Streetwear" />
          <CategoryCheckbox name="Sports" />
        </div>
      </div>
      <div>
        <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
          <p className="text-lg font-semibold ">Gender</p>
          <ChevronUp className="w-6 h-5 text-[#87878C] md:w-4 md:h-6 lg:w-5 lg:h-7" />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <CategoryCheckbox name="Men's" />
          <CategoryCheckbox name="Women's" />
        </div>
      </div>
      <div>
        <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
          <p className="text-lg font-semibold ">Price</p>
          <ChevronUp className="w-6 h-5 text-[#87878C] md:w-4 md:h-6 lg:w-5 lg:h-7" />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <div className="flex items-center gap-2">
            <Input placeholder="min" />
            <Input placeholder="max" />
          </div>
          <div className="mt-4">
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </div>
      </div>
      {/* color component a faire  */}
      <div>
        <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
          <p className="text-lg font-semibold ">Color (2)</p>
          <ChevronUp className="w-6 h-5 text-[#87878C] md:w-4 md:h-6 lg:w-5 lg:h-7" />
        </div>

        <div className="flex flex-col p-4 gap-2">
          <div className="mt-2 grid grid-cols-3 gap-2 md:gap-2 lg:gap-2 ">
            <div className="h-20 w-auto rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:border hover:bg-[#F5F5F7]">
              <div className="h-8 w-8 border rounded-full bg-red-500 cursor-pointer" />
              <label>Red</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
