import { Card } from "./card";
import { WrapperDiv } from "./wrapper";

export const WatchOutput = () => (
  <div className=" bg-[#0f0f0f] bg-no-repeat h-screen">
    <WrapperDiv className="backdrop-blur-3xl w-full h-full flex items-center justify-center">
      <Card
        taskName="Task no 123"
        completed={9}
        total={10}
        deadline={0.0002}
        comments={50}
        shares={30}
      />
    </WrapperDiv>
  </div>
);
