import { cn } from "@/lib/utils/cn";
import React, { FC, useState } from "react";
import { IAdd, IFormData, TaskStatus } from "./index";
import { TaskForm } from "./reusable/task-form";
import { Modal } from "./reusable/task-modal";
import { validateForm } from "./reusable/validator";

export const AddTasks: FC<IAdd> = () => {
  const [taskType, setTaskType] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [truthy, setTruthy] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<IFormData[]>([]);
  const [formData, setFormData] = useState<IFormData>({
    title: "",
    date: "",
    priority: "",
    description: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setTaskType("");
  };

  const togglePriority = () => {
    setTruthy(!truthy);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target?.value,
    }));
  };

  const Submit = () => {
    const errorMessage = validateForm(formData);
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({
      title: "",
      date: "",
      priority: "",
      description: "",
    });
  };

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
          <div className="absolute top-10 right-10 z-40 border border-neutral-300 text-center  max-w-[160px]">
            <button
              onClick={() => setTaskType("individual-task")}
              className={cn("border-b border-b-neutral-300 ", TaskStatus)}
            >
              Individual Task
            </button>
            <button
              onClick={() => setTaskType("team-task")}
              className={cn("", TaskStatus)}
            >
              Team Task
            </button>
          </div>
        )}

        {taskType === "individual-task" && (
          <Modal
            cardName="Individual Task"
            toggleModal={toggleModal}
            togglePriority={togglePriority}
            submit={Submit}
            priorityBtn={true}
            goBackPermission={false}
          >
            <TaskForm data={formData} event={handleChange} />
          </Modal>
        )}
        {taskType === "team-task" && (
          <Modal
            cardName="Team task"
            toggleModal={toggleModal}
            togglePriority={togglePriority}
            submit={Submit}
            priorityBtn={true}
            goBackPermission={false}
          >
            <TaskForm data={formData} event={handleChange} />
          </Modal>
        )}
      </div>
    </>
  );
};
