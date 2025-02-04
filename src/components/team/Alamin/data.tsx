import { DashboardIcon, TaskIcon } from "./icons";

interface Item {
  label: string;
  path: string;
  icon?: JSX.Element;
}

interface SidebarItems extends Item {
  option?: Item[];
}

export const dashItems: SidebarItems[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    label: "My Tasks",
    icon: <TaskIcon />,
    path: "/my-tasks",
  },
];
