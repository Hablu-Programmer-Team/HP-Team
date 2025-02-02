import { cn } from "@/lib/utils/cn";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { ZoomOnHover } from ".";

interface TimeLeftProps {
  taskName: string;
  completed: number;
  total: number;
  deadline: number;
  percentageLeft: number;
  setPercentageLeft: Dispatch<SetStateAction<number>>;
}

export const Deadline: FC<TimeLeftProps> = (props) => {
  const { taskName, completed, total, deadline, ...oth } = props;
  const { percentageLeft, setPercentageLeft } = oth;

  const [buttonText, setButtonText] = useState("");
  const [btnColor, setBtnColor] = useState("");
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const storageKey = `deadline_${taskName}`;
    const createdKey = `created_${taskName}`;

    // fetch or set deadline
    const storedDeadline =
      localStorage.getItem(storageKey) ||
      (localStorage.setItem(
        storageKey,
        (Date.now() + deadline * 86400000).toString()
      ),
      localStorage.getItem(storageKey)!);
    const deadlineTimestamp = parseInt(storedDeadline, 10);

    // fetch or set created time
    const storedCreated =
      localStorage.getItem(createdKey) ||
      (localStorage.setItem(createdKey, Date.now().toString()),
      localStorage.getItem(createdKey)!);
    const createdTimestamp = parseInt(storedCreated, 10);

    const updateTimer = () => {
      const timeDifference = deadlineTimestamp - Date.now();
      setPercentageLeft((timeDifference / (deadline * 86400000)) * 100);

      if (completed === total) {
        return setButtonText("Completed"), setBtnColor("text-success-500/70");
      } else if (timeDifference <= 0) {
        return setButtonText("Incomplete"), setBtnColor("text-error-500/60");
      }
      setBtnColor(
        percentageLeft > 65
          ? "shadow-success-200/30 text-success-500/50 bg-success-700/10"
          : percentageLeft > 30
          ? "shadow-pending-200/30 text-pending-500/50 bg-pending-700/10"
          : "shadow-error-200/30 text-error-500/50 bg-error-700/10"
      );

      const format = (n: number) => n.toString().padStart(2, "0");

      setButtonText(
        `${
          Math.floor(timeDifference / 86400000)
            ? `${Math.floor(timeDifference / 86400000)}D`
            : ""
        } ${format(Math.floor((timeDifference % 86400000) / 3600000))}:${format(
          Math.floor((timeDifference % 3600000) / 60000)
        )}:${format(Math.floor((timeDifference % 60000) / 1000))}`
      );
    };

    const timeAgoDifference = Date.now() - createdTimestamp;

    setTimeAgo(
      timeAgoDifference < 60000
        ? "Just now"
        : timeAgoDifference < 3600000
        ? timeAgoDifference / 60000 + " " + "min ago"
        : timeAgoDifference < 86400000
        ? timeAgoDifference / 3600000 + " " + "hours ago"
        : timeAgoDifference / 86400000 + " " + "days ago"
        ? timeAgoDifference / 2592000 + " " + "months ago"
        : timeAgoDifference / 31536000 + " " + "years ago"
    );

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [completed, total, taskName, deadline, percentageLeft, setPercentageLeft]);

  return (
    <div className="flex items-center justify-between">
      <p
        className={cn(
          `p-1.5 text-[12px] border shadow-md font-bold rounded-xl `,
          btnColor,
          ZoomOnHover
        )}
        title="Time Left"
      >
        {buttonText}
      </p>
      <p
        className={cn(
          " text-neutral-200/40 hover:text-neutral-100",
          ZoomOnHover
        )}
      >
        {timeAgo}
      </p>
    </div>
  );
};
