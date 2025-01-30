import { Button } from "../team/Udoy/button";
export const Dashboard = () => (
  <div className="h-screen grid place-content-center">
    <div className="flex gap-5">
      <Button
        hover="auto"
        colors="white"
        font="b"
        flex
        size="lg"
        variant="primary"
      >
        <img
          className="size-5"
          src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_640.png"
          alt=""
        />
        click
      </Button>
      <Button size="responsive" round="sm" variant="secondary">
        click
      </Button>
      <Button color="white" round="md" variant="bg-green-500" size="sm">
        click me
      </Button>
      <Button variant="bg-yellow-500">Only Me</Button>
      <Button flex size="lg" variant="white">
        <img
          className="size-5"
          src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_640.png"
          alt=""
        />
        click me
      </Button>
      <Button variant="bg-purple-950" colors="white">
        Hello Udoy
      </Button>
      <Button variant="normal">Hello</Button>
      <Button colors="text-gray-100"  font="b">
        Without variant
      </Button>
    </div>
  </div>
);
