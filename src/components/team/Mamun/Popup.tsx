import { AddTasks } from "./add"
import { EditTask } from "./edit"

export const Popup = () => {
  return (
    <>
    <AddTasks cardName="Add New Task" btnName="Add New Task"/>
    <EditTask cardName="Edit Task" btnName="Edit Your Task"/>
    </>
  )
}