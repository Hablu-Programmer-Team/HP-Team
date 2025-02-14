import { Dispatch, FC, SetStateAction } from "react";
import { SideContent } from "./side-content";
import { useAuth } from "@/lib/database/auth-context";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar: FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  const { user } = useAuth();
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 w-[260px] bg-gray-900 z-40 transition-transform duration-300 ${
          openSidebar ? "translate-x-0" : "-translate-x-[260px]"
        } `}
      >
        <SideContent
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          name={user?.name || ""}
          email={user?.email || ""}
        />
      </div>

      {/* Backdrop for mobile when sidebar is open */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
        />
      )}
    </>
  );
};
