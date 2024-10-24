import React, { useState,useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login,logout } from './store/authSlice'
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom'; //we will use the Outlet component to render the child routes of the parent route

function App() {
  
  //we will create a loading state to show a loading message while we are fetching the data from the server/appwrite
  const [loading, setLoading] = useState(true)

  //we will use the useDispatch hook to dispatch the action to the store
  const dispatch=useDispatch()

  //whenever application is loaded, use a useEffect, ask whether loggedin or not
  useEffect(() => {
    authService.getCurrentuser()
    //we get a callback(function) inside try
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    //similarly we also get a callback(function/method) inside finally
    .finally(()=>setLoading(false))
  }, [])

  //this is called conditional rendering you can also use if, else here
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* we will receive outlet from react-router dom */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
