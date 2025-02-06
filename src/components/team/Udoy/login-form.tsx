import { getUsers } from "@/lib/database/users";
import { cn } from "@/lib/utils/cn";
import { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  animateInputWrapperStyle,
  buttonAfterAbsolute,
  buttonBeforeAbsolute,
  fieldStyles,
  inputsStyles,
} from ".";
import { AuthWrapper } from "./auth-wrapper";
import { Field } from "./field";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users = getUsers();

    const isValidUser = users.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidUser) {
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Invalid email or password");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

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
                // onChange={handleInputChange}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputsStyles}
                // type="email"
                value={email}
                name="userEmail"
                placeholder="Enter Your Email"
              />
            </Field>
          </div>
          <div className={animateInputWrapperStyle}>
            <Field className={fieldStyles}>
              <input
                // onChange={handleInputChange}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`${inputsStyles} `}
                // type="password"
                value={password}
                name="password"
                placeholder="Password"
              />
            </Field>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Field>
            <div className="w-full relative">
              <button
                type="submit"
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
          <div>
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <a href="/registration" className="text-blue-500">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};
