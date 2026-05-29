import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div
      className={cn(
        "max-w-[1440px] mx-auto w-full px-4 md:px-16 py-12 md:py-20",
        className
      )}
    >
      {children}
    </div>
  );
}
