import { ITask } from "@/lib/database/task";
import { cn } from "@/lib/utils/cn";
import { Dispatch, FC, useState, type SetStateAction } from "react";
import { InputDateIcon, InputStyle, SOption } from "..";

interface IProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleAddAllTask: (task: ITask) => void;
}

export const TaskForm: FC<IProps> = ({ setIsOpen, handleAddAllTask }) => {
  const [formData, setFormData] = useState<ITask>({
    id: "1",
    userId: "1",
    assign: "",
    status: "pending",

    title: "",
    priority: "",
    start: null, 
    end: null,
    description: "",

    subTasks: [{ taskId: "1", title: "Subtask 1", checked: false }],

    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(name,value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    handleAddAllTask(formData);
    setFormData({
      id: "1",
      userId: "1",
      assign: "",
      status: "pending",

      title: "",
      priority: "",
      start: null,
      end: null,
      description: "",

      subTasks: [{ taskId: "1", title: "Subtask 1", checked: false }],

      createdAt: new Date(),
      updatedAt: new Date(),
    });
    setIsOpen(false);
  };

  return (
    <div className="border border-neutral-400/60 mt-6 md:mt-[39px] rounded-2xl">
      <div className="sm:p-4 p-3 grid grid-cols-3 gap-10">
        <div className="col-span-3">
          <form className="text-white/50">
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="title" className="font-semibold text-lg">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                className={cn("", InputStyle)}
                onChange={handleChange}
                placeholder="Task title..."
              />
            </div>

            <div className="my-6">
              <h1 className="font-semibold text-lg mb-2">Set Deadline:</h1>
              <div className="grid grid-cols-4 grid-rows-2 gap-2 ">
                <div className="sm:col-span-2 col-span-4 flex flex-col sm:flex-row sm:items-center items-start gap-2">
                  <label htmlFor="from" className="font-semibold text-sm">
                    From:
                  </label>
                  <input
                    type="datetime-local"
                    id="from"
                    name="start"
                    value={formData.start}
                    className={cn("", InputStyle, InputDateIcon)}
                    onChange={handleChange}
                  />
                </div>

                <div className="sm:col-span-2 col-span-4 flex flex-col sm:flex-row sm:items-center items-start gap-2">
                  <label htmlFor="to" className="font-semibold text-sm">
                    To:
                  </label>
                  <input
                    type="datetime-local"
                    id="to"
                    name="end"
                    value={formData.end}
                    className={cn("", InputStyle, InputDateIcon)}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4">
              <div className="my-6 col-span-1">
                <p className="font-semibold text-lg mb-2">Priority</p>
                <select onChange={handleChange} name="priority" id="">
                  <option
                    className={cn("", SOption)}
                    value={formData.priority}
                    disabled
                  >
                    Select Priority
                  </option>
                  <option className={cn("", SOption)} value="extreme">
                    Extreme
                  </option>
                  <option className={cn("", SOption)} value="moderate">
                    Moderate
                  </option>
                  <option className={cn("", SOption)} value="low">
                    Low
                  </option>
                </select>
              </div>

              <div className="my-6 col-span-1">
                <p className="font-semibold text-lg mb-2">Assign</p>
                <select onChange={handleChange} name="assign" id="">
                  <option
                    className={cn("", SOption)}
                    value={formData.assign}
                    disabled
                  >
                    Assign
                  </option>
                  <option className={cn("", SOption)} value="al-amin">
                    Al-Amin
                  </option>
                  <option className={cn("", SOption)} value="eyachir">
                    Eyachir
                  </option>
                  <option className={cn("", SOption)} value="Hashib">
                    Hashib
                  </option>
                  <option className={cn("", SOption)} value="mamun">
                    Mamun
                  </option>
                  <option className={cn("", SOption)} value="udoy">
                    Udoy
                  </option>
                </select>
              </div>
            </div>

            {/* Task Description */}
            <div className="mt-4 flex flex-col gap-2">
              <label htmlFor="des" className="font-semibold text-lg">
                Task Description
              </label>
              <textarea
                name="description"
                id="des"
                placeholder="Writing your task description..."
                className="p-2 w-full rounded-md border h-1/2 outline-none resize-none border-neutral-placeholder/20 focus:border-neutral-placeholder/40"
                rows={8}
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
          <div className="flex justify-end mt-4 items-start mb-4">
            <button
              className=" bg-green-500  text-white hover:scale-105 transition-all cursor-pointer font-bold py-1 md:py-2 px-2 md:px-6 rounded-md mb-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
