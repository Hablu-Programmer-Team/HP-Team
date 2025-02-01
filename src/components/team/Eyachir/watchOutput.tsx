import { Card } from "./card";
import ConicGradientDiv from "./conicGradient";
import { WrapperDiv } from "./wrapperDiv";

const WatchOutput = () => (
  <div className=" bg-[#030712] bg-no-repeat">
    <ConicGradientDiv className="bgConic2 shadow-lg shadow-white/2 hover:shadow-white/5 relative  w-full h-screen transition duration-500 rounded-lg">
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
    </ConicGradientDiv>
  </div>
);

export default WatchOutput;
