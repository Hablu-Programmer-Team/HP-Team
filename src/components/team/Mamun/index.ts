import { ReactNode } from "react";

// validator
export interface IFormData {
  title: string;
  date: string;
  priority: string;
  description: string;
  from?: string;
  to?: string;
}

// add-task & edit
export interface IAdd {
  cardName: string;
  btnName: string;
}

export interface TaskDataTypes {
  title: string;
  createdAt: string;
  deadline: string;

  priority: string;
  assign: string;
  subTask: [];
  description: string;
}

// priority-common
export interface IPriorityObj {
  event: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  condition: string;
  color: string;
  accent: string;
}

// task-form
export interface TaskFormProps {
  data: IFormData;
  event: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

// modal
export interface IModal {
  children: ReactNode;
  cardName: string;
  toggleModal: () => void;
  togglePriority?: () => void;
  priorityBtn?: boolean;
  goBackPermission?: boolean;
}

export const TaskStatus = `p-2 bg-[#030700] w-full shadow text-neutral-300 hover:bg-neutral-300 hover:text-[#030700] cursor-pointer active:scale-95`;

export const InputStyle = `flex-1 border rounded-md outline-none px-2 py-2 border-neutral-placeholder/20 focus:border-neutral-placeholder/40`;

export const InputDateIcon = `filter invert-[60%] sepia-[10%] hue-rotate-[180deg] saturate-[80%] w-full sm:max-w-[88%] sm:ml-auto`;

export const SOption = `bg-neutral-800 text-neutral-300 hover:bg-neutral-600 cursor-pointer`;

// bg - [#030712]
