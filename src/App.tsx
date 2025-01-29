import { Dashboard, Login, Profile, Registration } from "@/components/pages";
import { Route, Routes } from "react-router";

// test parpas function
export function test() {}

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
