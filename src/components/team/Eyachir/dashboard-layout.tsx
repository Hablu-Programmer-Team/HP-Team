import { PlusIcon } from "../Mamun/icon/Icons";
import { CircleIcon, ThreeDotsIcon } from "./icons";
import Scrollbar from "./scrollbar.module.css";

export const DashboardLayout = () => {
  const TasksBoard = [
    {
      id: 1,
      title: "ToDo",
      des: "This is ready to be picked up",
    },
    {
      id: 2,
      title: "Backlog",
      des: "This item hasn't been started",
    },
    {
      id: 3,
      title: "In Progress",
      des: "This is actively being worked on",
    },
    {
      id: 4,
      title: "In Review",
      des: "This item is in review",
    },
    {
      id: 5,
      title: "Done",
      des: "This has been completed",
    },
  ];
  return (
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

      <div className="px-5 lg:px-10 pb-10">
        <div
          className={`flex justify-start gap-4 mt-20 overflow-x-auto ${Scrollbar.customScrollbar}`}
        >
          {TasksBoard.map((task) => (
            <div
              key={task.id}
              className=" border border-neutral-400/20 rounded-md min-h-[70svh]  sm:min-w-[400px] min-w-[280px] w-full p-4 relative"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <p>
                    <CircleIcon
                      className={` stroke-2 ${
                        task.id === 1
                          ? "text-red-600"
                          : task.id === 2
                          ? "text-amber-500"
                          : task.id === 3
                          ? "text-blue-500"
                          : task.id === 4
                          ? "text-purple-500"
                          : task.id === 5
                          ? "text-green-500"
                          : "text-white"
                      }`}
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
    </div>
  );
};
