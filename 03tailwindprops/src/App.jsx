import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./componnents/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    name:"Raj De Modak",
    age: "20"
  }
  let myArr=[1,2,3,5,8]
  return (
    <>
      <div className="flex-col items-center content-center">
        <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
          Raj De Modak
        </h1>
        <Card userName="Raj De Modak" someobj={myObj} someArr={myArr} btnText="Click me"/>
        <Card userName="RajDeModak" someobj={myObj} someArr={myArr} btnText="Visit me"/>
      </div>
    </>
  );
}
export default App;
