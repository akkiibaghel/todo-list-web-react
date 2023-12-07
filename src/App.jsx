import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [titel , setTitel] =  useState("")
  const [desk , setDesk] = useState("")
  const [mainTask , setMainTask] = useState([])   

  const submitHanderler = (e ) => {
    e.preventDefault()

    setMainTask([...mainTask, {titel,desk}]);
    setDesk("")
    setTitel("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i ,1)

    setMainTask(copytask)
  }

  let renderTask = <h2 >No Task Avialavle</h2>
  if (mainTask.length>0) {
    renderTask = mainTask.map(function(t,i) {
      return (
        <li key={i} className=' justify-around item-center '>
        <div className=' flex justify-around text-2xl mb-5'>
        <h5 className='text-2xl font-semibold '>{t.titel}</h5>
        <h5 className='text-xl font-medium '>{t.desk}</h5>
        <button 
        onClick={()=>{
          deleteHandler(i)
        }} className='bg-red-500 py-1 px-2 text-xl font-bold rounded-sm m-2'>Delete</button>
      </div>
        </li>
      )
    })
    
  }
  
  return (
    <>
    <h1 className= ' bg-black text-white text-center font-bold text-xl p-4'>Abhishek Todo List</h1>
    <form onSubmit={submitHanderler}>
      <input className=' border-zinc-800 border-2 m-5 px-4 py-3 text-2xl placeholder: Enter the Name' required placeholder='Enter the Task here' value={titel} onChange={(e) => setTitel(e.target.value)} type="text" />
      <input className=' border-zinc-800 border-2 m-5 px-4 py-3 text-2xl placeholder: Enter the Name'required placeholder='Enter Description here' value={desk} onChange={(v) => setDesk(v.target.value)} type="text" />
      <button className='bg-blue-500 py-2 px-3 text-2xl font-bold rounded-sm m-3'>Add Task</button>
    </form>
    <hr />

    <div className='p-7 bg-slate-200 '>
      <ul>
        {renderTask}
      </ul>

    </div>


    
    </>
  )
}

export default App
