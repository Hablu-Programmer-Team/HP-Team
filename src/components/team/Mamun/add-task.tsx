import { cn } from "@/lib/utils/cn";
import { FC } from "react";
import { InputStyle } from ".";
import { PlusIcon } from "./icon/Icons";

interface ISubTask {
  id: number;
  taskName: string;
  description?: string;
}

export const SubTask: FC<ISubTask> = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-semibold text-lg">Add your Task Here:</h1>
          <button className="bg-success-500 py-1 px-2 text-white text- flex items-center gap-1 active:scale-95 rounded-lg cursor-pointer">
            <PlusIcon />
            <span>Task</span>
          </button>
        </div>
        <div className="flex gap-4">
          <input className={cn("w-full", InputStyle)} type="text" />
        </div>
      </div>
    </div>
  );
};
