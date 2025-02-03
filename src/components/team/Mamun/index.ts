import { ReactNode } from "react";

export interface IFormData {
  title: string;
  date: string;
  priority: string;
  description: string;
}

export interface IAdd {
  cardName: string;
  btnName: string;
}

export interface IPriorityProp {
  name: string;
  toggle: () => void;
}

export interface IPriorityObj {
  event: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  condition: string;
  color: string;
}

export interface TaskFormProps {
  data: IFormData;
  event: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface IModal {
  children: ReactNode;
  cardName: string;
  toggleModal: () => void;
  submit: () => void;
  togglePriority?: () => void;
  priorityBtn?: boolean;
  goBackPermission?: boolean;
}