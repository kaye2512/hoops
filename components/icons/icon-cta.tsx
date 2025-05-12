import BellButton from "../../../../components/button/bell-button";

import BagButton from "../../../../components/button/bag-button";

import HeartButton from "../../../../components/button/heart-button";

export default function IconCTA() {
  return (
    <div className="hidden sm:flex sm:items-center sm:gap-2 md:gap-3 lg:gap-4">
      <BellButton />
      <HeartButton />
      <BagButton />
    </div>
  );
}
