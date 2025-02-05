import { FC, useState } from "react";
import { NotificationMessages } from "../Alamin/data";
import myStyle from "../Alamin/sidebar.module.css";
import { NotificationIcon } from "./icons";

export const NotificationMenu: FC = () => {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(false);

  return (
    <div className="relative flex items-center">
      <button
        className="cursor-pointer"
        onClick={() => setIsBarOpen(!isBarOpen)}
      >
        <NotificationIcon className="group hover:scale-110 text-gray-300 transition-all duration-200 hover:text-white" />
      </button>
      <div className="bg-[#FFA048] size-2 absolute top-0 right-0 rounded-full ">
        <div className="absolute bg-[#FFA048]  size-full animate-ping top-0 right-0  rounded-full "></div>
      </div>
      {isBarOpen && (
        <div
          className={`absolute top-10 sm:-right-4 -right-20 h-72 overflow-y-auto bg-gray-900 w-60 rounded shadow z-10 p-3 ease-in-out transition-all duration-500 ${myStyle.scrollNone}`}
        >
          <div>
            <ul className="list-disc pl-2">
              {NotificationMessages.map((msg, idx) => (
                <li
                  key={idx}
                  className="text-[14px] border-b border-b-neutral-800 mb-1"
                >
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
