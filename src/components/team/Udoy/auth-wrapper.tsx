import { type FC } from "react";

const conicBorderClassName =
  "relative max-w-[500px] overflow-hidden w-full text-center p-[1px] rounded-md before:content-['*'] before:absolute before:inset-0 before:mx-auto before:z-30 before:w-full before:h-full before:bg-conic/[from_50deg] before:from-link-700 before:via-blue-950 before:to-success-700 before:rounded-[110px] z-50";
export const animateInputWrapperStyle =
  "relative wrapper w-full h-full p-[1px] rounded-xl overflow-hidden";
export const feildStyles = "bg-[#030721] border border-blue-800/50";
export const inputsStyles =
  "w-full px-3 text-[0.9rem] font-normal text-gray-300 bg-transparent py-3 outline-none placeholder:text-[1rem] shadow shadow-white";
export const buttonBeforeAbsolute =
  "before:content-[''] before:absolute before:inset-0 before:top-0 before:left-0 before:bottom-0 before:right-0 before:mx-auto before:z-50    before:transition-all before:ease-in before:duration-300 before:rotate-[35deg] before:h-full before:bg-linear-to-r before:from-blue-500/20 before:via-[#030721]/80 before:to-blue-500/20 before:to-100%";
export const buttonAfterAbsolute =
  "after:content-[''] after:absolute after:inset-0 after:top-0 after:left-0 after:mx-auto after:bottom-0 after:right-0 after:z-40   after:transition-all after:ease-in after:duration-300 after:-rotate-[35deg]  after:h-full after:bg-linear-to-r after:from-blue-500/20 after:via-[#030721]/80 after:to-blue-500/20 after:to-100%";

export const AuthWrapper: FC<IChildren> = ({ children }) => (
  <div
    className={`w-full relative p-2 md:p-5 bg-[#030712] overflow-hidden h-screen flex flex-col items-center justify-center text-white ${buttonAfterAbsolute} ${buttonBeforeAbsolute} `}
  >
    <div className={conicBorderClassName}>
      <div className="relative z-50 innerShadow max-w-[600px] w-full min-h-[400px] bg-[#030712] p-2 md:p-10 rounded-tl-[40px] rounded-tr-[1rem] rounded-br-[40px] rounded-bl-[1rem] flex flex-col gap-10 place-content-center ">
        <div className="absolute mx-auto w-[200px] h-[200px] bg-[#070d38] shadow-2xl shadow-[#030721]  blur-2xl rounded-full z-0"></div>
        <div className="absolute mx-auto w-[200px] h-[200px] bg-[#070d38] backdrop-blur-2xl -top-10 -right-10 opacity-50 blur-2xl -z-0 rounded-full"></div>
        {children}
      </div>
    </div>
  </div>
);
