import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { ChevronUp } from "lucide-react";
export default function Price() {
  return (
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
  );
}
