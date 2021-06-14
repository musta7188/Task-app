import {useState} from 'react'

const AddTask = ({addTask}) =>{

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [remainder, setRemainder] = useState(false)


  const newTask = (e) =>{
    e.preventDefault()
    if(text.length === 0){
      alert('please add task')
      return;
    }


    addTask({id:Math.floor(Math.random() * 10000), text,day, remainder})
    setText('')
    setDay('')
    setRemainder(false)
  }



  return(
  <form className='add-form' onSubmit={newTask}>
    <div className='form-control'>
      <label>Task</label>
      <input value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder='Add Task'/>
    </div>
    <div className='form-control'>
      <label>Day & TIme</label>
      <input value={day} onChange={(e) => setDay(e.target.value)} type='text' placeholder='Add Day & TIme'/>
    </div>
    <div className='form-control form-control-check'>
      <label>Set Remainder</label>
      <input checked={remainder} value={remainder} onChange={(e) => setRemainder(e.currentTarget.checked)} type='checkbox'/>
    </div>
    <input  type='submit' value='save Task' className='btn btn-block' />
  </form>
  )
}

export default AddTask;