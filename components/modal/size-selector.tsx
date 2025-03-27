export default function SizeSelector(props: {
  size: string;
  inches: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={`flex flex-col h-16 w-full justify-center border border-slate-200 px-4 cursor-pointer hover:border-[#000000] transition ease-in-out duration-300
                    ${
                      props.isSelected
                        ? "border-[#000000]"
                        : "hover:border-[#000000]"
                    }`}
      onClick={props.onSelect}
    >
      <p>{props.size}</p>
      <p className="text-sm font-medium text-[#6B7280]">{props.inches}</p>
    </div>
  );
}
