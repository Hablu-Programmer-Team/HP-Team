import { Dispatch, FC, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";
import myStyle from "../Alamin/sidebar.module.css";
import { dashItems } from "./data";
import { LeaveIcon, RightArray, UserIcon } from "./icons";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  firstName: string;
  lastName: string;
}

export const SideContent: FC<SidebarProps> = ({
  openSidebar,
  setOpenSidebar,
  firstName,
  lastName,
}) => {
  const [isActive, setIsActive] = useState<number | null>(null);
  return (
    <>
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="absolute right-2 top-4 z-30  cursor-pointer p-2 bg-gray-900 hover:bg-gray-800 transition-all duration-200 rounded-full"
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
        <div className="flex absolute top-0 left-0 z-20 w-full bg-[#030712] flex-col justify-center items-center py-6 border-r border-r-gray-200/30">
          <div className="size-20 p-1.5 my-3 flex justify-center items-center rounded-full ring-2 ring-white ring-inset border-3 border-secondary-500 bg-black/20 ">
            {<UserIcon className="size-12" />}
          </div>
          <h2 className="font-bold text-lg text-nowrap">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h2>
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
    </>
  );
};
