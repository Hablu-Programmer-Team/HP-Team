import { cn } from "@/lib/utils/cn";
import { FC, useEffect, useState } from "react";
import { InputDateIcon, InputStyle, SOption, TaskFormProps } from "..";
import { SubTask } from "../add-task";

export const TaskForm: FC<TaskFormProps> = ({ data, event }) => {
  const [from, setFrom] = useState(data.from || "");
  const [to, setTo] = useState(data.to || "");
  const [timeDifference, setTimeDifference] = useState("");

  useEffect(() => {
    if (from && to) {
      setTimeDifference(calculateTimeDifference(from, to));
    }
  }, [from, to]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update local state
    if (name === "from") setFrom(value);
    if (name === "to") setTo(value);

    // Pass change event to parent
    event(e);
  };

  const calculateTimeDifference = (from: string, to: string) => {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const diffMs = toDate.getTime() - fromDate.getTime();

    if (diffMs < 0) return "Invalid range";

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d ${hours}h ${minutes}m`;
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
                value={data.title}
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
                    name="from"
                    value={from}
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
                    name="to"
                    value={to}
                    className={cn("", InputStyle, InputDateIcon)}
                    onChange={handleChange}
                  />
                </div>

                <div className="sm:col-span-2 col-span-4 flex flex-col sm:flex-row sm:items-center items-start gap-2">
                  <label
                    htmlFor="to"
                    className="font-semibold text-sm text-nowrap"
                  >
                    Deadline:
                  </label>
                  <input
                    type="text"
                    value={timeDifference}
                    placeholder="remaining time..."
                    readOnly
                    className="flex-1 w-full text-blue-400 sm:max-w-[88%] sm:ml-auto border rounded-md outline-none px-2 py-2 border-none "
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4">
              <div className="my-6 col-span-1">
                <p className="font-semibold text-lg mb-2">Priority</p>
                <select name="" id="">
                  <option
                    className={cn("", SOption)}
                    value="select-priority"
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
                <select name="" id="">
                  <option
                    className={cn("", SOption)}
                    value="select-priority"
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

            <div className="my-6 ">
              <SubTask id={1} taskName="task 1" />
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
                className="p-2 w-full rounded-md border  outline-none resize-none border-neutral-placeholder/20 focus:border-neutral-placeholder/40"
                rows={8}
                value={data.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
