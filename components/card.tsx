import Image from "next/image";

export default function Card(props: {
  name: string;
  price: number;
  url: string;
  new?: boolean;
}) {
  return (
    <div className="p-3 border">
      <div className="flex justify-between">
        <p>{props.name}</p>
        <p className="underline">{props.new ? "New" : "Sale"}</p>
      </div>
      <div className="mt-1">
        <span className="font-bold">{props.price}</span>
      </div>
      <div>
        <Image src={props.url} alt="" width={500} height={300} />
      </div>
      <div className="justify-self-end">
        <div className="border bg-black rounded-full h-4 w-4 cursor-pointer " />
      </div>
    </div>
  );
}
