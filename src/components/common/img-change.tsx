import React, { FC } from "react";
import { PenIcon } from "../team/Alamin/profile-page/icon";

type Props = {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ImgChange: FC<Props> = ({ handleFileChange }) => {
  return (
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
  );
};
