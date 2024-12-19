import { useState } from 'react'
import './App.css'

function App() {
  const[counter,setcounter] = useState(0)
 
let addvalue= ()=>{
  setcounter(counter + 1)
}
let removevalue = ()=>{
  setcounter(counter - 1)
}
let add4 = ()=> {
  setcounter((prevounter)=>prevounter + 1)
  setcounter((prevounter)=>prevounter + 1)
  setcounter((prevounter)=>prevounter + 1)
  setcounter((prevounter)=>prevounter + 1)
}
  return (
    <>
      <h1>react basics{counter} </h1>
      <h2> counter value:{counter}</h2>
      <button onClick={addvalue}>add value </button>
      <button onClick={removevalue}>remove value</button>
      <button onClick={add4}>add 4</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
