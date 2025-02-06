import { cn } from "@/lib/utils/cn";
import { type FC } from "react";
import { buttonAfterAbsolute, buttonBeforeAbsolute } from ".";

const conicBorderClassName =
  "relative max-w-[500px] overflow-hidden w-full text-center p-[1px] rounded-md before:content-['*'] before:absolute before:inset-0 before:mx-auto before:z-30 before:w-full before:h-full before:bg-conic/[from_50deg] before:from-link-700 before:via-blue-950 before:to-success-700 before:rounded-[110px] z-50";

export const AuthWrapper: FC<IChildren> = ({ children }) => (
  <div
    className={cn(
      `w-full relative p-2 md:p-5 bg-[#030712] overflow-hidden h-screen flex flex-col items-center justify-center text-white`,
      buttonAfterAbsolute,
      buttonBeforeAbsolute
    )}
  >
    <div
      className={cn(
        ` rotate-[180deg] absolute inset-0 z-50 after:bg-blue-950/5 opacity-20 hover:after:w-full hover:before:w-full after:w-1/2 before:bg-blue-950/5 before:w-1/2 transition duration-300 `,
        buttonBeforeAbsolute,
        buttonAfterAbsolute
      )}
    />
    <div className={conicBorderClassName}>
      <div className="relative z-50 innerShadow max-w-[600px] w-full min-h-[400px] bg-[#030712] p-2 md:p-10 rounded-tl-[40px] rounded-tr-[1rem] rounded-br-[40px] rounded-bl-[1rem] flex flex-col gap-10 place-content-center ">
        <div className="absolute mx-auto w-[200px] h-[200px] bg-[#070d38] shadow-2xl shadow-[#030721]  blur-2xl rounded-full z-0" />
        <div className="absolute mx-auto w-[200px] h-[200px] bg-[#070d38] backdrop-blur-2xl -top-10 -right-10 opacity-50 blur-2xl -z-0 rounded-full" />
        {children}
      </div>
    </div>
  </div>
);
