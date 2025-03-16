"use client";

import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { type CheckedState } from "@radix-ui/react-checkbox";

export default function CategoryCheckbox(props: { name: string }) {
  /* ajoute du state pour le coté UI si le checkbox est coché alors la div a un background gris */
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`flex items-center p-2 gap-2 w-full h-9 rounded-lg cursor-pointer transition-colors duration-200 ease-in-out
        ${isChecked ? "bg-gray-100" : "hover:bg-gray-100 active:bg-gray-100"}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <Checkbox
        checked={isChecked}
        onCheckedChange={(checked: CheckedState) => setIsChecked(!!checked)}
      />
      <label className="ml-1 text-sm text-[#1D1D1F] font-medium cursor-pointer">
        {props.name}
      </label>
    </div>
  );
}
