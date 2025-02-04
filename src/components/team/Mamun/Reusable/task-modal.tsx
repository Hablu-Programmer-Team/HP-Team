import { FC } from "react";
import { IModal } from "..";
import myStyle from "../../Alamin/sidebar.module.css";
import { CrossIcon } from "../icon/Icons";

export const Modal: FC<IModal> = ({
  children,
  cardName,
  toggleModal,
  submit,
}) => {
  return (
    <div className="absolute w-full h-screen bg-[#404042]/30 top-0 left-0 z-50 overflow-y-auto">
      <section
        className={`bg-[#05070f] max-w-[918px] h-[80vh]  rounded-3xl absolute top-0 right-0 bottom-0 left-0 m-auto shadow-2xl overflow-y-auto mx-4 md:mx-auto ${myStyle.scrollNone}`}
      >
        <div className="px-2 sm:px-6 md:px-14 pt-4 md:pt-[46px]">
          <div className="flex justify-between items-center sm:flex-row flex-col-reverse">
            <p className="font-bold text-white text-lg sm:text-2xl">
              {cardName}
            </p>

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

          <div className="flex justify-end mt-4 items-start mb-4">
            <button
              className=" bg-green-500  text-white hover:scale-105 transition-all cursor-pointer font-bold py-1 md:py-2 px-2 md:px-6 rounded-md mb-2"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
