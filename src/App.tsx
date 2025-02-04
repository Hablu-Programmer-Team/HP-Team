import { Dashboard, Login, Profile, Registration } from "@/components/pages";
import { Route, Routes } from "react-router-dom";
import { Parent } from "./components/common";

export const App = () => (
  <div className="bg-[#030712] text-slate-200">
    <Routes>
      <Route
        index
        element={
          <Parent>
            <Dashboard />
          </Parent>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/dashboard"
        element={
          <Parent>
            <Dashboard />
          </Parent>
        }
      />
      <Route
        path="/profile"
        element={
          <Parent>
            <Profile />
          </Parent>
        }
      />

      <Route
        path="*"
        element={
          <div className="text-center justify-center items-center mx-auto flex flex-col text-5xl h-screen">
            <span className="text-red-500">404!</span>
            <span className="text-black dark:text-gray-400 text-3xl">
              Page not found
            </span>
          </div>
        }
      />
    </Routes>
  </div>
);
