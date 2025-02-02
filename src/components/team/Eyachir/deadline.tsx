import { cn } from "@/lib/utils/cn";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

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
      const timeDifference = deadlineTimestamp - Date.now();
      setPercentageLeft((timeDifference / (deadline * 86400000)) * 100);

      if (completed === total) {
        return (
          setButtonText("Completed"),
          setBtnColor("bg-success-700/10 text-success-500")
        );
      } else if (timeDifference <= 0) {
        return setButtonText("Incomplete"), setBtnColor(" text-error-500/60");
      }

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

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [completed, total, taskName, deadline, percentageLeft, setPercentageLeft]);

  return (
    <div className="">
      <p
        className={cn(
          `p-1.5 text-[12px] border shadow-md font-bold rounded-xl `,
          btnColor
        )}
        title="Time Left"
      >
        {buttonText}
      </p>
      {/* <p>created{timeAgo}</p> */}
    </div>
  );
};
