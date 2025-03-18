import Image from "next/image";
import HeartButton from "../ui/heart-button";
import { LockKeyhole } from "lucide-react";
import PromoBadge from "./promo-badge";

export default function ProductCard(props: {
  name: string;
  price: number;
  url: string;
  description?: string;
  access?: boolean;
  accessText?: string;
  promo?: boolean;
  promoMessage: string;
}) {
  return (
    <div>
      <div className="w-full border border-slate-200 rounded-xl mb-4 relative">
        <Image
          src={props.url}
          alt={props.name}
          width={500}
          height={300}
          className=""
        />
        {props.promo && (
          <div className="absolute top-3 left-3 flex gap-2">
            <PromoBadge message={props.promoMessage} />
          </div>
        )}

        <div className="absolute top-3 right-3">
          <HeartButton />
        </div>
      </div>

      {props.access ? (
        <p className="text-xs text-[#D0011B] mb-2">{props.accessText}</p>
      ) : (
        <div className="flex items-center gap-2 mb-2">
          <LockKeyhole className="w-4 h-4 text-[#D0011B]" />
          <p className="text-xs text-[#D0011B]">{props.accessText}</p>
        </div>
      )}

      <h3 className="text-[#1D1D1F] mb-1">{props.name}</h3>

      {props.description && (
        <p className="text-xs text-[#1D1D1F] mb-1">{props.description}</p>
      )}

      <p className="text-lg text-[#1D1D1F] font-bold">$ {props.price}</p>
    </div>
  );
}
