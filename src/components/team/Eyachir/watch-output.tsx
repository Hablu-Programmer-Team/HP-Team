import { Card } from "./card";

export const WatchOutput = () => (
  <div className=" bg-[#0f0f0f] bg-no-repeat h-screen">
    <div className="backdrop-blur-3xl w-full h-full flex items-center justify-center">
      <Card
        taskName="Task no 12345g2"
        completed={8}
        total={10}
        deadline={0.0003}
        createdAt={new Date("31 January 2025 07:00 AM")}
        updatedAt={new Date()}
      />
    </div>
  </div>
);
