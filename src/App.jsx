import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Landing from './Landing/Landing'
import About from './About/About'
import Home from './intro'
import Skills from './Skills/skills'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    </>
  )
}

export default App
