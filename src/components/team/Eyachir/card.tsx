import { cn } from "@/lib/utils/cn";
import { FC, useState, type DragEvent } from "react";
import { CBlur } from ".";
import { Deadline } from "./deadline";
import { ProgressIcon } from "./icons";

interface CardProps {
  taskName: string;
  completed: number;
  total: number;
  deadline: number;
  createdAt: Date;
  updatedAt?: Date;
  onDragStarts: () => void;
  onDragEnds: () => void;
}

export const Card: FC<CardProps> = (props) => {
  const {
    taskName,
    completed,
    total,
    deadline,
    createdAt,
    onDragEnds,
    onDragStarts,
  } = props;

  const [percentageLeft, setPercentageLeft] = useState(0);
  const progressPercentage = (completed / total) * 100;

  return (
    <div
      onDragEnd={() => {
        onDragEnds();
      }}
      onDragStart={() => {
        onDragStarts();
      }}
      className="bg-black/30 border border-link-700/30 flex items-center cursor-pointer active:cursor-grab justify-center rounded-lg max-w-[400px] w-full"
      draggable
    >
      <div
        className={cn(
          "relative shadow-lg w-full max-w-[400px] transition duration-500 rounded-lg"
          // bgConic
        )}
      >
        <div className="max-w-[500px] rounded-lg w-full">
          <div className={cn("bottom-0 left-0", CBlur)} />
          <div className={cn("top-0 right-0", CBlur)} />
          <div className="relative bg-neutral-text-title/20 backdrop-blur-lg  rounded-lg p-5 space-y-2 duration-200 z-20">
            <h1
              title={taskName}
              className="md:text-xl text-gray-300 text-2xl font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {taskName}
            </h1>
            <div className="space-y-1 pb-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 group">
                  <ProgressIcon className="text-neutral-400 group-hover:text-neutral-100" />
                  <p className="text-lg text-neutral-400 group-hover:text-neutral-100">
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

              <div className="relative h-1 w-full rounded-2xl bg-white/20 overflow-hidden ">
                <div
                  className={cn(
                    "absolute top-1/2 bottom-1/2 -translate-y-1/2 h-2 rounded-2xl bg-gradient-to-r transition-all duration-300",
                    progressPercentage > 65
                      ? "from-success-100 to-success-500"
                      : progressPercentage > 30
                      ? "from-pending-100 to-pending-500"
                      : "from-error-100 to-error-500"
                  )}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            <div>
              <Deadline
                createdAt={createdAt}
                completed={completed}
                total={total}
                deadline={deadline}
                taskName={taskName}
                percentageLeft={percentageLeft}
                setPercentageLeft={setPercentageLeft}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
