import type { ITask } from "@/lib/database/task";
import { FC, useState } from "react";
import { Card } from "../Eyachir";
import { Modal } from "./reusable/task-modal";
import { TaskForm } from "./reusable/taskForm";

export const AddTasks: FC = () => {
  const [allTask, setAllTask] = useState<ITask[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addAllTask = (task: ITask) => setAllTask((prv) => [...prv, task]);

  return (
    <>
      <div className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-link-700 rounded-md cursor-pointer active:translate-y-1 hover:bg-link-500 transition-all font-semibold uppercase shadow-md m-4"
        >
          Add Task
        </button>
        {isOpen && (
          <div className="flex items-center justify-center absolute inset-0 bg-black/10">
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <TaskForm addAllTask={addAllTask} setIsOpen={setIsOpen} />
            </Modal>
          </div>
        )}
        <div>
          {allTask.length > 0 ? (
            allTask.map((tasks, idx) => (
              <Card
                key={idx}
                deadline={2}
                createdAt={tasks.createdAt}
                taskName={tasks.title}
                completed={0}
                total={tasks.subTasks.length}
              />
            ))
          ) : (
            <p className="text-3xl flex justify-center items-center h-[70svh] text-center text-white">
              No task available
            </p>
          )}
        </div>
      </div>
    </>
  );
};
