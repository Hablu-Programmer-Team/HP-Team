import AddTasks from './Add'
import EditTask from './Edit'

function Popup() {
  return (
    <>
    <AddTasks cardName={"Add New Task"}/>
    <EditTask cardName={"Edit Task"}/>
    </>
  )
}

export default Popup