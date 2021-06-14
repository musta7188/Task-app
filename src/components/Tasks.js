import Task from "./Task"


const Tasks = ({tasks, deleteTask, toggleRemainder}) =>{


  return (
    <>
      {tasks.map((task) => {
       return <Task toggleRemainder={toggleRemainder} deleteTask={deleteTask} key={task.id} task={task}/>
      })}

    </>
  )
}

export default Tasks