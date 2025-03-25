import { create } from "zustand";

interface ShopingModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useShopingModal = create<ShopingModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useShopingModal;
