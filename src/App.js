import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Ta  from './components/tesksArray'
import AddTask  from './components/AddTask'
function App() {

  const [tasks, setTasks] = useState(Ta)

  const [showForm, setShowForm] = useState(false)

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  const toggleRemainder = (id) =>{
    setTasks(tasks.map((task) => task.id === id? {...task, remainder: !task.remainder} : task))
  }

  const addTask = (objectTask) =>{

    setTasks([...tasks, objectTask])
    console.log(objectTask)

  }

  const setFormState = () =>{
    setShowForm(!showForm)
  }


  return (
    <div className="container">
      <Header showForm={showForm} setFormState={setFormState} title={"task app"}/>
      {showForm&&<AddTask addTask={addTask}/>}
      {tasks.length ===0?<h2>{"There is not tasks add some"}</h2>: <Tasks tasks={tasks} toggleRemainder={toggleRemainder} deleteTask={deleteTask}/>}
    </div>
  );
}

export default App;
