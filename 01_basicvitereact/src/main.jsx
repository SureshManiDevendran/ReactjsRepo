import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return (
    <div><p>Custom App!!!!</p></div>
  )
}

/* Babel is a powerful JavaScript compiler 
that has become an indispensable tool for developers, 
especially those building React applications. 
At its core, Babel’s primary function is to transform cutting-edge 
JavaScript code into versions of JavaScript that 
can be interpreted by older browsers.  */

// https://github.com/facebook/react   (Github react file for understanding )
const reactElement=React.createElement('a',{href:'http://google.com',target:'_blank'},'Visit Google')
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // <React.StrictMode>
  //   {/* <MyApp/> 
  //   <App /> */}
   
  // </React.StrictMode>
)
