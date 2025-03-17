import CategoryCheckbox from "../category-checkbox";
import { ChevronUp } from "lucide-react";
export default function Gender() {
  return (
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
  );
}
