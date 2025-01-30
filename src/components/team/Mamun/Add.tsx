import React, { FC, useState } from "react";
import { IAdd, IFormData } from "./index"; // Assuming IFormData is defined correctly in types
import Priority from "./Priority";
import PriorityCommon from "./PriorityCommon";

export const priorityData = [
  {
    name: "Extream",
    color: "bg-secondary-600",
  },
  {
    name: "Moderate",
    color: "bg-link-600",
  },
  {
    name: "Low",
    color: "bg-secondary-600",
  },
];

export const AddTasks: FC<IAdd> = ({ cardName, btnName }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [truthy, setTruthy] = useState<boolean>(false);
  const [editPriority, setEditPriority] = useState<boolean>(false);
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
  const togglePriority = () => {
    setTruthy(!truthy);
  };
  const toggleEditPriority = () => {
    setEditPriority(!editPriority);
  };

  // Handle input field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target?.value,
    }));
  };

  // Handle form submission
  const Submit = () => {
    const { title, date, priority, description } = formData;

    if (title.trim() === "") {
      alert("Title cannot be empty!");
      return;
    }

    if (!date) {
      alert("Please select a valid date!");
      return;
    }

    if (!priority) {
      alert("Please select a priority level!");
      return;
    }

    if (description.trim().length < 10) {
      alert("Description must be at least 10 characters long!");
      return;
    }

    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({
      title: "",
      date: "",
      priority: "",
      description: "",
    });

    console.log("AddData", formData);
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
        <div className="absolute w-full h-screen bg-[#404042]/50 top-0 left-0 z-50 overflow-y-auto">
          <section className="bg-white max-w-[918px] h-[65vh] md:h-[708px] rounded-3xl absolute top-0 right-0 bottom-0 left-0 m-auto shadow-2xl overflow-y-auto mx-4 md:mx-auto">
            <div className="px-6 md:px-[62px] pt-6 md:pt-[46px]">
              <div className="flex md:justify-between items-center flex-col md:flex-row">
                <p className="font-semibold">{cardName}</p>
                <div className="flex gap-2 items-center justify-between md:justify-end w-full flex-1 mt-3 md:mt-0">
                  <button
                    className="font-semibold bg-lime-200 rounded-xl px-3 py-1 cursor-pointer"
                    onClick={onClick}
                  >
                    Go Back
                  </button>
                  <button
                    className="font-medium bg-red-400 hover:scale-105 hover:bg-red-500 w-7 h-7 rounded-full cursor-pointer active:translate-y-0.5 transition-all"
                    onClick={onClick}
                  >
                    X
                  </button>
                </div>
              </div>
              <div className="border border-[#ACADB5] mt-6 md:mt-[39px] rounded-2xl">
                <div className="px-4 py-[14px] grid grid-cols-3 gap-10">
                  <div className="col-span-3">
                    <form>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="title"
                          className="font-semibold text-sm"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          className="flex-1 border rounded-md outline-none px-2 py-2 border-[#A1A3AB]"
                          onChange={handleChange}
                          placeholder="Note Your Tasks...."
                        />
                      </div>
                      <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="date" className="font-semibold text-sm">
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          className="flex-1 border rounded-md outline-none px-2 py-2 border-[#A1A3AB]"
                          onChange={handleChange}
                        />
                      </div>
                    </form>
                    <div className="mt-4">
                      <p className="font-semibold text-sm">Priority</p>
                      <div className="flex gap-2 md:gap-[53px] flex-col md:flex-row">
                        {priorityData.map((value, index) => (
                          <PriorityCommon
                            key={index}
                            condition={formData.priority}
                            value={value.name}
                            event={handleChange}
                            color={value.color}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                      <label htmlFor="des" className="font-semibold text-sm">
                        Task Description
                      </label>
                      <textarea
                        name="description"
                        id="des"
                        placeholder="Start writing here...."
                        className="p-2 w-full rounded-md border border-[#A1A3AB] outline-none resize-none"
                        rows={8}
                        value={formData.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <button
                  className="mt-4 bg-amber-200 text-gray-500 hover:scale-105 transition-all cursor-pointer font-bold py-1 md:py-2 px-2 md:px-4 rounded-md mb-2"
                  onClick={Submit}
                >
                  Submit
                </button>
                <button
                  className="mt-4 bg-red-200 text-gray-500 hover:scale-105 transition-all cursor-pointer font-bold py-1 md:py-2 px-2 md:px-4 rounded-md mb-2"
                  onClick={togglePriority}
                >
                  Add Priority
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
      {truthy && (
        <Priority toggle={togglePriority} name="Add Task Priority Title" />
      )}
    </>
  );
};
