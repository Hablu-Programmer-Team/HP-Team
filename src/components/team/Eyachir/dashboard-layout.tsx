import { TStatus } from "@/lib/database/task";
import { cn } from "@/lib/utils/cn";
import { PlusIcon } from "../Mamun/icon/Icons";
import { CircleIcon, ThreeDotsIcon } from "./icons";
import Scrollbar from "./scrollbar.module.css";

export const DashboardLayout = () => (
  <div className="overflow-x-hidden">
    <div className="flex justify-between items-center py-3 px-5 lg:px-10 border-b border-b-neutral-400/20">
      <button className="flex items-center gap-x-2 cursor-pointer border border-neutral-400/20 rounded-lg px-4 py-2 active:scale-95 hover:bg-gray-900">
        <PlusIcon />
        <span>Add Task</span>
      </button>
      <div className="flex items-center gap-x-4">
        <p>Filter</p>
        <p>Sort</p>
        <button className="cursor-pointer flex items-center justify-center p-2 bg-neutral-900 transition-colors duration-200 hover:bg-neutral-800 rounded-full active:scale-95">
          <ThreeDotsIcon />
        </button>
      </div>
    </div>

    <div
      className={`flex px-5 lg:px-10 justify-start gap-4 overflow-x-auto py-10 ${Scrollbar.customScrollbar}`}
    >
      {tasksBoard.map((task) => (
        <div
          key={task.id}
          className=" border border-neutral-400/20 rounded-md min-h-[79svh]  sm:min-w-[400px] min-w-[280px] w-full p-4 relative"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <p>
                <CircleIcon
                  className={cn("stroke-2 text-white", {
                    "text-red-600": task.status === "pending",
                    "text-amber-500": task.status === "in-progress",
                    "text-green-500": task.status === "completed",
                    "text-purple-500": task.status === "incomplete",
                  })}
                />
              </p>
              <span className="font-semibold hover:border-b hover:border-b-gray-700 cursor-pointer ">
                {task.title}
              </span>
              <div className="bg-gray-900 px-2 rounded-lg">
                <span>0</span>/<span>0</span>
              </div>
            </div>
            <button className="cursor-pointer hover:bg-gray-800 p-2 rounded-full transition-colors duration-300 active:scale-95">
              <ThreeDotsIcon />
            </button>
          </div>
          <p className="text-gray-600">{task.des}</p>
          <button className="flex items-center gap-x-2 absolute bottom-4 left-6 bg-gray-800 hover:bg-gray-700 py-1 px-2 text-white text-sm active:scale-95 transition-all duration-200 rounded-lg cursor-pointer">
            <PlusIcon className="size-3" />
            Add
          </button>
        </div>
      ))}
    </div>
  </div>
);

type ITaskBoard = {
  id: number;
  title: string;
  des: string;
  status: TStatus;
};

const tasksBoard: ITaskBoard[] = [
  {
    id: 1,
    title: "ToDo",
    des: "This is ready to be picked up",
    status: "pending",
  },
  {
    id: 2,
    title: "In Progress",
    des: "This is actively being worked on",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Completed",
    des: "This item has been completed",
    status: "completed",
  },
  {
    id: 4,
    title: "Incomplete",
    des: "This item has not been completed",
    status: "incomplete",
  },
];
