import BagButton from "../button/bag-button";
import BellButton from "../button/bell-button";
import HeartButton from "../button/heart-button";

export default function IconCTA() {
  return (
    <div className="hidden sm:flex sm:items-center sm:gap-2 md:gap-3 lg:gap-4">
      <BellButton />
      <HeartButton />
      <BagButton />
    </div>
  );
}
