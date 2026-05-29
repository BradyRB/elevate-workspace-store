import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  delta: string;
  isPositive?: boolean;
  icon: LucideIcon;
  gradient?: boolean;
}

export default function StatCard({
  label,
  value,
  delta,
  isPositive = true,
  icon: Icon,
  gradient = false,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-[#ffffff] border border-[#c7c6ca] rounded-lg p-5 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(26,27,31,0.05)] flex flex-col justify-between h-32",
        gradient && "bg-gradient-to-br from-white to-[#f4f3f8]"
      )}
    >
      <div className="flex justify-between items-start">
        <span className="font-sans text-[11px] font-semibold text-[#76777b] uppercase tracking-wider">
          {label}
        </span>
        <Icon className="w-4 h-4 text-[#76777b]/60" />
      </div>
      <div className="flex items-end justify-between mt-auto">
        <span className="font-sans text-2xl font-bold text-black leading-none">
          {value}
        </span>
        <span
          className={cn(
            "font-mono text-xs font-semibold leading-none",
            isPositive ? "text-[#47636c]" : "text-[#76777b]"
          )}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}
