import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { dashItems } from "./data";
import { LeaveIcon, RightArray, UserIcon } from "./icons";
import myStyle from "./sidebar.module.css";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: (open: boolean) => void;
}

export const Sidebar: FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  const [isActive, setIsActive] = useState<number | null>(null);

  return (
    <aside
      className={`h-screen relative transition-transform duration-300 ${
        openSidebar
          ? "translate-x-0 w-full max-w-[260px]"
          : "-translate-x-[260px] w-0"
      }`}
    >
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="absolute right-4 top-4 z-30 flex justify-center items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-800 transition-all duration-200 rounded-full border border-gray-100/20 hover:border-gray-100 "
      >
        <RightArray
          className={`transition-transform text-gray-200 md:size-5 sm:size-3 ${
            openSidebar ? "" : "rotate-180 delay-300"
          }`}
        />
      </button>

      <div
        className={`h-full w-full text-white fill-white stroke-white  bg-gray-900 border-r border-r-neutral-400/35 scroll-smooth overflow-y-auto ${myStyle.scrollNone}`}
      >
        <div className="flex absolute top-0 left-0 z-20 w-full bg-gray-800 flex-col justify-center items-center py-6 border-r border-r-gray-200/30">
          <div className="size-20 p-1.5 my-3 flex justify-center items-center rounded-full ring-2 ring-white ring-inset border-3 border-secondary-500 bg-black/20 ">
            {<UserIcon className="size-12" />}
          </div>
          <h2 className="font-bold text-lg text-nowrap">Your Name</h2>
          <p className="text-sm">example@gmail.com</p>
        </div>

        <div className="flex flex-col relative mt-48">
          <ul className="space-y-2 pb-2  p-4">
            {dashItems.map(({ label, path, icon }, idx) => (
              <li key={idx} onClick={() => setIsActive(idx)}>
                <NavLink to={path}>
                  <div
                    className={`flex justify-between items-center p-3   rounded-lg cursor-pointer font-semibold ${
                      isActive === idx
                        ? "bg-gray-800 text-secondary-500 "
                        : "hover:text-secondary-500 hover:bg-gray-800/30"
                    }`}
                  >
                    <div className="flex gap-x-5">
                      <span>{icon}</span>
                      <span>{label}</span>
                    </div>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-r  absolute bottom-0 bg-gray-900 border-gray-400/35 w-full py-2">
        <span className="flex gap-x-5 mx-4 p-3 items-center font-semibold stroke-white hover:bg-gray-800  rounded-md hover:text-secondary-500 cursor-pointer">
          <LeaveIcon />
          <span>Logout</span>
        </span>
      </div>
    </aside>
  );
};
