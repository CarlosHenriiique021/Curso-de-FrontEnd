import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MinhaImagem from "./components/MinhaImagem"
import MinhaTabela from "./components/MinhaTabela"
import MudarImagem from './components/MudarImagem'
import Calculadora from './components/calculadora'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculadora/>
 
    </>
  )
}

export default App
