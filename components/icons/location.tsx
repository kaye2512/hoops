import Image from "next/image";
import location from "@/public/images/location.png";

export default function Location(props: { size?: number; className?: string }) {
  return (
    <Image
      src={location}
      width={props.size}
      height={props.size}
      alt="location"
      {...props}
    />
  );
}
