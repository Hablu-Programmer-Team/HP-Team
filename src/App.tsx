import {
  Dashboard,
  Login,
  ProfilePage,
  Registration,
} from "@/components/pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { Parent } from "./components/common";
import { ProtectedRoutes } from "./components/common/protected-routes";
import { SettingsPage } from "./components/pages/settings";
import { Tasks } from "./components/pages/tasks";
import { Contacts } from "./components/pages/contacts";

export const App = () => {
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
          path="/profile/settings"
          element={
            <ProtectedRoutes>
              <Parent>
                <SettingsPage />
              </Parent>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoutes>
              <Parent>
                <Contacts />
              </Parent>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/my-tasks"
          element={
            <ProtectedRoutes>
              <Parent>
                <Tasks />
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
