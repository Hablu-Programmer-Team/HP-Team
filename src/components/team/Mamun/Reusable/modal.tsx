import { FC } from "react";
import { IModal } from "..";

export const Modal: FC<IModal> = ({
  children,
  cardName,
  toggleModal,
  submit,
  togglePriority,
  priorityBtn,
  goBackPermission = true,
}) => {
  return (
    <div className="absolute w-full h-screen bg-[#404042]/50 top-0 left-0 z-50 overflow-y-auto">
      <section className="bg-white max-w-[918px] h-[65vh] md:h-[708px] rounded-3xl absolute top-0 right-0 bottom-0 left-0 m-auto shadow-2xl overflow-y-auto mx-4 md:mx-auto">
        <div className="px-6 md:px-[62px] pt-6 md:pt-[46px]">
          <div className="flex md:justify-between items-center flex-col md:flex-row">
            <p className="font-semibold">{cardName}</p>
            <div className="flex gap-2 items-center justify-between md:justify-end w-full flex-1 mt-3 md:mt-0">
              {goBackPermission ? (
                <button
                  className="font-semibold bg-lime-200 rounded-xl px-3 py-1 cursor-pointer"
                  onClick={toggleModal}
                >
                  Go Back
                </button>
              ) : null}
              <button
                className="font-medium bg-red-400 hover:scale-105 hover:bg-red-500 w-7 h-7 rounded-full cursor-pointer active:translate-y-0.5 transition-all"
                onClick={toggleModal}
              >
                X
              </button>
            </div>
          </div>
          {children}
          <div className="flex justify-between items-start">
            <button
              className="mt-4 bg-amber-200 text-gray-500 hover:scale-105 transition-all cursor-pointer font-bold py-1 md:py-2 px-2 md:px-4 rounded-md mb-2"
              onClick={submit}
            >
              Submit
            </button>
            {priorityBtn ? (
              <button
                className="mt-4 bg-red-200 text-gray-500 hover:scale-105 transition-all cursor-pointer font-bold py-1 md:py-2 px-2 md:px-4 rounded-md mb-2"
                onClick={togglePriority}
              >
                Add Priority
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};
