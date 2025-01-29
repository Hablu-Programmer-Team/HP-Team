import { FC, useState } from "react";
import { CalendarIcon, NotificationIcon, SearchIcon } from "./icon";

export const Navbar: FC = () => {
  const [profileOpen, setIsProfileOpen] = useState(false);
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="flex justify-between items-center px-10 py-4 ">
      <h1 className="font-bold text-xl">Hello Salman Vai👋</h1>
      <div className="flex items-center space-x-[22px]">
        <SearchIcon />
        <NotificationIcon />
        <div className="flex">
          <CalendarIcon />
          <p>{currentDate}</p>
        </div>
        <div className="relative">
          <button onClick={() => setIsProfileOpen(!profileOpen)}>
            <img src="/profile.png" alt="" />
          </button>
          {profileOpen && (
            <div className="absolute  right-0 mt-2 w-48 bg-white z-10 py-2 ">
              <a href="" className="block">
                Profile Settings
              </a>
              <a href="" className="block">
                Log Out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
