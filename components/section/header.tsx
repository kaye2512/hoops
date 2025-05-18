"use client";

import headerImage from "@/./public/images/headers.jpg";
import fetchBillboard from "@/actions/get-billboard";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  const { data: billboard } = useQuery({
    queryKey: ["billboards"],
    queryFn: () => fetchBillboard("296b9a8c-1090-49bc-9e5b-badd3bfc626a"),
  });

  return (
    <div
      className="w-full h-[300px] bg-cover bg-center bg-no-repeat sm:h-[400px] md:h-[500px] lg:h-[900px]"
      style={{
        backgroundImage: `url(${billboard?.imageUrl || headerImage.src})`,
      }}
    >
      <div className="flex flex-col justify-center h-full pl-8 md:pl-16 lg:pl-24">
        <div className="flex flex-col w-60 md:w-80 lg:w-[700px] justify-center items-center lg:items-start lg:ml-20">
          <h1 className="text-[#1F2937] text-xl font-bold mt-4 md:text-2xl lg:text-6xl tracking-tighther lg:leading-tight">
            {billboard?.label || "Explore a World of Style"}{" "}
          </h1>
          <p className="text-[#69696A] text-xs font-bold max-w-[700px] mt-4 md:text-sm lg:text-sm lg:leading-relaxed">
            Explore our handpicked selection of the latest men&apos;s fashion
            trends. From classic suits to
            <br className="hidden lg:block" /> casual essentials, we have you
            covered.
          </p>
        </div>
      </div>
    </div>
  );
}
