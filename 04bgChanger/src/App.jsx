import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [bgColor, setBgColor]=useState('red-400')
  
  const color=(color)=>{
    setBgColor(color)
  }

  return (
    <>
      <div className={`bg-${bgColor} duration-500 h-screen w-screen flex flex-col`}
      //style={{backgroundColor:bgColor}}
      //you can also write this to change the background color
      >
          <footer className='flex justify-center items-center gap-4 mt-auto mb-4'>
            <button className="bg-red-500" onClick={()=>{color('red-500')}}>red</button>
            {/* as per syntax onclick wants function to be returned everytime, that's why we use an arrow function on onclick  */}
            <button className="bg-green-500" onClick={()=>{color('green-500')}}>green</button>
            <button className="bg-blue-500" onClick={()=>{color('blue-500')}}>blue</button>
            <button className="bg-pink-500" onClick={()=>{color('pink-500')}}>pink</button>
            <button className="bg-black-500" onClick={()=>{color('black-500')}}>black</button>
            <button className="bg-violet-500" onClick={()=>{color('violet-500')}}>violet</button>
            <button className="bg-gray-500" onClick={()=>{color('gray-500')}}>gray</button>
            <button className="bg-sky-500" onClick={()=>{color('sky-500')}}>sky</button>

            <button className="bg-sky-500" onClick={()=>{setBgColor('sky-500')}}>sky</button>{/*this can be also done as we are setting the bgcolor */}
          </footer>
      </div>
    </>
  )
}


export default App
