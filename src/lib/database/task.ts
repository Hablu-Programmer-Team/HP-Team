type TStatus = "pending" | "in-progress" | "incomplete" | "completed";

interface ISubTask {
  taskId: string;

  title: string;
  description?: string;
  checked: boolean;
}

interface ITask {
  id: string;
  userId: string;

  title: string;
  description: string;
  status: TStatus;
  priority: string;
  assign?: string;
  start: Date;
  end: Date;

  subTasks: ISubTask[];

  createdAt: Date;
  updatedAt: Date;
}

export const taskList: ITask[] = [
  {
    id: "1",
    userId: "1",
    assign: "1",
    status: "pending",

    title: "Task 1",
    priority: "low",
    start: new Date(),
    end: new Date(),
    description: "Task 1 description",

    subTasks: [{ taskId: "1", title: "Subtask 1", checked: false }],

    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
