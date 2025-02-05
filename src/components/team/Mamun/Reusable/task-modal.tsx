import { FC } from "react";
import myStyle from "../../Alamin/sidebar.module.css";
import { CrossIcon } from "../icon/Icons";

interface IProps extends IChildren {
  cardName: string;
  toggleModal: () => void;
}

export const Modal: FC<IProps> = ({
  cardName,
  toggleModal,

  children,
}) => (
  <div className="absolute w-full h-screen z-50">
    <section
      className={`bg-gray-900 max-w-[800px] h-[70vh] absolute top-0 right-0 left-0 bottom-0 rounded-3xl m-auto shadow-2xl overflow-y-auto mx-4 md:mx-auto ${myStyle.scrollNone}`}
    >
      <div className="px-2 sm:px-6 md:px-14 pt-4 md:pt-[46px]">
        <div className="flex justify-between items-center sm:flex-row flex-col-reverse">
          <p className="font-bold text-white text-lg sm:text-2xl">{cardName}</p>

          <div className="flex gap-2 items-center justify-end md:justify-end w-full flex-1">
            <button
              className="flex items-center justify-center font-medium text-neutral-500/30  hover:scale-105 hover:bg-error-700/20 hover:text-red-600  rounded-full cursor-pointer active:scale-95 transition-all"
              onClick={toggleModal}
            >
              <CrossIcon className="sm:size-8" />
            </button>
          </div>
        </div>

        {children}
      </div>
    </section>
  </div>
);
