import { useState } from "react";
import { PlusIcon } from "../Mamun/icon/Icons";
import { ThreeDotsIcon } from "./icons";

export const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("Current Task");

  const tabs = ["Current Task", "Next Task", "My Task"];

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex justify-between items-center py-3 ps-5 pe-10">
        <button className="flex items-center gap-x-2 cursor-pointer border border-neutral-400/20 rounded-lg px-4 py-2 active:scale-95 hover:bg-gray-900">
          <PlusIcon />
          <span>Add Task</span>
        </button>
        <div className="flex items-center gap-x-4">
          <p>Filter</p>
          <p>Sort</p>
          <button className="cursor-pointer flex items-center justify-center p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full active:scale-95">
            <ThreeDotsIcon className="text-gra" />
          </button>
        </div>
      </div>
      <div className="px-10 flex items-center gap-x-6 border-b border-b-neutral-400/20 ">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`cursor-pointer border border-b-gray-950 ${
              activeTab === tab ? "text-success-500" : "text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
