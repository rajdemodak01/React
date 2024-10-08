import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//we are using useNavigate to navigate to different pages

function Header() {
  //we are gettting authstatus from store 
  //we are using useSelector to get the state from store and wrint state.auth.status as we have auth slice in store and status in auth slice
  const authStatus= useSelector(state => state.auth.status)
  const navigate= useNavigate()

  //when navigation bar is created, actually a array is created, and loop is over the array
  const navItems =[
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto '>
            {/* //we use parenthesiswhen we apply js code in html */}
            {navItems.map((item)=>
              item.active ? (
                //where html element is repeated we need to add key
                <li key={item.name}>
                  <button
                  //navigate is used to navigate to different pages
                  //to use navigate we need to import useNavigate from react-router-dom and give an url
                  //we are using item.slug to navigate to different pages
                  //we can also use Link from react-router-dom to navigate to different pages
                    onClick={()=>navigate(item.slug)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header