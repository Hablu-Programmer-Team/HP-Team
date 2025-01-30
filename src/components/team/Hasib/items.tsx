import { FC, useState } from "react";
import { CalendarIcon, SearchIcon } from "./icons";
import { NotificationMenu } from "./notificationmenu";

export const Items: FC = () => {
  const [calendarShow, setCalendarShow] = useState(false);
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-center space-x-[10px] lg:space-x-[22px]">
      <button className="cursor-pointer">
        <SearchIcon />
      </button>
      <NotificationMenu />
      <div className="relative">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCalendarShow(!calendarShow)}
            className="cursor-pointer"
          >
            <CalendarIcon />
          </button>
          <p className=" hidden sm:inline-block text-xs lg:text-base text-black/50 font-semibold">
            {currentDate}
          </p>
        </div>
        {calendarShow && (
          <div className=" absolute right-0 mt-7 w-64  bg-white shadow-md rounded-md p-3 ">
            <input
              type="date"
              className=" w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};
