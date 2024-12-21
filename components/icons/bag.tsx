import Image from "next/image";
import bag from "@/public/images/bag.png";

export default function Bag(props: { size?: number; className?: string }) {
  return (
    <Image
      src={bag}
      width={props.size}
      height={props.size}
      alt="bag"
      {...props}
    />
  );
}
