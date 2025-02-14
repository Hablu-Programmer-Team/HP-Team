import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/database/auth-context";

export const useLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/login");
    }, 100);
  };

  return handleLogout;
};
