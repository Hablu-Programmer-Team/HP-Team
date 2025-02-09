import { ITask } from "@/lib/database/task";
import { createContext, type Dispatch, type SetStateAction } from "react";

type ITaskDataProps = {
  allTask: ITask[];
  addTask: (task: ITask) => void;
  addEditTask:(task:ITask) => void
  setAllTask:Dispatch<SetStateAction<ITask[]>>
};

const TaskDataContext = createContext<ITaskDataProps | null>(null);

export { TaskDataContext };
