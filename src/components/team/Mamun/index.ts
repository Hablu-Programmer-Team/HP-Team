export interface IType{
    title: string,
    date: string,
    priority: string,
    description: string
}

export interface IFormData {
    title: string;
    date: string;
    priority: string;
    description: string;
  }

export interface IAdd{
    cardName: string;
    btnName: string;
}

export interface IPriorityProp{
    name: string;
    toggle: () => void;
}

export interface IPriorityObj{
    event: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    condition: string;
    color: string;
}