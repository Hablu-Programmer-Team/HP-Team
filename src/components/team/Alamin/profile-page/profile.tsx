import { Sidebar } from "./profile-sidebar/sidebar";

export const Profile = () => {
  return (
    <section className="bg-[#030712]">
      <div className="container mx-auto h-screen pt-10">
        <Sidebar />
      </div>
    </section>
  );
};
