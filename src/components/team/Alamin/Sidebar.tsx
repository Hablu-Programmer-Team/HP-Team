import { FC, useEffect, useState } from "react";
import myStyle from "./sidebar.module.css";
import { LeaveIcon, UserProfileIcon } from "./icons";
import { dashItems } from "./data";

export const Sidebar: FC = () => {
  const [openNestMenu, isOpenNestMenu] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [openSidebar, setOpenSidebar] = useState<boolean>();

  // Sub List Open and Close
  const handleNestMenu = (index: number) => {
    isOpenNestMenu((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Sidebar Open and Close
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setOpenSidebar(false);
      } else {
        setOpenSidebar(true);
      }
    };
    //initial Check
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <aside
      className={`max-w-[80%] sm:max-w-[20rem] h-screen relative transition ${
        !openSidebar && "-translate-x-full"
      }`}
    >
      {/* Sidebar Visible Section  */}
      <div className="h-[80%] w-full text-white fill-white stroke-white bottom-0 absolute bg-secondary-500 rounded-tr-2xl rounded-br-2xl shadow-2xl">
        <div className="h-full flex flex-col justify-between p-4">
          <div className="space-y-8 max-h-[90%]">
            {/* Sidebar Profile Section  */}
            <div className="flex flex-col justify-center items-center -mt-15">
              <div className="size-23 p-1.5 mb-4 flex justify-center items-center rounded-full ring-2 ring-white ring-inset border-3 border-secondary-500 bg-black/20 overflow-hidden">
                {<UserProfileIcon />}
              </div>
              <h2 className="font-semibold text-lg">Your Name</h2>
              <p className="text-sm">example@gmail.com</p>
            </div>

            <ul
              className={`space-y-2.5 max-h-[80%] overflow-y-scroll ${myStyle.scrollNone}`}
            >
              {dashItems.map(({ label, icon, childs, arrowIcon }, idx) => (
                <li key={idx} onClick={() => handleNestMenu(idx)}>
                  <div className="flex justify-between items-center p-3 hover:bg-white hover:text-secondary-500 hover:fill-secondary-500 hover:stroke-secondary-500 rounded-lg cursor-pointer">
                    <div className="flex gap-x-5">
                      <span>{icon}</span>
                      <span>{label}</span>
                    </div>
                    <span
                      className={`flex items-center justify-center size-8 hover:bg-gray-100 rounded-full transition duration-200 ${
                        openNestMenu[idx] && "rotate-180"
                      }`}
                    >
                      {arrowIcon}
                    </span>
                  </div>

                  {/* Sidebar Sub List Items Section  */}
                  <ul
                    className={`ps-18 space-y-1 overflow-hidden ${
                      !openNestMenu[idx] && "h-0"
                    }`}
                  >
                    {childs?.map((child, subIdx) => (
                      <li
                        key={subIdx}
                        className="py-1 px-2 rounded-md hover:bg-white hover:text-secondary-500 cursor-pointer"
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar Footer Section  */}
          <div className="border-t-2 border-gray-400">
            <span className="flex gap-x-5 p-3 stroke-white hover:bg-white hover:stroke-secondary-500 rounded-md hover:text-secondary-500 cursor-pointer">
              <LeaveIcon />
              <span>Logout</span>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
