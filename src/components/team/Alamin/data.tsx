import {
  CategoryIcon,
  DashboardIcon,
  HelpIcon,
  ProjectIcon,
  SettingIcon,
  TaskIcon,
} from "./icons";

interface Item {
  label: string;
  path?: string;
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
    label: "Projects",
    icon: <ProjectIcon />,
    option: [
      {
        label: "All Projects",
        path: "/all-projects",
      },
      {
        label: "Design System",
        path: "/design-system",
      },
      {
        label: "User Flow",
        path: "/user-flow",
      },
      {
        label: "UX Research",
        path: "/ux-research",
      },
    ],
  },
  {
    label: "Task",
    icon: <TaskIcon />,
    option: [
      {
        label: "All Tasks",
        path: "/all-tasks",
      },
      {
        label: "To-Do",
        path: "/to-do",
      },
      {
        label: "In Progress",
        path: "/in-progress",
      },
      {
        label: "Done",
        path: "/done",
      },
    ],
  },
  { label: "Task Categories", icon: <CategoryIcon />, path: "/task-categories" },
  { label: "Settings", icon: <SettingIcon />, path: "/settings" },
  { label: "Help", icon: <HelpIcon />, path: "/help" },
];