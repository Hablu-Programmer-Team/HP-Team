import { ChangeEvent, useState } from "react";
// import { cn } from "@/lib/utils/cn";
import { Dialog, DialogContent, DialogTrigger, Input } from "./ui-library";

interface TaskDeadlineProps {
  onSave: (deadline: number) => void;
}

export const TaskDeadline = ({ onSave }: TaskDeadlineProps) => {
  const [dates, setDates] = useState({ fromDate: "", toDate: "" });
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState("");
  const [aDeadline, setADeadline] = useState();

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDates((prev) => ({ ...prev, [name]: value }));
    calculateDuration();
  };

  const calculateDuration = () => {
    const { fromDate, toDate } = dates;
    if (!fromDate || !toDate) return;

    const from = new Date(fromDate).getTime();
    const to = new Date(toDate).getTime();

    if (to >= from) {
      setError("End date must be after the start date.");
      setDuration(0);
    } else {
      setError("");
      setDuration(to - from);
    }
  };

  const saveDeadline = () => {
    if (duration > 0) {
      onSave(duration / 86400000); // Convert ms to days
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Set Deadline</button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-4">
          <label>From:</label>
          <Input
            type="datetime-local"
            name="fromDate"
            value={dates.fromDate}
            onChange={handleDateChange}
          />
          <label>To:</label>
          <Input
            type="datetime-local"
            name="toDate"
            value={dates.toDate}
            onChange={handleDateChange}
          />
          {error && <div className="text-red-500">{error}</div>}
          <div className="text-center text-lg font-bold">
            {duration > 0
              ? `${(duration / 86400000).toFixed(2)} Days`
              : "Invalid Range"}
          </div>
          <button onClick={saveDeadline}>Save Deadline</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
