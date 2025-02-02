import { Card } from "./card";
import { WrapperDiv } from "./wrapperdiv";

export const WatchOutput = () => (
  <div className=" bg-[#030712] bg-no-repeat h-screen">
    <WrapperDiv className="backdrop-blur-3xl w-full h-full flex items-center justify-center">
      <Card
        taskName="Task 2fghg"
        completed={5}
        total={10}
        deadline={0.0002}
        comments={50}
        shares={30}
      />
    </WrapperDiv>
  </div>
);
