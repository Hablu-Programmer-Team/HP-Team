import { Button } from "@/components/team/Udoy/button";
import { useAuth } from "@/lib/database/auth-context";
import { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LockIcon, PenIcon, TwoStepIcon } from "./icon";
import { Card } from "./UI/card";

interface ValueType {
  name: string;
  imgSrc?: string;
  email: string;
  number: number;
  userName: string;
  description: string;
}

export const Settings = () => {
  const { user, updateUser } = useAuth();
  const [isChanged, setIsChanged] = useState(false);
  const [isValue, setIsValue] = useState<ValueType>({
    name: user?.name || "",
    imgSrc: user?.imgSrc || "",
    email: user?.email || "",
    userName: user?.userName || "",
    number: user?.number || 0,
    description: user?.description || "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setIsValue((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setIsValue((prev) => ({ ...prev, imgSrc: imageUrl }));
      setIsChanged(true);
    }
  };

  useEffect(() => {
    setIsChanged(JSON.stringify(isValue) !== JSON.stringify(user));
  }, [isValue]);

  const handleSave = () => {
    updateUser(isValue);
    alert("Profile updated successfully.");
    setIsChanged(false);
  };

  const settings = [
    { name: "Change Password", icon: <LockIcon /> },
    { name: "Two Step Verification", icon: <TwoStepIcon /> },
  ];

  return (
    <>
      <div className="w-full pt-12 text-gray-300 container mx-auto space-y-6 md:space-y-5 px-2 md:px-4">
        <h2 className="text-xl md:text-2xl font-medium hidden md:block pb-10">
          Settings
        </h2>
        <form>
          <div className="flex justify-between mb-2 md:mb-3">
            <div className="flex gap-5 items-center">
              <div className="relative ms-5">
                <div className="size-20 md:size-34 rounded-full bg-amber-100/20 grid place-items-center overflow-hidden">
                  <img
                    src={isValue.imgSrc || "../user-circle.svg"}
                    alt="Profile Picture"
                    className="size-full"
                  />
                  <div className="absolute bottom-1 md:bottom-2 right-0 bg-primary-600 p-1 md:p-2 rounded-full cursor-pointer">
                    <PenIcon className="size-3.5 md:size-4.5" />
                    <input
                      type="file"
                      id="imgSrc"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute rounded-full -translate-y-6 md:-translate-y-6 -translate-x-2 size-full cursor-pointer opacity-0"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-1">
                  {isValue.name}
                </h2>
                <p>{isValue.userName}</p>
              </div>
            </div>

            {!isChanged ? (
              <NavLink to="/profile">
                <Button
                  // onClick={handleSave}
                  children="Back Account"
                  size="lg"
                  className="hidden md:flex"
                  variant="secondary"
                />
              </NavLink>
            ) : (
              <Button
                onClick={handleSave}
                children="Save Change"
                size="lg"
                className="bg-success-700 hidden md:flex"
              />
            )}
          </div>

          {/* Edit Content  */}
          <div className="md:grid grid-cols-2 gap-5 md:text-lg">
            <div className="space-y-2 md:space-y-5 mb-2 md:m-0">
              <label htmlFor="name" className="ps-5 text-sm md:text-base">
                Name
              </label>
              <Card>
                {
                  <input
                    type="text"
                    id="name"
                    value={isValue.name}
                    onChange={handleChange}
                    className="size-full outline-none border-none bg-transparent"
                    placeholder="Enter your name"
                  />
                }
              </Card>

              <label htmlFor="userName" className="ps-5 text-sm md:text-base">
                User ID
              </label>
              <Card>
                {
                  <input
                    type="text"
                    id="userName"
                    value={isValue.userName}
                    onChange={handleChange}
                    className="size-full outline-none border-none bg-transparent"
                    placeholder="Enter your username"
                  />
                }
              </Card>
            </div>
            <div className="space-y-2 md:space-y-5 mb-2 md:m-0">
              <label htmlFor="email" className="ps-5 text-sm md:text-base">
                Email
              </label>
              <Card>
                <input
                  type="text"
                  id="email"
                  value={isValue.email}
                  onChange={handleChange}
                  className="size-full outline-none border-none bg-transparent"
                  placeholder="Enter your email"
                />
              </Card>

              <label htmlFor="number" className="ps-5 text-sm md:text-base">
                Number
              </label>
              <Card>
                <input
                  type="number"
                  id="number"
                  value={isValue.number}
                  onChange={handleChange}
                  className="size-full outline-none border-none bg-transparent appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                  placeholder="Enter your number"
                />
              </Card>
            </div>

            <div className="col-span-2">
              <label
                htmlFor="description"
                className="ps-5 text-sm md:text-base"
              >
                Your Bio
              </label>
              <Card>
                <textarea
                  id="description"
                  value={isValue.description}
                  onChange={handleChange}
                  className="w-full text-base border-none outline-none resize-none "
                  rows={4}
                  placeholder="Enter your bio"
                />
              </Card>
            </div>
          </div>
        </form>

        <div className="gap-4 md:gap-8 grid grid-cols-2 -mb-2 md:m-0">
          {settings.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col md:flex-row text-center items-center gap-2 md:gap-4 cursor-pointer hover:scale-[1.01] transition-all hover:shadow-lg shadow-blue-300/15"
            >
              <p className="fill-white size-10 md:size-12 p-2.5 md:p-3 rounded-full bg-amber-200/10">
                {item.icon}
              </p>
              <h2 className="text-xl md:text-2xl font-medium">{item.name}</h2>
            </Card>
          ))}
        </div>

        <div className="flex justify-center w-full">
          {!isChanged ? (
            <Button
              children="Back Account"
              size="lg"
              className="md:hidden mt-7 max-w-full w-full"
              variant="secondary"
            />
          ) : (
            <Button
              onClick={handleSave}
              children="Save Change"
              size="lg"
              className="bg-success-700 md:hidden mt-7"
            />
          )}
        </div>
      </div>
    </>
  );
};
