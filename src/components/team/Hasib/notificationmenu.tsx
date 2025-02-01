import { FC } from "react";
import { NotificationIcon } from "./icons";


export const NotificationMenu: FC = () => (
  <div className="relative flex items-center">
    <button className="cursor-pointer">
      <NotificationIcon  className="group hover:scale-110" />
    </button>
    <div className="bg-[#FFA048] size-2 absolute top-0 right-0 rounded-full ">
      <div className="absolute bg-[#FFA048]  size-full animate-ping top-0 right-0  rounded-full "></div>
    </div>
  </div>
);
