import { create } from "zustand";

interface WishlistModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useWishlistModal = create<WishlistModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useWishlistModal;
