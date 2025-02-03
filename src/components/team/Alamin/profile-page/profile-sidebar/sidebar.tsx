import { FC, useState } from "react";
import { NavLink } from "react-router";
import { profileItems } from "../data";


export const Sidebar:FC = () => {
  const [isActive, setIsActive] = useState<number>(0);

  const handleActive = (idx: number) => {
    setIsActive(idx);
  };
  return (
    <div className="h-[90%] w-[20rem] border-2 border-gray-400/30 rounded-4xl text-neutral-disable pt-10">
      <h2 className="text-[2.5rem] font-medium ps-7 pb-3">Profile.</h2>

      <ul className="pt-7 space-y-1 border-t-2 border-gray-400/30">
        {profileItems.map(({ label, path }, idx) => (
          <NavLink
          key={idx}
            to=""
            onClick={() => handleActive(idx)}
            className={`block last:text-error-500 py-4 px-7 text-lg relative overflow-hidden cursor-pointer transition-all duration-150 ${
              isActive === idx &&
              "after:content-[''] after:absolute after:h-full after:w-5 after:rounded-md after:top-0 after:-right-4 bg-blue-500/30 after:bg-blue-600 last:bg-error-500/15 last:after:bg-error-500"
            } hover:bg-blue-500/15 last:hover:bg-error-500/15`}
          >
            <li>{label}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
