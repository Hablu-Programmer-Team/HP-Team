import { IPriorityProp } from "./index";
import { ChangeEvent, FC, useEffect, useState } from "react";

export const Priority: FC<IPriorityProp> = ({toggle, name}) => {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [Priority, setPriority] = useState<{ title: string; status: string }[]>([
    { title: "", status: "" }
  ]);

  const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const statusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const settingPriority = () => {
    setPriority((prev) => [...prev, { title: title, status: status }]);
  };

  // Use useEffect to observe state updates
  useEffect(() => {
    console.log("Updated Priority:", Priority);
  }, [Priority]);
  return (
    <>
    <div className="absolute w-full h-screen bg-[#404042]/50 top-0 left-0 z-50 overflow-y-auto">
          <section className="bg-white max-w-[568px] h-[400px] rounded-lg absolute top-0 right-0 bottom-0 left-0 m-auto shadow-2xl">
          <div className="px-6 md:px-[62px] pt-6 md:pt-[46px]">
          <div className="flex md:justify-between items-center flex-col md:flex-row">
                <p className="font-semibold">{name}</p>
                  <button className="font-semibold bg-lime-200 rounded-xl px-3 py-1 cursor-pointer" onClick={toggle}>
                    Go Back
                  </button>
              </div>
              <div className="border border-[#ACADB5] mt-6 md:mt-[39px] rounded-2xl">
              <div className="px-4 py-[14px]">
              <form>
                      {/* Title Input */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="title"
                          className="font-semibold text-sm" autoFocus
                        >
                          Task Priority Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="flex-1 border rounded-md outline-none px-2 py-2 border-[#A1A3AB]"
                          placeholder="Note Your Tasks...."
                          onChange={(e) => titleChange(e)}
                          value={title}
                        />
                      </div>
                      <div className="flex flex-col gap-2 mt-3">
                        <label
                          htmlFor="title"
                          className="font-semibold text-sm" autoFocus
                        >
                          Task Status Name
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="flex-1 border rounded-md outline-none px-2 py-2 border-[#A1A3AB]"
                          placeholder="Note Your Tasks...."
                          value={status}
                          onChange={(e) => statusChange(e)}
                        />
                      </div>
                      </form>
                      <div className="flex gap-3 mt-3">
                        <button className="px-4 py-1 bg-green-300 rounded-lg font-semibold active:translate-y-0.5 transition-all cursor-pointer" onClick={settingPriority}>Create</button>
                        <button className="px-4 py-1 bg-red-300 rounded-lg font-semibold active:translate-y-0.5 transition-all cursor-pointer" onClick={toggle}>Cancel</button>
                      </div>
              </div>
              </div>
            </div>
          </section>
    </div>
    </>
  )
}