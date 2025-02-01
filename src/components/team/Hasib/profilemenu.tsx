import { FC, useState } from "react";
import { Link } from "react-router";

export const ProfileMenu: FC = () => {
  const [profileOpen, setIsProfileOpen] = useState(false);

  const menuItems = [
    { to: "/profile", icon: "/user.svg", label: "MY Profile" },
    { to: "/contact", icon: "/contact.svg", label: "MY Contact" },
    { to: "/setting", icon: "/setting.svg", label: "Account Setting" },
  ];

  return (
    <div className="relative">
      <button onClick={() => setIsProfileOpen(!profileOpen)}>
        <img
          className="cursor-pointer duration-300 hover:scale-110 size-6 lg:size-[36px]"
          src="/profile.png"
          alt="Profile-Image"
        />
      </button>
      {profileOpen && (
        <div className="absolute  right-0 mt-4 w-64 rounded border border-gray-200 shadow z-10 py-2 text-center ease-in-out transition-all duration-500 origin-top-right ">
          <div className="flex flex-col gap-2 p-3">
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.to}
                  className="flex items-center font-semibold gap-3 ps-4 py-2 hover:text-[#78D700] hover:scale-105 transition-all delay-150  "
                >
                  <img src={item.icon} alt={item.label} />
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div className=" border-gray-300 border-t">
            <button className="flex items-center font-semibold gap-3 ps-8 py-2 hover:text-[#78D700] hover:scale-105 transition-all delay-150  ">
              <img src="/logout.svg" alt="LogOut-Img" />
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
