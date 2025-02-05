import { cn } from "@/lib/utils/cn";
import { FC, useState } from "react";
import { Sidebar } from "../team/Alamin";
import { Navbar } from "../team/Hasib";

export const Parent: FC<IChildren> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  return (
    <div className="flex w-full">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      {/* <div className=" max-w-sm"></div> */}

      <div className="transition-all duration-300 w-full">
        <Navbar
          firstName="Salman"
          lastName="Vai"
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <div
          className={cn(
            "h-[90svh] max-w-screen-2xl mx-auto p-2.5 overflow-y-auto"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
