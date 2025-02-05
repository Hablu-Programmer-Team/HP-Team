import { cn } from "@/lib/utils/cn";
import { FC } from "react";
import { InputStyle } from ".";
import { PlusIcon } from "./icon/Icons";

interface ISubTask {
  id: number;
  taskName: string;
  description?: string;
}

export const SubTask: FC<ISubTask> = () => (
  <div>
    <div>
      <div className="flex justify-between items-center mb-3 border-b pb-2">
        <h1 className="font-semibold text-lg">Add your Task Here:</h1>
        <button className="bg-success-500/70 py-1 px-2 text-white text- flex items-center gap-1 active:scale-95 rounded-lg cursor-pointer">
          <PlusIcon />
          <span className="font-medium">Task</span>
        </button>
      </div>

      <div>
        <ul className="space-y-2 overflow-y-auto max-h-[160px]">
          <li>
            <div className="flex gap-4">
              <input className={cn("w-full", InputStyle)} type="text" />
              <button className="bg-success-100 text-neutral-400 px-4 rounded-lg font-semibold cursor-pointer">
                Add
              </button>
            </div>
          </li>
          <li>
            <div className="flex gap-4">
              <input className={cn("w-full", InputStyle)} type="text" />
              <button className="bg-success-100 text-neutral-400 px-4 rounded-lg font-semibold cursor-pointer">
                Add
              </button>
            </div>
          </li>
          <li>
            <div className="flex gap-4">
              <input className={cn("w-full", InputStyle)} type="text" />
              <button className="bg-success-100 text-neutral-400 px-4 rounded-lg font-semibold cursor-pointer">
                Add
              </button>
            </div>
          </li>
          <li>
            <div className="flex gap-4">
              <input className={cn("w-full", InputStyle)} type="text" />
              <button className="bg-success-100 text-neutral-400 px-4 rounded-lg font-semibold cursor-pointer">
                Add
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
