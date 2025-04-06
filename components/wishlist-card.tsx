import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
export default function WishlistCard() {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className="w-full border border-slate-200 rounded-xl mb-4 relative">
        <Image
          src="https://images.unsplash.com/photo-1565530557873-14ab8a68a85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="wishlist"
          width={500}
          height={300}
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <X className="w-4 h-4 text-[#D0011B]" />
        </div>
      </div>
      <div className="flex justify-between">
        <p>Product Name</p>
        <ChevronDown className="w-5 h-5 text-[#1D1D1F] cursor-pointer" />
      </div>
    </div>
  );
}
