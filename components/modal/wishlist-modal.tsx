import useWishlistModal from "@/hooks/use-wishlist-modal";
import { Modal } from "../ui/modal";
import WishlistCard from "../wishlist-card";
import { Button } from "../ui/button";

export default function WishlistModal() {
  const WishlistModal = useWishlistModal();
  return (
    <Modal
      isOpen={WishlistModal.isOpen}
      onClose={WishlistModal.onClose}
      title="Wishlist"
      description="Add Product to your bag"
    >
      <div className="flex gap-4">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <p className="text-xs font-medium text-[#6B7280]">MK617</p>
        <p className="text-xs font-medium text-[#1D1D1F]">Belge brown</p>
        <div className="flex flex-col gap-2">
          <p className="text-xs  text-[#1D1D1F]">42 sizes</p>

          <p className="text-xs  text-[#1D1D1F]">$1,000</p>
        </div>
      </div>
      <div className="flex  gap-4 mt-4">
        <Button variant={"outline"} className="rounded-none">
          More information
        </Button>
        <Button className="bg-[#111827] rounded-none w-40">Add to cart</Button>
      </div>
    </Modal>
  );
}
