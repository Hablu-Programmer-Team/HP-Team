import { cn } from "@/lib/utils/cn";
import { FC, useState } from "react";
import { Sidebar } from "../team/Alamin";
import { Navbar } from "../team/Hasib";

export const Parent: FC<IChildren> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div className="flex w-full overflow-x-hidden">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className="transition-all h-screen overflow-y-hidden duration-300 w-full relative">
        <Navbar
          firstName="Salman"
          lastName="Vai"
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <div className={cn(`overflow-x-hidden`)}>{children}</div>
      </div>
    </div>
  );
};
