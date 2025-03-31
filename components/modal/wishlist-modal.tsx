import useWishlistModal from "@/hooks/use-wishlist-modal";
import { Modal } from "../ui/modal";

export default function WishlistModal() {
  const WishlistModal = useWishlistModal();
  return (
    <Modal
      isOpen={WishlistModal.isOpen}
      onClose={WishlistModal.onClose}
      title="Wishlist"
      description="Add Product to your bag"
    ></Modal>
  );
}
