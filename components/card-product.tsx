"use client";
import { ArrowRight } from "lucide-react";

export function CardProduct(props: {
  name: string;
  image: string;
  category: string;
  seller: string;
}) {
  return (
    <div className={"p-3 border rounded-lg w-full h-full relative "}>
      <div className="p-5">
        <div className="py-8">
          <p className="font-bold uppercase text-[#1D1D1F]">{props.name}</p>
        </div>
        <div
          className="rounded-lg border w-full h-[450px] relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${props.image})` }}
        />
        <div className="mt-8 flex justify-between">
          <div>
            <p className="text-[#87878C]">{props.category}</p>
            <span className="font-bold text-[#1D1D1F]">{props.seller}</span>
          </div>

          <div className="flex items-center">
            <ArrowRight className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
