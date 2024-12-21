import Image from "next/image";
import notif from "@/public/images/notif.png";

export default function Notif(props: { size?: number; className?: string }) {
  return (
    <Image
      src={notif}
      width={props.size}
      height={props.size}
      alt="notif"
      {...props}
    />
  );
}
