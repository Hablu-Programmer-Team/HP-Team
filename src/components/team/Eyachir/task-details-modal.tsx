import type { ITask } from "@/lib/database/task";
import { useState, type FC } from "react";
import { CrossIcon } from "../Mamun/icon/Icons";
import { Button } from "../Udoy/button";
interface ITaskModalProps {
  task: ITask | null;
  onClose: () => void;
}

export const TaskDetailsModal: FC<ITaskModalProps> = ({ onClose, task }) => {
  const [subTask, setSubTask] = useState();
  return (
    <div className="absolute h-[100vh] w-full md:w-[70vw] bg-[#030712b0] z-50 backdrop-blur-md right-0 px-2 pt-4 md:p-10">
      <button className="absolute left-4 top-2" onClick={onClose}>
        <CrossIcon className=" hover:bg-error-500 rounded-full cursor-pointer" />
      </button>
      <div className="border-t  border-gray-900 pt-3 flex flex-col md:flex-row ">
        {/* left side  */}
        <div className="flex-[1.6] pr-3">
          <h1 className="text-gray-400 h3 underline underline-offset-4 under">
            {task?.title}
          </h1>
          <p className="text-sm py-2 text-gray-500 font-sans" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas inventore odit, animi illo nesciunt cum hic qui asperiores itaque, saepe non fugit magni velit libero nam nostrum culpa. Ab, obcaecati!</p>
          <div className="mt-5 w-full">
            <div className="flex gap-2 items-center justify-center">
              <input
                className="w-full px-4 py-2 border border-link-700/40 outline-none rounded-md placeholder:text-gray-600"
                type="text"
                placeholder="add sub-task"
              />
              <Button>Add</Button>
            </div>
            <div className="mt-4 border-t border-gray-900">
              <p className="text-neutral-text-secondary mt-3">Your Sub Task</p>
              {/* progress  */}
              <div className="mb-2 mt-5">
                <p className="text-xs">PROGRESS</p>
                <div className="py-4 px-1 border-t space-y-1.5 border-b mt-3 border-pending-700/20">
                  <div className="inline-flex p-2 rounded-md items-center gap-3 bg-pending-500/5">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="cursor-pointer" />
                      <button className="text-sm cursor-pointer">❌</button>
                    </div>
                    <p className="text-sm text-pending-200/60">
                      Button components created done Lorem ipsum dolor sit
                    </p>
                  </div>
                  <div className="inline-flex p-2 rounded-md items-center gap-3 bg-pending-500/5">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="cursor-pointer" />
                      <button className="text-sm cursor-pointer">❌</button>
                    </div>
                    <p className="text-sm text-pending-200/60">
                      Button components created done Lorem ipsum dolor sit
                    </p>
                  </div>
                  <div className="inline-flex p-2 rounded-md items-center gap-3 bg-pending-500/5">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="cursor-pointer" />
                      <button className="text-sm cursor-pointer">❌</button>
                    </div>
                    <p className="text-sm text-pending-200/60">
                      Button components created done Lorem ipsum dolor sit
                    </p>
                  </div>
                </div>
              </div>
              {/* done  */}
              <div className="mt-5">
                <p className="text-xs">DONE</p>
                <div className="py-4 px-1 space-x-1 border-b border-t space-y-1 mt-2 border-success-700/20">
                  <div className=" flex sm:inline-flex items-center gap-3 p-2 rounded-md bg-success-700/5">
                    <button>✔</button>
                    <p className="text-sm text-success-400">
                      Button components created done
                    </p>
                  </div>
                  <div className=" flex sm:inline-flex items-center gap-3 p-2 rounded-md bg-success-700/5">
                    <button>✔</button>
                    <p className="text-sm text-success-400">
                      Button components created done
                    </p>
                  </div>
                  <div className=" flex sm:inline-flex items-center gap-3 p-2 rounded-md bg-success-700/5">
                    <button>✔</button>
                    <p className="text-sm text-success-400">
                      Button components created done
                    </p>
                  </div>
                  <div className=" flex sm:inline-flex items-center gap-3 p-2 rounded-md bg-success-700/5">
                    <button>✔</button>
                    <p className="text-sm text-success-400">
                      Button components created doneddddddddddddddddddddddddd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className=" flex-[0.4] border-t-1 mt-3 md:mt-0 md:border-t-0 md:border-l-2 h-[100vh] px-2 border-gray-900">
          <div>
            <p className="text-sm text-gray-400 border-b border-gray-900">
              Assignes
            </p>
            <h2 className="mt-2 underline underline-offset-4 text-link-700">
              {task?.assign}
            </h2>
          </div>
          <div className="mt-3">
            <p className="text-sm text-gray-400 border-b border-gray-900">
              Task Status
            </p>
            <h2 className="mt-2 text-success-700">{task?.status}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
