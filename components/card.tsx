import Image from "next/image";
import sweatwear from "@/public/images/ryan-hoffman-A7f7XRKgUWc-unsplash.jpg";

export default function Card() {
  return (
    <div className="px-6">
      <div className="flex justify-between">
        <p>Card</p>
        <p>New</p>
      </div>
      <div className="mt-1">
        <span className="font-bold">$100</span>
      </div>
      <div>
        <Image src={sweatwear} alt="" width={500} height={300} />
      </div>
    </div>
  );
}
