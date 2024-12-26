import Image from "next/image";
import location from "@/public/images/location.png";

export default function Location(props: {
  size?: number;
  heightsize?: number;
  className?: string;
}) {
  return (
    <Image
      src={location}
      width={props.size}
      height={props.heightsize}
      alt="location"
      {...props}
    />
  );
}
