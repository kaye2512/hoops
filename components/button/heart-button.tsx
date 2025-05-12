"use client";
import Heart from "@/components/icons/heart";
import useWishlistModal from "@/hooks/use-wishlist-modal";

export default function HeartButton() {
  const WishlistModal = useWishlistModal();
  return (
    <Heart
      size={90}
      className="h-6 w-6 sm:h-7 sm:w-7 md:h-6 md:w-6 lg:h-6 lg:w-6 cursor-pointer"
      onClick={WishlistModal.onOpen}
    />
  );
}
