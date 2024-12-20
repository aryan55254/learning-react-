import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"
import Card2 from "./components/card2"
import Card3 from "./components/card3"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl bg-green-300 p-3 rounded-md">Vite with tailwind </h1>
    <Card3 post="staff" />
    </>
  )
}

export default App
