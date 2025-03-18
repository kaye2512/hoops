import { Badge } from "../ui/badge";

export default function PromoBadge(props: { message: string }) {
  return (
    <Badge
      variant={"outline"}
      className="bg-[#D0011B] text-[#FFFFFF] cursor-pointer rounded-xl"
    >
      {props.message}
    </Badge>
  );
}
