import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { dashItems } from "./data";
import { ArrowDownIcon, LeaveIcon, RightArray, UserIcon } from "./icons";
import myStyle from "./sidebar.module.css";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: (open: boolean) => void;
}

export const Sidebar: FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  const [openNestMenu, setOpenNestMenu] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [isActive, setIsActive] = useState(0);

  const handleNestMenu = (idx: number) => {
    setOpenNestMenu((prev) => ({ ...prev, [idx]: !prev[idx] }));
    setIsActive(idx);
  };

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     if (window.innerWidth < 426) {
  //       setOpenSidebar(false);
  //     } else {
  //       setOpenSidebar(true);
  //     }
  //   };

  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);
  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, []);

  return (
    <aside
      className={`h-screen max-w-xs relative transition-transform duration-300 ${
        openSidebar ? "translate-x-0 w-full" : "-translate-x-[260px] w-0"
      }`}
    >
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="absolute -right-4 top-4 z-30 flex justify-center items-center cursor-pointer p-2 bg-gray-700 hover:bg-gray-800 transition-all duration-200 rounded-full border border-gray-100/20 hover:border-gray-100 "
      >
        <RightArray className={`transition-transform text-gray-200`} />
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
            {dashItems.map(({ label, path, icon, option }, idx) => (
              <li key={idx} onClick={() => handleNestMenu(idx)}>
                <NavLink to={path}>
                  <div
                    className={`flex justify-between items-center p-3 hover:bg-gray-800 hover:text-secondary-500 hover:fill-secondary-500 hover:stroke-secondary-500 rounded-lg cursor-pointer font-semibold ${
                      openNestMenu[idx] &&
                      "bg-gray-800 text-secondary-500 fill-secondary-500 stroke-secondary-500"
                    }`}
                  >
                    <div className="flex gap-x-5">
                      <span>{icon}</span>
                      <span>{label}</span>
                    </div>
                    {option && (
                      <span
                        className={`flex items-center justify-center size-8 hover:bg-gray-100 rounded-full transition duration-200 ${
                          openNestMenu[idx] && "rotate-180"
                        }`}
                      >
                        <ArrowDownIcon />
                      </span>
                    )}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-r  absolute bottom-0 bg-gray-900 border-gray-400/35 w-full py-2">
        <span className="flex gap-x-5 mx-4 p-3  font-semibold stroke-white hover:bg-gray-800 hover:stroke-secondary-500 rounded-md hover:text-secondary-500 cursor-pointer">
          <LeaveIcon />
          <span>Logout</span>
        </span>
      </div>
    </aside>
  );
};
