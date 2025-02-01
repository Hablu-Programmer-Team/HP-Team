import { FC} from "react";
import { CalendarIcon, SearchIcon } from "./icons";
import { NotificationMenu } from "./notificationmenu";

export const Items: FC = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-center space-x-[10px] lg:space-x-[22px]">
      <button className="cursor-pointer">
        <SearchIcon className="group hover:scale-110" />
      </button>
      <NotificationMenu />
      <div className="relative">
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer"
          >
            <CalendarIcon className="group hover:scale-110" />
          </button>
          <p className=" hidden sm:inline-block text-xs lg:text-base text-black/50 font-semibold">
            {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
};
