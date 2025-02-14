import { cn } from "@/lib/utils/cn";
import { FC, useState } from "react";
import { Sidebar } from "../team/Alamin";
import { Navbar } from "../team/Hasib";
import { useAuth } from "@/lib/database/auth-context";

export const Parent: FC<IChildren> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const { user } = useAuth();

  return (
    <div className="flex w-full overflow-x-hidden">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className="transition-all h-screen overflow-y-hidden duration-300 w-full relative">
        <Navbar
          name={user?.name || ""}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <div className={cn(`overflow-x-hidden`)}>{children}</div>
      </div>
    </div>
  );
};
