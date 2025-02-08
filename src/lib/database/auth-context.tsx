import { initializeUsers, User } from "@/lib/database/users";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (updatedUser: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate();

  const updateUser = (updatedData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      localStorage.setItem("authUser", JSON.stringify(updatedUser));
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u: User) =>
      u.email === user?.email ? { ...u, ...updatedData } : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  useEffect(() => {
    initializeUsers();
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (user: User) => user.email === email && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("authUser", JSON.stringify(foundUser));
      navigate("/dashboard");
      return true;
    }
    return false;
  };

  const signup = (name: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u: User) => u.email === email)) {
      return false; // Email already exists
    }

    const newUser = { name, email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setUser(newUser);
    localStorage.setItem("authUser", JSON.stringify(newUser));
    navigate("/dashboard");
    return true;
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
