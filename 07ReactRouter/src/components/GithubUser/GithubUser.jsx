import React from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


function GithubUser({params}) {
    const data=useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center'>Github Followers:{data.followers}
        <img src={data.avatar_url} alt="GitHub Picture" width={300} />
        </div>
      )
    }
export default GithubUser

export const GithubInfoLoader2=async({ params })=>{
    const {user_name}=params 
    console.log(user_name)
    const responce=await fetch(`https://api.github.com/users/${user_name}`)
    return responce.json()
}