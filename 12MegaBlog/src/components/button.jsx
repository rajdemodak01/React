import React from 'react'


function button({
    children,//this is a prop that will be passed to the button component
    type='button',//default type is button, if no type is passed, it will be button else it will be the type passed
    bgColor='bg-blue-600',//default background color is blue, if no color is passed, it will be blue else it will be the color passed
    textColor='text-white',//default text color is white, if no color is passed, it will be white else it will be the color passed
    className='',//default class is empty, if no class is passed, it will be empty else it will be the class passed
    ...props//this is a spread operator, it will take all the props passed to the button component and store them in props variable
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
      {/* we are using spread operator to pass all the props to the button */}
        {children}
    </button>
  )
}

export default button