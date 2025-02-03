import { useState } from "react";
import Feild from "./feild";

const conicBorderClassName =
  "relative max-w-[500px] overflow-hidden w-full text-center p-[1px] rounded-md before:content-['*'] before:absolute before:inset-0 before:mx-auto before:z-30 before:w-full before:h-full before:bg-conic/[from_50deg] before:from-link-700 before:via-blue-950 before:to-success-700 before:rounded-[110px] z-50";

const inputsStyles =
  "w-full px-3 text-[0.9rem] font-normal text-gray-300 bg-transparent py-3 outline-none placeholder:text-[1rem] shadow shadow-white";
const buttonBeforeAbsolute =
  "before:content-[''] before:absolute before:inset-0 before:top-0 before:left-0 before:bottom-0 before:right-0 before:mx-auto before:z-50    before:transition-all before:ease-in before:duration-300 before:rotate-[35deg] before:h-full before:bg-linear-to-r before:from-blue-500/20 before:via-[#030721]/80 before:to-blue-500/20 before:to-100%";
const buttonAfterAbsolute =
  "after:content-[''] after:absolute after:inset-0 after:top-0 after:left-0 after:mx-auto after:bottom-0 after:right-0 after:z-40   after:transition-all after:ease-in after:duration-300 after:-rotate-[35deg]  after:h-full after:bg-linear-to-r after:from-blue-500/20 after:via-[#030721]/80 after:to-blue-500/20 after:to-100%";
const animateInputWrapperStyle =
  "relative wrapper w-full h-full p-[1px] rounded-xl overflow-hidden";
const feildStyles = "bg-[#030721] border border-blue-800/50";

interface UserStateProps {
  userEmail: string;
  password: string;
}
export const Login = () => {
  const [user, setUser] = useState<UserStateProps>({
    userEmail: "",
    password: "",
  });
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const names: string = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [names]: value });
  };
  return (
    <div
      className={`w-full relative p-5 bg-[#030712] overflow-hidden h-screen flex flex-col items-center justify-center text-white ${buttonAfterAbsolute} ${buttonBeforeAbsolute} `}
    >
      <div className={conicBorderClassName}>
        <div className="relative z-50 innerShadow max-w-[600px] w-full min-h-[400px] bg-[#030712] p-10 rounded-tl-[60px] rounded-tr-[1rem] rounded-br-[60px] rounded-bl-[1rem] flex flex-col gap-10 place-content-center">
          <div className="absolute mx-auto w-[200px] h-[200px] bg-[#070d38] shadow-2xl shadow-[#030721]  blur-2xl rounded-full z-0"></div>
          <div className="absolute mx-auto w-[200px] h-[200px] bg-[#070d38] backdrop-blur-2xl -top-10 -right-10 opacity-50 blur-2xl -z-0 rounded-full"></div>
          <h1 className="h3 opacity-80 font-bold bg-clip-text text-transparent text_conic_color inline-block mx-auto">
            Login
          </h1>
          <div>
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              {/* <div className={animateInputWrapperStyle}>
                <div className="absolute w-[400px] h-[400px] rounded-lg top-0 input_conic_gradient inset-0 -z-50"></div>
                <Feild className={`${feildStyles} flex items-center gap-5`}>
                  <input
                    onChange={handleInputChange}
                    className={inputsStyles}
                    type="text"
                    name="userName"
                    placeholder="Enter Your Name"
                  />
                </Feild>
              </div> */}
              <div className={animateInputWrapperStyle}>
                <div className="absolute animate-animateBorderInput w-[300px] h-[200px] rounded-lg top-0 input_conic_gradient inset-0 -z-50"></div>
                <Feild className="bg-[#030721]">
                  <input
                    onChange={handleInputChange}
                    className={inputsStyles}
                    type="email"
                    name="userEmail"
                    placeholder="Enter Your Email"
                  />
                </Feild>
              </div>
              <div className={animateInputWrapperStyle}>
                <Feild className={feildStyles}>
                  <input
                    onChange={handleInputChange}
                    className={`${inputsStyles} `}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Feild>
              </div>
              <Feild>
                <div className="w-full relative">
                  <button
                    className={`relative max-w-[10rem] overflow-hidden w-full px-5 py-2 transition-all duration-500 cursor-pointer group rounded-lg bg-linear-to-r from-[#030712] via-blue-500/50 to-[#030721] to-100% ${buttonBeforeAbsolute}  ${buttonAfterAbsolute} after:w-0 hover:after:w-full before:w-0 hover:before:w-full`}
                  >
                    <span className="relative z-50  tracking-widest font-bold text-gray-300 bg-linear-to-r  ">
                      Login
                    </span>
                  </button>
                </div>
              </Feild>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
