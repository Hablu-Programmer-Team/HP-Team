import type { FC, ReactNode } from "react";

interface ChildProps {
  children?: ReactNode;
  classNmae?: string;
}
const ConicGradientDiv: FC<ChildProps> = ({ children, classNmae }) => (
  <div className={classNmae}>{children}</div>
);

export default ConicGradientDiv;
