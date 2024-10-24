import React, { useState } from 'react'

function Card() {
    const [error, setError]=useState("")
    const [valid, setValid]=useState(false)
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
                <label htmlFor="email" className='text-blue-300 font-serif font-bold text-xl'>Email</label>
                <input type="email" id='email' className='rounded-md p-1'/>
                {error && <p>Enter correct email</p>}
                <div className='flex justify-between gap-3'>
                    <button className=' bg-blue-500 rounded-md pl-4 pr-4 pt-1 pb-1 hover:bg-blue-800'>Validate</button>
                    <button className='bg-blue-500 rounded-md pl-4 pr-4 pt-1 pb-1 hover:bg-blue-800'>Clear</button>
                </div>
            </form>
        }
    </>
  )
}

export default Card