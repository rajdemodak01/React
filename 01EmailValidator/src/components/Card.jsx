import React, { useState } from 'react'

function Card() {
    const [error, setError]=useState(false)
    const [valid, setValid]=useState(false)
    const [email, setEmail]=useState("")

    const handleChange = (e) => {
        setEmail(e.target.value)  // Update the email state with input value
    }
    const handleValidate=function(e){
        console.log("validate")
        e.preventDefault();  // Prevent form submission
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);  // Validate email format
        setValid(isValid);
        setError(!isValid);
    }
    
    const handleClear = (e) => {
        console.log("clear")
        e.preventDefault();  // Prevent form submission
        setEmail("");
        setError(false);  // Reset the error state
    }
  return (
    <>
        {valid ? 
            <div className='flex flex-col items-center justify-center bg-gray-600 h-1/2 w-1/5 rounded-xl gap-5 '>
                <p className='text-blue-500 text-xl font-serif'>
                    You entered a valid email
                </p>
            </div>
        : 
            <form className='flex flex-col items-center justify-center bg-gray-600 h-1/2 w-1/5 rounded-xl gap-5'>
                <label htmlFor="email" className='text-blue-300 font-serif font-bold text-xl' >Email</label>
                <input 
                    type="text" 
                    id='email' 
                    className='rounded-md p-1' 
                    value={email} 
                    onChange={handleChange}
                />
                {error && <p>Enter correct email</p>}
                <div className='flex justify-between gap-3'>
                    <button 
                        className=' bg-blue-500 rounded-md pl-4 pr-4 pt-1 pb-1 hover:bg-blue-800' 
                        onClick={handleValidate}
                    >
                        Validate
                    </button>
                    <button className='bg-blue-500 rounded-md pl-4 pr-4 pt-1 pb-1 hover:bg-blue-800' onClick={handleClear}>Clear</button>
                </div>
            </form>
        }
    </>
  )
}

export default Card