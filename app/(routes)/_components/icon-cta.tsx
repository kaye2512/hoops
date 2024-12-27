import BellButton from "./bell-button";

import BagButton from "./bag-button";

import HeartButton from "./heart-button";

export default function IconCTA() {
  return (
    <div className="hidden sm:flex sm:items-center sm:gap-2 md:gap-3 lg:gap-4">
      <BellButton />
      <HeartButton />
      <BagButton />
    </div>
  );
}
