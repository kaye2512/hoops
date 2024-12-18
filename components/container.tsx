import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "max-w-[1800px] mx-auto md:px-10 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </section>
  );
}
