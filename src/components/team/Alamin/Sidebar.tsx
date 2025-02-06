import { Dispatch, FC, SetStateAction } from "react";
import { SideContent } from "./side-content";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar: FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  return (
    <>
      {/* Sidebar for larger screens */}
      {/* <aside
        className={`h-screen sm:block hidden relative transition-transform duration-300 ${
          openSidebar
            ? "translate-x-0 w-full max-w-[260px]"
            : "-translate-x-[260px] w-0"
        }`}
      >
        <SideContent
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          firstName="Salman"
          lastName="Vai"
        />
      </aside> */}

      {/* Mobile Sidebar (sm:hidden) */}
      <div
        className={`fixed inset-y-0 left-0 w-[260px] bg-gray-900 z-40 transition-transform duration-300 ${
          openSidebar ? "translate-x-0" : "-translate-x-[260px]"
        } `}
      >
        <SideContent
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          firstName="Salman"
          lastName="Vai"
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
