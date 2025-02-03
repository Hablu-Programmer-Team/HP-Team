import { ChangeEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export const Input = ({
  className,
  type,
  ...props
}: {
  className?: string;
  type?: string;
  name?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      className={cn("border p-2 rounded-md w-full", className)}
      {...props}
    />
  );
};

export const Dialog = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      {children}
    </div>
  );
};

export const DialogContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-white p-6 rounded-md shadow-lg", className)}>
      {children}
    </div>
  );
};

export const DialogTrigger = ({
  children,
  onClick,
  asChild,
}: {
  children: ReactNode;
  onClick?: () => void;
  asChild?: boolean;
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};
