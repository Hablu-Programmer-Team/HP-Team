import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Items } from "./items";
import { ProfileMenu } from "./profilemenu";
import { SearchItem } from "./searchitem";

export const Navbar: FC = () => (
  <div className="flex h-fit bg-gray-900/70 text-gray-100 w-full justify-end sm:justify-between items-center px-5 lg:px-10 py-3 border-b border-b-neutral-400/35">
    <NavLink to="/profile">
      <div className="hidden sm:block font-bold text-base lg:text-xl ">
        Hello{" "}
        <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text">
          Salman
        </span>{" "}
        Vai👋
      </div>
    </NavLink>

    {/* Navbar Icon & Profile */}

    <div className="flex items-center space-x-[10px] lg:space-x-[22px]">
      <SearchItem />
      <Items />
      <ProfileMenu />
    </div>
  </div>
);
