import { FC } from "react";
import { IPriorityObj } from "./index";

export const PriorityCommon: FC<IPriorityObj> = ({
  event,
  value,
  condition,
  color,
  accent,
}) => {
  return (
    <div className="flex gap-2.5 items-center leading-0.5">
      <div className="flex items-center gap-[7px]">
        <div className={`w-2 h-2 rounded-full ${color}`}></div>
        <p className="text-neutral-text-secondary leading-4">{value}</p>
      </div>
      <form action="">
        <label htmlFor="priority">
          <input
            type="radio"
            name="priority"
            id="priority"
            value={value}
            checked={condition === value}
            onChange={event}
            className={`w-[14px] h-[14px] ${accent}`}
            placeholder="Enter "
          />
        </label>
      </form>
    </div>
  );
};
