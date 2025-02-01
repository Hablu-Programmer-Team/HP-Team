import React, { FC, useState } from "react";
import { IAdd, IFormData } from "./index";
import { validateForm } from "./Reusable/validator";
import { Modal } from "./Reusable/modal";
import { TaskForm } from "./Reusable/taskForm";

export const EditTask: FC<IAdd> = ({ cardName, btnName }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<IFormData[]>([]);
  const [formData, setFormData] = useState<IFormData>({
    title: "",
    date: "",
    priority: "",
    description: "",
  });

  const onClick = (): void => {
    setIsOpen(!isOpen);
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
      <button
        className="px-4 py-2 bg-link-100 rounded-md cursor-pointer active:translate-y-1 hover:bg-link-200 transition-all font-semibold capitalize shadow-md m-4"
        onClick={onClick}
      >
        {btnName}
      </button>
      {isOpen && (
        <Modal
          cardName={cardName}
          toggleModal={onClick}
          submit={Submit}
          priorityBtn={false}
        >
          <TaskForm data={formData} event={handleChange} />
        </Modal>
      )}
    </>
  );
};
