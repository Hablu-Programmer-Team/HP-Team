import { getUsers, saveUsers, User } from "@/lib/database/users";
import { cn } from "@/lib/utils/cn";
import { FormEvent, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  animateInputWrapperStyle,
  buttonAfterAbsolute,
  buttonBeforeAbsolute,
  fieldStyles,
  inputsStyles,
} from ".";
import { AuthWrapper } from "./auth-wrapper";
import { Field } from "./field";

export const SignUp: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    const users: User[] = getUsers();
    if (users.some((user) => user.email === email)) {
      setError("Email already exists! Try Logged in");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const newUser: User = {
      name,
      email,
      password,
    };
    saveUsers([...users, newUser]);

    alert("Sign Up Successful! You can now Log In");
    navigate("/login");
  };

  return (
    <AuthWrapper>
      <h1 className="h3 opacity-80 font-bold bg-clip-text text-transparent text_conic_color inline-block mx-auto">
        Sign Up
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <form onSubmit={handleSignUp} className="w-full space-y-2 md:space-y-6">
          <div className={animateInputWrapperStyle}>
            <div className="absolute w-[400px] h-[400px] rounded-lg top-0 input_conic_gradient inset-0 -z-50"></div>
            <Field className={`${fieldStyles} flex items-center gap-5`}>
              <input
                // onChange={handleInputChange}
                onChange={(e) => setName(e.target.value)}
                className={inputsStyles}
                // type="text"
                value={name}
                required
                name="userName"
                placeholder="Enter Your Name"
              />
            </Field>
          </div>
          <div className={animateInputWrapperStyle}>
            <div className="absolute animate-animateBorderInput w-[300px] h-[200px] rounded-lg top-0 input_conic_gradient inset-0 -z-50"></div>
            <Field className="bg-[#030721]">
              <input
                // onChange={handleInputChange}
                onChange={(e) => setEmail(e.target.value)}
                className={inputsStyles}
                // type="email"
                value={email}
                required
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
                className={`${inputsStyles} `}
                // type="password"
                value={password}
                required
                name="password"
                placeholder="Password"
              />
            </Field>
          </div>
          <Field>
            <div className="w-full relative">
              <button
                type="submit"
                className={cn(
                  `relative mt-5 md:mt-0 max-w-[10rem] overflow-hidden w-full px-5 py-2 transition-all duration-500 cursor-pointer group rounded-lg bg-linear-to-r from-[#030712] via-blue-500/50 to-[#030721] to-100% after:w-full hover:after:w-0 before:w-full hover:before:w-0`,
                  buttonBeforeAbsolute,
                  buttonAfterAbsolute
                )}
              >
                <span className="relative z-50  tracking-widest font-bold  bg-linear-to-r  bg-clip-text text-transparent text_conic_color  ">
                  Sign Up
                </span>
              </button>
            </div>
          </Field>
          <div>
            <p className="text-sm">
              Already have an account?{" "}
              <a
                className="text-primary-500 hover:text-primary-600 hover:underline transition-colors duration-200"
                href="/login"
              >
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};
