import { WatchOutput } from "../team/Eyachir/watch-output";
import { AddTasks } from "../team/Mamun/startTask";

export const Dashboard = () => (
  <div>
    <AddTasks btnName="me" cardName="Team Task" />
    <WatchOutput />
  </div>
);
