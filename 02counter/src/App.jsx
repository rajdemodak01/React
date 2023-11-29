import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)

  // let counter=0//this variable will be updated using the function addValue(), but will not affect in the UI(Web)//That's why we do not use it, we use hooks

  const addvalue=()=>{
    // counter=counter+1
    if(counter<20){
      // setCounter(++counter)
      // setCounter(++counter)
      // setCounter(++counter)
      // setCounter(++counter)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
    }
    // console.log("Value added", counter);
  }

  const removevalue=()=>{
    if (counter>0) {
      setCounter(--counter)
    }
  }

  return (
    <>
      <h1>Raj De Modak</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removevalue}>Remove Value {counter}</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
