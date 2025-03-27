"use client";
import { Modal } from "../ui/modal";
import useShopingModal from "@/hooks/use-shoping-modal";
import Image from "next/image";
import { Button } from "../ui/button";
import SizeSelector from "./size-selector";
import { useState } from "react";

const sizeInfo = [
  {
    id: 1,
    size: "Small",
    inches: "120 by 18 inches",
  },
  {
    id: 2,
    size: "Medium",
    inches: "150 by 18 inches",
  },
];

export default function ShoppingModal() {
  const shopingModal = useShopingModal();
  const [selectedSizeId, setSelectedSizeId] = useState<number | null>(null);

  const handleSizeSelect = (id: number) => {
    setSelectedSizeId(id);
  };

  return (
    <div>
      <Modal
        isOpen={shopingModal.isOpen}
        onClose={shopingModal.onClose}
        title="Product"
        description="Add Product to your bag"
      >
        <div className="flex justify-between gap-4 w-full">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-[302px] relative">
              <Image
                src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-2 items-center mt-4">
              <div className="w-full h-[119px] relative cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1621665421571-2d325f9c7c6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product"
                  fill
                  className="object-cover "
                />
              </div>
              <div className="w-full h-[119px] relative cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1608363789638-70e879a9d988?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full h-[119px] relative cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light text-[#6B7280]">RMX-900</p>
              <p className="text-sm font-medium text-[#1D1D1F]">
                Cross Body Bag
              </p>
              <p className="text-sm font-medium text-[#1D1D1F] mt-2">900$</p>
            </div>
            <div className="flex gap-4  items-center mt-4">
              <div>
                <p className=" text-sm font-medium text-[#6B7280]">4.5/5</p>
              </div>

              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-[#1F2937] text-xl">
                    ★
                  </span>
                ))}
              </div>
              <div>
                <p className=" text-xs underline font-medium text-[#6B7280] cursor-pointer">
                  See all 18 reviews
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <p>Color</p>
              <div className="flex gap-2 items-center">
                <div className="h-8 w-8 border border-slate-500 items-center justify-center flex">
                  <div className="h-6 w-6 bg-[#F9A8D4] " />
                </div>

                <div className="h-6 w-6 bg-[#EF4444]" />
                <div className="h-6 w-6 bg-[#F59E0B]" />
                <div className="h-6 w-6 bg-[#E5E7EB]" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <p>Sizes</p>
              <div className="flex gap-2 items-center">
                {sizeInfo.map((sizes) => (
                  <SizeSelector
                    key={sizes.id}
                    size={sizes.size}
                    inches={sizes.inches}
                    isSelected={selectedSizeId === sizes.id}
                    onSelect={() => handleSizeSelect(sizes.id)}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs font-medium text-[#6B7280] underline mt-2 cursor-pointer">
              Find the perfect Sizes?
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <Button className="bg-[#111827] rounded-none">Add to Bag</Button>
              <Button variant={"outline"} className="rounded-none">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
