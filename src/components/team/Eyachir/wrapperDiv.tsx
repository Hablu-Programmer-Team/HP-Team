import type { FC, ReactNode } from "react";

interface ChildProps {
  children?: ReactNode;
  className?: string;
}
export const WrapperDiv: FC<ChildProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);
