import { useState } from "react";
import { Account } from "../team/Alamin/profile-page/account";
import { Settings } from "../team/Alamin/profile-page/settings";

export const ProfilePage = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <section className="text-gray-300 px-2 h-screen overflow-hidden">
      <div className="container mx-auto h-screen pt-12 grid lg:gap-x-10 xl:gap-x-24">
        {isEdit ? <Settings /> : <Account />}
      </div>
    </section>
  );
};
