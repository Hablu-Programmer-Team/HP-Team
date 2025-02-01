import type { FC, ReactNode } from "react";

interface ChildProps {
  children?: ReactNode;
  className?: string;
}
const ConicGradientDiv: FC<ChildProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default ConicGradientDiv;
