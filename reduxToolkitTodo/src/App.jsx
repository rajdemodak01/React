import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

function App() {
  // const [count, setCount] = useState(0)
  const todos = useSelector(state => state.todos)

  return (
    <>
      {/* <h1>Learing About Redux toolkit</h1> */}
      <AddTodo/>
      <ul className="list-none">
        {todos.map((todo)=>(todo.text!="" ? <Todos todo={todo} key={todo.id}/>: null)  
        )}
      </ul> 
    </>
  )
}

export default App
