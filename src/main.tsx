import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./lib/database/auth-context.tsx";
import { TaskDataProvider } from "./provider/task-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TaskDataProvider>
          <App />
        </TaskDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
