import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authUser");

    setTimeout(() => {
      navigate("/login");
    }, 100);
  };

  return logout;
};
