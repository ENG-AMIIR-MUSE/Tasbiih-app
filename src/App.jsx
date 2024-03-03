import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasbih from './Components/Tasbih'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Tasbih/>

      
    </>

  )
}

export default App
