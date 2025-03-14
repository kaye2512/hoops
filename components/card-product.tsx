"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CardProduct(props: {
  name: string;
  image: string;
  category: string;
  seller: string;
}) {
  return (
    <div className="p-3 border rounded-lg w-full h-[580px]">
      <div className="py-8 px-4">
        <p className="font-bold uppercase text-[#1D1D1F]">{props.name}</p>
      </div>
      <div className="rounded-lg border w-full h-[372px] relative   ">
        <Image
          src={props.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 624px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="mt-8 flex justify-between">
        <div>
          <p className="text-[#87878C]">{props.category}</p>
          <span className="font-bold text-[#1D1D1F]">{props.seller}</span>
        </div>

        <div className="flex items-center ">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
