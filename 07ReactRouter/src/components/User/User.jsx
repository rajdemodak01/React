import React from 'react'
import { useParams } from 'react-router-dom'


function User() {

    //here name of the variable must be as as taking from the url in the main.jsx file(user/:userid)
    const {userid}=useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User:{userid}</div>
  )
}

export default User