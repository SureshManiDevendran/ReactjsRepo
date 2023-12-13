import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//let counter=15

function App() {
  let [counter,setCounter] =useState(0)
  let addValue=()=>
  {
 // console.log('Value Added',Math.random())
  //counter++ // counter=counter+1  equal to  counter++
  //console.log("counter",counter)
  setCounter(counter+1)
  }

  let removeValue=()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <div>
        <h1>Sample Counter Application</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add Value : {counter}</button>
        <br/>
        <button onClick={removeValue} >Decrease Value : {counter}</button>

      </div>
    </>
  )
}

export default App
