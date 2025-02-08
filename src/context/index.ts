import { ITask } from "@/lib/database/task";
import { createContext } from "react";

type ITaskDataProps = {
  allTask: ITask[];
  addAllTask: (task: ITask) => void;
  addEditTask:(task:ITask) => void
};

const TaskDataContext = createContext<ITaskDataProps | null>(null);

export { TaskDataContext };
