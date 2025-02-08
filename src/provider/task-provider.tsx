import { TaskDataContext } from "@/context";
import type { ITask } from "@/lib/database/task";
import { IChildren } from "@/types";
import { useState, type FC,} from "react";



export const TaskDataProvider: FC<IChildren> = ({ children }) => {
  const [allTask, setAllTask] = useState<ITask[]>([]);
  const addAllTask = (task: ITask) => setAllTask([...allTask, task]);

  return (
    <TaskDataContext.Provider value={{allTask,addAllTask}}>
      {children}
    </TaskDataContext.Provider>
  );
};
