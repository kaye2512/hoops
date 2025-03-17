import { ChevronUp } from "lucide-react";

const colors = [
  { name: "Red", color: "#D0011B" },
  { name: "Green", color: "#00A320" },
  { name: "Blue", color: "#0066CC" },
  { name: "Black", color: "#000000" },
  { name: "White", color: "#FFFFFF" },
  { name: "Yellow", color: "#FFFF00" },
  { name: "Orange", color: "#FF9900" },
  { name: "Grey", color: "#B3B3B3" },
  { name: "Multicolor", color: "#F9FAFB" },
];

export default function Colors() {
  return (
    <div>
      <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
        <p className="text-lg font-semibold ">Color (2)</p>
        <ChevronUp className="w-6 h-5 text-[#87878C] md:w-4 md:h-6 lg:w-5 lg:h-7" />
      </div>

      <div className="flex flex-col p-4 gap-2">
        <div className="mt-2 grid grid-cols-3 gap-2 md:gap-2 lg:gap-2 ">
          {colors.map((color) => (
            <div
              key={color.name}
              className="h-20 w-auto rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-slate-800  hover:bg-[#F5F5F7]"
            >
              <div
                className="h-8 w-8 border rounded-full bg-red-500 cursor-pointer"
                style={{ backgroundColor: color.color }}
              />
              <label>{color.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
