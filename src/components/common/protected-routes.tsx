import { Navigate } from "react-router-dom";
import { useAuth } from "./auth-context";

// type ProtectedRoutesProps = {
//   children: React.ReactNode;
// };

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useAuth();
  // const isAuthenticated = localStorage.getItem("authUser");
  return user ? <>{children}</> : <Navigate to="/login" />;
};
