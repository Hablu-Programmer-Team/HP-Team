import { FC } from "react";
import { Sidebar } from "../team/Alamin";
import { Navbar } from "../team/Hasib";

export const Parent: FC<IChildren> = ({ children }) => (
  <div className="flex w-full">
    <Sidebar />

    <div className="w-full">
      <Navbar />
      <div className="h-[90svh] p-2.5 overflow-y-auto">{children}</div>
    </div>
  </div>
);
