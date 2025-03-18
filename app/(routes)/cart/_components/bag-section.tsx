import Container from "@/components/container";
import { ChevronLeft } from "lucide-react";
import LeftBagSection from "./left-bag-section";
import RightBagSection from "./right-bag-section";

export default function BagSection() {
  return (
    <Container className="my-12 h-auto ">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center cursor-pointer ">
            <ChevronLeft className="w-3 h-3 text-[#4B5563] md:w-4 md:h-4 lg:w-4 lg:h-4" />
            <p className="text-sm font-light text-[#4B5563] ml-1">Back</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1D1D1F]">Bag</h1>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <LeftBagSection />
          <RightBagSection />
        </div>
      </div>
    </Container>
  );
}
