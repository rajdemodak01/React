import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]=useState(0)

  // let counter=0//this variable will be updated using the function addValue(), but will not affect in the UI(Web)//That's why we do not use it, we use hooks

  const addvalue=()=>{
    //this will update the value of counter, but will not show/display in web
    //counter++



    //one way to update the value of counter
    //setCounter(counter+1)


    //another way to update the value of counter
    //counter=counter+1//is the variable is 'const', this will not work, we have to define the variable as 'let'. So here it will not work as we declared counter as const but if we declared as 'let' it will work
    //setCounter(counter)

    if(counter<20){

      //this 4 below statements will increase the value of counter only once, as in react diffing algo(reconciliation) it sends all these same work in a batch, and update the counter only once 
      // setCounter(++counter)
      // setCounter(++counter)
      // setCounter(++counter)
      // setCounter(++counter)


      //but here it will update count 4 times, as we are writing an arrow function to update the value of counter
      //prepCounter=>prepCounter+1 means increase the previous value of that variable which is montorred by setCounter(That is counter) by 1
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
