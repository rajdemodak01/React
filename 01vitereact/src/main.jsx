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


//proper syntax
const reactElement2=React.createElement(
  'a',
  {
    href:"https://google.com", target:"_blank"
  },
  "click me to visit Google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,

  // anotherElement//using object to render
  // reactElement2//rendering through object //this type of properties of object is used by React
)
