//we are going to create a container component that will wrap the whole content of the website, so if we need to change the width of the content, we can do it from one place only.
import React from 'react'

//container accepts children as props
function Container({children}) {
  //you can also rekove the parenthesis after return, as only one thing is going to be returned.
  //but using parenthesis is good practice
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  )
}

export default Container