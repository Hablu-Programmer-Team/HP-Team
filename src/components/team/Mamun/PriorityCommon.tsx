import { IPriorityObj } from "./index";
import { FC } from "react";

const PriorityCommon: FC<IPriorityObj> = ({event, value, condition, color}) => {
  return (
    <div className="flex gap-2.5 items-center">
      <div className="flex items-center gap-[7px]">
        <div className={`w-2 h-2 rounded-full ${color}`}></div>
        <p className="text-neutral-text-secondary">{value}</p>
      </div>
      <input
        type="radio"
        name="priority"
        value={value}
        checked={condition === value}
        onChange={event}
        className="w-[14px] h-[14px]"
      />
    </div>
  );
};

export default PriorityCommon;
