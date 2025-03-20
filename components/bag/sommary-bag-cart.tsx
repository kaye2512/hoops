import { ChevronDown } from "lucide-react";
import Image from "next/image";
export default function SommaryBagCart(props: {
  src: string;
  name: string;
  reference: string;
  height: string;
  color: string;
  composition: string;
}) {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-6">
        <div className="w-[164px] h-[166px] relative">
          <Image src={props.src} alt="bag" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#1D1D1F]">{props.reference}</p>
          <p className="text-sm text-[#1D1D1F]">{props.name}</p>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#4B5563]">{props.height}</p>
            <p className="text-xs text-[#4B5563]">{props.color}</p>
            <p className="text-xs text-[#4B5563]">{props.composition}</p>
          </div>
          <div className="flex gap-4 ">
            <p className="text-xs text-[#111827] underline cursor-pointer">
              Add to favorite
            </p>
            <p className="text-xs text-[#EF4444] underline cursor-pointer">
              Remove
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 border h-8 w-14 cursor-pointer">
        <p className="text-xs font-light text-[#111827]">01</p>
        <ChevronDown className="w-3 h-3 text-[#111827] md:w-3 md:h-3 lg:w-3 lg:h-3" />
      </div>
    </div>
  );
}
