import { WatchOutput } from "../team/Eyachir/watch-output";
import { AddTasks } from "../team/Mamun/add";

export const Dashboard = () => (
  <div>
    <AddTasks btnName="me" cardName="me" />
    <WatchOutput />
  </div>
);
