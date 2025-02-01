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
  textSize?: string;
}
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

export const Button: FC<IProps> = (props) => {
  const {
    children,
    variant = "primary",
    size = "responsive",
    disabled,
    hover = "hover:opacity-80",
    flex,
    round,
    colors,
    font,
    textSize,
    className = "",
    disabledClass = "opacity-50 border border-gray-400 bg-gray-400",
    ...others
  } = props;

  const hoverStyle = hover === "auto" ? "hover:scale-105" : hover;
  const roundedStyle =
    round === "sm" ? "rounded-sm" : round === "md" ? "rounded-md" : round;
  const flexStyle = "flex items-center justify-center text-nowrap gap-1";
  const textColor = colors ? colors : "text-black";
  const fontBoldStyle =
    font === "b" ? "font-bold" : font === "ex" ? "font-extrabold" : font;
  const generateClassNames = (...classes: unknown[]): string =>
    classes.filter(Boolean).join(" ");

  const btnClasses =
    className ||
    generateClassNames(
      fontBoldStyle,
      textColor,
      textSize || "text-[0.8125rem]",
      flex && flexStyle,
      roundedStyle || "rounded-full",
      hoverStyle,
      sizeStyles[size] || size,
      disabled ? disabledClass : variantStyles[variant] ?? variant,
      disabled ? "cursor-not-allowed" : "cursor-pointer",
      "transition duration-200"
    );
  return (
    <button className={btnClasses} {...others}>
      {children}
    </button>
  );
};
