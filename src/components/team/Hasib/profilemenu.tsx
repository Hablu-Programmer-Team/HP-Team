import { useLogout } from "@/components/common/logout";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

export const ProfileMenu: FC = () => {
  const [profileOpen, setIsProfileOpen] = useState(false);
  const logout = useLogout();

  const menuItems = [
    { to: "/profile", icon: "/user.svg", label: "My Profile" },
    { to: "/contacts", icon: "/contact.svg", label: "My Contact" },
    { to: "/profile/settings", icon: "/setting.svg", label: "Account Setting" },
  ];

  return (
    <div className="relative z-40">
      <button onClick={() => setIsProfileOpen(!profileOpen)}>
        <img
          className="cursor-pointer duration-300 hover:scale-110 size-6 lg:size-9 flex justify-center items-center"
          src="/profile.png"
          alt="Profile-Image"
        />
      </button>
      {profileOpen && (
        <div className="absolute  right-0 mt-3 bg-gray-900 w-64 rounded shadow z-10 py-2 text-center ease-in-out transition-all duration-500 origin-top-right ">
          <div className="flex flex-col gap-2 p-3">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="flex items-center font-semibold gap-3 ps-4 py-2 hover:text-success-500 "
              >
                <div className="flex items-center gap-2 group">
                  <img
                    className="hover:scale-125 transition-all duration-200"
                    src={item.icon}
                    alt={item.label}
                  />
                  <p className="group-hover:translate-x-2 transition-all delay-100">
                    {item.label}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
          <div className=" border-gray-300/20 border-t">
            <button
              onClick={logout}
              className="flex items-center group font-semibold gap-3 cursor-pointer ps-8 py-2 hover:text-error-500"
            >
              <img
                className="hover:scale-125 transition-all duration-200"
                src="/logout.svg"
                alt="LogOut-Img"
              />
              <p className="group-hover:translate-x-2 transition-all ">
                Log Out
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
