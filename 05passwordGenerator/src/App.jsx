import { useState, useCallback, useEffect, useRef } from 'react'
//when we need to take any referance of anything we need useRef
function App() {
  
  const [length, setlength]=useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")


  //new hook used (useCallback)//usecallback takes two parameters one is function or callback and another  is dependencies(written in the form of array)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed){str+="0123456789"}
    if(charAllowed){str+="!@#$%^&*()+*/-~`';/.,:<>?[]{}|"}

    for (let i = 1; i <=length; i++) {
      let char=str.charAt(Math.floor(Math.random()*str.length))
      pass+=char
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed,setPassword])

  
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  //this can be also used to copy the password(But here we are not using any react concepts)
  // const handleCopy = () => {
  //   const textarea = document.createElement('textarea')
  //   textarea.value = password
  //   document.body.appendChild(textarea)
  //   textarea.select()
  //   document.execCommand('copy')
  //   document.body.removeChild(textarea)
  //   alert('Copied')
  // }


  //useRef hook
  //to use this we need to add "ref={passwordRef} in the input field"
  const passwordRef=useRef(null)


  //useCallback memorise the function
  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()//select the current value of the password if present

    //another use of useRef hook
    ///this is used to select only 3 characters(as 0,3)
    // passwordRef.current?.setSelectionRange(0,3)
    
    //window object is only be available in React not n NextJs
    window.navigator.clipboard.writeText(password)
    // alert('copied')
  },[password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-gray-700 p-5'> 
        <h1 className='text-white text-center my-3'  >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline--none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberinput' onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
            <label htmlFor='numberinput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input type="checkbox" defaultChecked={charAllowed} id='charinput' onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
            <label htmlFor='charinput'>Alphabets</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
