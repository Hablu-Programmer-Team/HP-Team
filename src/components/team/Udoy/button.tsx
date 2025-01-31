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


export const Button: FC<IProps> = ({
  children,
  //   if you pass variant props like variant="primary" or "secodary" then it will get coustom style. which has given in the variantStyles object that has decleared above the Button components. if you do not want to use my custom styles then you can give your custom class in this props like px-* , py-* or widht ,hight; also can change background style like bg-green-500 , by default variant style will be primary
  variant = "primary",

  //   if you pass size props like size="sm" it will work because of my custom classes. which has given in the sizeStyles props. if you do not want to use my custom style then you can pass your default style like px-* py* or you can use width height like w-[100px] or h-96. by default it will be responsve style
  size = "responsive",
  //   if button is disabled
  disabled,
  onClick,
  //   you can pass hover effect also, if you dont pass hover props then it will be default style
  hover = "hover:opacity-80",
  flex,
  round,
  //   you can change text color, to passing colors props like colors="text-white" or text-green-500 or you can use custom tailwindcss class like text-gray-600.
  colors,
  font,
  textSize,
  className = "",
  disabledClass = "opacity-50 border border-gray-400 bg-gray-400",
}) => {
  // first of all you need to read every coad line by line.
  // ......................
  // =====------------=========
  //   you will be able to cahange hover style by passing prpos like hover="hover:text-bg-green" or they can use hover:"auto" for getting deafult coustom hover;
  //   if does not pass hover props in this case hoverStyle will take default value. which has given in the props as a default value
  const hoverStyle = hover === "auto" ? "hover:scale-105" : hover;
  //   you will be able to cahange rouned style by passing prpos like round="sm" or "md" or they can use there coustom class;
  //   if does not pass hover pros it will take rounded-full
  const roundedStyle =
    round === "sm" ? "rounded-sm" : round === "md" ? "rounded-md" : round;
  // if you want to use icons then you will be able to use flex for giving flex vibe
  const flexStyle = "flex items-center justify-center text-nowrap gap-1";
  //  you will be able to change also text color if you dont pass colors props then by default it will balck color. also you can pass taiwlindcss color style like text-green-500 something like.
  const textColor = colors ? colors : "text-black";
  //   font pros will do same thing
  const fontBoldStyle =
    font === "b" ? "font-bold" : font === "ex" ? "font-extrabold" : font;
  //   generateClassNames function will return all the className if its arguments are turthy value;
  const generateClassNames = (...classes: unknown[]): string =>
    classes.filter(Boolean).join(" ");

  //   above has given className props for custom styling if you do not want to use my default style then you can use className like you use the button ClassName,
  //   in this case my customclass will not render. only will render your custom class that you will give in the classname props
  const btnClasses =
    //   if you pass className in the button props then a single customs style also won't work. you have passed className props, menas you want to use your custom class am i right.
    className ||
    // if you do not pass className that means you want to use my coustom style.  to do that you can pass props to style the button without writeing long classname
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
    <button onClick={onClick} disabled={disabled} className={btnClasses}>
      {children}
    </button>
  );
};
