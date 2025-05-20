import Image from "next/image";
import bag from "@/public/images/bag - outline.png";

export default function Bag(props: {
  size?: number;
  heightsize?: number;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Image
      src={bag}
      width={props.size}
      height={props.heightsize}
      alt="bag"
      {...props}
    />
  );
}
