import { Route, Routes } from "react-router";
import Dashboard from "./components/pages/dashboard";
import Login from "./components/pages/login";
import Profile from "./components/pages/profile";
import Registration from "./components/pages/registration";

export const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
