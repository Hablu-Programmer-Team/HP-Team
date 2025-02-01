import { Card } from "./card";
import { WrapperDiv } from "./wrapperDiv";

const WatchOutput = () => (
  <div className=" bg-[#030712] bg-no-repeat h-screen">
      <WrapperDiv className="backdrop-blur-3xl w-full h-full flex items-center justify-center">
        <Card
          taskName="Udoy"
          total={10}
          completed={10}
          deadline={1}
          comments={50}
          shares={30}
        />
      </WrapperDiv>
  </div>
);

export default WatchOutput;
