import { FC } from "react";
import { IModal } from "..";
import myStyle from "../../Alamin/sidebar.module.css";

export const Modal: FC<IModal> = ({
  children,
  cardName,
  toggleModal,
  submit,
}) => {
  return (
    <div className="absolute w-full h-screen bg-[#404042]/50 top-0 left-0 z-50 overflow-y-auto">
      <section
        className={`bg-white max-w-[918px] h-[72vh]  rounded-3xl absolute top-0 right-0 bottom-0 left-0 m-auto shadow-2xl overflow-y-auto mx-4 md:mx-auto ${myStyle.scrollNone}`}
      >
        <div className="px-6 md:px-[62px] pt-4 md:pt-[46px]">
          <div className="flex justify-between items-center sm:flex-row flex-col-reverse">
            <p className="font-semibold ">{cardName}</p>
            <div className="flex gap-2 items-center justify-end md:justify-end w-full flex-1">
              <button
                className="font-medium bg-red-400 hover:scale-105 hover:bg-red-500 w-6 h-6 rounded-full cursor-pointer active:translate-y-0.5 transition-all"
                onClick={toggleModal}
              >
                X
              </button>
            </div>
          </div>
          {children}
          <div className="flex justify-end items-start mb-4">
            <button
              className="mt-4 bg-green-500  text-white hover:scale-105 transition-all cursor-pointer font-bold py-1 md:py-2 px-2 md:px-6 rounded-md mb-2"
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
