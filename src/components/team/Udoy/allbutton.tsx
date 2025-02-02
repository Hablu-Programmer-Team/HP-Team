import { FC } from "react";
import { CommentIcon } from "../Eyachir/icons";
import { Button } from "./button";

type ButtonVariants = "primary" | "secondary" | "accent" | "outline";
type ButtonSizes = "sm" | "md" | "lg" | "xl" | "icon";
type ButtonRadius = "sm" | "md" | "lg" | "xl" | "full";

const buttonVariants: ButtonVariants[] = [
  "primary",
  "secondary",
  "accent",
  "outline",
];
const buttonSizes: ButtonSizes[] = ["sm", "md", "lg", "xl", "icon"];
interface ButtonGroupProps {
  variant: ButtonVariants;
  radius: ButtonRadius;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ variant, radius }) => (
  <div className="flex gap-3">
    <Button variant={variant}>Click me</Button>
    {buttonSizes.map((size) => (
      <Button key={size} variant={variant} size={size} radius={radius}>
        {size === "icon" ? <CommentIcon /> : "Click me"}
      </Button>
    ))}
  </div>
);

export const AllButton = () => (
  <div className="space-y-20 py-20">
    {/* Full Radius Buttons */}
    <div className="flex flex-col gap-3 items-center">
      {buttonVariants.map((variant) => (
        <ButtonGroup key={variant} variant={variant} radius="full" />
      ))}
    </div>
    {/* Extra Large Radius Buttons */}
    <div className="flex flex-col gap-3 justify-center items-center">
      {buttonVariants.map((variant) => (
        <ButtonGroup key={variant} variant={variant} radius="xl" />
      ))}
    </div>

    {/* Large Radius Buttons */}
    <div className="flex flex-col gap-3 justify-center items-center">
      {buttonVariants.map((variant) => (
        <ButtonGroup key={variant} variant={variant} radius="lg" />
      ))}
    </div>
    {/* Medium radius Buttons */}
    <div className="flex flex-col gap-3 justify-center items-center">
      {buttonVariants.map((variant) => (
        <ButtonGroup key={variant} variant={variant} radius="md" />
      ))}
    </div>
    {/* Small radius Buttons */}
    <div className="flex flex-col gap-3 justify-center items-center">
      {buttonVariants.map((variant) => (
        <ButtonGroup key={variant} variant={variant} radius="sm" />
      ))}
    </div>
  </div>
);
