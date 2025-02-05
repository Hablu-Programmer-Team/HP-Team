import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import myStyle from "../../Alamin/sidebar.module.css";
import { CrossIcon } from "../icon/Icons";

interface IProps extends IChildren {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (modelRef.current && !modelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutSide);

    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, [isOpen, setIsOpen]);

  return (
    <div className="absolute w-full flex justify-center items-center h-screen z-50 mx-4">
      <section
        className={`bg-gray-900 max-w-[800px] h-fit rounded-xl shadow-2xl overflow-y-auto ${myStyle.scrollNone}`}
        ref={modelRef}
      >
        <div className="sm:p-5 p-2.5 relative">
          <button
            className="absolute right-5 top-5 flex items-center justify-center font-medium text-neutral-500/30  hover:scale-105 hover:text-red-500/50  cursor-pointer active:scale-95 transition-all"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <CrossIcon className="sm:size-8" />
          </button>

          {children}
        </div>
      </section>
    </div>
  );
};
