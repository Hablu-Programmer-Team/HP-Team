import { WatchOutput } from "../team/Eyachir/watch-output";
import { AddTasks } from "../team/Mamun/start-task";

export const Dashboard = () => (
  <div>
    <AddTasks btnName="me" cardName="Team Task" />
    <WatchOutput />
  </div>
);
