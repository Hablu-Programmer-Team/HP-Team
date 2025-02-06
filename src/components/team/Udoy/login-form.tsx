import { ChangeEvent, useState } from "react";

import {
  AuthWrapper,
  animateInputWrapperStyle,
  buttonAfterAbsolute,
  buttonBeforeAbsolute,
  fieldStyles,
  inputsStyles,
} from "./auth-wrapper";
import { Field } from "./field";
import { cn } from "@/lib/utils/cn";

interface UserStateProps {
  userEmail: string;
  password: string;
}
export const Login = () => {
  const [user, setUser] = useState<UserStateProps>({
    userEmail: "",
    password: "",
  });
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const names: string = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [names]: value });
  };
  return (
    <AuthWrapper>
      <h1 className="h3 opacity-80 font-bold bg-clip-text text-transparent text_conic_color inline-block mx-auto">
        Login
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="w-full space-y-2 md:space-y-6">
          <div className={animateInputWrapperStyle}>
            <div className="absolute animate-animateBorderInput w-[300px] h-[200px] rounded-lg top-0 input_conic_gradient inset-0 -z-50"></div>
            <Field className="bg-[#030721]">
              <input
                onChange={handleInputChange}
                className={inputsStyles}
                type="email"
                name="userEmail"
                placeholder="Enter Your Email"
              />
            </Field>
          </div>
          <div className={animateInputWrapperStyle}>
            <Field className={fieldStyles}>
              <input
                onChange={handleInputChange}
                className={`${inputsStyles} `}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Field>
          </div>
          <Field>
            <div className="w-full relative">
              <button
                className={cn(
                  `relative mt-5 md:mt-0 max-w-[10rem] overflow-hidden w-full px-5 py-2 transition-all duration-500 cursor-pointer group rounded-lg bg-linear-to-r from-[#030712] via-blue-500/50 to-[#030721] to-100% after:w-0 hover:after:w-full before:w-0 hover:before:w-full`,
                  buttonBeforeAbsolute,
                  buttonAfterAbsolute
                )}
              >
                <span className="relative z-50  tracking-widest font-bold text-gray-300 bg-linear-to-r  ">
                  Login
                </span>
              </button>
            </div>
          </Field>
        </form>
      </div>
    </AuthWrapper>
  );
};
