"use client";

import ShoppingModal from "@/components/modal/shopping-modal";
import WishlistModal from "@/components/modal/wishlist-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ShoppingModal />
      <WishlistModal />
    </>
  );
};
