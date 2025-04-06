import useWishlistModal from "@/hooks/use-wishlist-modal";
import { Modal } from "../ui/modal";
import WishlistCard from "../wishlist-card";

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
    </Modal>
  );
}
