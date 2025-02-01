import { FC } from "react";

import { ProfileMenu } from "./profilemenu";
import { Items } from "./items";
import { SearchItem } from "./searchitem";


export const Navbar: FC = () => (
  
  <div className="flex  justify-end sm:justify-between items-center px-5 lg:px-10 py-4 shadow-sm ">
    <h1 className="hidden sm:block font-bold text-base lg:text-xl ">
      Hello 
      <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text ">
        Salman
      </span>{" "}
      Vai👋
    </h1>

    {/* Navbar Icon & Profile */}
     
    <div className="flex items-center space-x-[10px] lg:space-x-[22px]">
      <SearchItem/>
      <Items />
      <ProfileMenu />
    </div>
  </div>
);
