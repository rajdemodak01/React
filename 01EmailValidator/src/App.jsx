import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'>
          {/* <h1 className='bg-slate-600'>hello</h1> */}
          <Card/>
      </div>
    </>
  )
}

export default App
