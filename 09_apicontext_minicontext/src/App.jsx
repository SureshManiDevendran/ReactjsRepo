import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
function App() {
  return (
    <>
      <UserContextProvider>
      <div>Api Context:- MiniContext</div>
      <Login/>
      <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
