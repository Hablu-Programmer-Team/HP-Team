import { useState, type FC } from "react";
interface IDragProps {
  handleDrop: () => void;
}
export const DragableArea: FC<IDragProps> = ({ handleDrop }) => {
  const [isDragEnter, setIsDragEnter] = useState(false);
  return (
    <div
      onDragEnter={() => setIsDragEnter(true)}
      onDragLeave={() => setIsDragEnter(false)}
      onDrop={(e) => {
        e.preventDefault()
        handleDrop()
        setIsDragEnter(false)
     }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      className={`${
        isDragEnter
          ? "bg-black/30 border border-link-500 mb-5 flex items-center cursor-pointer opacity-100 justify-center rounded-lg min-h-[130px] min-w-[200px]"
          : "w-full opacity-0 pb-2"
      }`}
    ></div>
  );
};
