import { FC } from "react";
import { TaskFormProps } from "..";
import { priorityData } from "../data/data";
import { PriorityCommon } from "../priority-common";

export const TaskForm: FC<TaskFormProps> = ({ data, event }) => {
  // const [onSave, setOnSave] = useState<(deadline: number) => void>(
  //   () => (deadline: number) => {
  //     console.log(`Deadline saved: ${deadline} days`);
  //   }
  // );
  return (
    <div className="border border-[#79797c] mt-6 md:mt-[39px] rounded-2xl">
      <div className="px-4 py-[14px] grid grid-cols-3 gap-10">
        <div className="col-span-3">
          <form>
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-semibold text-sm">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={data.title}
                className="flex-1 border rounded-md outline-none px-2 py-2 border-[#A1A3AB]"
                onChange={event}
                placeholder="Note Your Tasks...."
              />
            </div>
            <div>
              <h1>Set Deadline</h1>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 mt-4">
                  <label htmlFor="date" className="font-semibold text-sm">
                    From
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    value={data.date}
                    className="flex-1 border rounded-md outline-none px-2 py-2 border-[#A1A3AB]"
                    onChange={event}
                  />
                </div>
                {/* <div>
                  <input
                    type="datetime-local"
                    className="flex-1 border rounded-md outline-none px-2 py-2 border-[#A1A3AB]"
                  />
                </div> */}
                <div className="flex items-center gap-2 mt-4">
                  <label htmlFor="date" className="font-semibold text-sm">
                    To
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    value={data.date}
                    className="flex-1 border rounded-md outline-none px-2 py-2 border-[#A1A3AB]"
                    onChange={event}
                  />
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="date" className="font-semibold text-sm">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={data.date}
                className="flex-1 border rounded-md outline-none px-2 py-2 border-[#A1A3AB]"
                onChange={event}
              />
            </div> */}
            <div>{/* <TaskDeadline onSave={onSave} /> */}</div>
          </form>
          <div className="mt-4">
            <p className="font-semibold text-sm">Priority</p>
            <div className="flex gap-2 md:gap-[53px] flex-col md:flex-row">
              {priorityData.map((value, index) => (
                <PriorityCommon
                  key={index}
                  condition={data.priority}
                  value={value.name}
                  event={event}
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
              value={data.description}
              onChange={event}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
