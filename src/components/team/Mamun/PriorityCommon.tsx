import { FC, useState } from "react";
import { IPriorityObj } from "./index";

export const PriorityCommon: FC<IPriorityObj> = ({ event, value, condition, color }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(true);
    event(e);
  };

  return (
    <div className="flex gap-2.5 items-center">
      {!isSelected && (
        <div className="flex items-center gap-[7px]">
          <div className={`w-2 h-2 rounded-full ${color}`}></div>
          <p className="text-neutral-text-secondary">{value}</p>
        </div>
      )}
      <form action="">
        <label htmlFor="priority">
          <input
            type="radio"
            name="priority"
            id="priority"
            value={value}
            checked={condition === value}
            onChange={handleRadioChange}
            className="w-[14px] h-[14px]"
            placeholder="Enter "
          />
        </label>
      </form>
    </div>
  );
};
