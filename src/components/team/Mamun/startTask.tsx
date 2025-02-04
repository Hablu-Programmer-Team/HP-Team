import { FC, useState, type Dispatch, type SetStateAction } from "react";
import { TaskForm } from "./Reusable/taskForm";
import { Modal } from "./Reusable/taskModal";
import { IAdd, TaskDataTypes } from "./index";

interface FromPropsTypes extends IAdd {
  addAllTask: Dispatch<SetStateAction<TaskDataTypes>>;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const AddTasks: FC<FromPropsTypes> = () => {
  const [allTask, setAllTask] = useState<TaskDataTypes[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleAddAllTask = (task: TaskDataTypes) => {
    setAllTask([...allTask, task]);
  };
  console.log(allTask)
  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-link-100 rounded-md cursor-pointer active:translate-y-1 hover:bg-link-200 transition-all font-semibold capitalize shadow-md m-4"
        >
          Add Task
        </button>
        {isOpen && (
          <Modal
            onClose={setIsOpen}
            cardName="Team task"
            toggleModal={toggleModal}
            addAllTask={handleAddAllTask}
          >
            <TaskForm />
          </Modal>
        )}
      </div>
    </>
  );
};
