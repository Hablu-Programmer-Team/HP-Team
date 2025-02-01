import { FC } from "react";
import { SearchIcon } from "./icons";

export const SearchItem: FC = () => (
  <div className="flex items-center justify-center">
    <form className="relative mx-auto flex">
      <input
        type="search"
        className="text-xs peer cursor-pointer relative z-10 h-8 w-6 focus:outline-slate-300/50 focus:outline-1  pr-6  focus:rounded focus:w-full focus:cursor-text focus:px-3 "
        placeholder="Typing..."
      />
      <button className="absolute top-0 right-0  bottom-0 my-auto h-8 w-10 px-3 rounded peer-focus:relative ">
        <SearchIcon />
      </button>
    </form>
  </div>
);
