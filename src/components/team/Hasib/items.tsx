import { FC, useState } from "react";
import { CalendarIcon, SearchIcon } from "./icons";
import { NotificationMenu } from "./notificationmenu";

export const Items: FC = () => {
  const [showSearch, setShowSearch] = useState(false); 

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-center space-x-[10px] lg:space-x-[22px]">
      {/* Search Button */}
      <button onClick={() => setShowSearch(!showSearch)} className="cursor-pointer">
        <SearchIcon className="group hover:scale-110" />
      </button>
      {showSearch && (
        <input
          type="text"
          placeholder="Search..."
          className="w-[120px] sm:w-[180px] md:w-[200px] border border-gray-300 shadow rounded-md px-3 py-1 text-sm outline-none transition-all duration-300 ease-in-out opacity-100 scale-105"
          
        />
      )}
      <NotificationMenu />

      {/* Calendar Section */}
      <div className="relative">
        <div className="flex items-center gap-2">
          <button className="cursor-pointer">
            <CalendarIcon className="group hover:scale-110" />
          </button>
          <p className="hidden sm:inline-block text-xs lg:text-base text-black/50 font-semibold">
            {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
};
