import { buttonVariants } from "@/lib/helpers";
import { cn } from "@/lib/utils/cn";
import { type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, children, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, radius, size, className }))}
      ref={ref}
      children={<div className="relative z-10">{children}</div>}
      {...props}
    />
  )
);

Button.displayName = "Button";
