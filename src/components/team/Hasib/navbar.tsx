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
    <div className="flex justify-between items-center px-10 py-4 shadow-sm ">
      <h1 className="font-bold text-xl">Hi Salman Vai👋</h1>
      <div className="flex items-center space-x-[22px]">
        <SearchIcon />
        <div className="relative">
        <NotificationIcon  />
        <div className="bg-[#FFA048] size-2   absolute top-0 right-0 rounded-full ">
        <div className="absolute bg-[#FFA048]  size-full animate-ping top-0 right-0  rounded-full "></div>
        </div>
        </div>
        
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <p className="text-base text-black/50 font-semibold">{currentDate}</p>
        </div>
        <div className="relative">
          <button onClick={() => setIsProfileOpen(!profileOpen)}>
            <img src="/profile.png" alt="" />
          </button>
          {profileOpen && ( 
            <div className="absolute  right-0 mt-4 w-48 rounded  bg-gray-100 z-10 py-2 text-center  ">
             <div className="flex flex-col gap-2 ">
             <a href="" className="flex items-center justify-center font-semibold gap-3">
                <img src="/user.svg" alt="" />
                Profile Settings
              </a>
              <a href="" className="block">
                Log Out
              </a>
             </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
