import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask  from './components/AddTask'
import { Footer } from './components/Footer'
import { About } from './components/About'
function App() {

  const [tasks, setTasks] = useState([])

  const [showForm, setShowForm] = useState(false)

  useEffect(() =>{

    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks (tasksFromServer)
    }


    getTasks()
  },[])

  const fetchTask = async (id) =>{
   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  
   return await res.json()
  }


  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const deleteTask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter((task) => task.id !== id))

  }


  
  const toggleRemainder = async (id) =>{
    const taskToToggle = await fetchTask(id)

    const updateTask = {...taskToToggle, remainder: !taskToToggle.remainder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id? {...task, remainder: data.remainder} : task))
  
  }


 
  const addTask = async (objectTask) =>{

     const res =  await fetch('http://localhost:5000/tasks', {
       method: "POST",
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(objectTask)
     })

     const data = await res.json()

    setTasks([...tasks, data])


  }

  const setFormState = () =>{
    setShowForm(!showForm)
  }


  return (
    <Router>

    <div className="container">
      <Header showForm={showForm} setFormState={setFormState} title={"task app"}/>

      <Route 
      path='/' exact

      render={(props) =>(
      <>
      {showForm&&<AddTask addTask={addTask}/>}
      {tasks.length ===0?<h2>{"There is not tasks add some"}</h2>: <Tasks tasks={tasks} toggleRemainder={toggleRemainder} deleteTask={deleteTask}/>}
      
      </>
      )}
      
      />


      <Route path='/about' exact component={About}/>

      <Footer/>  
    </div>
    </Router>
  );
}

export default App;
