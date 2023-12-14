import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//let counter=15

function App() {
  const [counter,setCounter] =useState(0)
  let addValue=()=>
  {
 // console.log('Value Added',Math.random())
  //counter++ // counter=counter+1  equal to  counter++
  //console.log("counter",counter)
  /* UseState always send all updates to variable or Ui in batches not one by one ,
   by this logic Setcounter always increment by one 
  */
   setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1)
 
   /* Setter Mehod have callback function internally ,So it will give previous values,so above will deal 
    diffrently rather than batch ,one of interview questions 
   */
  //  setCounter((prevCount)=>prevCount+1);
  //  setCounter((prevCount)=>prevCount+1);
  //  setCounter((prevCount)=>prevCount+1);
  //  setCounter((prevCount)=>prevCount+1);

   //console.log(setCounter((prevCount)=>prevCount+1));
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
