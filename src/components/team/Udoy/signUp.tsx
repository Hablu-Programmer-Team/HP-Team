import React, { useState, type FC } from "react";
import {
  AuthWrapper,
  animateInputWrapperStyle,
  buttonAfterAbsolute,
  buttonBeforeAbsolute,
  feildStyles,
  inputsStyles,
} from "./authWrapper";
import Field from "./feild";

interface UserStateProps {
  userName: string;
  userEmail: string;
  password: string;
}

export const SignUp: FC = () => {
  const [user, setUser] = useState<UserStateProps>({
    userName: "",
    userEmail: "",
    password: "",
  });
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const names: string = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [names]: value });
  };
  return (
    <AuthWrapper>
      <h1 className="h3 opacity-80 font-bold bg-clip-text text-transparent text_conic_color inline-block mx-auto">
        Sign Up
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className={animateInputWrapperStyle}>
            <div className="absolute w-[400px] h-[400px] rounded-lg top-0 input_conic_gradient inset-0 -z-50"></div>
            <Field className={`${feildStyles} flex items-center gap-5`}>
              <input
                onChange={handleInputChange}
                className={inputsStyles}
                type="text"
                name="userName"
                placeholder="Enter Your Name"
              />
            </Field>
          </div>
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
            <Field className={feildStyles}>
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
                className={`relative max-w-[10rem] overflow-hidden w-full px-5 py-2 transition-all duration-500 cursor-pointer group rounded-lg bg-linear-to-r from-[#030712] via-blue-500/50 to-[#030721] to-100% ${buttonBeforeAbsolute}  ${buttonAfterAbsolute} after:w-full hover:after:w-0 before:w-full hover:before:w-0`}
              >
                <span className="relative z-50  tracking-widest font-bold  bg-linear-to-r  bg-clip-text text-transparent text_conic_color  ">
                  Sign Up
                </span>
              </button>
            </div>
          </Field>
        </form>
      </div>
    </AuthWrapper>
  );
};
