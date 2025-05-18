"use client";
import fetchCategories from "@/actions/get-categories";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";

export default function SelectOption() {
  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategories,
  });
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
              {categories && categories.length > 0 ? (
                categories.map((category) => (
                  <SelectItem
                    key={category.id}
                    value={category.id}
                    className="text-sm"
                  >
                    {category.name}
                  </SelectItem>
                ))
              ) : (
                <>
                  <SelectItem value="Men">Men&apos;s</SelectItem>
                  <SelectItem value="Women">Women&apos;s</SelectItem>
                  <SelectItem value="Kid">Kid</SelectItem>
                </>
              )}
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>
    </div>
  );
}
