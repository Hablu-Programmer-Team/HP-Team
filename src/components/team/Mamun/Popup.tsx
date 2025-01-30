import AddTasks from './Add'
import EditTask from './Edit'

export const Popup = () => {
  return (
    <>
    <AddTasks cardName="Add New Task" btnName="Add New Task"/>
    <EditTask cardName={"Edit Task"} btnName="Edit Your Task"/>
    </>
  )
}