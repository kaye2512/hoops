import Container from "@/components/container";
import Image from "next/image";
import rectangle from "@/public/images/Rectangle 56.png";
import console from "@/public/images/console.png";

export default function Deal() {
  return (
    <Container className="flex flex-col gap-8 mt-4 md:flex-row md:gap-8 md:mt-8 lg:mt-12 lg:justify-between">
      <div className="flex w-auto h-64 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-[#F3F4F6] gap-20 justify-center items-center  lg:w-[733px] lg:h-[339px] lg:flex-1 lg:gap-x-80">
        <div className="lg:w-[310.5px] lg:h-[72px]">
          <h1 className="font-bold text-2xl lg:text-4xl">Best Deal</h1>
        </div>
        <div className="lg:w-[310.5px] lg:h-[163px]">
          <Image
            src={rectangle}
            alt="Deal"
            width={200}
            height={200}
            className="w-40 h-24 lg:w-[310.5px] lg:h-[163px]"
          />
        </div>
      </div>

      <div className="flex w-auto h-64 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-[#F3F4F6] justify-between items-center gap-6 px-12 lg:w-[515px] lg:h-[339px]">
        <div>
          <h1 className="font-bold text-2xl lg:text-4xl">Best Deal</h1>
        </div>
        <div className="">
          <Image
            src={console}
            alt="Deal"
            width={100}
            height={100}
            className="w-40 h-24"
          />
        </div>
      </div>
    </Container>
  );
}
