import {FaTimes} from 'react-icons/fa'

const Task = ({task, deleteTask ,toggleRemainder}) =>{
  
  return(
    <div className={`task ${task.remainder? 'reminder': ''}`} onDoubleClick={() =>toggleRemainder(task.id)}>
      <h3>{task.text}<FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => deleteTask(task.id)}/>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task