import { FC } from "react";
import myStyle from "../../Alamin/sidebar.module.css";
import { CrossIcon } from "../icon/Icons";

interface IProps extends IChildren {
  cardName: string;
  toggleModal: () => void;
}

export const Modal: FC<IProps> = ({ toggleModal, children }) => (
  <div className="absolute w-full flex justify-center items-center h-screen z-50 mx-4">
    <section
      className={`bg-gray-900 max-w-[800px] h-fit rounded-xl shadow-2xl overflow-y-auto ${myStyle.scrollNone}`}
    >
      <div className="sm:p-5 p-2.5 relative">
        <button
          className="absolute right-5 top-5 flex items-center justify-center font-medium text-neutral-500/30  hover:scale-105 hover:bg-error-700/20 hover:text-red-600  cursor-pointer active:scale-95 transition-all"
          onClick={toggleModal}
        >
          <CrossIcon className="sm:size-8" />
        </button>

        {children}
      </div>
    </section>
  </div>
);
