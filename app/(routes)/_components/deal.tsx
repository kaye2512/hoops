import Container from "@/components/container";
import Image from "next/image";
import rectangle from "@/public/images/Rectangle 56.png";
import console from "@/public/images/console.png";

export default function Deal() {
  return (
    <Container className="flex flex-col gap-8 mt-4 md:flex-row md:gap-8 md:mt-8 lg:mt-12 lg:gap-32 lg:flex-row">
      <div className="flex w-auto h-64 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-[#F3F4F6] justify-between items-center gap-6 px-12">
        <div>
          <h1 className="font-bold text-2xl">Best Deal</h1>
        </div>
        <div className="">
          <Image
            src={rectangle}
            alt="Deal"
            width={100}
            height={100}
            className="w-40 h-24"
          />
        </div>
      </div>

      <div className="flex w-auto h-64 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-[#F3F4F6] justify-between items-center gap-6 px-12">
        <div>
          <h1 className="font-bold text-2xl">Game Console</h1>
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
