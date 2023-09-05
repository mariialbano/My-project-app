import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/menu'
import Rodape from './components/rodape'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
