import { cn } from "@/lib/utils/cn";
import { FC, useEffect, useState } from "react";

interface TimeLeftProps {
  taskName: string;
  completed: number;
  total: number;
  deadline: number;
  // timeColor: string;
  // setTimeColor: Dispatch<SetStateAction<string>>;
  percentageLeft?: number;
}

export const Deadline: FC<TimeLeftProps> = (props) => {
  const {
    taskName,
    completed,
    total,
    deadline,
    // timeColor,
    // setTimeColor,
    // percentageLeft,
  } = props;
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
          setTimeColor("bg-success-700/10 text-success-500")
        );
      if (timeDiff <= 0)
        return setTimeLeft("Incomplete"), setTimeColor(" text-error-500/60");

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

      //   const className = cn(
      //     "w-40 h-40 bg-[conic-gradient(from_35deg,var(--color-pending-700),var(--color-link-700),transparent_10%)]"
      //   );

      setTimeColor(
        percentageLeft > 65
          ? `shadow-success-200/30 text-success-500/50 bg-success-700/10`
          : percentageLeft > 30
          ? "shadow-pending-200/30 text-pending-500/50 bg-pending-700/10"
          : "shadow-error-200/30 text-error-500/50 bg-error-700/20"
      );
    };
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [completed, total, taskName, deadline]);
  // useEffect(() => console.log(timeLeft), [timeLeft]);
  return (
    <div className="">
      <p
        className={cn(
          `p-1.5 text-[12px] border shadow-md font-bold rounded-xl `,
          timeColor
          // ZoomOnHover
        )}
        title="Time Left"
      >
        {timeLeft}
      </p>
      {/* <p>created{timeAgo}</p> */}
    </div>
  );
};
