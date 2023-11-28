import Test from './test.jsx'

// function App() {
  
//   return(
//     <Test/>
//     //this can also be run as 'Test()'
//   )
// }


function App() {
  const username="Raj De Modak"
  return (
      <>
        <Test/>
        <h1>React with Vite || {username} ||</h1>
        <p>test Para</p>
      </>

  )
}

export default App