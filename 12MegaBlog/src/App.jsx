import React, { useState,useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login,logout } from './store/authSlice'
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom'; //we will use the Outlet component to render the child routes of the parent route

function App() {
  
  //we will create a loading state to show a loading message while we are fetching the data from the server
  const [loading, setLoading] = useState(true)
  //we will use the useDispatch hook to dispatch the action to the store
  const dispatch=useDispatch()


  useEffect(() => {
    authService.getCurrentuser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  
        {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
