import {
  Dashboard,
  Login,
  ProfilePage,
  Registration,
} from "@/components/pages";
import { Route, Routes } from "react-router";

export const App = () => (
  <Routes>
    <Route index element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);
