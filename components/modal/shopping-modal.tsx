import { Modal } from "../ui/modal";
import useShopingModal from "@/hooks/use-shoping-modal";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ShoppingModal() {
  const shopingModal = useShopingModal();
  return (
    <div>
      <Modal
        isOpen={shopingModal.isOpen}
        onClose={shopingModal.onClose}
        title="Shopping Cart"
        description="Your cart"
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
                  src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product"
                  fill
                  className="object-cover "
                />
              </div>
              <div className="w-full h-[119px] relative cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full h-[119px] relative cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <p className=" text-xs underline font-medium text-[#6B7280]">
                  See all 18 reviews
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <p>Color</p>
              <div className="flex gap-2 items-center">
                <div className="h-6 w-6 bg-[#F9A8D4]" />
                <div className="h-6 w-6 bg-[#EF4444]" />
                <div className="h-6 w-6 bg-[#F59E0B]" />
                <div className="h-6 w-6 bg-[#E5E7EB]" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <p>Sizes</p>
              <div className="flex gap-2 items-center">
                <div className="flex flex-col h-16 w-full justify-center border border-slate-200 px-4 cursor-pointer">
                  <p>Small</p>
                  <p className="text-sm font-medium text-[#6B7280]">
                    120 by 18 inches
                  </p>
                </div>
                <div className="flex flex-col h-16 w-full justify-center border border-slate-200 px-4 cursor-pointer">
                  <p>Medium</p>
                  <p className="text-sm font-medium text-[#6B7280]">
                    150 by 18 inches
                  </p>
                </div>
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
