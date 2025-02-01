import React, { FC, useState } from "react";
import { IAdd, IFormData } from "./index";
import { validateForm } from "./validator";
import { TaskForm } from "./taskForm";
import { Modal } from "./modal";

export const EditTask: FC<IAdd> = ({ cardName, btnName }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<IFormData[]>([]);
  const [formData, setFormData] = useState<IFormData>({
    title: "",
    date: "",
    priority: "",
    description: "",
  });

  // Toggle popup visibility
  const onClick = (): void => {
    setIsOpen(!isOpen);
  };

  // Handle input field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target?.value, // Correctly update the property being changed
    }));
  };

  // Handle form submission
  const Submit = () => {
    const errorMessage = validateForm(formData);
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    // If all validations pass, store the submitted data
    setSubmittedData((prevData) => [...prevData, formData]);

    // Reset the form after submission
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
