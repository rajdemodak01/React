import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // //useEffect is called a component is mounted
    // useEffect(() => {
    //   fetch('https://api.github.com/users/rajdemodak01')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt="GitHub Picture" width={300} />
    </div>
  )
}

export default Github

export const GithubInfoLoader=async()=>{
    const responce=await fetch('https://api.github.com/users/rajdemodak01')
    return responce.json()
}

//here GithubInfoLoader expoting data of github which is received by Loader(in the Route of Github) in the main.jsx and then the data is received by the useLoaderData() and stored in data
