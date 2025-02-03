import { FC } from "react";

interface FeildProps extends IClassNameWithChildren {
  htmlFor?: string;
  error?: string;
  label?: string;
}

const Field: FC<FeildProps> = ({
  label,
  children,
  htmlFor,
  error,
  className,
}) => (
  // const id = htmlFor || getChildID(children);
  <div className={`${className} overflow-hidden rounded-xl`}>
    {label && <label htmlFor={htmlFor}>{label}</label>}
    {children}
    {!!error && <div role="alert">{error}</div>}
  </div>
);
// const getChildID = (children: ReactNode) {
//   const child = React.Children.only(children);
//   if ("id" in child.props) {
//     return child.props.id;
//   }
// }

export default Field;
