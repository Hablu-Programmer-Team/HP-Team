import { cn } from "@/lib/utils/cn";
import { FC } from "react";

interface FieldProps extends IClassNameWithChildren {
  htmlFor?: string;
  error?: string;
  label?: string;
}

export const Field: FC<FieldProps> = ({
  label,
  children,
  htmlFor,
  error,
  className,
}) => (
  <div className={cn("overflow-hidden rounded-xl", className)}>
    {label && <label htmlFor={htmlFor}>{label}</label>}
    {children}
    {!!error && <div role="alert">{error}</div>}
  </div>
);
