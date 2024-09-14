//we are creating this AuthLayout component to remove the duplicate code from Login and Signup components
//its a mechanism to protecct the pages/routes
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Protected({children, authentication=true}) {
    const navigate=useNavigate()
    const [loader, setLoader]=useState(true)
    const authStatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
        //if user is not authenticated and authentication is true then navigate to login page
        if(authentication && authStatus!==authentication){
            navigate('/login')
        }else if(!authentication && authStatus!==authentication){
            //if user is authenticated and authentication is false then navigate to home page
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
  return loader? <h1>Loading...</h1>: <>{children}</>
}
