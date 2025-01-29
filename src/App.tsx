import { Dashboard, Login, Profile, Registration } from "@/components/pages";
import { Route, Routes } from "react-router";
import Sidebar from "./components/team/Alamin/Sidebar";

export const App = () => (
  <Routes>
    <Route index element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
);
