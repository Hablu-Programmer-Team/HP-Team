import { Dispatch, FC, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "../Alamin/icons";
import { Items } from "./items";
import { ProfileMenu } from "./profilemenu";
import { SearchItem } from "./searchitem";

type TProps = {
  firstName: string;
  lastName: string;
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

export const Navbar: FC<TProps> = ({
  openSidebar,
  setOpenSidebar,
  firstName,
  lastName,
}) => (
  <div className="flex h-fit bg-gray-900/70 text-gray-100 w-full justify-between sm:justify-between items-center ps-2.5 pe-5 lg:ps-5 lg:pe-10 py-3 border-b border-b-neutral-400/35">
    <div className="flex gap-x-2.5 ">
      <button
        className="cursor-pointer"
        hidden={openSidebar}
        onClick={() => setOpenSidebar(true)}
      >
        <MenuIcon />
      </button>

      <NavLink to="/profile">
        <div className="hidden sm:block font-bold text-base lg:text-xl ">
          <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text">
            {firstName}
          </span>{" "}
          <span>{lastName}</span>
        </div>
      </NavLink>
    </div>

    {/* Navbar Icon & Profile */}

    <div className="flex items-center gap-x-[10px] lg:gap-x-[22px]">
      <SearchItem />
      <Items />
      <ProfileMenu />
    </div>
  </div>
);
