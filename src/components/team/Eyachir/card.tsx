import { cn } from "@/lib/utils/cn";
import { FC, useState } from "react";
import { CSButton, ZoomOnHover } from ".";
import { Deadline } from "./deadline";
import { CommentIcon, ProgressIcon, ShareIcon } from "./icons";
import { WrapperDiv } from "./wrapper";

interface CardProps {
  taskName: string;
  completed: number;
  total: number;
  deadline: number;
  comments: number;
  shares: number;
}

const CSIcons = [{ Icon: CommentIcon }, { Icon: ShareIcon }];
export const Card: FC<CardProps> = (props) => {
  const { taskName, completed, total, ...others } = props;
  const { deadline, comments, shares } = others;

  const [percentageLeft, setPercentageLeft] = useState(0);
  const progressPercentage = (completed / total) * 100;

  return (
    <div className="bg-black flex items-center justify-center rounded-lg max-w-[400px] w-full">
      <WrapperDiv
        className={cn(
          "bgConic relative shadow-lg shadow-white/2 hover:shadow-white/5  w-full max-w-[400px] transition duration-500 pt-[1px] rounded-lg",
          percentageLeft < 0 && "bg-red-600",
          percentageLeft > 0 && "bg-green-500"
          // timeColor
        )}
      >
        <WrapperDiv className="max-w-[500px] rounded-lg w-full">
          <div className="h-[70px] w-[70px] bg-pending-500/20 absolute bottom-0 rounded-lg"></div>
          <div className="relative bg-neutral-text-title/20 backdrop-blur-2xl  rounded-lg p-5 space-y-5 cursor-pointer duration-200 z-20">
            <h1
              title={taskName}
              className="md:text-3xl text-gray-300 text-2xl font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {taskName}
            </h1>
            <div className="space-y-2 pb-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 group">
                  <ProgressIcon className="text-neutral-400 group-hover:text-neutral-100" />
                  <p className="text-xl text-neutral-400 group-hover:text-neutral-100">
                    Progress
                  </p>
                </div>

                <div>
                  <div className="space-x-0.5 bg-pending-500/40 hover:bg-pending-700 rounded-lg px-1.5 py-0.5 text-neutral-100 hover:text-white text-[12px] transition-all duration-300">
                    <span title="Complete">{completed}</span>/
                    <span title="Total">{total}</span>
                  </div>
                </div>
              </div>

              <div className="relative h-2 w-full rounded-2xl bg-white/20 overflow-hidden ">
                <div
                  className={cn(
                    "absolute top-1/2 bottom-1/2 -translate-y-1/2 h-2 rounded-2xl bg-gradient-to-r transition-all duration-300",
                    "from-error-100 to-error-500",
                    {
                      "from-success-100 to-success-500":
                        progressPercentage > 65,
                      "from-pending-100 to-pending-500":
                        progressPercentage > 30,
                    }
                  )}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Deadline
                completed={completed}
                total={total}
                deadline={deadline}
                taskName={taskName}
                percentageLeft={percentageLeft}
                setPercentageLeft={setPercentageLeft}
              />

              <div className="flex gap-1">
                {CSIcons.map(({ Icon }, i) => (
                  <div key={i} className={cn("group", ZoomOnHover, CSButton)}>
                    <Icon className="text-neutral-400 group-hover:text-neutral-100" />
                    <span className="text-neutral-400 group-hover:text-neutral-100">
                      {i === 0 ? comments : shares}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </WrapperDiv>
      </WrapperDiv>
    </div>
  );
};
