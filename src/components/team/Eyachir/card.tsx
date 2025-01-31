import { cn } from "@/lib/utils/cn";
import { FC, useEffect, useState } from "react";
import { CSButton, ZoomOnHover } from ".";
import { CommentIcon, ProgressIcon, ShareIcon } from "./icons";

interface CardProps {
  taskName: string;
  completed: number;
  total: number;
  deadline: number;
  comments: number;
  shares: number;
}

export const Card: FC<CardProps> = ({
  taskName,
  completed,
  total,
  deadline,
  comments,
  shares,
}) => {
  const progressPercentage = (completed / total) * 100;
  const [timeLeft, setTimeLeft] = useState("");
  const [timeColor, setTimeColor] = useState("");

  useEffect(() => {
    const storageKey = `deadline_${taskName}`;

    const storedDeadline =
      localStorage.getItem(storageKey) ||
      (localStorage.setItem(
        storageKey,
        (Date.now() + deadline * 86400000).toString()
      ),
      localStorage.getItem(storageKey)!);

    const deadlineTimestamp = parseInt(storedDeadline, 10);

    const updateTimer = () => {
      const timeDiff = deadlineTimestamp - Date.now();
      const percentageLeft = (timeDiff / (deadline * 86400000)) * 100;

      if (completed === total)
        return (
          setTimeLeft("Completed"),
          setTimeColor("bg-success-200/30 text-success-500/50")
        );
      if (timeDiff <= 0)
        return (
          setTimeLeft("Incomplete"),
          setTimeColor("bg-error-200/30 text-error-500/50")
        );

      const format = (n: number) => n.toString().padStart(2, "0");
      setTimeLeft(
        `${
          Math.floor(timeDiff / 86400000)
            ? `${Math.floor(timeDiff / 86400000)}D`
            : ""
        } ${format(Math.floor((timeDiff % 86400000) / 3600000))}:${format(
          Math.floor((timeDiff % 3600000) / 60000)
        )}:${format(Math.floor((timeDiff % 60000) / 1000))}`
      );

      setTimeColor(
        percentageLeft > 65
          ? "bg-success-200/30 text-success-500/50"
          : percentageLeft > 30
          ? "bg-pending-200/30 text-pending-500/50"
          : "bg-error-200/30 text-error-500/50"
      );
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [completed, total, taskName]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-background">
      <div className="max-w-[320px] w-full hover:border-2 border-neutral-disable hover:border-dashed rounded-lg">
        <div className="hover:bg-white border-2 border-neutral-disable hover:border-0 rounded-lg p-5 space-y-5 cursor-pointer hover:translate-x-3 hover:-translate-y-3 transition-transform duration-200 z-20">
          <h1
            title={taskName}
            className="md:text-3xl text-2xl font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {taskName}
          </h1>
          <div className="space-y-2 pb-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 group">
                <ProgressIcon className="text-neutral-400 group-hover:text-neutral-600" />
                <p className="text-xl text-neutral-400 group-hover:text-neutral-800">
                  Progress
                </p>
              </div>

              <div>
                <div className="space-x-0.5 bg-neutral-200/30 hover:bg-neutral-200 rounded-lg px-1.5 py-0.5 text-neutral-400 hover:text-neutral-600 text-[12px] transition-all duration-300">
                  <span title="Complete">{completed}</span>/
                  <span title="Total">{total}</span>
                </div>
              </div>
            </div>

            <div className="relative h-2 w-full rounded-2xl bg-primary-100 overflow-hidden ">
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
              ></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p
              className={cn(
                `p-1.5 text-[12px] font-bold rounded-xl`,
                timeColor,
                ZoomOnHover
              )}
              title="Time Left"
            >
              {timeLeft}
            </p>

            <div className="flex gap-1">
              {[
                { Icon: CommentIcon, count: comments },
                { Icon: ShareIcon, count: shares },
              ].map(({ Icon, count }, i) => (
                <div key={i} className={cn("group", ZoomOnHover, CSButton)}>
                  <Icon className="text-neutral-400 group-hover:text-neutral-600" />
                  <span className="text-neutral-400 group-hover:text-neutral-600">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
