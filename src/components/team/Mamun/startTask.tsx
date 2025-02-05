import { FC, useState } from "react";
import { TaskDataTypes } from "./index";
import { TaskForm } from "./reusable/taskForm";
import { Modal } from "./reusable/taskModal";
import { Card } from "../Eyachir";

export const AddTasks: FC = () => {
  const [allTask, setAllTask] = useState<TaskDataTypes[]>([]);
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
          <Card deadline={3000} createdAt={new Date()} taskName="our team"  completed={10} total={10}  />
        </div>
      </div>
    </>
  );
};
