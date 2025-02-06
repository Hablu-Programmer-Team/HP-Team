import { Button } from "@/components/team/Udoy/button";
import { LockIcon, PenIcon, TwoStapIcon } from "./icon";
import { ChangeEvent, useEffect, useState } from "react";
import { Card } from "./UI/card";

interface ValueType {
  name: string;
  imgsrc?: string;
  email: string;
  number: number;
  userName: string;
  description: string;
}

export const Settings = ({ onEdit }: { onEdit: (edit: boolean) => void }) => {
  const initialState: ValueType = {
    name: "Arvin Tushar",
    imgsrc: "",
    email: "alaminmridha2004@gmail.com",
    userName: "alamin2004",
    number: 8801600000000,
    description: "Inter your Bio...",
  };

  const [isValue, setIsValue] = useState<ValueType>(initialState);
  const [isChanged, setIsChanged] = useState(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setIsValue((prev) => ({ ...prev, [id]: value }));
  };

  // Check if any field has changed
  useEffect(() => {
    setIsChanged(JSON.stringify(isValue) !== JSON.stringify(initialState));
  }, [isValue]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setIsValue((prev) => ({ ...prev, imgsrc: imageUrl }));
      setIsChanged(true);
    }
  };
  return (
    <>
      <div className="w-full text-white space-y-6 md:space-y-5 px-1 md:px-4">
        <h2 className="text-2xl md:text-3xl font-medium hidden md:block">
          Settings
        </h2>
        <form>
          <div className="flex justify-between mb-2 md:mb-3">
            <div className="flex gap-5 items-center">
              <div className="relative ms-5">
                <div className="size-20 md:size-34 rounded-full bg-amber-100/20 grid place-items-center overflow-hidden">
                  <img
                    src={isValue.imgsrc || "../user-circle.svg"}
                    alt="Profile Picture"
                    className="size-full"
                  />
                  <div className="absolute bottom-1 md:bottom-2 right-0 bg-primary-600 p-1 md:p-2 rounded-full cursor-pointer">
                    <PenIcon className="size-3.5 md:size-4.5" />
                    <input
                      type="file"
                      id="imgsrc"
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
              <Button
                onClick={() => onEdit(false)}
                children="Back Account"
                size="lg"
                className="hidden md:flex"
                variant="secondary"
              />
            ) : (
              <Button
                onClick={(e) => e.preventDefault()}
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
                />
              </Card>
            </div>
          </div>
        </form>

        <div className="gap-4 md:gap-8 col-span-2 grid grid-cols-2 -mb-2 md:m-0">
          <Card className="flex flex-col md:flex-row text-center items-center gap-2 md:gap-4 cursor-pointer hover:scale-[1.01] transition-all hover:shadow-lg shadow-blue-300/15">
            <LockIcon className="fill-white size-10 md:size-12 p-2.5 md:p-3 rounded-full bg-amber-200/10" />
            <h2 className="text-xl md:text-2xl font-medium">Change Password</h2>
          </Card>
          <Card className="flex flex-col md:flex-row text-center items-center gap-2 md:gap-4 cursor-pointer hover:scale-[1.01] transition-all hover:shadow-lg shadow-blue-300/15">
            <TwoStapIcon className="fill-white size-10 md:size-12 p-2.5 md:p-3 rounded-full bg-amber-200/10" />
            <h2 className="text-xl md:text-2xl font-medium">
              Two Stap Varification
            </h2>
          </Card>
        </div>

        <div className="flex justify-center w-full">
          {!isChanged ? (
            <Button
              onClick={() => onEdit(false)}
              children="Back Account"
              size="lg"
              className="md:hidden mt-7 max-w-full w-full"
              variant="secondary"
            />
          ) : (
            <Button
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
