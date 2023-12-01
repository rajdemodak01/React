import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'//importing compnnents
import {GithubInfoLoader} from './components/Github/Github.jsx'//importing methods/functions

//one way to define router
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

//another way to define router
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      {/* We can do Multiple Routing means mmultiple looping here */}
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/*As per syntax we are using user/:userid, and by this we get an access of userid in User Component */}
      <Route path='user/:userid' element={<User/>}/>
      <Route 
        /*Use of Loader is an optimised approach  for displaying data*/
        loader={GithubInfoLoader}
        path='github' 
        element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* RouterProvider always use a prop(router) so need need to build a router */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
