import { Dashboard, Login, Profile, Registration } from "@/components/pages";
import { Route, Routes } from "react-router";

export const App = () => (
  <Routes>
    <Route index element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />

    <Route
      path="*"
      element={
        <div className="text-center justify-center items-center h-screen mx-auto flex flex-col text-5xl">
          <span className="text-red-500 pt-20">404!</span>
          <span className="text-black dark:text-gray-400 text-3xl">
            Page not found in MyBar2
          </span>
        </div>
      }
    />
  </Routes>
);
