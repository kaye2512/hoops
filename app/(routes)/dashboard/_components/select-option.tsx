import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectOption() {
  return (
    <div>
      <Select>
        <SelectTrigger className="border-none pl-4">
          <SelectValue placeholder="Men's" />
          <SelectContent className="w-[180px]">
            <SelectGroup>
              <SelectLabel className="text-sm font-medium text-[#B3B3B3]">
                Category
              </SelectLabel>
              <SelectItem value="Men">Men&apos;s</SelectItem>
              <SelectItem value="Women">Women&apos;s</SelectItem>
              <SelectItem value="Kid">Kid</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>
    </div>
  );
}
