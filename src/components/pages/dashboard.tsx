import { CommentIcon } from "../team/Eyachir/icons";
import { AllButton } from "../team/Udoy/allbutton";
import { Button } from "../team/Udoy/button";

export const Dashboard = () => (
  <div>
    <Button variant="primary" radius="full" size="sm">
      <CommentIcon />
    </Button>
    <AllButton />
  </div>
);
