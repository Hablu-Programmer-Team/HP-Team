import { FC, useState } from "react";
import { CalendarIcon, NotificationIcon, SearchIcon } from "./icon";
import { Link } from "react-router";

export const Navbar: FC = () => {
  const [profileOpen, setIsProfileOpen] = useState(false);
  const [calendarShow, setCalendarShow] = useState(false);
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="flex  justify-end sm:justify-between items-center px-5 lg:px-10 py-4 shadow-sm ">
      <h1 className="hidden sm:block font-bold text-base lg:text-xl ">
        Hello{" "}
        <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text ">
          Salman
        </span>{" "}
        Vai👋
      </h1>
      <div className="flex items-center space-x-[10px] lg:space-x-[22px]">
        <button className="cursor-pointer">
          <SearchIcon />
        </button>
        <div className="relative flex items-center">
          <button className="cursor-pointer">
            <NotificationIcon />
          </button>
          <div className="bg-[#FFA048] size-2 absolute top-0 right-0 rounded-full ">
            <div className="absolute bg-[#FFA048]  size-full animate-ping top-0 right-0  rounded-full "></div>
          </div>
        </div>

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
        <div className="relative">
          <button onClick={() => setIsProfileOpen(!profileOpen)}>
            <img
              className="cursor-pointer duration-300 hover:scale-110 size-6 lg:size-[36px]"
              src="/profile.png"
              alt=""
            />
          </button>
          {profileOpen && (
            <div className="absolute  right-0 mt-4 w-64 rounded border border-gray-200 shadow z-10 py-2 text-center ease-in-out transition-all duration-500 origin-top-right ">
              <div className="flex flex-col gap-2 p-3">
                <Link
                  to="/profile"
                  className="flex items-center font-semibold gap-3 hover:text-[#78D700] hover:scale-105 transition-all delay-150 "
                >
                  <img src="/user.svg" alt=""/>
                  MY Profile
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center font-semibold gap-3 py-2 hover:text-[#78D700] hover:scale-105 transition-all delay-150 "
                >
                  <img src="/contact.svg" alt="Contact-Img" />
                  MY Contact
                </Link>
                <Link
                  to="/setting"
                  className="flex items-center  font-semibold gap-3 hover:text-[#78D700] hover:scale-105 transition-all delay-150 "
                >
                  <img src="/setting.svg" alt="Setting-Img" />
                  Account Setting
                </Link>
              </div>
              <div className=" border-gray-300 border-t">
                
                <Link
                  to="/logout"
                  className="flex items-center font-semibold gap-3 ps-4 py-2 hover:text-[#78D700] hover:scale-105 transition-all delay-150  "
                >
                  <img src="/logout.svg" alt="LogOut-Img" />
                  Log Out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};