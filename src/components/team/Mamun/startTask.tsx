import { FC, useState } from "react";
import { Card } from "../Eyachir";
import { TaskForm } from "./reusable/taskForm";
import { Modal } from "./reusable/taskModal";
import type { ITask } from "@/lib/database/task";

export const AddTasks: FC = () => {
  const [allTask, setAllTask] = useState<ITask[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleAddAllTask = (task: TaskDataTypes) => {
    setAllTask([...allTask, task]);
  };
  console.log(allTask);
  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-link-700 rounded-md cursor-pointer active:translate-y-1 hover:bg-link-500 transition-all font-semibold capitalize shadow-md m-4"
        >
          Add Task
        </button>
        {isOpen && (
          <Modal cardName="My Task" toggleModal={toggleModal}>
            <TaskForm
              handleAddAllTask={handleAddAllTask}
              setIsOpen={setIsOpen}
            />
          </Modal>
        )}
        <div>
          {allTask.length !== 0 ? (
            allTask.map((task) => (
              <Card
                deadline={2}
                createdAt={task.createdAt}
                taskName={task.title}
                completed={0}
                total={task.subTasks.length}
              />
            ))
          ) : (
            <p className="text-3xl text-center text-white">No task available</p>
          )}
        </div>
      </div>
    </>
  );
};
