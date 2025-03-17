"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

export default function HeartButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="flex h-8 w-8 items-center justify-center bg-white border rounded-lg gap-2 cursor-pointer"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
        "
      />
      <AiFillHeart
        size={24}
        className={isFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}
