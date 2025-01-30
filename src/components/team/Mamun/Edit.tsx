import React, { FC, useState } from "react";
import { IFormData } from "../../../types";

function EditTask ({cardName}) {
  const [open, setOpen] = useState<boolean>(false);
  const [editSite, setEditSite] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<IFormData[]>([]);
  const [formData, setFormData] = useState<IFormData>({
    title: "",
    date: "",
    priority: "",
    description: "",
  });

  // Toggle popup visibility
  const onClick = (): void => {
    setOpen(!open);
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
    // Destructuring formData
    const { title, date, priority, description } = formData;

    // Validation checks
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

    // If all validations pass, store the submitted data
    setSubmittedData((prevData) => [...prevData, formData]);

    // Reset the form after submission
    setFormData({
      title: "",
      date: "",
      priority: "",
      description: "",
    });

    console.log(formData); // Log formData for debugging
  };

  return (
    <>
      <button
        className="px-4 py-1 bg-link-100 rounded-md cursor-pointer active:translate-y-1 hover:bg-link-200 transition-all font-semibold capitalize shadow-md m-4"
        onClick={onClick}
      >
        Add New Task
      </button>
      {open && (
        <div className="absolute w-full h-screen bg-[#404042]/50 top-0 -z-10">
          <section className="bg-white max-w-[918px] h-[708px] rounded-3xl absolute top-0 right-0 bottom-0 left-0 m-auto shadow-2xl overflow-y-auto">
            <div className="px-[62px] pt-[46px]">
              <div className="flex justify-between items-center">
                <p className="font-semibold">{cardName}</p>
                <div className="flex gap-2 items-center">
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
              <div className="border border-[#ACADB5] mt-[39px] rounded-2xl">
                <div className="px-4 py-[14px] grid grid-cols-3 gap-10">
                  <div className="col-span-3">
                    <form>
                      {/* Title Input */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="title"
                          className="font-semibold text-sm"
                          autoFocus
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

                      {/* Date Input */}
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

                    {/* Priority Selection */}
                    <div className="mt-4">
                      <p className="font-semibold text-sm">Priority</p>
                      <div className="flex gap-[53px]">
                        <div className="flex gap-2.5 items-center">
                          <div className="flex items-center gap-[7px]">
                            <div className="w-2 h-2 rounded-full bg-secondary-600"></div>
                            <p className="text-neutral-text-secondary">
                              Extreme
                            </p>
                          </div>
                          <input
                            type="radio"
                            name="priority"
                            value="Extreme"
                            checked={formData.priority === "Extreme"}
                            onChange={handleChange}
                            className="w-[14px] h-[14px]"
                          />
                        </div>
                        <div className="flex gap-2.5 items-center">
                          <div className="flex items-center gap-[7px]">
                            <div className="w-2 h-2 rounded-full bg-link-600"></div>
                            <p className="text-neutral-text-secondary">
                              Moderate
                            </p>
                          </div>
                          <input
                            type="radio"
                            name="priority"
                            value="Moderate"
                            checked={formData.priority === "Moderate"}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex gap-2.5 items-center">
                          <div className="flex items-center gap-[7px]">
                            <div className="w-2 h-2 rounded-full bg-success-600"></div>
                            <p className="text-neutral-text-secondary">Low</p>
                          </div>
                          <input
                            type="radio"
                            name="priority"
                            value="Low"
                            checked={formData.priority === "Low"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Task Description */}
                    <div className="mt-4 flex flex-col gap-2">
                      <label htmlFor="des" className="font-semibold text-sm">
                        Task Description
                      </label>
                      <textarea
                        name="description"
                        id="des"
                        placeholder="Start writing here...."
                        className="p-2 w-full rounded-md border border-[#A1A3AB] outline-none"
                        rows={8}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="mt-4 bg-amber-200 text-gray-500 hover:scale-105 transition-all cursor-pointer font-bold py-2 px-4 rounded-md mb-2"
                onClick={Submit}
              >
                Submit
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default EditTask;
