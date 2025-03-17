import { ChevronRight } from "lucide-react";
export default function HeaderHomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 w-full h-screen">
      <div className="flex gap-2">
        <p className="text-sm md:text-base lg:text-lg">Home</p>
        <ChevronRight className="w-3 h-5 text-[#87878C] md:w-4 md:h-6 lg:w-5 lg:h-7" />
        <p className="text-sm md:text-base lg:text-lg">what&apos;s new</p>
      </div>
      <div className="mt-2">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          New in - this week
        </h1>
      </div>
      {/* lorsqu'on clique sur un tag, cela crée un badge pour montrer que le tag est selectionné */}
      <div className="mt-4 flex gap-4 md:gap-6 lg:gap-8">
        <div className="cursor-pointer">
          <p>All</p>
        </div>
        <div className="h-6 w-auto border flex items-center justify-center rounded-full hover:bg-[#F9FAFB] px-2 py-3  text-sm md:text-base lg:text-lg cursor-pointer">
          <p className="p-2">Men&apos;s</p>
        </div>
        <div className="h-6 w-auto border flex items-center justify-center rounded-full hover:bg-[#F9FAFB] px-2 py-3 text-sm md:text-base lg:text-lg cursor-pointer">
          <p className="p-2">Women&apos;s</p>
        </div>
        <div className="cursor-pointer">
          <p>Kids</p>
        </div>
      </div>
    </div>
  );
}
