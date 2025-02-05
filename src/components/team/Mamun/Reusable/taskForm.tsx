import { ITask } from "@/lib/database/task";
import { cn } from "@/lib/utils/cn";
import { Dispatch, FC, useState, type SetStateAction } from "react";
import { InputDateIcon, InputStyle, SOption } from "..";
import { UPDownIcon } from "../icon/Icons";

interface IProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleAddAllTask: (task: ITask) => void;
}

export const TaskForm: FC<IProps> = ({ setIsOpen, handleAddAllTask }) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [formData, setFormData] = useState<ITask>({
    id: "1",
    userId: "1",
    assign: "",
    status: "pending",

    title: "",
    priority: "",
    start: new Date(),
    end: new Date(),
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
    console.log(name, value);
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
      start: new Date(),
      end: new Date(),
      description: "",

      subTasks: [{ taskId: "1", title: "Subtask 1", checked: false }],

      createdAt: new Date(),
      updatedAt: new Date(),
    });
    setIsOpen(false);
  };

  const inputDate = (date: Date) => {
    const bdTime = new Date(date.getTime() + 6 * 60 * 60 * 1000); // Convert UTC to BST
    return bdTime.toISOString().slice(0, 16); // Keep only YYYY-MM-DDTHH:MM
  };

  const handleToggle = () => setIsToggle((prev) => !prev);

  return (
    <div className=" rounded-2xl">
      <p className="font-bold text-white text-lg sm:text-2xl ps-3.5">My Task</p>
      <div className="sm:p-4 p-3 grid grid-cols-3 gap-10">
        <div className="col-span-3">
          <form className="text-white/50 pt-5">
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

            <div className="mb-6">
              <h1 className="font-semibold text-lg mb-2">Set Deadline:</h1>
              <div className="grid grid-cols-4 gap-2 ">
                <div className="sm:col-span-2 col-span-4 flex flex-col sm:flex-row sm:items-center items-start gap-2">
                  <label htmlFor="from" className="font-semibold text-sm">
                    From:
                  </label>
                  <input
                    type="datetime-local"
                    id="from"
                    name="start"
                    value={inputDate(formData.start)}
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
                    value={inputDate(formData.end)}
                    className={cn("", InputStyle, InputDateIcon)}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4">
              <div className=" col-span-1">
                <p className="font-semibold text-lg mb-2">Priority</p>
                <select
                  onChange={handleChange}
                  name="priority"
                  className="outline-none"
                >
                  <option
                    className={cn("", SOption)}
                    value={formData.priority}
                    disabled
                    selected
                  >
                    Select Priority
                  </option>
                  <option
                    selected
                    className={cn("", SOption)}
                    value="select-priority"
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

              <div className=" col-span-1">
                <p className="font-semibold text-lg mb-2">Assign</p>
                <select
                  onChange={handleChange}
                  name="assign"
                  className="outline-none"
                >
                  <option
                    className={cn("", SOption)}
                    value={formData.assign}
                    disabled
                    selected
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

              <div className="col-span-1">
                <h1 className="font-semibold text-lg mb-2">Team</h1>
                <select
                  className="outline-none"
                  onChange={handleChange}
                  name="team"
                >
                  <option
                    className={cn("", SOption)}
                    value={formData.assign}
                    disabled
                    selected
                  >
                    Select Team
                  </option>
                  <option className={cn("", SOption)} value="team-one">
                    Team One
                  </option>
                  <option className={cn("", SOption)} value="team-two">
                    Team Two
                  </option>
                  <option className={cn("", SOption)} value="team-three">
                    Team Three
                  </option>
                </select>
              </div>

              <div className="col-span-1 flex items-end ">
                <button
                  type="button"
                  onClick={handleToggle}
                  className="flex items-end gap-2 cursor-pointer"
                >
                  <span className="hover:text-white font-semibold">
                    More Options
                  </span>
                  <UPDownIcon className={`${isToggle ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>
            {isToggle && (
              <div className="mt-6 flex flex-col gap-2">
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
            )}
          </form>
          <div className="flex justify-end mt-6 items-start ">
            <button
              className=" bg-green-500  text-white hover:scale-105 transition-all cursor-pointer font-bold mt-3 py-1 md:py-2 px-2 md:px-6 rounded-md"
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
