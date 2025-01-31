import { Button } from "../team/Udoy/button";
export const Dashboard = () => (
  <div className="h-screen grid place-content-center">
    <div className="flex gap-5">
      <Button
        // hover="auto"
        // colors="white"
        // flex
        // size="lg"
        // variant="primary"
        className="flex items-center justify-center bg-primary-700 gap-2 text-white px-[1rem] py-2 rounded-full cursor-pointer hover:opacity-80 transition duration-300"
      >
        <img
          className="size-5"
          src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_640.png"
          alt=""
        />
        click
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="gost" colors="text-gray-300">
        Gost
      </Button>
      <Button flex variant="normal">
        <img
          className="size-5"
          src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_640.png"
          alt=""
        />
        Normal
      </Button>
      <Button variant="primary" colors="white" font="b" textSize="2xl">
        + Text
      </Button>
      <Button variant="bg-green-500" colors="white" size="responsive">
        Custom 1
      </Button>
      <Button variant="bg-purple-900" colors="white">
        Custom 2
      </Button>
      <Button hover="hover:bg-gray-500">HELLO</Button>
    </div>
  </div>
);
