import Image from "next/image";
import notif from "@/public/images/notif-iconly.png";

export default function Notif(props: {
  size?: number;
  heightsize?: number;
  className?: string;
}) {
  return (
    <Image
      src={notif}
      width={props.size}
      height={props.heightsize}
      alt="notif"
      {...props}
    />
  );
}
