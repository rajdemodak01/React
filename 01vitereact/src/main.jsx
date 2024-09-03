import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement={
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_black'
  },
  children: 'Click me to visit google'
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


const anotheruser="Chai aur code"
//proper syntax
const reactElement2=React.createElement(
  'a',//type of the element
  {//if you want to set any attribute then write this, else keep below attribute part empty
    href:"https://google.com",
    target:"_blank"
  },
  "click me to visit Google",//children
  anotheruser//Evaluated Expression//we can inject variable here(using JS in HTML)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,

  //reactElement//this is not run, as we cannot use only object to render, it should create an element//We need proper format/arguments to be passed in the desired manner
  // anotherElement//using object to render
  // reactElement2//rendering through object //this type of properties of object is used by React
)
