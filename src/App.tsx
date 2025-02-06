import {
  Dashboard,
  Login,
  ProfilePage,
  Registration,
} from "@/components/pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { Parent } from "./components/common";
import { ProtectedRoutes } from "./components/common/protected-routes";
import { initializeUsers } from "./lib/database/users";

export const App = () => {
  initializeUsers();
  return (
    <div className="bg-[#030712] text-slate-200">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          index
          element={
            <ProtectedRoutes>
              <Parent>
                <Dashboard />
              </Parent>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Parent>
                <Dashboard />
              </Parent>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Parent>
                <ProfilePage />
              </Parent>
            </ProtectedRoutes>
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
              state={{ from: window.location.pathname }}
            />
          }
        />
      </Routes>
    </div>
  );
};
