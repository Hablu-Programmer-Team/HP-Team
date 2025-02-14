import { Button } from "@/components/team/Udoy/button";
import { useAuth } from "@/lib/database/auth-context";
import { NavLink } from "react-router-dom";
import { MyTasksData } from "../data";
// { onEdit }: { onEdit: (edit: boolean) => void }
export const Account = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="w-full text-white">
        <div className="h-[10rem] md:h-[15rem] bg-gray-400/50 grid place-items-center overflow-hidden rounded">
          <img
            src={false || "../profile-banner.png"}
            alt="Profile Banner"
            className="size-full"
          />
        </div>

        <div className="text-center space-y-2 md:space-y-3">
          <div className="-mt-15 flex justify-center">
            <div className="size-24 md:size-32 bg-gray-400 rounded-full grid place-items-center">
              <img src={false || "../user-circle.svg"} alt="Profile Image" />
            </div>
          </div>

          <div>
            <strong className="text-xl md:text-2xl">{user?.name}</strong>
            <p className="font-light mb-3 text-sm md:text-base">
              {user?.email}
            </p>
            <p className="md:max-w-2/3 lg:max-w-1/2 mx-auto text-sm px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              rerum molestias eum illo velit aperiam nobis autem nihil nemo? Hic
              eos minima maiores quia quibusdam dolorum omnis dolores et
              temporibus!
            </p>
          </div>

          <div className="my-10 md:my-14 flex justify-center items-center ">
            {MyTasksData.map(({ label, count }, idx) => (
              <div
                key={idx}
                className="w-24 md:w-40 h-28 flex flex-col justify-center even:border-x even:border-gray-400"
              >
                <span className="text-3xl md:text-4xl font-medium">
                  {count}
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <NavLink to="settings">
            <Button
              variant="primary"
              size="lg"
              radius="md"
              // onClick={() => onEdit(true)}
            >
              Edit Profile
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
