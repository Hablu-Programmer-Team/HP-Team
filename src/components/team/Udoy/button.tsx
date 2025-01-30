import type { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IProps extends ButtonProps {
  variant?: string;
  size?: string;
  flex?: boolean;
  disabledClass?: string;
  hover?: string;
  round?: string;
  font?: string;
  colors?: string;
  extra?: string;
}
const sizeStyles: Record<string, string> = {
  sm: "px-[1rem] py-[0.375rem]",
  lg: "px-[1rem] py-[0.5rem]",
  responsive: "px-[1rem] py-[0.375rem] lg:px-[0.75rem] lg:py-[0.5rem]",
};
const variantStyles: Record<string, string> = {
  primary: "bg-link-700",
  secondary: "border border-link-700",
  neutral: "neutral-text-background",
  white: "text-link-700",
  normal: "border border-gray-600",
};

export const Button: FC<IProps> = ({
  children,
  variant = "primary",
  size = "responsive",
  disabled,
  onClick,
  hover = "hover:opacity-80",
  flex,
  round,
  colors,
  extra,
  font,
  className = "",
  disabledClass = "opacity-50 border border-gray-400 bg-gray-400",
}) => {
  // ......................
  // =====------------=========
  const hoverStyle: string = hover === "auto" ? "hover:scale-105" : hover;
  const roundedStyle: unknown =
    round === "sm" ? "rounded-sm" : round === "md" ? "rounded-md" : round;
  const flexStyle = "flex items-center justify-center text-nowrap gap-1";
  const textColor = `${
    colors === "white" ? "text-white" : colors === "black" ? "text-black" : colors
  }`;
  const fontSize =
    font === "b" ? "font-bold" : font === "ex" ? "font-extrabold" : font;

  const generateClassNames = (...classes: unknown[]): string =>
    classes.filter(Boolean).join(" ");

  const btnClasses =
    className ||
    generateClassNames(
      fontSize || "font-normal",
      textColor,
      flex && flexStyle,
      roundedStyle || "rounded-full",
      hoverStyle,
      sizeStyles[size] || size,
      disabled ? disabledClass : variantStyles[variant] ?? variant,
      extra,
      disabled ? "cursor-not-allowed" : "cursor-pointer",
      "transition duration-200"
    );
  return (
    <button onClick={onClick} disabled={disabled} className={btnClasses}>
      {children}
    </button>
  );
};
