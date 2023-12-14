import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const countryObj={name:"Indiaobj" ,pin:400022}
  const arry=[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-none mb-4' >Tailwind Test AV</h1>
     <Card userName='Arasi' someObj={countryObj} someArr={arry} btnText="clickMe" />
     <Card userName='VetriMaaran'/>

    </>
  )
}

export default App
