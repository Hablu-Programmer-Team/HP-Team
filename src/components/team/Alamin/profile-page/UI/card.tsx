import { cn } from "@/lib/utils/cn";
import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        `py-2 px-3 md:py-4 md:px-5 border border-link-700/50 rounded-xl bg-linear-to-t from-white/5 to-transparent`,
        className
      )}
    >
      {children}
    </div>
  );
};
