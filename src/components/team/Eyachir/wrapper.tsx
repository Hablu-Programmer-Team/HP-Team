import { FC } from "react";

export const WrapperDiv: FC<IClassNameWithChildren> = ({
  className,
  children,
}) => <div className={className}>{children}</div>;
