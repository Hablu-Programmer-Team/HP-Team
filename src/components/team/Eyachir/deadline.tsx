import { cn } from "@/lib/utils/cn";
import { FC, useEffect, useState } from "react";
import { ZoomOnHover } from ".";

interface TimeLeftProps {
    taskName: string;
    completed: number;
    total: number;
    deadline: number;
}

export const Deadline: FC<TimeLeftProps> = ({ taskName, completed, total, deadline,
}) => {
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
                    setTimeColor("bg-success-700/20 text-success-500")
                );
            if (timeDiff <= 0)
                return (
                    setTimeLeft("Incomplete"),
                    setTimeColor("bg-error-200/30 text-error-500/50")
                );

            const format = (n: number) => n.toString().padStart(2, "0");
            setTimeLeft(
                `${Math.floor(timeDiff / 86400000)
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
    }, [completed, total, taskName,deadline]);

    return (
        <div>
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
        </div>
    );
};
