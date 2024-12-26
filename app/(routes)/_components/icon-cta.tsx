import BellButton from "./bell-button";

import BagButton from "./bag-button";

import HeartButton from "./heart-button";

export default function IconCTA() {
  return (
    <div className="flex items-center gap-4 max-lg:gap-3 max-md:gap-2 max-sm:hidden">
      <BellButton />
      <HeartButton />
      <BagButton />
    </div>
  );
}
