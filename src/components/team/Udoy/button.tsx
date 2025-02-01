import { cn } from "@/lib/utils/cn";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// size styles: by default button size will be response style
const sizeStyles: Record<string, string> = {
  sm: "px-[1rem] py-[0.375rem]",
  lg: "px-[1rem] py-[0.5rem]",
  responsive: "px-[1rem] py-[0.375rem] lg:px-[0.75rem] lg:py-[0.5rem]",
};
// variant styles: by default variant style will be primary
const variantStyles: Record<string, string> = {
  primary: "bg-link-700",
  secondary: "border border-link-700 text-link-700",
  neutral: "neutral-text-background",
  normal: "text-link-700",
  ghost: "border border-gray-300",
};

// export const Button2: FC<IProps> = (props) => {
//   const {
//     children,
//     variant = "primary",
//     size = "responsive",
//     disabled,
//     // hover = "hover:opacity-80",
//     flex,
//     round,
//     colors,
//     font,
//     textSize,
//     className = "",
//     disabledClass = "opacity-50 border border-gray-400 bg-gray-400",
//     ...others
//   } = props;

//   // const hoverStyle = hover === "auto" ? "hover:scale-105" : hover;
//   const roundedStyle =
//     round === "sm" ? "rounded-sm" : round === "md" ? "rounded-md" : round;
//   const flexStyle = "flex items-center justify-center text-nowrap gap-1";
//   const textColor = colors ? colors : "text-black";
//   const fontBoldStyle =
//     font === "b" ? "font-bold" : font === "ex" ? "font-extrabold" : font;
//   const generateClassNames = (...classes: unknown[]): string =>
//     classes.filter(Boolean).join(" ");

//   const btnClasses =
//     className ||
//     generateClassNames(
//       fontBoldStyle,
//       textColor,
//       textSize || "text-[0.8125rem]",
//       flex && flexStyle,
//       roundedStyle || "rounded-full",
//       // hoverStyle,
//       sizeStyles[size] || size,
//       disabled ? disabledClass : variantStyles[variant] ?? variant,
//       disabled ? "cursor-not-allowed" : "cursor-pointer",
//       "transition duration-200"
//     );
//   return (
//     <button className={cn(btnClasses)} {...others}>
//       {children}
//     </button>
//   );
// };

import { cva, type VariantProps } from "class-variance-authority";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-link-700 text-black shadow hover:bg-link-700/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        accent: "hover:bg-primary-500 ",
        outline:
          "border bg-background shadow-sm border border-link-700 text-link-700 hover:bg-link-700 ",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2",
        sm: " rounded-md px-3 text-xs",
        lg: " rounded-md px-8",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
