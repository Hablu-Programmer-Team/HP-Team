import { Navigate } from "react-router-dom";
import { useAuth } from "../../lib/database/auth-context";

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};
