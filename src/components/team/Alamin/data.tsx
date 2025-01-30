import {
  ArrowDownIcon,
  DashboardIcon,
  HelpIcon,
  ProjectIcon,
  SettingIcon,
  TaskCategIcon,
  TaskIcon,
} from "./icons";

export const dashItems = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  {
    label: "Projects",
    icon: <ProjectIcon />,
    childs: ["All Projects", "Design System", "User Flow", "UX Research"],
    arrowIcon: <ArrowDownIcon />,
  },
  {
    label: "Task",
    icon: <TaskIcon />,
    childs: ["All Tasks", "To-Do", "In Progress", "Done"],
    arrowIcon: <ArrowDownIcon />,
  },
  { label: "Task Categories", icon: <TaskCategIcon /> },
  { label: "Settings", icon: <SettingIcon /> },
  { label: "Help", icon: <HelpIcon /> },
];
