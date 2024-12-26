import Image from "next/image";
import heart from "../../public/images/fav.png";

export default function Heart(props: {
  size?: number;
  heightsize?: number;
  className?: string;
}) {
  return (
    <Image
      src={heart}
      width={props.size}
      height={props.heightsize}
      alt="heart"
      {...props}
    />
  );
}
