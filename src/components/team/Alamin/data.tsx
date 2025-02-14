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

export const NotificationMessages: string[] = [
  "You have a new message from John.",
  "Your task 'Design Update' has been marked as completed.",
  "Your storage is almost full. Please free up space.",
  "A server error occurred while fetching data.",
  "Reminder: Your meeting starts in 30 minutes.",
  "New comment on your post: 'Great job on this project!'",
  "Your password was successfully changed.",
  "Subscription renewal due in 3 days.",
  "System update available. Restart to apply changes.",
  "Your order has been shipped and is on the way.",
];

export const MyTasksData = [
  { label: "All", count: 20 },
  { label: "Complete", count: 15 },
  { label: "Incomplete", count: 5 },
];
