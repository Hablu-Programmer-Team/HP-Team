import { FC } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRoutesProps = {
  children: React.ReactNode;
};

export const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authUser");
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};
