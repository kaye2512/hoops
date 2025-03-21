import { Button } from "@/components/ui/button";

export default function RightBagSection() {
  return (
    <div className="w-full h-full bg-[#F9FAFB] p-4 flex flex-col">
      <h2 className="text-xl font-semibold text-[#1D1D1F] mb-6">
        Order Summary
      </h2>
      <div className="flex flex-col flex-1 md:justify-between lg:justify-between ">
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-[#1D1D1F]">Subtotal</p>
            <p className="text-sm font-medium text-[#1D1D1F]">$100.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium text-[#1D1D1F]">Shipping</p>
            <p className="text-sm font-medium text-[#1D1D1F]">$0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium text-[#1D1D1F]">Tax</p>
            <p className="text-sm font-medium text-[#1D1D1F]">$0.00</p>
          </div>
        </div>
        <div className="mt-8  lg:mt-0 gap-4 flex flex-col">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-[#1D1D1F]">Total</p>
            <p className="text-lg font-semibold text-[#1D1D1F]">$100.00</p>
          </div>
          <Button className="w-full rounded-none bg-[#111827]">Checkout</Button>
        </div>
      </div>
    </div>
  );
}
