import { TaskDataContext } from "@/context";
import { useContext } from "react";

export const useTaskData = () => useContext(TaskDataContext);
