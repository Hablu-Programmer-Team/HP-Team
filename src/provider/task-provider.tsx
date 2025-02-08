import { TaskDataContext } from "@/context";
import type { ITask } from "@/lib/database/task";
import { IChildren } from "@/types";
import { useState, type FC,} from "react";



export const TaskDataProvider: FC<IChildren> = ({ children }) => {
  const [allTask, setAllTask] = useState<ITask[]>([
    {
        id: "dkfdkfdfda",
        userId: "1",
        assign: "udoy",
        status: "pending",
        team: "team tow",
        title: "task 1",
        priority: "low",
        start: new Date(),
        end: new Date(),
        description: "",
        subTasks: [{ taskId: "1", title: "Subtask 1", checked: false }],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "dkfdkfdfddfd",
        userId: "1",
        assign: "udoy",
        status: "pending",
        team: "team tow",
        title: "task 1",
        priority: "low",
        start: new Date(),
        end: new Date(),
        description: "",
        subTasks: [{ taskId: "1", title: "Subtask 1", checked: false }],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "dkfdkfdfddfdfdfdf",
        userId: "1",
        assign: "udoy",
        status: "pending",
        team: "team tow",
        title: "task 1",
        priority: "low",
        start: new Date(),
        end: new Date(),
        description: "",
        subTasks: [{ taskId: "1", title: "Subtask 1", checked: false }],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "dkfdkfdfdcccc",
        userId: "1",
        assign: "udoy",
        status: "in-progress",
        team: "team tow",
        title: "task 1",
        priority: "low",
        start: new Date(),
        end: new Date(),
        description: "",
        subTasks: [{ taskId: "1", title: "Subtask 1", checked: false }],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "dkfdkfdfdssseeeww",
        userId: "1",
        assign: "udoy",
        status: "completed",
        team: "team tow",
        title: "task 2",
        priority: "low",
        start: new Date(),
        end: new Date(),
        description: "",
        subTasks: [{ taskId: "1", title: "Subtask 1", checked: false }],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
  ]);
  const addAllTask = (task: ITask) => setAllTask([...allTask, task]);
  const addEditTask = (task:ITask) => {
    setAllTask(allTask.map((t)=> t.id === task.id ? task : t))
  }

  return (
    <TaskDataContext.Provider value={{allTask,addAllTask,addEditTask}}>
      {children}
    </TaskDataContext.Provider>
  );
};
