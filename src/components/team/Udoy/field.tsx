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
  <div className={`${className} overflow-hidden rounded-xl`}>
    {label && <label htmlFor={htmlFor}>{label}</label>}
    {children}
    {!!error && <div role="alert">{error}</div>}
  </div>
);
